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
    <main
      id="body"
      className={`flex h-screen w-screen text-white/75 lg:items-center lg:justify-end lg:pr-20 xl:pr-28 2xl:pr-40`}
    >
      <div
        className={`flex h-screen w-full flex-col justify-between
         rounded border-white bg-white/5 px-5 py-10 backdrop-blur-3xl sm:py-20 lg:h-2/3 lg:w-80 lg:py-5 xl:w-96 xl:py-10`}
      >
        <div className={`flex flex-col gap-20 sm:gap-40 lg:gap-10`}>
          <h1
            className={`text-center text-6xl font-bold sm:text-7xl md:text-8xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
          >
            Welcome!
          </h1>
          <div className={`flex flex-col gap-y-5`}>
            <LoginInputs value={{ setLoginEmail, setLoginPassword }} />
            <button
              className={`self-start text-sm text-light/75 underline transition hover:text-light sm:mt-10 sm:text-xl md:text-2xl lg:mt-0 lg:text-base`}
            >
              Forgot your password?
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-y-5`}>
          <LoginButton value={{ loginEmail, loginPassword }} />
          <p className={`sm:text-xl md:text-2xl lg:text-base`}>
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
    </main>
  );
}
