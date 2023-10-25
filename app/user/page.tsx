import Header from "./header";

export default function Home() {
  return (
    <main className={`h-screen w-screen overflow-hidden`}>
      <div
        id="body"
        className={`fixed -z-10 flex h-screen w-screen scale-110 items-center justify-end  text-white blur-lg`}
      />
      <Header />
    </main>
  );
}
