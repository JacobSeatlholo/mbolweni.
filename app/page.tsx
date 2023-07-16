import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="bg-background bg-cover bg-no-repeat">
      <NavBar />
      <HeroSection />
      <Footer />
    </main>
  );
}
