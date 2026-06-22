// ============================================================
//  SCINO Scientist Program — Levels 21–40
//  Module 3: Advanced Circuits & Chemical Science (21–30)
//  Module 4: Introduction to Microcontrollers (31–40)
//  Total: 20 Levels — Error-Free
// ============================================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

// ──────────────────────────────────────────
// EQUIPMENT BOARD — Levels 21–40 Kit
// ──────────────────────────────────────────

export const levels21to40EquipmentBoard = {
  moduleTitle: 'Advanced Circuits & Microcontroller Starter Kit',
  description: 'All materials needed for Scientist Levels 21–40.',
  categories: [
    {
      categoryName: 'Electronics & Sensors',
      items: [
        { name: 'Arduino Uno Board', quantity: 1, imageUrl: '/materials/arduino.jpg', reusable: true },
        { name: 'USB Cable (Type B)', quantity: 1, imageUrl: '/materials/usb-cable.jpg', reusable: true },
        { name: 'Breadboard (830 point)', quantity: 1, imageUrl: '/materials/breadboard.jpg', reusable: true },
        { name: 'Jumper Wires (M-M, M-F pack)', quantity: 40, imageUrl: '/materials/jumper-wires.jpg', reusable: true },
        { name: 'LEDs (Red, Green, Blue, White)', quantity: 10, imageUrl: '/materials/led-pack.jpg', reusable: true },
        { name: 'Resistors (220Ω, 1kΩ, 10kΩ)', quantity: 30, imageUrl: '/materials/resistors.jpg', reusable: true },
        { name: 'Push Buttons', quantity: 4, imageUrl: '/materials/push-button.jpg', reusable: true },
        { name: 'Potentiometer (10kΩ)', quantity: 2, imageUrl: '/materials/potentiometer.jpg', reusable: true },
        { name: 'Relay Module (5V)', quantity: 1, imageUrl: '/materials/relay.jpg', reusable: true },
        { name: 'IR Sensor Module', quantity: 1, imageUrl: '/materials/ir-sensor.jpg', reusable: true },
        { name: 'Temperature Sensor (LM35 or TMP36)', quantity: 1, imageUrl: '/materials/temperature-sensor.jpg', reusable: true },
        { name: 'LDR (Light Dependent Resistor)', quantity: 2, imageUrl: '/materials/ldr.jpg', reusable: true },
        { name: 'Servo Motor (SG90)', quantity: 1, imageUrl: '/materials/servo.jpg', reusable: true },
        { name: 'Buzzer (Piezo)', quantity: 2, imageUrl: '/materials/buzzer.jpg', reusable: true },
        { name: 'LCD Display (16x2 with I2C)', quantity: 1, imageUrl: '/materials/lcd.jpg', reusable: true },
        { name: 'Voltage Regulator (7805)', quantity: 1, imageUrl: '/materials/7805.jpg', reusable: true },
        { name: 'Diodes (1N4007)', quantity: 4, imageUrl: '/materials/diode.jpg', reusable: true },
        { name: 'NPN Transistor (BC547)', quantity: 4, imageUrl: '/materials/transistor.jpg', reusable: true },
        { name: 'Capacitors (100µF, 10µF, 0.1µF)', quantity: 6, imageUrl: '/materials/capacitor.jpg', reusable: true },
        { name: '9V Battery + Snap Connector', quantity: 1, imageUrl: '/materials/9v-battery.jpg', reusable: false },
        { name: 'Battery Holder (2xAA)', quantity: 2, imageUrl: '/materials/battery-holder.jpg', reusable: true },
        { name: 'AA Batteries', quantity: 6, imageUrl: '/materials/batteries.jpg', reusable: false },
        { name: 'Multimeter', quantity: 1, imageUrl: '/materials/multimeter.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Chemistry Supplies',
      items: [
        { name: 'pH Indicator Strips', quantity: 10, imageUrl: '/materials/ph-strips.jpg', reusable: false },
        { name: 'White Vinegar', quantity: 1, imageUrl: '/materials/vinegar.jpg', reusable: false },
        { name: 'Baking Soda', quantity: 1, imageUrl: '/materials/baking-soda.jpg', reusable: false },
        { name: 'Lemon Juice', quantity: 1, imageUrl: '/materials/lemon.jpg', reusable: false },
        { name: 'Soap Water', quantity: 1, imageUrl: '/materials/soap.jpg', reusable: false },
        { name: 'Food Coloring (set)', quantity: 1, imageUrl: '/materials/food-coloring.jpg', reusable: false },
        { name: 'Honey', quantity: 1, imageUrl: '/materials/honey.jpg', reusable: false },
        { name: 'Vegetable Oil', quantity: 1, imageUrl: '/materials/oil.jpg', reusable: false },
        { name: 'Rubbing Alcohol', quantity: 1, imageUrl: '/materials/alcohol.jpg', reusable: false },
        { name: 'Coffee Filters', quantity: 5, imageUrl: '/materials/coffee-filter.jpg', reusable: false },
        { name: 'Markers (washable, various colors)', quantity: 4, imageUrl: '/materials/markers.jpg', reusable: true },
        { name: 'Sand', quantity: 1, imageUrl: '/materials/sand.jpg', reusable: true },
        { name: 'Gravel / Pebbles', quantity: 1, imageUrl: '/materials/gravel.jpg', reusable: true },
        { name: 'Cotton Balls', quantity: 5, imageUrl: '/materials/cotton.jpg', reusable: false },
        { name: 'Plastic Bottles (empty, 500ml)', quantity: 3, imageUrl: '/materials/plastic-bottle.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'General Lab Supplies',
      items: [
        { name: 'Safety Goggles', quantity: 1, imageUrl: '/materials/goggles.jpg', reusable: true },
        { name: 'Disposable Gloves', quantity: 4, imageUrl: '/materials/gloves.jpg', reusable: false },
        { name: 'Notebook & Pen', quantity: 1, imageUrl: '/materials/notebook.jpg', reusable: true },
        { name: 'Ruler', quantity: 1, imageUrl: '/materials/ruler.jpg', reusable: true },
        { name: 'Plastic Cups', quantity: 6, imageUrl: '/materials/plastic-cups.jpg', reusable: false },
        { name: 'Spoons (plastic)', quantity: 3, imageUrl: '/materials/spoons.jpg', reusable: false },
        { name: 'Tall Glass or Jar', quantity: 1, imageUrl: '/materials/glass-jar.jpg', reusable: true },
        { name: 'Tape (Insulation + Double-sided)', quantity: 2, imageUrl: '/materials/tape.jpg', reusable: false },
        { name: 'Cardboard Sheets', quantity: 3, imageUrl: '/materials/cardboard.jpg', reusable: false },
        { name: 'Stopwatch or Phone Timer', quantity: 1, imageUrl: '/materials/stopwatch.jpg', reusable: true }
      ]
    }
  ]
};

// ──────────────────────────────────────────
// SECTION A: Advanced Circuits & Chemical
//            Science (Levels 21–30)
// ──────────────────────────────────────────

const scientistLevels21to40 = [

  {
    levelNumber: 21,
    id: 'scientist-21',
    title: 'Relay Switch Controller',
    subtitle: 'Control high-power devices safely',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Circuits',

    overview: 'Learn how a relay acts as an electrically-controlled switch that lets a small signal control a larger circuit.',

    learningObjectives: [
      'Understand relay operation (coil and contacts)',
      'Build a relay-controlled LED circuit',
      'Understand normally-open and normally-closed contacts'
    ],

    materials: [
      { name: 'Relay Module (5V)', imageUrl: '/materials/relay.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LEDs', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistors (220Ω)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Push Button', imageUrl: '/materials/push-button.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Diode (1N4007)', imageUrl: '/materials/diode.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Understand the Relay',
        instruction: 'Identify the relay pins: VCC, GND, IN (signal), COM, NO (normally open), NC (normally closed). Draw a diagram.',
        imageUrl: '/steps/s21-step1.jpg',
        tip: 'The relay clicks when the coil is energized.'
      },
      {
        stepNumber: 2,
        title: 'Wire the Control Side',
        instruction: 'Connect VCC and GND to battery power. Connect IN pin to a push button with pull-down resistor.',
        imageUrl: '/steps/s21-step2.jpg',
        tip: 'Add a flyback diode across the relay coil to protect from voltage spikes.'
      },
      {
        stepNumber: 3,
        title: 'Wire the Load Side',
        instruction: 'Connect an LED + resistor circuit through the COM and NO terminals.',
        imageUrl: '/steps/s21-step3.jpg',
        tip: 'NO means the LED circuit is open (off) until the relay activates.'
      },
      {
        stepNumber: 4,
        title: 'Test',
        instruction: 'Press the button. You should hear a click and the LED turns on. Release the button, LED turns off.',
        imageUrl: '/steps/s21-step4.jpg',
        tip: 'Try wiring through NC instead — the LED will be ON by default and turn OFF when you press.'
      }
    ],

    explanation: {
      simple: 'A relay is like a remote-controlled switch. A small electric signal flips a physical switch inside to control bigger circuits.',
      scientific: 'The relay coil creates an electromagnetic field when energized, pulling a mechanical armature that closes or opens contact points. This provides galvanic isolation between control and load circuits.',
      keyTerms: [
        { term: 'Relay', definition: 'An electromagnetic switch that uses a small signal to control a larger circuit' },
        { term: 'Normally Open (NO)', definition: 'Contact that is open when relay is de-energized' },
        { term: 'Normally Closed (NC)', definition: 'Contact that is closed when relay is de-energized' },
        { term: 'Flyback Diode', definition: 'A protection diode that absorbs voltage spikes from the relay coil' }
      ]
    },

    experiment: {
      hypothesis: 'The relay will switch the LED circuit ON when the coil is energized.',
      variables: {
        independent: 'Button state (pressed/released)',
        dependent: 'LED state (ON/OFF)',
        controlled: 'Battery voltage, relay type, LED resistor'
      },
      dataTable: {
        columns: ['Button State', 'Relay Coil', 'NO Terminal', 'NC Terminal', 'LED (via NO)'],
        rows: [
          ['Released', '___', '___', '___', '___'],
          ['Pressed', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A relay provides:', options: ['Direct connection', 'Galvanic isolation', 'Higher voltage', 'Lower current'], correctIndex: 1 },
      { question: 'NO stands for:', options: ['Not Operating', 'Normally Open', 'Negative Output', 'No Option'], correctIndex: 1 },
      { question: 'A flyback diode protects against:', options: ['Light', 'Voltage spikes', 'Sound', 'Heat'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s21-relay.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=relay%20switch%20circuit%20LED%20tutorial',
    safetyInstructions: ['Always use a flyback diode', 'Do not connect relay to mains electricity', 'Disconnect power before changing wires']
  },

  {
    levelNumber: 22,
    id: 'scientist-22',
    title: 'Voltage Regulator Circuit',
    subtitle: 'Stable power from any source',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Power Electronics',

    overview: 'Build a circuit using a 7805 voltage regulator to convert a 9V battery into a stable 5V output.',

    learningObjectives: [
      'Understand voltage regulation',
      'Wire a 7805 regulator with capacitors',
      'Measure input and output voltages'
    ],

    materials: [
      { name: 'Voltage Regulator (7805)', imageUrl: '/materials/7805.jpg' },
      { name: 'Capacitors (0.1µF, 100µF)', imageUrl: '/materials/capacitor.jpg' },
      { name: '9V Battery + Snap Connector', imageUrl: '/materials/9v-battery.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistor (220Ω)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Identify Pins',
        instruction: 'Hold the 7805 with the label facing you: Left = Input, Center = GND, Right = Output.',
        imageUrl: '/steps/s22-step1.jpg',
        tip: 'Always check the datasheet for your specific regulator.'
      },
      {
        stepNumber: 2,
        title: 'Wire the Regulator',
        instruction: 'Connect 9V battery positive to Input pin. Connect GND pin to battery negative. Add 0.1µF cap on input side and 100µF cap on output side.',
        imageUrl: '/steps/s22-step2.jpg',
        tip: 'Capacitors smooth out voltage ripples and prevent oscillation.'
      },
      {
        stepNumber: 3,
        title: 'Measure Output',
        instruction: 'Set multimeter to DC voltage. Measure across Output and GND. It should read approximately 5V.',
        imageUrl: '/steps/s22-step3.jpg',
        tip: 'The 7805 drops the extra voltage as heat. Do not draw too much current.'
      },
      {
        stepNumber: 4,
        title: 'Power an LED',
        instruction: 'Connect an LED with 220Ω resistor to the 5V output. Verify it lights correctly.',
        imageUrl: '/steps/s22-step4.jpg',
        tip: 'This regulated 5V is safe for powering Arduino and other logic circuits.'
      }
    ],

    explanation: {
      simple: 'A voltage regulator takes messy, higher voltage and outputs a clean, steady lower voltage — like a water pressure reducer for electricity.',
      scientific: 'Linear regulators like the 7805 use a feedback loop to maintain constant output voltage by dissipating excess energy as heat. The dropout voltage is typically 2V, so input must be at least 7V for 5V output.',
      keyTerms: [
        { term: 'Voltage Regulator', definition: 'A circuit that maintains a constant output voltage regardless of input variations' },
        { term: 'Dropout Voltage', definition: 'Minimum difference between input and output for proper regulation' },
        { term: 'Smoothing Capacitor', definition: 'A capacitor that reduces voltage ripple' }
      ]
    },

    experiment: {
      hypothesis: 'The 7805 will maintain 5V output even as the 9V battery drains slightly.',
      variables: {
        independent: 'Input voltage level',
        dependent: 'Output voltage',
        controlled: 'Regulator type, capacitor values, load resistance'
      },
      dataTable: {
        columns: ['Input Voltage (V)', 'Output Voltage (V)', 'LED Status', 'Regulator Temperature'],
        rows: [
          ['9.0', '___', '___', '___'],
          ['8.0', '___', '___', '___'],
          ['7.0', '___', '___', '___'],
          ['6.0', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: '7805 outputs:', options: ['7V', '9V', '5V', '12V'], correctIndex: 2 },
      { question: 'Minimum input for 5V output is about:', options: ['5V', '7V', '3V', '12V'], correctIndex: 1 },
      { question: 'Excess voltage is dissipated as:', options: ['Light', 'Sound', 'Heat', 'Magnetism'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s22-regulator.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=7805%20voltage%20regulator%20circuit%20tutorial',
    safetyInstructions: ['The regulator may get hot under load', 'Use proper capacitor polarity', 'Do not exceed maximum input voltage']
  },

  {
    levelNumber: 23,
    id: 'scientist-23',
    title: 'IR Proximity Detector',
    subtitle: 'Detect objects without touching',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Sensors',

    overview: 'Use an infrared sensor module to detect nearby objects and trigger an LED or buzzer alert.',

    learningObjectives: [
      'Understand infrared reflection detection',
      'Wire an IR sensor module',
      'Adjust sensitivity with a potentiometer'
    ],

    materials: [
      { name: 'IR Sensor Module', imageUrl: '/materials/ir-sensor.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'Resistor (220Ω)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Module',
        instruction: 'Connect VCC to 5V, GND to ground, and OUT to the LED/buzzer circuit through a transistor if needed.',
        imageUrl: '/steps/s23-step1.jpg',
        tip: 'Most IR modules output LOW when an object is detected.'
      },
      {
        stepNumber: 2,
        title: 'Test Detection',
        instruction: 'Place your hand in front of the sensor. The onboard LED should light up, and your external indicator should respond.',
        imageUrl: '/steps/s23-step2.jpg',
        tip: 'White surfaces reflect IR better than dark ones.'
      },
      {
        stepNumber: 3,
        title: 'Adjust Range',
        instruction: 'Turn the potentiometer on the module to change detection distance.',
        imageUrl: '/steps/s23-step3.jpg',
        tip: 'Typical range is 2–30 cm depending on the module.'
      },
      {
        stepNumber: 4,
        title: 'Test Different Surfaces',
        instruction: 'Test with white paper, black cloth, your hand, and a mirror. Record which surfaces are detected.',
        imageUrl: '/steps/s23-step4.jpg',
        tip: 'This demonstrates how surface reflectivity affects IR detection.'
      }
    ],

    explanation: {
      simple: 'The sensor sends out invisible infrared light. When it bounces back from a nearby object, the sensor detects it.',
      scientific: 'IR proximity sensors emit modulated infrared light and detect the reflected signal using a photodiode. The comparator circuit triggers when reflected signal intensity exceeds the threshold set by the potentiometer.',
      keyTerms: [
        { term: 'Infrared (IR)', definition: 'Invisible light with wavelength longer than visible red' },
        { term: 'Proximity Sensor', definition: 'A sensor that detects nearby objects without physical contact' },
        { term: 'Reflectivity', definition: 'How well a surface bounces back light' }
      ]
    },

    experiment: {
      hypothesis: 'White surfaces will be detected at greater distances than dark surfaces.',
      variables: {
        independent: 'Surface color and material',
        dependent: 'Maximum detection distance (cm)',
        controlled: 'Sensor module, potentiometer setting, ambient light'
      },
      dataTable: {
        columns: ['Surface', 'Color', 'Max Detection Distance (cm)', 'Detected? (Y/N)'],
        rows: [
          ['White paper', 'White', '___', '___'],
          ['Black cloth', 'Black', '___', '___'],
          ['Hand', 'Skin', '___', '___'],
          ['Mirror', 'Reflective', '___', '___'],
          ['Wood', 'Brown', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'IR stands for:', options: ['Internal Relay', 'Infrared', 'Input Register', 'Inverse Resistance'], correctIndex: 1 },
      { question: 'Dark surfaces:', options: ['Reflect more IR', 'Absorb more IR', 'Emit IR', 'Block all light'], correctIndex: 1 },
      { question: 'The potentiometer on the module adjusts:', options: ['Color', 'Detection distance', 'Voltage output', 'LED brightness'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s23-ir-proximity.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=IR%20proximity%20sensor%20circuit%20project',
    safetyInstructions: ['Do not look directly at the IR emitter LED', 'Use correct supply voltage']
  },

  {
    levelNumber: 24,
    id: 'scientist-24',
    title: 'Temperature Sensor Thermometer',
    subtitle: 'Measure heat electronically',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Sensors',

    overview: 'Use a temperature sensor (LM35 or TMP36) to measure ambient temperature and display it using LEDs as a bar graph.',

    learningObjectives: [
      'Understand analog temperature sensors',
      'Read sensor voltage with a multimeter',
      'Create a simple LED temperature indicator'
    ],

    materials: [
      { name: 'Temperature Sensor (LM35 or TMP36)', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LEDs (Green, Yellow, Red)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistors (220Ω, 10kΩ)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Sensor',
        instruction: 'Connect LM35: left pin = VCC, center pin = output, right pin = GND (check datasheet for your model).',
        imageUrl: '/steps/s24-step1.jpg',
        tip: 'LM35 outputs 10mV per degree Celsius.'
      },
      {
        stepNumber: 2,
        title: 'Measure Voltage',
        instruction: 'Set multimeter to millivolt DC mode. Measure the output pin. A reading of 250mV means 25 degrees C.',
        imageUrl: '/steps/s24-step2.jpg',
        tip: 'Hold the sensor between your fingers to see the voltage rise.'
      },
      {
        stepNumber: 3,
        title: 'LED Bar Graph',
        instruction: 'Set up three LEDs: Green (cool), Yellow (warm), Red (hot). Use comparator thresholds with resistor dividers to activate each LED at different temperatures.',
        imageUrl: '/steps/s24-step3.jpg',
        tip: 'Simplified version: just read the multimeter and manually record temperatures.'
      },
      {
        stepNumber: 4,
        title: 'Log Temperatures',
        instruction: 'Measure temperature at different spots: room, near a window, in sunlight, near a fridge. Record all readings.',
        imageUrl: '/steps/s24-step4.jpg',
        tip: 'Create a temperature map of your home.'
      }
    ],

    explanation: {
      simple: 'The sensor creates a small voltage that changes with temperature. A higher temperature means a higher voltage. You can read this with a meter.',
      scientific: 'The LM35 is a precision analog sensor whose output voltage is linearly proportional to Celsius temperature at 10mV/°C. It requires no external calibration.',
      keyTerms: [
        { term: 'Analog Sensor', definition: 'A sensor that outputs a continuously varying voltage' },
        { term: 'Linear Proportional', definition: 'Output changes at a constant rate with input' },
        { term: 'Calibration', definition: 'Adjusting a sensor to give accurate readings' }
      ]
    },

    experiment: {
      hypothesis: 'The sensor voltage will increase proportionally as temperature increases.',
      variables: {
        independent: 'Temperature environment (location)',
        dependent: 'Sensor output voltage (mV)',
        controlled: 'Sensor model, supply voltage, measurement tool'
      },
      dataTable: {
        columns: ['Location', 'Voltage (mV)', 'Temperature (°C)', 'LED Color'],
        rows: [
          ['Room center', '___', '___', '___'],
          ['Near window', '___', '___', '___'],
          ['In sunlight', '___', '___', '___'],
          ['Near fridge', '___', '___', '___'],
          ['Held in hand', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'LM35 outputs per degree Celsius:', options: ['1mV', '10mV', '100mV', '1V'], correctIndex: 1 },
      { question: '300mV reading means:', options: ['3°C', '30°C', '300°C', '0.3°C'], correctIndex: 1 },
      { question: 'This is what type of sensor?', options: ['Digital', 'Analog', 'Binary', 'Wireless'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s24-thermometer.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=LM35%20temperature%20sensor%20multimeter%20experiment',
    safetyInstructions: ['Do not expose the sensor to temperatures above 150°C', 'Verify pin orientation before powering on']
  },

  {
    levelNumber: 25,
    id: 'scientist-25',
    title: 'pH Testing: Acids & Bases',
    subtitle: 'Measure chemical properties',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '35 minutes',
    xpReward: 40,
    category: 'Chemistry',

    overview: 'Test household liquids to determine if they are acidic, neutral, or basic using pH indicator strips.',

    learningObjectives: [
      'Understand the pH scale (0–14)',
      'Classify substances as acid, neutral, or base',
      'Record and compare pH values'
    ],

    materials: [
      { name: 'pH Indicator Strips', imageUrl: '/materials/ph-strips.jpg' },
      { name: 'White Vinegar', imageUrl: '/materials/vinegar.jpg' },
      { name: 'Lemon Juice', imageUrl: '/materials/lemon.jpg' },
      { name: 'Soap Water', imageUrl: '/materials/soap.jpg' },
      { name: 'Baking Soda (dissolved)', imageUrl: '/materials/baking-soda.jpg' },
      { name: 'Plastic Cups', imageUrl: '/materials/plastic-cups.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' },
      { name: 'Safety Goggles', imageUrl: '/materials/goggles.jpg' },
      { name: 'Disposable Gloves', imageUrl: '/materials/gloves.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Prepare Samples',
        instruction: 'Pour small amounts of vinegar, lemon juice, tap water, soap water, and baking soda solution into separate labeled cups.',
        imageUrl: '/steps/s25-step1.jpg',
        tip: 'Label each cup clearly before testing.'
      },
      {
        stepNumber: 2,
        title: 'Dip Strips',
        instruction: 'Dip a pH strip into each sample for 2 seconds. Compare the strip color to the pH chart provided.',
        imageUrl: '/steps/s25-step2.jpg',
        tip: 'Use a fresh strip for each sample to avoid contamination.'
      },
      {
        stepNumber: 3,
        title: 'Record Results',
        instruction: 'Write down the pH value and classify each sample: Acid (0–6), Neutral (7), Base (8–14).',
        imageUrl: '/steps/s25-step3.jpg',
        tip: 'Most household cleaners are basic. Most fruits are acidic.'
      },
      {
        stepNumber: 4,
        title: 'Rank & Discuss',
        instruction: 'Sort your samples from most acidic to most basic. Discuss which might be harmful and which are safe.',
        imageUrl: '/steps/s25-step4.jpg',
        tip: 'Extreme pH values (very acidic or very basic) can be corrosive.'
      }
    ],

    explanation: {
      simple: 'The pH scale tells you how acidic or basic something is. Acids taste sour (like lemon), bases feel slippery (like soap). Water is neutral at pH 7.',
      scientific: 'pH measures the concentration of hydrogen ions (H+) in a solution. pH = -log[H+]. Lower pH means higher acidity. The scale is logarithmic — each unit represents a 10x change in H+ concentration.',
      keyTerms: [
        { term: 'pH', definition: 'A scale from 0 to 14 measuring acidity or alkalinity' },
        { term: 'Acid', definition: 'A substance with pH less than 7 that donates H+ ions' },
        { term: 'Base (Alkali)', definition: 'A substance with pH greater than 7 that accepts H+ ions' },
        { term: 'Neutral', definition: 'A substance with pH of exactly 7, like pure water' }
      ]
    },

    experiment: {
      hypothesis: 'Lemon juice and vinegar will be acidic while soap and baking soda will be basic.',
      variables: {
        independent: 'Liquid sample',
        dependent: 'pH value',
        controlled: 'Strip type, dip time, temperature'
      },
      dataTable: {
        columns: ['Sample', 'Strip Color', 'pH Value', 'Classification'],
        rows: [
          ['Vinegar', '___', '___', '___'],
          ['Lemon juice', '___', '___', '___'],
          ['Tap water', '___', '___', '___'],
          ['Soap water', '___', '___', '___'],
          ['Baking soda solution', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'pH 7 is:', options: ['Acidic', 'Basic', 'Neutral', 'Dangerous'], correctIndex: 2 },
      { question: 'Lemon juice pH is approximately:', options: ['1', '2-3', '7', '10'], correctIndex: 1 },
      { question: 'The pH scale is:', options: ['Linear', 'Logarithmic', 'Random', 'Binary'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s25-ph-testing.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=pH%20testing%20household%20items%20experiment',
    safetyInstructions: ['Wear goggles and gloves', 'Do not taste any samples', 'Wash hands after the experiment', 'Dispose of samples properly']
  },

  {
    levelNumber: 26,
    id: 'scientist-26',
    title: 'Volcanic Chemical Reaction',
    subtitle: 'Acid-base reaction in action',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '30 minutes',
    xpReward: 35,
    category: 'Chemistry',

    overview: 'Create a dramatic fizzing reaction by combining vinegar and baking soda to learn about acid-base chemistry and gas production.',

    learningObjectives: [
      'Observe an acid-base neutralization reaction',
      'Identify carbon dioxide gas production',
      'Measure reaction intensity with different ratios'
    ],

    materials: [
      { name: 'White Vinegar', imageUrl: '/materials/vinegar.jpg' },
      { name: 'Baking Soda', imageUrl: '/materials/baking-soda.jpg' },
      { name: 'Food Coloring', imageUrl: '/materials/food-coloring.jpg' },
      { name: 'Plastic Bottle (500ml)', imageUrl: '/materials/plastic-bottle.jpg' },
      { name: 'Plastic Cups', imageUrl: '/materials/plastic-cups.jpg' },
      { name: 'Spoons', imageUrl: '/materials/spoons.jpg' },
      { name: 'Tray (for mess)', imageUrl: '/materials/tray.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' },
      { name: 'Safety Goggles', imageUrl: '/materials/goggles.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Setup',
        instruction: 'Place the plastic bottle on a tray. Add 2 tablespoons of baking soda into the bottle.',
        imageUrl: '/steps/s26-step1.jpg',
        tip: 'The tray catches overflow. Work on a surface that is easy to clean.'
      },
      {
        stepNumber: 2,
        title: 'Add Color',
        instruction: 'Add a few drops of red food coloring to make it look like lava.',
        imageUrl: '/steps/s26-step2.jpg',
        tip: 'Red and orange food coloring gives the best volcano effect.'
      },
      {
        stepNumber: 3,
        title: 'Pour Vinegar',
        instruction: 'Quickly pour about 100ml of vinegar into the bottle and step back.',
        imageUrl: '/steps/s26-step3.jpg',
        tip: 'The reaction produces CO2 gas, which creates the fizz and overflow.'
      },
      {
        stepNumber: 4,
        title: 'Vary Amounts',
        instruction: 'Repeat with different baking soda amounts (1, 2, 3, 4 spoons) and record fizz intensity.',
        imageUrl: '/steps/s26-step4.jpg',
        tip: 'More baking soda = more vigorous reaction up to the point where excess remains unreacted.'
      }
    ],

    explanation: {
      simple: 'Vinegar (acid) and baking soda (base) react to produce carbon dioxide gas. The gas makes bubbles and fizz.',
      scientific: 'The reaction is: CH3COOH + NaHCO3 → CH3COONa + H2O + CO2. Acetic acid reacts with sodium bicarbonate to produce sodium acetate, water, and carbon dioxide gas. The gas nucleates as bubbles, creating the effervescent overflow.',
      keyTerms: [
        { term: 'Neutralization', definition: 'A reaction between an acid and a base producing salt and water' },
        { term: 'Carbon Dioxide (CO2)', definition: 'A colorless gas produced in this reaction' },
        { term: 'Effervescence', definition: 'The escape of gas from a liquid, creating bubbles' }
      ]
    },

    experiment: {
      hypothesis: 'Increasing baking soda will produce more CO2 and a more vigorous reaction.',
      variables: {
        independent: 'Amount of baking soda (spoons)',
        dependent: 'Fizz intensity and overflow volume',
        controlled: 'Vinegar amount, bottle size, temperature'
      },
      dataTable: {
        columns: ['Baking Soda (spoons)', 'Vinegar (ml)', 'Fizz Intensity (1-5)', 'Overflow? (Y/N)'],
        rows: [
          ['1', '100', '___', '___'],
          ['2', '100', '___', '___'],
          ['3', '100', '___', '___'],
          ['4', '100', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'The gas produced is:', options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'], correctIndex: 2 },
      { question: 'This reaction is called:', options: ['Combustion', 'Neutralization', 'Oxidation', 'Fusion'], correctIndex: 1 },
      { question: 'Baking soda is a:', options: ['Strong acid', 'Base', 'Neutral salt', 'Gas'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s26-volcano.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=vinegar%20baking%20soda%20volcano%20experiment',
    safetyInstructions: ['Wear goggles', 'Work on a tray or washable surface', 'Do not seal the bottle — pressure can build up', 'Clean up spills immediately']
  },

  {
    levelNumber: 27,
    id: 'scientist-27',
    title: 'Density Tower',
    subtitle: 'Stack liquids by density',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Physics & Chemistry',

    overview: 'Layer different liquids in a jar to create a colorful density tower and observe how density determines which floats on top.',

    learningObjectives: [
      'Understand density and why objects float or sink',
      'Create a multi-layer density column',
      'Predict where small objects will float'
    ],

    materials: [
      { name: 'Honey', imageUrl: '/materials/honey.jpg' },
      { name: 'Vegetable Oil', imageUrl: '/materials/oil.jpg' },
      { name: 'Rubbing Alcohol', imageUrl: '/materials/alcohol.jpg' },
      { name: 'Food Coloring', imageUrl: '/materials/food-coloring.jpg' },
      { name: 'Tall Glass or Jar', imageUrl: '/materials/glass-jar.jpg' },
      { name: 'Plastic Spoon', imageUrl: '/materials/spoons.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Pour Honey',
        instruction: 'Slowly pour honey into the bottom of the jar. It is the densest liquid.',
        imageUrl: '/steps/s27-step1.jpg',
        tip: 'Pour slowly against the side of the glass to prevent mixing.'
      },
      {
        stepNumber: 2,
        title: 'Add Colored Water',
        instruction: 'Mix water with food coloring. Slowly pour it on top of the honey using a spoon to break the fall.',
        imageUrl: '/steps/s27-step2.jpg',
        tip: 'Water is less dense than honey, so it floats on top.'
      },
      {
        stepNumber: 3,
        title: 'Add Oil',
        instruction: 'Gently pour vegetable oil on top. It floats because it is less dense than water.',
        imageUrl: '/steps/s27-step3.jpg',
        tip: 'Oil and water do not mix — they are immiscible.'
      },
      {
        stepNumber: 4,
        title: 'Add Alcohol',
        instruction: 'Color the rubbing alcohol with a different food coloring. Pour it on top very gently.',
        imageUrl: '/steps/s27-step4.jpg',
        tip: 'Alcohol is the least dense layer. You should now see four distinct layers.'
      }
    ],

    explanation: {
      simple: 'Density is how heavy something is for its size. Heavier (denser) liquids sink to the bottom. Lighter ones float on top.',
      scientific: 'Density is mass per unit volume (ρ = m/V). Liquids self-stratify based on density due to gravitational potential energy minimization. Immiscible liquids maintain distinct interfaces.',
      keyTerms: [
        { term: 'Density', definition: 'Mass per unit volume, typically in g/mL or kg/m³' },
        { term: 'Immiscible', definition: 'Liquids that do not mix, like oil and water' },
        { term: 'Buoyancy', definition: 'The upward force on a less dense object in a denser fluid' }
      ]
    },

    experiment: {
      hypothesis: 'Liquids will form layers in order of decreasing density from bottom to top.',
      variables: {
        independent: 'Type of liquid',
        dependent: 'Layer position in the tower',
        controlled: 'Container, volume of each liquid, temperature'
      },
      dataTable: {
        columns: ['Liquid', 'Estimated Density (g/mL)', 'Layer Position', 'Color Used'],
        rows: [
          ['Honey', '~1.4', '___', '___'],
          ['Water', '~1.0', '___', '___'],
          ['Vegetable Oil', '~0.9', '___', '___'],
          ['Rubbing Alcohol', '~0.8', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Density equals:', options: ['Mass x Volume', 'Mass / Volume', 'Volume / Mass', 'Weight x Height'], correctIndex: 1 },
      { question: 'The densest liquid goes:', options: ['On top', 'In the middle', 'To the bottom', 'Nowhere'], correctIndex: 2 },
      { question: 'Oil and water are:', options: ['Miscible', 'Immiscible', 'Identical', 'Solid'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s27-density-tower.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=density%20tower%20experiment%20kids',
    safetyInstructions: ['Do not drink any liquids used in the experiment', 'Rubbing alcohol is flammable — keep away from heat', 'Wash hands after handling']
  },

  {
    levelNumber: 28,
    id: 'scientist-28',
    title: 'Chromatography: Color Separation',
    subtitle: 'Reveal hidden colors in ink',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Chemistry',

    overview: 'Use paper chromatography to separate the pigments hidden inside marker ink.',

    learningObjectives: [
      'Understand chromatography separation',
      'Observe that colors are mixtures of pigments',
      'Compare different marker brands and colors'
    ],

    materials: [
      { name: 'Coffee Filters', imageUrl: '/materials/coffee-filter.jpg' },
      { name: 'Markers (washable, various colors)', imageUrl: '/materials/markers.jpg' },
      { name: 'Plastic Cups', imageUrl: '/materials/plastic-cups.jpg' },
      { name: 'Ruler', imageUrl: '/materials/ruler.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Prepare Filter Strips',
        instruction: 'Cut coffee filters into strips about 2cm wide and 10cm long. Draw a dot of marker ink 2cm from the bottom of each strip.',
        imageUrl: '/steps/s28-step1.jpg',
        tip: 'Make the dot small but dark — press firmly with the marker.'
      },
      {
        stepNumber: 2,
        title: 'Setup Water',
        instruction: 'Add water to a cup until it is about 1cm deep. Place the strip so the bottom touches water but the ink dot is above the water line.',
        imageUrl: '/steps/s28-step2.jpg',
        tip: 'If the dot touches water directly, ink will dissolve instead of separating.'
      },
      {
        stepNumber: 3,
        title: 'Wait & Observe',
        instruction: 'Watch the water rise up the paper by capillary action. Different pigments travel at different speeds.',
        imageUrl: '/steps/s28-step3.jpg',
        tip: 'Wait 10–15 minutes for the best separation.'
      },
      {
        stepNumber: 4,
        title: 'Record Results',
        instruction: 'Remove strips and let them dry. Count and name the separated colors for each marker.',
        imageUrl: '/steps/s28-step4.jpg',
        tip: 'Black markers often contain multiple hidden pigments.'
      }
    ],

    explanation: {
      simple: 'A black marker is not just black — it is a mix of colors. Water carries the pigments up the paper at different speeds, separating them.',
      scientific: 'Paper chromatography separates mixtures based on differential solubility and adsorption. Pigments with higher affinity for water (mobile phase) travel farther than those with higher affinity for paper (stationary phase).',
      keyTerms: [
        { term: 'Chromatography', definition: 'A technique for separating mixtures based on how components move through a medium' },
        { term: 'Mobile Phase', definition: 'The moving solvent (water) that carries pigments' },
        { term: 'Stationary Phase', definition: 'The fixed medium (paper) through which the solvent moves' },
        { term: 'Capillary Action', definition: 'The ability of liquid to flow through narrow spaces against gravity' }
      ]
    },

    experiment: {
      hypothesis: 'Black ink contains multiple hidden pigments that will separate into visible bands.',
      variables: {
        independent: 'Marker color and brand',
        dependent: 'Number and color of separated pigments',
        controlled: 'Paper type, water amount, strip size'
      },
      dataTable: {
        columns: ['Marker Color', 'Brand', 'Pigments Found', 'Distance Traveled (cm)'],
        rows: [
          ['Black', '___', '___', '___'],
          ['Brown', '___', '___', '___'],
          ['Green', '___', '___', '___'],
          ['Purple', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Chromatography separates mixtures by:', options: ['Heating', 'Differential movement through a medium', 'Electricity', 'Magnetism'], correctIndex: 1 },
      { question: 'Black marker ink is:', options: ['A single pigment', 'A mixture of pigments', 'Pure carbon', 'A gas'], correctIndex: 1 },
      { question: 'Capillary action moves water:', options: ['Downward only', 'Upward through narrow spaces', 'Sideways only', 'Not at all'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s28-chromatography.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=paper%20chromatography%20marker%20experiment',
    safetyInstructions: ['Use washable markers only', 'Work on a protected surface', 'Wash hands after experiment']
  },

  {
    levelNumber: 29,
    id: 'scientist-29',
    title: 'Water Filtration System',
    subtitle: 'Clean dirty water with layers',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Environmental Science',

    overview: 'Build a multi-layer water filter using sand, gravel, and cotton to clean muddy water.',

    learningObjectives: [
      'Understand physical filtration',
      'Build a layered filter system',
      'Compare water clarity before and after filtering'
    ],

    materials: [
      { name: 'Plastic Bottle (500ml, cut in half)', imageUrl: '/materials/plastic-bottle.jpg' },
      { name: 'Sand', imageUrl: '/materials/sand.jpg' },
      { name: 'Gravel / Pebbles', imageUrl: '/materials/gravel.jpg' },
      { name: 'Cotton Balls', imageUrl: '/materials/cotton.jpg' },
      { name: 'Plastic Cups', imageUrl: '/materials/plastic-cups.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' },
      { name: 'Safety Goggles', imageUrl: '/materials/goggles.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Prepare the Filter',
        instruction: 'Cut a plastic bottle in half. Invert the top half (neck down) and place it inside the bottom half as a funnel.',
        imageUrl: '/steps/s29-step1.jpg',
        tip: 'Poke small holes in the bottle cap or remove it and place cotton in the neck.'
      },
      {
        stepNumber: 2,
        title: 'Layer Materials',
        instruction: 'From bottom to top in the funnel: cotton, fine sand, coarse sand, gravel.',
        imageUrl: '/steps/s29-step2.jpg',
        tip: 'Each layer catches different sized particles. Finest at bottom, coarsest at top.'
      },
      {
        stepNumber: 3,
        title: 'Make Dirty Water',
        instruction: 'Mix soil, leaves, and small debris into a cup of water.',
        imageUrl: '/steps/s29-step3.jpg',
        tip: 'The dirtier the water, the more dramatic the filter result.'
      },
      {
        stepNumber: 4,
        title: 'Filter & Compare',
        instruction: 'Pour dirty water through the filter. Collect the filtered water. Compare clarity with the original.',
        imageUrl: '/steps/s29-step4.jpg',
        tip: 'Filter a second time for even clearer water. Note: this is physical filtration only — the water is NOT safe to drink.'
      }
    ],

    explanation: {
      simple: 'Each layer catches different sized dirt particles. Gravel catches big stuff, sand catches smaller stuff, and cotton catches the tiniest particles.',
      scientific: 'Physical filtration removes suspended particulates based on particle size. Gravel filters macro-particles, sand filters micro-particles, and cotton provides fine filtration. This process does not remove dissolved chemicals or microorganisms.',
      keyTerms: [
        { term: 'Filtration', definition: 'Separating solids from liquids by passing through a porous material' },
        { term: 'Turbidity', definition: 'Cloudiness of water caused by suspended particles' },
        { term: 'Potable', definition: 'Safe to drink — filtered water is NOT potable without chemical treatment' }
      ]
    },

    experiment: {
      hypothesis: 'Multi-layer filtration will significantly reduce water turbidity.',
      variables: {
        independent: 'Number of filter layers',
        dependent: 'Water clarity (turbidity)',
        controlled: 'Water volume, dirt amount, filter container'
      },
      dataTable: {
        columns: ['Filter Setup', 'Clarity Rating (1-5)', 'Color', 'Visible Particles?'],
        rows: [
          ['No filter (dirty water)', '___', '___', '___'],
          ['Cotton only', '___', '___', '___'],
          ['Cotton + Sand', '___', '___', '___'],
          ['Cotton + Sand + Gravel', '___', '___', '___'],
          ['Double filtered', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Physical filtration removes:', options: ['Bacteria', 'Dissolved chemicals', 'Suspended particles', 'Viruses'], correctIndex: 2 },
      { question: 'The finest filter layer should be:', options: ['On top', 'At the bottom', 'In the middle', 'Not included'], correctIndex: 1 },
      { question: 'Is filtered water safe to drink?', options: ['Yes always', 'No, it needs chemical treatment too', 'Only if it looks clear', 'Yes if filtered twice'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s29-filtration.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=water%20filtration%20experiment%20kids%20science',
    safetyInstructions: ['Do NOT drink filtered water', 'Wear goggles', 'Wash hands after handling dirty water', 'Dispose of used materials properly']
  },

  {
    levelNumber: 30,
    id: 'scientist-30',
    title: 'Mini Weather Station',
    subtitle: 'Module 3 capstone project',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Systems Integration',

    overview: 'Combine a temperature sensor, LDR, and wind indicator into a simple manual weather station that logs environmental data.',

    learningObjectives: [
      'Integrate multiple sensors into one system',
      'Collect and log data systematically',
      'Present findings in a simple report'
    ],

    materials: [
      { name: 'Temperature Sensor (LM35)', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Resistors (10kΩ)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Battery Holder + AA Batteries', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Cardboard Sheets', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Stopwatch', imageUrl: '/materials/stopwatch.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Temperature Station',
        instruction: 'Wire LM35 to battery power. Measure output voltage with multimeter. Record temperature readings every hour.',
        imageUrl: '/steps/s30-step1.jpg',
        tip: 'Place the sensor outdoors in shade for accurate air temperature.'
      },
      {
        stepNumber: 2,
        title: 'Light Level Station',
        instruction: 'Wire LDR in a voltage divider with 10kΩ resistor. Measure voltage to determine light level.',
        imageUrl: '/steps/s30-step2.jpg',
        tip: 'Higher voltage = more light. Create a brightness scale: dark, dim, bright, sunlight.'
      },
      {
        stepNumber: 3,
        title: 'Wind Indicator',
        instruction: 'Build a simple wind vane from cardboard and a pencil. Mark compass directions. Observe and record wind direction.',
        imageUrl: '/steps/s30-step3.jpg',
        tip: 'The arrow points into the wind. Record direction and estimated strength.'
      },
      {
        stepNumber: 4,
        title: 'Data Log',
        instruction: 'Create a data table and record all three measurements every hour for 4–6 hours. Look for patterns.',
        imageUrl: '/steps/s30-step4.jpg',
        tip: 'Plot temperature and light on a simple graph to see trends.'
      },
      {
        stepNumber: 5,
        title: 'Report',
        instruction: 'Write a one-page weather report with your data, graphs, and conclusions.',
        imageUrl: '/steps/s30-step5.jpg',
        tip: 'Include: What changed? When was it hottest? Was light level related to temperature?'
      }
    ],

    explanation: {
      simple: 'A weather station collects data about the environment. By measuring temperature, light, and wind regularly, you can see weather patterns.',
      scientific: 'Systematic data collection over time reveals temporal patterns and correlations between meteorological variables. Sampling at regular intervals enables trend analysis.',
      keyTerms: [
        { term: 'Data Logging', definition: 'Recording measurements at regular intervals over time' },
        { term: 'Correlation', definition: 'A relationship between two variables that change together' },
        { term: 'Sampling Interval', definition: 'The time between each measurement' }
      ]
    },

    experiment: {
      hypothesis: 'Temperature will peak in the afternoon when light level is also highest.',
      variables: {
        independent: 'Time of day',
        dependent: 'Temperature, light level, wind direction',
        controlled: 'Sensor position, measurement method'
      },
      dataTable: {
        columns: ['Time', 'Temperature (°C)', 'Light Level', 'Wind Direction', 'Wind Strength'],
        rows: [
          ['8:00 AM', '___', '___', '___', '___'],
          ['10:00 AM', '___', '___', '___', '___'],
          ['12:00 PM', '___', '___', '___', '___'],
          ['2:00 PM', '___', '___', '___', '___'],
          ['4:00 PM', '___', '___', '___', '___'],
          ['6:00 PM', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Data logging means:', options: ['Deleting data', 'Recording measurements over time', 'Guessing values', 'Drawing pictures'], correctIndex: 1 },
      { question: 'Correlation means two variables:', options: ['Are identical', 'Change together in a pattern', 'Never change', 'Are unrelated'], correctIndex: 1 },
      { question: 'A wind vane shows:', options: ['Temperature', 'Humidity', 'Wind direction', 'Rainfall'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s30-weather-station.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=DIY%20weather%20station%20science%20project',
    safetyInstructions: ['Protect electronics from rain', 'Do not leave batteries connected overnight', 'Secure outdoor setups against wind'],

    completionMessage: 'Module 3 complete! You have mastered advanced circuits and chemical science. Next: Introduction to Microcontrollers!'
  },

  // ──────────────────────────────────────────
  // SECTION B: Introduction to Microcontrollers
  //            (Levels 31–40)
  // ──────────────────────────────────────────

  {
    levelNumber: 31,
    id: 'scientist-31',
    title: 'Meet the Arduino',
    subtitle: 'Your first microcontroller',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Microcontrollers',

    overview: 'Learn the parts of the Arduino Uno board, install the IDE, and upload your first test sketch.',

    learningObjectives: [
      'Identify Arduino Uno components',
      'Install the Arduino IDE',
      'Upload the built-in Blink example'
    ],

    materials: [
      { name: 'Arduino Uno Board', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable (Type B)', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Laptop or PC', imageUrl: '/materials/laptop.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Explore the Board',
        instruction: 'Identify: USB port, power jack, digital pins (0–13), analog pins (A0–A5), GND pins, 5V and 3.3V pins, reset button, and the onboard LED.',
        imageUrl: '/steps/s31-step1.jpg',
        tip: 'The onboard LED is connected to pin 13.'
      },
      {
        stepNumber: 2,
        title: 'Install IDE',
        instruction: 'Download the Arduino IDE from arduino.cc. Install it and open the application.',
        imageUrl: '/steps/s31-step2.jpg',
        tip: 'Select the correct board (Arduino Uno) and port from the Tools menu.'
      },
      {
        stepNumber: 3,
        title: 'Open Blink Example',
        instruction: 'Go to File > Examples > 01.Basics > Blink. Read through the code.',
        imageUrl: '/steps/s31-step3.jpg',
        tip: 'Every Arduino program has two functions: setup() runs once, loop() runs forever.'
      },
      {
        stepNumber: 4,
        title: 'Upload',
        instruction: 'Connect the Arduino via USB. Click Upload (arrow button). Watch the onboard LED blink.',
        imageUrl: '/steps/s31-step4.jpg',
        tip: 'If you see "Done uploading," it worked! If not, check your board and port settings.'
      }
    ],

    explanation: {
      simple: 'An Arduino is a tiny computer that you program to control electronics. It reads inputs (sensors) and controls outputs (LEDs, motors).',
      scientific: 'The Arduino Uno uses an ATmega328P microcontroller with 14 digital I/O pins, 6 analog inputs, 16MHz clock, and 32KB flash memory. Programs are written in C/C++ and uploaded via USB serial.',
      keyTerms: [
        { term: 'Microcontroller', definition: 'A small computer on a single chip that runs programs to control hardware' },
        { term: 'IDE', definition: 'Integrated Development Environment — software for writing and uploading code' },
        { term: 'Sketch', definition: 'The Arduino name for a program' },
        { term: 'setup()', definition: 'Code that runs once when the program starts' },
        { term: 'loop()', definition: 'Code that runs repeatedly after setup' }
      ]
    },

    experiment: {
      hypothesis: 'Changing the delay value in the Blink sketch will change the blink speed.',
      variables: {
        independent: 'Delay value in milliseconds',
        dependent: 'Blink speed (visual)',
        controlled: 'Board type, LED pin, code structure'
      },
      dataTable: {
        columns: ['Delay (ms)', 'Blinks per 10 seconds', 'Visual Speed'],
        rows: [
          ['1000', '___', '___'],
          ['500', '___', '___'],
          ['200', '___', '___'],
          ['100', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Arduino programs are called:', options: ['Scripts', 'Modules', 'Sketches', 'Documents'], correctIndex: 2 },
      { question: 'setup() runs:', options: ['Forever', 'Once', 'Never', 'Twice'], correctIndex: 1 },
      { question: 'The onboard LED is on pin:', options: ['0', '5', '10', '13'], correctIndex: 3 }
    ],

    outputImageUrl: '/outputs/s31-arduino-intro.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20Uno%20introduction%20first%20sketch',
    safetyInstructions: ['Handle the board by the edges', 'Do not place on metal surfaces', 'Use USB power for initial experiments']
  },

  {
    levelNumber: 32,
    id: 'scientist-32',
    title: 'External LED Blink',
    subtitle: 'Control an LED with code',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Microcontrollers',

    overview: 'Connect an external LED to an Arduino pin and write code to blink it at different speeds.',

    learningObjectives: [
      'Wire an external LED to a digital pin',
      'Use digitalWrite() and delay()',
      'Modify blink patterns'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistor (220Ω)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the LED',
        instruction: 'Connect Arduino pin 8 → resistor → LED anode. Connect LED cathode → GND.',
        imageUrl: '/steps/s32-step1.jpg',
        tip: 'Always use a resistor to limit current through the LED.'
      },
      {
        stepNumber: 2,
        title: 'Write Code',
        instruction: 'Set pin 8 as OUTPUT in setup(). In loop(), use digitalWrite(8, HIGH), delay(500), digitalWrite(8, LOW), delay(500).',
        imageUrl: '/steps/s32-step2.jpg',
        tip: 'HIGH turns the pin ON (5V), LOW turns it OFF (0V).'
      },
      {
        stepNumber: 3,
        title: 'Upload & Test',
        instruction: 'Upload the sketch and watch the LED blink every 500ms.',
        imageUrl: '/steps/s32-step3.jpg',
        tip: 'Try changing delay values to make it blink faster or slower.'
      },
      {
        stepNumber: 4,
        title: 'Pattern Challenge',
        instruction: 'Create an SOS pattern: 3 short blinks, 3 long blinks, 3 short blinks.',
        imageUrl: '/steps/s32-step4.jpg',
        tip: 'Short = 200ms on, Long = 600ms on. Add pauses between letters.'
      }
    ],

    explanation: {
      simple: 'You told the Arduino to turn a pin on and off. The LED connected to that pin blinks. Changing the delay changes the speed.',
      scientific: 'digitalWrite() sets a GPIO pin to logic HIGH (5V) or LOW (0V). The delay() function pauses execution for the specified milliseconds, creating timed output patterns.',
      keyTerms: [
        { term: 'GPIO', definition: 'General Purpose Input/Output — pins that can be configured for either function' },
        { term: 'digitalWrite()', definition: 'Function that sets a pin to HIGH (5V) or LOW (0V)' },
        { term: 'delay()', definition: 'Pauses the program for a given number of milliseconds' }
      ]
    },

    experiment: {
      hypothesis: 'Decreasing the delay will make the LED blink faster.',
      variables: {
        independent: 'Delay value (ms)',
        dependent: 'Visible blink rate',
        controlled: 'LED type, resistor value, pin number'
      },
      dataTable: {
        columns: ['Delay (ms)', 'Blinks in 10s', 'Visible?', 'Notes'],
        rows: [
          ['1000', '___', '___', '___'],
          ['500', '___', '___', '___'],
          ['100', '___', '___', '___'],
          ['50', '___', '___', '___'],
          ['10', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'digitalWrite(8, HIGH) sets pin 8 to:', options: ['0V', '3.3V', '5V', '9V'], correctIndex: 2 },
      { question: 'delay(1000) pauses for:', options: ['1 second', '10 seconds', '0.1 seconds', '1 minute'], correctIndex: 0 },
      { question: 'What protects the LED from too much current?', options: ['The USB cable', 'A resistor', 'The breadboard', 'The code'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s32-external-led.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20external%20LED%20blink%20tutorial',
    safetyInstructions: ['Always use a current-limiting resistor', 'Disconnect USB before changing wires', 'Check LED polarity']
  },

  {
    levelNumber: 33,
    id: 'scientist-33',
    title: 'Button Input',
    subtitle: 'Read digital signals',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Microcontrollers',

    overview: 'Connect a push button to Arduino and use digitalRead() to detect presses and control an LED.',

    learningObjectives: [
      'Wire a button with a pull-down resistor',
      'Use digitalRead() to detect button state',
      'Control an output based on input'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Push Button', imageUrl: '/materials/push-button.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistors (220Ω, 10kΩ)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Button',
        instruction: 'Connect one side of button to 5V. Other side to pin 2 AND to GND through a 10kΩ pull-down resistor.',
        imageUrl: '/steps/s33-step1.jpg',
        tip: 'The pull-down resistor keeps the pin LOW when the button is not pressed.'
      },
      {
        stepNumber: 2,
        title: 'Wire the LED',
        instruction: 'Connect pin 8 → 220Ω resistor → LED → GND.',
        imageUrl: '/steps/s33-step2.jpg',
        tip: 'This is the same LED circuit from Level 32.'
      },
      {
        stepNumber: 3,
        title: 'Write Code',
        instruction: 'In setup: pin 2 INPUT, pin 8 OUTPUT. In loop: if (digitalRead(2) == HIGH) { digitalWrite(8, HIGH); } else { digitalWrite(8, LOW); }',
        imageUrl: '/steps/s33-step3.jpg',
        tip: 'The LED should light only when the button is pressed.'
      },
      {
        stepNumber: 4,
        title: 'Toggle Challenge',
        instruction: 'Modify the code so the LED toggles on/off with each press instead of being held.',
        imageUrl: '/steps/s33-step4.jpg',
        tip: 'You will need a variable to remember the LED state and detect button transitions.'
      }
    ],

    explanation: {
      simple: 'The button sends a signal to the Arduino. When pressed, the pin reads HIGH. The code checks this and turns the LED on or off.',
      scientific: 'digitalRead() samples the voltage level on a GPIO pin. A pull-down resistor ensures a defined LOW state when the button is open, preventing floating pin issues.',
      keyTerms: [
        { term: 'digitalRead()', definition: 'Reads HIGH or LOW from a digital pin' },
        { term: 'Pull-down Resistor', definition: 'A resistor that holds a pin at LOW when no signal is present' },
        { term: 'Floating Pin', definition: 'An unconnected pin that reads unpredictable values' }
      ]
    },

    experiment: {
      hypothesis: 'The LED will respond instantly to button press and release.',
      variables: {
        independent: 'Button state (pressed/released)',
        dependent: 'LED state (on/off)',
        controlled: 'Circuit components, code logic'
      },
      dataTable: {
        columns: ['Button Action', 'digitalRead() Value', 'LED State', 'Response Time'],
        rows: [
          ['Not pressed', '___', '___', '___'],
          ['Pressed', '___', '___', '___'],
          ['Released', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A floating pin gives:', options: ['Always HIGH', 'Always LOW', 'Unpredictable values', 'Exactly 2.5V'], correctIndex: 2 },
      { question: 'Pull-down resistor connects pin to:', options: ['5V', 'GND', '3.3V', 'Another pin'], correctIndex: 1 },
      { question: 'digitalRead() returns:', options: ['A voltage', 'HIGH or LOW', 'A string', 'An analog value'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s33-button-input.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20push%20button%20LED%20digitalRead',
    safetyInstructions: ['Disconnect USB before rewiring', 'Ensure pull-down resistor is connected']
  },

  {
    levelNumber: 34,
    id: 'scientist-34',
    title: 'Potentiometer Analog Input',
    subtitle: 'Read continuous values',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Microcontrollers',

    overview: 'Connect a potentiometer to an analog pin and read its value using analogRead() on the Serial Monitor.',

    learningObjectives: [
      'Understand analog vs digital signals',
      'Use analogRead() and Serial Monitor',
      'Map analog values to useful ranges'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Potentiometer (10kΩ)', imageUrl: '/materials/potentiometer.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Potentiometer',
        instruction: 'Connect left pin to 5V, right pin to GND, center pin (wiper) to analog pin A0.',
        imageUrl: '/steps/s34-step1.jpg',
        tip: 'Turning the knob changes the voltage at the wiper from 0V to 5V.'
      },
      {
        stepNumber: 2,
        title: 'Write Code',
        instruction: 'In setup: Serial.begin(9600). In loop: int val = analogRead(A0); Serial.println(val); delay(100);',
        imageUrl: '/steps/s34-step2.jpg',
        tip: 'analogRead returns 0–1023 (10-bit ADC).'
      },
      {
        stepNumber: 3,
        title: 'Open Serial Monitor',
        instruction: 'Click Tools > Serial Monitor. Set baud to 9600. Turn the knob and watch values change.',
        imageUrl: '/steps/s34-step3.jpg',
        tip: 'Full left = 0, full right = 1023, middle = about 512.'
      },
      {
        stepNumber: 4,
        title: 'Map to Percentage',
        instruction: 'Use map(val, 0, 1023, 0, 100) to convert to a percentage. Print both raw and mapped values.',
        imageUrl: '/steps/s34-step4.jpg',
        tip: 'The map() function scales one range to another.'
      }
    ],

    explanation: {
      simple: 'Unlike a button (on/off), a potentiometer gives a range of values. The Arduino reads this as a number from 0 to 1023.',
      scientific: 'The Arduino ADC (Analog-to-Digital Converter) samples the analog voltage with 10-bit resolution, producing values from 0 (0V) to 1023 (5V). The map() function performs linear interpolation between ranges.',
      keyTerms: [
        { term: 'Analog Signal', definition: 'A continuously varying signal, not just on/off' },
        { term: 'ADC', definition: 'Analog-to-Digital Converter — converts voltage to a number' },
        { term: 'Resolution', definition: '10-bit means 1024 possible values (2^10)' },
        { term: 'map()', definition: 'Scales a value from one range to another' }
      ]
    },

    experiment: {
      hypothesis: 'Turning the potentiometer will produce a linear increase in analogRead values from 0 to 1023.',
      variables: {
        independent: 'Potentiometer position (degrees)',
        dependent: 'analogRead value',
        controlled: 'Supply voltage, resistor value, pin used'
      },
      dataTable: {
        columns: ['Knob Position', 'Raw Value (0-1023)', 'Mapped % (0-100)', 'Voltage (calc)'],
        rows: [
          ['Full left', '___', '___', '___'],
          ['Quarter', '___', '___', '___'],
          ['Half', '___', '___', '___'],
          ['Three-quarter', '___', '___', '___'],
          ['Full right', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'analogRead() returns values from:', options: ['0 to 100', '0 to 255', '0 to 1023', '0 to 5'], correctIndex: 2 },
      { question: 'ADC stands for:', options: ['Automatic Data Counter', 'Analog-to-Digital Converter', 'Advanced Digital Circuit', 'Analog Device Controller'], correctIndex: 1 },
      { question: 'map(512, 0, 1023, 0, 100) returns about:', options: ['10', '50', '75', '100'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s34-potentiometer.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20potentiometer%20analogRead%20tutorial',
    safetyInstructions: ['Disconnect USB before changing wiring', 'Handle potentiometer gently']
  },

  {
    levelNumber: 35,
    id: 'scientist-35',
    title: 'PWM LED Dimmer',
    subtitle: 'Smooth brightness control',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Microcontrollers',

    overview: 'Use PWM (analogWrite) to smoothly control LED brightness with a potentiometer.',

    learningObjectives: [
      'Understand PWM (Pulse Width Modulation)',
      'Use analogWrite() for variable output',
      'Control LED brightness from a potentiometer'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistor (220Ω)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Potentiometer (10kΩ)', imageUrl: '/materials/potentiometer.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire LED to PWM Pin',
        instruction: 'Connect LED + resistor to pin 9 (a PWM-capable pin, marked with ~).',
        imageUrl: '/steps/s35-step1.jpg',
        tip: 'Only pins marked with ~ support PWM: 3, 5, 6, 9, 10, 11.'
      },
      {
        stepNumber: 2,
        title: 'Wire Potentiometer',
        instruction: 'Connect potentiometer wiper to A0 (same as Level 34).',
        imageUrl: '/steps/s35-step2.jpg',
        tip: 'The potentiometer controls the brightness input.'
      },
      {
        stepNumber: 3,
        title: 'Write Code',
        instruction: 'Read A0 (0–1023), map to 0–255, then analogWrite(9, mappedValue).',
        imageUrl: '/steps/s35-step3.jpg',
        tip: 'analogWrite takes 0–255, not 0–1023. Use map() to convert.'
      },
      {
        stepNumber: 4,
        title: 'Test Dimming',
        instruction: 'Turn the knob and watch the LED smoothly change brightness from off to full brightness.',
        imageUrl: '/steps/s35-step4.jpg',
        tip: 'This is exactly how dimmable lights work in homes.'
      }
    ],

    explanation: {
      simple: 'PWM rapidly switches the LED on and off. The longer it stays on in each cycle, the brighter it appears. Your eyes see this as smooth dimming.',
      scientific: 'PWM modulates the duty cycle of a square wave. At 50% duty cycle, the LED is on half the time, appearing half brightness due to persistence of vision. analogWrite(255) = 100% duty cycle (full brightness).',
      keyTerms: [
        { term: 'PWM', definition: 'Pulse Width Modulation — varying the on-time of a square wave' },
        { term: 'Duty Cycle', definition: 'Percentage of time the signal is HIGH in one period' },
        { term: 'analogWrite()', definition: 'Outputs a PWM signal with duty cycle 0–255' }
      ]
    },

    experiment: {
      hypothesis: 'Higher analogWrite values will produce brighter LED output.',
      variables: {
        independent: 'analogWrite value (0–255)',
        dependent: 'LED brightness (visual 1-10 scale)',
        controlled: 'LED type, resistor, PWM frequency'
      },
      dataTable: {
        columns: ['Pot Position', 'analogRead (0-1023)', 'mapped (0-255)', 'Brightness (1-10)'],
        rows: [
          ['Full left', '___', '___', '___'],
          ['Quarter', '___', '___', '___'],
          ['Half', '___', '___', '___'],
          ['Three-quarter', '___', '___', '___'],
          ['Full right', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'PWM stands for:', options: ['Power Width Mode', 'Pulse Width Modulation', 'Pin Write Method', 'Phase Wave Modulation'], correctIndex: 1 },
      { question: 'analogWrite() accepts values:', options: ['0–1023', '0–5', '0–255', '0–100'], correctIndex: 2 },
      { question: '50% duty cycle means the LED is on:', options: ['100% of the time', '50% of the time', '25% of the time', '0% of the time'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s35-pwm-dimmer.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20PWM%20LED%20dimmer%20potentiometer',
    safetyInstructions: ['Use PWM-capable pins only', 'Always include LED resistor']
  },

  {
    levelNumber: 36,
    id: 'scientist-36',
    title: 'Servo Motor Control',
    subtitle: 'Precise angle movement',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Microcontrollers',

    overview: 'Control a servo motor angle using a potentiometer and the Arduino Servo library.',

    learningObjectives: [
      'Understand servo motor operation',
      'Use the Servo library',
      'Map input to servo angle (0–180 degrees)'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Servo Motor (SG90)', imageUrl: '/materials/servo.jpg' },
      { name: 'Potentiometer (10kΩ)', imageUrl: '/materials/potentiometer.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Servo',
        instruction: 'Orange wire → pin 9, Red wire → 5V, Brown wire → GND.',
        imageUrl: '/steps/s36-step1.jpg',
        tip: 'Servos can draw significant current — use USB power for one servo.'
      },
      {
        stepNumber: 2,
        title: 'Wire Potentiometer',
        instruction: 'Same as before: left → 5V, right → GND, center → A0.',
        imageUrl: '/steps/s36-step2.jpg',
        tip: 'The potentiometer knob controls the servo position.'
      },
      {
        stepNumber: 3,
        title: 'Write Code',
        instruction: 'Include Servo.h. Create Servo object. Attach to pin 9. Read A0, map 0-1023 to 0-180, servo.write(angle).',
        imageUrl: '/steps/s36-step3.jpg',
        tip: 'servo.write(90) centers the servo at 90 degrees.'
      },
      {
        stepNumber: 4,
        title: 'Test & Explore',
        instruction: 'Turn the knob and watch the servo follow your hand. Try making it sweep automatically with a for loop.',
        imageUrl: '/steps/s36-step4.jpg',
        tip: 'Add delay between angle changes for smooth movement.'
      }
    ],

    explanation: {
      simple: 'A servo motor moves to an exact angle that you specify. The potentiometer tells the Arduino what angle to send.',
      scientific: 'Servo motors use PWM signals (1-2ms pulse width at 50Hz) to set position. The Servo library abstracts this: servo.write(0) sends 1ms pulse, write(180) sends 2ms pulse.',
      keyTerms: [
        { term: 'Servo Motor', definition: 'A motor that moves to a specific angle (0–180°)' },
        { term: 'Pulse Width', definition: 'Duration of the control pulse that sets the angle' },
        { term: 'Servo Library', definition: 'Arduino library that handles servo PWM timing automatically' }
      ]
    },

    experiment: {
      hypothesis: 'The servo angle will match the potentiometer position proportionally.',
      variables: {
        independent: 'Potentiometer position',
        dependent: 'Servo angle',
        controlled: 'Servo model, pin, mapping range'
      },
      dataTable: {
        columns: ['Pot Position', 'analogRead', 'Mapped Angle', 'Actual Servo Position'],
        rows: [
          ['Full left', '___', '0°', '___'],
          ['Quarter', '___', '45°', '___'],
          ['Half', '___', '90°', '___'],
          ['Three-quarter', '___', '135°', '___'],
          ['Full right', '___', '180°', '___']
        ]
      }
    },

    quiz: [
      { question: 'Servo range is typically:', options: ['0–360°', '0–180°', '0–90°', '0–45°'], correctIndex: 1 },
      { question: 'Which library controls servos?', options: ['Wire.h', 'Servo.h', 'SPI.h', 'LCD.h'], correctIndex: 1 },
      { question: 'servo.write(90) moves to:', options: ['Full left', 'Center position', 'Full right', 'Off'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s36-servo.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20servo%20potentiometer%20control',
    safetyInstructions: ['Do not force the servo beyond its range', 'Keep fingers away from moving parts', 'Use external power for multiple servos']
  },

  {
    levelNumber: 37,
    id: 'scientist-37',
    title: 'Buzzer Music Player',
    subtitle: 'Play melodies with code',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Microcontrollers',

    overview: 'Use the tone() function to play musical notes through a piezo buzzer and compose a simple melody.',

    learningObjectives: [
      'Understand frequency and musical notes',
      'Use the tone() function',
      'Compose and play a melody'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Buzzer (Piezo)', imageUrl: '/materials/buzzer.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Buzzer',
        instruction: 'Connect one buzzer pin to digital pin 8 and the other to GND.',
        imageUrl: '/steps/s37-step1.jpg',
        tip: 'Use a passive buzzer for tone control. Active buzzers only beep at one pitch.'
      },
      {
        stepNumber: 2,
        title: 'Play Single Notes',
        instruction: 'Use tone(8, 262) for middle C. Add delay(500) and noTone(8) between notes.',
        imageUrl: '/steps/s37-step2.jpg',
        tip: 'Common note frequencies: C=262, D=294, E=330, F=349, G=392, A=440, B=494.'
      },
      {
        stepNumber: 3,
        title: 'Create Melody',
        instruction: 'Store notes and durations in arrays. Loop through them to play a tune.',
        imageUrl: '/steps/s37-step3.jpg',
        tip: 'Try "Twinkle Twinkle Little Star": C C G G A A G, F F E E D D C.'
      },
      {
        stepNumber: 4,
        title: 'Compose Your Own',
        instruction: 'Create your own melody by choosing note frequencies and durations.',
        imageUrl: '/steps/s37-step4.jpg',
        tip: 'Experiment with tempo by changing delay durations.'
      }
    ],

    explanation: {
      simple: 'Musical notes are just vibrations at specific frequencies. The buzzer vibrates the air at whatever frequency you tell it, creating different pitches.',
      scientific: 'The tone() function generates a square wave of the specified frequency on a GPIO pin. Musical notes correspond to specific frequencies based on the equal temperament scale. A4 = 440Hz is the standard tuning reference.',
      keyTerms: [
        { term: 'Frequency', definition: 'Number of vibrations per second, measured in Hertz (Hz)' },
        { term: 'tone()', definition: 'Generates a square wave of a given frequency on a pin' },
        { term: 'noTone()', definition: 'Stops the tone output on a pin' }
      ]
    },

    experiment: {
      hypothesis: 'Higher frequency values will produce higher-pitched sounds.',
      variables: {
        independent: 'Frequency value (Hz)',
        dependent: 'Perceived pitch',
        controlled: 'Buzzer type, pin, duration'
      },
      dataTable: {
        columns: ['Note', 'Frequency (Hz)', 'Perceived Pitch', 'Duration (ms)'],
        rows: [
          ['C4', '262', '___', '500'],
          ['E4', '330', '___', '500'],
          ['G4', '392', '___', '500'],
          ['A4', '440', '___', '500'],
          ['C5', '523', '___', '500']
        ]
      }
    },

    quiz: [
      { question: 'Middle C frequency is approximately:', options: ['100 Hz', '262 Hz', '440 Hz', '1000 Hz'], correctIndex: 1 },
      { question: 'tone() generates a:', options: ['Sine wave', 'Square wave', 'Triangle wave', 'No wave'], correctIndex: 1 },
      { question: 'A passive buzzer can:', options: ['Only beep at one pitch', 'Play different frequencies', 'Record sound', 'Amplify music'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s37-buzzer-music.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20buzzer%20melody%20tone%20tutorial',
    safetyInstructions: ['Keep buzzer volume comfortable', 'Do not hold buzzer against your ear']
  },

  {
    levelNumber: 38,
    id: 'scientist-38',
    title: 'LCD Display Hello World',
    subtitle: 'Show text on a screen',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Microcontrollers',

    overview: 'Connect a 16x2 LCD display to the Arduino and display custom text messages.',

    learningObjectives: [
      'Wire an I2C LCD display',
      'Use the LiquidCrystal_I2C library',
      'Display static and dynamic text'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'LCD Display (16x2 with I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Jumper Wires (M-F)', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire I2C LCD',
        instruction: 'Connect SDA → A4, SCL → A5, VCC → 5V, GND → GND.',
        imageUrl: '/steps/s38-step1.jpg',
        tip: 'I2C uses only 2 data wires instead of 12+ for parallel LCD.'
      },
      {
        stepNumber: 2,
        title: 'Install Library',
        instruction: 'In Arduino IDE: Sketch > Include Library > Manage Libraries. Search and install "LiquidCrystal_I2C".',
        imageUrl: '/steps/s38-step2.jpg',
        tip: 'Most I2C LCDs use address 0x27 or 0x3F.'
      },
      {
        stepNumber: 3,
        title: 'Write Code',
        instruction: 'Create LCD object: LiquidCrystal_I2C lcd(0x27, 16, 2). In setup: lcd.init(), lcd.backlight(), lcd.print("Hello, World!").',
        imageUrl: '/steps/s38-step3.jpg',
        tip: 'lcd.setCursor(col, row) positions the cursor. Row 0 is top, row 1 is bottom.'
      },
      {
        stepNumber: 4,
        title: 'Dynamic Display',
        instruction: 'In loop: read A0 from a potentiometer, display the value on line 2 of the LCD.',
        imageUrl: '/steps/s38-step4.jpg',
        tip: 'Use lcd.clear() or overwrite with spaces to avoid ghost characters.'
      }
    ],

    explanation: {
      simple: 'The LCD shows text that your Arduino sends to it. You can display sensor readings, messages, or anything you want.',
      scientific: 'I2C (Inter-Integrated Circuit) is a two-wire serial protocol using SDA (data) and SCL (clock) lines. The LCD controller receives character data and manages the dot-matrix display.',
      keyTerms: [
        { term: 'LCD', definition: 'Liquid Crystal Display — a screen that shows text and characters' },
        { term: 'I2C', definition: 'A two-wire communication protocol using SDA and SCL lines' },
        { term: 'Backlight', definition: 'LED lighting behind the LCD for visibility' }
      ]
    },

    experiment: {
      hypothesis: 'The LCD will display potentiometer values in real-time as the knob is turned.',
      variables: {
        independent: 'Potentiometer position',
        dependent: 'Value displayed on LCD',
        controlled: 'LCD model, I2C address, update rate'
      },
      dataTable: {
        columns: ['Pot Position', 'analogRead Value', 'LCD Line 1', 'LCD Line 2'],
        rows: [
          ['Full left', '___', 'Hello World', '___'],
          ['Half', '___', 'Hello World', '___'],
          ['Full right', '___', 'Hello World', '___']
        ]
      }
    },

    quiz: [
      { question: 'I2C uses how many data wires?', options: ['1', '2', '4', '8'], correctIndex: 1 },
      { question: 'SDA stands for:', options: ['Serial Data', 'System Data Access', 'Sensor Data Analog', 'Standard Digital Address'], correctIndex: 0 },
      { question: 'lcd.setCursor(0, 1) moves to:', options: ['Top-left', 'Bottom-left', 'Top-right', 'Center'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s38-lcd.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20I2C%20LCD%2016x2%20hello%20world',
    safetyInstructions: ['Handle LCD carefully to avoid cracking', 'Check I2C address with scanner sketch if display is blank']
  },

  {
    levelNumber: 39,
    id: 'scientist-39',
    title: 'Temperature Logger',
    subtitle: 'Sensor + Display + Serial',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Microcontrollers',

    overview: 'Read temperature from an LM35 sensor, display it on an LCD, and log data to the Serial Monitor.',

    learningObjectives: [
      'Combine analog input with LCD output',
      'Convert raw ADC values to temperature',
      'Log data over time via Serial'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Temperature Sensor (LM35)', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire Sensor',
        instruction: 'LM35: VCC → 5V, OUT → A0, GND → GND.',
        imageUrl: '/steps/s39-step1.jpg',
        tip: 'Same wiring as Level 24, now connected to Arduino.'
      },
      {
        stepNumber: 2,
        title: 'Wire LCD',
        instruction: 'Same I2C wiring as Level 38: SDA → A4, SCL → A5.',
        imageUrl: '/steps/s39-step2.jpg',
        tip: 'Both sensor (A0) and LCD (A4/A5) work simultaneously.'
      },
      {
        stepNumber: 3,
        title: 'Write Conversion Code',
        instruction: 'Read A0, convert: float tempC = (analogRead(A0) * 5.0 / 1024.0) * 100.0; Display on LCD and Serial.',
        imageUrl: '/steps/s39-step3.jpg',
        tip: 'LM35 outputs 10mV/°C. ADC converts 0-5V to 0-1023.'
      },
      {
        stepNumber: 4,
        title: 'Log Over Time',
        instruction: 'Add a timestamp counter. Print temperature with time to Serial Monitor every 2 seconds.',
        imageUrl: '/steps/s39-step4.jpg',
        tip: 'Use millis() for accurate timing instead of counting delays.'
      }
    ],

    explanation: {
      simple: 'The Arduino reads the sensor voltage, converts it to temperature, shows it on the LCD, and sends it to your computer for logging.',
      scientific: 'The ADC samples the LM35 output voltage. Since LM35 produces 10mV/°C, the conversion is: T(°C) = (ADC_value * Vref / ADC_resolution) * 100. Data is transmitted via UART serial at the configured baud rate.',
      keyTerms: [
        { term: 'Data Logging', definition: 'Automatically recording sensor data over time' },
        { term: 'UART', definition: 'Universal Asynchronous Receiver-Transmitter — serial communication protocol' },
        { term: 'millis()', definition: 'Returns the number of milliseconds since the program started' }
      ]
    },

    experiment: {
      hypothesis: 'Temperature readings will increase when the sensor is warmed by touch.',
      variables: {
        independent: 'Heat source (ambient, hand, warm water nearby)',
        dependent: 'Temperature reading (°C)',
        controlled: 'Sensor model, conversion formula, sampling rate'
      },
      dataTable: {
        columns: ['Time (s)', 'Raw ADC', 'Temperature (°C)', 'LCD Display', 'Condition'],
        rows: [
          ['0', '___', '___', '___', 'Ambient'],
          ['10', '___', '___', '___', 'Ambient'],
          ['20', '___', '___', '___', 'Hold sensor'],
          ['30', '___', '___', '___', 'Hold sensor'],
          ['40', '___', '___', '___', 'Release'],
          ['50', '___', '___', '___', 'Cooling']
        ]
      }
    },

    quiz: [
      { question: 'LM35 outputs 10mV per:', options: ['Volt', 'Degree Fahrenheit', 'Degree Celsius', 'Second'], correctIndex: 2 },
      { question: 'millis() returns:', options: ['Temperature', 'Milliseconds since start', 'Analog value', 'Pin number'], correctIndex: 1 },
      { question: 'Serial.println() sends data to:', options: ['LCD', 'Buzzer', 'Computer via USB', 'LED'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s39-temp-logger.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20LM35%20LCD%20temperature%20logger',
    safetyInstructions: ['Do not expose sensor to extreme heat', 'Verify sensor pin orientation']
  },

  {
    levelNumber: 40,
    id: 'scientist-40',
    title: 'Smart Night Lamp',
    subtitle: 'Module 4 capstone project',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 65,
    category: 'Capstone Project',

    overview: 'Build an automatic night lamp that turns on LEDs when it gets dark, displays light level on LCD, and plays an alert tone — all controlled by Arduino.',

    learningObjectives: [
      'Combine LDR input, LED output, LCD display, and buzzer',
      'Use conditional logic in a real application',
      'Create a fully documented project'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'LEDs (White x2)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Resistors (220Ω x2, 10kΩ)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Plan the System',
        instruction: 'Draw a system diagram: LDR (input) → Arduino (processor) → LEDs + LCD + Buzzer (outputs). Define threshold: light value below 300 = dark.',
        imageUrl: '/steps/s40-step1.jpg',
        tip: 'Planning first saves debugging time later.'
      },
      {
        stepNumber: 2,
        title: 'Wire All Components',
        instruction: 'LDR + 10kΩ → A0. LEDs → pins 8, 9. Buzzer → pin 10. LCD → I2C (A4, A5).',
        imageUrl: '/steps/s40-step2.jpg',
        tip: 'Label your wires to keep track of connections.'
      },
      {
        stepNumber: 3,
        title: 'Write the Logic',
        instruction: 'Read LDR. If light < 300: turn on LEDs (analogWrite for PWM brightness), play short tone, show "DARK - Lamp ON" on LCD. Else: LEDs off, show "BRIGHT - Lamp OFF".',
        imageUrl: '/steps/s40-step3.jpg',
        tip: 'Use PWM so brightness increases as it gets darker.'
      },
      {
        stepNumber: 4,
        title: 'Add Smooth Dimming',
        instruction: 'Map light level inversely to LED brightness: darker = brighter LEDs. Display the light value as a number on LCD line 2.',
        imageUrl: '/steps/s40-step4.jpg',
        tip: 'map(lightVal, 0, 1023, 255, 0) inverts the range.'
      },
      {
        stepNumber: 5,
        title: 'Test & Document',
        instruction: 'Test in different light conditions. Write a project report with circuit diagram, code explanation, and results.',
        imageUrl: '/steps/s40-step5.jpg',
        tip: 'Include photos, a video demo, and what you would improve.'
      }
    ],

    explanation: {
      simple: 'This project automatically detects darkness and turns on lights — just like street lamps. The Arduino reads the light sensor and decides what to do.',
      scientific: 'The system implements a closed-loop control: the LDR provides environmental feedback, the Arduino processes this using conditional logic and PWM mapping, and the actuators (LEDs, buzzer, LCD) respond accordingly. Inverse mapping creates proportional dimming.',
      keyTerms: [
        { term: 'Closed-loop Control', definition: 'A system where output is adjusted based on sensor feedback' },
        { term: 'Threshold', definition: 'A value that triggers a change in behavior' },
        { term: 'Inverse Mapping', definition: 'Converting a value so high input produces low output and vice versa' },
        { term: 'Proportional Control', definition: 'Output intensity varies proportionally to input level' }
      ]
    },

    experiment: {
      hypothesis: 'The night lamp will automatically brighten as ambient light decreases.',
      variables: {
        independent: 'Ambient light level',
        dependent: 'LED brightness, LCD display, buzzer state',
        controlled: 'Threshold value, component types, code logic'
      },
      dataTable: {
        columns: ['Light Condition', 'LDR Value', 'LED Brightness', 'LCD Message', 'Buzzer'],
        rows: [
          ['Bright sunlight', '___', '___', '___', '___'],
          ['Room light', '___', '___', '___', '___'],
          ['Dim room', '___', '___', '___', '___'],
          ['Covered (dark)', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'This project uses how many types of output?', options: ['1', '2', '3', '4'], correctIndex: 2 },
      { question: 'Inverse mapping means:', options: ['Same input and output', 'More light = brighter LED', 'Less light = brighter LED', 'No relationship'], correctIndex: 2 },
      { question: 'A closed-loop system uses:', options: ['No sensors', 'Feedback from sensors', 'Only outputs', 'Only inputs'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s40-night-lamp.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20automatic%20night%20lamp%20LDR%20project',
    safetyInstructions: ['Disconnect power before changing wiring', 'Test threshold values carefully', 'Keep connections secure to avoid intermittent behavior'],

    completionMessage: 'Module 4 Complete! You now know how to program a microcontroller, read sensors, control outputs, and build integrated systems. Next: Module 5 — Robotics Pioneer!'
  }
];

export default scientistLevels21to40;
