"use client";

import { useState, useEffect } from "react";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import NavBar from "./components/navbar";
import BusinessCard from "./components/business-card";

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [showInput, setShowInput] = useState<boolean>(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;
      setShowInput(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowInput]);

  return (
    <main className="bg-background bg-cover bg-no-repeat bg-center bg-fixed">
      <NavBar isTopOfPage={isTopOfPage} showInput={showInput} />
      <HeroSection />
      <BusinessCard />
      <Footer />
    </main>
  );
}
