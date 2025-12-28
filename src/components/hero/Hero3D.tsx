"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars,
  PointMaterial,
  Points,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { random } from "maath"; // You might need to install 'maath' or use the helper below

// --- Helper for Random Points (if maath isn't installed) ---
// If you get a 'maath' error, run: npm install maath
// Or use this helper function instead:
const generateSpherePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

// --- 3D Components ---

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  // Generate 2000 random points inside a sphere of radius 3.5
  const sphere = useMemo(() => generateSpherePoints(2000, 3.5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a5b4fc"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const InteractiveCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // 1. Automatic gentle rotation
    const t = state.clock.getElapsedTime();

    // 2. Mouse Interaction: Tilt the object based on mouse position
    const mouseX = state.mouse.x * 0.5;
    const mouseY = state.mouse.y * 0.5;

    // Lerp (smoothly transition) current rotation to target rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouseY + t * 0.1,
      0.1
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouseX + t * 0.15,
      0.1
    );
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 100, 100]} scale={2} ref={meshRef}>
        <MeshDistortMaterial
          color="#4f46e5"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// --- Main Component ---

const Hero3D = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 1. BACKGROUND GRADIENT BLURS (CSS) */}
      {/* These provide colorful backing for the text so it pops off the black bg */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. THE 3D SCENE */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            color="#818cf8"
          />
          <directionalLight
            position={[-10, -10, -5]}
            intensity={1}
            color="#e879f9"
          />

          {/* Stars Background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Floating Particles */}
          <ParticleField />

          {/* Main Object - positioned to the right on desktop */}
          <group position={[1.5, 0, 0]}>
            <InteractiveCore />
          </group>
        </Canvas>
      </div>

      {/* 3. THE TEXT CONTENT */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2">
          <div className="pointer-events-auto flex flex-col justify-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium backdrop-blur-md">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for hire
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Digital Experiences <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Beyond Reality.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I build pixel-perfect, accessible, and performant web applications
              with a focus on immersive 3D interactions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-200">
                View Portfolio
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors duration-200 flex items-center gap-2">
                Contact Me
                <svg
                  className="w-4 h-4"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;
