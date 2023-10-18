import { useStore } from "@/app/store";
import isValidEmail from "../utils/emailRegex";
import Register from "./register";
import RegisterInputs from "./registerInputs";
import { useState } from "react";

export default function RegisterBody() {
  const { setBody } = useStore();

  const [checkPassword, setCheckPassword] = useState<string>("");

  return (
    <div
      className={`flex flex-col justify-between rounded border-white bg-white/40 px-5 text-dark 2xl:mr-40 2xl:h-2/3 2xl:w-1/5`}
    >
      <h1 className={`text-center text-5xl  font-black `}>Create an Account</h1>
      <RegisterInputs setCheckPassword={setCheckPassword}/>
      <Register checkPassword={checkPassword}/>
      <p className={`text-center`}>
        Already have an account?{" "}
        <button
          className={`font-bold text-theme3 transition hover:text-theme3/75`}
          onClick={() => setBody("login")}
        >
          Login
        </button>
      </p>
    </div>
  );
}
