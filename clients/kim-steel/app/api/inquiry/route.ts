import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = "https://jxmnupmwfcdeyguajkar.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, company, message } = body;

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/sitely_kim_steel_inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ name, phone, company, message }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "DB 저장 실패" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
