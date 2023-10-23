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
    <main
      id="body"
      className={`flex h-screen w-screen text-white/75 lg:items-center lg:justify-end lg:pr-20 xl:pr-28 2xl:pr-40`}
    >
      <section
        className={`flex h-screen w-full flex-col justify-between
        rounded border-white bg-white/5 px-5 py-10 backdrop-blur-3xl sm:py-20 lg:h-2/3 lg:w-80 lg:py-5 xl:w-96 xl:py-5`}
      >
        <h1 className={`text-center font-bold text-5xl sm:text-6xl md:text-7xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:mb-4 xl:mb-5`}>
          Create an Account
        </h1>
        <RegisterInputs setCheckPassword={setCheckPassword} />
        <RegisterButton checkPassword={checkPassword} />
        <p className={`sm:text-3xl md:text-4xl mt-5 lg:text-xs xl:text-sm 2xl:text-base`}>
          Already have an account?{" "}
          <Link
            href={"/login"}
            className={`font-bold text-theme3 transition hover:text-theme3/75`}
            onClick={() => setBody("login")}
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
