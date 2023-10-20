"use client";
import { currentUserStore } from "../store";
import Header from "./body";


export default function Home() {
  

  return (
    <main className={`overflow-hidden h-screen w-screen`}>
      <div
        id="body"
        className={`-z-10 fixed flex h-screen w-screen scale-110 items-center justify-end  text-white blur-lg`}
      />
      <Header/>
      
    </main>
  );
}
