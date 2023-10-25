"use client";
import { useEffect, useState } from "react";
import { currentUserStore, useStore } from "../store";
import Table from "./table";
import { useRouter } from "next/navigation";
import Wishlist from "./wishlist";
import ChangePassword from "./changePassword";
import ExitLabel from "./exitButton";
import { AnimatePresence } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";

export default function Header() {
  const { exitPanel, setExitPanel } = useStore();
  const { current, setCurrent } = currentUserStore();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { push, back } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const myExitRef = useClickAway(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (current?.email === "") {
      back();
    }
  }, [current?.email, back]);

  const handleLogout = () => {
    setIsOpen(true);
  };

  const bodyItem = () => {
    switch (activeIndex) {
      case 0:
        return <Table />;
      case 1:
        return <Wishlist />;
      case 2:
        return <ChangePassword />;
      default:
        return <Table />;
    }
  };

  const menuItems = [
    "Account Information",
    "My Wishlist",
    "Change Password",
    "Log Out",
  ];

  return (
    <section
      className={`relative h-full w-screen rounded bg-transparent text-2xl text-light sm:p-20`}
    >
      <AnimatePresence>
        {isOpen && <ExitLabel setIsOpen={setIsOpen} exitRef={myExitRef} />}
      </AnimatePresence>
      <div className={`flex h-full w-full flex-col rounded bg-theme4/75`}>
        <header
          className={`flex h-40 items-center justify-center border-b-4 border-theme5 px-10 text-3xl 
           sm:border-b-2 sm:text-5xl md:text-6xl lg:justify-start lg:text-3xl xl:text-5xl 2xl:text-6xl capitalize`}
        >
          Hello {current?.firstName || "Example"}
        </header>
        <section
          className={`flex h-full w-full flex-col gap-20 lg:flex-row lg:gap-0`}
        >
          <ul
            className={`grid w-full grid-cols-2 divide-theme5 border-r 
            border-r-theme5 lg:flex lg:w-1/4 lg:flex-col lg:justify-between lg:divide-y`}
          >
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`flex h-20 items-center justify-center justify-items-center whitespace-nowrap
                text-lg transition hover:bg-black/25 focus:bg-black/25 sm:text-xl 
                md:text-2xl lg:h-1/4 lg:justify-between lg:px-10 lg:text-lg xl:text-xl 2xl:text-2xl`}
                onClick={() => {
                  setActiveIndex(index);
                  if (index === 3) {
                    handleLogout();
                  }
                }}
              >
                {item}
              </button>
            ))}
          </ul>
          <section className={`w-3/4 self-center`}>{bodyItem()}</section>
        </section>
      </div>
    </section>
  );
}
