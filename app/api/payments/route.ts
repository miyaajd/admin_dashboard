import { NextResponse } from "next/server";
import { payments } from "@/mock/data";

export function GET() {
  return NextResponse.json(payments);
}