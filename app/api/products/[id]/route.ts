import { NextResponse } from 'next/server';
import json from '../data.json';

export const dynamic = 'force-dynamic';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const data = json.find((item) => item.id === params.id);
  return NextResponse.json({ data, success: true });
}
