"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars,
  Sparkles,
  Environment,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- 3D Components ---

const HeroObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate the object slowly over time
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <group>
        {/* Inner Liquid Core */}
        <Sphere args={[1, 64, 64]} scale={2.2}>
          <MeshDistortMaterial
            color="#4338ca" // Deep Indigo
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.5}
            roughness={0.2} // Shiny
            distort={0.4} // Wobbly
            speed={2}
          />
        </Sphere>

        {/* Outer Wireframe Shell (The "Tech" Layer) */}
        <Sphere args={[1, 64, 64]} scale={2.6} ref={meshRef}>
          <meshStandardMaterial
            color="#818cf8" // Light Indigo
            wireframe
            transparent
            opacity={0.15}
          />
        </Sphere>
      </group>
    </Float>
  );
};

// --- Main Hero Component ---

const Hero3D = () => {
  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      {/* 1. THE 3D CANVAS LAYER */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          {/* Lighting & Environment */}
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            color="#818cf8"
          />
          <pointLight
            position={[-10, -10, -10]}
            intensity={1}
            color="#c084fc"
          />

          {/* This makes the material reflect a realistic city studio, making it look like metal/glass */}
          <Environment preset="city" />

          {/* Background Atmosphere */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <Sparkles
            count={200}
            scale={10}
            size={3}
            speed={0.4}
            opacity={0.4}
            color="#a5b4fc"
          />

          <Suspense fallback={null}>
            {/* Positioned slightly to the right to balance text */}
            <mesh position={[2.5, 0, 0]}>
              <HeroObject />
            </mesh>
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* 2. THE CONTENT LAYER */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Glassmorphism Card + Text */}
          <div className="pointer-events-auto">
            <motion.div
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide border border-indigo-500/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                  OPEN TO WORK
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Digital Artistry
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I merge clean code with stunning visuals. Specialized in{" "}
                <span className="text-white font-semibold">React</span>,{" "}
                <span className="text-white font-semibold">Three.js</span>, and
                creating memorable user experiences.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-indigo-50 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Explore Work
                </button>
                <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-700/50 hover:border-slate-500 transition-all flex items-center justify-center gap-2 group">
                  <span>Contact Me</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Spacer for 3D element */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;
