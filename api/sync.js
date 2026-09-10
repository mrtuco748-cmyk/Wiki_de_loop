export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  if(req.method==='OPTIONS') return res.status(200).end();
  const SUPABASE_URL='https://ekabsuqctklmbnpefowc.supabase.co';
  const KEY=process.env.SUPABASE_ANON_KEY || 'sb_publishable_Ku3yWdzyLQJy1G8gGHJK4A_VE_gCGtQ';
  const table=req.query.table;
  if(!table) return res.status(400).json({error:'missing table'});
  const url=`${SUPABASE_URL}/rest/v1/${table}`;
  const headers={ apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type':'application/json', Prefer:'return=representation' };
  try{
    let r;
    if(req.method==='GET'){ r=await fetch(url,{headers}); }
    else if(req.method==='POST'){ r=await fetch(url,{method:'POST',headers,body:JSON.stringify(req.body)}); }
    else if(req.method==='DELETE'){ r=await fetch(url+'?id=neq.00000000-0000-0000-0000-000000000000',{method:'DELETE',headers}); }
    const text=await r.text();
    res.status(r.status).send(text);
  }catch(e){ res.status(500).json({error:e.message}); }
}
