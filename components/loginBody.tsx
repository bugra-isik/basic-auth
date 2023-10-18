import { useStore } from "@/app/store";
import Login from "./login";
import LoginInputs from "./loginInputs";
import { useState } from "react";

export default function LoginBody() {
  const { setBody, setPasswordVisibility } = useStore();

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  return (
    <div
      className={`flex flex-col justify-between rounded border-white bg-white/40 px-5 py-10 text-dark backdrop-blur-3xl 2xl:mr-40 2xl:h-2/3 2xl:w-1/5`}
    >
      <div className={`flex flex-col gap-10`}>
        <h1 className={`text-center text-6xl font-bold`}>Welcome!</h1>
        <div className={`flex flex-col gap-y-5`}>
          <LoginInputs value={{ setLoginEmail, setLoginPassword }} />
          <button
            className={`self-start text-dark/75 underline transition hover:text-dark`}
          >
            Forgot your password?
          </button>
        </div>
      </div>
      <div className={`flex flex-col gap-y-5`}>
        <Login value={{ loginEmail, loginPassword }} />
        <p>
          Don&apos;t have an account yet?{" "}
          <button
            className={`font-bold text-theme3 transition hover:text-theme3/75`}
            onClick={() => {
              setBody("register"), setPasswordVisibility(false);
            }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
