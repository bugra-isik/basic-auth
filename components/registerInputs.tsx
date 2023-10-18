import { useStore } from "@/app/store";
import TogglePassword from "../ui/togglePassword";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function RegisterInputs({
  setCheckPassword,
}: {
  setCheckPassword: (password: string) => void;
}) {
  const {
    passwordVisibility,
    checkbox,
    setCheckbox,
    registerUser,
    setRegisterUser,
  } = useStore();

  const [usernameInput, setUsernameInput] = useState<string>();
  const [lastnameInput, setLastnameInput] = useState<string>();
  const [emailInput, setEmailInput] = useState<string>();
  const [password, setPassword] = useState<string>();

  useEffect(() => {
    usernameInput &&
      lastnameInput &&
      emailInput &&
      password &&
      setRegisterUser(usernameInput, lastnameInput, emailInput, password);
  }, [setRegisterUser, usernameInput, lastnameInput, emailInput, password]);

  const inputTW =
    "grow rounded bg-dark/10 py-2 pl-7 outline-none placeholder:text-dark/50 focus:outline-theme3";

  return (
    <div className={`flex flex-col gap-y-5`}>
      <span className={`relative flex items-center`}>
        <AiOutlineUser
          className={`absolute left-1 h-full text-xl text-dark/50`}
        />
        <input
          required
          type="text"
          placeholder="First Name"
          className={inputTW}
          onChange={(e) => {
            setUsernameInput(e.currentTarget.value.toLocaleLowerCase());
          }}
        />
      </span>
      <span className={`relative flex items-center`}>
        <AiOutlineUser
          className={`absolute left-1 h-full text-xl text-dark/50`}
        />
        <input
          required
          type="text"
          placeholder="Last Name"
          className={inputTW}
          onChange={(e) => {
            setLastnameInput(e.currentTarget.value.toLocaleLowerCase());
          }}
        />
      </span>
      <span className={`relative flex items-center`}>
        <AiOutlineMail
          className={`absolute left-1 h-full text-xl text-dark/50`}
        />
        <input
          required
          type="text"
          placeholder="Email"
          className={inputTW}
          onChange={(e) => {
            setEmailInput(e.currentTarget.value.toLocaleLowerCase());
          }}
        />
      </span>

      <span className={`relative flex items-center `}>
        <AiOutlineLock
          className={`absolute left-1 h-full text-xl text-dark/50`}
        />
        <input
          required
          type={passwordVisibility ? "text" : "password"}
          placeholder="Password"
          className={inputTW}
          onChange={(e) => {
            setPassword(e.currentTarget.value.toLocaleLowerCase());
          }}
        />
        <TogglePassword />
      </span>
      <span className={`relative flex items-center `}>
        <AiOutlineLock
          className={`absolute left-1 h-full text-xl text-dark/50`}
        />
        <input
          required
          type={passwordVisibility ? "text" : "password"}
          placeholder="Confirm Password"
          className={inputTW}
          onChange={(e) => {
            setCheckPassword(e.currentTarget.value.toLocaleLowerCase());
          }}
        />
        <TogglePassword />
      </span>
      <div className={`flex flex-row gap-x-5`}>
        <input
          className={`cursor-cell accent-theme3`}
          type="checkbox"
          name="Check"
          checked={checkbox}
          onChange={() => setCheckbox()}
        />
        <p className={`text-xs text-dark/75`}>
          By creating an account, you agree to our{" "}
          <span className={`cursor-help underline hover:text-dark`}>
            Terms of Use
          </span>{" "}
          &{" "}
          <span className={`cursor-help underline hover:text-dark`}>
            Privacy Notice
          </span>
          .
        </p>
      </div>
    </div>
  );
}
