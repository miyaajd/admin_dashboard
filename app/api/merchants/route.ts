import { NextResponse } from "next/server";
import { merchants } from "@/mock/data";

export function GET() {
  return NextResponse.json(merchants);
}