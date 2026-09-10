// Supabase client — usar con <script type="module">
// Requiere SUPABASE_URL y SUPABASE_ANON_KEY (publishable key)
// No exponer secret key en frontend — solo anon/publishable

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://hkvwczecoeqmgrqpyxme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdndjemVjb2VxbWdycXB5eG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMzU4NDAsImV4cCI6MjEwNDYxMTg0MH0.9_HheUQwM1_SSj56BT4DGSg7jv0ZFBllv5MbK89so6Q';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helpers sync: guardar local + nube cuando hay conexión
export async function syncToCloud(table, data) {
  if (!navigator.onLine) return { offline: true };
  const { error } = await supabase.from(table).upsert(data);
  return { error };
}
