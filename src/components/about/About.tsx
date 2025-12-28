"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Reusable Glass Box ---
const BentoItem = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-slate-900/50 border border-white/10 backdrop-blur-md rounded-3xl p-6 overflow-hidden relative group hover:border-white/20 transition-colors ${className}`}
  >
    {/* Subtle internal glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            Beyond the <span className="text-slate-600">Code</span>
          </h2>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          {/* 1. Large Bio Box (Spans 2 columns) */}
          <BentoItem className="md:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Philosophy</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              I believe that great software is a mix of{" "}
              <span className="text-indigo-300">mathematical precision</span>{" "}
              and <span className="text-purple-300">artistic intuition</span>. I
              don't just write code; I craft systems that feel alive. My
              background in data science allows me to optimize performance,
              while my passion for 3D ensures the user experience is
              unforgettable.
            </p>
          </BentoItem>

          {/* 2. Map / Location Box */}
          <BentoItem
            className="md:col-span-1 relative min-h-[200px]"
            delay={0.1}
          >
            <div className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/40 animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">
                  Based In
                </p>
                <p className="text-xl font-bold">Bengaluru, IN</p>
                <p className="text-xs text-slate-500 mt-1">UTC+05:30</p>
              </div>
            </div>
          </BentoItem>

          {/* 3. Stats Box */}
          <BentoItem
            className="md:col-span-1 flex flex-col justify-between"
            delay={0.2}
          >
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                Experience
              </p>
              <p className="text-5xl font-bold text-white">4+</p>
              <p className="text-sm text-slate-500 mt-1">Years active</p>
            </div>
            <div className="mt-8">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                Projects
              </p>
              <p className="text-3xl font-bold text-indigo-300">24+</p>
              <p className="text-sm text-slate-500 mt-1">
                Deployed in production
              </p>
            </div>
          </BentoItem>

          {/* 4. Tech Stack (Spans 2 columns) */}
          <BentoItem
            className="md:col-span-2 flex flex-col justify-center"
            delay={0.3}
          >
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-6">
              The Arsenal
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {[
                "React",
                "Next.js",
                "TS",
                "Node",
                "Python",
                "AWS",
                "Framer",
                "Three.js",
              ].map((tech) => (
                <div
                  key={tech}
                  className="flex flex-col items-center gap-2 group/icon"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-white/5 group-hover/icon:border-indigo-500/50 group-hover/icon:bg-indigo-500/10 transition-colors">
                    {/* You can replace these dots with actual SVG icons */}
                    <div className="w-2 h-2 rounded-full bg-slate-500 group-hover/icon:bg-indigo-400"></div>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </BentoItem>
        </div>
      </div>
    </section>
  );
};

export default About;
