import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      product: "Stylus notebook",
    },
    {
      id: 2,
      product: "Shamut notebook",
    },
    {
      id: 3,
      product: "Sesughun notebook",
    },
  ]);
}
