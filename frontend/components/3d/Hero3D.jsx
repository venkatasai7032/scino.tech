'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

// DNA Helix Component
function DNAHelix() {
  const points = [];
  for (let i = 0; i < 100; i++) {
    const t = i * 0.1;
    const x = Math.sin(t) * 2;
    const y = (i - 50) * 0.1;
    const z = Math.cos(t) * 2;
    points.push(new THREE.Vector3(x, y, z));
  }

  const points2 = [];
  for (let i = 0; i < 100; i++) {
    const t = i * 0.1 + Math.PI;
    const x = Math.sin(t) * 2;
    const y = (i - 50) * 0.1;
    const z = Math.cos(t) * 2;
    points2.push(new THREE.Vector3(x, y, z));
  }

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* First strand */}
        <tubeGeometry args={[new THREE.CatmullRomCurve3(points), 64, 0.1, 8, false]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Second strand */}
        <tubeGeometry args={[new THREE.CatmullRomCurve3(points2), 64, 0.1, 8, false]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </Float>
      
      {/* Connection points */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i * 0.5) * 2,
          (i - 10) * 0.5,
          Math.cos(i * 0.5) * 2
        ]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

// Atom Component
function Atom() {
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
      <group>
        {/* Nucleus */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} />
        </mesh>
        
        {/* Electron orbits */}
        <group rotation={[Math.PI / 4, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[2, 0.02, 16, 100]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
          </mesh>
        </group>
        <group rotation={[0, Math.PI / 4, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[2, 0.02, 16, 100]} />
            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.3} />
          </mesh>
        </group>
        <group rotation={[0, -Math.PI / 4, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[2, 0.02, 16, 100]} />
            <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.3} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

// Particle Sphere
function ParticleSphere() {
  const particles = Array.from({ length: 500 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ],
    scale: Math.random() * 0.1 + 0.05
  }));

  return (
    <group>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 8, 8]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <Suspense fallback={null}>
          <DNAHelix />
          <Atom position={[4, 2, 0]} />
          <ParticleSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
