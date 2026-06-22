'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function XP3DOrb({ color = '#06b6d4', size = 2 }) {
  return (
    <motion.div
      className="w-32 h-32"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Canvas>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[size, 64, 64]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
      </Canvas>
    </motion.div>
  );
}
