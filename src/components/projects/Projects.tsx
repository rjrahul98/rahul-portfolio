// import { projects } from "@/data/portfolio";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//             Featured Engineering
//           </h2>
//           <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group relative p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
//             >
//               {/* Hover Glow Effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

//               <div className="relative z-10 flex flex-col h-full">
//                 {/* Header: Title & Metric */}
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
//                     {project.title}
//                   </h3>
//                   {project.metric && (
//                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
//                       {project.metric}
//                     </span>
//                   )}
//                 </div>

//                 {/* Description */}
//                 <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Footer: Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useRef, useState } from "react";
// import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

// // --- Sample Data (Matches your specific tech stack) ---
// const projects = [
//   {
//     id: 1,
//     title: "Neural Search Engine",
//     description:
//       "An NLP-powered semantic search tool that understands context over keywords. Built with Python and Vector DBs.",
//     tags: ["Python", "NLP", "React", "Vector DB"],
//     gradient: "from-blue-500 to-cyan-500",
//   },
//   {
//     id: 2,
//     title: "Algorithmic Crypto Trader",
//     description:
//       "Real-time dashboard visualizing high-frequency trading data using D3.js and WebSockets.",
//     tags: ["D3.js", "Next.js", "WebSockets", "Finance"],
//     gradient: "from-purple-500 to-pink-500",
//   },
//   {
//     id: 3,
//     title: "Generative Art Canvas",
//     description:
//       "A browser-based editor integrating Stable Diffusion for real-time AI image generation.",
//     tags: ["React", "Stable Diffusion", "Canvas API", "Three.js"],
//     gradient: "from-amber-400 to-orange-500",
//   },
//   {
//     id: 4,
//     title: "Cloud Infrastructure Manager",
//     description:
//       "Serverless dashboard to manage AWS Lambda functions with drag-and-drop orchestration.",
//     tags: ["AWS", "Terraform", "Vue.js", "Go"],
//     gradient: "from-emerald-400 to-teal-500",
//   },
// ];

// // --- The Spotlight Card Component ---
// const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   function handleMouseMove({
//     currentTarget,
//     clientX,
//     clientY,
//   }: React.MouseEvent) {
//     const { left, top } = currentTarget.getBoundingClientRect();
//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   return (
//     <div
//       className="group relative border border-white/10 bg-slate-900/50 overflow-hidden rounded-xl"
//       onMouseMove={handleMouseMove}
//     >
//       {/* 1. The Moving Spotlight Glow */}
//       <motion.div
//         className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
//         style={{
//           background: useMotionTemplate`
//             radial-gradient(
//               650px circle at ${mouseX}px ${mouseY}px,
//               rgba(255,255,255,0.1),
//               transparent 80%
//             )
//           `,
//         }}
//       />

//       {/* 2. Card Content Container */}
//       <div className="relative h-full flex flex-col">
//         {/* Visual Header (Gradient Placeholder) */}
//         <div
//           className={`h-48 w-full bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
//         />

//         <div className="p-8 flex-grow flex flex-col">
//           {/* Title */}
//           <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
//             {project.title}
//           </h3>

//           {/* Description */}
//           <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
//             {project.description}
//           </p>

//           {/* Tech Stack Tags */}
//           <div className="flex flex-wrap gap-2 mt-auto">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-800 text-indigo-200 border border-white/5"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Links / Arrow */}
//           <div className="mt-8 flex items-center gap-4 text-sm font-bold text-white">
//             <a
//               href="#"
//               className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
//             >
//               View Project
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 ></path>
//               </svg>
//             </a>
//             <a
//               href="#"
//               className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Main Section Component ---
// const Projects = () => {
//   return (
//     <section className="relative py-32 bg-slate-950">
//       {/* Background decoration (matches Hero) */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">
//               Portfolio
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
//               Selected Works
//             </h2>
//           </motion.div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//             >
//               <ProjectCard project={project} />
//             </motion.div>
//           ))}
//         </div>

//         {/* 'View More' Button */}
//         <div className="mt-20 text-center">
//           <button className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors text-sm tracking-widest uppercase font-semibold">
//             View All Archives
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Neural Search",
    category: "AI / NLP",
    description:
      "Semantic search engine capable of understanding context over keywords. Powered by vector embeddings and custom transformer models.",
    stack: ["Python", "Torch", "FastAPI", "Pinecone"],
    // Unique color data for each project's "Nebula"
    color: "from-emerald-400 to-cyan-500",
    bgAccent: "bg-emerald-500/20",
  },
  {
    id: 2,
    title: "Crypto Sentinel",
    category: "FinTech",
    description:
      "Real-time algorithmic trading dashboard visualizing high-frequency data streams via WebSockets. Sub-millisecond latency updates.",
    stack: ["D3.js", "Next.js", "WebSockets", "Redis"],
    color: "from-orange-400 to-rose-500",
    bgAccent: "bg-orange-500/20",
  },
  {
    id: 3,
    title: "Dream Canvas",
    category: "Generative Art",
    description:
      "Browser-based editor integrating Stable Diffusion. Features a custom node-based workflow editor for chaining image generation tasks.",
    stack: ["React", "Three.js", "WASM", "WebGL"],
    color: "from-fuchsia-400 to-purple-600",
    bgAccent: "bg-fuchsia-500/20",
  },
  {
    id: 4,
    title: "Cloud Orchestrator",
    category: "DevOps",
    description:
      "Serverless infrastructure manager. distinct visual interface for managing AWS Lambda functions and drag-and-drop deployment pipelines.",
    stack: ["Go", "AWS", "Terraform", "Vue"],
    color: "from-blue-400 to-indigo-600",
    bgAccent: "bg-blue-500/20",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[400px] w-full rounded-3xl overflow-hidden bg-slate-900 border border-white/10"
    >
      {/* 1. THE "DIGITAL NEBULA" BACKGROUND (Replaces Image) */}
      <div className="absolute inset-0 w-full h-full">
        {/* The Base Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
        />

        {/* The Moving Orbs (Generative Art) */}
        <div
          className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-125 bg-gradient-to-r ${project.color}`}
        />
        <div
          className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110 bg-gradient-to-r ${project.color}`}
        />

        {/* The "Glass Texture" Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* 2. CONTENT LAYER (Glassmorphism) */}
      <div className="relative h-full flex flex-col justify-between p-8 z-10">
        {/* Top: Header */}
        <div>
          <div className="flex justify-between items-start mb-4">
            {/* Category Badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-white/10 backdrop-blur-md ${project.bgAccent} text-white`}
            >
              {project.category}
            </span>
            {/* External Link Icon (Appears on Hover) */}
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/5 backdrop-blur-md">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
            {project.title}
          </h3>

          <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-[90%]">
            {project.description}
          </p>
        </div>

        {/* Bottom: Tech Stack */}
        <div>
          <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-white/20 transition-colors" />
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold text-slate-300 font-mono"
              >
                {tech} <span className="text-slate-600 mx-1">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Hover Glow Border */}
      <div
        className={`absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-300 pointer-events-none`}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Section Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">
              Selected Works
            </span>
            <h2 className="text-5xl font-bold text-white tracking-tight">
              Digital <span className="text-slate-500">Playground</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm font-mono tracking-wider uppercase"
          >
            View GitHub Archive
          </motion.button>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
