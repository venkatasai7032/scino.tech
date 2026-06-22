'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Beaker, Lock, CheckCircle, Star, ChevronRight,
  Zap, Atom, Microscope, Cpu, Trophy, ArrowRight
} from 'lucide-react';

// ── All 100 levels data ─────────────────────────
const levels = Array.from({ length: 100 }, (_, i) => {
  const num = i + 1;
  let stage, color, category;

  if (num <= 10) {
    stage = 'Beginner Experiments';
    color = 'from-emerald-400 to-green-500';
    category = 'Basic Electricity & Mechanics';
  } else if (num <= 20) {
    stage = 'Intermediate Builds';
    color = 'from-sky-400 to-blue-500';
    category = 'Simple Machines & Motors';
  } else if (num <= 40) {
    stage = 'Electronics Understanding';
    color = 'from-violet-400 to-purple-500';
    category = 'Circuit Boards & Sensors';
  } else if (num <= 60) {
    stage = 'Advanced Electronics';
    color = 'from-orange-400 to-amber-500';
    category = 'Smart Devices & Automation';
  } else if (num <= 80) {
    stage = 'Robotics Introduction';
    color = 'from-rose-400 to-pink-500';
    category = 'Robots & Control Systems';
  } else {
    stage = 'Advanced Robotics';
    color = 'from-red-500 to-orange-600';
    category = 'AI Robots & Final Projects';
  }

  const titles = {
    1: 'Simple Motor Experiment',
    2: 'Battery & Wire Circuits',
    3: 'LED Light Circuit',
    4: 'Small Motor Car',
    5: 'Water Pump Motor',
    6: 'Series & Parallel Circuits',
    7: 'Electromagnet Build',
    8: 'Solar Cell Basics',
    9: 'Wind Vane Project',
    10: 'Rain Gauge Build',
    11: 'Mini Vacuum Cleaner',
    12: 'Simple Fan System',
    13: 'Drone Concept Model',
    14: 'Battery Powered Machine',
    15: 'Electric Bell Circuit',
    16: 'Morse Code Buzzer',
    17: 'Traffic Light Circuit',
    18: 'Automatic Night Lamp',
    19: 'DC Motor Speed Control',
    20: 'Brushless Motor Demo',
    21: 'Circuit Board Basics',
    22: 'Transistor Switch',
    23: 'Basic Sensor Circuit',
    24: 'Temperature Sensor',
    25: 'Light Sensor (LDR)',
    26: 'Sound Sensor Circuit',
    27: 'Capacitor Charging',
    28: 'Simple Display Circuit',
    29: 'LED Matrix Basics',
    30: 'Mobile Display Concepts',
    31: 'PCB Design Basics',
    32: 'Voltage Divider',
    33: 'Relay Module',
    34: 'Timer Circuit (555)',
    35: 'Oscillator Circuit',
    36: 'Signal Amplifier',
    37: 'H-Bridge Motor Driver',
    38: 'IR Sensor Circuit',
    39: 'Ultrasonic Distance Meter',
    40: 'Motherboard Concepts',
    41: 'Arduino Introduction',
    42: 'Arduino LED Blink',
    43: 'Arduino Button Input',
    44: 'Arduino Temperature Logger',
    45: 'Arduino Servo Control',
    46: 'Arduino LCD Display',
    47: 'Arduino Buzzer Alarm',
    48: 'Arduino IR Remote',
    49: 'Arduino Smart Switch',
    50: 'Arduino Weather Station',
    51: 'Automated Watering System',
    52: 'Smart Door Lock',
    53: 'Intruder Alert System',
    54: 'Bluetooth Module',
    55: 'WiFi Module Basics',
    56: 'IoT Temperature Monitor',
    57: 'Smart Home Light',
    58: 'Gas Leak Detector',
    59: 'Heart Rate Monitor',
    60: 'Automated Sorting Machine',
    61: 'Line Following Robot',
    62: 'Obstacle Avoidance Robot',
    63: 'Motor Controlled Robot',
    64: 'Robot Arm Basics',
    65: 'Wireless Robot Control',
    66: 'Maze Solving Robot',
    67: 'Balance Bot',
    68: 'Robot with Ultrasonic',
    69: 'Robot with Camera',
    70: 'Multi-Motor Robot',
    71: 'Fire Fighting Robot',
    72: 'Search & Rescue Robot',
    73: 'Agricultural Robot',
    74: 'Underwater Robot Concept',
    75: 'Aerial Drone Basics',
    76: 'Robot with AI Vision',
    77: 'Voice Controlled Robot',
    78: 'Gesture Controlled Robot',
    79: 'Swarm Robot Concept',
    80: 'Medical Assist Robot',
    81: 'PID Line Follower',
    82: 'Scanning Obstacle Avoider',
    83: 'Bluetooth Robot App',
    84: 'WiFi Robot Web Interface',
    85: '4-DOF Robotic Arm',
    86: 'Voice Command Robot',
    87: 'Self-Balancing Robot',
    88: 'Gesture Glove Robot',
    89: 'Fire Fighting Advanced',
    90: 'Maze Mapping + OLED',
    91: 'Swarm Leader-Follower',
    92: 'Color Tracking Robot',
    93: 'ROS Introduction',
    94: 'Quadcopter Drone Build',
    95: 'TinyML Gesture Recognition',
    96: 'Robotic Hand',
    97: 'GPS Navigation Robot',
    98: 'AI Object Detection',
    99: 'Full Autonomous Robot',
    100: '🏆 Final Invention Project',
  };

  return {
    number: num,
    title: titles[num] || `Level ${num}`,
    stage,
    color,
    category,
    xp: num <= 20 ? 50 : num <= 40 ? 100 : num <= 60 ? 150 : num <= 80 ? 200 : num === 100 ? 1000 : 250,
    duration: num <= 20 ? '30 min' : num <= 60 ? '45 min' : '60 min',
  };
});

const stages = [
  { name: 'All', range: [1, 100] },
  { name: 'Beginner (1-20)', range: [1, 20] },
  { name: 'Electronics (21-60)', range: [21, 60] },
  { name: 'Robotics (61-100)', range: [61, 100] },
];

export default function ScientistProgramPage() {
  const [activeStage, setActiveStage] = useState('All');
  const [search, setSearch] = useState('');
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  const filtered = levels.filter(lvl => {
    const stageObj = stages.find(s => s.name === activeStage);
    const inRange = lvl.number >= stageObj.range[0] && lvl.number <= stageObj.range[1];
    const matchesSearch = lvl.title.toLowerCase().includes(search.toLowerCase());
    return inRange && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark-950">

        {/* Header */}
        <div ref={headerRef} className="relative bg-gradient-to-br from-emerald-500 to-teal-600 pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <Beaker size={14} />Scientist Program
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                100 Levels of Scientific Discovery
              </h1>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
                From simple motor experiments to building AI-powered robots. Every level includes materials, step-by-step instructions, and video demos.
              </p>
              <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-1.5"><Beaker size={14} />100 Experiments</span>
                <span className="flex items-center gap-1.5"><Star size={14} />Earn XP</span>
                <span className="flex items-center gap-1.5"><Trophy size={14} />Get Certificate</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-16 z-20 bg-white dark:bg-dark-950 border-b border-dark-200 dark:border-dark-800 px-4 py-3">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {stages.map(s => (
                <button
                  key={s.name}
                  onClick={() => setActiveStage(s.name)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                    ${activeStage === s.name
                      ? 'bg-emerald-500 text-white'
                      : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200'
                    }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search experiments..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded-xl border border-dark-200 dark:border-dark-700
                         bg-dark-50 dark:bg-dark-800 text-dark-900 dark:text-white
                         text-sm w-full sm:w-64 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>

        {/* Levels Grid */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((level, index) => (
              <motion.div
                key={level.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <Link href={`/learn/scientist/${level.number}`}>
                  <div className="group relative p-4 rounded-2xl border border-dark-200/60 dark:border-dark-700/60
                                  bg-white dark:bg-dark-900 hover:shadow-lg
                                  hover:border-emerald-300 dark:hover:border-emerald-700
                                  transition-all duration-300 cursor-pointer">

                    {/* Level number badge */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl
                                    bg-gradient-to-br ${level.color} text-white font-bold text-sm mb-3`}>
                      {level.number}
                    </div>

                    {/* Final level crown */}
                    {level.number === 100 && (
                      <div className="absolute top-3 right-3 text-amber-400 text-lg">🏆</div>
                    )}

                    <h3 className="text-sm font-bold text-dark-900 dark:text-white mb-1 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {level.title}
                    </h3>

                    <p className="text-2xs text-dark-400 dark:text-dark-500 mb-3">
                      {level.category}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-2xs font-medium text-amber-500">
                        <Star size={11} className="fill-amber-500" />
                        {level.xp} XP
                      </span>
                      <span className="text-2xs text-dark-400 dark:text-dark-500">
                        {level.duration}
                      </span>
                    </div>

                    <ChevronRight size={14} className="absolute right-3 bottom-4 text-dark-300 dark:text-dark-600
                                                        group-hover:text-emerald-500 group-hover:translate-x-1
                                                        transition-all duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-dark-400 dark:text-dark-500">No experiments found. Try a different search!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
