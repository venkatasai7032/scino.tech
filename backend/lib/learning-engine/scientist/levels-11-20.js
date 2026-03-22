// ============================================
//  SCINO Scientist Program — Levels 11–20
//  Stage: Lab Apprentice
//  Theme: Intermediate Builds & Mechanical Principles
// ============================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const scientistLevels11to20 = [
  // ═══════════════════════════════════════════
  //  LEVEL 11 — Mini Vacuum Cleaner
  // ═══════════════════════════════════════════
  {
    levelNumber: 11,
    id: 'scientist-11',
    title: 'Build a Mini Vacuum Cleaner',
    subtitle: 'Understand air pressure and suction',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '50 minutes',
    xpReward: 40,
    category: 'Fluid Dynamics',

    overview:
      'Learn how to create suction by moving air. You will build a handheld vacuum cleaner ' +
      'using a DC motor, a custom fan, and a plastic bottle. This experiment demonstrates ' +
      'how high-speed rotation creates low-pressure zones.',

    learningObjectives: [
      'Understand the Bernoulli principle and air pressure',
      'Create a centrifugal fan from a tin can or plastic',
      'Learn about airflow direction and filtration',
      'Build a practical cleaning tool',
    ],

    materials: [
      { name: 'High-speed DC Motor', quantity: 1, description: '12V or 9V motor (high RPM)', imageUrl: '/materials/high-rpm-motor.jpg', estimatedCost: '₹50' },
      { name: 'Plastic Bottle (2L)', quantity: 1, description: 'Empty soda bottle', imageUrl: '/materials/soda-bottle.jpg', estimatedCost: '₹0' },
      { name: 'Tin Can Lid', quantity: 1, description: 'Thin metal lid for the fan', imageUrl: '/materials/tin-lid.jpg', estimatedCost: '₹0' },
      { name: 'Flexible Pipe/Hose', quantity: 1, description: '30cm small hose', imageUrl: '/materials/hose.jpg', estimatedCost: '₹20' },
      { name: 'Fine Mesh/Cloth', quantity: 1, description: 'Filter material', imageUrl: '/materials/mesh.jpg', estimatedCost: '₹5' },
      { name: '9V Battery & Clip', quantity: 1, description: 'Power source', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹40' },
    ],

    steps: [
      { stepNumber: 1, title: 'Cut the Bottle', instruction: 'Cut the plastic bottle in half. The top part will be the dust collector, and the bottom will house the motor.', imageUrl: '/steps/l11-step1.jpg' },
      { stepNumber: 2, title: 'Create the Fan', instruction: 'Cut the tin lid into a circle, make 8 radial cuts, and twist them to create fan blades. Mount this on the motor shaft.', tip: 'The angle of the blades determines the suction power.', imageUrl: '/steps/l11-step2.jpg' },
      { stepNumber: 3, title: 'Install the Filter', instruction: 'Place the mesh/cloth over the mouth of the bottom half of the bottle. This prevents dust from entering the motor fan.', imageUrl: '/steps/l11-step3.jpg' },
      { stepNumber: 4, title: 'Assemble the Body', instruction: 'Mount the motor at the bottom of the bottle. Attach the top half. Connect the hose to the bottle cap hole.', imageUrl: '/steps/l11-step4.jpg' },
      { stepNumber: 5, title: 'Test the Suction', instruction: 'Connect the battery. The fan should spin, pushing air out the back and creating suction at the hose tip.', tip: 'Seal all gaps with tape to maximize suction.', imageUrl: '/steps/l11-step5.jpg' },
    ],

    explanation: {
      simple: 'When the fan spins fast, it pushes air out of the bottle. This creates "low pressure" inside. Outside air rushes in through the hose to fill it, carrying dust with it!',
      scientific: 'Centrifugal force from the spinning fan blades creates a pressure differential (Bernoulli\'s Principle). High-velocity air exiting the rear creates a partial vacuum at the intake.',
    },

    safetyInstructions: ['The fan blades can be sharp — handle with care', 'Adult supervision is required when cutting the metal lid', 'Do not vacuum liquids or hot ash'],

    quiz: [
      { question: 'What creates the suction in the vacuum cleaner?', options: ['The battery', 'The pressure difference created by the fan', 'The glue', 'The size of the bottle'], correctIndex: 1 },
      { question: 'What is the purpose of the mesh cloth?', options: ['To look better', 'To stop the motor', 'To filter dust and protect the fan', 'To hold the battery'], correctIndex: 2 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l11-vacuum.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 12 — Hand-Crank Generator
  // ═══════════════════════════════════════════
  {
    levelNumber: 12,
    id: 'scientist-12',
    title: 'Hand-Crank Generator',
    subtitle: 'Generate electricity from motion',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 45,
    category: 'Electromagnetic Induction',

    overview: 'By spinning the motor shaft yourself, you can generate electricity to light up an LED. This is the reverse of a normal motor.',

    materials: [
      { name: 'DC Motor', quantity: 1, description: 'Standard toy motor', imageUrl: '/materials/dc-motor.jpg', estimatedCost: '₹30' },
      { name: 'LED', quantity: 1, description: 'Red or Green LED', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹5' },
      { name: 'Rubber Band', quantity: 1, description: 'For drive transmission', imageUrl: '/materials/rubber-band.jpg', estimatedCost: '₹1' },
      { name: 'CDs or Cardboard Circles', quantity: 2, description: 'To create a large pulley', imageUrl: '/materials/cd.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Build the Crank', instruction: 'Glue two CDs together with a spacer to make a large pulley. Attach a handle.', imageUrl: '/steps/l12-step1.jpg' },
      { stepNumber: 2, title: 'Connect the Belt', instruction: 'Place the rubber band around the large CD pulley and the small motor pulley.', imageUrl: '/steps/l12-step2.jpg' },
      { stepNumber: 3, title: 'Connect the LED', instruction: 'Connect the LED directly to the motor terminals. No battery is needed!', imageUrl: '/steps/l12-step3.jpg' },
      { stepNumber: 4, title: 'Generate!', instruction: 'Spin the hand crank fast. The LED should light up.', tip: 'The faster you spin, the brighter it gets.', imageUrl: '/steps/l12-step4.jpg' },
    ],

    explanation: {
      simple: 'When you spin the wires inside the motor past the magnets, it creates electricity. This is how power plants work!',
      scientific: 'This demonstrates Faraday\'s Law of Induction. A changing magnetic flux through a circuit induces an electromotive force (EMF).',
    },

    quiz: [
      { question: 'What energy conversion is happening?', options: ['Electrical to Heat', 'Mechanical to Electrical', 'Sound to Light', 'Nuclear to Chemical'], correctIndex: 1 },
    ],

    youtubeVideoId: 'y-m4S73Wj7k',
    outputImageUrl: '/outputs/l12-generator.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 13 — Solar Oven
  // ═══════════════════════════════════════════
  {
    levelNumber: 13,
    id: 'scientist-13',
    title: 'Solar Oven',
    subtitle: 'Cook with the power of the Sun',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'Thermal Energy',

    overview: 'Harness solar radiation to heat food. Learn about reflection, absorption, and the greenhouse effect.',

    materials: [
      { name: 'Pizza Box', quantity: 1, description: 'Clean cardboard pizza box', imageUrl: '/materials/pizza-box.jpg', estimatedCost: '₹0' },
      { name: 'Aluminum Foil', quantity: 1, description: 'To reflect light', imageUrl: '/materials/aluminum-foil.jpg', estimatedCost: '₹10' },
      { name: 'Black Paper', quantity: 1, description: 'To absorb heat', imageUrl: '/materials/black-paper.jpg', estimatedCost: '₹5' },
      { name: 'Plastic Wrap', quantity: 1, description: 'To trap heat', imageUrl: '/materials/plastic-wrap.jpg', estimatedCost: '₹10' },
    ],

    steps: [
      { stepNumber: 1, title: 'Reflector', instruction: 'Cover the inside of the box flap with aluminum foil. Smooth it out.', imageUrl: '/steps/l13-step1.jpg' },
      { stepNumber: 2, title: 'Absorber', instruction: 'Line the bottom of the box with black paper.', tip: 'Black absorbs heat better than other colors.', imageUrl: '/steps/l13-step2.jpg' },
      { stepNumber: 3, title: 'Insulation', instruction: 'Tape plastic wrap over the opening in the lid to trap heat.', imageUrl: '/steps/l13-step3.jpg' },
      { stepNumber: 4, title: 'Cook!', instruction: 'Place a marshmallow inside and put the box in direct sunlight.', imageUrl: '/steps/l13-step4.jpg' },
    ],

    explanation: {
      simple: 'The foil reflects sunlight into the box. Black paper absorbs it and turns it into heat. The plastic wrap stops the heat from escaping.',
      scientific: 'This device utilizes three principles: Reflection (foil), Absorption (black paper), and the Greenhouse Effect (plastic wrap).',
    },

    safetyInstructions: ['The box can get very hot — use caution', 'Do not look directly at the reflected sun on the foil'],

    quiz: [
      { question: 'Why is the bottom black?', options: ['To reflect light', 'To absorb heat', 'To look clean', 'To make it stronger'], correctIndex: 1 },
    ],

    youtubeVideoId: 'xZJizYmJl7Q',
    outputImageUrl: '/outputs/l13-solar-oven.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 14 — Hydraulic Lift
  // ═══════════════════════════════════════════
  {
    levelNumber: 14,
    id: 'scientist-14',
    title: 'Hydraulic Lift',
    subtitle: 'Multiply force using liquids',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Fluid Mechanics',

    overview: 'Discover Pascal\'s Law by building a machine that can lift heavy objects using syringes and water.',

    materials: [
      { name: 'Syringes', quantity: 2, description: 'Plastic syringes without needles', imageUrl: '/materials/syringe.jpg', estimatedCost: '₹20' },
      { name: 'Plastic Tubing', quantity: 1, description: 'Small tube to connect syringes', imageUrl: '/materials/tubing.jpg', estimatedCost: '₹10' },
      { name: 'Water', quantity: 1, description: 'Hydraulic fluid', imageUrl: '/materials/water.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Fill with Water', instruction: 'Fill one syringe with water and connect the tube. Ensure no air bubbles.', tip: 'Water does not compress, but air does.', imageUrl: '/steps/l14-step1.jpg' },
      { stepNumber: 2, title: 'Connect Syringes', instruction: 'Connect the other end to the second empty syringe.', imageUrl: '/steps/l14-step2.jpg' },
      { stepNumber: 3, title: 'Test the Force', instruction: 'Push one plunger and watch the other rise. Try lifting a small toy.', imageUrl: '/steps/l14-step3.jpg' },
    ],

    explanation: {
      simple: 'When you push water in one syringe, it moves to the other with the same pressure. You can use this to lift heavy things easily!',
      scientific: 'Pascal\'s Principle states that pressure applied to a confined fluid is transmitted undiminished throughout the fluid.',
    },

    quiz: [
      { question: 'Why do we use water instead of air?', options: ['Water is cheaper', 'Water cannot be compressed', 'Water is blue', 'Air is too fast'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0_p8HscI0Y',
    outputImageUrl: '/outputs/l14-hydraulic.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 15 — Smartphone Projector
  // ═══════════════════════════════════════════
  {
    levelNumber: 15,
    id: 'scientist-15',
    title: 'Smartphone Projector',
    subtitle: 'Project your screen onto a wall',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Optics',

    overview: 'Learn how lenses work by building a projector for your smartphone using a magnifying glass.',

    materials: [
      { name: 'Shoebox', quantity: 1, description: 'Shoebox or cardboard box', imageUrl: '/materials/shoebox.jpg', estimatedCost: '₹0' },
      { name: 'Magnifying Glass', quantity: 1, description: 'Large convex lens', imageUrl: '/materials/magnifying-glass.jpg', estimatedCost: '₹50' },
    ],

    steps: [
      { stepNumber: 1, title: 'Lens Hole', instruction: 'Cut a hole in the shoebox and tape the magnifying glass over it.', imageUrl: '/steps/l15-step1.jpg' },
      { stepNumber: 2, title: 'Phone Setup', instruction: 'Turn phone brightness to 100% and put it inside the box.', tip: 'The image will be upside down because of the lens!', imageUrl: '/steps/l15-step2.jpg' },
      { stepNumber: 3, title: 'Focusing', instruction: 'Move the phone back and forth until the image on the wall is sharp.', imageUrl: '/steps/l15-step3.jpg' },
    ],

    explanation: {
      simple: 'The lens bends the light from your phone and spreads it onto the wall. Lenses can make images much larger!',
      scientific: 'The convex lens refracts light rays to a focal point. It creates a "Real and Enlarged" image on the screen.',
    },

    quiz: [
      { question: 'What kind of lens is in a magnifying glass?', options: ['Concave', 'Convex', 'Flat', 'Bifocal'], correctIndex: 1 },
    ],

    youtubeVideoId: 'TxC2_D_P_6A',
    outputImageUrl: '/outputs/l15-projector.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 16 — Morse Code Telegraph
  // ═══════════════════════════════════════════
  {
    levelNumber: 16,
    id: 'scientist-16',
    title: 'Morse Code Telegraph',
    subtitle: 'Communicate with electricity',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 40,
    category: 'Communication',

    overview: 'Build a clicking telegraph system using an electromagnet and a switch to send messages.',

    materials: [
      { name: 'Electromagnet', quantity: 1, description: 'Nail and wire coil', imageUrl: '/materials/iron-nail.jpg', estimatedCost: '₹10' },
      { name: '9V Battery', quantity: 1, description: 'Power', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹40' },
      { name: 'Switch', quantity: 1, description: 'Tapping key', imageUrl: '/materials/paper-clip.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Sounder', instruction: 'Mount a metal strip just above the electromagnet so it makes a "CLICK" when the magnet turns on.', imageUrl: '/steps/l16-step1.jpg' },
      { stepNumber: 2, title: 'The Key', instruction: 'Use your switch as a telegraph key. Quick tap = Dot, Long hold = Dash.', imageUrl: '/steps/l16-step2.jpg' },
      { stepNumber: 3, title: 'Send SOS', instruction: 'Try sending SOS: . . .  - - -  . . .', imageUrl: '/steps/l16-step3.jpg' },
    ],

    explanation: {
      simple: 'When you press the switch, the magnet pulls the metal and makes a sound. You are sending information through wires!',
      scientific: 'This is a basic DC signaling circuit. It demonstrates how binary-like pulses can encode complex data.',
    },

    quiz: [
      { question: 'What is SOS in Morse code?', options: ['... --- ...', '--- ... ---', '.. -- ..', '--- --- ---'], correctIndex: 0 },
    ],

    youtubeVideoId: 'iy8BaMs_RRY',
    outputImageUrl: '/outputs/l16-telegraph.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 17 — Water Filtration System
  // ═══════════════════════════════════════════
  {
    levelNumber: 17,
    id: 'scientist-17',
    title: 'Water Filtration System',
    subtitle: 'Clean dirty water using nature',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '40 minutes',
    xpReward: 35,
    category: 'Environmental Science',

    overview: 'Build a multi-stage filter to turn muddy water clear using sand, gravel, and charcoal.',

    materials: [
      { name: 'Sand & Gravel', quantity: 1, description: 'Fine sand and small stones', imageUrl: '/materials/sand.jpg', estimatedCost: '₹0' },
      { name: 'Charcoal', quantity: 1, description: 'Crushed charcoal', imageUrl: '/materials/charcoal.jpg', estimatedCost: '₹10' },
      { name: 'Cotton Balls', quantity: 5, description: 'For the bottom layer', imageUrl: '/materials/cotton.jpg', estimatedCost: '₹5' },
    ],

    steps: [
      { stepNumber: 1, title: 'Layering', instruction: 'Layer in a bottle: Cotton (bottom), Charcoal, Sand, then Gravel (top).', imageUrl: '/steps/l17-step1.jpg' },
      { stepNumber: 2, title: 'The Test', instruction: 'Pour muddy water slowly onto the gravel.', imageUrl: '/steps/l17-step2.jpg' },
      { stepNumber: 3, title: 'Observe', instruction: 'Watch the water drip into the container. Is it clearer?', imageUrl: '/steps/l17-step3.jpg' },
    ],

    explanation: {
      simple: 'Gravel catches big dirt, sand catches tiny dirt, and charcoal pulls out smells and chemicals!',
      scientific: 'Physical filtration removes suspended solids. Activated carbon (charcoal) uses adsorption to remove chemical impurities.',
    },

    safetyInstructions: ['The filtered water is NOT safe to drink yet! It might have bacteria.'],

    quiz: [
      { question: 'What does charcoal do?', options: ['Colors the water', 'Filters out chemicals and smells', 'Makes the water salty', 'Heats the water'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l17-filter.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 18 — Periscope
  // ═══════════════════════════════════════════
  {
    levelNumber: 18,
    id: 'scientist-18',
    title: 'Build a Periscope',
    subtitle: 'See over walls',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Optics',

    overview: 'Learn how to reflect light around corners using mirrors.',

    materials: [
      { name: 'Small Mirrors', quantity: 2, description: 'Flat mirrors', imageUrl: '/materials/mirror.jpg', estimatedCost: '₹20' },
      { name: 'Cardboard Box', quantity: 1, description: 'Long rectangular box', imageUrl: '/materials/carton.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Angle Mirrors', instruction: 'Tape mirrors at 45-degree angles at the top and bottom of the box.', imageUrl: '/steps/l18-step1.jpg' },
      { stepNumber: 2, title: 'Spying', instruction: 'Look through the bottom hole to see what is outside the top hole.', imageUrl: '/steps/l18-step2.jpg' },
    ],

    explanation: {
      simple: 'Light hits the top mirror, bounces down the tube, and hits the second mirror into your eye!',
      scientific: 'This uses the Law of Reflection: Angle of Incidence equals the Angle of Reflection.',
    },

    quiz: [
      { question: 'What angle are the mirrors at?', options: ['90 degrees', '45 degrees', '180 degrees', '0 degrees'], correctIndex: 1 },
    ],

    youtubeVideoId: '6T9xO607Zp0',
    outputImageUrl: '/outputs/l18-periscope.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 19 — Rubber Band Helicopter
  // ═══════════════════════════════════════════
  {
    levelNumber: 19,
    id: 'scientist-19',
    title: 'Rubber Band Helicopter',
    subtitle: 'Potential vs. Kinetic Energy',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Aeronautics',

    overview: 'Store energy in a rubber band and release it to make a propeller spin and fly.',

    materials: [
      { name: 'Plastic Propeller', quantity: 1, description: 'Lightweight propeller', imageUrl: '/materials/propeller.jpg', estimatedCost: '₹10' },
      { name: 'Rubber Band', quantity: 1, description: 'Strong rubber band', imageUrl: '/materials/rubber-band.jpg', estimatedCost: '₹2' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Motor', instruction: 'Connect the rubber band from the stick end to the propeller hook.', imageUrl: '/steps/l19-step1.jpg' },
      { stepNumber: 2, title: 'Winding', instruction: 'Twist the propeller 50 times to store energy.', tip: 'You are storing Potential Energy!', imageUrl: '/steps/l19-step2.jpg' },
      { stepNumber: 3, title: 'Launch', instruction: 'Let go and watch it take off!', imageUrl: '/steps/l19-step3.jpg' },
    ],

    explanation: {
      simple: 'Twisting the rubber band stores energy. When it untwists, it turns into "moving" energy and spins the propeller.',
      scientific: 'Elastic potential energy is converted into kinetic energy and aerodynamic lift.',
    },

    quiz: [
      { question: 'What energy is in the twisted band?', options: ['Heat', 'Potential', 'Sound', 'Light'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_QeE_7n_7k',
    outputImageUrl: '/outputs/l19-helicopter.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 20 — Simple Drone Basics
  // ═══════════════════════════════════════════
  {
    levelNumber: 20,
    id: 'scientist-20',
    title: 'Simple Drone Basics',
    subtitle: 'Understand lift and thrust',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 50,
    category: 'Robotics',

    overview: 'Build a 4-motor powered lifting platform to understand how drones stay stable.',

    materials: [
      { name: 'DC Motors', quantity: 4, description: 'Small coreless motors', imageUrl: '/materials/coreless-motor.jpg', estimatedCost: '₹200' },
      { name: 'Popsicle Sticks', quantity: 4, description: 'For the frame', imageUrl: '/materials/popsicle-sticks.jpg', estimatedCost: '₹10' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Frame', instruction: 'Glue sticks into an "X" shape.', imageUrl: '/steps/l20-step1.jpg' },
      { stepNumber: 2, title: 'Mount Motors', instruction: 'Glue one motor to each end of the X.', imageUrl: '/steps/l20-step2.jpg' },
      { stepNumber: 3, title: 'Lift Off', instruction: 'Connect all 4 motors to a battery and watch the platform lift!', tip: 'Adjacent motors must spin in opposite directions for stability.', imageUrl: '/steps/l20-step3.jpg' },
    ],

    explanation: {
      simple: 'Four motors push air down to lift the drone. By spinning them in different ways, the drone stays balanced.',
      scientific: 'Multi-rotors achieve flight by varying the RPM of individual motors to control thrust and torque cancellation.',
    },

    safetyInstructions: ['Propellers spin fast — keep away from face'],

    quiz: [
      { question: 'What happens if thrust is more than weight?', options: ['Drone falls', 'Drone lifts off', 'Drone explodes', 'Drone gets heavy'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_QeE_7n_7k',
    outputImageUrl: '/outputs/l20-drone-base.jpg',
  },
];

export default scientistLevels11to20;
