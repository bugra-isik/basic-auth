"use client";

import LoginBody from "@/components/loginBody";
import { useStore } from "./store";
import RegisterBody from "@/components/registerBody";
import mongoose from "mongoose";
import connectMongoDB from "@/config/dbConn";

export default function Home() {

  
  const { body } = useStore();
    
  return (
    <div
      id="body"
      className={`flex h-screen w-screen items-center justify-end text-white`}
    >
      {body == "login" && <LoginBody />}
      {body == "register" && <RegisterBody />}
    </div>
  );
}
