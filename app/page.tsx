import { Footer, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <main className="mt-14 lg:mt-28">
        <Hero />
      </main>
      <footer className="mt-14 lg:mt-28">
        <Footer />
      </footer>
    </>
  );
}