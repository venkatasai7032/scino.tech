// ============================================================
//  SCINO Scientist Program — Levels 11–20
//  Module 2/8
//  Stage: Intermediate Explorer
//  Theme: Circuits, Energy, Sound, Light, Magnetism
//  Includes: Equipment Board Data
// ============================================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

// ──────────────────────────────────────────
// EQUIPMENT BOARD — Module 2 Master Kit
// ──────────────────────────────────────────

export const module2EquipmentBoard = {
  moduleNumber: 2,
  moduleTitle: 'Intermediate Explorer Kit',
  description: 'All materials needed for Scientist Levels 11–20. Acquire these before starting.',
  totalItems: 38,
  categories: [
    {
      categoryName: 'Electronics Components',
      items: [
        { name: 'LEDs (Red, Green, Blue, White)', quantity: 8, imageUrl: '/materials/led-pack.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Resistors (220Ω, 1kΩ, 10kΩ)', quantity: 20, imageUrl: '/materials/resistors.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Buzzer (Piezo)', quantity: 2, imageUrl: '/materials/buzzer.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Push Buttons', quantity: 4, imageUrl: '/materials/push-button.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Toggle Switch', quantity: 2, imageUrl: '/materials/toggle-switch.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Potentiometer (10kΩ)', quantity: 2, imageUrl: '/materials/potentiometer.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'NPN Transistor (BC547)', quantity: 4, imageUrl: '/materials/transistor.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Capacitors (100µF, 10µF)', quantity: 4, imageUrl: '/materials/capacitor.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Diode (1N4007)', quantity: 4, imageUrl: '/materials/diode.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'LDR (Light Dependent Resistor)', quantity: 2, imageUrl: '/materials/ldr.jpg', estimatedCost: 'Low', reusable: true }
      ]
    },
    {
      categoryName: 'Power & Wiring',
      items: [
        { name: 'Breadboard (830 point)', quantity: 1, imageUrl: '/materials/breadboard.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Jumper Wires (M-M, M-F)', quantity: 40, imageUrl: '/materials/jumper-wires.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Battery Holder (2xAA)', quantity: 2, imageUrl: '/materials/battery-holder.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'AA Batteries', quantity: 6, imageUrl: '/materials/batteries.jpg', estimatedCost: 'Low', reusable: false },
        { name: '9V Battery + Snap Connector', quantity: 1, imageUrl: '/materials/9v-battery.jpg', estimatedCost: 'Low', reusable: false },
        { name: 'Crocodile Clip Wires', quantity: 4, imageUrl: '/materials/croc-clips.jpg', estimatedCost: 'Low', reusable: true }
      ]
    },
    {
      categoryName: 'Motors & Magnets',
      items: [
        { name: 'DC Motor (3-6V)', quantity: 2, imageUrl: '/materials/dc-motor.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Bar Magnets', quantity: 2, imageUrl: '/materials/bar-magnet.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Iron Filings (sealed bag)', quantity: 1, imageUrl: '/materials/iron-filings.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Compass', quantity: 1, imageUrl: '/materials/compass.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Copper Wire (enameled, 1m)', quantity: 1, imageUrl: '/materials/copper-wire.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Iron Nail (large)', quantity: 2, imageUrl: '/materials/iron-nail.jpg', estimatedCost: 'Low', reusable: true }
      ]
    },
    {
      categoryName: 'Sound & Light Tools',
      items: [
        { name: 'Small Speaker (8Ω)', quantity: 1, imageUrl: '/materials/speaker.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Tuning Fork', quantity: 1, imageUrl: '/materials/tuning-fork.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Small Mirror', quantity: 1, imageUrl: '/materials/mirror.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Prism', quantity: 1, imageUrl: '/materials/prism.jpg', estimatedCost: 'Medium', reusable: true },
        { name: 'Flashlight / Torch', quantity: 1, imageUrl: '/materials/flashlight.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Colored Filters (R,G,B)', quantity: 3, imageUrl: '/materials/color-filters.jpg', estimatedCost: 'Low', reusable: true }
      ]
    },
    {
      categoryName: 'General Lab Supplies',
      items: [
        { name: 'Multimeter', quantity: 1, imageUrl: '/materials/multimeter.jpg', estimatedCost: 'Medium', reusable: true },
        { name: 'Safety Goggles', quantity: 1, imageUrl: '/materials/goggles.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Notebook & Pen', quantity: 1, imageUrl: '/materials/notebook.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Ruler', quantity: 1, imageUrl: '/materials/ruler.jpg', estimatedCost: 'Low', reusable: true },
        { name: 'Tape (Insulation + Double-sided)', quantity: 2, imageUrl: '/materials/tape.jpg', estimatedCost: 'Low', reusable: false },
        { name: 'Cardboard Sheets', quantity: 3, imageUrl: '/materials/cardboard.jpg', estimatedCost: 'Low', reusable: false },
        { name: 'Plastic Cups', quantity: 4, imageUrl: '/materials/plastic-cups.jpg', estimatedCost: 'Low', reusable: false },
        { name: 'String (2m)', quantity: 1, imageUrl: '/materials/string.jpg', estimatedCost: 'Low', reusable: true }
      ]
    }
  ],

  getItemsByLevel: function (levelNumber) {
    const levelMap = {
      11: ['Breadboard', 'LEDs (Red, Green, Blue, White)', 'Resistors (220Ω, 1kΩ, 10kΩ)', 'Jumper Wires (M-M, M-F)', 'Battery Holder (2xAA)', 'AA Batteries', 'Toggle Switch'],
      12: ['Breadboard', 'LEDs (Red, Green, Blue, White)', 'Resistors (220Ω, 1kΩ, 10kΩ)', 'Push Buttons', 'Jumper Wires (M-M, M-F)', 'Battery Holder (2xAA)', 'AA Batteries'],
      13: ['Breadboard', 'Buzzer (Piezo)', 'NPN Transistor (BC547)', 'LDR (Light Dependent Resistor)', 'Resistors (220Ω, 1kΩ, 10kΩ)', 'Jumper Wires (M-M, M-F)', 'Battery Holder (2xAA)', 'AA Batteries'],
      14: ['Copper Wire (enameled, 1m)', 'Iron Nail (large)', 'AA Batteries', 'Battery Holder (2xAA)', 'Compass', 'Crocodile Clip Wires'],
      15: ['Bar Magnets', 'Iron Filings (sealed bag)', 'Compass', 'Cardboard Sheets', 'Notebook & Pen'],
      16: ['DC Motor (3-6V)', 'Battery Holder (2xAA)', 'AA Batteries', 'Toggle Switch', 'Jumper Wires (M-M, M-F)', 'Cardboard Sheets', 'Tape (Insulation + Double-sided)'],
      17: ['Tuning Fork', 'Plastic Cups', 'String (2m)', 'Small Speaker (8Ω)', 'Notebook & Pen'],
      18: ['Flashlight / Torch', 'Prism', 'Small Mirror', 'Colored Filters (R,G,B)', 'Cardboard Sheets', 'Notebook & Pen'],
      19: ['Breadboard', 'Potentiometer (10kΩ)', 'LEDs (Red, Green, Blue, White)', 'Resistors (220Ω, 1kΩ, 10kΩ)', 'Capacitors (100µF, 10µF)', 'Multimeter', 'Jumper Wires (M-M, M-F)', 'Battery Holder (2xAA)'],
      20: ['Breadboard', 'LDR (Light Dependent Resistor)', 'NPN Transistor (BC547)', 'Buzzer (Piezo)', 'LEDs (Red, Green, Blue, White)', 'DC Motor (3-6V)', 'Resistors (220Ω, 1kΩ, 10kΩ)', 'Battery Holder (2xAA)', 'AA Batteries', 'Multimeter']
    };
    return levelMap[levelNumber] || [];
  },

  getProgressChecklist: function (completedLevels) {
    const total = 10;
    const done = completedLevels.filter(l => l >= 11 && l <= 20).length;
    return {
      completed: done,
      total: total,
      percentage: Math.round((done / total) * 100),
      badge: done === total ? 'Intermediate Explorer' : null,
      nextMilestone: done < total ? `Complete Level ${11 + done}` : 'Module 2 Complete!'
    };
  }
};

// ──────────────────────────────────────────
// LEVELS 11–20 — Intermediate Explorer
// ──────────────────────────────────────────

const scientistLevels11to20 = [

  {
    levelNumber: 11,
    id: 'scientist-11',
    title: 'Series & Parallel LED Circuit',
    subtitle: 'Understand circuit configurations',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 35,
    category: 'Circuits',

    overview: 'Build LEDs in series and parallel and observe the differences in brightness and current flow.',

    learningObjectives: [
      'Understand series circuit behavior',
      'Understand parallel circuit behavior',
      'Measure voltage across each LED'
    ],

    materials: [
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LEDs (Red x3)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistors (220Ω)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Battery Holder (2xAA)', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Toggle Switch', imageUrl: '/materials/toggle-switch.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Build Series Circuit',
        instruction: 'Place 3 LEDs in a line on the breadboard. Connect positive of one to negative of the next. Add a 220Ω resistor at the start. Connect battery.',
        imageUrl: '/steps/s11-step1.jpg',
        tip: 'All LEDs share the same current path in series.'
      },
      {
        stepNumber: 2,
        title: 'Observe Series',
        instruction: 'Turn on the switch. Notice the brightness. If one LED is removed, all go off.',
        imageUrl: '/steps/s11-step2.jpg',
        tip: 'Series circuits have a single path for current.'
      },
      {
        stepNumber: 3,
        title: 'Build Parallel Circuit',
        instruction: 'Now connect 3 LEDs side by side — each with its own resistor, sharing the same power rails.',
        imageUrl: '/steps/s11-step3.jpg',
        tip: 'Each LED gets its own current path in parallel.'
      },
      {
        stepNumber: 4,
        title: 'Compare & Record',
        instruction: 'Compare brightness. Remove one LED — the others stay on. Record observations in your notebook.',
        imageUrl: '/steps/s11-step4.jpg',
        tip: 'Parallel circuits are more reliable because each path is independent.'
      }
    ],

    explanation: {
      simple: 'In series, LEDs share one path, so current is the same but voltage divides. In parallel, each LED gets full voltage.',
      scientific: 'Series circuits have equal current (I_total) through each component, with voltage drops summing to V_source. Parallel circuits maintain equal voltage across branches, with currents summing per Kirchhoff\'s Current Law.',
      keyTerms: [
        { term: 'Series Circuit', definition: 'Components connected end-to-end in a single path' },
        { term: 'Parallel Circuit', definition: 'Components connected across the same two nodes' },
        { term: 'Kirchhoff\'s Voltage Law', definition: 'Sum of voltage drops in a closed loop equals the source voltage' }
      ]
    },

    experiment: {
      hypothesis: 'LEDs in parallel will be brighter than LEDs in series with the same battery.',
      variables: {
        independent: 'Circuit configuration (series vs parallel)',
        dependent: 'LED brightness',
        controlled: 'Battery voltage, LED type, resistor value'
      },
      dataTable: {
        columns: ['Configuration', 'LED 1 Brightness', 'LED 2 Brightness', 'LED 3 Brightness', 'If 1 removed'],
        rows: [
          ['Series', '___', '___', '___', '___'],
          ['Parallel', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'In a series circuit, if one LED fails, what happens?', options: ['Nothing', 'All LEDs turn off', 'Others get brighter', 'Battery explodes'], correctIndex: 1 },
      { question: 'In parallel, each LED gets:', options: ['Half the voltage', 'No voltage', 'Full source voltage', 'Double voltage'], correctIndex: 2 },
      { question: 'Which configuration is used in home wiring?', options: ['Series', 'Parallel', 'Neither', 'Both equally'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s11-series-parallel.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=series%20parallel%20LED%20circuit%20experiment',
    safetyInstructions: ['Never short-circuit the battery', 'Always use resistors with LEDs', 'Disconnect power before rewiring']
  },

  {
    levelNumber: 12,
    id: 'scientist-12',
    title: 'Traffic Light Simulator',
    subtitle: 'Sequential LED control',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'Circuits',

    overview: 'Build a traffic light using red, yellow, and green LEDs that turn on and off in the correct sequence.',

    learningObjectives: [
      'Build a timed LED sequence circuit',
      'Understand timing in circuits',
      'Model real-world systems with electronics'
    ],

    materials: [
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Red LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Yellow LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Green LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistors (220Ω x3)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Push Buttons (x3)', imageUrl: '/materials/push-button.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Mount LEDs',
        instruction: 'Place red, yellow, and green LEDs vertically on the breadboard like a real traffic light.',
        imageUrl: '/steps/s12-step1.jpg',
        tip: 'Use the correct polarity — longer leg is positive (anode).'
      },
      {
        stepNumber: 2,
        title: 'Add Resistors',
        instruction: 'Connect a 220Ω resistor to each LED cathode. Connect anodes to separate buttons.',
        imageUrl: '/steps/s12-step2.jpg',
        tip: 'Each LED needs its own current-limiting resistor.'
      },
      {
        stepNumber: 3,
        title: 'Wire Buttons',
        instruction: 'Connect each button so pressing it lights only one LED at a time.',
        imageUrl: '/steps/s12-step3.jpg',
        tip: 'In a real traffic light, a controller handles timing. Here, you control manually.'
      },
      {
        stepNumber: 4,
        title: 'Simulate Sequence',
        instruction: 'Press buttons in order: Green → Yellow → Red → Green. Time each phase with a stopwatch.',
        imageUrl: '/steps/s12-step4.jpg',
        tip: 'Record the duration of each phase.'
      }
    ],

    explanation: {
      simple: 'A traffic light follows a fixed pattern. You built the same system using buttons to switch between colors.',
      scientific: 'Sequential logic controls state transitions. Each LED represents a state, and button presses trigger transitions following a finite state machine model.',
      keyTerms: [
        { term: 'State Machine', definition: 'A system that transitions between defined states based on inputs' },
        { term: 'Sequential Logic', definition: 'Logic where output depends on current state and input' }
      ]
    },

    experiment: {
      hypothesis: 'Timed traffic phases improve traffic flow compared to random switching.',
      variables: {
        independent: 'Phase duration',
        dependent: 'Perceived traffic flow efficiency',
        controlled: 'Number of LEDs, battery voltage'
      },
      dataTable: {
        columns: ['Phase', 'Color', 'Duration (seconds)', 'Purpose'],
        rows: [
          ['1', 'Green', '___', 'Go'],
          ['2', 'Yellow', '___', 'Caution'],
          ['3', 'Red', '___', 'Stop']
        ]
      }
    },

    quiz: [
      { question: 'How many states does a basic traffic light have?', options: ['1', '2', '3', '4'], correctIndex: 2 },
      { question: 'Why is yellow between green and red?', options: ['For decoration', 'To warn drivers to slow down', 'To save power', 'It is optional'], correctIndex: 1 },
      { question: 'Each LED needs a resistor to:', options: ['Look better', 'Limit current and protect the LED', 'Increase brightness', 'Change color'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s12-traffic-light.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=LED%20traffic%20light%20circuit%20breadboard',
    safetyInstructions: ['Use correct LED polarity', 'Always include resistors', 'Disconnect battery when not in use']
  },

  {
    levelNumber: 13,
    id: 'scientist-13',
    title: 'Dark-Activated Alarm',
    subtitle: 'LDR + transistor + buzzer',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Sensors',

    overview: 'Build an alarm that activates a buzzer when darkness is detected using an LDR and transistor.',

    learningObjectives: [
      'Use an LDR as a light sensor',
      'Use a transistor as a switch',
      'Build a sensor-triggered output system'
    ],

    materials: [
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'NPN Transistor (BC547)', imageUrl: '/materials/transistor.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'Resistors (1kΩ, 10kΩ)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Voltage Divider',
        instruction: 'Create a voltage divider with the LDR and 10kΩ resistor. The junction goes to the transistor base.',
        imageUrl: '/steps/s13-step1.jpg',
        tip: 'LDR resistance drops in bright light and rises in darkness.'
      },
      {
        stepNumber: 2,
        title: 'Transistor Switch',
        instruction: 'Connect the transistor: base to voltage divider, collector to buzzer, emitter to ground.',
        imageUrl: '/steps/s13-step2.jpg',
        tip: 'The transistor amplifies the small LDR signal to drive the buzzer.'
      },
      {
        stepNumber: 3,
        title: 'Test in Light',
        instruction: 'Power on. In bright light, the buzzer should stay off.',
        imageUrl: '/steps/s13-step3.jpg',
        tip: 'If buzzer sounds in light, swap LDR and resistor positions.'
      },
      {
        stepNumber: 4,
        title: 'Test in Dark',
        instruction: 'Cover the LDR with your hand. The buzzer should activate.',
        imageUrl: '/steps/s13-step4.jpg',
        tip: 'In darkness, LDR resistance rises, transistor base voltage changes, switching the buzzer on.'
      }
    ],

    explanation: {
      simple: 'The LDR changes resistance with light. In the dark, it sends a different signal to the transistor, which turns on the buzzer.',
      scientific: 'The LDR and fixed resistor form a voltage divider. In darkness, LDR resistance increases, raising the voltage at the transistor base above the 0.7V threshold, saturating the transistor and completing the buzzer circuit.',
      keyTerms: [
        { term: 'LDR', definition: 'Light Dependent Resistor — resistance decreases with increasing light' },
        { term: 'Voltage Divider', definition: 'Two resistors in series that split voltage proportionally' },
        { term: 'Transistor Saturation', definition: 'When the transistor is fully ON, acting as a closed switch' }
      ]
    },

    experiment: {
      hypothesis: 'Covering the LDR will increase its resistance and activate the buzzer.',
      variables: {
        independent: 'Light level on LDR',
        dependent: 'Buzzer state (ON/OFF)',
        controlled: 'Battery voltage, resistor values, transistor type'
      },
      dataTable: {
        columns: ['Light Condition', 'LDR Resistance (est.)', 'Buzzer State'],
        rows: [
          ['Bright sunlight', '___', '___'],
          ['Room light', '___', '___'],
          ['Dim light', '___', '___'],
          ['Covered (dark)', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'LDR resistance in darkness is:', options: ['Very low', 'Zero', 'Very high', 'Negative'], correctIndex: 2 },
      { question: 'The transistor acts as a:', options: ['Battery', 'Resistor', 'Switch', 'Capacitor'], correctIndex: 2 },
      { question: 'What minimum base voltage turns on a silicon transistor?', options: ['0V', '0.3V', '0.7V', '5V'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s13-dark-alarm.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=LDR%20dark%20activated%20alarm%20circuit',
    safetyInstructions: ['Keep buzzer volume at a comfortable level', 'Disconnect power before changing wiring']
  },

  {
    levelNumber: 14,
    id: 'scientist-14',
    title: 'Build an Electromagnet',
    subtitle: 'Electricity creates magnetism',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Electromagnetism',

    overview: 'Wrap wire around an iron nail and pass current through it to create an electromagnet. Test its strength.',

    learningObjectives: [
      'Understand electromagnetism',
      'Build a working electromagnet',
      'Test magnetic strength by picking up objects'
    ],

    materials: [
      { name: 'Copper Wire (enameled, 1m)', imageUrl: '/materials/copper-wire.jpg' },
      { name: 'Iron Nail (large)', imageUrl: '/materials/iron-nail.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'Compass', imageUrl: '/materials/compass.jpg' },
      { name: 'Crocodile Clip Wires', imageUrl: '/materials/croc-clips.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wind the Coil',
        instruction: 'Wrap the copper wire tightly around the iron nail at least 50 turns. Leave wire ends free.',
        imageUrl: '/steps/s14-step1.jpg',
        tip: 'More turns = stronger magnet. Keep wraps tight and in the same direction.'
      },
      {
        stepNumber: 2,
        title: 'Connect Power',
        instruction: 'Use crocodile clips to connect the wire ends to the battery holder. The nail should now be magnetic.',
        imageUrl: '/steps/s14-step2.jpg',
        tip: 'The wire may get warm — this is normal but do not leave connected too long.'
      },
      {
        stepNumber: 3,
        title: 'Test with Compass',
        instruction: 'Bring the compass near the nail. The needle should deflect, showing a magnetic field.',
        imageUrl: '/steps/s14-step3.jpg',
        tip: 'Move the compass around to map the field direction.'
      },
      {
        stepNumber: 4,
        title: 'Measure Strength',
        instruction: 'Try picking up paper clips or small staples. Count how many your electromagnet can hold.',
        imageUrl: '/steps/s14-step4.jpg',
        tip: 'Compare with 30 turns vs 60 turns to see the effect of coil count.'
      }
    ],

    explanation: {
      simple: 'Electric current flowing through a wire creates a magnetic field. Wrapping the wire around iron makes the field much stronger.',
      scientific: 'According to Ampere\'s law, current-carrying conductors produce magnetic fields. A solenoid coil concentrates the field, and the ferromagnetic iron core amplifies it by aligning magnetic domains.',
      keyTerms: [
        { term: 'Electromagnet', definition: 'A magnet created by electric current flowing through a coil' },
        { term: 'Solenoid', definition: 'A coil of wire that produces a magnetic field when current flows' },
        { term: 'Ferromagnetic', definition: 'Materials like iron that are strongly attracted to magnets' }
      ]
    },

    experiment: {
      hypothesis: 'More coil turns will make the electromagnet stronger.',
      variables: {
        independent: 'Number of wire turns',
        dependent: 'Number of paper clips lifted',
        controlled: 'Battery voltage, nail size, wire type'
      },
      dataTable: {
        columns: ['Number of Turns', 'Paper Clips Lifted', 'Compass Deflection'],
        rows: [
          ['20', '___', '___'],
          ['40', '___', '___'],
          ['60', '___', '___'],
          ['80', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'What creates the magnetic field in an electromagnet?', options: ['The nail alone', 'Electric current in the wire', 'The battery casing', 'Air around the nail'], correctIndex: 1 },
      { question: 'Adding more turns makes the magnet:', options: ['Weaker', 'Unchanged', 'Stronger', 'Invisible'], correctIndex: 2 },
      { question: 'What happens when power is disconnected?', options: ['Stays magnetic forever', 'Magnetism disappears', 'Gets stronger', 'Battery charges'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s14-electromagnet.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=build%20electromagnet%20science%20experiment',
    safetyInstructions: ['Wire gets warm — do not leave connected more than 30 seconds', 'Use low voltage batteries only', 'Do not touch bare wire ends together']
  },

  {
    levelNumber: 15,
    id: 'scientist-15',
    title: 'Magnetic Field Mapping',
    subtitle: 'Visualize invisible forces',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Magnetism',

    overview: 'Use iron filings and a compass to visualize and map magnetic field lines around bar magnets.',

    learningObjectives: [
      'Visualize magnetic field lines',
      'Understand poles and field direction',
      'Compare single and double magnet fields'
    ],

    materials: [
      { name: 'Bar Magnets (x2)', imageUrl: '/materials/bar-magnet.jpg' },
      { name: 'Iron Filings (sealed bag)', imageUrl: '/materials/iron-filings.jpg' },
      { name: 'Compass', imageUrl: '/materials/compass.jpg' },
      { name: 'Cardboard Sheet', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Single Magnet Field',
        instruction: 'Place one bar magnet under a cardboard sheet. Sprinkle iron filings gently on top.',
        imageUrl: '/steps/s15-step1.jpg',
        tip: 'Tap the cardboard lightly to help filings align.'
      },
      {
        stepNumber: 2,
        title: 'Sketch the Pattern',
        instruction: 'Draw the field line pattern you see in your notebook. Mark N and S poles.',
        imageUrl: '/steps/s15-step2.jpg',
        tip: 'Field lines curve from North to South pole.'
      },
      {
        stepNumber: 3,
        title: 'Two Magnets — Attract',
        instruction: 'Place two magnets with opposite poles facing. Observe how field lines connect between them.',
        imageUrl: '/steps/s15-step3.jpg',
        tip: 'Attraction fields merge smoothly between the poles.'
      },
      {
        stepNumber: 4,
        title: 'Two Magnets — Repel',
        instruction: 'Flip one magnet so same poles face each other. Observe the repulsion pattern.',
        imageUrl: '/steps/s15-step4.jpg',
        tip: 'Field lines push away from each other in repulsion.'
      }
    ],

    explanation: {
      simple: 'Magnets have invisible force fields around them. Iron filings line up along these field lines so you can see them.',
      scientific: 'Magnetic field lines represent the direction and strength of the magnetic force. They originate from the north pole and terminate at the south pole, with density indicating field strength.',
      keyTerms: [
        { term: 'Magnetic Field Lines', definition: 'Imaginary lines showing the direction of magnetic force' },
        { term: 'North Pole', definition: 'The pole from which field lines emerge' },
        { term: 'South Pole', definition: 'The pole where field lines enter' }
      ]
    },

    experiment: {
      hypothesis: 'Like poles will show repelling field patterns while unlike poles will show connecting field patterns.',
      variables: {
        independent: 'Magnet pole arrangement',
        dependent: 'Field line pattern shape',
        controlled: 'Magnet strength, filing quantity, cardboard thickness'
      },
      dataTable: {
        columns: ['Setup', 'Pattern Description', 'Sketch Reference'],
        rows: [
          ['Single magnet', '___', 'Page ___'],
          ['N-S (attract)', '___', 'Page ___'],
          ['N-N (repel)', '___', 'Page ___']
        ]
      }
    },

    quiz: [
      { question: 'Field lines go from:', options: ['South to North outside the magnet', 'North to South outside the magnet', 'East to West', 'They do not move'], correctIndex: 1 },
      { question: 'Like poles:', options: ['Attract', 'Repel', 'Ignore each other', 'Cancel out'], correctIndex: 1 },
      { question: 'Iron filings align because they are:', options: ['Plastic', 'Ferromagnetic', 'Electric', 'Transparent'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s15-field-mapping.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=magnetic%20field%20iron%20filings%20experiment',
    safetyInstructions: ['Keep iron filings in a sealed bag or tray', 'Do not inhale iron filings', 'Wash hands after handling']
  },

  {
    levelNumber: 16,
    id: 'scientist-16',
    title: 'DC Motor Powered Vehicle',
    subtitle: 'Convert electrical to mechanical energy',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Energy Conversion',

    overview: 'Build a simple vehicle powered by a DC motor that converts electrical energy into motion.',

    learningObjectives: [
      'Understand energy conversion',
      'Build a basic motorized vehicle',
      'Control motor with a switch'
    ],

    materials: [
      { name: 'DC Motor (3-6V)', imageUrl: '/materials/dc-motor.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Toggle Switch', imageUrl: '/materials/toggle-switch.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Cardboard Sheets', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Tape', imageUrl: '/materials/tape.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Build Chassis',
        instruction: 'Cut cardboard into a rectangular base. Mount the motor at the rear using tape.',
        imageUrl: '/steps/s16-step1.jpg',
        tip: 'Make sure the motor shaft extends beyond the chassis edge.'
      },
      {
        stepNumber: 2,
        title: 'Make Wheels',
        instruction: 'Cut cardboard circles for wheels. Attach one to the motor shaft. Add free-spinning front wheels.',
        imageUrl: '/steps/s16-step2.jpg',
        tip: 'Use bottle caps or cardboard discs as wheels.'
      },
      {
        stepNumber: 3,
        title: 'Wire Motor',
        instruction: 'Connect battery holder → switch → motor. Tape battery holder to the chassis.',
        imageUrl: '/steps/s16-step3.jpg',
        tip: 'Swap motor wire polarity to reverse direction.'
      },
      {
        stepNumber: 4,
        title: 'Test Drive',
        instruction: 'Place on a flat surface and flip the switch. Measure how far it travels.',
        imageUrl: '/steps/s16-step4.jpg',
        tip: 'A lighter chassis travels farther with the same motor.'
      }
    ],

    explanation: {
      simple: 'A battery stores chemical energy. The motor converts electrical energy to spinning motion (kinetic energy). The wheels transfer that motion to the ground.',
      scientific: 'Energy conversion chain: Chemical (battery) → Electrical (current) → Mechanical (motor rotation) → Kinetic (vehicle motion). Efficiency is limited by friction and motor losses.',
      keyTerms: [
        { term: 'Energy Conversion', definition: 'Changing energy from one form to another' },
        { term: 'Kinetic Energy', definition: 'Energy of an object in motion' },
        { term: 'DC Motor', definition: 'A motor that converts direct current electricity into rotation' }
      ]
    },

    experiment: {
      hypothesis: 'A lighter vehicle will travel farther than a heavier one.',
      variables: {
        independent: 'Vehicle weight (add coins)',
        dependent: 'Distance traveled',
        controlled: 'Motor type, battery charge, surface type'
      },
      dataTable: {
        columns: ['Weight Added (coins)', 'Distance (cm)', 'Speed (fast/medium/slow)'],
        rows: [
          ['0', '___', '___'],
          ['2', '___', '___'],
          ['4', '___', '___'],
          ['6', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A battery stores what type of energy?', options: ['Kinetic', 'Light', 'Chemical', 'Sound'], correctIndex: 2 },
      { question: 'The motor converts electrical energy to:', options: ['Heat only', 'Sound only', 'Mechanical rotation', 'Light'], correctIndex: 2 },
      { question: 'Swapping motor wire polarity:', options: ['Stops the motor', 'Reverses direction', 'Increases speed', 'Burns the motor'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s16-motor-vehicle.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=DC%20motor%20cardboard%20car%20project',
    safetyInstructions: ['Keep fingers away from the spinning motor shaft', 'Do not stall the motor for extended periods', 'Use tape to secure loose wires']
  },

  {
    levelNumber: 17,
    id: 'scientist-17',
    title: 'Sound Vibration Explorer',
    subtitle: 'See and feel sound waves',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Sound & Waves',

    overview: 'Explore how sound is created by vibrations using a tuning fork, cups, and string.',

    learningObjectives: [
      'Understand that sound is vibration',
      'Build a string telephone',
      'Observe resonance and vibration transfer'
    ],

    materials: [
      { name: 'Tuning Fork', imageUrl: '/materials/tuning-fork.jpg' },
      { name: 'Plastic Cups (x2)', imageUrl: '/materials/plastic-cups.jpg' },
      { name: 'String (2m)', imageUrl: '/materials/string.jpg' },
      { name: 'Small Speaker', imageUrl: '/materials/speaker.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Tuning Fork in Water',
        instruction: 'Strike the tuning fork and dip the tips into a shallow bowl of water. Observe the splashing.',
        imageUrl: '/steps/s17-step1.jpg',
        tip: 'The water splash proves the fork is vibrating, even if you cannot see it directly.'
      },
      {
        stepNumber: 2,
        title: 'Feel the Vibration',
        instruction: 'Strike the fork again and touch it to your cheek. Feel the vibration.',
        imageUrl: '/steps/s17-step2.jpg',
        tip: 'Sound travels through solids, liquids, and gases — but not vacuum.'
      },
      {
        stepNumber: 3,
        title: 'Build String Telephone',
        instruction: 'Poke a hole in the bottom of each cup. Thread string through both and knot inside. Pull string taut.',
        imageUrl: '/steps/s17-step3.jpg',
        tip: 'The string must be tight for sound to travel through it.'
      },
      {
        stepNumber: 4,
        title: 'Test Communication',
        instruction: 'One person speaks into a cup while the other listens. Try with tight and loose string and compare.',
        imageUrl: '/steps/s17-step4.jpg',
        tip: 'A loose string absorbs vibrations and sound fades.'
      }
    ],

    explanation: {
      simple: 'Sound is vibration. When something vibrates, it pushes air molecules, creating waves your ears detect. Tight string carries vibrations better.',
      scientific: 'Sound waves are longitudinal pressure waves. The tuning fork creates compressions and rarefactions in the medium. String telephones transmit vibrations through tension in the string as a solid medium.',
      keyTerms: [
        { term: 'Vibration', definition: 'Rapid back-and-forth movement that creates sound' },
        { term: 'Medium', definition: 'The substance through which sound travels (air, water, string)' },
        { term: 'Frequency', definition: 'How fast the vibration occurs, measured in Hertz (Hz)' }
      ]
    },

    experiment: {
      hypothesis: 'Tighter string will transmit sound more clearly in the string telephone.',
      variables: {
        independent: 'String tension (tight, medium, loose)',
        dependent: 'Sound clarity rating (1-5)',
        controlled: 'Cup type, string length, speaker volume'
      },
      dataTable: {
        columns: ['String Tension', 'Clarity (1-5)', 'Volume (1-5)', 'Notes'],
        rows: [
          ['Tight', '___', '___', '___'],
          ['Medium', '___', '___', '___'],
          ['Loose', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Sound is caused by:', options: ['Light', 'Vibration', 'Magnetism', 'Gravity'], correctIndex: 1 },
      { question: 'Sound cannot travel through:', options: ['Air', 'Water', 'Metal', 'Vacuum'], correctIndex: 3 },
      { question: 'Higher frequency means:', options: ['Lower pitch', 'Higher pitch', 'No sound', 'Louder sound'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s17-sound-vibration.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=sound%20vibration%20experiment%20tuning%20fork',
    safetyInstructions: ['Do not strike the tuning fork on hard surfaces', 'Keep sound levels moderate']
  },

  {
    levelNumber: 18,
    id: 'scientist-18',
    title: 'Light Spectrum Explorer',
    subtitle: 'Split white light into colors',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Optics',

    overview: 'Use a prism, mirror, and colored filters to explore the visible light spectrum.',

    learningObjectives: [
      'Understand that white light contains all colors',
      'Observe dispersion through a prism',
      'Explore color filtering'
    ],

    materials: [
      { name: 'Flashlight / Torch', imageUrl: '/materials/flashlight.jpg' },
      { name: 'Prism', imageUrl: '/materials/prism.jpg' },
      { name: 'Small Mirror', imageUrl: '/materials/mirror.jpg' },
      { name: 'Colored Filters (R, G, B)', imageUrl: '/materials/color-filters.jpg' },
      { name: 'Cardboard Sheet', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Create Slit',
        instruction: 'Cut a narrow slit (2mm) in a cardboard sheet. Shine the flashlight through it to create a beam.',
        imageUrl: '/steps/s18-step1.jpg',
        tip: 'A narrow slit gives a sharper spectrum.'
      },
      {
        stepNumber: 2,
        title: 'Prism Dispersion',
        instruction: 'Pass the beam through the prism. Observe the rainbow spectrum on a white surface.',
        imageUrl: '/steps/s18-step2.jpg',
        tip: 'Angle the prism slowly until colors separate clearly — VIBGYOR order.'
      },
      {
        stepNumber: 3,
        title: 'Color Filters',
        instruction: 'Hold each filter in front of the flashlight. Observe which colors pass through and which are blocked.',
        imageUrl: '/steps/s18-step3.jpg',
        tip: 'A red filter blocks all colors except red.'
      },
      {
        stepNumber: 4,
        title: 'Mirror Reflection',
        instruction: 'Reflect the spectrum beam with a mirror onto different surfaces. Record color order and brightness.',
        imageUrl: '/steps/s18-step4.jpg',
        tip: 'White surfaces show the spectrum best.'
      }
    ],

    explanation: {
      simple: 'White light is a mix of all colors. A prism bends each color differently, spreading them out into a rainbow.',
      scientific: 'Dispersion occurs because different wavelengths of light refract at different angles when passing through the prism. Shorter wavelengths (violet) bend more than longer ones (red), following Snell\'s law.',
      keyTerms: [
        { term: 'Dispersion', definition: 'Separation of white light into its component colors' },
        { term: 'Refraction', definition: 'Bending of light when passing between materials' },
        { term: 'Spectrum', definition: 'The range of colors in visible light (VIBGYOR)' }
      ]
    },

    experiment: {
      hypothesis: 'A prism will separate white light into visible spectrum colors in VIBGYOR order.',
      variables: {
        independent: 'Prism angle',
        dependent: 'Color separation width',
        controlled: 'Light source, slit width, distance to screen'
      },
      dataTable: {
        columns: ['Color', 'Position (left to right)', 'Brightness (1-5)', 'Passes Red Filter?'],
        rows: [
          ['Violet', '___', '___', '___'],
          ['Blue', '___', '___', '___'],
          ['Green', '___', '___', '___'],
          ['Yellow', '___', '___', '___'],
          ['Red', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'White light contains:', options: ['Only white', 'All spectrum colors', 'Only red and blue', 'No colors'], correctIndex: 1 },
      { question: 'A prism separates light by:', options: ['Absorption', 'Reflection', 'Refraction (dispersion)', 'Magnetism'], correctIndex: 2 },
      { question: 'Which color bends the most?', options: ['Red', 'Yellow', 'Green', 'Violet'], correctIndex: 3 }
    ],

    outputImageUrl: '/outputs/s18-spectrum.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=prism%20light%20spectrum%20experiment',
    safetyInstructions: ['Do not shine flashlight directly into eyes', 'Handle the prism carefully — glass can break']
  },

  {
    levelNumber: 19,
    id: 'scientist-19',
    title: 'Capacitor Charge & Discharge',
    subtitle: 'Store and release energy',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Electronics',

    overview: 'Observe how capacitors store charge and slowly release it to light an LED.',

    learningObjectives: [
      'Understand capacitor function',
      'Observe charge and discharge curves',
      'Use a multimeter to measure voltage'
    ],

    materials: [
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Capacitor (100µF)', imageUrl: '/materials/capacitor.jpg' },
      { name: 'Potentiometer (10kΩ)', imageUrl: '/materials/potentiometer.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistors (1kΩ)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Charge Circuit',
        instruction: 'Connect battery → resistor (1kΩ) → capacitor (100µF). Observe polarity! Positive to positive.',
        imageUrl: '/steps/s19-step1.jpg',
        tip: 'Electrolytic capacitors have polarity — the longer leg or marked side is positive.'
      },
      {
        stepNumber: 2,
        title: 'Measure Charging',
        instruction: 'Set multimeter to DC voltage. Measure across the capacitor. Watch voltage rise over time.',
        imageUrl: '/steps/s19-step2.jpg',
        tip: 'The capacitor charges to battery voltage but slows down as it gets fuller.'
      },
      {
        stepNumber: 3,
        title: 'Disconnect & Discharge',
        instruction: 'Remove the battery. Connect an LED + resistor across the charged capacitor.',
        imageUrl: '/steps/s19-step3.jpg',
        tip: 'The LED should glow briefly as the capacitor discharges.'
      },
      {
        stepNumber: 4,
        title: 'Time Constant',
        instruction: 'Try different resistor values and observe how discharge speed changes. Record times.',
        imageUrl: '/steps/s19-step4.jpg',
        tip: 'The time constant τ = R × C determines how quickly the capacitor charges or discharges.'
      }
    ],

    explanation: {
      simple: 'A capacitor is like a tiny rechargeable tank. It fills up with charge and releases it slowly through a circuit.',
      scientific: 'Capacitors store energy in an electric field between two plates. The voltage follows an exponential curve: V(t) = V₀(1 - e^(-t/RC)) during charging. The time constant τ = RC determines the rate.',
      keyTerms: [
        { term: 'Capacitance', definition: 'The ability to store charge, measured in Farads (F)' },
        { term: 'Time Constant (τ)', definition: 'τ = R × C — time to reach 63.2% of final voltage' },
        { term: 'Discharge', definition: 'The release of stored charge from the capacitor' }
      ]
    },

    experiment: {
      hypothesis: 'A larger resistor will make the LED glow longer during discharge.',
      variables: {
        independent: 'Discharge resistor value',
        dependent: 'LED glow duration (seconds)',
        controlled: 'Capacitor value, charge voltage, LED type'
      },
      dataTable: {
        columns: ['Resistor (Ω)', 'τ = R×C (calc)', 'LED Glow Time (s)', 'Peak Voltage'],
        rows: [
          ['220', '___', '___', '___'],
          ['1k', '___', '___', '___'],
          ['10k', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A capacitor stores energy as:', options: ['Sound', 'An electric field', 'Heat', 'Magnetism'], correctIndex: 1 },
      { question: 'The time constant τ equals:', options: ['V × I', 'R × C', 'P × T', 'L × C'], correctIndex: 1 },
      { question: 'Electrolytic capacitors have:', options: ['No polarity', 'Polarity (+ and -)', 'Only positive', 'No leads'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s19-capacitor.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=capacitor%20charge%20discharge%20LED%20experiment',
    safetyInstructions: ['Always observe capacitor polarity', 'Discharge capacitors before handling', 'Use low voltage only']
  },

  {
    levelNumber: 20,
    id: 'scientist-20',
    title: 'Multi-Sensor Mini Lab',
    subtitle: 'Combine light, sound, and motion',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Systems Integration',

    overview: 'Build a mini lab station that combines an LDR sensor, buzzer, LED indicator, and motor into one integrated system.',

    learningObjectives: [
      'Integrate multiple components into one system',
      'Use the multimeter to debug circuits',
      'Document a complete project'
    ],

    materials: [
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'NPN Transistor (BC547)', imageUrl: '/materials/transistor.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'LEDs (Red + Green)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'DC Motor', imageUrl: '/materials/dc-motor.jpg' },
      { name: 'Resistors (220Ω, 1kΩ, 10kΩ)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Battery Holder', imageUrl: '/materials/battery-holder.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Plan the System',
        instruction: 'Draw a block diagram: LDR → Transistor → Buzzer + LED + Motor. Decide which activates in dark vs light.',
        imageUrl: '/steps/s20-step1.jpg',
        tip: 'Planning before building saves debugging time.'
      },
      {
        stepNumber: 2,
        title: 'Build Light Sensor Block',
        instruction: 'Wire LDR and resistor as voltage divider. Connect junction to transistor base.',
        imageUrl: '/steps/s20-step2.jpg',
        tip: 'This is the same circuit from Level 13 — you are reusing your knowledge.'
      },
      {
        stepNumber: 3,
        title: 'Add Outputs',
        instruction: 'Connect buzzer, LED, and motor to the transistor collector through individual paths.',
        imageUrl: '/steps/s20-step3.jpg',
        tip: 'Use separate resistors for the LED. The motor may need a protection diode.'
      },
      {
        stepNumber: 4,
        title: 'Debug with Multimeter',
        instruction: 'Measure voltage at key points: divider output, transistor base, collector. Verify expected values.',
        imageUrl: '/steps/s20-step4.jpg',
        tip: 'If outputs do not work, check transistor base voltage first.'
      },
      {
        stepNumber: 5,
        title: 'Document Everything',
        instruction: 'Take photos, draw the final circuit, and write a report with hypothesis, method, and results.',
        imageUrl: '/steps/s20-step5.jpg',
        tip: 'Good documentation is a key scientist skill.'
      }
    ],

    explanation: {
      simple: 'This project combines everything from Module 2: light sensing, switching, sound, light output, and motor control into one working system.',
      scientific: 'Systems integration combines input transducers (LDR), signal conditioning (voltage divider), switching (transistor), and multiple output actuators (LED, buzzer, motor) into a cohesive functional unit.',
      keyTerms: [
        { term: 'Systems Integration', definition: 'Combining multiple subsystems into one working system' },
        { term: 'Transducer', definition: 'A device that converts one form of energy to another (LDR converts light to resistance change)' },
        { term: 'Debugging', definition: 'Finding and fixing errors in a circuit or system' }
      ]
    },

    experiment: {
      hypothesis: 'All three outputs (LED, buzzer, motor) will activate simultaneously when the LDR is covered.',
      variables: {
        independent: 'Light level on LDR',
        dependent: 'Activation state of each output',
        controlled: 'Battery voltage, component values, transistor type'
      },
      dataTable: {
        columns: ['Light Level', 'Divider Voltage', 'LED State', 'Buzzer State', 'Motor State'],
        rows: [
          ['Bright', '___', '___', '___', '___'],
          ['Dim', '___', '___', '___', '___'],
          ['Dark', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Systems integration means:', options: ['Using one component', 'Combining multiple subsystems into one', 'Deleting parts', 'Using only software'], correctIndex: 1 },
      { question: 'What tool helps debug a circuit?', options: ['Hammer', 'Multimeter', 'Scissors', 'Ruler'], correctIndex: 1 },
      { question: 'A protection diode on a motor prevents:', options: ['Rotation', 'Voltage spikes when motor stops', 'Current flow', 'Sound'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s20-mini-lab.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=multi%20sensor%20electronics%20project%20breadboard',
    safetyInstructions: ['Double-check all connections before powering on', 'Add a flyback diode across the motor', 'Disconnect power before making changes', 'Wear safety goggles when testing'],

    completionMessage: 'Congratulations! You have completed Module 2 — Intermediate Explorer! You can now work with circuits, sensors, magnets, sound, light, and multi-component systems. Next: Module 3 — Advanced Systems!'
  }
];

export default scientistLevels11to20;
