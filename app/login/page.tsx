"use client";

import { useStore } from "@/app/store";
import LoginInputs from "./loginInputs";
import { useState } from "react";
import LoginButton from "./loginButton";
import Link from "next/link";

export default function LoginBody() {
  const { setBody, setPasswordVisibility } = useStore();

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  return (
    <div
      id="body"
      className={`flex h-screen w-screen items-center justify-end text-white/75`}
    >
      <div
        className={`flex flex-col justify-between rounded border-white bg-white/5 px-5 pt-10 backdrop-blur-3xl 2xl:mr-40 2xl:h-2/3 2xl:w-1/5`}
      >
        <div className={`flex flex-col gap-10`}>
          <h1 className={`text-center text-6xl font-bold`}>Welcome!</h1>
          <div className={`flex flex-col gap-y-5`}>
            <LoginInputs value={{ setLoginEmail, setLoginPassword }} />
            <button
              className={`self-start text-light/75 underline transition hover:text-light`}
            >
              Forgot your password?
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-y-5`}>
          <LoginButton value={{ loginEmail, loginPassword }} />
          <p>
            Don&apos;t have an account yet?{" "}
            <Link
              href={"/register"}
              className={`font-bold text-theme3 transition hover:text-theme3/75`}
              onClick={() => {
                setBody("register"), setPasswordVisibility(false);
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
