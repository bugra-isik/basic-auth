import { useStore } from "@/app/store";
import TogglePassword from "@/ui/togglePassword";
import {
  AiOutlineLock,
  AiOutlineMail,
  AiFillExclamationCircle,
  AiFillEye,
} from "react-icons/ai";

type LoginInputsProps = {
  value: {
    setLoginEmail: (email: string) => void;
    setLoginPassword: (password: string) => void;
  };
};

export default function LoginInputs({ value }: LoginInputsProps) {
  const {
    passwordVisibility,
    setEmailInput,
    emailValidation,
    setPasswordInput,
    setPasswordVisibility,
  } = useStore();
  const inputTW =
    "grow rounded bg-dark/10 py-2 pl-7 sm:pl-14 outline-none placeholder:text-light/50 focus:outline-theme3 sm:h-20 md:pl-16 sm:text-4xl md:text-5xl lg:h-auto lg:pl-7 lg:text-base";
  const iconTW =
    "absolute left-1 h-full text-light/50 sm:text-4xl md:text-5xl lg:text-xl";

  const { setLoginEmail, setLoginPassword } = value;

  return (
    <div className={`flex flex-col gap-y-10`}>
      <div>
        <span className={`relative flex items-center `}>
          <AiOutlineMail className={iconTW} />
          <input
            type="text"
            placeholder="Email"
            className={inputTW}
            onChange={(e) => {
              setEmailInput(e.currentTarget.value),
                setLoginEmail(e.currentTarget.value);
            }}
          />
        </span>
        <div
          className={`absolute items-center gap-x-1  text-red-600 ${
            emailValidation ? "hidden" : "flex"
          }`}
        >
          <AiFillExclamationCircle />
          <p className={``}>Invalid Email adress</p>
        </div>
      </div>

      <span className={`relative flex items-center `}>
        <AiOutlineLock className={iconTW} />
        <input
          type={passwordVisibility ? "text" : "password"}
          placeholder="Password"
          className={inputTW}
          onChange={(e) => {
            setPasswordInput(e.currentTarget.value),
              setLoginPassword(e.currentTarget.value);
          }}
        />
        <div
          className={`absolute right-2 cursor-pointer text-light transition hover:scale-105 sm:text-4xl md:text-5xl lg:text-xl`}
          onClick={() => setPasswordVisibility(undefined)}
        >
          <AiFillEye />
        </div>
      </span>
    </div>
  );
}
