import { NextResponse } from "next/server";
import connectMongoDB from "@/config/dbConn";

export async function GET(req: Request) {
  await connectMongoDB();
  return NextResponse.json({
    method: "GET",
    status: await connectMongoDB(),
  });
}
