import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Hero3D from "@/components/hero/Hero3D";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-indigo-500 selection:text-white">
      {/* <Hero /> */}
      <Hero3D />
      <Projects />
      <Contact />
    </main>
  );
}
