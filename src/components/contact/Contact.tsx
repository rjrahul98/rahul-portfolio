// "use client";
// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Add your submission logic here
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
//           {/* ----- LEFT SIDE: Info & Visuals ----- */}
//           <div className="md:w-5/12 bg-gradient-to-br from-blue-600 to-indigo-800 p-10 text-white flex flex-col justify-between">
//             <div>
//               <h2 className="text-3xl font-extrabold tracking-tight leading-tight mb-4">
//                 Let's chat. <br />
//                 Tell me about your project.
//               </h2>
//               <p className="text-blue-100 text-lg mb-8">
//                 {" "}
//                 Let's create something together. Drop me a line and I'll get
//                 back to you as soon as possible.
//               </p>
//             </div>

//             {/* Contact Info Icons */}
//             <div className="space-y-4 text-blue-100">
//               <div className="flex items-center">
//                 {/* Mail Icon SVG */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-3 text-blue-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <span>hello@example.com</span>
//               </div>
//               <div className="flex items-center">
//                 {/* Phone Icon SVG */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-3 text-blue-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center">
//                 {/* Map Pin Icon SVG */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 mr-3 text-blue-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//                 <span>Bengaluru, India</span>
//               </div>
//             </div>
//           </div>

//           {/* ----- RIGHT SIDE: The Form ----- */}
//           <div className="md:w-7/12 p-10 lg:p-12 bg-white">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">
//               Send a Message
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name Input */}
//               <div>
//                 <label htmlFor="name" className="sr-only">
//                   Name
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     {/* User Icon SVG */}
//                     <svg
//                       className="h-5 w-5 text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="block w-full pl-10 pr-3 py-3 sm:text-sm border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all"
//                     placeholder="Your Name"
//                   />
//                 </div>
//               </div>

//               {/* Email Input */}
//               <div>
//                 <label htmlFor="email" className="sr-only">
//                   Email
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     {/* Mail Icon SVG */}
//                     <svg
//                       className="h-5 w-5 text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                     </svg>
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="block w-full pl-10 pr-3 py-3 sm:text-sm border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//               </div>

//               {/* Message Textarea */}
//               <div>
//                 <label htmlFor="message" className="sr-only">
//                   Message
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
//                     {/* Annotation/Message Icon SVG */}
//                     <svg
//                       className="h-5 w-5 text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                       />
//                     </svg>
//                   </div>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="block w-full pl-10 pr-3 py-3 sm:text-sm border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all resize-none"
//                     placeholder="How can I help you?"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:-translate-y-0.5"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Footer - integrated below the main block */}
//       <footer className="py-8 text-center text-gray-500 text-sm">
//         <p>© 2025 Rahul. Built with Next.js, Tailwind & a lot of Coffee ☕</p>
//       </footer>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Reusable Input Component with "Glow" focus ---
const FloatingInput = ({ label, type = "text", name, isTextArea = false }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative mb-6 group">
      {/* The Label - Floats up when focused or has content */}
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none 
          ${
            focused
              ? "-top-3 text-xs text-indigo-400 bg-slate-950 px-2"
              : "top-3 text-slate-500 text-sm"
          }
        `}
      >
        {label}
      </label>

      {/* The Input / Textarea */}
      {isTextArea ? (
        <textarea
          name={name}
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== "")}
          className={`w-full bg-slate-900/50 border-2 rounded-xl px-4 py-3 text-white outline-none transition-all duration-300 resize-none
            ${
              focused
                ? "border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                : "border-slate-800 group-hover:border-slate-700"
            }
          `}
        />
      ) : (
        <input
          type={type}
          name={name}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value !== "")}
          className={`w-full bg-slate-900/50 border-2 rounded-xl px-4 py-3 text-white outline-none transition-all duration-300
            ${
              focused
                ? "border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                : "border-slate-800 group-hover:border-slate-700"
            }
          `}
        />
      )}
    </div>
  );
};

// --- Main Contact Component ---
const Contact = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* 1. Background Atmosphere (The "Light" behind the glass) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT COLUMN: Info & Context --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let’s build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
                next big thing.
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              I'm currently available for freelance projects and open to
              full-time opportunities. If you have a project that needs some
              creative injection, drop me a line.
            </p>

            {/* Contact Details List */}
            <div className="space-y-6">
              <a
                href="mailto:hello@rahul.dev"
                className="flex items-center group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <span className="ml-4 text-lg text-slate-300 group-hover:text-white transition-colors">
                  hello@rahul.dev
                </span>
              </a>

              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <span className="ml-4 text-lg text-slate-300 group-hover:text-white transition-colors">
                  Bengaluru, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: The Glass Form --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <form>
                <FloatingInput label="Your Name" name="name" />
                <FloatingInput
                  label="Email Address"
                  type="email"
                  name="email"
                />
                <FloatingInput
                  label="Tell me about your project"
                  name="message"
                  isTextArea={true}
                />

                <button
                  type="button" // Change to submit when ready
                  className="w-full py-4 mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md"></div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* --- FOOTER (Integrated) --- */}
        <div className="mt-32 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 Rahul. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
