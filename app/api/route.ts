import { NextResponse } from "next/server";
import connectMongoDB from "@/config/dbConn";

export const GET = async () => {
  await connectMongoDB();
  return NextResponse.json({
    method: "GET",
    status: await connectMongoDB(),
  });
};
