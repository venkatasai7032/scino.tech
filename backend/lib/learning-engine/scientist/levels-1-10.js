// ============================================
//  SCINO Scientist Program — Levels 1–10
//  Stage: Curious Explorer
//  Theme: Basic Experiments & Fundamentals
//  Each level = unique, hands-on experiment
// ============================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const scientistLevels1to10 = [
  // ═══════════════════════════════════════════
  //  LEVEL 1 — Simple Electric Circuit
  // ═══════════════════════════════════════════
  {
    levelNumber: 1,
    id: 'scientist-1',
    title: 'Your First Electric Circuit',
    subtitle: 'Light up an LED with a battery and wires',
    difficulty: DIFFICULTY.BEGINNER,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '20 minutes',
    xpReward: 25,
    category: 'Electricity Basics',

    overview:
      'In this very first experiment, you will build a simple electric circuit that lights up an LED. ' +
      'You will learn how electricity flows through wires, what a circuit is, and why it must be "closed" for current to flow.',

    learningObjectives: [
      'Understand what an electric circuit is',
      'Learn the role of a battery as an energy source',
      'Identify positive and negative terminals',
      'Successfully light up an LED',
    ],

    materials: [
      {
        name: '9V Battery',
        quantity: 1,
        description: 'Standard 9-volt alkaline battery',
        imageUrl: '/materials/9v-battery.jpg',
        estimatedCost: '₹30',
        alternatives: ['4× AA batteries with holder'],
      },
      {
        name: 'LED (Red or Green)',
        quantity: 1,
        description: '5mm standard LED, any color',
        imageUrl: '/materials/led-5mm.jpg',
        estimatedCost: '₹5',
        alternatives: ['Small flashlight bulb'],
      },
      {
        name: 'Copper Wire',
        quantity: 2,
        description: 'Insulated copper wire, ~15cm each',
        imageUrl: '/materials/copper-wire.jpg',
        estimatedCost: '₹10',
        alternatives: ['Alligator clip wires'],
      },
      {
        name: '330Ω Resistor',
        quantity: 1,
        description: 'Orange-orange-brown color bands',
        imageUrl: '/materials/330-resistor.jpg',
        estimatedCost: '₹2',
        alternatives: ['220Ω or 470Ω resistor'],
      },
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Identify Battery Terminals',
        instruction:
          'Look at your 9V battery. The small round cap is the POSITIVE (+) terminal. The larger snap connector is the NEGATIVE (−) terminal.',
        tip: 'Always connect positive to the longer leg of the LED.',
        imageUrl: '/steps/l1-step1.jpg',
      },
      {
        stepNumber: 2,
        title: 'Identify LED Legs',
        instruction:
          'An LED has two legs — a longer leg (ANODE / positive) and a shorter leg (CATHODE / negative). ' +
          'The LED only works when connected in the right direction.',
        tip: 'Remember: Long leg = positive. Think "L" for Long and "L" for the + (positive) sign.',
        imageUrl: '/steps/l1-step2.jpg',
      },
      {
        stepNumber: 3,
        title: 'Connect the Resistor',
        instruction:
          'Take one wire and connect it from the battery\'s POSITIVE terminal to one end of the 330Ω resistor. ' +
          'The resistor protects the LED from getting too much current.',
        tip: 'Resistors work in either direction — there\'s no wrong way to put them in.',
        imageUrl: '/steps/l1-step3.jpg',
      },
      {
        stepNumber: 4,
        title: 'Connect LED to Resistor',
        instruction:
          'Connect the other end of the resistor to the LONGER leg (positive/anode) of the LED.',
        tip: 'If the LED doesn\'t light up later, try flipping it around.',
        imageUrl: '/steps/l1-step4.jpg',
      },
      {
        stepNumber: 5,
        title: 'Complete the Circuit',
        instruction:
          'Take the second wire and connect the SHORTER leg (negative/cathode) of the LED back to the NEGATIVE terminal of the battery.',
        tip: 'The moment you complete this connection, the LED should light up!',
        imageUrl: '/steps/l1-step5.jpg',
      },
      {
        stepNumber: 6,
        title: 'Observe & Celebrate!',
        instruction:
          'Your LED should now be glowing! You\'ve built your first electric circuit. The battery pushes electrons through the wire, ' +
          'through the resistor, through the LED (which converts electrical energy to light), and back to the battery.',
        tip: 'Try using different colored LEDs. Does the brightness change?',
        imageUrl: '/steps/l1-step6.jpg',
      },
    ],

    explanation: {
      simple:
        'Electricity is like water flowing through pipes. The battery is the pump, wires are the pipes, ' +
        'and the LED is like a tiny light that turns on when water (electricity) flows through it. ' +
        'The circuit must be a complete loop — if you break any connection, the flow stops.',
      scientific:
        'An electric circuit is a closed path through which electric current flows. The battery provides ' +
        'electromotive force (EMF) measured in volts. Current (flow of electrons) is measured in amperes. ' +
        'The resistor limits current using Ohm\'s Law: V = IR. The LED is a semiconductor diode that emits ' +
        'photons when forward-biased above its threshold voltage (~2V for red LEDs).',
      keyTerms: [
        { term: 'Circuit', definition: 'A closed loop through which electricity flows' },
        { term: 'Voltage', definition: 'The "pressure" that pushes electricity through a circuit (measured in Volts)' },
        { term: 'Current', definition: 'The flow of electrons (measured in Amperes)' },
        { term: 'Resistance', definition: 'Opposition to current flow (measured in Ohms)' },
        { term: 'LED', definition: 'Light Emitting Diode — converts electricity to light' },
      ],
    },

    safetyInstructions: [
      'Never short-circuit the battery (connecting + directly to − without a load)',
      'LEDs can be damaged by too much current — always use a resistor',
      'Do not lick or swallow small components',
      'If wires get hot, disconnect immediately',
    ],

    quiz: [
      {
        question: 'What happens if you break the circuit by removing one wire?',
        options: ['LED gets brighter', 'LED turns off', 'Battery explodes', 'Nothing changes'],
        correctIndex: 1,
        explanation: 'Electricity needs a complete closed loop to flow. Breaking the circuit stops current flow.',
      },
      {
        question: 'Which leg of the LED is the positive (anode)?',
        options: ['The shorter leg', 'The longer leg', 'Both legs', 'Neither leg'],
        correctIndex: 1,
        explanation: 'The longer leg of an LED is the anode (positive). It must be connected to the positive side.',
      },
      {
        question: 'Why do we use a resistor in this circuit?',
        options: [
          'To make the LED flash',
          'To protect the LED from too much current',
          'To increase the voltage',
          'Resistors are not needed',
        ],
        correctIndex: 1,
        explanation: 'Without a resistor, too much current would flow through the LED and burn it out.',
      },
    ],

    youtubeVideoId: 'HOFp8bHTN30',
    outputImageUrl: '/outputs/l1-circuit.jpg',

    funFact:
      'The first practical LED was invented in 1962 by Nick Holonyak Jr. at General Electric. ' +
      'Today, LEDs are used in everything from phone screens to giant stadium displays!',

    nextLevelPreview:
      'In Level 2, you\'ll build a switch into your circuit and learn how to control when the LED turns on and off!',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 2 — Circuit with a Switch
  // ═══════════════════════════════════════════
  {
    levelNumber: 2,
    id: 'scientist-2',
    title: 'Adding a Switch to Your Circuit',
    subtitle: 'Control your LED with a homemade switch',
    difficulty: DIFFICULTY.BEGINNER,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '25 minutes',
    xpReward: 25,
    category: 'Electricity Basics',

    overview:
      'Build upon Level 1 by adding a switch to your circuit. You\'ll learn how switches control ' +
      'the flow of electricity and create your own switch using everyday materials like paper clips and thumbtacks.',

    learningObjectives: [
      'Understand the concept of open and closed circuits',
      'Build a homemade switch from paper clips',
      'Learn how real-world switches work',
      'Control an LED with your switch',
    ],

    materials: [
      { name: '9V Battery', quantity: 1, description: 'From Level 1', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹30', alternatives: [] },
      { name: 'LED', quantity: 1, description: 'From Level 1', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹5', alternatives: [] },
      { name: '330Ω Resistor', quantity: 1, description: 'From Level 1', imageUrl: '/materials/330-resistor.jpg', estimatedCost: '₹2', alternatives: [] },
      { name: 'Copper Wires', quantity: 3, description: '15cm insulated copper wires', imageUrl: '/materials/copper-wire.jpg', estimatedCost: '₹15', alternatives: ['Alligator clip wires'] },
      { name: 'Paper Clip', quantity: 1, description: 'Standard metal paper clip (unbent)', imageUrl: '/materials/paper-clip.jpg', estimatedCost: '₹1', alternatives: ['Metal strip'] },
      { name: 'Thumbtacks', quantity: 2, description: 'Metal thumbtacks/drawing pins', imageUrl: '/materials/thumbtacks.jpg', estimatedCost: '₹5', alternatives: ['Small nails'] },
      { name: 'Cardboard', quantity: 1, description: 'Small piece of cardboard (5×3cm)', imageUrl: '/materials/cardboard.jpg', estimatedCost: '₹0', alternatives: ['Thick paper'] },
    ],

    steps: [
      { stepNumber: 1, title: 'Build the Switch Base', instruction: 'Push two thumbtacks into the cardboard about 2cm apart. These will be your switch contacts.', tip: 'Push them in firmly so they don\'t move.', imageUrl: '/steps/l2-step1.jpg' },
      { stepNumber: 2, title: 'Attach the Paper Clip', instruction: 'Slide a paper clip under one thumbtack so it can swing freely and touch the other thumbtack.', tip: 'The paper clip should rotate easily to make and break contact.', imageUrl: '/steps/l2-step2.jpg' },
      { stepNumber: 3, title: 'Wire the Switch', instruction: 'Connect a wire from the battery POSITIVE terminal to one thumbtack. Connect another wire from the other thumbtack to the resistor, then to the LED positive leg.', tip: 'The switch goes between the battery and the LED.', imageUrl: '/steps/l2-step3.jpg' },
      { stepNumber: 4, title: 'Complete the Circuit', instruction: 'Connect the LED negative leg back to the battery NEGATIVE terminal with the third wire.', tip: 'Make sure all connections are tight.', imageUrl: '/steps/l2-step4.jpg' },
      { stepNumber: 5, title: 'Test Your Switch', instruction: 'Swing the paper clip to touch the second thumbtack — the LED should turn ON. Swing it away — the LED turns OFF. You\'ve built a working switch!', tip: 'This is exactly how light switches in your home work — they connect or disconnect the circuit.', imageUrl: '/steps/l2-step5.jpg' },
    ],

    explanation: {
      simple: 'A switch is like a bridge. When the bridge is down (closed), cars (electricity) can cross. When the bridge is up (open), cars must stop. Your paper clip acts as this bridge!',
      scientific: 'A switch is a device that completes (closes) or breaks (opens) an electric circuit. In a closed circuit, current flows continuously. In an open circuit, the path is broken and no current flows. Switches work by physically connecting or separating conductive materials.',
      keyTerms: [
        { term: 'Open Circuit', definition: 'A broken circuit where current cannot flow' },
        { term: 'Closed Circuit', definition: 'A complete circuit where current flows freely' },
        { term: 'Switch', definition: 'A device that opens or closes a circuit' },
        { term: 'Conductor', definition: 'A material that allows electricity to flow through it (like metal)' },
      ],
    },

    safetyInstructions: [
      'Be careful with thumbtacks — they are sharp',
      'Do not leave the circuit connected for too long to conserve battery',
      'Handle paper clips with care to avoid poking yourself',
    ],

    quiz: [
      { question: 'When a switch is "open", what happens to the circuit?', options: ['Current increases', 'Current stops flowing', 'LED gets brighter', 'Battery charges'], correctIndex: 1, explanation: 'An open switch breaks the circuit path, stopping current flow.' },
      { question: 'What material makes a good switch contact?', options: ['Rubber', 'Wood', 'Metal', 'Plastic'], correctIndex: 2, explanation: 'Metals are good conductors of electricity, making them ideal for switch contacts.' },
    ],

    youtubeVideoId: 'x2EuYs_Druo',
    outputImageUrl: '/outputs/l2-switch-circuit.jpg',
    funFact: 'The average home has about 30–50 light switches. Each one works on the same principle you just learned — connecting and disconnecting a circuit!',
    nextLevelPreview: 'Level 3: Build a circuit that powers a small DC motor and make things MOVE!',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 3 — DC Motor Circuit
  // ═══════════════════════════════════════════
  {
    levelNumber: 3,
    id: 'scientist-3',
    title: 'Spinning a DC Motor',
    subtitle: 'Convert electrical energy into motion',
    difficulty: DIFFICULTY.BEGINNER,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '25 minutes',
    xpReward: 30,
    category: 'Electromagnetism',

    overview: 'Connect a small DC motor to a battery and watch it spin! Learn how electric motors convert electrical energy into rotational (mechanical) energy using magnets and coils.',

    learningObjectives: [
      'Understand how a DC motor works',
      'Learn about electromagnetic energy conversion',
      'Wire a motor circuit with proper polarity',
      'Observe how reversing connections changes direction',
    ],

    materials: [
      { name: 'Small DC Motor (3V–6V)', quantity: 1, description: 'FA-130 type hobby motor', imageUrl: '/materials/dc-motor.jpg', estimatedCost: '₹20', alternatives: ['Motor from broken toy'] },
      { name: '9V Battery', quantity: 1, description: 'Standard 9V (use with resistor or lower voltage battery)', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹30', alternatives: ['2× AA batteries with holder (3V)'] },
      { name: 'Copper Wires', quantity: 2, description: 'Insulated copper wires with stripped ends', imageUrl: '/materials/copper-wire.jpg', estimatedCost: '₹10', alternatives: ['Alligator clips'] },
      { name: 'Switch (from Level 2)', quantity: 1, description: 'Your homemade paper clip switch', imageUrl: '/materials/paper-clip.jpg', estimatedCost: '₹0', alternatives: ['Any toggle switch'] },
      { name: 'Small Propeller Fan', quantity: 1, description: 'Plastic propeller that fits on motor shaft', imageUrl: '/materials/propeller.jpg', estimatedCost: '₹5', alternatives: ['Tape a small paper flag to the shaft'] },
    ],

    steps: [
      { stepNumber: 1, title: 'Identify Motor Terminals', instruction: 'Your DC motor has two metal tabs (terminals). Unlike LEDs, motors work in both directions — the polarity determines spin direction.', tip: 'If using a 9V battery, the motor will spin very fast. A 3V source (2 AA batteries) is gentler.', imageUrl: '/steps/l3-step1.jpg' },
      { stepNumber: 2, title: 'Attach the Propeller', instruction: 'Push the small plastic propeller onto the motor shaft. This will make the spinning visible and create airflow.', tip: 'If you don\'t have a propeller, tape a small piece of paper to the shaft as a flag.', imageUrl: '/steps/l3-step2.jpg' },
      { stepNumber: 3, title: 'Connect Battery to Motor via Switch', instruction: 'Wire: Battery (+) → Switch → Motor terminal 1. Then: Motor terminal 2 → Battery (−).', tip: 'Use your Level 2 switch to control the motor!', imageUrl: '/steps/l3-step3.jpg' },
      { stepNumber: 4, title: 'Flip the Switch ON', instruction: 'Close your switch — the motor should spin and the propeller should rotate! Feel the air it pushes.', tip: 'This is exactly how a desk fan works!', imageUrl: '/steps/l3-step4.jpg' },
      { stepNumber: 5, title: 'Reverse the Direction', instruction: 'Swap the two wires on the motor terminals. Close the switch again — the motor now spins in the OPPOSITE direction!', tip: 'This proves that motor direction depends on current flow direction.', imageUrl: '/steps/l3-step5.jpg' },
    ],

    explanation: {
      simple: 'A motor is like a spinning magnet. When electricity flows through coils of wire inside the motor, it creates a temporary magnet. This magnet pushes and pulls against permanent magnets, causing the shaft to spin!',
      scientific: 'A DC motor operates on the principle of electromagnetic force. When current flows through the armature coil in a magnetic field, it experiences a force (Lorentz force: F = qv × B). The commutator reverses current direction every half-turn, maintaining continuous rotation. The motor converts electrical energy to mechanical (kinetic) energy.',
      keyTerms: [
        { term: 'DC Motor', definition: 'A motor that runs on direct current and converts electrical energy to rotational motion' },
        { term: 'Electromagnet', definition: 'A temporary magnet created by running electric current through a coil of wire' },
        { term: 'Polarity', definition: 'The direction of current flow, which determines motor spin direction' },
        { term: 'Armature', definition: 'The rotating coil inside a motor' },
      ],
    },

    safetyInstructions: [
      'Keep fingers, hair, and clothing away from the spinning motor',
      'Do not stall the motor by holding the shaft — it can overheat',
      'The motor may get warm after prolonged use — let it cool down',
      'Use lower voltage batteries (3V) for safer operation',
    ],

    quiz: [
      { question: 'What happens when you reverse the battery connections on a DC motor?', options: ['Motor stops', 'Motor spins in the opposite direction', 'Motor gets louder', 'Motor breaks'], correctIndex: 1, explanation: 'Reversing polarity reverses the current flow direction, which reverses the magnetic forces and thus the spin direction.' },
      { question: 'A DC motor converts ____ energy to ____ energy.', options: ['Light to heat', 'Electrical to mechanical', 'Sound to light', 'Mechanical to electrical'], correctIndex: 1, explanation: 'Motors convert electrical energy (from the battery) into mechanical energy (rotation).' },
    ],

    youtubeVideoId: 'CWulQ1ZSE3c',
    outputImageUrl: '/outputs/l3-motor-fan.jpg',
    funFact: 'Electric motors are EVERYWHERE — your phone has tiny vibration motors, your car has dozens, and even your washing machine uses one. The world uses billions of electric motors!',
    nextLevelPreview: 'Level 4: Build a battery-powered small car using your motor knowledge!',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 4 — Battery-Powered Car
  // ═══════════════════════════════════════════
  {
    levelNumber: 4,
    id: 'scientist-4',
    title: 'Build a Battery-Powered Car',
    subtitle: 'Your first moving vehicle powered by a DC motor',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 35,
    category: 'Mechanical Engineering',

    overview: 'Combine your motor and circuit skills to build a small car that actually moves! You\'ll learn about power transmission, friction, and basic mechanical design.',

    learningObjectives: [
      'Apply motor circuit knowledge to a real project',
      'Understand basic power transmission (motor to wheels)',
      'Learn about friction and traction',
      'Build a functional moving vehicle',
    ],

    materials: [
      { name: 'DC Motor (3V–6V)', quantity: 1, description: 'FA-130 hobby motor', imageUrl: '/materials/dc-motor.jpg', estimatedCost: '₹20', alternatives: [] },
      { name: 'AA Batteries', quantity: 2, description: 'Standard 1.5V AA batteries', imageUrl: '/materials/aa-batteries.jpg', estimatedCost: '₹20', alternatives: [] },
      { name: 'AA Battery Holder', quantity: 1, description: '2× AA battery holder with wires', imageUrl: '/materials/battery-holder.jpg', estimatedCost: '₹15', alternatives: ['Tape batteries together with wires'] },
      { name: 'Bottle Caps', quantity: 4, description: 'Plastic bottle caps (same size) — these are your wheels', imageUrl: '/materials/bottle-caps.jpg', estimatedCost: '₹0', alternatives: ['Old toy wheels', 'Cardboard circles'] },
      { name: 'Wooden Skewers', quantity: 2, description: 'Bamboo skewers or stiff wire for axles', imageUrl: '/materials/skewers.jpg', estimatedCost: '₹5', alternatives: ['Stiff wire', 'Pencils'] },
      { name: 'Cardboard / Foam Board', quantity: 1, description: 'Stiff cardboard for the car body (~15×8cm)', imageUrl: '/materials/cardboard.jpg', estimatedCost: '₹0', alternatives: ['Popsicle sticks glued together'] },
      { name: 'Rubber Band', quantity: 1, description: 'Standard rubber band for power transmission', imageUrl: '/materials/rubber-band.jpg', estimatedCost: '₹1', alternatives: [] },
      { name: 'Straws', quantity: 2, description: 'Drinking straws (axle holders)', imageUrl: '/materials/straws.jpg', estimatedCost: '₹2', alternatives: [] },
      { name: 'Hot Glue Gun', quantity: 1, description: 'For securing components (or use strong tape)', imageUrl: '/materials/glue-gun.jpg', estimatedCost: '₹150', alternatives: ['Strong tape', 'Fevicol'] },
      { name: 'Switch (from Level 2)', quantity: 1, description: 'Your paper clip switch or a small toggle switch', imageUrl: '/materials/switch.jpg', estimatedCost: '₹10', alternatives: [] },
    ],

    steps: [
      { stepNumber: 1, title: 'Prepare the Chassis', instruction: 'Cut your cardboard to approximately 15cm × 8cm. This is the body (chassis) of your car.', tip: 'A stiffer material makes a better chassis. You can layer two pieces of cardboard.', imageUrl: '/steps/l4-step1.jpg' },
      { stepNumber: 2, title: 'Create Axle Holders', instruction: 'Cut two pieces of straw (~3cm each). Glue them across the bottom of the chassis, one near the front edge and one near the back edge. These hold the axles.', tip: 'Make sure the straws are parallel to each other and perpendicular to the chassis length.', imageUrl: '/steps/l4-step2.jpg' },
      { stepNumber: 3, title: 'Insert Axles and Wheels', instruction: 'Push skewers through the straws to create axles. Poke holes in the center of 4 bottle caps and push them onto the skewer ends as wheels. Glue them in place.', tip: 'The wheels should spin freely. Don\'t glue the axle to the straw — only the wheels to the axle.', imageUrl: '/steps/l4-step3.jpg' },
      { stepNumber: 4, title: 'Mount the Motor', instruction: 'Glue the DC motor to the top of the chassis near the rear axle. The motor shaft should face toward the rear axle.', tip: 'Position the motor so the rubber band can connect the motor shaft to the rear axle.', imageUrl: '/steps/l4-step4.jpg' },
      { stepNumber: 5, title: 'Power Transmission', instruction: 'Loop a rubber band from the motor shaft pulley to the rear axle. When the motor spins, the rubber band transfers that rotation to the rear wheels!', tip: 'If the rubber band is too loose, double it up. It needs friction to grip.', imageUrl: '/steps/l4-step5.jpg' },
      { stepNumber: 6, title: 'Wire the Electronics', instruction: 'Mount the battery holder on the chassis. Wire: Battery (+) → Switch → Motor (+). Motor (−) → Battery (−).', tip: 'Keep wires neat and taped down so they don\'t interfere with the wheels.', imageUrl: '/steps/l4-step6.jpg' },
      { stepNumber: 7, title: 'Test Drive!', instruction: 'Place your car on a smooth, flat surface. Flip the switch ON — your car should drive forward! To go backward, swap the motor wires.', tip: 'If the car veers to one side, check that all four wheels are level and aligned.', imageUrl: '/steps/l4-step7.jpg' },
    ],

    explanation: {
      simple: 'Your car works like a real car (simplified)! The battery is the fuel, the motor is the engine, the rubber band is the drive belt, and the axle transfers power to the wheels. When the motor spins, the rubber band turns the axle, which turns the wheels, and the car moves!',
      scientific: 'This project demonstrates energy conversion chain: Chemical energy (battery) → Electrical energy → Electromagnetic energy (motor) → Mechanical energy (rotation) → Kinetic energy (car movement). The rubber band acts as a belt drive system, a common power transmission method. Friction between the wheels and surface provides traction.',
      keyTerms: [
        { term: 'Chassis', definition: 'The structural frame of a vehicle' },
        { term: 'Axle', definition: 'A rod that connects two wheels and allows them to rotate' },
        { term: 'Power Transmission', definition: 'Transferring motion from a motor to the wheels' },
        { term: 'Traction', definition: 'The grip between the wheels and the ground surface' },
      ],
    },

    safetyInstructions: [
      'Use hot glue gun carefully — the glue is very hot',
      'Have an adult help with cutting cardboard if using a knife',
      'Keep the car on the floor, not on tables where it could fall off',
      'Do not let the motor run continuously — it can overheat',
    ],

    quiz: [
      { question: 'What does the rubber band do in this car?', options: ['Holds the car together', 'Transfers motor rotation to the rear axle', 'Powers the motor', 'Acts as a brake'], correctIndex: 1, explanation: 'The rubber band acts as a belt drive, transferring rotational motion from the motor shaft to the rear axle.' },
      { question: 'The car uses which energy conversion chain?', options: ['Light → Sound → Heat', 'Chemical → Electrical → Mechanical', 'Nuclear → Thermal → Light', 'Mechanical → Chemical → Light'], correctIndex: 1, explanation: 'Battery (chemical) → Electricity → Motor (mechanical rotation) → Car movement.' },
    ],

    youtubeVideoId: 'qxGcsiPNhbk',
    outputImageUrl: '/outputs/l4-battery-car.jpg',
    funFact: 'The first electric car was built in the 1830s — before gasoline cars! Electric vehicles are actually older technology making a comeback with companies like Tesla.',
    nextLevelPreview: 'Level 5: Create your own electromagnet and discover the connection between electricity and magnetism!',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 5 — Electromagnet
  // ═══════════════════════════════════════════
  {
    levelNumber: 5,
    id: 'scientist-5',
    title: 'Build an Electromagnet',
    subtitle: 'Create a magnet you can turn on and off',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Electromagnetism',

    overview: 'Wind wire around a nail, connect it to a battery, and watch it pick up paper clips! Learn how electricity creates magnetism and why electromagnets are more useful than permanent magnets.',

    learningObjectives: ['Understand the relationship between electricity and magnetism', 'Build a functioning electromagnet', 'Test how coil turns affect strength', 'Learn real-world uses of electromagnets'],

    materials: [
      { name: 'Iron Nail (3 inch)', quantity: 1, description: 'Large iron/steel nail', imageUrl: '/materials/iron-nail.jpg', estimatedCost: '₹5', alternatives: ['Large steel bolt'] },
      { name: 'Insulated Copper Wire', quantity: 1, description: '1 meter of thin insulated copper wire (24–28 gauge)', imageUrl: '/materials/magnet-wire.jpg', estimatedCost: '₹15', alternatives: [] },
      { name: 'D-Cell Battery', quantity: 1, description: '1.5V D battery (larger = more current)', imageUrl: '/materials/d-battery.jpg', estimatedCost: '₹40', alternatives: ['AA battery (weaker but works)'] },
      { name: 'Paper Clips', quantity: 10, description: 'Small metal paper clips for testing', imageUrl: '/materials/paper-clips.jpg', estimatedCost: '₹5', alternatives: ['Small nails', 'Staples'] },
      { name: 'Tape', quantity: 1, description: 'Electrical tape or regular tape', imageUrl: '/materials/tape.jpg', estimatedCost: '₹10', alternatives: [] },
    ],

    steps: [
      { stepNumber: 1, title: 'Strip Wire Ends', instruction: 'Strip about 2cm of insulation from both ends of your copper wire so bare metal is exposed.', tip: 'Use sandpaper or carefully scrape with scissors if you don\'t have wire strippers.', imageUrl: '/steps/l5-step1.jpg' },
      { stepNumber: 2, title: 'Wind the Coil', instruction: 'Starting from one end, tightly wind the wire around the nail in neat, close rows. Make at least 50 turns. Secure with tape at both ends.', tip: 'More turns = stronger magnet. Keep the coils tight and in one direction.', imageUrl: '/steps/l5-step2.jpg' },
      { stepNumber: 3, title: 'Connect to Battery', instruction: 'Touch one bare wire end to the battery\'s positive terminal and the other to the negative terminal. Hold them firmly (or tape them).', tip: 'The nail will get warm — this is normal. Don\'t keep it connected for more than 30 seconds at a time.', imageUrl: '/steps/l5-step3.jpg' },
      { stepNumber: 4, title: 'Test Your Electromagnet', instruction: 'While connected, bring the nail tip near the paper clips. They should jump up and stick to the nail!', tip: 'Count how many paper clips you can pick up — this measures your electromagnet\'s strength.', imageUrl: '/steps/l5-step4.jpg' },
      { stepNumber: 5, title: 'Disconnect — Observe', instruction: 'Disconnect a wire from the battery. The paper clips should fall off! Your magnet only works when electricity flows.', tip: 'This is the key advantage of electromagnets — you can turn them ON and OFF!', imageUrl: '/steps/l5-step5.jpg' },
      { stepNumber: 6, title: 'Experiment: More Turns', instruction: 'Add 50 more turns of wire. Reconnect and test again. Can you pick up MORE paper clips now?', tip: 'You should see a noticeable increase in strength. Science is about testing and measuring!', imageUrl: '/steps/l5-step6.jpg' },
    ],

    explanation: {
      simple: 'When electricity flows through a wire, it creates an invisible force field around it called a magnetic field. When you coil the wire many times around a nail, all those tiny magnetic fields add up and turn the nail into a strong magnet! Disconnecting the battery stops the electricity and the magnetism disappears.',
      scientific: 'An electromagnet exploits Ampere\'s Law: a current-carrying conductor produces a magnetic field. Coiling the wire concentrates the field. The ferromagnetic iron nail amplifies the field by aligning its internal magnetic domains. Field strength is proportional to current (I) and number of turns (N): B = μ₀NI/L, where μ₀ is the permeability of free space and L is the coil length.',
      keyTerms: [
        { term: 'Electromagnet', definition: 'A magnet created by electric current flowing through a coil' },
        { term: 'Magnetic Field', definition: 'An invisible force field created around magnets and electric currents' },
        { term: 'Coil', definition: 'Wire wound in a spiral shape to concentrate magnetic force' },
        { term: 'Ferromagnetic', definition: 'Materials (like iron) that are strongly attracted to magnets' },
      ],
    },

    safetyInstructions: ['The wire and nail WILL get warm — disconnect after 30 seconds', 'Do not use rechargeable batteries for this experiment', 'Be careful with stripped wire ends (sharp)', 'Do not bring electromagnet near electronic devices, credit cards, or computers'],

    quiz: [
      { question: 'What happens when you disconnect the battery from the electromagnet?', options: ['It stays magnetic forever', 'It loses its magnetism', 'It gets stronger', 'It reverses polarity'], correctIndex: 1, explanation: 'An electromagnet only works when current flows. No current = no magnetism.' },
      { question: 'How can you make the electromagnet stronger?', options: ['Use a wooden core', 'Add more wire turns', 'Use thinner wire', 'Remove the nail'], correctIndex: 1, explanation: 'More coil turns means more magnetic field lines, increasing strength.' },
    ],

    youtubeVideoId: 'WS__5HWm1lg',
    outputImageUrl: '/outputs/l5-electromagnet.jpg',
    funFact: 'Junkyards use giant electromagnets to pick up entire cars! They can lift tons of metal and drop it by simply turning off the electricity.',
    nextLevelPreview: 'Level 6: Build a simple buzzer using your electromagnet knowledge!',
  },

  // ═══════════════════ LEVELS 6–10 (Compact) ══════════════════════

  // ─── LEVEL 6 — Electric Buzzer ─────────────
  {
    levelNumber: 6,
    id: 'scientist-6',
    title: 'Build an Electric Buzzer',
    subtitle: 'Create a device that makes sound from electricity',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 30,
    category: 'Electromagnetism & Sound',

    overview: 'Use the electromagnet principle to create a buzzing device. Learn how an electromagnet can rapidly attract and release a metal strip, creating vibrations that produce sound.',

    learningObjectives: ['Apply electromagnet knowledge to create sound', 'Understand vibration and sound waves', 'Build a self-oscillating circuit', 'Learn how doorbells work'],

    materials: [
      { name: 'Electromagnet (from Level 5)', quantity: 1, description: 'Your nail electromagnet', imageUrl: '/materials/iron-nail.jpg', estimatedCost: '₹0', alternatives: [] },
      { name: 'Thin Metal Strip', quantity: 1, description: 'Flexible steel strip or hacksaw blade piece (~8cm)', imageUrl: '/materials/metal-strip.jpg', estimatedCost: '₹10', alternatives: ['Thin tin can strip'] },
      { name: '9V Battery', quantity: 1, description: 'Standard 9V battery', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹30', alternatives: [] },
      { name: 'Copper Wires', quantity: 3, description: 'Insulated copper wires', imageUrl: '/materials/copper-wire.jpg', estimatedCost: '₹15', alternatives: [] },
      { name: 'Wooden Base', quantity: 1, description: 'Small piece of wood for mounting (~10×5cm)', imageUrl: '/materials/wood-base.jpg', estimatedCost: '₹0', alternatives: ['Thick cardboard'] },
      { name: 'Screws/Tacks', quantity: 3, description: 'For mounting components', imageUrl: '/materials/screws.jpg', estimatedCost: '₹5', alternatives: ['Hot glue'] },
    ],

    steps: [
      { stepNumber: 1, title: 'Mount the Electromagnet', instruction: 'Secure your nail electromagnet to the wooden base with tape or a screw, positioned vertically.', tip: 'The nail tip should point upward.', imageUrl: '/steps/l6-step1.jpg' },
      { stepNumber: 2, title: 'Position the Metal Strip', instruction: 'Mount the metal strip so one end is fixed to the base and the free end hovers just above the nail tip (about 2mm gap).', tip: 'The strip must be flexible enough to vibrate when pulled by the electromagnet.', imageUrl: '/steps/l6-step2.jpg' },
      { stepNumber: 3, title: 'Create the Contact Point', instruction: 'Attach a wire to the free end of the metal strip. This wire will connect to the circuit in a way that the strip acts as a switch.', tip: 'When the strip is pulled down by the magnet, it should break the circuit, releasing the strip — creating oscillation.', imageUrl: '/steps/l6-step3.jpg' },
      { stepNumber: 4, title: 'Wire the Self-Breaking Circuit', instruction: 'Connect: Battery (+) → Coil → Metal strip contact point → Back to Battery (−). The strip should complete the circuit in its resting position.', tip: 'When current flows, the magnet pulls the strip → contact breaks → magnet turns off → strip springs back → contact remakes → cycle repeats!', imageUrl: '/steps/l6-step4.jpg' },
      { stepNumber: 5, title: 'Listen to the Buzz!', instruction: 'Connect the battery — you should hear a buzzing sound as the strip rapidly vibrates back and forth!', tip: 'Adjust the gap between the nail and strip to change the buzz frequency.', imageUrl: '/steps/l6-step5.jpg' },
    ],

    explanation: {
      simple: 'The buzzer works like a tiny see-saw. Electricity makes the magnet pull the metal strip down (buzz). This breaks the circuit, so the magnet turns off. The strip springs back up, completing the circuit again. This happens over and over so fast it makes a buzzing sound!',
      scientific: 'This is a self-interrupting electromagnetic oscillator. The metal strip acts as both a switch and a vibrating element. The oscillation frequency depends on the strip\'s stiffness, mass, and the electromagnetic force. The vibrations propagate as pressure waves through air, creating audible sound. This is the same principle behind old electric doorbells.',
      keyTerms: [
        { term: 'Oscillation', definition: 'Repeated back-and-forth motion' },
        { term: 'Vibration', definition: 'Rapid oscillation that can produce sound' },
        { term: 'Frequency', definition: 'How many oscillations occur per second (measured in Hertz)' },
        { term: 'Sound Wave', definition: 'A pressure wave traveling through air that we perceive as sound' },
      ],
    },

    safetyInstructions: ['The metal strip may have sharp edges — handle carefully', 'Prolonged use will drain the battery quickly', 'The buzzing sound may be loud — don\'t hold it near your ear'],

    quiz: [
      { question: 'What makes the metal strip vibrate?', options: ['Wind', 'The electromagnet pulling and releasing it rapidly', 'Heat from the battery', 'Sound from outside'], correctIndex: 1, explanation: 'The electromagnet repeatedly pulls the strip (closing the circuit), which breaks the contact (opening the circuit), releasing the strip — creating rapid oscillation.' },
    ],

    youtubeVideoId: 'U5Hoi3kZ_Bk',
    outputImageUrl: '/outputs/l6-buzzer.jpg',
    funFact: 'This exact mechanism was used in old telephone ringers and fire alarm bells for over 100 years before electronic buzzers replaced them!',
    nextLevelPreview: 'Level 7: Build a simple series and parallel circuit to understand how electricity distributes!',
  },

  // ─── LEVEL 7 — Series vs Parallel Circuits ────
  {
    levelNumber: 7,
    id: 'scientist-7',
    title: 'Series vs. Parallel Circuits',
    subtitle: 'Discover two fundamental ways to wire components',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Circuit Theory',

    overview: 'Build two circuits — one in series and one in parallel — and observe the critical differences in brightness, behavior, and reliability. This is one of the most important concepts in electronics!',

    learningObjectives: ['Build series and parallel circuits', 'Compare LED brightness in each configuration', 'Understand voltage division vs. current division', 'Learn why homes use parallel wiring'],

    materials: [
      { name: '9V Battery', quantity: 1, description: 'Standard 9V battery', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹30', alternatives: [] },
      { name: 'LEDs', quantity: 3, description: 'Three identical LEDs (same color)', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹15', alternatives: [] },
      { name: '330Ω Resistors', quantity: 3, description: 'For current limiting', imageUrl: '/materials/330-resistor.jpg', estimatedCost: '₹6', alternatives: [] },
      { name: 'Copper Wires', quantity: 8, description: 'Various lengths', imageUrl: '/materials/copper-wire.jpg', estimatedCost: '₹20', alternatives: ['Breadboard + jumper wires'] },
      { name: 'Breadboard (optional)', quantity: 1, description: 'Makes wiring much easier', imageUrl: '/materials/breadboard.jpg', estimatedCost: '₹60', alternatives: ['Direct wire connections'] },
    ],

    steps: [
      { stepNumber: 1, title: 'Build Series Circuit', instruction: 'Connect 3 LEDs in a line (chain): Battery (+) → R1 → LED1 → R2 → LED2 → R3 → LED3 → Battery (−). Each LED connects to the next.', tip: 'In series, all components share the same current path.', imageUrl: '/steps/l7-step1.jpg' },
      { stepNumber: 2, title: 'Observe Series Behavior', instruction: 'Notice the LEDs are dim (battery voltage splits between them). Now remove one LED — ALL LEDs go out! In series, one failure breaks the entire chain.', tip: 'This is why old Christmas lights would all go out when one bulb burned out!', imageUrl: '/steps/l7-step2.jpg' },
      { stepNumber: 3, title: 'Build Parallel Circuit', instruction: 'Now wire all 3 LEDs in parallel: Battery (+) splits into 3 paths, each with its own resistor + LED, then all merge back to Battery (−).', tip: 'Each LED gets its own independent path to the battery.', imageUrl: '/steps/l7-step3.jpg' },
      { stepNumber: 4, title: 'Observe Parallel Behavior', instruction: 'Notice all LEDs are equally bright (each gets full battery voltage). Remove one LED — the others STAY ON! Each path is independent.', tip: 'This is how your home is wired — turning off one light doesn\'t affect others!', imageUrl: '/steps/l7-step4.jpg' },
      { stepNumber: 5, title: 'Compare & Document', instruction: 'Draw both circuits in your notebook. Write down the differences in brightness, behavior when removing an LED, and which design is more reliable.', tip: 'Understanding this difference is fundamental to ALL electronics!', imageUrl: '/steps/l7-step5.jpg' },
    ],

    explanation: {
      simple: 'Series is like people standing in a single-file line passing a ball. If one person leaves, the chain is broken. Parallel is like people standing side by side — each has their own ball. If one person leaves, the others are unaffected.',
      scientific: 'In series circuits, current is constant (I_total = I₁ = I₂ = I₃) while voltage divides (V_total = V₁ + V₂ + V₃). In parallel circuits, voltage is constant (V_total = V₁ = V₂ = V₃) while current divides (I_total = I₁ + I₂ + I₃). Kirchhoff\'s Voltage Law (KVL) governs series; Kirchhoff\'s Current Law (KCL) governs parallel.',
      keyTerms: [
        { term: 'Series Circuit', definition: 'Components connected end-to-end in a single path' },
        { term: 'Parallel Circuit', definition: 'Components connected across each other with multiple paths' },
        { term: 'Voltage Division', definition: 'In series, voltage is shared among components' },
        { term: 'Current Division', definition: 'In parallel, current splits among branches' },
      ],
    },

    safetyInstructions: ['Always use resistors with LEDs to prevent burnout', 'Don\'t short-circuit the battery', 'Handle breadboard pins carefully'],

    quiz: [
      { question: 'In a parallel circuit, if one LED is removed, what happens?', options: ['All LEDs turn off', 'Remaining LEDs stay on', 'Remaining LEDs get dimmer', 'Battery explodes'], correctIndex: 1, explanation: 'In parallel, each LED has its own independent path. Removing one doesn\'t affect the others.' },
      { question: 'Why are homes wired in parallel, not series?', options: ['It uses less wire', 'Each device works independently', 'It\'s cheaper', 'Series doesn\'t work with AC'], correctIndex: 1, explanation: 'Parallel wiring ensures each appliance gets full voltage and works independently of others.' },
    ],

    youtubeVideoId: '-mHLvtGjum4',
    outputImageUrl: '/outputs/l7-series-parallel.jpg',
    funFact: 'The entire internet backbone uses parallel redundancy — if one cable breaks, data reroutes through other paths. The same principle you just learned!',
    nextLevelPreview: 'Level 8: Build a simple torch (flashlight) from scratch!',
  },

  // ─── LEVEL 8 — DIY Flashlight ─────────────
  {
    levelNumber: 8,
    id: 'scientist-8',
    title: 'Build a DIY Flashlight',
    subtitle: 'Create a functional torch from household materials',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Applied Electronics',

    overview: 'Design and build a working flashlight using a cardboard tube, LED, battery, switch, and a reflector. Apply all your circuit knowledge to create a practical, useful device!',

    learningObjectives: ['Apply circuit skills to a real product', 'Understand light reflection and focusing', 'Design an enclosure for electronics', 'Create a useful, practical device'],

    materials: [
      { name: 'Bright White LED', quantity: 1, description: 'High-brightness 5mm white LED', imageUrl: '/materials/white-led.jpg', estimatedCost: '₹5', alternatives: ['3 LEDs for more light'] },
      { name: 'AA Batteries', quantity: 2, description: '2× AA 1.5V batteries', imageUrl: '/materials/aa-batteries.jpg', estimatedCost: '₹20', alternatives: [] },
      { name: 'Cardboard Tube', quantity: 1, description: 'Toilet paper roll or similar tube', imageUrl: '/materials/cardboard-tube.jpg', estimatedCost: '₹0', alternatives: ['PVC pipe section'] },
      { name: 'Small Toggle Switch', quantity: 1, description: 'SPST toggle or slide switch', imageUrl: '/materials/toggle-switch.jpg', estimatedCost: '₹10', alternatives: ['Your paper clip switch'] },
      { name: 'Aluminum Foil', quantity: 1, description: 'Small piece for reflector', imageUrl: '/materials/aluminum-foil.jpg', estimatedCost: '₹5', alternatives: [] },
      { name: '68Ω Resistor', quantity: 1, description: 'Current limiting resistor', imageUrl: '/materials/68-resistor.jpg', estimatedCost: '₹2', alternatives: ['100Ω'] },
      { name: 'Wires + Tape', quantity: 1, description: 'Thin wires and electrical tape', imageUrl: '/materials/tape.jpg', estimatedCost: '₹10', alternatives: [] },
    ],

    steps: [
      { stepNumber: 1, title: 'Build the Reflector', instruction: 'Line the inside of one end of the tube with aluminum foil (shiny side facing inward). Shape it into a small cone/cup. This focuses the LED light forward.', tip: 'The smoother the foil, the better the reflection.', imageUrl: '/steps/l8-step1.jpg' },
      { stepNumber: 2, title: 'Mount the LED', instruction: 'Poke the LED through the center of the reflector end. The LED should face outward. Secure with tape from behind.', tip: 'For extra brightness, use 3 white LEDs in parallel.', imageUrl: '/steps/l8-step2.jpg' },
      { stepNumber: 3, title: 'Insert Batteries', instruction: 'Stack 2 AA batteries inside the tube (positive end of one touching negative of the other = series connection = 3V total).', tip: 'Wrap aluminum foil around both ends to create contact points.', imageUrl: '/steps/l8-step3.jpg' },
      { stepNumber: 4, title: 'Add the Switch', instruction: 'Cut a small hole in the tube side. Mount the switch there. Wire it between the battery and LED circuit.', tip: 'Position the switch where your thumb naturally rests.', imageUrl: '/steps/l8-step4.jpg' },
      { stepNumber: 5, title: 'Wire Everything', instruction: 'Connect: Battery (+) → Switch → Resistor → LED (+). LED (−) → Battery (−). Test by clicking the switch!', tip: 'Wrap all connections with electrical tape to prevent shorts.', imageUrl: '/steps/l8-step5.jpg' },
      { stepNumber: 6, title: 'Seal and Decorate', instruction: 'Close the back end with cardboard and tape. Decorate your flashlight however you like — you built a real product!', tip: 'Try it in a dark room — you\'ll be amazed how bright it is!', imageUrl: '/steps/l8-step6.jpg' },
    ],

    explanation: {
      simple: 'Your flashlight works just like store-bought ones! The batteries provide power, the switch controls it, and the LED creates light. The reflector bounces light forward so it travels farther in one direction instead of spreading everywhere.',
      scientific: 'The reflector uses the law of reflection (angle of incidence = angle of reflection) to redirect LED light into a focused beam. A parabolic reflector would create a perfectly parallel beam. The LED converts electrical energy to photons via electroluminescence in the semiconductor junction.',
      keyTerms: [
        { term: 'Reflector', definition: 'A surface that bounces light in a specific direction' },
        { term: 'Beam', definition: 'A focused stream of light traveling in one direction' },
        { term: 'Electroluminescence', definition: 'Light produced by electrical energy in a semiconductor' },
      ],
    },

    safetyInstructions: ['Be careful cutting holes in the tube', 'Don\'t look directly into the LED when it\'s on', 'Remove batteries when not in use'],

    quiz: [
      { question: 'What does the aluminum foil reflector do?', options: ['Creates electricity', 'Focuses the light forward', 'Makes the LED brighter', 'Protects from heat'], correctIndex: 1, explanation: 'The reflector redirects light that would spread sideways, focusing it into a forward-facing beam.' },
    ],

    youtubeVideoId: 'fgNen8WwKFc',
    outputImageUrl: '/outputs/l8-flashlight.jpg',
    funFact: 'The first practical flashlight was invented in 1899 by David Misell. Early batteries were so weak that you could only use them in short flashes — hence the name "flash-light"!',
    nextLevelPreview: 'Level 9: Create a moisture detector that alerts you when plants need water!',
  },

  // ─── LEVEL 9 — Moisture Detector ──────────
  {
    levelNumber: 9,
    id: 'scientist-9',
    title: 'Build a Moisture Detector',
    subtitle: 'Create a sensor that detects water and dampness',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 35,
    category: 'Sensors & Detection',

    overview: 'Build a simple circuit that detects moisture (water). When the sensor probes touch wet soil or water, a buzzer or LED activates! This is your first sensor project — the foundation for smart devices.',

    learningObjectives: ['Understand conductivity of water', 'Build a simple sensor circuit', 'Learn about resistance changes in detection', 'Create a practical soil moisture checker'],

    materials: [
      { name: '9V Battery', quantity: 1, description: 'Standard 9V battery', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹30', alternatives: [] },
      { name: 'Buzzer (5V)', quantity: 1, description: 'Small piezo buzzer', imageUrl: '/materials/buzzer.jpg', estimatedCost: '₹15', alternatives: ['LED as visual indicator'] },
      { name: 'NPN Transistor (BC547)', quantity: 1, description: 'General-purpose NPN transistor', imageUrl: '/materials/bc547.jpg', estimatedCost: '₹5', alternatives: ['2N2222'] },
      { name: 'Resistor (10KΩ)', quantity: 1, description: 'Brown-black-orange', imageUrl: '/materials/10k-resistor.jpg', estimatedCost: '₹2', alternatives: [] },
      { name: 'Two Nails/Probes', quantity: 2, description: 'Two metal nails or exposed wires (sensor probes)', imageUrl: '/materials/probes.jpg', estimatedCost: '₹5', alternatives: ['Two pieces of stiff wire'] },
      { name: 'Wires', quantity: 4, description: 'Insulated copper wires', imageUrl: '/materials/copper-wire.jpg', estimatedCost: '₹10', alternatives: [] },
    ],

    steps: [
      { stepNumber: 1, title: 'Understand the Concept', instruction: 'Water conducts electricity (slightly). When two probes are placed in wet soil, water completes a circuit between them, triggering the buzzer.', tip: 'Pure water doesn\'t conduct well, but soil water has minerals that make it conductive.', imageUrl: '/steps/l9-step1.jpg' },
      { stepNumber: 2, title: 'Wire the Transistor', instruction: 'The BC547 has 3 pins: Emitter, Base, Collector (flat side facing you: E-B-C left to right). Connect: Emitter → Battery (−). Collector → Buzzer → Battery (+).', tip: 'The transistor acts as an electronic switch — when its base gets a tiny current, it allows large current through Collector-Emitter.', imageUrl: '/steps/l9-step2.jpg' },
      { stepNumber: 3, title: 'Connect the Sensor Probes', instruction: 'Connect one probe to Battery (+) through the 10KΩ resistor. Connect the other probe to the transistor\'s Base pin.', tip: 'The probes are your moisture sensor — when water bridges them, current flows to the base.', imageUrl: '/steps/l9-step3.jpg' },
      { stepNumber: 4, title: 'Test in Dry Conditions', instruction: 'With probes in air (dry), the buzzer should be silent — no water means no base current, so the transistor is OFF.', tip: 'If the buzzer is ON when dry, check your wiring — something may be shorted.', imageUrl: '/steps/l9-step4.jpg' },
      { stepNumber: 5, title: 'Test with Water!', instruction: 'Dip both probes into a glass of water or stick them into moist soil. The buzzer should sound! Water conducts current between the probes, activating the transistor.', tip: 'Try different moisture levels — the buzzer may sound louder in wetter soil.', imageUrl: '/steps/l9-step5.jpg' },
    ],

    explanation: {
      simple: 'Water with minerals in it can conduct tiny amounts of electricity. When you stick two metal probes into wet soil, water creates a "bridge" that lets electricity flow between them. This tiny flow triggers the transistor (an electronic switch), which turns on the buzzer!',
      scientific: 'The circuit uses a BC547 NPN transistor as a current-controlled switch. When moisture creates a conductive path between the probes, a small base current (~μA) flows. The transistor amplifies this by its hFE gain factor (~200), allowing milliamps through the collector to power the buzzer. The 10KΩ resistor limits base current to safe levels.',
      keyTerms: [
        { term: 'Transistor', definition: 'An electronic component that can amplify or switch electrical signals' },
        { term: 'Conductivity', definition: 'A material\'s ability to allow electricity to flow through it' },
        { term: 'Sensor', definition: 'A device that detects changes in the environment (heat, light, moisture, etc.)' },
        { term: 'Probe', definition: 'A metal contact used to test or sense a condition' },
      ],
    },

    safetyInstructions: ['Never use this sensor near mains electricity (wall outlets)', 'The probes carry low voltage — safe to touch', 'Don\'t submerge the battery or buzzer in water', 'Wash hands after handling soil'],

    quiz: [
      { question: 'What does the transistor do in this circuit?', options: ['Creates moisture', 'Acts as an electronic switch triggered by tiny current', 'Stores electricity', 'Measures temperature'], correctIndex: 1, explanation: 'The transistor amplifies the tiny current from the moisture sensor into enough current to power the buzzer.' },
      { question: 'Why does water complete the circuit between the probes?', options: ['Water is magnetic', 'Water with minerals conducts electricity', 'Water produces voltage', 'Water is an insulator'], correctIndex: 1, explanation: 'Water containing dissolved minerals (ions) can conduct electricity, bridging the gap between the probes.' },
    ],

    youtubeVideoId: '2pvNbJhx-Cw',
    outputImageUrl: '/outputs/l9-moisture-detector.jpg',
    funFact: 'Commercial soil moisture sensors in smart agriculture use this exact same principle — just with more precise electronics. Your plants can now tell you when they\'re thirsty!',
    nextLevelPreview: 'Level 10: Build a complete mini weather station with a rain detector and wind indicator!',
  },

  // ─── LEVEL 10 — Mini Weather Station ──────
  {
    levelNumber: 10,
    id: 'scientist-10',
    title: 'Build a Mini Weather Station',
    subtitle: 'Combine sensors into a multi-function device',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 50,
    category: 'Integrated Systems',

    overview: 'Build a weather station that detects rain and wind direction! Combine your moisture detector (rain sensor) with a simple wind vane. This is your first integrated multi-sensor system — a stepping stone to IoT!',

    learningObjectives: ['Combine multiple sensors into one system', 'Build a wind direction indicator', 'Apply moisture detection for rain sensing', 'Understand system integration', 'Complete Stage 1: Curious Explorer!'],

    materials: [
      { name: 'Moisture Detector (Level 9)', quantity: 1, description: 'Your rain sensor circuit', imageUrl: '/materials/buzzer.jpg', estimatedCost: '₹0', alternatives: [] },
      { name: 'Cardboard + Paper', quantity: 1, description: 'For wind vane body and arrow', imageUrl: '/materials/cardboard.jpg', estimatedCost: '₹0', alternatives: [] },
      { name: 'Straw', quantity: 1, description: 'Plastic drinking straw', imageUrl: '/materials/straws.jpg', estimatedCost: '₹2', alternatives: [] },
      { name: 'Pin/Nail', quantity: 1, description: 'For the pivot point', imageUrl: '/materials/iron-nail.jpg', estimatedCost: '₹2', alternatives: [] },
      { name: 'Pencil with Eraser', quantity: 1, description: 'Base for the wind vane', imageUrl: '/materials/pencil.jpg', estimatedCost: '₹5', alternatives: [] },
      { name: 'Small Plastic Plate', quantity: 1, description: 'For the rain collection surface', imageUrl: '/materials/plastic-plate.jpg', estimatedCost: '₹5', alternatives: ['Tin lid'] },
      { name: 'LEDs (4 colors)', quantity: 4, description: 'N, S, E, W direction indicators', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹20', alternatives: [] },
      { name: 'Resistors (330Ω)', quantity: 4, description: 'For LEDs', imageUrl: '/materials/330-resistor.jpg', estimatedCost: '₹8', alternatives: [] },
      { name: 'Base Board', quantity: 1, description: 'Wooden or cardboard base (~20×20cm)', imageUrl: '/materials/wood-base.jpg', estimatedCost: '₹0', alternatives: [] },
    ],

    steps: [
      { stepNumber: 1, title: 'Build the Wind Vane Arrow', instruction: 'Cut a straw in half. Cut a pointed arrow from cardboard and a wider tail fin. Insert them into each end of the straw.', tip: 'The tail must be larger than the arrow — it catches the wind and points the arrow INTO the wind.', imageUrl: '/steps/l10-step1.jpg' },
      { stepNumber: 2, title: 'Create the Pivot', instruction: 'Stick the pencil eraser-end up into the base board. Push a pin through the center of the straw and into the eraser. The straw should spin freely.', tip: 'Balance the straw so it\'s level. It should rotate with the lightest breeze.', imageUrl: '/steps/l10-step2.jpg' },
      { stepNumber: 3, title: 'Mark Compass Directions', instruction: 'Use a compass (or phone compass) to label N, S, E, W on the base board around the wind vane.', tip: 'Place an LED at each direction point — when the arrow points that way, you know the wind direction.', imageUrl: '/steps/l10-step3.jpg' },
      { stepNumber: 4, title: 'Set Up Rain Sensor', instruction: 'Mount your moisture detector probes on the small plate. Position it on the base where rain would fall. Wire it to the buzzer — when rain hits the plate and wets the probes, the alarm sounds!', tip: 'Angle the probes so water pools around them for better detection.', imageUrl: '/steps/l10-step4.jpg' },
      { stepNumber: 5, title: 'Combine and Label', instruction: 'Mount both systems on the base board. Label everything clearly: "Rain Detector", "Wind Direction", compass points. Add a title: "SCINO Weather Station v1.0"', tip: 'This is called system integration — combining multiple subsystems into one cohesive product.', imageUrl: '/steps/l10-step5.jpg' },
      { stepNumber: 6, title: 'Test Everything', instruction: 'Test the rain sensor with water drops. Test the wind vane by blowing from different directions. Congratulations — you\'ve completed Stage 1: Curious Explorer! 🎉', tip: 'Place it outside and observe real weather patterns!', imageUrl: '/steps/l10-step6.jpg' },
    ],

    explanation: {
      simple: 'Your weather station combines two separate inventions into one useful device. The wind vane uses a simple physical principle — a tail fin catches the wind and points the arrow into the wind. The rain detector uses electrical conductivity to sense water. Together, they give you two pieces of weather data!',
      scientific: 'The wind vane operates on aerodynamic principles — the larger tail surface area creates higher drag, causing the arrow to align with the wind vector. The rain sensor uses the same conductivity principle as Level 9. This project introduces the concept of sensor fusion — combining multiple data sources for a more complete picture, which is fundamental in IoT (Internet of Things) and modern weather stations.',
      keyTerms: [
        { term: 'Sensor Fusion', definition: 'Combining data from multiple sensors for better understanding' },
        { term: 'Wind Vane', definition: 'A device that shows wind direction' },
        { term: 'System Integration', definition: 'Combining separate subsystems into one functional product' },
        { term: 'IoT', definition: 'Internet of Things — smart devices connected to the internet' },
      ],
    },

    safetyInstructions: ['Keep electronic components dry — only the sensor probes should get wet', 'The pin pivot is sharp — handle carefully', 'Don\'t leave the battery connected when not in use', 'Bring the station inside during heavy rain to protect the electronics'],

    quiz: [
      { question: 'Why does a wind vane\'s tail need to be larger than the arrow?', options: ['For decoration', 'The larger surface catches wind, turning the arrow into the wind', 'To make it heavier', 'To block the sun'], correctIndex: 1, explanation: 'The tail\'s larger surface area creates more wind drag, causing it to be pushed away from the wind — pointing the arrow toward the wind source.' },
      { question: 'What is "sensor fusion"?', options: ['Melting sensors together', 'Combining data from multiple sensors', 'Using one sensor for everything', 'Sensor explosion'], correctIndex: 1, explanation: 'Sensor fusion is combining inputs from multiple sensors to create a more complete and accurate understanding of the environment.' },
      { question: 'What stage have you completed?', options: ['Lab Apprentice', 'Curious Explorer', 'Innovation Master', 'Systems Engineer'], correctIndex: 1, explanation: 'Levels 1–10 make up the "Curious Explorer" stage. Congratulations on completing it!' },
    ],

    youtubeVideoId: 'A3H0tEzmidY',
    outputImageUrl: '/outputs/l10-weather-station.jpg',
    funFact: 'Modern weather stations on airports use dozens of sensors including temperature, pressure, humidity, wind speed, wind direction, visibility, and even lightning detectors — all using the same principles you\'re learning!',
    nextLevelPreview: '🎉 STAGE 1 COMPLETE! Next: Stage 2 — Lab Apprentice! Level 11: Build a Mini Vacuum Cleaner!',
  },
];

export default scientistLevels1to10;
