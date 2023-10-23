import { useRouter } from "next/navigation";
import { currentUserStore, useStore } from "../store";
import { Ref } from "react";
import { motion } from "framer-motion";

export default function ExitLabel({
  exitRef,
  setIsOpen,
}: {
  exitRef: Ref<any>;
  setIsOpen: (e: boolean) => void;
}) {
  const { setCurrent } = currentUserStore();
  const { push } = useRouter();

  const handleLogOut = () => {
    push("/login");
    setCurrent(null);
  };

  return (
    <motion.main
      ref={exitRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`absolute inset-0 flex select-none items-center justify-center`}
    >
      <div
        className={`z-50 h-screen w-screen bg-black/25`}
        onClick={(e) => setIsOpen(false)}
      />
      <motion.section
        className={`absolute z-50 flex h-40 w-80 flex-col items-center justify-between bg-theme4 py-7 drop-shadow-2xl`}
      >
        <div>Log out?</div>
        <div className={`flex gap-x-14`}>
          <button
            onClick={(e) => handleLogOut()}
            className={`flex h-10 w-20 items-center justify-center rounded bg-theme5 transition-colors hover:bg-theme5/75`}
          >
            Yes
          </button>
          <button
            className={`flex h-10 w-20 items-center justify-center rounded bg-theme5 transition-colors hover:bg-theme5/75`}
            onClick={() => setIsOpen(false)}
          >
            No
          </button>
        </div>
      </motion.section>
    </motion.main>
  );
}
