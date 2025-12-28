"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// --- Configuration ---
const GRID_SIZE = 40; // Size of the grid (40x40 cubes)
const SEPARATION = 0.4; // Distance between cubes

// --- The Wave Component ---
const WaveGrid = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Initialize the grid positions
  const particles = useMemo(() => {
    const temp = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < GRID_SIZE; y++) {
        // Center the grid
        const xPos = (x - GRID_SIZE / 2) * SEPARATION;
        const zPos = (y - GRID_SIZE / 2) * SEPARATION;
        temp.push({ x: xPos, z: zPos, y: 0 });
      }
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Get mouse position in 3D space (normalized -1 to 1)
    const { x: mouseX, y: mouseY } = state.mouse;

    particles.forEach((particle, i) => {
      // 1. Calculate Wave Physics
      // We create a "euclidean distance" wave from the center + mouse offset
      const dist = Math.sqrt(
        Math.pow(particle.x - mouseX * 10, 2) +
          Math.pow(particle.z + mouseY * 10, 2)
      );

      // 2. Math Magic: Sine waves based on distance and time
      // This creates the "ripple" effect
      const t = time * 2;
      const waveHeight = Math.sin(dist * 0.5 - t) * 1.5;

      // 3. Update the dummy object (matrix) for this specific instance
      dummy.position.set(particle.x, waveHeight, particle.z);

      // Scale cubes based on height (peaks are larger, troughs are smaller)
      const scale = Math.max(0.1, 1 + waveHeight * 0.3);
      dummy.scale.set(scale, scale, scale);

      // Color variation (optional - shifting hue based on height)
      // We can't easily change color per-instance without a custom shader or Color attribute
      // So we stick to geometry manipulation for pure performance.

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, GRID_SIZE * GRID_SIZE]}>
      {/* A simple box geometry */}
      <boxGeometry args={[0.25, 1, 0.25]} />
      {/* Physical material that looks like obsidian/ceramic */}
      <meshPhysicalMaterial
        color="#1e293b" // Dark Slate
        roughness={0.1}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </instancedMesh>
  );
};

// --- Main Hero Component ---

const HeroGeometric = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* 1. THE 3D SCENE */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 8, 15], fov: 50 }}>
          {/* Lighting setup for dramatic shadows */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#3b82f6" />
          <pointLight position={[-10, 10, -10]} intensity={2} color="#f43f5e" />

          {/* Environment reflection for the shiny cubes */}
          <Environment preset="city" />

          {/* The Data Grid */}
          <group rotation={[0, Math.PI / 4, 0]}>
            {" "}
            {/* Rotate grid 45deg for isometric feel */}
            <WaveGrid />
          </group>

          {/* Slight camera movement */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2.5} // Don't let user go below ground
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </div>

      {/* 2. THE UI OVERLAY (Clean, Swiss Style) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none mix-blend-difference text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-4"
        >
          {/* Minimalist Badge */}
          <div className="inline-block border border-white/40 px-4 py-1 rounded-full text-xs font-mono tracking-[0.2em] mb-4">
            SYSTEM ONLINE
          </div>

          {/* Massive Typography */}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
            RAHUL<span className="text-blue-500">.</span>DEV
          </h1>

          <div className="h-px w-24 bg-white/50 mx-auto my-6"></div>

          <p className="text-sm md:text-lg font-mono max-w-md mx-auto leading-relaxed text-gray-300">
            FULL STACK ENGINEER <br />
            SPECIALIZED IN DATA VISUALIZATION & HIGH-PERFORMANCE INTERFACES.
          </p>
        </motion.div>

        {/* Interactive Prompt at Bottom */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-[10px] tracking-widest uppercase">
            Scroll to Initialize
          </span>
          <div className="w-px h-8 bg-white"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroGeometric;
