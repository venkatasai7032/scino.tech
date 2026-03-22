// ============================================
//  SCINO Scientist Program — Levels 41–60
//  Stage: Systems Engineer
//  Theme: Advanced Systems, Sensors & Microcontrollers (Arduino)
// ============================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const scientistLevels41to60 = [
  // ═══════════════════════════════════════════
  //  LEVEL 41 — PIR Motion Sensor Security
  // ═══════════════════════════════════════════
  {
    levelNumber: 41,
    id: 'scientist-41',
    title: 'PIR Motion Detector',
    subtitle: 'Sense human presence using Infrared',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'Advanced Sensors',

    overview:
      'Learn how security lights turn on automatically. Use a Passive Infrared (PIR) sensor ' +
      'to detect the heat signature of a moving human or animal.',

    learningObjectives: [
      'Understand Infrared radiation emitted by living things',
      'Learn how Fresnel lenses focus IR energy',
      'Calibrate sensor sensitivity and delay',
      'Build an intruder alert system',
    ],

    materials: [
      { name: 'PIR Sensor (HC-SR501)', quantity: 1, description: 'Motion sensor module', imageUrl: '/materials/pir-sensor.jpg', estimatedCost: '₹80' },
      { name: 'Buzzer & LED', quantity: 1, description: 'Output indicators', imageUrl: '/materials/buzzer.jpg', estimatedCost: '₹20' },
      { name: '9V Battery', quantity: 1, description: 'Power source', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹40' },
      { name: 'Breadboard', quantity: 1, description: 'From previous levels', imageUrl: '/materials/breadboard.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Pin Identification', instruction: 'The PIR sensor has 3 pins: VCC (+), GND (-), and OUT (Signal). Check the labels under the white plastic dome.', imageUrl: '/steps/l41-step1.jpg' },
      { stepNumber: 2, title: 'Wiring the Sensor', instruction: 'Connect VCC to 9V (+), GND to 9V (-). Connect the OUT pin to a breadboard row.', imageUrl: '/steps/l41-step2.jpg' },
      { stepNumber: 3, title: 'Wiring the Output', instruction: 'Connect the LED and Buzzer to the OUT pin. When motion is detected, the sensor sends 3.3V to turn them on.', imageUrl: '/steps/l41-step3.jpg' },
      { stepNumber: 4, title: 'Calibration', instruction: 'Use a small screwdriver to turn the two orange knobs (potentiometers) on the back to adjust sensitivity and time delay.', tip: 'One knob adjusts how far it sees, the other how long the light stays on.', imageUrl: '/steps/l41-step4.jpg' },
      { stepNumber: 5, title: 'Test', instruction: 'Wait 30 seconds for the sensor to "settle". Wave your hand. The buzzer should sound!', imageUrl: '/steps/l41-step5.jpg' },
    ],

    explanation: {
      simple: 'Every living thing gives off heat as "Infrared" light (invisible to us). The PIR sensor has a special eye that sees this heat moving. When it sees a warm body move, it flips a switch!',
      scientific: 'Passive Infrared sensors detect changes in the amount of infrared radiation impinging upon the pyroelectric sensor elements. The white dome is a Fresnel lens which concentrates radiation from various angles onto the sensor.',
    },

    quiz: [
      { question: 'What does "Passive" in PIR mean?', options: ['It moves around', 'It does not emit energy, only detects it', 'It works slowly', 'It uses no battery'], correctIndex: 1 },
    ],

    youtubeVideoId: '6XpG_7S8_p0',
    outputImageUrl: '/outputs/l41-pir.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 42 — Ultrasonic Distance Meter
  // ═══════════════════════════════════════════
  {
    levelNumber: 42,
    id: 'scientist-42',
    title: 'Ultrasonic "Bat" Vision',
    subtitle: 'Measure distance using sound waves',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Advanced Sensors',

    overview: 'Learn how bats and submarines "see" in the dark. Use ultrasonic sound pulses to calculate the distance to an object.',

    materials: [
      { name: 'Ultrasonic Sensor (HC-SR04)', quantity: 1, description: 'Looks like two small eyes', imageUrl: '/materials/ultrasonic.jpg', estimatedCost: '₹70' },
      { name: 'Transistor & Buzzer', quantity: 1, description: 'From previous levels', imageUrl: '/materials/buzzer.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Echolocation', instruction: 'One "eye" sends out a high-frequency sound (Trigger). The other "eye" waits for the echo (Echo).', imageUrl: '/steps/l42-step1.jpg' },
      { stepNumber: 2, title: 'Wiring', instruction: 'VCC to (+), GND to (-). Trigger and Echo will be used in later levels with Arduino.', tip: 'For now, we use a simple circuit to hear the high-frequency pulse clicks.', imageUrl: '/steps/l42-step2.jpg' },
    ],

    explanation: {
      simple: 'The sensor shouts a sound so high humans can\'t hear it. It waits for the sound to hit a wall and bounce back. By measuring the time it took, we can tell exactly how far the wall is!',
      scientific: 'Distance = (Time × Speed of Sound) / 2. We divide by 2 because the sound travels to the object and back.',
    },

    quiz: [
      { question: 'Why do we divide the time by 2?', options: ['The sensor has 2 eyes', 'Sound travels to the object and back', 'To save battery', 'To make it more difficult'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l42-ultrasonic.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 46 — Introduction to Arduino
  // ═══════════════════════════════════════════
  {
    levelNumber: 46,
    id: 'scientist-46',
    title: 'Arduino: The Digital Brain',
    subtitle: 'Intro to Microcontrollers',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 50,
    category: 'Microcontrollers',

    overview: 'Welcome to the most important level yet. Meet the Arduino Uno—a tiny computer that can control robots, sensors, and the internet.',

    materials: [
      { name: 'Arduino Uno R3', quantity: 1, description: 'Microcontroller board', imageUrl: '/materials/arduino-uno.jpg', estimatedCost: '₹450' },
      { name: 'USB Cable (A to B)', quantity: 1, description: 'To connect to PC', imageUrl: '/materials/usb-cable.jpg', estimatedCost: '₹50' },
      { name: 'Computer', quantity: 1, description: 'To write code', imageUrl: '/materials/pc.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Anatomy of Arduino', instruction: 'Find the ATMega328P chip (The Brain), the Digital Pins (1-13), and the Analog Pins (A0-A5).', imageUrl: '/steps/l46-step1.jpg' },
      { stepNumber: 2, title: 'Install Software', instruction: 'Download and install the Arduino IDE on your computer.', imageUrl: '/steps/l46-step2.jpg' },
      { stepNumber: 3, title: 'The First Connection', instruction: 'Plug the Arduino into your PC. Look for the green "ON" LED to light up.', imageUrl: '/steps/l46-step3.jpg' },
      { stepNumber: 4, title: 'Blink 1.0', instruction: 'Open Examples -> 01.Basics -> Blink. Click "Upload" (The arrow button).', tip: 'Watch the tiny orange LED on the board marked "L" begin to blink!', imageUrl: '/steps/l46-step4.jpg' },
    ],

    explanation: {
      simple: 'Unlike the simple circuits we built before, the Arduino can be "re-programmed". You don\'t have to move wires to change how it works; you just change the code (instructions) inside its brain.',
      scientific: 'The Arduino Uno is based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, and a USB connection.',
    },

    quiz: [
      { question: 'What is the main chip on the Arduino Uno called?', options: ['The Screen', 'ATmega328P', 'The Battery', '9V Connector'], correctIndex: 1 },
    ],

    youtubeVideoId: 'zJ-LqeX_fLU',
    outputImageUrl: '/outputs/l46-arduino.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 51 — LCD 16x2 Display
  // ═══════════════════════════════════════════
  {
    levelNumber: 51,
    id: 'scientist-51',
    title: 'Hello World Display',
    subtitle: 'Print text on a Liquid Crystal Display',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 45,
    category: 'Displays',

    overview: 'Give your projects a voice. Learn how to connect an LCD screen to show data like temperature or messages.',

    materials: [
      { name: 'Arduino Uno', quantity: 1, description: 'From Level 46', imageUrl: '/materials/arduino-uno.jpg', estimatedCost: '₹0' },
      { name: 'LCD 16x2 (I2C Module)', quantity: 1, description: 'Screen with 4 pins back', imageUrl: '/materials/lcd-i2c.jpg', estimatedCost: '₹180' },
      { name: 'Jumper Wires (Female to Male)', quantity: 4, description: 'Wires', imageUrl: '/materials/jumpers.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'The I2C Advantage', instruction: 'Normal LCDs need 16 wires. Our I2C version only needs 4: VCC, GND, SDA, and SCL.', imageUrl: '/steps/l51-step1.jpg' },
      { stepNumber: 2, title: 'Wiring', instruction: 'GND to GND, VCC to 5V, SDA to A4, SCL to A5.', imageUrl: '/steps/l51-step2.jpg' },
      { stepNumber: 3, title: 'The Library', instruction: 'In Arduino IDE, go to Sketch -> Include Library -> Manage Libraries. Search for "LiquidCrystal_I2C" and install it.', imageUrl: '/steps/l51-step3.jpg' },
      { stepNumber: 4, title: 'The Code', instruction: 'Copy the code from the manual to print "SCINO ACTIVE" on the screen.', imageUrl: '/steps/l51-step4.jpg' },
    ],

    explanation: {
      simple: 'An LCD works by using tiny liquid crystals that block or let light through. The 16x2 means it can show 16 characters in 2 rows.',
      scientific: 'Liquid Crystal Displays use the light-modulating properties of liquid crystals. I2C (Inter-Integrated Circuit) is a serial communication protocol that allows multiple devices to connect using just two wires.',
    },

    quiz: [
      { question: 'What does 16x2 mean for an LCD?', options: ['16 inches by 2 inches', '16 characters per row, 2 rows total', '16 volts and 2 amps', '16 colors and 2 brightness levels'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l51-lcd.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 60 — Smart Dustbin (Stage Capstone)
  // ═══════════════════════════════════════════
  {
    levelNumber: 60,
    id: 'scientist-60',
    title: 'The Smart Dustbin',
    subtitle: 'Automated lid opening using sensors',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '120 minutes',
    xpReward: 100,
    category: 'Integrated Systems',

    overview: 'The final project for Stage 4! Build a dustbin that opens its lid automatically when you bring your hand near it.',

    materials: [
      { name: 'Arduino Uno', quantity: 1, description: 'Brain', imageUrl: '/materials/arduino-uno.jpg', estimatedCost: '₹0' },
      { name: 'Ultrasonic Sensor', quantity: 1, description: 'Distance sensor', imageUrl: '/materials/ultrasonic.jpg', estimatedCost: '₹0' },
      { name: 'Servo Motor (SG90)', quantity: 1, description: 'The motor that moves in degrees', imageUrl: '/materials/servo.jpg', estimatedCost: '₹120' },
      { name: 'Small Dustbin', quantity: 1, description: 'Mechanical body', imageUrl: '/materials/dustbin.jpg', estimatedCost: '₹50' },
    ],

    steps: [
      { stepNumber: 1, title: 'Servo Basics', instruction: 'Unlike normal motors, a Servo can move to a specific angle (like 90 degrees).', imageUrl: '/steps/l60-step1.jpg' },
      { stepNumber: 2, title: 'Mechanical Assembly', instruction: 'Glue the servo to the back of the dustbin lid. Use a stiff wire to connect the servo arm to the lid.', imageUrl: '/steps/l60-step2.jpg' },
      { stepNumber: 3, title: 'Logic', instruction: 'Code the Arduino: IF Ultrasonic Distance < 20cm THEN move Servo to 90 degrees. ELSE move Servo to 0 degrees.', imageUrl: '/steps/l60-step3.jpg' },
      { stepNumber: 4, title: 'Final Test', instruction: 'Power the Arduino. Bring your trash near—the lid opens magically! Move away—it closes.', imageUrl: '/steps/l60-step4.jpg' },
    ],

    explanation: {
      simple: 'This is a "Closed Loop" system. The sensor gives information to the brain (Arduino), and the brain tells the muscle (Servo) what to do. This is the foundation of all smart robots.',
      scientific: 'This project integrates an HC-SR04 ultrasonic sensor for distance measurement and a PWM-controlled Servo motor for actuation. It demonstrates real-time sensor processing and motor control logic.',
    },

    quiz: [
      { question: 'What is the main difference between a Servo motor and a DC motor?', options: ['Servo is faster', 'Servo can move to a specific angle', 'DC motor is more expensive', 'There is no difference'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l60-smart-dustbin.jpg',
    nextLevelPreview: '🎉 STAGE 4 COMPLETE! You are now a Systems Engineer. Next: Level 61 — Robotics Pioneer! Build your first 2-wheeled robot!',
  },
];

export default scientistLevels41to60;
