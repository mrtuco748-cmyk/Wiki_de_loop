// Supabase client — usar con <script type="module">
// Requiere SUPABASE_URL y SUPABASE_ANON_KEY (publishable key)
// No exponer secret key en frontend — solo anon/publishable

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://ekabsuqctklmbnpefowc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Ku3yWdzyLQJy1G8gGHJK4A_VE_gCGtQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helpers sync: guardar local + nube cuando hay conexión
export async function syncToCloud(table, data) {
  if (!navigator.onLine) return { offline: true };
  const { error } = await supabase.from(table).upsert(data);
  return { error };
}
