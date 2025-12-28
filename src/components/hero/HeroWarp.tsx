"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { motion } from "framer-motion";

// --- Configuration ---
const COUNT = 4000;
const RADIUS = 5;
const LENGTH = 20;

// --- The Warp Tunnel Component ---
const WarpTunnel = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random points in a cylinder shape
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Distribute particles: mostly on the outside (radius), some inner dust
      const r =
        Math.random() > 0.8 ? Math.random() * RADIUS : RADIUS + Math.random();
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      const z = Math.random() * LENGTH - LENGTH / 2; // Spread along Z axis

      // Random speed for each particle
      const speed = 0.05 + Math.random() * 0.1;

      temp.push({ x, y, z, speed, initialZ: z });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const mouseX = state.mouse.x * 2; // Amplify mouse movement
    const mouseY = state.mouse.y * 2;

    particles.forEach((particle, i) => {
      // 1. Move particle towards camera (positive Z)
      particle.z += particle.speed;

      // 2. Loop logic: If it passes the camera, reset to back
      if (particle.z > LENGTH / 2) {
        particle.z = -LENGTH / 2;
      }

      // 3. Mouse Interaction: Warp the tunnel
      // We bend the X and Y positions based on how far the particle is along Z
      // This creates the "curved wormhole" effect
      const zOffset = particle.z + LENGTH / 2; // 0 to LENGTH
      const warpFactor = Math.pow(zOffset / LENGTH, 2); // Curve intensity increases closer to camera

      const warpedX = particle.x + mouseX * warpFactor * 3;
      const warpedY = particle.y + mouseY * warpFactor * 3;

      dummy.position.set(warpedX, warpedY, particle.z);

      // Rotate particles slightly for dynamic feel
      dummy.rotation.z = time * 0.2 + particle.initialZ;

      // Scale based on depth (fog effect helper)
      const scale = Math.min(1, (zOffset / LENGTH) * 1.5);
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, COUNT]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshBasicMaterial
        color="#60a5fa" // Light Blue
        toneMapped={false} // Crucial for Bloom to work!
      />
    </instancedMesh>
  );
};

// --- Main Hero Component ---

const HeroWarp = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 1. THE 3D SCENE */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          {/* Post Processing creates the GLOW */}
          <EffectComposer>
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
              intensity={2} // How bright the glow is
            />
          </EffectComposer>

          {/* The Tunnel */}
          <WarpTunnel />

          {/* Camera controls (limited) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>

      {/* 2. THE UI OVERLAY */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pointer-events-none mix-blend-screen">
        <motion.div
          initial={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="text-center z-20"
        >
          {/* Glitchy/Tech Text Effect */}
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-900">
            FUTURE
            <br />
            READY
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <p className="font-mono text-blue-200 text-sm tracking-[0.3em] uppercase border-b border-blue-500/50 pb-2">
              Full Stack Architecture
            </p>
            <p className="font-mono text-blue-200 text-sm tracking-[0.3em] uppercase border-b border-blue-500/50 pb-2">
              Interactive 3D
            </p>
          </motion.div>
        </motion.div>

        {/* Cinematic Borders */}
        <div className="absolute top-8 left-8 w-64 h-64 border-l-2 border-t-2 border-white/20 rounded-tl-3xl"></div>
        <div className="absolute bottom-8 right-8 w-64 h-64 border-r-2 border-b-2 border-white/20 rounded-br-3xl"></div>

        {/* Interactive Button */}
        <motion.div
          className="absolute bottom-20 pointer-events-auto cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="bg-white text-black font-bold py-3 px-8 rounded-full text-sm uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Enter System
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroWarp;
