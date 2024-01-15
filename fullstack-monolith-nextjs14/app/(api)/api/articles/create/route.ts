import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const response = {
    result: "success",
    message: "article created",
  };

  return NextResponse.json(response);
}
