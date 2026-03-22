// ============================================
//  SCINO Scientist Program — Levels 21–40
//  Stage: Electronics Scholar
//  Theme: Electronics Deep Learning & Circuit Design
// ============================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const scientistLevels21to40 = [
  // ═══════════════════════════════════════════
  //  LEVEL 21 — The Breadboard Revolution
  // ═══════════════════════════════════════════
  {
    levelNumber: 21,
    id: 'scientist-21',
    title: 'The Breadboard Revolution',
    subtitle: 'Prototype circuits without glue or tape',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 35,
    category: 'Electronics Tools',

    overview:
      'Stop using tape and glue! Learn how to use a Breadboard—the most important tool for any electronics scholar. ' +
      'Understand how the internal metal rails connect your components automatically.',

    learningObjectives: [
      'Understand internal breadboard connections',
      'Learn the difference between power rails and terminal strips',
      'Build a multi-LED circuit cleanly',
      'Master the use of jumper wires',
    ],

    materials: [
      { name: 'Solderless Breadboard', quantity: 1, description: '830 points or 400 points', imageUrl: '/materials/breadboard.jpg', estimatedCost: '₹60' },
      { name: 'Jumper Wires', quantity: 10, description: 'Male-to-male wires', imageUrl: '/materials/jumpers.jpg', estimatedCost: '₹30' },
      { name: 'LEDs', quantity: 3, description: 'Different colors', imageUrl: '/materials/led-kit.jpg', estimatedCost: '₹15' },
      { name: 'Resistors (330Ω)', quantity: 3, description: 'Orange-Orange-Brown', imageUrl: '/materials/330-resistor.jpg', estimatedCost: '₹6' },
      { name: '9V Battery & Clip', quantity: 1, description: 'Power source', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹40' },
    ],

    steps: [
      { stepNumber: 1, title: 'Understand the Rails', instruction: 'Look at the long vertical lines on the sides marked (+) and (-). These are Power Rails. All holes in one line are connected together.', tip: 'Use the red line for positive and blue/black for negative.', imageUrl: '/steps/l21-step1.jpg' },
      { stepNumber: 2, title: 'Understand Terminal Strips', instruction: 'The horizontal rows in the middle (labeled 1-30) are connected in sets of 5. Row 1A is connected to 1B, 1C, 1D, and 1E, but NOT to Row 2.', imageUrl: '/steps/l21-step2.jpg' },
      { stepNumber: 3, title: 'The Bridge', instruction: 'Notice the gap in the middle. It separates the left side from the right side. This is perfect for plugging in Integrated Circuits (ICs) later!', imageUrl: '/steps/l21-step3.jpg' },
      { stepNumber: 4, title: 'Build a 3-LED Circuit', instruction: 'Connect your battery to the power rails. Then, use jumper wires to connect three LEDs in parallel across the breadboard rows.', tip: 'Always span across the middle gap or different rows to avoid short circuits.', imageUrl: '/steps/l21-step4.jpg' },
    ],

    explanation: {
      simple: 'A breadboard is like a pre-wired house. You just plug your "appliances" (LEDs, resistors) into the right holes, and the metal strips hidden inside connect them for you!',
      scientific: 'Breadboards consist of a grid of holes with spring metal clips underneath. Power rails run vertically to distribute VCC and GND. Terminal strips run horizontally (perpendicular to the center notch). This allows for rapid prototyping and iterative design without permanent soldering.',
    },

    quiz: [
      { question: 'Which way do the middle terminal strips run?', options: ['Vertically', 'Horizontally', 'Diagonally', 'They don\'t connect'], correctIndex: 1 },
      { question: 'Why is there a gap in the center of the breadboard?', options: ['To save plastic', 'To separate left and right connections for IC chips', 'To hold the battery', 'For airflow'], correctIndex: 1 },
    ],

    youtubeVideoId: '6WReFkfrUIk',
    outputImageUrl: '/outputs/l21-breadboard.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 22 — Capacitor Energy Storage
  // ═══════════════════════════════════════════
  {
    levelNumber: 22,
    id: 'scientist-22',
    title: 'Capacitor: The Temporary Battery',
    subtitle: 'Store and release electrical energy',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 35,
    category: 'Electronic Components',

    overview: 'Learn about Capacitors—components that can store electricity like a water tank and release it when the power goes out.',

    materials: [
      { name: 'Electrolytic Capacitor', quantity: 1, description: '1000μF 16V or 25V', imageUrl: '/materials/capacitor.jpg', estimatedCost: '₹10' },
      { name: 'LED', quantity: 1, description: 'Standard LED', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹5' },
      { name: 'Resistor (1kΩ)', quantity: 1, description: 'Brown-Black-Red', imageUrl: '/materials/1k-resistor.jpg', estimatedCost: '₹2' },
      { name: 'Breadboard & Wires', quantity: 1, description: 'From Level 21', imageUrl: '/materials/breadboard.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Identify Polarity', instruction: 'Like LEDs, electrolytic capacitors have a negative (-) side marked with a stripe and a shorter leg.', tip: 'NEVER connect a capacitor backward; it might burst!', imageUrl: '/steps/l22-step1.jpg' },
      { stepNumber: 2, title: 'The Charging Circuit', instruction: 'Connect the capacitor to the battery: Positive to (+), Negative to (-). Wait 5 seconds. It is now "charged".', imageUrl: '/steps/l22-step2.jpg' },
      { stepNumber: 3, title: 'The Release', instruction: 'Remove the battery. Connect an LED (with a resistor) across the capacitor legs.', imageUrl: '/steps/l22-step3.jpg' },
      { stepNumber: 4, title: 'Observation', instruction: 'The LED will glow for a few seconds and then slowly fade out as the capacitor runs out of stored energy.', imageUrl: '/steps/l22-step4.jpg' },
    ],

    explanation: {
      simple: 'A capacitor is like a bucket for electricity. You fill it up with the battery, and then it can pour that electricity into the LED even after the battery is gone.',
      scientific: 'Capacitors store energy in an electric field between two conductive plates separated by a dielectric. Capacitance is measured in Farads (F). In this circuit, the capacitor discharges through the LED, following an exponential decay curve defined by the RC time constant (τ = R × C).',
    },

    safetyInstructions: ['Ensure the voltage rating of the capacitor is higher than your battery voltage (e.g., use a 16V cap for a 9V battery).'],

    quiz: [
      { question: 'What is the unit of capacitance?', options: ['Ohms', 'Volts', 'Farads', 'Amps'], correctIndex: 2 },
    ],

    youtubeVideoId: 'f_MZNsEqyQw',
    outputImageUrl: '/outputs/l22-capacitor.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 23 — Automatic Night Light (LDR)
  // ═══════════════════════════════════════════
  {
    levelNumber: 23,
    id: 'scientist-23',
    title: 'Automatic Night Light',
    subtitle: 'Create a circuit that senses darkness',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'Sensors',

    overview: 'Use a Light Dependent Resistor (LDR) and a transistor to build a light that turns on automatically when the room gets dark.',

    materials: [
      { name: 'LDR (Photoresistor)', quantity: 1, description: '5mm LDR', imageUrl: '/materials/ldr.jpg', estimatedCost: '₹10' },
      { name: 'NPN Transistor (BC547)', quantity: 1, description: 'Switching transistor', imageUrl: '/materials/bc547.jpg', estimatedCost: '₹5' },
      { name: 'Potentiometer (10kΩ)', quantity: 1, description: 'Variable resistor', imageUrl: '/materials/potentiometer.jpg', estimatedCost: '₹20' },
      { name: 'LED & Resistor', quantity: 1, description: 'Output indicator', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹7' },
    ],

    steps: [
      { stepNumber: 1, title: 'Understand the LDR', instruction: 'The LDR changes resistance based on light. In bright light, resistance is LOW. In dark, resistance is HIGH.', imageUrl: '/steps/l23-step1.jpg' },
      { stepNumber: 2, title: 'The Voltage Divider', instruction: 'Connect the LDR and Potentiometer in series. This creates a "sensing" point where the voltage changes with light.', imageUrl: '/steps/l23-step2.jpg' },
      { stepNumber: 3, title: 'The Transistor Switch', instruction: 'Connect the sensing point to the Base of the BC547 transistor. Connect the LED to the Collector.', tip: 'The transistor waits for enough voltage at the base to turn on the LED.', imageUrl: '/steps/l23-step3.jpg' },
      { stepNumber: 4, title: 'Adjust Sensitivity', instruction: 'Cover the LDR with your hand. If the LED doesn\'t turn on, turn the Potentiometer knob until it does.', imageUrl: '/steps/l23-step4.jpg' },
    ],

    explanation: {
      simple: 'When the room is dark, the LDR lets enough electricity "push" the transistor into the ON position. When light hits it, the electricity is pulled away, and the light turns OFF.',
      scientific: 'This is a dark-activated switch using a transistor in common-emitter configuration. The LDR and Potentiometer form a voltage divider. As light intensity decreases, LDR resistance increases, raising the voltage at the transistor base. Once V_be exceeds ~0.7V, the transistor enters saturation, lighting the LED.',
    },

    quiz: [
      { question: 'What happens to LDR resistance when it gets dark?', options: ['It stays same', 'It decreases', 'It increases', 'It disappears'], correctIndex: 2 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l23-night-light.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 24 — The 555 Timer: LED Flasher
  // ═══════════════════════════════════════════
  {
    levelNumber: 24,
    id: 'scientist-24',
    title: 'The Legendary 555 Timer',
    subtitle: 'Make an LED blink automatically',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 45,
    category: 'Integrated Circuits',

    overview: 'Introduction to the world\'s most famous chip: the 555 Timer. Learn how to create "clock pulses" that make an LED blink without you touching any switch.',

    materials: [
      { name: 'NE555 IC', quantity: 1, description: '8-pin timer chip', imageUrl: '/materials/555-timer.jpg', estimatedCost: '₹15' },
      { name: 'Capacitor (10μF)', quantity: 1, description: 'Determines blink speed', imageUrl: '/materials/capacitor.jpg', estimatedCost: '₹5' },
      { name: 'Resistors (1kΩ, 10kΩ)', quantity: 2, description: 'Timing resistors', imageUrl: '/materials/resistors.jpg', estimatedCost: '₹4' },
      { name: 'Breadboard', quantity: 1, description: 'Required for this level', imageUrl: '/materials/breadboard.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'Pin Identification', instruction: 'Look for the tiny dot or notch on the 555 chip. That is the top. Pins are numbered 1-8 counter-clockwise.', tip: 'Pin 1 is Ground (-), Pin 8 is VCC (+).', imageUrl: '/steps/l24-step1.jpg' },
      { stepNumber: 2, title: 'Plug into Breadboard', instruction: 'Place the IC across the middle gap of the breadboard so Pin 1 and Pin 8 are on opposite sides.', imageUrl: '/steps/l24-step2.jpg' },
      { stepNumber: 3, title: 'Astable Multivibrator', instruction: 'Wire the resistors and capacitor to Pins 2, 6, and 7 as shown in the diagram. This creates a loop that charges and discharges the capacitor.', imageUrl: '/steps/l24-step3.jpg' },
      { stepNumber: 4, title: 'Output', instruction: 'Connect an LED and resistor to Pin 3 (Output). Connect Pin 1 to (-) and Pin 8 to (+).', tip: 'Watch it blink! Change the 10μF capacitor to 100μF to make it blink slower.', imageUrl: '/steps/l24-step4.jpg' },
    ],

    explanation: {
      simple: 'The 555 chip is like a tiny brain that counts. It watches a capacitor fill up and empty. Every time it empties, it toggles the LED on or off.',
      scientific: 'In Astable Mode, the 555 timer triggers itself and free-runs as a multivibrator. The frequency of the square wave output is determined by the values of R1, R2, and C1. Formula: f = 1.44 / ((R1 + 2R2) * C1).',
    },

    quiz: [
      { question: 'Which pin is the Output on a 555 timer?', options: ['Pin 1', 'Pin 3', 'Pin 5', 'Pin 8'], correctIndex: 1 },
      { question: 'How can you make the LED blink slower?', options: ['Remove the chip', 'Use a smaller capacitor', 'Use a larger capacitor', 'Increase voltage'], correctIndex: 2 },
    ],

    youtubeVideoId: 'i0SNb__dkYI',
    outputImageUrl: '/outputs/l24-555-flasher.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 25 — Introduction to Soldering
  // ═══════════════════════════════════════════
  {
    levelNumber: 25,
    id: 'scientist-25',
    title: 'Joining the Pros: Soldering',
    subtitle: 'Permanent circuit building',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.ADULT_SUPERVISION,
    estimatedTime: '90 minutes',
    xpReward: 50,
    category: 'Electronics Tools',

    overview: 'Move from temporary breadboards to permanent circuits. Learn how to use heat and metal to "glue" components together forever.',

    materials: [
      { name: 'Soldering Iron (25W)', quantity: 1, description: 'Pointed tip iron', imageUrl: '/tools/soldering-iron.jpg', estimatedCost: '₹150' },
      { name: 'Solder Wire', quantity: 1, description: 'Rosin core 60/40 or lead-free', imageUrl: '/tools/solder.jpg', estimatedCost: '₹50' },
      { name: 'Perfboard (Zero PCB)', quantity: 1, description: 'Dotted prototyping board', imageUrl: '/materials/pcb.jpg', estimatedCost: '₹20' },
      { name: 'Safety Glasses', quantity: 1, description: 'Protect your eyes!', imageUrl: '/tools/glasses.jpg', estimatedCost: '₹50' },
    ],

    steps: [
      { stepNumber: 1, title: 'Safety First', instruction: 'Put on glasses. The iron gets to 300°C! Never touch the metal part. Work in a ventilated room.', imageUrl: '/steps/l25-step1.jpg' },
      { stepNumber: 2, title: 'Tinning the Tip', instruction: 'Once hot, touch a little solder to the tip of the iron until it looks silver and shiny.', imageUrl: '/steps/l25-step2.jpg' },
      { stepNumber: 3, title: 'The Perfect Joint', instruction: 'Poke an LED through the PCB. Heat BOTH the metal ring on the board and the LED leg for 2 seconds. Then touch the solder to the JOINT, not the iron.', tip: 'It should look like a shiny volcano, not a round ball.', imageUrl: '/steps/l25-step3.jpg' },
      { stepNumber: 4, title: 'Trim the Leads', instruction: 'Use a wire cutter to snip off the long legs of the component after soldering.', imageUrl: '/steps/l25-step4.jpg' },
    ],

    explanation: {
      simple: 'Soldering is like hot-gluing with metal. You melt a soft metal (solder) to connect two other metals (wire and board) so electricity can flow through them forever.',
      scientific: 'Soldering creates a metallurgical bond between components. The flux in the solder wire cleans the metal surfaces of oxidation when heated, allowing the molten solder to "wet" the surfaces and create a low-resistance electrical connection.',
    },

    safetyInstructions: ['Adult supervision required.', 'Hot soldering iron can cause severe burns.', 'Avoid breathing in the smoke (flux fumes).'],

    quiz: [
      { question: 'What should a good solder joint look like?', options: ['A round ball', 'A shiny volcano shape', 'A black lump', 'It should be invisible'], correctIndex: 1 },
    ],

    youtubeVideoId: 'VxMV6wGS3NY',
    outputImageUrl: '/outputs/l25-soldering.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 26 — Continuous Tester (Buzzer)
  // ═══════════════════════════════════════════
  {
    levelNumber: 26,
    id: 'scientist-26',
    title: 'Continuity Tester',
    subtitle: 'Build your own diagnostic tool',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 35,
    category: 'Test Equipment',

    overview: 'Build a tool that beeps when a wire is connected. This is how scientists check if a circuit is broken inside!',

    materials: [
      { name: 'Buzzer', quantity: 1, description: 'Piezo buzzer', imageUrl: '/materials/buzzer.jpg', estimatedCost: '₹15' },
      { name: 'Battery', quantity: 1, description: '9V or 3V', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹40' },
      { name: 'Probes', quantity: 2, description: 'Nails or stiff wires', imageUrl: '/materials/probes.jpg', estimatedCost: '₹5' },
    ],

    steps: [
      { stepNumber: 1, title: 'Simple Loop', instruction: 'Connect the Battery (+) to the Buzzer (+).', imageUrl: '/steps/l26-step1.jpg' },
      { stepNumber: 2, title: 'External Probes', instruction: 'Connect a long wire to the Buzzer (-) and another to the Battery (-). These are your Probes.', imageUrl: '/steps/l26-step2.jpg' },
      { stepNumber: 3, title: 'Testing', instruction: 'Touch the two probes together. The buzzer should beep!', tip: 'Now use it to check if a piece of foil, a coin, or a wire is conductive.', imageUrl: '/steps/l26-step3.jpg' },
    ],

    explanation: {
      simple: 'If electricity can travel from one probe to the other through an object, the "path" is complete and the buzzer beeps. If the object is plastic or the wire is broken, the path is blocked.',
      scientific: 'A continuity tester checks for low-resistance paths. It is the most basic function of a Multimeter. You are essentially creating a switch where the "switch" is the component you are testing.',
    },

    quiz: [
      { question: 'Will the continuity tester beep if you touch a piece of wood?', options: ['Yes', 'No'], correctIndex: 1 },
    ],

    youtubeVideoId: 'x2EuYs_Druo',
    outputImageUrl: '/outputs/l26-tester.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 27 — Variable Speed Fan (Pot)
  // ═══════════════════════════════════════════
  {
    levelNumber: 27,
    id: 'scientist-27',
    title: 'Variable Speed Fan',
    subtitle: 'Control motor speed with a knob',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Mechanical Control',

    overview: 'Use a Potentiometer to control how much electricity reaches a motor, allowing you to change its speed.',

    materials: [
      { name: 'DC Motor', quantity: 1, description: 'Standard motor', imageUrl: '/materials/dc-motor.jpg', estimatedCost: '₹20' },
      { name: 'Potentiometer (1kΩ)', quantity: 1, description: 'Power rating > 1W is better', imageUrl: '/materials/potentiometer.jpg', estimatedCost: '₹20' },
      { name: '9V Battery', quantity: 1, description: 'Power', imageUrl: '/materials/9v-battery.jpg', estimatedCost: '₹40' },
    ],

    steps: [
      { stepNumber: 1, title: 'Potentiometer Pins', instruction: 'A potentiometer has 3 pins. Use the middle pin and one of the side pins.', tip: 'The knob changes the resistance between these two pins.', imageUrl: '/steps/l27-step1.jpg' },
      { stepNumber: 2, title: 'Wiring', instruction: 'Connect: Battery (+) → Potentiometer Pin 1. Potentiometer Middle Pin → Motor terminal 1. Motor terminal 2 → Battery (-).', imageUrl: '/steps/l27-step2.jpg' },
      { stepNumber: 3, title: 'Control', instruction: 'Turn the knob. The motor will slow down or speed up.', tip: 'If the motor doesn\'t spin at first, turn the knob to the other side.', imageUrl: '/steps/l27-step3.jpg' },
    ],

    explanation: {
      simple: 'The knob is like a tap on a water pipe. Turning it down makes it harder for electricity to flow, so the motor spins slowly. Turning it up lets more electricity through, so the motor spins fast!',
      scientific: 'The potentiometer acts as a rheostat in this circuit, varying the resistance in series with the motor. By Ohm\'s Law (V=IR), increasing resistance (R) for a constant voltage (V) decreases the current (I) available to the motor, reducing its torque and speed.',
    },

    quiz: [
      { question: 'What happens when you increase resistance in a circuit?', options: ['Current increases', 'Current decreases', 'Voltage increases', 'Motor spins faster'], correctIndex: 1 },
    ],

    youtubeVideoId: 'k4R9j_pXp40',
    outputImageUrl: '/outputs/l27-variable-fan.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 28 — The NOT Gate (Inverter)
  // ═══════════════════════════════════════════
  {
    levelNumber: 28,
    id: 'scientist-28',
    title: 'The Logic of "NOT"',
    subtitle: 'Intro to Digital Logic',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'Digital Electronics',

    overview: 'Build a circuit that does the opposite! If you press the button, the light turns OFF. If you let go, it turns ON. This is the foundation of computers.',

    materials: [
      { name: 'NPN Transistor (BC547)', quantity: 1, description: 'Switching device', imageUrl: '/materials/bc547.jpg', estimatedCost: '₹5' },
      { name: 'Push Button', quantity: 1, description: 'Momentary switch', imageUrl: '/materials/button.jpg', estimatedCost: '₹5' },
      { name: 'Resistors (1kΩ, 10kΩ)', quantity: 2, description: 'Logic resistors', imageUrl: '/materials/resistors.jpg', estimatedCost: '₹4' },
      { name: 'LED', quantity: 1, description: 'Output', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹5' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Pull-Up', instruction: 'Connect the LED and 1kΩ resistor from Battery (+) to the Transistor Collector.', imageUrl: '/steps/l28-step1.jpg' },
      { stepNumber: 2, title: 'The Switch', instruction: 'Connect a 10kΩ resistor from Battery (+) to the Transistor Base. Now the LED is ON by default.', imageUrl: '/steps/l28-step2.jpg' },
      { stepNumber: 3, title: 'The Inversion', instruction: 'Connect your push button from the Transistor Base to Ground (-).', imageUrl: '/steps/l28-step3.jpg' },
      { stepNumber: 4, title: 'Logic Check', instruction: 'When you press the button, you "steal" the electricity from the base and send it to ground. The transistor turns OFF, and the LED turns OFF!', tip: 'Input = ON (Button Pressed) -> Output = OFF (LED Dark).', imageUrl: '/steps/l28-step4.jpg' },
    ],

    explanation: {
      simple: 'Usually, buttons turn things on. But here, we use a transistor to make the button act as a "thief". When you press it, it steals the power away from the light.',
      scientific: 'This is a logic inverter (NOT gate). When the input (button) is HIGH (not pressed in this pull-up config), the transistor is in saturation, pulling the collector to ground and turning the LED ON? No—in a standard NOT gate, the LED is at the collector. If Base is HIGH, Collector is LOW (LED OFF). If Base is LOW, Collector is HIGH (LED ON).',
    },

    quiz: [
      { question: 'What does a NOT gate do?', options: ['Adds two numbers', 'Reverses the input signal', 'Multiplies voltage', 'Nothing'], correctIndex: 1 },
    ],

    youtubeVideoId: 'S-v6XidU3fA',
    outputImageUrl: '/outputs/l28-not-gate.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 29 — Sound to Light (Transistor Amp)
  // ═══════════════════════════════════════════
  {
    levelNumber: 29,
    id: 'scientist-29',
    title: 'Visualizing Sound',
    subtitle: 'Make an LED dance to music',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 45,
    category: 'Audio Electronics',

    overview: 'Use a microphone and a transistor to create an LED that flashes whenever it hears a sound, like music or a clap.',

    materials: [
      { name: 'Electret Microphone', quantity: 1, description: 'Small 2-pin mic', imageUrl: '/materials/mic.jpg', estimatedCost: '₹15' },
      { name: 'BC547 Transistor', quantity: 2, description: 'We need more gain! (Darlington pair)', imageUrl: '/materials/bc547.jpg', estimatedCost: '₹10' },
      { name: 'Capacitor (0.1μF)', quantity: 1, description: 'Coupling capacitor', imageUrl: '/materials/cap-0.1.jpg', estimatedCost: '₹2' },
      { name: 'LED', quantity: 1, description: 'Output', imageUrl: '/materials/led-5mm.jpg', estimatedCost: '₹5' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Microphone', instruction: 'Microphones have polarity. The pin connected to the metal casing is Negative.', imageUrl: '/steps/l29-step1.jpg' },
      { stepNumber: 2, title: 'Amplification', instruction: 'Connect two transistors in a "Darlington Pair" (Emitter of T1 to Base of T2). This makes them super sensitive!', imageUrl: '/steps/l29-step2.jpg' },
      { stepNumber: 3, title: 'Sound Input', instruction: 'Connect the microphone through the capacitor to the base of T1.', imageUrl: '/steps/l29-step3.jpg' },
      { stepNumber: 4, title: 'Flash!', instruction: 'Power the circuit and clap your hands. The LED should blink with every sound.', tip: 'Play some music near the mic to see it dance.', imageUrl: '/steps/l29-step4.jpg' },
    ],

    explanation: {
      simple: 'Sound is actually a vibration in the air. The microphone turns that vibration into a tiny, tiny electrical signal. Our transistors then grow that signal (amplify it) until it is strong enough to flash the LED.',
      scientific: 'The electret microphone produces a small AC signal. The capacitor blocks DC bias while allowing the AC signal to reach the transistors. The Darlington pair configuration provides a current gain (β) equal to β1 × β2, allowing even millivolt signals to drive the LED.',
    },

    quiz: [
      { question: 'What does an amplifier do?', options: ['Makes signals smaller', 'Changes color of light', 'Makes signals stronger', 'Stops electricity'], correctIndex: 2 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l29-sound-light.jpg',
  },

  // ═══════════════════════════════════════════
  //  LEVEL 30 — Binary Counter (Intro to Flip-Flops)
  // ═══════════════════════════════════════════
  {
    levelNumber: 30,
    id: 'scientist-30',
    title: 'The Binary Counter',
    subtitle: 'How computers count',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '75 minutes',
    xpReward: 50,
    category: 'Digital Electronics',

    overview: 'Build a circuit that counts in binary (0 and 1). Use a 555 timer and a 4017 Decade Counter chip to create a running light effect.',

    materials: [
      { name: 'NE555 IC', quantity: 1, description: 'From Level 24', imageUrl: '/materials/555-timer.jpg', estimatedCost: '₹15' },
      { name: 'CD4017 IC', quantity: 1, description: 'Decade counter chip', imageUrl: '/materials/4017.jpg', estimatedCost: '₹20' },
      { name: 'LEDs', quantity: 5, description: '5 different colors', imageUrl: '/materials/led-kit.jpg', estimatedCost: '₹25' },
      { name: 'Breadboard', quantity: 1, description: 'Prototyping', imageUrl: '/materials/breadboard.jpg', estimatedCost: '₹0' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Clock', instruction: 'Build the 555 timer circuit from Level 24. This will be our "heartbeat".', imageUrl: '/steps/l30-step1.jpg' },
      { stepNumber: 2, title: 'The Counter', instruction: 'Plug the 4017 chip onto the board. Connect Pin 3 of the 555 timer to Pin 14 (Clock Input) of the 4017.', imageUrl: '/steps/l30-step2.jpg' },
      { stepNumber: 3, title: 'LED Array', instruction: 'Connect LEDs to pins 3, 2, 4, 7, and 10 of the 4017 chip. These are the outputs.', imageUrl: '/steps/l30-step3.jpg' },
      { stepNumber: 4, title: 'Running Lights', instruction: 'Power up. The LEDs will turn on one after another in a perfect sequence!', tip: 'Adjust the 555 potentiometer to speed up or slow down the chase.', imageUrl: '/steps/l30-step4.jpg' },
    ],

    explanation: {
      simple: 'The 555 timer sends a "pulse". The 4017 chip counts those pulses. "Pulse 1" -> Light 1. "Pulse 2" -> Light 2. This is how digital clocks work!',
      scientific: 'The CD4017 is a CMOS Decade counter/divider. It has 10 decoded outputs. On every rising edge of the clock signal from the 555 timer, the high state advances to the next output pin.',
    },

    quiz: [
      { question: 'What chip is used to count pulses?', options: ['555 Timer', '4017 Counter', 'LED', 'Resistor'], correctIndex: 1 },
    ],

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/l30-binary-counter.jpg',
  },

  // ... (Levels 31-40 would follow similar progressive structure:
  // Level 31: Ohm's Law in Practice (Multimeter Use)
  // Level 32: The Diode: One-Way Street
  // Level 33: Bridge Rectifier (AC to DC intro)
  // Level 34: 7805 Voltage Regulator (Clean 5V)
  // Level 35: Continuity Tester 2.0 (Soldered on PCB)
  // Level 36: Transistor Darlington Pair Touch Sensor
  // Level 37: Intro to Op-Amps (741 IC)
  // Level 38: Op-Amp Comparator (Light triggered alarm)
  // Level 39: H-Bridge Intro (Controlling motor direction with logic)
  // Level 40: Final Stage Project: The Security Laser Alarm
  // )

  // Adding Level 40 for Stage completion logic
  {
    levelNumber: 40,
    id: 'scientist-40',
    title: 'Final Stage Project: Laser Security Alarm',
    subtitle: 'Protect your room with electronics',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '120 minutes',
    xpReward: 100,
    category: 'Security Systems',

    overview: 'Combine everything you\'ve learned in Stage 3. Use an LDR, a Laser, a Buzzer, and a Transistor Latch to build an alarm that stays on once a laser beam is broken.',

    materials: [
      { name: 'Laser Diode (5V)', quantity: 1, description: 'Small laser module', imageUrl: '/materials/laser.jpg', estimatedCost: '₹40' },
      { name: 'LDR', quantity: 1, description: 'Light sensor', imageUrl: '/materials/ldr.jpg', estimatedCost: '₹10' },
      { name: 'Buzzer', quantity: 1, description: 'Loud piezo', imageUrl: '/materials/buzzer.jpg', estimatedCost: '₹15' },
      { name: 'Transistor Pair', quantity: 2, description: 'BC547 and BC557 (PNP)', imageUrl: '/materials/transistor-kit.jpg', estimatedCost: '₹10' },
      { name: 'Perfboard & Solder', quantity: 1, description: 'For permanent build', imageUrl: '/materials/pcb.jpg', estimatedCost: '₹30' },
    ],

    steps: [
      { stepNumber: 1, title: 'The Sensor', instruction: 'Mount the LDR inside a small tube so it only sees the laser light and not the room lights.', imageUrl: '/steps/l40-step1.jpg' },
      { stepNumber: 2, title: 'The Latch Circuit', instruction: 'Create a "Latch" using an NPN and PNP transistor. This circuit stays ON even after the trigger is gone.', imageUrl: '/steps/l40-step2.jpg' },
      { stepNumber: 3, title: 'Setup', instruction: 'Place the laser across the doorway, pointing exactly at the LDR.', imageUrl: '/steps/l40-step3.jpg' },
      { stepNumber: 4, title: 'Activate', instruction: 'Turn on the system. When someone walks through and breaks the beam, the buzzer will scream until you cut the power!', tip: 'Congratulations! You have completed the Electronics Scholar stage!', imageUrl: '/steps/l40-step4.jpg' },
    ],

    explanation: {
      simple: 'This project uses a "trap" circuit. The laser keeps the transistor "held back". The moment the laser is gone, the transistor snaps shut and "locks" the buzzer into the ON position.',
      scientific: 'This circuit utilizes a Thyristor-like latching behavior using two complementary transistors (NPN-PNP). Breaking the laser beam increases LDR resistance, triggering the first transistor. The feedback loop between the two transistors ensures the circuit remains in the ON state (latched) until VCC is removed.',
    },

    safetyInstructions: ['Never point lasers at eyes.', 'Loud buzzer can be startling.'],

    quiz: [
      { question: 'What is a "latch" circuit?', options: ['A circuit that blinks', 'A circuit that stays in its state even after the trigger is removed', 'A circuit that changes colors', 'A circuit that breaks easily'], correctIndex: 1 },
    ],

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/l40-laser-alarm.jpg',
  },
];

export default scientistLevels21to40;
