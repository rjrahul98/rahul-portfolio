"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Environment,
  Float,
  Text,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// --- 3D Component: The Liquid Art ---
const LiquidArt = () => {
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh scale={2.5} position={[0, 0, 0]}>
        {/* Icosahedron provides a nice geometric base for distortion */}
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#ffffff"
          roughness={0.1}
          metalness={0.1}
          transmission={0.5} // Glass-like transparency
          thickness={0.5} // Refraction thickness
          clearcoat={1}
          clearcoatRoughness={0}
          distort={0.4} // The "liquid" wobble amount
          speed={2} // Speed of the wobble
        />
      </mesh>
    </Float>
  );
};

// --- Background Gradient Mesh (2D) ---
const BackgroundGradient = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-50">
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-rose-200/40 blur-[100px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-200/40 blur-[100px]" />
    <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] rounded-full bg-purple-200/40 blur-[100px]" />
  </div>
);

// --- Main Hero Component ---
const HeroFluid = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 1. Soft Gradient Background */}
      <BackgroundGradient />

      {/* 2. The 3D Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          {/* Studio Lighting Setup for "Museum" look */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            color="#xffffff"
          />
          <directionalLight
            position={[-5, -5, -5]}
            intensity={0.5}
            color="#ffcccc"
          />

          {/* Environment for reflections (Crucial for glass/liquid look) */}
          <Environment preset="warehouse" />

          {/* The Art Piece */}
          <LiquidArt />

          {/* Controls - User can rotate the object gently */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* 3. The Typography Layer (Overlay) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-gray-500 uppercase mb-6">
            Rahul • Portfolio 2025
          </h2>

          <h1 className="text-6xl md:text-9xl font-serif text-gray-900 tracking-tight leading-none mix-blend-overlay opacity-90">
            Digital
            <br />
            Alchemist
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-12 pointer-events-auto"
        >
          <button className="group relative px-8 py-3 bg-gray-900 text-white rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl">
            <span className="relative z-10 font-medium text-sm tracking-wide">
              Enter Gallery
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-700/50"></div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroFluid;
