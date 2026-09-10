-- Wiki_de_loop — Supabase schema
-- Ejecutar en SQL Editor de Supabase (Dashboard → SQL Editor)

-- Personajes
create table if not exists personajes (
  id text primary key,
  name text not null,
  emoji text default '🧍',
  role text,
  type text check (type in ('principal','secundario')) default 'secundario',
  info text,
  name_origin text,
  story text,
  powers text,
  images jsonb default '[null,null,null]'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Clanes
create table if not exists clanes (
  id uuid primary key default gen_random_uuid(),
  symbol text default '✦',
  name text not null,
  description text,
  created_at timestamptz default now()
);

-- Técnicas
create table if not exists tecnicas (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner text,
  description text,
  created_at timestamptz default now()
);

-- Historia
create table if not exists historia_eventos (
  id uuid primary key default gen_random_uuid(),
  era text,
  title text not null,
  body text,
  orden int default 0,
  created_at timestamptz default now()
);

-- Tramas
create table if not exists tramas (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  created_at timestamptz default now()
);

-- Ideas
create table if not exists ideas (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  created_at timestamptz default now()
);

-- Accesorios (FK personaje)
create table if not exists accesorios (
  id uuid primary key default gen_random_uuid(),
  personaje_id text references personajes(id) on delete cascade,
  icon text,
  name text,
  description text
);

-- Hotspots por vista (0=frontal,1=lateral,2=posterior)
create table if not exists hotspots (
  id uuid primary key default gen_random_uuid(),
  personaje_id text references personajes(id) on delete cascade,
  view_index int check (view_index in (0,1,2)),
  x numeric, y numeric,
  emoji text,
  title text,
  description text
);

-- Árbol habilidades (estructura árbol con parent)
create table if not exists skill_nodes (
  id text primary key,
  personaje_id text references personajes(id) on delete cascade,
  parent_id text references skill_nodes(id) on delete cascade,
  name text not null,
  description text,
  x numeric,
  y numeric,
  created_at timestamptz default now()
);

-- RLS: abrir lectura/escritura anónima para prototipo (ajustar después con auth)
alter table personajes enable row level security;
alter table clanes enable row level security;
alter table tecnicas enable row level security;
alter table historia_eventos enable row level security;
alter table tramas enable row level security;
alter table ideas enable row level security;
alter table accesorios enable row level security;
alter table hotspots enable row level security;
alter table skill_nodes enable row level security;

do $$ begin
  create policy "public all personajes" on personajes for all using (true) with check (true);
exception when duplicate_object then null; end $$;
do $$ begin create policy "public all clanes" on clanes for all using (true) with check (true); exception when duplicate_object then null; end $$;
do $$ begin create policy "public all tecnicas" on tecnicas for all using (true) with check (true); exception when duplicate_object then null; end $$;
do $$ begin create policy "public all historia" on historia_eventos for all using (true) with check (true); exception when duplicate_object then null; end $$;
do $$ begin create policy "public all tramas" on tramas for all using (true) with check (true); exception when duplicate_object then null; end $$;
do $$ begin create policy "public all ideas" on ideas for all using (true) with check (true); exception when duplicate_object then null; end $$;
do $$ begin create policy "public all accesorios" on accesorios for all using (true) with check (true); exception when duplicate_object then null; end $$;
do $$ begin create policy "public all hotspots" on hotspots for all using (true) with check (true); exception when duplicate_object then null; end $$;
do $$ begin create policy "public all skills" on skill_nodes for all using (true) with check (true); exception when duplicate_object then null; end $$;

-- Seed opcional: migrar datos actuales (ejecutar tras crear tablas si querés)
