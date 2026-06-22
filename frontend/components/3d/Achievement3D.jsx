'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import { motion } from 'framer-motion';

function TrophyShape() {
  return (
    <group>
      {/* Trophy cup */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <Torus args={[1, 0.3, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} emissive="#f59e0b" emissiveIntensity={0.3} />
        </Torus>
      </Float>
      
      {/* Star on top */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
        <Octahedron args={[0.4, 0]} position={[0, 1.2, 0]}>
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} emissive="#fbbf24" emissiveIntensity={0.5} />
        </Octahedron>
      </Float>
      
      {/* Base */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
        <meshStandardMaterial color="#78350f" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function Achievement3D({ type = 'trophy' }) {
  return (
    <motion.div
      className="w-24 h-24"
      initial={{ rotateY: -180, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
        <TrophyShape />
      </Canvas>
    </motion.div>
  );
}
