// ============================================
//  SCINO Scientist Program — Levels 61–80
//  Stage: Robotics Pioneer
//  Theme: Mechanical Chassis, Motor Drivers & Autonomous Navigation
// ============================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const scientistLevels61to80 = [
  // ═══════════════════════════════════════════
  //  LEVEL 61 — Building the 2WD Chassis
  // ═══════════════════════════════════════════
  {
    levelNumber: 61,
    id: 'scientist-61',
    title: 'Building the Robot Chassis',
    subtitle: 'The skeletal structure of your rover',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 45,
    category: 'Mechanical Design',

    overview:
      'Every great robot needs a strong body. In this level, you will assemble a 2-Wheel Drive (2WD) ' +
      'chassis with a caster wheel for balance. This will be the base for all your upcoming autonomous robots.',

    learningObjectives: [
      'Understand differential drive systems',
      'Learn the function of a caster wheel',
      'Properly mount DC geared motors',
      'Manage weight distribution for stability',
    ],

    materials: [
      { name: 'Acrylic/Wood Chassis Plate', quantity: 1, description: 'Main body plate', imageUrl: '/materials/chassis-plate.jpg', estimatedCost: '₹150' },
      { name: 'BO Motors (Yellow Geared)', quantity: 2, description: '150 RPM motors', imageUrl: '/materials/bo-motor.jpg', estimatedCost: '₹80' },
      { name: 'Wheels', quantity: 2, description: 'Rubber grip wheels', imageUrl: '/materials/robot-wheels.jpg', estimatedCost: '₹60' },
      { name: 'Caster Wheel', quantity: 1, description: '360-degree support wheel', imageUrl: '/materials/caster-wheel.jpg', estimatedCost: '₹30' },
      { name: 'Nut & Bolt Set', quantity: 1, description: 'M3 size screws', imageUrl: '/materials/screws.jpg', estimatedCost: '₹20' },
    ],

    steps: [
      { stepNumber: 1, title: 'Mount the Motors', instruction: 'Use the T-shaped brackets to secure the two BO motors to the sides of the chassis plate.', tip: 'Ensure the motor shafts are perfectly aligned with each other.', imageUrl: '/steps/l61-step1.jpg' },
      { stepNumber: 2, title: 'Attach Wheels', instruction: 'Push the wheels onto the motor shafts. Tighten the small screw if your wheels have them.', imageUrl: '/steps/l61-step2.jpg' },
      { stepNumber: 3, title: 'The Caster Wheel', instruction: 'Mount the caster wheel at the front (or back) center of the chassis using spacers to keep the plate level.', tip: 'The caster wheel allows the robot to turn in any direction easily.', imageUrl: '/steps/l61-step3.jpg' },
      { stepNumber: 4, title: 'Battery Placement', instruction: 'Decide where to place your battery pack. It should be centered to prevent the robot from leaning.', imageUrl: '/steps/l61-step4.jpg' },
    ],

    explanation: {
      simple: 'This robot uses "Differential Drive." If both wheels spin forward, it goes straight. If one spins forward and one backward, the robot spins in place!',
      scientific: 'Differential steering is a method of steering land vehicles by varying the relative rate of rotation of the drive wheels. It does not require steering linkages or axles.',
    },

    quiz: [
      { question: 'What is the purpose of the caster wheel?', options: ['To provide power', 'To balance the robot and allow easy turning', 'To measure distance', 'To look like a robot'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l61-chassis.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 62 — The L298N Motor Driver
  // ═══════════════════════════════════════════
  {
    levelNumber: 62,
    id: 'scientist-62',
    title: 'The L298N Motor Driver',
    subtitle: 'Interfacing power with logic',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'Robotics Electronics',

    overview: 'Arduino cannot power motors directly because motors need too much current. Learn how to use the L298N H-Bridge to control motor speed and direction safely.',

    materials: [
      { name: 'L298N Motor Driver Module', quantity: 1, description: 'Dual H-Bridge module', imageUrl: '/materials/l298n.jpg', estimatedCost: '₹160' },
      { name: '9V/12V Battery Pack', quantity: 1, description: 'Power for motors', imageUrl: '/materials/battery-pack.jpg', estimatedCost: '₹100' },
      { name: 'Jumper Wires', quantity: 6, description: 'Male-to-Female', imageUrl: '/materials/jumpers.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Identify Terminals', instruction: 'Find the 12V, GND, and 5V screw terminals. The 12V is for the battery, and GND is shared with the Arduino.', imageUrl: '/steps/l62-step1.jpg' },
      { stepNumber: 2, title: 'Motor Outputs', instruction: 'Connect Motor A wires to OUT1/OUT2 and Motor B wires to OUT3/OUT4.', imageUrl: '/steps/l62-step2.jpg' },
      { stepNumber: 3, title: 'Logic Pins', instruction: 'Identify ENA, IN1, IN2, IN3, IN4, and ENB. These connect to your Arduino digital pins.', tip: 'IN1/IN2 control direction for Motor A. ENA controls the speed.', imageUrl: '/steps/l62-step3.jpg' },
    ],

    explanation: {
      simple: 'The L298N is like a translator. It takes tiny commands from the Arduino and uses them to switch large amounts of power from the battery to the motors.',
      scientific: 'The L298N is an integrated monolithic circuit in a 15-lead Multiwatt and PowerSO20 packages. It is a high voltage, high current dual full-bridge driver designed to accept standard TTL logic levels.',
    },

    quiz: [
      { question: 'Why can\'t we connect a motor directly to an Arduino pin?', options: ['The pin is too small', 'The motor requires more current than the Arduino can provide', 'The motor will spin too fast', 'Arduino pins only work with LEDs'], correctIndex: 1 },
    ],

    youtubeVideoId: 'dyjo_ggEtpM',
    outputImageUrl: '/outputs/l62-motor-driver.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 65 — Obstacle Avoiding Robot
  // ═══════════════════════════════════════════
  {
    levelNumber: 65,
    id: 'scientist-65',
    title: 'Autonomous Obstacle Avoider',
    subtitle: 'Give your robot a sense of touch (without touching)',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '90 minutes',
    xpReward: 60,
    category: 'Autonomous Robotics',

    overview: 'Combine your Ultrasonic sensor (Level 42) and Motor Driver (Level 62) to build a robot that explores a room and turns away whenever it detects a wall.',

    materials: [
      { name: 'Complete 2WD Robot', quantity: 1, description: 'Chassis + Arduino + L298N', imageUrl: '/materials/robot-base.jpg', estimatedCost: '₹0' },
      { name: 'HC-SR04 Ultrasonic Sensor', quantity: 1, description: 'The eyes', imageUrl: '/materials/ultrasonic.jpg', estimatedCost: '₹0' },
      { name: 'Servo Motor (SG90)', quantity: 1, description: 'To rotate the eyes', imageUrl: '/materials/servo.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Mount the "Head"', instruction: 'Glue the Ultrasonic sensor onto the Servo motor arm. Mount the Servo at the front center of the robot.', imageUrl: '/steps/l65-step1.jpg' },
      { stepNumber: 2, title: 'The Algorithm', instruction: 'Code: Move forward. IF Distance < 20cm, Stop. Rotate Servo Left/Right to find the clearest path. Turn robot and continue.', tip: 'Use the NewPing library for easier ultrasonic coding.', imageUrl: '/steps/l65-step2.jpg' },
      { stepNumber: 3, title: 'Wiring Check', instruction: 'Ensure your battery has enough voltage; low power is the #1 reason robots act "glitchy".', imageUrl: '/steps/l65-step3.jpg' },
    ],

    explanation: {
      simple: 'Your robot is now "Thinking." It constantly measures the distance in front of it. If it sees an obstacle, it stops, looks around for a better path, and turns!',
      scientific: 'This level implements a simple "Sense-Think-Act" cycle. The sensor provides distance data (Sense), the Arduino processes the if/else logic (Think), and the motors provide movement (Act).',
    },

    quiz: [
      { question: 'What is the "Sense-Think-Act" cycle in robotics?', options: ['Charging, Driving, Sleeping', 'Input, Processing, Output', 'Hearing, Seeing, Talking', 'Building, Breaking, Fixing'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l65-avoider.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 70 — The Line Follower Robot
  // ═══════════════════════════════════════════
  {
    levelNumber: 70,
    id: 'scientist-70',
    title: 'The Smart Line Follower',
    subtitle: 'Navigation using infrared paths',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '120 minutes',
    xpReward: 75,
    category: 'Industrial Robotics',

    overview: 'Learn how factory robots move. Use IR sensors to detect a black line on a white floor and follow it perfectly.',

    materials: [
      { name: 'Complete 2WD Robot', quantity: 1, description: 'Base robot', imageUrl: '/materials/robot-base.jpg', estimatedCost: '₹0' },
      { name: 'IR Sensor Modules', quantity: 2, description: 'Black/White detection', imageUrl: '/materials/ir-sensor.jpg', estimatedCost: '₹60' },
      { name: 'Black Electrical Tape', quantity: 1, description: 'To create the track', imageUrl: '/materials/black-tape.jpg', estimatedCost: '₹10' },
    ],

    steps: [
      { stepNumber: 1, title: 'Mount Sensors', instruction: 'Mount two IR sensors at the front of the robot, about 1-2cm apart, facing the ground.', imageUrl: '/steps/l70-step1.jpg' },
      { stepNumber: 2, title: 'Calibration', instruction: 'Adjust the potentiometers on the IR sensors so they stay OFF on white and turn ON on black tape.', imageUrl: '/steps/l70-step2.jpg' },
      { stepNumber: 3, title: 'Logic', instruction: 'IF Left Sensor sees Black -> Turn Left. IF Right Sensor sees Black -> Turn Right. IF both see White -> Go Straight.', tip: 'This is called "Bang-Bang" control.', imageUrl: '/steps/l70-step3.jpg' },
    ],

    explanation: {
      simple: 'Black color absorbs Infrared light, while White reflects it. The sensors tell the robot: "If you see black, you are off-track! Turn back toward the line!"',
      scientific: 'The IR sensor uses an IR LED and a photodiode. When the IR light hits a white surface, it reflects back to the photodiode (High Signal). Black surfaces absorb the light (Low Signal).',
    },

    quiz: [
      { question: 'How does the robot know it is on a black line?', options: ['The tape is sticky', 'The black color absorbs the IR sensor light', 'The tape is magnetic', 'The robot can see colors like humans'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l70-line-follower.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 80 — Multi-Functional Stage Capstone
  // ═══════════════════════════════════════════
  {
    levelNumber: 80,
    id: 'scientist-80',
    title: 'The Ultimate Explorer Rover',
    subtitle: 'Bluetooth + Avoider + Line Follower',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '180 minutes',
    xpReward: 150,
    category: 'Full Systems Integration',

    overview: 'The final challenge of Stage 5. Build a robot that can switch modes: Control it via a Smartphone app, or flip a switch to make it autonomous.',

    materials: [
      { name: 'Advanced Chassis Kit', quantity: 1, description: '4WD or 2WD base', imageUrl: '/materials/chassis.jpg', estimatedCost: '₹0' },
      { name: 'HC-05 Bluetooth Module', quantity: 1, description: 'Wireless communication', imageUrl: '/materials/hc-05.jpg', estimatedCost: '₹220' },
      { name: 'All Previous Sensors', quantity: 1, description: 'Ultrasonic, IR, Servo', imageUrl: '/materials/sensors.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Master Code', instruction: 'Write a program using "Switch-Case" logic to handle different modes of operation.', imageUrl: '/steps/l80-step1.jpg' },
      { stepNumber: 2, title: 'App Connection', instruction: 'Install a "Bluetooth Terminal" app on your phone. Send commands like "F", "B", "L", "R" to drive the robot.', imageUrl: '/steps/l80-step2.jpg' },
      { stepNumber: 3, title: 'Integration', instruction: 'Neatly organize your wires using zip-ties. A messy robot is a glitchy robot!', imageUrl: '/steps/l80-step3.jpg' },
      { stepNumber: 4, title: 'The Graduation Run', instruction: 'Demonstrate all 3 modes to complete the Robotics Pioneer stage. 🎉', imageUrl: '/steps/l80-step4.jpg' },
    ],

    explanation: {
      simple: 'You have built a professional-grade prototype! It uses wireless communication, sound-based vision, and light-based navigation all in one system.',
      scientific: 'This project demonstrates UART serial communication (Bluetooth), Pulse Width Modulation (Speed control), and complex interrupt-driven sensor processing.',
    },

    quiz: [
      { question: 'What is UART used for in this robot?', options: ['Powering the motors', 'Serial communication between Bluetooth and Arduino', 'Measuring distance', 'Charging the battery'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l80-final-rover.jpg',
    funFact: 'NASA\'s Mars Rovers use similar principles, but they use Radio Waves instead of Bluetooth because Mars is millions of miles away!',
    nextLevelPreview: '🎉 STAGE 5 COMPLETE! You are now a Robotics Pioneer. Next: Stage 6 — Innovation Master! Level 81: Internet of Things (IoT) & ESP8266!',
  },
];

export default scientistLevels61to80;
