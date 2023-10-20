import { useState } from "react";
import { currentUserStore } from "../store";
import { BsChevronDoubleRight } from "react-icons/bs";
import Table from "./table";
import { useRouter } from "next/navigation";

export default function Header() {
  const { current } = currentUserStore();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { push, back } = useRouter();
  const menuItems = [
    "Account Information",
    "My Whislist",
    "Change Password",
    "Log Out",
  ];
  if (current?.email === "") {
    back();
  }
  const handleLogout = () => {
    push("/login");
  };
  return (
    <section
      className={`h-full w-screen rounded bg-transparent p-20 text-2xl text-light`}
    >
      <div className={`bg-theme4/75 flex h-full w-full flex-col rounded`}>
        <header
          className={`border-theme5 flex h-40 items-center border-b-2 px-10 text-5xl`}
        >
          Hello {current?.firstName || "Example"}
        </header>
        <section className={`flex h-full w-full`}>
          <ul
            className={`divide-theme5 flex w-1/4 flex-col justify-between divide-y-2`}
          >
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`flex h-1/4 items-center justify-between px-10 transition hover:bg-black/25`}
                onClick={() => {
                  setActiveIndex(index);
                  if (index === 3) {
                    handleLogout();
                  }
                }}
              >
                {item}
                {index === activeIndex && index !== 3 && (
                  <BsChevronDoubleRight />
                )}
              </button>
            ))}
          </ul>
          <section className={`border-theme5 w-3/4 border-l-2`}>
            <Table />
          </section>
        </section>
      </div>
    </section>
  );
}
