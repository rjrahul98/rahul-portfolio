// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative flex flex-col justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       {/* Background Decor (Subtle Gradients) */}
//       <div className="absolute top-20 right-0 -z-10 opacity-20 dark:opacity-10 blur-3xl">
//         <div className="w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
//       </div>
//       <div className="absolute top-40 left-20 -z-10 opacity-20 dark:opacity-10 blur-3xl">
//         <div className="w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
//       </div>

//       <div className="max-w-4xl space-y-8">
//         {/* Intro Badge */}
//         <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-sm font-medium text-slate-600 dark:text-slate-400">
//           <span className="flex w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
//           Open to work & collaboration
//         </div>

//         {/* Main Headline */}
//         <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
//           Building Scalable SaaS &{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//             GenAI Workflows
//           </span>
//         </h1>

//         {/* Subtext */}
//         <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
//           Hi, I'm{" "}
//           <strong className="text-slate-900 dark:text-slate-200">Rahul</strong>.
//           A Senior Frontend Engineer specializing in{" "}
//           <span className="text-indigo-600 dark:text-indigo-400">
//             React Architecture
//           </span>
//           , real-time editors, and performance optimization. Currently building
//           B2B SaaS products at <span className="font-semibold">Pibit.ai</span>.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 pt-4">
//           <Link
//             href="#projects"
//             className="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 hover:shadow-lg hover:-translate-y-0.5"
//           >
//             View My Work
//           </Link>
//           <Link
//             href="#contact"
//             className="inline-flex justify-center items-center px-6 py-3 text-base font-semibold text-slate-900 transition-all bg-transparent border border-slate-200 rounded-lg hover:bg-slate-50 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800"
//           >
//             Contact Me
//           </Link>
//         </div>

//         {/* Tech Stack Marquee (Static for now) */}
//         <div className="pt-8">
//           <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
//             Core Stack
//           </p>
//           <div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-400 dark:text-slate-500 font-mono text-sm">
//             <span>React / Next.js 15+</span>
//             <span>TypeScript</span>
//             <span>Tailwind CSS</span>
//             <span>Node.js</span>
//             <span>AWS</span>
//             <span>GenAI / LLMs</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* --- Background Elements --- */}
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-grid-slate-200 bg-[length:20px_20px] opacity-40"></div>

      {/* 2. Gradient Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-400/20 to-cyan-400/20 blur-3xl"></div>

      {/* --- Main Content --- */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium mb-6 animate-fade-in-up">
            <span className="flex w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            Available for new projects
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              experiences
            </span>{" "}
            that matter.
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-xl text-slate-600 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
            Hi, I'm <span className="font-bold text-slate-800">Rahul</span>. I’m
            a Full Stack Developer building accessible, pixel-perfect, and
            performant web applications with Next.js and Tailwind.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-slate-900 text-white text-base font-bold rounded-xl shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              View My Work
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 text-base font-bold rounded-xl shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Download CV
            </button>
          </div>
        </div>

        {/* Right: Visual (Code Window Mockup) */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative perspective-1000">
          {/* The Tilt Container */}
          <div className="relative transform md:rotate-y-12 hover:rotate-0 transition-transform duration-500 ease-out">
            {/* Window Frame */}
            <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
              {/* Window Header */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-400 font-mono">
                  Profile.tsx
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 space-y-4 font-mono text-sm leading-relaxed">
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    1
                  </span>
                  <p className="text-purple-400">
                    const <span className="text-yellow-300">Developer</span> ={" "}
                    <span className="text-blue-400">{`{`}</span>
                  </p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    2
                  </span>
                  <p className="text-slate-300 pl-4">
                    name: <span className="text-green-400">"Rahul"</span>,
                  </p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    3
                  </span>
                  <p className="text-slate-300 pl-4">
                    role:{" "}
                    <span className="text-green-400">
                      "Full Stack Engineer"
                    </span>
                    ,
                  </p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    4
                  </span>
                  <p className="text-slate-300 pl-4">
                    skills: <span className="text-blue-400">[</span>
                  </p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    5
                  </span>
                  <p className="text-slate-300 pl-8">
                    <span className="text-green-400">"React"</span>,{" "}
                    <span className="text-green-400">"Next.js"</span>,{" "}
                    <span className="text-green-400">"Tailwind"</span>
                  </p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    6
                  </span>
                  <p className="text-blue-400 pl-4">],</p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    7
                  </span>
                  <p className="text-slate-300 pl-4">
                    hardWorker: <span className="text-red-400">true</span>,
                  </p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    8
                  </span>
                  <p className="text-slate-300 pl-4">
                    coffeeLover: <span className="text-red-400">true</span>
                  </p>
                </div>
                <div className="flex">
                  <span className="text-slate-500 w-6 text-right mr-4 select-none">
                    9
                  </span>
                  <p className="text-blue-400">{`}`};</p>
                </div>
              </div>
            </div>

            {/* Decoration Behind Window */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-blue-600/20 rounded-xl blur-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
