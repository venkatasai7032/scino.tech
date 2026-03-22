// ============================================================
//  SCINO Scientist Program — Levels 41–60
//  Module 5: Robotics Pioneer (41–50)
//  Module 6: Advanced Robotics & IoT (51–60)
//  Total: 20 Levels — Error-Free
// ============================================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

// ──────────────────────────────────────────
// EQUIPMENT BOARD — Levels 41–60 Kit
// ──────────────────────────────────────────

export const levels41to60EquipmentBoard = {
  moduleTitle: 'Robotics Pioneer & IoT Starter Kit',
  description: 'All materials needed for Scientist Levels 41–60.',
  categories: [
    {
      categoryName: 'Microcontrollers & Boards',
      items: [
        { name: 'Arduino Uno', quantity: 1, imageUrl: '/materials/arduino.jpg', reusable: true },
        { name: 'ESP8266 / NodeMCU (Wi-Fi Board)', quantity: 1, imageUrl: '/materials/esp8266.jpg', reusable: true },
        { name: 'USB Cables (Type B + Micro)', quantity: 2, imageUrl: '/materials/usb-cable.jpg', reusable: true },
        { name: 'Breadboard (830 point)', quantity: 2, imageUrl: '/materials/breadboard.jpg', reusable: true },
        { name: 'Jumper Wires (M-M, M-F, F-F pack)', quantity: 60, imageUrl: '/materials/jumper-wires.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Motors & Drivers',
      items: [
        { name: 'L298N Motor Driver Module', quantity: 1, imageUrl: '/materials/l298n.jpg', reusable: true },
        { name: 'DC Motors (3-6V with wheels)', quantity: 4, imageUrl: '/materials/dc-motor-wheel.jpg', reusable: true },
        { name: 'Servo Motors (SG90)', quantity: 3, imageUrl: '/materials/servo.jpg', reusable: true },
        { name: 'Servo Arm / Horn Kit', quantity: 1, imageUrl: '/materials/servo-horns.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Sensors',
      items: [
        { name: 'Ultrasonic Sensor (HC-SR04)', quantity: 2, imageUrl: '/materials/ultrasonic.jpg', reusable: true },
        { name: 'IR Line Sensor Module (TCRT5000 x3)', quantity: 3, imageUrl: '/materials/line-sensor.jpg', reusable: true },
        { name: 'IR Remote + Receiver', quantity: 1, imageUrl: '/materials/ir-remote.jpg', reusable: true },
        { name: 'PIR Motion Sensor', quantity: 1, imageUrl: '/materials/pir.jpg', reusable: true },
        { name: 'LDR (Light Dependent Resistor)', quantity: 2, imageUrl: '/materials/ldr.jpg', reusable: true },
        { name: 'Temperature Sensor (LM35)', quantity: 1, imageUrl: '/materials/temperature-sensor.jpg', reusable: true },
        { name: 'Joystick Module', quantity: 1, imageUrl: '/materials/joystick.jpg', reusable: true },
        { name: 'Soil Moisture Sensor', quantity: 1, imageUrl: '/materials/soil-sensor.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Communication',
      items: [
        { name: 'HC-05 Bluetooth Module', quantity: 1, imageUrl: '/materials/bluetooth.jpg', reusable: true },
        { name: 'ESP8266 Wi-Fi Module', quantity: 1, imageUrl: '/materials/esp8266.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Display & Output',
      items: [
        { name: 'LCD Display (16x2 I2C)', quantity: 1, imageUrl: '/materials/lcd.jpg', reusable: true },
        { name: 'LEDs (Red, Green, Blue, White)', quantity: 10, imageUrl: '/materials/led-pack.jpg', reusable: true },
        { name: 'Buzzer (Piezo)', quantity: 2, imageUrl: '/materials/buzzer.jpg', reusable: true },
        { name: 'Relay Module (5V)', quantity: 1, imageUrl: '/materials/relay.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Robot Chassis & Structure',
      items: [
        { name: '2WD Robot Chassis Kit', quantity: 1, imageUrl: '/materials/chassis.jpg', reusable: true },
        { name: 'Caster Wheel', quantity: 1, imageUrl: '/materials/caster.jpg', reusable: true },
        { name: 'Battery Holder (4xAA)', quantity: 1, imageUrl: '/materials/battery-holder-4aa.jpg', reusable: true },
        { name: 'AA Batteries', quantity: 8, imageUrl: '/materials/batteries.jpg', reusable: false },
        { name: '9V Battery + Snap', quantity: 2, imageUrl: '/materials/9v-battery.jpg', reusable: false },
        { name: 'Screws, Nuts, Standoffs Kit', quantity: 1, imageUrl: '/materials/screws-kit.jpg', reusable: true },
        { name: 'Zip Ties', quantity: 10, imageUrl: '/materials/zip-ties.jpg', reusable: false },
        { name: 'Double-sided Tape', quantity: 1, imageUrl: '/materials/tape.jpg', reusable: false },
        { name: 'Small Solar Panel (5V)', quantity: 1, imageUrl: '/materials/solar-panel.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'General Supplies',
      items: [
        { name: 'Multimeter', quantity: 1, imageUrl: '/materials/multimeter.jpg', reusable: true },
        { name: 'Screwdriver Set', quantity: 1, imageUrl: '/materials/screwdriver.jpg', reusable: true },
        { name: 'Safety Goggles', quantity: 1, imageUrl: '/materials/goggles.jpg', reusable: true },
        { name: 'Notebook & Pen', quantity: 1, imageUrl: '/materials/notebook.jpg', reusable: true },
        { name: 'Black Tape (for line track)', quantity: 1, imageUrl: '/materials/black-tape.jpg', reusable: false },
        { name: 'White Poster Board', quantity: 1, imageUrl: '/materials/poster-board.jpg', reusable: true },
        { name: 'Cardboard Sheets', quantity: 3, imageUrl: '/materials/cardboard.jpg', reusable: false },
        { name: 'Ruler & Measuring Tape', quantity: 1, imageUrl: '/materials/ruler.jpg', reusable: true },
        { name: 'Stopwatch or Phone Timer', quantity: 1, imageUrl: '/materials/stopwatch.jpg', reusable: true }
      ]
    }
  ]
};

// ──────────────────────────────────────────
// SECTION A: Robotics Pioneer (Levels 41–50)
// ──────────────────────────────────────────

const scientistLevels41to60 = [

  {
    levelNumber: 41,
    id: 'scientist-41',
    title: 'DC Motor Control with L298N',
    subtitle: 'Drive motors from Arduino',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Robotics',

    overview: 'Learn how to control DC motor speed and direction using the L298N motor driver and Arduino.',

    learningObjectives: [
      'Understand H-bridge motor driver operation',
      'Control motor direction with IN1/IN2 pins',
      'Control motor speed with PWM on the ENA pin'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'L298N Motor Driver', imageUrl: '/materials/l298n.jpg' },
      { name: 'DC Motor (with wheel)', imageUrl: '/materials/dc-motor-wheel.jpg' },
      { name: 'Battery Holder (4xAA)', imageUrl: '/materials/battery-holder-4aa.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Understand the L298N',
        instruction: 'Identify pins: Motor A (OUT1, OUT2), Motor B (OUT3, OUT4), ENA (speed A), ENB (speed B), IN1-IN4 (direction), VCC, GND, 5V output.',
        imageUrl: '/steps/s41-step1.jpg',
        tip: 'The L298N can drive two motors independently.'
      },
      {
        stepNumber: 2,
        title: 'Wire Motor A',
        instruction: 'Connect motor wires to OUT1 and OUT2. Connect IN1 to Arduino pin 8, IN2 to pin 9, ENA to pin 10 (PWM).',
        imageUrl: '/steps/s41-step2.jpg',
        tip: 'Remove the ENA jumper to enable speed control via PWM.'
      },
      {
        stepNumber: 3,
        title: 'Wire Power',
        instruction: 'Connect battery pack positive to L298N VCC, negative to GND. Connect L298N GND to Arduino GND.',
        imageUrl: '/steps/s41-step3.jpg',
        tip: 'The L298N can supply 5V to Arduino from its onboard regulator if VCC is above 7V.'
      },
      {
        stepNumber: 4,
        title: 'Write Direction Code',
        instruction: 'IN1=HIGH, IN2=LOW = forward. IN1=LOW, IN2=HIGH = reverse. Both LOW = stop. ENA sets speed (0-255).',
        imageUrl: '/steps/s41-step4.jpg',
        tip: 'Use analogWrite(ENA, speed) to control how fast the motor spins.'
      },
      {
        stepNumber: 5,
        title: 'Test Speed Control',
        instruction: 'Write a loop that ramps speed from 0 to 255, then back down. Observe the motor accelerate and decelerate.',
        imageUrl: '/steps/s41-step5.jpg',
        tip: 'Motors have a minimum speed threshold below which they stall.'
      }
    ],

    explanation: {
      simple: 'The L298N is like a remote-controlled gate for electricity. It lets Arduino decide which way current flows through the motor, controlling direction and speed.',
      scientific: 'The L298N contains two H-bridge circuits. Each H-bridge uses four transistors to control current direction through the motor. PWM on the enable pin modulates the average voltage, controlling speed via duty cycle.',
      keyTerms: [
        { term: 'H-Bridge', definition: 'A circuit that allows current to flow through a motor in either direction' },
        { term: 'L298N', definition: 'A dual H-bridge motor driver IC capable of driving two DC motors' },
        { term: 'Stall Current', definition: 'The maximum current drawn when the motor is prevented from turning' }
      ]
    },

    experiment: {
      hypothesis: 'Higher PWM values will result in faster motor speed.',
      variables: {
        independent: 'PWM value (0-255)',
        dependent: 'Motor speed (rotations observed)',
        controlled: 'Battery voltage, motor type, load'
      },
      dataTable: {
        columns: ['PWM Value', 'Motor Spinning?', 'Speed (Slow/Med/Fast)', 'Direction'],
        rows: [
          ['0', '___', '___', 'N/A'],
          ['50', '___', '___', 'Forward'],
          ['100', '___', '___', 'Forward'],
          ['150', '___', '___', 'Forward'],
          ['200', '___', '___', 'Forward'],
          ['255', '___', '___', 'Forward']
        ]
      }
    },

    quiz: [
      { question: 'An H-bridge controls:', options: ['Voltage level', 'Current direction through a motor', 'LED color', 'Sensor sensitivity'], correctIndex: 1 },
      { question: 'IN1=HIGH, IN2=LOW makes the motor:', options: ['Stop', 'Spin forward', 'Spin reverse', 'Explode'], correctIndex: 1 },
      { question: 'ENA pin controls:', options: ['Direction', 'Speed via PWM', 'Sensor reading', 'LCD display'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s41-l298n.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20L298N%20DC%20motor%20control',
    safetyInstructions: ['Keep fingers away from spinning motors', 'Use separate battery pack for motors', 'Connect GND between Arduino and L298N', 'Do not exceed motor voltage rating']
  },

  {
    levelNumber: 42,
    id: 'scientist-42',
    title: 'Ultrasonic Distance Sensor',
    subtitle: 'Measure distance with sound',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Sensors',

    overview: 'Use the HC-SR04 ultrasonic sensor to measure distances by timing echo pulses.',

    learningObjectives: [
      'Understand ultrasonic distance measurement',
      'Use pulseIn() to time echo returns',
      'Calculate distance from time of flight'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Ultrasonic Sensor (HC-SR04)', imageUrl: '/materials/ultrasonic.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Sensor',
        instruction: 'VCC to 5V, GND to GND, TRIG to pin 7, ECHO to pin 6.',
        imageUrl: '/steps/s42-step1.jpg',
        tip: 'The sensor has 4 pins. TRIG sends the pulse, ECHO receives the return.'
      },
      {
        stepNumber: 2,
        title: 'Write Trigger Code',
        instruction: 'Send a 10µs HIGH pulse on TRIG: digitalWrite(TRIG, HIGH); delayMicroseconds(10); digitalWrite(TRIG, LOW);',
        imageUrl: '/steps/s42-step2.jpg',
        tip: 'The sensor sends 8 ultrasonic pulses at 40kHz after receiving the trigger.'
      },
      {
        stepNumber: 3,
        title: 'Read Echo',
        instruction: 'long duration = pulseIn(ECHO, HIGH); float distance = duration * 0.034 / 2;',
        imageUrl: '/steps/s42-step3.jpg',
        tip: 'Sound speed is 0.034 cm/µs. Divide by 2 because sound travels to the object and back.'
      },
      {
        stepNumber: 4,
        title: 'Test Distances',
        instruction: 'Place objects at known distances. Compare sensor reading to ruler measurement.',
        imageUrl: '/steps/s42-step4.jpg',
        tip: 'Accurate range is 2–400 cm. Very close objects may give incorrect readings.'
      }
    ],

    explanation: {
      simple: 'The sensor sends out a chirp of sound too high for humans to hear. It measures how long the echo takes to bounce back and calculates the distance.',
      scientific: 'HC-SR04 emits 40kHz ultrasonic pulses. The ECHO pin goes HIGH for a duration proportional to the round-trip time. Distance = (speed of sound x time) / 2. Speed of sound at 20°C is approximately 343 m/s or 0.034 cm/µs.',
      keyTerms: [
        { term: 'Ultrasonic', definition: 'Sound waves above human hearing range (>20kHz)' },
        { term: 'Time of Flight', definition: 'Time taken for a pulse to travel to an object and back' },
        { term: 'pulseIn()', definition: 'Arduino function that measures the duration of a pulse on a pin' }
      ]
    },

    experiment: {
      hypothesis: 'The sensor will accurately measure distances matching ruler measurements within 1cm.',
      variables: {
        independent: 'Actual distance (measured by ruler)',
        dependent: 'Sensor-reported distance',
        controlled: 'Sensor model, surface type, temperature'
      },
      dataTable: {
        columns: ['Ruler Distance (cm)', 'Sensor Reading (cm)', 'Error (cm)', 'Surface Type'],
        rows: [
          ['5', '___', '___', 'Flat wall'],
          ['10', '___', '___', 'Flat wall'],
          ['20', '___', '___', 'Flat wall'],
          ['50', '___', '___', 'Flat wall'],
          ['100', '___', '___', 'Flat wall'],
          ['20', '___', '___', 'Soft fabric']
        ]
      }
    },

    quiz: [
      { question: 'HC-SR04 uses what type of waves?', options: ['Light', 'Radio', 'Ultrasonic sound', 'X-ray'], correctIndex: 2 },
      { question: 'Why divide by 2?', options: ['For accuracy', 'Sound travels to the object AND back', 'To convert units', 'To reduce noise'], correctIndex: 1 },
      { question: 'Speed of sound is approximately:', options: ['100 m/s', '343 m/s', '3000 m/s', '300000 km/s'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s42-ultrasonic.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20HC-SR04%20ultrasonic%20distance',
    safetyInstructions: ['Do not point at eyes', 'Use correct voltage (5V)', 'Handle sensor gently']
  },

  {
    levelNumber: 43,
    id: 'scientist-43',
    title: 'Line Sensor Module',
    subtitle: 'Detect black and white surfaces',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Sensors',

    overview: 'Use IR line sensors (TCRT5000) to detect the difference between black and white surfaces for line-following robots.',

    learningObjectives: [
      'Understand how IR reflectance sensors work',
      'Read digital and analog values from line sensors',
      'Create a line detection algorithm'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'IR Line Sensor Modules (x3)', imageUrl: '/materials/line-sensor.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Black Tape', imageUrl: '/materials/black-tape.jpg' },
      { name: 'White Poster Board', imageUrl: '/materials/poster-board.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire Single Sensor',
        instruction: 'Connect VCC to 5V, GND to GND, digital OUT to pin 2, analog OUT to A0.',
        imageUrl: '/steps/s43-step1.jpg',
        tip: 'Most modules have both digital (threshold) and analog (raw) outputs.'
      },
      {
        stepNumber: 2,
        title: 'Create Test Track',
        instruction: 'Stick black tape on white poster board to create a line. Hold the sensor 1-2cm above the surface.',
        imageUrl: '/steps/s43-step2.jpg',
        tip: 'A line width of 2-3cm works well for most sensors.'
      },
      {
        stepNumber: 3,
        title: 'Read Values',
        instruction: 'Print digitalRead(2) and analogRead(A0) to Serial Monitor. Move sensor over black and white areas.',
        imageUrl: '/steps/s43-step3.jpg',
        tip: 'White surfaces reflect more IR, giving different readings than black surfaces.'
      },
      {
        stepNumber: 4,
        title: 'Wire Three Sensors',
        instruction: 'Wire left sensor to pin 2, center to pin 3, right to pin 4. Read all three to determine line position.',
        imageUrl: '/steps/s43-step4.jpg',
        tip: 'Left=1,Center=1,Right=0 means the line is slightly left of center.'
      }
    ],

    explanation: {
      simple: 'The sensor shines infrared light onto the surface. White surfaces reflect the light back, black surfaces absorb it. The sensor detects the difference.',
      scientific: 'TCRT5000 sensors contain an IR LED emitter and phototransistor receiver. White surfaces reflect more IR radiation, increasing the phototransistor current. The comparator on the module converts this to a digital threshold output.',
      keyTerms: [
        { term: 'IR Reflectance', definition: 'The amount of infrared light bounced back from a surface' },
        { term: 'Phototransistor', definition: 'A transistor that conducts based on light intensity' },
        { term: 'Threshold', definition: 'A dividing value that separates black from white detection' }
      ]
    },

    experiment: {
      hypothesis: 'The sensor will output different values for black and white surfaces.',
      variables: {
        independent: 'Surface color (black tape vs white board)',
        dependent: 'Sensor output (digital and analog)',
        controlled: 'Sensor height, ambient light, sensor model'
      },
      dataTable: {
        columns: ['Surface', 'Digital Output', 'Analog Value', 'Height (cm)'],
        rows: [
          ['White board', '___', '___', '1'],
          ['Black tape', '___', '___', '1'],
          ['White board', '___', '___', '2'],
          ['Black tape', '___', '___', '2'],
          ['Edge of tape', '___', '___', '1']
        ]
      }
    },

    quiz: [
      { question: 'White surfaces _____ IR light:', options: ['Absorb', 'Reflect', 'Emit', 'Block'], correctIndex: 1 },
      { question: 'Black surfaces _____ IR light:', options: ['Reflect', 'Amplify', 'Absorb', 'Create'], correctIndex: 2 },
      { question: 'How many line sensors are ideal for a basic line follower?', options: ['1', '2', '3', '10'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s43-line-sensor.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20line%20sensor%20TCRT5000%20tutorial',
    safetyInstructions: ['Keep sensor at proper height', 'Do not look directly at the IR LED']
  },

  {
    levelNumber: 44,
    id: 'scientist-44',
    title: 'IR Remote Control',
    subtitle: 'Control Arduino wirelessly',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Communication',

    overview: 'Decode IR remote control signals and use button presses to control LEDs and motors.',

    learningObjectives: [
      'Understand IR communication protocol',
      'Decode remote button codes',
      'Map buttons to Arduino actions'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'IR Remote + Receiver', imageUrl: '/materials/ir-remote.jpg' },
      { name: 'LEDs (Red, Green, Blue)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistors (220 ohm x3)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire IR Receiver',
        instruction: 'Connect IR receiver: OUT to pin 11, VCC to 5V, GND to GND.',
        imageUrl: '/steps/s44-step1.jpg',
        tip: 'Check the pinout of your specific receiver module — pin order varies.'
      },
      {
        stepNumber: 2,
        title: 'Install Library',
        instruction: 'Install the IRremote library via Arduino Library Manager.',
        imageUrl: '/steps/s44-step2.jpg',
        tip: 'Search for "IRremote" by shirriff/z3t0.'
      },
      {
        stepNumber: 3,
        title: 'Decode Buttons',
        instruction: 'Write a sketch that prints the hex code of each button press to Serial Monitor. Record the code for each button.',
        imageUrl: '/steps/s44-step3.jpg',
        tip: 'Each button sends a unique hex code. Write these down for later use.'
      },
      {
        stepNumber: 4,
        title: 'Map to Actions',
        instruction: 'Use if/else statements to check which code was received and toggle LEDs accordingly. Button 1 = Red, Button 2 = Green, Button 3 = Blue.',
        imageUrl: '/steps/s44-step4.jpg',
        tip: 'Add a power button to toggle all LEDs on/off.'
      }
    ],

    explanation: {
      simple: 'The remote sends invisible light signals (IR codes) when you press a button. The receiver reads these codes and the Arduino decides what to do.',
      scientific: 'IR remotes modulate infrared light at 38kHz using protocols like NEC. Each button generates a unique binary pattern encoded as pulse timings. The receiver demodulates the signal and the IRremote library decodes it into hex values.',
      keyTerms: [
        { term: 'Modulation', definition: 'Encoding data onto a carrier signal (38kHz IR)' },
        { term: 'NEC Protocol', definition: 'A common IR communication protocol using pulse distance coding' },
        { term: 'Demodulation', definition: 'Extracting the data from the carrier signal' }
      ]
    },

    experiment: {
      hypothesis: 'Each remote button will produce a unique and repeatable hex code.',
      variables: {
        independent: 'Button pressed',
        dependent: 'Hex code received',
        controlled: 'Remote model, receiver position, distance'
      },
      dataTable: {
        columns: ['Button Label', 'Hex Code', 'Repeatable? (Y/N)', 'Assigned Action'],
        rows: [
          ['Power', '___', '___', '___'],
          ['1', '___', '___', 'Red LED'],
          ['2', '___', '___', 'Green LED'],
          ['3', '___', '___', 'Blue LED'],
          ['Up', '___', '___', '___'],
          ['Down', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'IR remotes use what type of light?', options: ['Visible blue', 'Ultraviolet', 'Infrared', 'X-ray'], correctIndex: 2 },
      { question: 'The receiver operates at:', options: ['1 kHz', '38 kHz', '1 MHz', '2.4 GHz'], correctIndex: 1 },
      { question: 'Each button sends a:', options: ['Random signal', 'Unique hex code', 'Sound wave', 'Radio wave'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s44-ir-remote.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20IR%20remote%20control%20LED',
    safetyInstructions: ['Handle the receiver carefully', 'Do not short-circuit receiver pins']
  },

  {
    levelNumber: 45,
    id: 'scientist-45',
    title: 'Robot Chassis Assembly',
    subtitle: 'Build your robot body',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 50,
    category: 'Robotics',

    overview: 'Assemble a 2-wheel drive robot chassis, mount motors, wheels, caster, battery pack, and Arduino.',

    learningObjectives: [
      'Assemble a mechanical robot platform',
      'Mount and wire motors to the L298N driver',
      'Create a stable power distribution system'
    ],

    materials: [
      { name: '2WD Robot Chassis Kit', imageUrl: '/materials/chassis.jpg' },
      { name: 'DC Motors (x2 with wheels)', imageUrl: '/materials/dc-motor-wheel.jpg' },
      { name: 'Caster Wheel', imageUrl: '/materials/caster.jpg' },
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'L298N Motor Driver', imageUrl: '/materials/l298n.jpg' },
      { name: 'Battery Holder (4xAA)', imageUrl: '/materials/battery-holder-4aa.jpg' },
      { name: 'AA Batteries', imageUrl: '/materials/batteries.jpg' },
      { name: 'Screws, Nuts, Standoffs', imageUrl: '/materials/screws-kit.jpg' },
      { name: 'Zip Ties', imageUrl: '/materials/zip-ties.jpg' },
      { name: 'Double-sided Tape', imageUrl: '/materials/tape.jpg' },
      { name: 'Screwdriver Set', imageUrl: '/materials/screwdriver.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Mount Motors',
        instruction: 'Attach both DC motors to the chassis plate using the included brackets and screws.',
        imageUrl: '/steps/s45-step1.jpg',
        tip: 'Ensure both motors face the same direction with shafts pointing outward.'
      },
      {
        stepNumber: 2,
        title: 'Attach Wheels and Caster',
        instruction: 'Press wheels onto motor shafts. Attach the caster wheel at the front of the chassis.',
        imageUrl: '/steps/s45-step2.jpg',
        tip: 'The caster provides balance as the front support point.'
      },
      {
        stepNumber: 3,
        title: 'Mount Electronics',
        instruction: 'Use standoffs to mount Arduino on top of chassis. Mount L298N beside it. Use tape for the battery holder underneath.',
        imageUrl: '/steps/s45-step3.jpg',
        tip: 'Keep weight centered and low for stability.'
      },
      {
        stepNumber: 4,
        title: 'Wire Everything',
        instruction: 'Connect motors to L298N outputs. Wire L298N control pins to Arduino. Connect battery pack to L298N VCC. Share GND between all components.',
        imageUrl: '/steps/s45-step4.jpg',
        tip: 'Use zip ties to manage wire routing and prevent tangles in wheels.'
      },
      {
        stepNumber: 5,
        title: 'Basic Drive Test',
        instruction: 'Upload a simple forward-stop-reverse-stop sketch. Place robot on the ground and test.',
        imageUrl: '/steps/s45-step5.jpg',
        tip: 'If the robot curves, one motor may be faster. Adjust PWM values to compensate.'
      }
    ],

    explanation: {
      simple: 'A robot needs a body (chassis), muscles (motors), feet (wheels), brain (Arduino), and a power supply (batteries). You put them all together here.',
      scientific: 'Differential drive robots use two independently controlled motors for locomotion. By varying the speed of each motor, the robot can move forward, reverse, and turn. The caster wheel provides passive stability as the third contact point.',
      keyTerms: [
        { term: 'Chassis', definition: 'The structural frame of a robot that holds all components' },
        { term: 'Differential Drive', definition: 'A drive system using two independently powered wheels for steering' },
        { term: 'Weight Distribution', definition: 'How mass is spread across the robot, affecting balance and traction' }
      ]
    },

    experiment: {
      hypothesis: 'Equal PWM values to both motors will make the robot drive straight.',
      variables: {
        independent: 'PWM values for left and right motors',
        dependent: 'Robot path (straight, curves left/right)',
        controlled: 'Battery level, surface type, chassis weight'
      },
      dataTable: {
        columns: ['Left PWM', 'Right PWM', 'Path Direction', 'Distance (cm)'],
        rows: [
          ['150', '150', '___', '___'],
          ['200', '200', '___', '___'],
          ['150', '200', '___', '___'],
          ['200', '150', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Differential drive uses:', options: ['One motor', 'Two independent motors', 'Four motors', 'No motors'], correctIndex: 1 },
      { question: 'The caster wheel provides:', options: ['Power', 'Steering', 'Balance', 'Braking'], correctIndex: 2 },
      { question: 'If the robot curves right, which motor is faster?', options: ['Right', 'Left', 'Both equal', 'Neither'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s45-chassis.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=2WD%20robot%20chassis%20assembly%20Arduino',
    safetyInstructions: ['Use proper tools for screws', 'Keep fingers away from spinning wheels', 'Test on a flat stable surface', 'Disconnect batteries when not in use']
  },

  {
    levelNumber: 46,
    id: 'scientist-46',
    title: 'Obstacle Avoidance Robot',
    subtitle: 'Robot that sees and avoids walls',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 55,
    category: 'Robotics',

    overview: 'Program your robot to autonomously detect and avoid obstacles using the ultrasonic sensor.',

    learningObjectives: [
      'Mount ultrasonic sensor on the robot',
      'Write obstacle detection logic',
      'Implement turn-and-avoid behavior'
    ],

    materials: [
      { name: 'Assembled Robot (from Level 45)', imageUrl: '/materials/chassis.jpg' },
      { name: 'Ultrasonic Sensor (HC-SR04)', imageUrl: '/materials/ultrasonic.jpg' },
      { name: 'Servo Motor (SG90)', imageUrl: '/materials/servo.jpg' },
      { name: 'Arduino Uno (on robot)', imageUrl: '/materials/arduino.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Mount Sensor',
        instruction: 'Attach the HC-SR04 to the front of the robot facing forward. Optionally mount on a servo for scanning.',
        imageUrl: '/steps/s46-step1.jpg',
        tip: 'Mount at the same height as obstacles you want to detect.'
      },
      {
        stepNumber: 2,
        title: 'Write Detection Code',
        instruction: 'In loop(): measure distance. If distance < 20cm, stop and turn.',
        imageUrl: '/steps/s46-step2.jpg',
        tip: 'Add a small delay between readings for stable measurements.'
      },
      {
        stepNumber: 3,
        title: 'Add Scanning',
        instruction: 'Mount sensor on servo. When obstacle detected: stop, scan left (servo 0), scan right (servo 180), turn toward the clearer path.',
        imageUrl: '/steps/s46-step3.jpg',
        tip: 'Compare left and right distances to choose the better direction.'
      },
      {
        stepNumber: 4,
        title: 'Test in Arena',
        instruction: 'Create an obstacle course with boxes and books. Place the robot inside and let it navigate autonomously.',
        imageUrl: '/steps/s46-step4.jpg',
        tip: 'Adjust the distance threshold and turn duration for best performance.'
      }
    ],

    explanation: {
      simple: 'The robot drives forward. When it sees something close, it stops, looks left and right, then turns toward the more open side and continues.',
      scientific: 'This implements a reactive behavior architecture. The ultrasonic sensor provides range data, which the control algorithm uses to make real-time navigation decisions. Servo-mounted scanning adds spatial awareness beyond the immediate forward direction.',
      keyTerms: [
        { term: 'Obstacle Avoidance', definition: 'Autonomous behavior to detect and navigate around obstructions' },
        { term: 'Reactive Architecture', definition: 'A control approach that responds directly to sensor input without planning' },
        { term: 'Distance Threshold', definition: 'The minimum safe distance before the robot takes avoidance action' }
      ]
    },

    experiment: {
      hypothesis: 'The robot will successfully avoid all obstacles in a course without collision.',
      variables: {
        independent: 'Obstacle layout',
        dependent: 'Number of collisions and successful avoidances',
        controlled: 'Robot speed, threshold distance, scan angles'
      },
      dataTable: {
        columns: ['Run', 'Obstacles', 'Collisions', 'Avoidances', 'Completion?'],
        rows: [
          ['1', '3', '___', '___', '___'],
          ['2', '5', '___', '___', '___'],
          ['3', '7', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Reactive architecture responds to:', options: ['Pre-planned paths', 'Real-time sensor data', 'User commands only', 'Calendar events'], correctIndex: 1 },
      { question: 'The servo on the sensor allows:', options: ['Faster driving', 'Scanning left and right', 'Better battery life', 'Wireless control'], correctIndex: 1 },
      { question: 'A good threshold distance is:', options: ['1 cm', '5 cm', '20 cm', '500 cm'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s46-obstacle-robot.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20obstacle%20avoidance%20robot%20ultrasonic',
    safetyInstructions: ['Test at low speeds first', 'Keep obstacle course edges contained', 'Supervise the robot at all times']
  },

  {
    levelNumber: 47,
    id: 'scientist-47',
    title: 'Line Following Robot',
    subtitle: 'Robot that follows a path',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 55,
    category: 'Robotics',

    overview: 'Program your robot to follow a black line on a white surface using three IR line sensors.',

    learningObjectives: [
      'Mount line sensors under the robot',
      'Implement line-following logic',
      'Tune speed and turning for smooth tracking'
    ],

    materials: [
      { name: 'Assembled Robot (from Level 45)', imageUrl: '/materials/chassis.jpg' },
      { name: 'IR Line Sensors (x3)', imageUrl: '/materials/line-sensor.jpg' },
      { name: 'Black Tape', imageUrl: '/materials/black-tape.jpg' },
      { name: 'White Poster Board', imageUrl: '/materials/poster-board.jpg' },
      { name: 'Arduino Uno (on robot)', imageUrl: '/materials/arduino.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Create Track',
        instruction: 'Lay black tape on white poster board in a loop with gentle curves. Line width about 2-3 cm.',
        imageUrl: '/steps/s47-step1.jpg',
        tip: 'Start with gentle curves. Sharp turns are harder for the robot.'
      },
      {
        stepNumber: 2,
        title: 'Mount Sensors',
        instruction: 'Attach 3 line sensors underneath the front of the robot. Left, center, and right — spaced to span the line width.',
        imageUrl: '/steps/s47-step2.jpg',
        tip: 'Sensors should be 1-2 cm above the surface.'
      },
      {
        stepNumber: 3,
        title: 'Write Following Logic',
        instruction: 'Center on line: go forward. Left detects line: turn left. Right detects line: turn right. All detect: stop (intersection or end).',
        imageUrl: '/steps/s47-step3.jpg',
        tip: 'Use different motor speeds for turning instead of stopping one motor completely.'
      },
      {
        stepNumber: 4,
        title: 'Tune and Test',
        instruction: 'Adjust motor speeds, sensor thresholds, and turn sharpness until the robot smoothly follows the track.',
        imageUrl: '/steps/s47-step4.jpg',
        tip: 'Lower speed = more reliable tracking. Higher speed = more exciting but may overshoot curves.'
      }
    ],

    explanation: {
      simple: 'The three sensors tell the robot where the line is relative to its center. If the line moves left, the robot steers left. If it moves right, the robot steers right.',
      scientific: 'This is a proportional control system. The sensor array provides error feedback (line position relative to center). The controller adjusts motor differential to minimize this error, implementing a basic PID-like behavior.',
      keyTerms: [
        { term: 'Line Following', definition: 'A robot behavior that tracks a line on the ground using sensors' },
        { term: 'Proportional Control', definition: 'Adjusting output proportionally to the error signal' },
        { term: 'Motor Differential', definition: 'Running left and right motors at different speeds to steer' }
      ]
    },

    experiment: {
      hypothesis: 'Lower speed will result in fewer line-loss events on curves.',
      variables: {
        independent: 'Base motor speed (PWM value)',
        dependent: 'Number of times robot loses the line',
        controlled: 'Track layout, sensor positions, battery level'
      },
      dataTable: {
        columns: ['Base Speed (PWM)', 'Laps Completed', 'Line Losses', 'Time per Lap (s)'],
        rows: [
          ['100', '___', '___', '___'],
          ['150', '___', '___', '___'],
          ['200', '___', '___', '___'],
          ['255', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'If only the left sensor detects the line, the robot should:', options: ['Go straight', 'Turn left', 'Turn right', 'Stop'], correctIndex: 1 },
      { question: 'Differential steering means:', options: ['Using different motors', 'Running motors at different speeds', 'Using gears', 'Stopping both motors'], correctIndex: 1 },
      { question: 'More sensors provide:', options: ['Less accuracy', 'Better line position resolution', 'No difference', 'Slower response'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s47-line-follower.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20line%20following%20robot%203%20sensors',
    safetyInstructions: ['Test at low speed first', 'Keep hands clear of moving wheels', 'Secure all wires away from wheels']
  },

  {
    levelNumber: 48,
    id: 'scientist-48',
    title: 'Bluetooth Controlled Robot',
    subtitle: 'Drive your robot from a phone',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '55 minutes',
    xpReward: 55,
    category: 'Communication',

    overview: 'Add Bluetooth control to your robot so you can steer it from a smartphone app.',

    learningObjectives: [
      'Wire HC-05 Bluetooth module to Arduino',
      'Receive serial commands via Bluetooth',
      'Map phone app buttons to robot movement'
    ],

    materials: [
      { name: 'Assembled Robot', imageUrl: '/materials/chassis.jpg' },
      { name: 'HC-05 Bluetooth Module', imageUrl: '/materials/bluetooth.jpg' },
      { name: 'Arduino Uno (on robot)', imageUrl: '/materials/arduino.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Smartphone with Bluetooth', imageUrl: '/materials/smartphone.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire HC-05',
        instruction: 'VCC to 5V, GND to GND, TXD to Arduino pin 0 (RX), RXD to Arduino pin 1 (TX) through a voltage divider.',
        imageUrl: '/steps/s48-step1.jpg',
        tip: 'Disconnect HC-05 TX/RX before uploading code since they share Serial pins.'
      },
      {
        stepNumber: 2,
        title: 'Install Phone App',
        instruction: 'Download a Bluetooth serial controller app on your phone. Pair with HC-05 (default password: 1234).',
        imageUrl: '/steps/s48-step2.jpg',
        tip: 'Apps like "Arduino Bluetooth Controller" or "Bluetooth RC Controller" work well.'
      },
      {
        stepNumber: 3,
        title: 'Write Control Code',
        instruction: 'Read Serial.read() in loop. Map characters to actions: F=forward, B=backward, L=left, R=right, S=stop.',
        imageUrl: '/steps/s48-step3.jpg',
        tip: 'Use a switch-case statement for clean code.'
      },
      {
        stepNumber: 4,
        title: 'Drive It!',
        instruction: 'Open the phone app, connect to HC-05, and use the buttons to control your robot in real time.',
        imageUrl: '/steps/s48-step4.jpg',
        tip: 'Add speed control using number buttons (1-9) mapped to PWM values.'
      }
    ],

    explanation: {
      simple: 'The phone sends letters over Bluetooth to the Arduino. Each letter means a direction. The Arduino reads the letter and moves the motors accordingly.',
      scientific: 'HC-05 creates a wireless UART serial link using Bluetooth SPP (Serial Port Profile) at 2.4GHz. The Arduino receives character commands asynchronously and translates them into motor control signals via the H-bridge driver.',
      keyTerms: [
        { term: 'Bluetooth SPP', definition: 'Serial Port Profile — emulates a wired serial connection over Bluetooth' },
        { term: 'UART', definition: 'Universal Asynchronous Receiver-Transmitter for serial communication' },
        { term: 'Wireless Control', definition: 'Sending commands without a physical wire connection' }
      ]
    },

    experiment: {
      hypothesis: 'Bluetooth control will have a response time fast enough for real-time driving.',
      variables: {
        independent: 'Command sent from phone',
        dependent: 'Robot response action and delay',
        controlled: 'Bluetooth module, baud rate, distance'
      },
      dataTable: {
        columns: ['Command Char', 'Expected Action', 'Actual Action', 'Response Delay'],
        rows: [
          ['F', 'Forward', '___', '___'],
          ['B', 'Backward', '___', '___'],
          ['L', 'Turn Left', '___', '___'],
          ['R', 'Turn Right', '___', '___'],
          ['S', 'Stop', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'HC-05 default pairing password is:', options: ['0000', '1234', '9999', '1111'], correctIndex: 1 },
      { question: 'Bluetooth communicates at:', options: ['433 MHz', '900 MHz', '2.4 GHz', '5 GHz'], correctIndex: 2 },
      { question: 'Serial.read() returns:', options: ['A number always', 'The next character in the buffer', 'A boolean', 'An array'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s48-bluetooth-robot.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20Bluetooth%20controlled%20robot%20HC05',
    safetyInstructions: ['Disconnect HC-05 before uploading code', 'Test at low speed indoors', 'Keep the robot within Bluetooth range (about 10m)']
  },

  {
    levelNumber: 49,
    id: 'scientist-49',
    title: 'Multi-Mode Robot',
    subtitle: 'Switch between control modes',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Robotics',

    overview: 'Combine obstacle avoidance, line following, and Bluetooth control into one robot with switchable modes.',

    learningObjectives: [
      'Organize code with functions and modes',
      'Switch between autonomous and manual control',
      'Implement a mode-selection system'
    ],

    materials: [
      { name: 'Assembled Robot with all sensors', imageUrl: '/materials/chassis.jpg' },
      { name: 'Ultrasonic Sensor', imageUrl: '/materials/ultrasonic.jpg' },
      { name: 'IR Line Sensors (x3)', imageUrl: '/materials/line-sensor.jpg' },
      { name: 'HC-05 Bluetooth Module', imageUrl: '/materials/bluetooth.jpg' },
      { name: 'Arduino Uno (on robot)', imageUrl: '/materials/arduino.jpg' },
      { name: 'Push Button', imageUrl: '/materials/push-button.jpg' },
      { name: 'LEDs (Red, Green, Blue)', imageUrl: '/materials/led-pack.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Define Modes',
        instruction: 'Create 3 modes: MODE_BLUETOOTH (manual), MODE_OBSTACLE (avoidance), MODE_LINE (line following). Use a variable to track current mode.',
        imageUrl: '/steps/s49-step1.jpg',
        tip: 'Use an integer: 0=Bluetooth, 1=Obstacle, 2=Line.'
      },
      {
        stepNumber: 2,
        title: 'Mode Switch Button',
        instruction: 'Wire a push button to pin 12. Each press cycles to the next mode. Light a different LED for each mode.',
        imageUrl: '/steps/s49-step2.jpg',
        tip: 'Red = Bluetooth, Green = Obstacle Avoidance, Blue = Line Following.'
      },
      {
        stepNumber: 3,
        title: 'Organize Code',
        instruction: 'Create functions: runBluetooth(), runObstacleAvoidance(), runLineFollower(). In loop(): check mode and call the corresponding function.',
        imageUrl: '/steps/s49-step3.jpg',
        tip: 'Functions make complex programs manageable.'
      },
      {
        stepNumber: 4,
        title: 'Test All Modes',
        instruction: 'Test each mode independently. Verify smooth switching between modes without resetting the robot.',
        imageUrl: '/steps/s49-step4.jpg',
        tip: 'Always stop the motors before switching modes to prevent erratic behavior.'
      }
    ],

    explanation: {
      simple: 'Your robot now has three brains in one. Press a button to switch how it thinks. It can follow your commands, dodge obstacles, or follow a line.',
      scientific: 'This implements a finite state machine where each state represents a behavioral mode. The transition trigger is the button press. Each mode encapsulates a complete control loop with its own sensor-action mapping.',
      keyTerms: [
        { term: 'Finite State Machine', definition: 'A model where the system exists in one of several defined states' },
        { term: 'Mode Switching', definition: 'Transitioning between different operational behaviors' },
        { term: 'Modular Code', definition: 'Code organized into separate functions for each feature' }
      ]
    },

    experiment: {
      hypothesis: 'The robot will correctly switch behaviors when the mode button is pressed.',
      variables: {
        independent: 'Selected mode',
        dependent: 'Robot behavior',
        controlled: 'Robot hardware, battery level, test environment'
      },
      dataTable: {
        columns: ['Mode', 'LED Color', 'Expected Behavior', 'Actual Behavior', 'Smooth Switch?'],
        rows: [
          ['Bluetooth', 'Red', 'Manual control', '___', '___'],
          ['Obstacle', 'Green', 'Autonomous avoidance', '___', '___'],
          ['Line', 'Blue', 'Track following', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A finite state machine has:', options: ['Infinite states', 'A defined set of states', 'No states', 'Random states'], correctIndex: 1 },
      { question: 'Why use functions for each mode?', options: ['To slow down code', 'To organize and manage complexity', 'To use more memory', 'Functions are required'], correctIndex: 1 },
      { question: 'Before switching modes, you should:', options: ['Increase speed', 'Stop the motors', 'Remove the battery', 'Reset Arduino'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s49-multi-mode.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20multi%20mode%20robot%20project',
    safetyInstructions: ['Always stop motors before mode switch', 'Test each mode separately first', 'Supervise autonomous modes']
  },

  {
    levelNumber: 50,
    id: 'scientist-50',
    title: 'Autonomous Explorer Robot',
    subtitle: 'Module 5 capstone project',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '90 minutes',
    xpReward: 75,
    category: 'Capstone Project',

    overview: 'Build and program a fully autonomous robot that explores an unknown area, avoids obstacles, maps distances, and reports its findings on an LCD.',

    learningObjectives: [
      'Combine all robotics concepts into one project',
      'Implement intelligent exploration behavior',
      'Display real-time sensor data on LCD'
    ],

    materials: [
      { name: 'Complete Multi-Mode Robot', imageUrl: '/materials/chassis.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'All previous sensors and drivers', imageUrl: '/materials/sensor-pack.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Plan Exploration Algorithm',
        instruction: 'Design logic: drive forward, scan at intervals, avoid obstacles, record closest/farthest distances. Display status on LCD.',
        imageUrl: '/steps/s50-step1.jpg',
        tip: 'Draw a flowchart before coding.'
      },
      {
        stepNumber: 2,
        title: 'Add LCD Display',
        instruction: 'Mount LCD on top of robot. Show current mode, distance reading, and obstacle count.',
        imageUrl: '/steps/s50-step2.jpg',
        tip: 'Line 1: status message. Line 2: distance and count.'
      },
      {
        stepNumber: 3,
        title: 'Add Alert System',
        instruction: 'Buzzer beeps when obstacle is very close (under 10cm). LED flashes during turns.',
        imageUrl: '/steps/s50-step3.jpg',
        tip: 'Different buzzer patterns for different events add personality.'
      },
      {
        stepNumber: 4,
        title: 'Test in Arena',
        instruction: 'Create an enclosed area with varied obstacles. Release the robot and observe its exploration pattern.',
        imageUrl: '/steps/s50-step4.jpg',
        tip: 'Time how long it takes to navigate the entire space.'
      },
      {
        stepNumber: 5,
        title: 'Document Project',
        instruction: 'Write a full report: circuit diagram, code flowchart, test results, photos, video demo, and future improvements.',
        imageUrl: '/steps/s50-step5.jpg',
        tip: 'Include a section on what you would add with more sensors or processing power.'
      }
    ],

    explanation: {
      simple: 'Your explorer robot drives around on its own, avoids obstacles, shows what it sees on a screen, and beeps when it gets too close to something. It is a real autonomous machine!',
      scientific: 'This capstone integrates sensing (ultrasonic, IR), actuation (motors via H-bridge), processing (Arduino control logic), display (LCD I2C), and feedback (buzzer/LED). The exploration algorithm implements a reactive navigation strategy with state-based behavior selection.',
      keyTerms: [
        { term: 'Autonomous', definition: 'Operating independently without human control' },
        { term: 'Sensor Fusion', definition: 'Combining data from multiple sensors for better decisions' },
        { term: 'Exploration Algorithm', definition: 'Logic that guides a robot to navigate unknown environments' }
      ]
    },

    experiment: {
      hypothesis: 'The robot will explore the entire arena without getting stuck or colliding.',
      variables: {
        independent: 'Arena complexity (number and arrangement of obstacles)',
        dependent: 'Coverage, collisions, stuck events',
        controlled: 'Robot configuration, battery level, algorithm parameters'
      },
      dataTable: {
        columns: ['Arena Setup', 'Time (s)', 'Collisions', 'Stuck Events', 'Area Covered (%)'],
        rows: [
          ['Simple (3 obstacles)', '___', '___', '___', '___'],
          ['Medium (6 obstacles)', '___', '___', '___', '___'],
          ['Complex (10 obstacles)', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'An autonomous robot operates:', options: ['Only with remote control', 'Independently without human input', 'Only when plugged in', 'Only in sunlight'], correctIndex: 1 },
      { question: 'Sensor fusion means:', options: ['Using one sensor', 'Combining multiple sensor data', 'Disabling sensors', 'Using no sensors'], correctIndex: 1 },
      { question: 'The LCD shows:', options: ['Only the time', 'Real-time sensor data and status', 'Nothing useful', 'Only error messages'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s50-explorer.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20autonomous%20explorer%20robot%20project',
    safetyInstructions: ['Supervise autonomous operation', 'Keep arena edges secure', 'Test at low speed first', 'Disconnect batteries when done'],

    completionMessage: 'Module 5 Complete! You are now a Robotics Pioneer! You have built, programmed, and tested autonomous robots. Next: Advanced Robotics and IoT!'
  },

  // ──────────────────────────────────────────
  // SECTION B: Advanced Robotics & IoT
  //            (Levels 51–60)
  // ──────────────────────────────────────────

  {
    levelNumber: 51,
    id: 'scientist-51',
    title: 'Robotic Arm with Servos',
    subtitle: 'Build a multi-joint arm',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Advanced Robotics',

    overview: 'Build a simple robotic arm using multiple servo motors to create base rotation, shoulder, and gripper joints.',

    learningObjectives: [
      'Build a multi-DOF robotic arm',
      'Control multiple servos simultaneously',
      'Understand degrees of freedom in robotics'
    ],

    materials: [
      { name: 'Servo Motors (SG90 x3)', imageUrl: '/materials/servo.jpg' },
      { name: 'Servo Arm / Horn Kit', imageUrl: '/materials/servo-horns.jpg' },
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Cardboard Sheets', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: '9V Battery + Snap', imageUrl: '/materials/9v-battery.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Build Arm Structure',
        instruction: 'Cut cardboard pieces for base, upper arm, forearm, and gripper fingers. Use servo horns as joints.',
        imageUrl: '/steps/s51-step1.jpg',
        tip: 'Make segments about 8-10 cm long for good range of motion.'
      },
      {
        stepNumber: 2,
        title: 'Mount Servos',
        instruction: 'Servo 1 (pin 9) = base rotation. Servo 2 (pin 10) = shoulder lift. Servo 3 (pin 11) = gripper open/close.',
        imageUrl: '/steps/s51-step2.jpg',
        tip: 'Secure servos with tape or hot glue. Ensure free rotation at each joint.'
      },
      {
        stepNumber: 3,
        title: 'Write Control Code',
        instruction: 'Use Serial input to control each servo: type "B90" to set base to 90 degrees, "S45" for shoulder, "G120" for gripper.',
        imageUrl: '/steps/s51-step3.jpg',
        tip: 'Parse the letter prefix to identify which servo, then parse the number for the angle.'
      },
      {
        stepNumber: 4,
        title: 'Pick and Place',
        instruction: 'Program a sequence: move to position, close gripper, lift, rotate, lower, open gripper.',
        imageUrl: '/steps/s51-step4.jpg',
        tip: 'Store positions as arrays and loop through them for repeatable motion.'
      }
    ],

    explanation: {
      simple: 'Each servo controls one joint of the arm. By moving them in coordination, the arm can reach, grab, move, and release objects — just like a real robot arm in a factory.',
      scientific: 'Each servo provides one rotational Degree of Freedom (DOF). A 3-DOF arm can reach points in a 3D workspace. The forward kinematics define the end-effector position as a function of joint angles.',
      keyTerms: [
        { term: 'Degree of Freedom (DOF)', definition: 'An independent axis of motion in a mechanical system' },
        { term: 'End Effector', definition: 'The gripper or tool at the end of a robotic arm' },
        { term: 'Pick and Place', definition: 'The task of picking up an object and placing it at a different location' }
      ]
    },

    experiment: {
      hypothesis: 'The robotic arm can successfully pick up and relocate a small object.',
      variables: {
        independent: 'Joint angles for base, shoulder, and gripper',
        dependent: 'Success of pick-and-place task',
        controlled: 'Object weight, arm structure, servo model'
      },
      dataTable: {
        columns: ['Task', 'Base Angle', 'Shoulder Angle', 'Gripper', 'Success?'],
        rows: [
          ['Reach object', '___', '___', 'Open', '___'],
          ['Grip object', '___', '___', 'Closed', '___'],
          ['Lift object', '___', '___', 'Closed', '___'],
          ['Rotate to target', '___', '___', 'Closed', '___'],
          ['Place object', '___', '___', 'Open', '___']
        ]
      }
    },

    quiz: [
      { question: 'DOF stands for:', options: ['Degree of Function', 'Degree of Freedom', 'Drive of Force', 'Digital Output Format'], correctIndex: 1 },
      { question: 'A 3-DOF arm has:', options: ['1 joint', '2 joints', '3 independent axes of motion', '6 motors'], correctIndex: 2 },
      { question: 'The gripper is called the:', options: ['Base', 'Shoulder', 'End effector', 'Chassis'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s51-robotic-arm.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20robotic%20arm%20servo%20cardboard',
    safetyInstructions: ['Keep fingers away from gripper', 'Use external power for multiple servos', 'Do not overload the arm with heavy objects']
  },

  {
    levelNumber: 52,
    id: 'scientist-52',
    title: 'Joystick Control',
    subtitle: 'Intuitive analog control',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Control Systems',

    overview: 'Use a joystick module to control servos, motors, or LEDs with two-axis analog input.',

    learningObjectives: [
      'Read X and Y axes from a joystick',
      'Map joystick values to servo angles',
      'Create a dead zone for stable center position'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Joystick Module', imageUrl: '/materials/joystick.jpg' },
      { name: 'Servo Motor (SG90)', imageUrl: '/materials/servo.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the Joystick',
        instruction: 'VCC to 5V, GND to GND, VRx to A0, VRy to A1, SW (button) to pin 2.',
        imageUrl: '/steps/s52-step1.jpg',
        tip: 'The joystick has two potentiometers (X, Y) and a push button.'
      },
      {
        stepNumber: 2,
        title: 'Read Axes',
        instruction: 'Print analogRead(A0) and analogRead(A1) to Serial. Center should read approximately 512.',
        imageUrl: '/steps/s52-step2.jpg',
        tip: 'Moving the joystick changes X (left-right) and Y (up-down) values from 0 to 1023.'
      },
      {
        stepNumber: 3,
        title: 'Add Dead Zone',
        instruction: 'If value is between 490-534, treat as center. Outside this range, map to servo movement.',
        imageUrl: '/steps/s52-step3.jpg',
        tip: 'Dead zones prevent jitter when the joystick is at rest.'
      },
      {
        stepNumber: 4,
        title: 'Control Servo',
        instruction: 'Map joystick X to servo angle (0-180). Add Y axis to control a second servo or LED brightness.',
        imageUrl: '/steps/s52-step4.jpg',
        tip: 'This creates an intuitive two-axis control system.'
      }
    ],

    explanation: {
      simple: 'A joystick is two potentiometers in one stick. Pushing it gives X and Y values that you can map to anything: motor speed, servo angle, or LED brightness.',
      scientific: 'The joystick module contains two orthogonal linear potentiometers. Their analog outputs represent position in a 2D input space. Dead zone filtering prevents output changes due to noise or slight mechanical offset around center.',
      keyTerms: [
        { term: 'Dead Zone', definition: 'A range of input values treated as zero/center to prevent jitter' },
        { term: 'Two-Axis Control', definition: 'Independent control along two perpendicular axes (X and Y)' },
        { term: 'Input Mapping', definition: 'Converting raw sensor values to meaningful output ranges' }
      ]
    },

    experiment: {
      hypothesis: 'The joystick will provide smooth proportional control of the servo position.',
      variables: {
        independent: 'Joystick position',
        dependent: 'Servo angle',
        controlled: 'Dead zone size, map range, servo type'
      },
      dataTable: {
        columns: ['Joystick Position', 'X Value', 'Y Value', 'Servo Angle', 'Button Pressed?'],
        rows: [
          ['Center', '___', '___', '___', '___'],
          ['Full Left', '___', '___', '___', '___'],
          ['Full Right', '___', '___', '___', '___'],
          ['Full Up', '___', '___', '___', '___'],
          ['Full Down', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A joystick contains:', options: ['One potentiometer', 'Two potentiometers', 'Three potentiometers', 'No potentiometers'], correctIndex: 1 },
      { question: 'Dead zone prevents:', options: ['Movement', 'Jitter at center position', 'Power consumption', 'Bluetooth'], correctIndex: 1 },
      { question: 'Center value on a 10-bit ADC is approximately:', options: ['0', '255', '512', '1023'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s52-joystick.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20joystick%20servo%20control',
    safetyInstructions: ['Handle joystick gently', 'Do not force the stick beyond its range']
  },

  {
    levelNumber: 53,
    id: 'scientist-53',
    title: 'Multi-Sensor Dashboard',
    subtitle: 'Read and display many sensors',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '55 minutes',
    xpReward: 55,
    category: 'Data Systems',

    overview: 'Connect multiple sensors (temperature, light, distance) to one Arduino and display all readings on an LCD and Serial Monitor.',

    learningObjectives: [
      'Read multiple analog and digital sensors',
      'Organize data display on LCD with pages',
      'Log multi-sensor data to Serial'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Temperature Sensor (LM35)', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'Ultrasonic Sensor (HC-SR04)', imageUrl: '/materials/ultrasonic.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Push Button', imageUrl: '/materials/push-button.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Resistors (10k ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire All Sensors',
        instruction: 'LM35 output to A0. LDR divider to A1. HC-SR04 TRIG to pin 7, ECHO to pin 6. LCD via I2C.',
        imageUrl: '/steps/s53-step1.jpg',
        tip: 'Label each sensor wire for easy debugging.'
      },
      {
        stepNumber: 2,
        title: 'Read All Values',
        instruction: 'Create functions: readTemp(), readLight(), readDistance(). Call all in loop and store results.',
        imageUrl: '/steps/s53-step2.jpg',
        tip: 'Using functions keeps your code organized and readable.'
      },
      {
        stepNumber: 3,
        title: 'Page Display',
        instruction: 'Use a button to cycle through LCD pages. Page 1: Temperature. Page 2: Light Level. Page 3: Distance.',
        imageUrl: '/steps/s53-step3.jpg',
        tip: 'Add a page counter that wraps around: 0, 1, 2, 0, 1, 2...'
      },
      {
        stepNumber: 4,
        title: 'Serial CSV Log',
        instruction: 'Print all values as CSV: Serial.println(temp + "," + light + "," + distance); for data logging.',
        imageUrl: '/steps/s53-step4.jpg',
        tip: 'Copy Serial output to a spreadsheet for analysis and graphing.'
      }
    ],

    explanation: {
      simple: 'Your Arduino is now a data station. It reads temperature, light, and distance all at once and shows them on a screen. You can scroll through pages like a phone.',
      scientific: 'Multiplexed sensor reading involves polling multiple input channels in sequence within each loop iteration. The LCD pagination displays one data view at a time using a modular page state variable. CSV serial output enables external data analysis.',
      keyTerms: [
        { term: 'Sensor Multiplexing', definition: 'Reading multiple sensors in sequence within one program loop' },
        { term: 'Pagination', definition: 'Dividing display content into separate pages' },
        { term: 'CSV', definition: 'Comma-Separated Values — a common data format for logging' }
      ]
    },

    experiment: {
      hypothesis: 'All three sensors will provide simultaneous readings without interference.',
      variables: {
        independent: 'Environmental conditions',
        dependent: 'Sensor readings (temp, light, distance)',
        controlled: 'Sensor models, wiring, Arduino code'
      },
      dataTable: {
        columns: ['Time', 'Temperature (C)', 'Light Level (0-1023)', 'Distance (cm)', 'LCD Page'],
        rows: [
          ['0s', '___', '___', '___', '1'],
          ['10s', '___', '___', '___', '2'],
          ['20s', '___', '___', '___', '3'],
          ['30s', '___', '___', '___', '1']
        ]
      }
    },

    quiz: [
      { question: 'Multiplexing sensors means:', options: ['Using one sensor', 'Reading multiple sensors in sequence', 'Disabling sensors', 'Using only digital sensors'], correctIndex: 1 },
      { question: 'CSV stands for:', options: ['Computer System Values', 'Comma-Separated Values', 'Central Sensor Voltage', 'Combined Serial Variables'], correctIndex: 1 },
      { question: 'LCD pagination lets you:', options: ['Delete data', 'Show different data on different pages', 'Only show one value ever', 'Turn off the screen'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s53-dashboard.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20multi%20sensor%20LCD%20dashboard',
    safetyInstructions: ['Keep wiring neat to prevent shorts', 'Verify sensor pin connections before powering on']
  },

  {
    levelNumber: 54,
    id: 'scientist-54',
    title: 'Introduction to IoT',
    subtitle: 'Connect to the internet',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '55 minutes',
    xpReward: 55,
    category: 'IoT',

    overview: 'Use an ESP8266 (NodeMCU) board to connect to Wi-Fi and send sensor data to the internet.',

    learningObjectives: [
      'Set up the ESP8266 / NodeMCU board',
      'Connect to a Wi-Fi network',
      'Send data to a cloud service'
    ],

    materials: [
      { name: 'ESP8266 / NodeMCU', imageUrl: '/materials/esp8266.jpg' },
      { name: 'USB Cable (Micro)', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Temperature Sensor (LM35)', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Wi-Fi Network Access', imageUrl: '/materials/wifi.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Setup ESP8266 in Arduino IDE',
        instruction: 'Add ESP8266 board URL to Arduino IDE preferences. Install the board package via Board Manager.',
        imageUrl: '/steps/s54-step1.jpg',
        tip: 'URL: http://arduino.esp8266.com/stable/package_esp8266com_index.json'
      },
      {
        stepNumber: 2,
        title: 'Connect to Wi-Fi',
        instruction: 'Include ESP8266WiFi.h. Use WiFi.begin(ssid, password). Print IP address when connected.',
        imageUrl: '/steps/s54-step2.jpg',
        tip: 'Use your home Wi-Fi SSID and password. Check Serial Monitor for connection status.'
      },
      {
        stepNumber: 3,
        title: 'Read Sensor',
        instruction: 'Connect LM35 to analog pin A0 of the ESP8266. Read and convert to temperature.',
        imageUrl: '/steps/s54-step3.jpg',
        tip: 'ESP8266 ADC is 0-1V range with 10-bit resolution. Use a voltage divider if needed.'
      },
      {
        stepNumber: 4,
        title: 'Send to Cloud',
        instruction: 'Use HTTP GET to send data to ThingSpeak or a similar free IoT platform. Pass temperature as a URL parameter.',
        imageUrl: '/steps/s54-step4.jpg',
        tip: 'Create a free ThingSpeak account and channel to receive your data.'
      }
    ],

    explanation: {
      simple: 'IoT means connecting physical things to the internet. Your sensor now sends its temperature reading to a website you can check from anywhere in the world!',
      scientific: 'The ESP8266 SoC integrates a 32-bit processor with Wi-Fi 802.11 b/g/n capability. HTTP requests transmit sensor data as URL-encoded parameters to cloud REST APIs, which store and visualize the time-series data.',
      keyTerms: [
        { term: 'IoT', definition: 'Internet of Things — physical devices connected to the internet' },
        { term: 'ESP8266', definition: 'A low-cost Wi-Fi microcontroller for IoT applications' },
        { term: 'REST API', definition: 'A web service interface for sending and receiving data over HTTP' },
        { term: 'ThingSpeak', definition: 'A free IoT cloud platform for data collection and visualization' }
      ]
    },

    experiment: {
      hypothesis: 'Temperature data will appear on the cloud dashboard within seconds of being sent.',
      variables: {
        independent: 'Sensor reading interval',
        dependent: 'Cloud data update time and accuracy',
        controlled: 'Wi-Fi strength, platform, sensor type'
      },
      dataTable: {
        columns: ['Reading #', 'Local Temp (C)', 'Cloud Temp (C)', 'Delay (s)', 'Match?'],
        rows: [
          ['1', '___', '___', '___', '___'],
          ['2', '___', '___', '___', '___'],
          ['3', '___', '___', '___', '___'],
          ['4', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'IoT stands for:', options: ['Input or Output Terminal', 'Internet of Things', 'Integrated Online Technology', 'Internal Operational Test'], correctIndex: 1 },
      { question: 'ESP8266 connects via:', options: ['Bluetooth', 'Wi-Fi', 'Ethernet cable', 'USB only'], correctIndex: 1 },
      { question: 'ThingSpeak is a:', options: ['Programming language', 'Cloud IoT platform', 'Sensor type', 'Robot chassis'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s54-iot-intro.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=ESP8266%20NodeMCU%20ThingSpeak%20IoT%20tutorial',
    safetyInstructions: ['Do not share your Wi-Fi password in code repositories', 'Use a guest network if available', 'ESP8266 operates at 3.3V logic — do not apply 5V to its pins']
  },

  {
    levelNumber: 55,
    id: 'scientist-55',
    title: 'IoT Dashboard',
    subtitle: 'Visualize data online',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'IoT',

    overview: 'Create an online dashboard that displays live sensor data with charts and gauges using ThingSpeak widgets.',

    learningObjectives: [
      'Configure ThingSpeak channels and fields',
      'Send multiple data fields from ESP8266',
      'Create visual widgets on the dashboard'
    ],

    materials: [
      { name: 'ESP8266 / NodeMCU', imageUrl: '/materials/esp8266.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Temperature Sensor', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Add Fields to Channel',
        instruction: 'On ThingSpeak, add Field 1 (Temperature) and Field 2 (Light Level) to your channel.',
        imageUrl: '/steps/s55-step1.jpg',
        tip: 'Each field stores one type of data. You can have up to 8 fields per channel.'
      },
      {
        stepNumber: 2,
        title: 'Send Multiple Fields',
        instruction: 'Modify the HTTP request URL to include both field1=temp and field2=light values.',
        imageUrl: '/steps/s55-step2.jpg',
        tip: 'ThingSpeak limits updates to once every 15 seconds on free accounts.'
      },
      {
        stepNumber: 3,
        title: 'Create Widgets',
        instruction: 'On ThingSpeak, go to Apps > MATLAB Visualizations or use Widgets to add line charts and gauges.',
        imageUrl: '/steps/s55-step3.jpg',
        tip: 'Gauge widgets work great for live values. Line charts show trends over time.'
      },
      {
        stepNumber: 4,
        title: 'Share Dashboard',
        instruction: 'Make the channel public or share the link. View your dashboard from any browser or phone.',
        imageUrl: '/steps/s55-step4.jpg',
        tip: 'You can now monitor your room temperature and light level from anywhere!'
      }
    ],

    explanation: {
      simple: 'Your sensors send data to the cloud, and the cloud draws pretty charts automatically. You can check your room conditions from your phone, anywhere.',
      scientific: 'IoT dashboards aggregate time-series data from edge devices and render visualizations using widgets. REST APIs handle data ingestion, and the platform handles storage, querying, and rendering.',
      keyTerms: [
        { term: 'Dashboard', definition: 'A visual display of key data metrics in real-time' },
        { term: 'Time-Series Data', definition: 'Data points indexed in time order' },
        { term: 'Widget', definition: 'A visual component like a chart, gauge, or number display' }
      ]
    },

    experiment: {
      hypothesis: 'The dashboard will show real-time trends of temperature and light over a 1-hour period.',
      variables: {
        independent: 'Time of day',
        dependent: 'Temperature and light values displayed',
        controlled: 'Sensor models, update interval, channel config'
      },
      dataTable: {
        columns: ['Time', 'Temp on Dashboard', 'Light on Dashboard', 'Chart Updated?'],
        rows: [
          ['Start', '___', '___', '___'],
          ['+15 min', '___', '___', '___'],
          ['+30 min', '___', '___', '___'],
          ['+45 min', '___', '___', '___'],
          ['+60 min', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'ThingSpeak free update limit is:', options: ['Every 1 second', 'Every 15 seconds', 'Every 1 minute', 'Every 1 hour'], correctIndex: 1 },
      { question: 'A gauge widget shows:', options: ['Historical data', 'A single current value', 'Code', 'File downloads'], correctIndex: 1 },
      { question: 'Time-series data is indexed by:', options: ['Color', 'Size', 'Time', 'Name'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s55-iot-dashboard.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=ThingSpeak%20IoT%20dashboard%20ESP8266',
    safetyInstructions: ['Keep API keys private', 'Do not expose sensitive network info']
  },

  {
    levelNumber: 56,
    id: 'scientist-56',
    title: 'Smart Light Controller',
    subtitle: 'IoT-controlled lighting',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Smart Home',

    overview: 'Control an LED or relay-switched lamp from a web interface served by the ESP8266.',

    learningObjectives: [
      'Create a simple web server on ESP8266',
      'Serve HTML buttons to control an LED',
      'Understand client-server communication'
    ],

    materials: [
      { name: 'ESP8266 / NodeMCU', imageUrl: '/materials/esp8266.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistor (220 ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Relay Module (5V)', imageUrl: '/materials/relay.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Create Web Server',
        instruction: 'Use ESP8266WebServer library. Set up server on port 80. Create handlers for routes: /, /on, /off.',
        imageUrl: '/steps/s56-step1.jpg',
        tip: 'The ESP8266 IP address is your control panel URL.'
      },
      {
        stepNumber: 2,
        title: 'Serve HTML Page',
        instruction: 'When root "/" is accessed, send an HTML page with ON and OFF buttons that link to /on and /off routes.',
        imageUrl: '/steps/s56-step2.jpg',
        tip: 'Use inline HTML strings in your Arduino code.'
      },
      {
        stepNumber: 3,
        title: 'Handle Commands',
        instruction: 'When /on is accessed, set LED pin HIGH. When /off, set it LOW. Redirect back to root page.',
        imageUrl: '/steps/s56-step3.jpg',
        tip: 'Add relay control for switching a real desk lamp (low voltage only).'
      },
      {
        stepNumber: 4,
        title: 'Test from Phone',
        instruction: 'Open the ESP8266 IP address in your phone browser. Tap ON and OFF buttons to control the LED.',
        imageUrl: '/steps/s56-step4.jpg',
        tip: 'Both devices must be on the same Wi-Fi network.'
      }
    ],

    explanation: {
      simple: 'The ESP8266 runs a tiny website. When you press ON on your phone browser, it tells the ESP to turn on the LED. You are controlling hardware from a web page!',
      scientific: 'The ESP8266 runs an HTTP server that responds to GET requests on defined URI routes. Each route handler executes GPIO operations, implementing a web-controlled actuator system.',
      keyTerms: [
        { term: 'Web Server', definition: 'A program that serves web pages and handles HTTP requests' },
        { term: 'HTTP GET', definition: 'A request method used to retrieve or trigger actions on a server' },
        { term: 'Route Handler', definition: 'A function that runs when a specific URL path is accessed' }
      ]
    },

    experiment: {
      hypothesis: 'The LED can be controlled from any device on the same Wi-Fi network.',
      variables: {
        independent: 'Control device (phone, laptop, tablet)',
        dependent: 'LED response',
        controlled: 'ESP8266, Wi-Fi network, LED circuit'
      },
      dataTable: {
        columns: ['Device', 'URL Accessed', 'LED State', 'Response Time'],
        rows: [
          ['Phone', '/on', '___', '___'],
          ['Phone', '/off', '___', '___'],
          ['Laptop', '/on', '___', '___'],
          ['Laptop', '/off', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'The ESP8266 web server runs on port:', options: ['21', '80', '443', '3000'], correctIndex: 1 },
      { question: 'Both devices must be on:', options: ['Different networks', 'The same Wi-Fi network', 'Bluetooth', 'USB'], correctIndex: 1 },
      { question: 'Route /on triggers:', options: ['LED OFF', 'LED ON', 'Reset', 'Wi-Fi disconnect'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s56-smart-light.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=ESP8266%20web%20server%20LED%20control',
    safetyInstructions: ['Do not connect relay to mains voltage', 'Use only low-voltage loads', 'Keep ESP8266 pins at 3.3V logic']
  },

  {
    levelNumber: 57,
    id: 'scientist-57',
    title: 'Smart Temperature Monitor',
    subtitle: 'Web-based live temperature',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Smart Home',

    overview: 'Serve a live web page that displays current temperature with auto-refresh from the ESP8266 sensor.',

    learningObjectives: [
      'Serve dynamic HTML with sensor data',
      'Implement auto-refresh on the web page',
      'Add temperature thresholds with alerts'
    ],

    materials: [
      { name: 'ESP8266 / NodeMCU', imageUrl: '/materials/esp8266.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Temperature Sensor (LM35)', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'LED (Red for hot alert)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire Sensor and Outputs',
        instruction: 'LM35 to A0. Red LED to D5. Buzzer to D6.',
        imageUrl: '/steps/s57-step1.jpg',
        tip: 'Use the same temperature conversion formula from Level 39.'
      },
      {
        stepNumber: 2,
        title: 'Dynamic HTML Page',
        instruction: 'Insert current temperature value into the HTML string before sending it to the client.',
        imageUrl: '/steps/s57-step2.jpg',
        tip: 'Use String concatenation to insert the temperature variable into the HTML.'
      },
      {
        stepNumber: 3,
        title: 'Auto-Refresh',
        instruction: 'Add <meta http-equiv="refresh" content="5"> to the HTML head so the page updates every 5 seconds.',
        imageUrl: '/steps/s57-step3.jpg',
        tip: 'This creates a simple live monitoring page without JavaScript.'
      },
      {
        stepNumber: 4,
        title: 'Add Threshold Alerts',
        instruction: 'If temperature exceeds 35 degrees C, turn on red LED and buzzer. Show a warning on the web page.',
        imageUrl: '/steps/s57-step4.jpg',
        tip: 'Change the HTML background color to red when temperature is high.'
      }
    ],

    explanation: {
      simple: 'The ESP8266 reads the temperature and creates a web page showing it. The page automatically refreshes so you always see the latest value. If it gets too hot, it sounds an alarm!',
      scientific: 'Server-side rendering dynamically generates HTML by embedding sensor values into the response string. The meta refresh tag triggers periodic HTTP GET requests from the browser, polling the server for updated data.',
      keyTerms: [
        { term: 'Server-Side Rendering', definition: 'Generating HTML on the server with dynamic data before sending to client' },
        { term: 'Auto-Refresh', definition: 'Automatic page reload at a set interval' },
        { term: 'Threshold Alert', definition: 'An action triggered when a value exceeds a defined limit' }
      ]
    },

    experiment: {
      hypothesis: 'The web page will display updated temperature within 5 seconds of a change.',
      variables: {
        independent: 'Temperature environment (warm hand, ice nearby)',
        dependent: 'Web page temperature display and alert state',
        controlled: 'Refresh interval, threshold value, sensor type'
      },
      dataTable: {
        columns: ['Condition', 'Actual Temp (C)', 'Web Display (C)', 'Alert Active?', 'Update Delay (s)'],
        rows: [
          ['Room temp', '___', '___', '___', '___'],
          ['Hand on sensor', '___', '___', '___', '___'],
          ['Warm breath', '___', '___', '___', '___'],
          ['Ice nearby', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Meta refresh tag causes:', options: ['CSS styling', 'Automatic page reload', 'File download', 'JavaScript execution'], correctIndex: 1 },
      { question: 'Server-side rendering means:', options: ['Browser creates the page', 'Server generates HTML with data', 'No HTML is used', 'Only CSS is served'], correctIndex: 1 },
      { question: 'Threshold alerts trigger when:', options: ['Value is zero', 'Value exceeds a set limit', 'Page is closed', 'Battery is low'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s57-smart-temp.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=ESP8266%20temperature%20web%20server%20live',
    safetyInstructions: ['Do not expose ESP8266 to extreme heat', 'Use 3.3V logic on ESP pins']
  },

  {
    levelNumber: 58,
    id: 'scientist-58',
    title: 'Intruder Alert System',
    subtitle: 'PIR motion detection with notification',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Smart Home',

    overview: 'Build a motion-activated alarm system using a PIR sensor, buzzer, and LED that also logs events to the web.',

    learningObjectives: [
      'Use a PIR motion sensor',
      'Create an armed/disarmed security system',
      'Log motion events with timestamps'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'PIR Motion Sensor', imageUrl: '/materials/pir.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'LEDs (Red, Green)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Push Button', imageUrl: '/materials/push-button.jpg' },
      { name: 'Resistors (220 ohm, 10k ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire PIR Sensor',
        instruction: 'PIR: VCC to 5V, GND to GND, OUT to pin 2. Allow 30 seconds warm-up time after powering on.',
        imageUrl: '/steps/s58-step1.jpg',
        tip: 'PIR sensors need calibration time. Do not move in front during warm-up.'
      },
      {
        stepNumber: 2,
        title: 'Wire Alarm Outputs',
        instruction: 'Red LED to pin 8, Green LED to pin 9, Buzzer to pin 10. Button (arm/disarm) to pin 12.',
        imageUrl: '/steps/s58-step2.jpg',
        tip: 'Green LED = system armed. Red LED = intruder detected.'
      },
      {
        stepNumber: 3,
        title: 'Write Security Logic',
        instruction: 'Button press toggles armed/disarmed. When armed: if PIR detects motion, sound buzzer, flash red LED, log event with millis() timestamp.',
        imageUrl: '/steps/s58-step3.jpg',
        tip: 'Add a 5-second arming delay so you can leave the room.'
      },
      {
        stepNumber: 4,
        title: 'Event Log',
        instruction: 'Print each detection event with timestamp to Serial Monitor. Count total events.',
        imageUrl: '/steps/s58-step4.jpg',
        tip: 'Format: "ALERT: Motion at 45230ms (Event #3)"'
      }
    ],

    explanation: {
      simple: 'The PIR sensor detects movement by sensing body heat changes. When armed, any motion triggers the alarm. You can arm or disarm it with a button.',
      scientific: 'PIR (Passive Infrared) sensors detect changes in infrared radiation from warm bodies. The pyroelectric element generates a voltage when IR flux changes. The Fresnel lens focuses IR onto the sensor from a wide field of view.',
      keyTerms: [
        { term: 'PIR Sensor', definition: 'A sensor that detects infrared radiation changes from moving warm bodies' },
        { term: 'Pyroelectric', definition: 'A material that generates voltage from temperature changes' },
        { term: 'Fresnel Lens', definition: 'A lens on the PIR that widens the detection angle' },
        { term: 'Armed State', definition: 'When the security system is active and monitoring for events' }
      ]
    },

    experiment: {
      hypothesis: 'The PIR sensor will detect human movement at up to 5 meters within its field of view.',
      variables: {
        independent: 'Distance and angle of movement',
        dependent: 'Detection success (yes/no)',
        controlled: 'PIR model, sensitivity setting, room temperature'
      },
      dataTable: {
        columns: ['Distance (m)', 'Angle', 'Movement Type', 'Detected?', 'False Alarm?'],
        rows: [
          ['1', 'Center', 'Walking', '___', '___'],
          ['3', 'Center', 'Walking', '___', '___'],
          ['5', 'Center', 'Walking', '___', '___'],
          ['3', 'Edge', 'Walking', '___', '___'],
          ['3', 'Center', 'Hand wave', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'PIR stands for:', options: ['Power Infrared Relay', 'Passive Infrared', 'Programmable Input Register', 'Precision IR'], correctIndex: 1 },
      { question: 'PIR detects:', options: ['Light color', 'Sound waves', 'Infrared radiation changes', 'Magnetic fields'], correctIndex: 2 },
      { question: 'The Fresnel lens:', options: ['Focuses infrared onto the sensor', 'Blocks all light', 'Creates sound', 'Stores data'], correctIndex: 0 }
    ],

    outputImageUrl: '/outputs/s58-intruder.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20PIR%20motion%20alarm%20system%20project',
    safetyInstructions: ['Allow warm-up time before testing', 'Keep buzzer volume comfortable', 'Position PIR away from heat sources to prevent false alarms']
  },

  {
    levelNumber: 59,
    id: 'scientist-59',
    title: 'Solar Tracker',
    subtitle: 'Follow the sun automatically',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Renewable Energy',

    overview: 'Build a servo-based solar tracker that automatically points a solar panel toward the brightest light source.',

    learningObjectives: [
      'Use dual LDRs for differential light sensing',
      'Implement proportional tracking with a servo',
      'Understand solar energy optimization'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'LDR x2', imageUrl: '/materials/ldr.jpg' },
      { name: 'Servo Motor (SG90)', imageUrl: '/materials/servo.jpg' },
      { name: 'Small Solar Panel', imageUrl: '/materials/solar-panel.jpg' },
      { name: 'Resistors (10k ohm x2)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Cardboard Sheets', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Build Light Sensor Array',
        instruction: 'Mount two LDRs on a cardboard divider. The divider creates a shadow on one LDR when light comes from the side.',
        imageUrl: '/steps/s59-step1.jpg',
        tip: 'Place LDRs about 3cm apart with a 2cm tall divider between them.'
      },
      {
        stepNumber: 2,
        title: 'Wire Sensors and Servo',
        instruction: 'LDR1 divider to A0, LDR2 divider to A1. Servo to pin 9.',
        imageUrl: '/steps/s59-step2.jpg',
        tip: 'Both LDRs use identical 10k resistor dividers for consistent readings.'
      },
      {
        stepNumber: 3,
        title: 'Write Tracking Algorithm',
        instruction: 'Read both LDRs. If left > right: move servo left (decrease angle). If right > left: move servo right (increase angle). Add a dead band to prevent jitter.',
        imageUrl: '/steps/s59-step3.jpg',
        tip: 'Use small angle steps (1-2 degrees) for smooth tracking.'
      },
      {
        stepNumber: 4,
        title: 'Mount Solar Panel',
        instruction: 'Attach the solar panel to the servo. Measure panel voltage with a multimeter while it tracks the light.',
        imageUrl: '/steps/s59-step4.jpg',
        tip: 'Compare voltage when panel is aligned vs when it is angled away from the light.'
      }
    ],

    explanation: {
      simple: 'Two light sensors compare brightness on each side. If the left side is brighter, the servo turns left. This keeps the solar panel always pointing at the brightest light.',
      scientific: 'Differential light sensing compares photoresistive sensor values. The control algorithm implements proportional tracking by adjusting the servo angle to minimize the difference between sensor readings, maximizing solar panel perpendicularity to incident radiation.',
      keyTerms: [
        { term: 'Solar Tracker', definition: 'A device that orients a solar panel to follow the sun' },
        { term: 'Differential Sensing', definition: 'Comparing two sensors to determine direction of a stimulus' },
        { term: 'Proportional Tracking', definition: 'Adjusting output proportionally to the difference between sensors' }
      ]
    },

    experiment: {
      hypothesis: 'A tracking solar panel will produce higher voltage than a fixed panel.',
      variables: {
        independent: 'Panel orientation (tracking vs fixed)',
        dependent: 'Solar panel output voltage',
        controlled: 'Light source, panel type, distance'
      },
      dataTable: {
        columns: ['Light Position', 'Fixed Panel Voltage', 'Tracking Panel Voltage', 'Improvement (%)'],
        rows: [
          ['Center', '___', '___', '___'],
          ['30 degrees left', '___', '___', '___'],
          ['60 degrees left', '___', '___', '___'],
          ['30 degrees right', '___', '___', '___'],
          ['60 degrees right', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Solar trackers increase energy capture by:', options: ['Changing panel color', 'Keeping panels perpendicular to sunlight', 'Making panels bigger', 'Using more batteries'], correctIndex: 1 },
      { question: 'Differential sensing uses:', options: ['One sensor', 'Two sensors for comparison', 'No sensors', 'A camera'], correctIndex: 1 },
      { question: 'The dead band prevents:', options: ['Tracking', 'Jitter oscillation', 'Power generation', 'Light detection'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s59-solar-tracker.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20solar%20tracker%20LDR%20servo',
    safetyInstructions: ['Do not look directly at bright light sources', 'Secure the solar panel firmly to the servo', 'Do not exceed servo torque limits']
  },

  {
    levelNumber: 60,
    id: 'scientist-60',
    title: 'Smart Environment Monitor',
    subtitle: 'Module 6 capstone project',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '90 minutes',
    xpReward: 80,
    category: 'Capstone Project',

    overview: 'Build a complete IoT environmental monitoring station that measures temperature, light, and soil moisture, displays data on an LCD, sends it to the cloud, and triggers local alerts.',

    learningObjectives: [
      'Integrate three sensors into one IoT system',
      'Display locally and transmit to cloud',
      'Implement multi-threshold alert system'
    ],

    materials: [
      { name: 'ESP8266 / NodeMCU', imageUrl: '/materials/esp8266.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Temperature Sensor (LM35)', imageUrl: '/materials/temperature-sensor.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'Soil Moisture Sensor', imageUrl: '/materials/soil-sensor.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'LEDs (Red, Yellow, Green)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'Resistors (220 ohm, 10k ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Plan the System',
        instruction: 'Draw a system diagram: 3 sensors → ESP8266 → LCD + LEDs + Buzzer + Cloud. Define thresholds for each sensor.',
        imageUrl: '/steps/s60-step1.jpg',
        tip: 'Temperature: >35C = hot alert. Light: <100 = dark alert. Soil: <300 = dry alert.'
      },
      {
        stepNumber: 2,
        title: 'Wire All Components',
        instruction: 'LM35 to A0 (via multiplexer or external ADC if using ESP8266). LDR divider. Soil sensor. LCD via I2C. LEDs and buzzer on digital pins.',
   
