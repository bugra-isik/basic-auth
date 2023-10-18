import { useStore } from "@/app/store";
import { AiFillEye } from "react-icons/ai";

export default function TogglePassword() {
  const { setPasswordVisibility } = useStore();
  return (
    <div
      className={`absolute right-2 cursor-pointer text-xl text-dark transition hover:scale-105`}
      onClick={() => setPasswordVisibility(undefined)}
    >
      <AiFillEye />
    </div>
  );
}
