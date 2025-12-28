"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  TorusKnot,
  MeshTransmissionMaterial,
  Environment,
  Float,
  Stars,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- The Crystal Object ---
const CrystalKnot = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Slow, hypnotic rotation
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot args={[1, 0.3, 128, 32]} ref={meshRef}>
        {/* The "Secret Weapon" Material */}
        <MeshTransmissionMaterial
          backside={true}
          samples={16} // Quality of refraction (higher = better but slower)
          resolution={512}
          thickness={0.5} // How "thick" the glass feels
          roughness={0} // Perfectly smooth glass
          anisotropy={1} // Metal-like reflection shape
          chromaticAberration={0.5} // The "Rainbow" edge effect
          color="#a5b4fc" // Slight indigo tint
        />
      </TorusKnot>
    </Float>
  );
};

// --- Background Lights (The "Studio" Setup) ---
const BackgroundLights = () => (
  <>
    {/* These lights are invisible but their reflections appear on the glass */}
    <pointLight position={[10, 10, 10]} intensity={2} color="#4f46e5" />
    <pointLight position={[-10, -10, -10]} intensity={2} color="#ec4899" />
    <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
  </>
);

// --- Main Hero Component ---
const HeroCrystal = () => {
  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      {/* 1. Subtle Background Gradient (Static) */}
      <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-fuchsia-900/20 rounded-full blur-[150px] pointer-events-none" />

      {/* 2. The 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
          <BackgroundLights />

          {/* HDRI Environment (Critical for Glass reflections) */}
          <Environment preset="city" blur={1} />

          {/* Subtle Stars in deep background */}
          <Stars
            radius={100}
            depth={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
          />

          {/* The Hero Object */}
          <group position={[1.5, 0, 0]}>
            {" "}
            {/* Shifted right on desktop */}
            <CrystalKnot />
          </group>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* 3. The UI Overlay */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          {/* Left: Text Content */}
          <div className="pointer-events-auto flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Minimalist Bordered Badge */}
              <div className="inline-block border border-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-xs font-mono text-indigo-300 tracking-[0.2em] uppercase">
                  System Architecture & Design
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-6">
                CODE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                  CLARITY
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-400 max-w-md leading-relaxed mb-10 border-l-2 border-indigo-500/50 pl-6">
                I build robust digital ecosystems with React, Next.js, and
                Python. Turning complex logic into crystal-clear experiences.
              </p>

              {/* Call to Actions */}
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-500/20">
                  View Projects
                </button>
                <button className="px-8 py-4 border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-slate-500 hover:text-white transition-all backdrop-blur-md">
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCrystal;
