import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import GameArcade from "@/components/game-arcade/GameArcade";
import Hero from "@/components/hero/Hero";
import Hero3D from "@/components/hero/Hero3D";
import HeroCrystal from "@/components/hero/HeroCrystal";
import HeroFluid from "@/components/hero/HeroFluid";
import HeroGeometric from "@/components/hero/HeroGeometric";
import HeroWarp from "@/components/hero/HeroWarp";
import Footer from "@/components/layout/Footer";
import Play from "@/components/play/Play";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-indigo-500 selection:text-white">
      {/* <Hero /> */}
      {/* <Hero3D /> */}
      {/* <HeroGeometric /> */}
      {/* <HeroWarp /> */}
      {/* <HeroFluid /> */}
      <HeroCrystal />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Play />
      {/* <GameArcade /> */}
      <Contact />
    </main>
  );
}
