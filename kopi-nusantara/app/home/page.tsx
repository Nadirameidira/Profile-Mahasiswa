import type { JSX } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import ScrollTop from "@/components/ScrollTop";

export default function HomeKopi(): JSX.Element {
  return (
    <main>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Faq />
      <Contact />
      
      <footer className="footer">
        <p>&copy; 2026 Kopi Nusantara. Seluruh hak cipta dilindungi.</p>
      </footer>
      
      <ScrollTop />
    </main>
  );
}