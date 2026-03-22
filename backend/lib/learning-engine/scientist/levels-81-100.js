// ============================================
//  SCINO Scientist Program — Levels 81–100
//  Stage: Innovation Master
//  Theme: IoT, Cloud Connectivity, Advanced Robotics & Final Research
// ============================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const scientistLevels81to100 = [
  // ═══════════════════════════════════════════
  //  LEVEL 81 — The IoT Revolution: ESP8266
  // ═══════════════════════════════════════════
  {
    levelNumber: 81,
    id: 'scientist-81',
    title: 'Connecting to the World (IoT)',
    subtitle: 'Introduction to the ESP8266 WiFi Module',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Internet of Things',

    overview:
      'The biggest jump in modern science is Connectivity. Learn how to use the ESP8266 ' +
      '(NodeMCU) to connect your projects to the internet, allowing you to control things from anywhere in the world.',

    learningObjectives: [
      'Understand the difference between Microcontrollers and WiFi SoCs',
      'Setup NodeMCU in the Arduino IDE',
      'Connect a device to your local WiFi network',
      'Ping a server from your hardware',
    ],

    materials: [
      { name: 'NodeMCU ESP8266', quantity: 1, description: 'WiFi-enabled microcontroller', imageUrl: '/materials/nodemcu.jpg', estimatedCost: '₹350' },
      { name: 'Micro USB Cable', quantity: 1, description: 'Data cable', imageUrl: '/materials/micro-usb.jpg', estimatedCost: '₹50' },
      { name: 'Smartphone/Laptop', quantity: 1, description: 'For WiFi Hotspot', imageUrl: '/materials/phone.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Installing Boards', instruction: 'In Arduino IDE, go to Preferences -> Additional Boards Manager URLs and add the ESP8266 link. Then install "esp8266" in Boards Manager.', imageUrl: '/steps/l81-step1.jpg' },
      { stepNumber: 2, title: 'The WiFi Code', instruction: 'Use the "ESP8266WiFi" library. Enter your SSID (WiFi Name) and Password into the code.', tip: 'Make sure your WiFi is 2.4GHz; ESP8266 doesn\'t support 5GHz.', imageUrl: '/steps/l81-step2.jpg' },
      { stepNumber: 3, title: 'Serial Monitor Check', instruction: 'Upload the code and open the Serial Monitor. Watch as it prints "Connected" and gives you an IP address!', imageUrl: '/steps/l81-step3.jpg' },
    ],

    explanation: {
      simple: 'Until now, your projects were "offline". With the ESP8266, your project gets its own IP address, just like a website or a smartphone. Now it can talk to the internet!',
      scientific: 'The ESP8266 is a low-cost Wi-Fi microchip with a full TCP/IP stack and microcontroller capability. It uses 802.11 b/g/n protocols to interface with wireless networks.',
    },

    quiz: [
      { question: 'What does IoT stand for?', options: ['Internal of Technology', 'Internet of Things', 'Integrated Online Tools', 'International Optics Team'], correctIndex: 1 },
    ],

    youtubeVideoId: 'S-v6XidU3fA',
    outputImageUrl: '/outputs/l81-iot.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 85 — Smart Home: Web-Server Relay
  // ═══════════════════════════════════════════
  {
    levelNumber: 85,
    id: 'scientist-85',
    title: 'Smart Home Web Server',
    subtitle: 'Control high-voltage appliances from a browser',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.ADVANCED_ONLY,
    estimatedTime: '90 minutes',
    xpReward: 80,
    category: 'Home Automation',

    overview: 'Build a local website hosted on your NodeMCU. When you click a button on your phone screen, a relay clicks and turns on a real lamp in your room.',

    materials: [
      { name: 'NodeMCU ESP8266', quantity: 1, description: 'WiFi Brain', imageUrl: '/materials/nodemcu.jpg', estimatedCost: '₹0' },
      { name: '5V Relay Module', quantity: 1, description: 'Electronic switch for AC', imageUrl: '/materials/relay.jpg', estimatedCost: '₹80' },
      { name: 'AC Lamp/Bulb', quantity: 1, description: 'Standard room light', imageUrl: '/materials/bulb.jpg', estimatedCost: '₹100' },
    ],

    steps: [
      { stepNumber: 1, title: 'The HTML Code', instruction: 'Write a small HTML string inside your Arduino code. This will be the "Website" that the ESP8266 serves.', imageUrl: '/steps/l85-step1.jpg' },
      { stepNumber: 2, title: 'Relay Wiring (Low Side)', instruction: 'Connect VCC to 5V (Vin), GND to GND, and Signal to Pin D1.', imageUrl: '/steps/l85-step2.jpg' },
      { stepNumber: 3, title: 'AC Safety Wiring', instruction: 'Cut ONE wire of the lamp cable. Connect the two ends to the COM and NO terminals of the relay.', imageUrl: '/steps/l85-step3.jpg' },
      { stepNumber: 4, title: 'Accessing the IP', instruction: 'Find the IP address on the Serial Monitor (e.g., 192.168.1.5). Type this into your phone browser. Click the Toggle button!', imageUrl: '/steps/l85-step4.jpg' },
    ],

    explanation: {
      simple: 'The NodeMCU acts like a tiny web-host. When you click "ON" on the website, it sends a signal to the Relay. The Relay is like a giant switch that uses a small magnet to turn on high-power electricity safely.',
      scientific: 'The ESP8266WebServer library handles HTTP requests. When a specific URL path (like /on) is requested, the code sets a digital GPIO to HIGH, activating the electromagnetic coil in the relay.',
    },

    safetyInstructions: ['HIGH VOLTAGE DANGER! Never touch AC wires while the plug is in.', 'Always have an adult check your AC connections before powering on.'],

    quiz: [
      { question: 'What is the function of a Relay?', options: ['To measure temperature', 'To allow a low-power circuit to control a high-power circuit', 'To increase WiFi speed', 'To convert DC to AC'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l85-smart-home.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 92 — 4-DOF Robotic Arm
  // ═══════════════════════════════════════════
  {
    levelNumber: 92,
    id: 'scientist-92',
    title: 'The 4-DOF Robotic Arm',
    subtitle: 'Mastering multi-axis mechanical movement',
    difficulty: DIFFICULTY.MASTER,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '180 minutes',
    xpReward: 120,
    category: 'Advanced Robotics',

    overview: 'Moving beyond rovers. Build a robotic arm with 4 Degrees of Freedom (DOF): Base, Shoulder, Elbow, and Gripper. Learn how to coordinate multiple servos.',

    materials: [
      { name: 'Robotic Arm Acrylic Kit', quantity: 1, description: 'Pre-cut frame', imageUrl: '/materials/arm-kit.jpg', estimatedCost: '₹600' },
      { name: 'SG90 Servo Motors', quantity: 4, description: 'Axis motors', imageUrl: '/materials/servo.jpg', estimatedCost: '₹480' },
      { name: 'Joystick Modules', quantity: 2, description: 'To control the arm', imageUrl: '/materials/joystick.jpg', estimatedCost: '₹120' },
      { name: 'Arduino Uno', quantity: 1, description: 'Brain', imageUrl: '/materials/arduino-uno.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Servo Centering', instruction: 'Before assembly, power every servo and set it to 90 degrees. If you don\'t do this, the arm will crash into itself!', imageUrl: '/steps/l92-step1.jpg' },
      { stepNumber: 2, title: 'Assembly', instruction: 'Follow the mechanical diagram to build the base, then the arm sections, and finally the claw.', imageUrl: '/steps/l92-step2.jpg' },
      { stepNumber: 3, title: 'Joystick Control', instruction: 'Map the Joystick X/Y axes to the different servos. Moving the stick should move the corresponding part of the arm.', imageUrl: '/steps/l92-step3.jpg' },
    ],

    explanation: {
      simple: 'Each servo is like a joint in your arm. By using two joysticks, you can control the base (rotation), the reach (up/down), and the claw (open/close).',
      scientific: 'Kinematics is the study of motion. In this arm, we use Forward Kinematics (calculating where the hand is based on joint angles). Degrees of Freedom (DOF) refers to the number of independent parameters that define its configuration.',
    },

    quiz: [
      { question: 'What does "DOF" stand for in robotics?', options: ['Direction of Flight', 'Degrees of Freedom', 'Digital Optical Fiber', 'Division of Force'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l92-robotic-arm.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 95 — Automated Hydroponics System
  // ═══════════════════════════════════════════
  {
    levelNumber: 95,
    id: 'scientist-95',
    title: 'Automated Hydroponics',
    subtitle: 'Food security through automation',
    difficulty: DIFFICULTY.MASTER,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '120 minutes',
    xpReward: 100,
    category: 'Environmental Engineering',

    overview: 'Build a system that grows plants without soil. It monitors water levels, light cycles, and temperature automatically, sending data to your phone via IoT.',

    materials: [
      { name: 'Submersible Water Pump', quantity: 1, description: 'Small 5V pump', imageUrl: '/materials/pump.jpg', estimatedCost: '₹150' },
      { name: 'Soil/Water Moisture Sensor', quantity: 1, description: 'Resistive/Capacitive', imageUrl: '/materials/moisture.jpg', estimatedCost: '₹50' },
      { name: 'NodeMCU', quantity: 1, description: 'The IoT Brain', imageUrl: '/materials/nodemcu.jpg', estimatedCost: '₹0' },
      { name: 'Grow Lights (LED)', quantity: 1, description: 'Full spectrum', imageUrl: '/materials/grow-light.jpg', estimatedCost: '₹200' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Reservoir', instruction: 'Set up a container with water and liquid nutrients. Place the pump inside.', imageUrl: '/steps/l95-step1.jpg' },
      { stepNumber: 2, title: 'The Monitoring', instruction: 'Place the moisture sensor in the plant roots. If it gets dry, the NodeMCU triggers the pump for 5 seconds.', imageUrl: '/steps/l95-step2.jpg' },
      { stepNumber: 3, title: 'Light Cycle', instruction: 'Code a timer that keeps the Grow Lights on for 14 hours and off for 10 hours.', tip: 'Plants need rest just like humans!', imageUrl: '/steps/l95-step3.jpg' },
    ],

    explanation: {
      simple: 'You are now an "Automatic Farmer". You use sensors to see if the plant is thirsty and a pump to give it water. You also give it "fake sun" with LEDs so it grows faster indoors.',
      scientific: 'Hydroponics maximizes growth by providing direct access to nutrient-rich water. This system uses "Closed-Loop Feedback" to maintain optimal growing parameters without human intervention.',
    },

    quiz: [
      { question: 'What is the main advantage of Hydroponics?', options: ['It uses more soil', 'Plants grow faster using less water and no soil', 'It doesn\'t need light', 'It is cheaper than a pot'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l95-hydroponics.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 100 — THE SCINO GRAND CHALLENGE
  // ═══════════════════════════════════════════
  {
    levelNumber: 100,
    id: 'scientist-100',
    title: 'The SCINO Grand Challenge',
    subtitle: 'Independent Research & Innovation Project',
    difficulty: DIFFICULTY.MASTER,
    safetyLevel: SAFETY_LEVEL.ADVANCED_ONLY,
    estimatedTime: 'Project Based (2-4 Weeks)',
    xpReward: 500,
    category: 'Innovation',

    overview:
      'This is it. You have completed 99 levels of scientific training. For Level 100, you will ' +
      'identify a real-world problem in your community (Waste, Safety, Energy, or Health) and ' +
      'design a complete, working prototype from scratch.',

    learningObjectives: [
      'Problem Identification and Empathy',
      'System Architecture Design',
      'Cost-Benefit Analysis',
      'Iterative Prototyping',
      'Final Presentation and Documentation',
    ],

    materials: [
      { name: 'Custom Project Budget', quantity: 1, description: 'Materials of your choice', imageUrl: '/materials/brainstorm.jpg', estimatedCost: 'Variable' },
      { name: 'SCINO Master Kit', quantity: 1, description: 'All previous components available', imageUrl: '/materials/kit.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Proposal', instruction: 'Write down: What is the problem? Who does it affect? How will your invention fix it?', imageUrl: '/steps/l100-step1.jpg' },
      { stepNumber: 2, title: 'Circuit Design', instruction: 'Draw your complete circuit diagram. Include power requirements and sensor choices.', imageUrl: '/steps/l100-step2.jpg' },
      { stepNumber: 3, title: 'Build & Code', instruction: 'Construct your device. It must be permanent (soldered) and housed in an enclosure (3D printed, wood, or plastic).', imageUrl: '/steps/l100-step3.jpg' },
      { stepNumber: 4, title: 'The Presentation', instruction: 'Record a video demonstrating your project and explaining the science behind it. Submit it to the SCINO community!', imageUrl: '/steps/l100-step4.jpg' },
    ],

    explanation: {
      simple: 'You are no longer a student; you are an Inventor. You are using everything—circuits, code, mechanics, and the internet—to make the world a better place.',
      scientific: 'The Capstone project represents the culmination of Technical Literacy and the Scientific Method. Successful completion requires the integration of hardware, software, and mechanical engineering to create a robust solution to a defined problem statement.',
    },

    quiz: [
      { question: 'What is the most important step in Level 100?', options: ['Using the most expensive parts', 'Solving a real problem for real people', 'Finishing it fast', 'Using every sensor you have'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l100-master.jpg',
    funFact: 'Many famous companies like Apple and Google started as simple "Level 100" projects in a garage!',
    nextLevelPreview: '🎓 GRADUATION: You have attained the rank of SCINO MASTER. You are now eligible to lead your own Research Lab!',
  },
];

export default scientistLevels81to100;
