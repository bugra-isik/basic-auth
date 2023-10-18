"use client";
import { currentUserStore } from "../store";

export default function Home() {
  const { current } = currentUserStore();

  return (
    <>
      <pre>{JSON.stringify(current, null, 4)}</pre>
    </>
  );
}
