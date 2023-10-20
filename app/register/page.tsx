"use client";

import { useStore } from "@/app/store";
import isValidEmail from "../../utils/emailRegex";
import RegisterInputs from "./registerInputs";
import { useState } from "react";
import RegisterButton from "./registerButton";
import Link from "next/link";

export default function RegisterBody() {
  const { setBody } = useStore();

  const [checkPassword, setCheckPassword] = useState<string>("");

  return (
    <div
      id="body"
      className={`flex h-screen w-screen items-center justify-end text-white`}
    >
      <div
        className={`flex flex-col justify-between rounded border-white bg-white/5 px-5 py-10 backdrop-blur-3xl 2xl:mr-40 2xl:h-2/3 2xl:w-1/5`}
      >
        <h1 className={`text-center text-5xl  font-black `}>
          Create an Account
        </h1>
        <RegisterInputs setCheckPassword={setCheckPassword} />
        <RegisterButton checkPassword={checkPassword} />
        <p className={`text-center`}>
          Already have an account?{" "}
          <Link
            href={"/login"}
            className={`font-bold text-theme3 transition hover:text-theme3/75`}
            onClick={() => setBody("login")}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
