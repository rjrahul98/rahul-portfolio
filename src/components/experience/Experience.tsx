// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     id: 1,
//     role: "SDE-II",
//     company: "Pibit.ai",
//     period: "Sep 2025 - Present",
//     description:
//       "Spearheading the frontend architecture for core products using Next.js and React. Optimizing application performance and collaborating with cross-functional teams to integrate AI/ML pipelines on AWS infrastructure.",
//     skills: ["Next.js", "React", "AWS", "Python", "System Design"],
//   },
//   {
//     id: 2,
//     role: "Senior Software Engineer",
//     company: "Scalenut",
//     period: "Apr 2024 – Aug 2025",
//     description:
//       "Led frontend architecture, reducing latency by 30%. Developed a Google Docs-style collaborative editor using Tiptap and managed a 4-member frontend team. Migrated legacy modules to React + TypeScript, reducing maintenance by 40%.",
//     skills: ["React", "TypeScript", "Tiptap", "Team Leadership", "Performance"],
//   },
//   {
//     id: 3,
//     role: "Software Engineer",
//     company: "Scalenut",
//     period: "June 2022 – Apr 2024",
//     description:
//       "Built 'Cruise Mode' workflow increasing conversions by 60%. Engineered AI Detection & Humanizer tools and created crawler-based SEO dashboards. Integrated WebSockets for real-time SEO scoring.",
//     skills: [
//       "AI Integration",
//       "WebSockets",
//       "SEO",
//       "WordPress Plugin",
//       "3rd Party APIs",
//     ],
//   },
//   {
//     id: 4,
//     role: "Associate Software Engineer",
//     company: "Jungleworks",
//     period: "June 2021 – June 2022",
//     description:
//       "Built responsive frontend features for multi-tenant B2B web apps using React.js and Redux. Balanced development across 15+ client projects while collaborating with backend teams on roadmap prioritization.",
//     skills: ["React.js", "Redux", "B2B SaaS", "Agile"],
//   },
// ];
// const Experience = () => {
//   return (
//     <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">
//             Career Path
//           </span>
//           <h2 className="text-4xl font-bold tracking-tight">
//             Professional <span className="text-slate-500">Timeline</span>
//           </h2>
//         </motion.div>

//         <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={exp.id}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="relative pl-8 md:pl-12"
//             >
//               {/* Glowing Node on the Line */}
//               <div className="absolute -left-[5px] md:-left-[9px] top-2 h-3 w-3 md:h-5 md:w-5 rounded-full border-2 border-slate-950 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]"></div>

//               <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
//                 <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
//                 <span className="text-indigo-400 font-mono text-sm">
//                   {exp.company}
//                 </span>
//               </div>

//               <span className="inline-block px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-slate-400 mb-4">
//                 {exp.period}
//               </span>

//               <p className="text-slate-400 leading-relaxed max-w-2xl mb-4">
//                 {exp.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {exp.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="text-xs font-medium text-slate-500 bg-slate-900/50 px-2 py-1 rounded"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- EXPERIENCE DATA (From your resume) ---
const experiences = [
  {
    id: "pibit",
    role: "SDE-II",
    company: "Pibit.ai",
    period: "Sep 2025 - Present",
    location: "Bengaluru",
    description: [
      "Spearheading the frontend architecture for core products using Next.js and React.",
      "Optimizing application performance and collaborating with cross-functional teams to integrate AI/ML pipelines on AWS infrastructure.",
      "Driving system design discussions for scalable UI components.",
    ],
    skills: ["Next.js", "React", "AWS", "Python", "System Design"],
  },
  {
    id: "scalenut-senior",
    role: "Senior Software Engineer",
    company: "Scalenut",
    period: "Apr 2024 – Aug 2025",
    location: "Gurugram / Remote",
    description: [
      "Led frontend architecture, reducing latency by 30% and improving Core Web Vitals.",
      "Developed a Google Docs-style collaborative editor using Tiptap with real-time multi-user editing.",
      "Managed a 4-member frontend team in agile sprints; conducted 20+ code reviews/month.",
      "Migrated legacy modules from Vanilla JS to React + TypeScript, reducing maintenance by 40%.",
    ],
    skills: ["React", "TypeScript", "Tiptap", "Team Leadership", "Performance"],
  },
  {
    id: "scalenut-se",
    role: "Software Engineer",
    company: "Scalenut",
    period: "June 2022 – Apr 2024",
    location: "Gurugram / Remote",
    description: [
      "Built 'Cruise Mode' workflow that contributed to a 60% increase in highest-tier plan conversions.",
      "Engineered AI Detection & Humanizer tools, improving SEO success rates by 40%.",
      "Created On-Page Pro, a crawler-based dashboard for SEO issue detection.",
      "Integrated Real-time SEO scoring with WebSockets and external APIs.",
    ],
    skills: [
      "AI Integration",
      "WebSockets",
      "SEO",
      "WordPress Plugin",
      "Analytics",
    ],
  },
  {
    id: "jungleworks",
    role: "Associate Software Engineer",
    company: "Jungleworks",
    period: "June 2021 – June 2022",
    location: "Chandigarh",
    description: [
      "Built responsive frontend features for multi-tenant B2B web apps using React.js and Redux.",
      "Delivered UI improvements and resolved production bugs, directly increasing client retention.",
      "Collaborated with backend teams on roadmap prioritization.",
      "Balanced development across 15+ client projects with consistent quality.",
    ],
    skills: ["React.js", "Redux", "B2B SaaS", "Agile", "Micro-frontends"],
  },
];

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(experiences[0]);

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute right-0 top-1/4 h-96 w-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 h-96 w-96 bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">
            Career Log
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              Chronicles
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- LEFT: The "Data Chips" (Navigation) --- */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 lg:w-1/3 min-w-[280px]">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedTab(exp)}
                className={`relative group text-left px-6 py-5 rounded-2xl border transition-all duration-300 outline-none
                  ${
                    selectedTab.id === exp.id
                      ? "bg-slate-900/80 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                      : "bg-slate-900/30 border-white/5 hover:bg-slate-900/50 hover:border-white/10"
                  }
                `}
              >
                {/* Active Indicator Line */}
                {selectedTab.id === exp.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 top-4 bottom-4 w-1 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                  />
                )}

                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`font-bold text-lg transition-colors ${
                      selectedTab.id === exp.id
                        ? "text-white"
                        : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {exp.company}
                  </span>
                  {selectedTab.id === exp.id && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                  )}
                </div>
                <div
                  className={`text-sm transition-colors ${
                    selectedTab.id === exp.id
                      ? "text-indigo-300"
                      : "text-slate-500"
                  }`}
                >
                  {exp.role}
                </div>
              </button>
            ))}
          </div>

          {/* --- RIGHT: The "Holographic Screen" (Content) --- */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.id}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
              >
                {/* Decorative Grid Lines (Hologram effect) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <svg
                    className="w-16 h-16 text-indigo-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    ></path>
                  </svg>
                </div>

                {/* Content Header */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-white/5">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedTab.role}
                      </h3>
                      <div className="flex items-center gap-2 text-indigo-300 font-mono text-sm">
                        <span>{selectedTab.company}</span>
                        <span>•</span>
                        <span>{selectedTab.location}</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-white/5 text-slate-300 font-mono text-xs tracking-wider">
                      {selectedTab.period}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-4 mb-8">
                    {selectedTab.description.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-slate-300 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                        <span>{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack Footer */}
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-3">
                      Technologies Deployed
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTab.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-xs font-medium text-indigo-200 bg-indigo-500/10 border border-indigo-500/20 rounded-md hover:bg-indigo-500/20 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
