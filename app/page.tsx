"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push("/login");
  }, [push]);

  return (
    <div
      id="body"
      className={`flex h-screen w-screen items-center justify-end text-white`}
    ></div>
  );
}
