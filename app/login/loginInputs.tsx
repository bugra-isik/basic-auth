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

  const { setLoginEmail, setLoginPassword } = value;

  return (
    <div className={`flex flex-col gap-y-10`}>
      <div>
        <span className={`relative flex items-center `}>
          <AiOutlineMail
            className={`absolute left-1 h-full text-xl text-light/50`}
          />
          <input
            type="text"
            placeholder="Email"
            className={`grow rounded bg-dark/10 py-2 pl-7 outline-none placeholder:text-light/50 focus:outline-theme3`}
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
        <AiOutlineLock
          className={`absolute left-1 h-full text-xl text-light/50`}
        />
        <input
          type={passwordVisibility ? "text" : "password"}
          placeholder="Password"
          className={`grow rounded bg-dark/10 py-2 pl-7 outline-none placeholder:text-light/50 focus:outline-theme3`}
          onChange={(e) => {
            setPasswordInput(e.currentTarget.value),
              setLoginPassword(e.currentTarget.value);
          }}
        />
        <div
          className={`absolute right-2 cursor-pointer text-xl text-light transition hover:scale-105`}
          onClick={() => setPasswordVisibility(undefined)}
        >
          <AiFillEye />
        </div>
      </span>
    </div>
  );
}
