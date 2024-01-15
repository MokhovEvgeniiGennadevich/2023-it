import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const requestData = await request.json();

  // Response
  return NextResponse.json({
    result: "success",
    data: {
      title: requestData.title,
      content: requestData.content,
    },
  });
}
