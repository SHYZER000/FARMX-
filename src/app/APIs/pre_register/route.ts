import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/DB/DB';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const wallet_address = data.wallet_address;

  if (typeof wallet_address !== 'string') {
    return NextResponse.json({ message: "INVALID INPUT", code: 2007 });
  }

  const db = await connectToDatabase();

  try {
    await db.execute(
      "INSERT INTO farmx_waitlist (wallet_address) VALUES (?)",
      [wallet_address]
    );
    return NextResponse.json({
      message: "YOU REGISTERED FOR FARMX LAND AIRDROP",
      code: 2008
    });
  } catch (err:any) {
    return NextResponse.json({
      message: err.message || "Something went wrong",
      code: 2009
    });
  }
}
