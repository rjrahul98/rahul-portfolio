import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decor (Subtle Gradients) */}
      <div className="absolute top-20 right-0 -z-10 opacity-20 dark:opacity-10 blur-3xl">
        <div className="w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>
      <div className="absolute top-40 left-20 -z-10 opacity-20 dark:opacity-10 blur-3xl">
        <div className="w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl space-y-8">
        {/* Intro Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-sm font-medium text-slate-600 dark:text-slate-400">
          <span className="flex w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Open to work & collaboration
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Building Scalable SaaS &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            GenAI Workflows
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Hi, I'm{" "}
          <strong className="text-slate-900 dark:text-slate-200">Rahul</strong>.
          A Senior Frontend Engineer specializing in{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            React Architecture
          </span>
          , real-time editors, and performance optimization. Currently building
          B2B SaaS products at <span className="font-semibold">Pibit.ai</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="#projects"
            className="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-slate-900 transition-all bg-transparent border border-slate-200 rounded-lg hover:bg-slate-50 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800"
          >
            Contact Me
          </Link>
        </div>

        {/* Tech Stack Marquee (Static for now) */}
        <div className="pt-8">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
            Core Stack
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-400 dark:text-slate-500 font-mono text-sm">
            <span>React / Next.js 15+</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>Node.js</span>
            <span>AWS</span>
            <span>GenAI / LLMs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
