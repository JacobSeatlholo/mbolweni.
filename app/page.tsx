"use client";

import { useState, useEffect } from "react";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import NavBar from "./components/navbar";

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-background bg-cover bg-no-repeat bg-center">
      <NavBar isTopOfPage={isTopOfPage} />
      <HeroSection />
      <Footer />
    </main>
  );
}
