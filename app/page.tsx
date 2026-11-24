import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
