import { useStore } from "@/app/store";
import { AiFillEye } from "react-icons/ai";

export default function TogglePassword() {
  const { setPasswordVisibility } = useStore();
  return (
    <div
      className={`absolute right-2 cursor-pointer text-light transition hover:scale-105 sm:text-4xl md:text-5xl lg:text-xl`}
      onClick={() => setPasswordVisibility(undefined)}
    >
      <AiFillEye />
    </div>
  );
}
