import axios from "axios";

import isValidEmail from "../../utils/emailRegex";
import { currentUserStore, useStore } from "@/app/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ImSpinner11 } from "react-icons/im";

type LoginProps = {
  value: {
    loginEmail: string;
    loginPassword: string;
  };
};

export default function LoginButton({ value }: LoginProps) {
  const {
    setPasswordVisibility,
    emailInput,
    emailValidation,
    setEmailValidation,
  } = useStore();
  const { setCurrent, current } = currentUserStore();
  const [spinner, setSpinner] = useState<boolean>(false);
  const { push } = useRouter();
  const { loginEmail, loginPassword } = value;

  const postRequest = async () => {
    setSpinner(true);
    try {
      const postRequest = await axios.post("/api/login", {
        email: loginEmail,
        password: loginPassword,
      });
      if (postRequest.data && postRequest.data.userState) {
        setCurrent(postRequest.data.res.data);
        push("/user");
      }
      setSpinner(postRequest?.data?.userState);
    } catch (error) {}
  };

  useEffect(() => {
    addEventListener(
      "keypress",
      (e) =>
        e.key === "Enter" &&
        emailInput !== "" &&
        emailValidation &&
        loginPassword !== "" &&
        postRequest(),
    );
  });

  return (
    <button
      className={`mt-5 sm:h-20 md:h-28 lg:h-auto w-full rounded bg-theme1 py-2 text-3xl text-light transition-colors duration-300 hover:bg-theme1/75`}
      onClick={() => {
        setPasswordVisibility(false),
          setEmailValidation(isValidEmail(emailInput)),
          emailInput !== "" &&
            emailValidation &&
            loginPassword !== "" &&
            postRequest();
      }}
    >
      <p className={`relative md:text-5xl lg:text-base flex items-center justify-center`}>
        Login{" "}
        <span className={`absolute right-5 ml-5 animate-spin`}>
          {spinner && <ImSpinner11 />}
        </span>
      </p>
    </button>
  );
}
