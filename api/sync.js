export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  if(req.method==='OPTIONS') return res.status(200).end();
  const SUPABASE_URL=process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hkvwczecoeqmgrqpyxme.supabase.co';
  const KEY=process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdndjemVjb2VxbWdycXB5eG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMzU4NDAsImV4cCI6MjEwNDYxMTg0MH0.9_HheUQwM1_SSj56BT4DGSg7jv0ZFBllv5MbK89so6Q';
  const table=req.query.table;
  if(!table) return res.status(400).json({error:'missing table'});
  const url=`${SUPABASE_URL}/rest/v1/${table}`;
  const headers={ apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type':'application/json', Prefer:'return=representation' };
  try{
    let r;
    if(req.method==='GET'){ r=await fetch(url,{headers}); }
    else if(req.method==='POST'){ r=await fetch(url,{method:'POST',headers,body:JSON.stringify(req.body)}); }
    else if(req.method==='DELETE'){ r=await fetch(url+'?id=neq.00000000-0000-0000-0000-000000000000',{method:'DELETE',headers}); }
    else return res.status(405).json({error:'method not allowed'});
    const text=await r.text();
    if(!r.ok) return res.status(r.status).json({error:text, url, keyPrefix: KEY.slice(0,10)});
    res.status(r.status).send(text);
  }catch(e){ res.status(500).json({error:'fetch failed: '+e.message, cause: String(e.cause||''), url, keyPrefix: KEY.slice(0,10)}); }
}
