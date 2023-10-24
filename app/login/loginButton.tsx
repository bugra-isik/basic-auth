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

  let config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const postRequest = async () => {
    setSpinner(true);
    await axios
      .post(
        "/api/login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        config,
      )
      .then((e) => {
        if (e.data && e.data.userState) {
          setCurrent(e.data.res.data);
          push("/user");
        }
        setSpinner(e?.data?.userState);
        console.log(e.data);
      })
      .catch((e) => console.error(e));
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
      className={`mt-5 w-full rounded bg-theme1 py-2 text-3xl text-light transition-colors duration-300 hover:bg-theme1/75 sm:h-20 md:h-28 lg:h-auto`}
      onClick={() => {
        setPasswordVisibility(false),
          setEmailValidation(isValidEmail(emailInput)),
          emailInput !== "" &&
            emailValidation &&
            loginPassword !== "" &&
            postRequest();
      }}
    >
      <p
        className={`relative flex items-center justify-center md:text-5xl lg:text-base`}
      >
        Login{" "}
        <span className={`absolute right-5 ml-5 animate-spin`}>
          {spinner && <ImSpinner11 />}
        </span>
      </p>
    </button>
  );
}
