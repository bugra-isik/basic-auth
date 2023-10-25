import axios from "axios";
import isValidEmail from "../../utils/emailRegex";
import { currentUserStore, useStore } from "@/app/store";
import { useCallback, useEffect, useState } from "react";
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
  const { push, refresh } = useRouter();
  const { loginEmail, loginPassword } = value;

  const postRequest = useCallback(async () => {
    setSpinner(true);
    await axios
      .post("/api/login", {
        email: loginEmail,
        password: loginPassword,
      })
      .then((e) => {
        if (e.data.res.data) {
          setCurrent(e.data.res.data);
          push("/user");
        }
        if (e.data.login == false) {
          setCurrent(null);
          alert("Email or password incorrect");
        }
        setSpinner(false);
      })
      .catch(() => console.log(loginEmail, loginPassword))
      .catch((e) => console.error(e));
  }, [loginEmail, loginPassword, push, setCurrent]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        emailInput &&
        emailValidation &&
        loginPassword
      ) {
        postRequest();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [emailInput, emailValidation, loginPassword, postRequest]);

  return (
    <button
      className={`mt-5 w-full rounded bg-theme1 py-2 text-3xl text-light transition-colors duration-300 hover:bg-theme1/75 sm:h-20 md:h-28 lg:h-auto`}
      onClick={() => postRequest()}
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
