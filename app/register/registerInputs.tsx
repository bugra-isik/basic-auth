import { useStore } from "@/app/store";
import TogglePassword from "../../ui/togglePassword";
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
    "h-10 grow rounded bg-dark/10 py-2 pl-10 outline-none placeholder:text-light/50 focus:outline-theme3 sm:h-20 sm:pl-16 sm:text-4xl md:pl-20 md:text-4xl lg:h-5 lg:pl-8 lg:text-xs xl:h-8 xl:text-base 2xl:h-auto 2xl:pl-10";
  const iconTW =
    "absolute left-1 h-full text-2xl text-light/50 sm:text-4xl md:text-5xl lg:text-xl";

  return (
    <div className={`flex flex-col gap-y-4 sm:gap-y-5 lg:gap-y-4 xl:gap-y-5`}>
      <span className={`relative flex items-center`}>
        <AiOutlineUser className={iconTW} />
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
        <AiOutlineUser className={iconTW} />
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
        <AiOutlineMail className={iconTW} />
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
        <AiOutlineLock className={iconTW} />
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
        <AiOutlineLock className={iconTW} />
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
          className={`cursor-cell accent-theme3 sm:w-12 md:w-14 lg:w-8`}
          type="checkbox"
          name="Check"
          checked={checkbox}
          onChange={() => setCheckbox()}
        />
        <p
          className={`self-start text-sm text-light/75 underline transition hover:text-light sm:mt-10 sm:text-xl md:text-2xl lg:mt-0 lg:text-xs xl:text-xs`}
        >
          By creating an account, you agree to our{" "}
          <span className={`cursor-help underline hover:text-light`}>
            Terms of Use
          </span>{" "}
          &{" "}
          <span className={`cursor-help underline hover:text-light`}>
            Privacy Notice
          </span>
          .
        </p>
      </div>
    </div>
  );
}
