import { useRouter } from "next/navigation";
import { currentUserStore, useStore } from "../store";
import { useClickAway } from "@uidotdev/usehooks";
import { Ref, forwardRef, useState } from "react";
import { motion } from "framer-motion";

export default function ExitLabel({
  exitRef,
  setIsOpen,
  isOpen,
}: {
  exitRef: Ref<any>;
  setIsOpen: (e: boolean) => void;
  isOpen: boolean;
}) {
  const { current, setCurrent } = currentUserStore();
  const { setExitPanel } = useStore();
  const { push } = useRouter();

  const handleLogOut = () => {
    push("/login");
    setCurrent(null);
  };

  const handleOpenModal = () => {
    if (isOpen === true) {
      setIsOpen(true);
    }
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
        className={`absolute z-50 flex h-40 w-80 flex-col items-center justify-between bg-theme4 drop-shadow-2xl py-7`}
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
