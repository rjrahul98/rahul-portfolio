"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Architecture",
    description:
      "Building scalable, modular design systems using React, Next.js, and TypeScript. Future-proof codebases that scale with your team.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        ></path>
      </svg>
    ),
  },
  {
    title: "Performance Engineering",
    description:
      "Optimizing Core Web Vitals, reducing TBT, and implementing edge caching strategies. I turn slow apps into instant experiences.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Creative Development",
    description:
      "Integrating Three.js, WebGL, and Framer Motion to create immersive, award-winning web experiences that capture attention.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        ></path>
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">
            Capabilities
          </span>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            System <span className="text-slate-600">Modules</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-900/20 border border-white/5 hover:bg-slate-900/40 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
