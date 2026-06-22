// ============================================================
//  SCINO Scientist Program — Levels 61–80
//  Module 7: Innovation Master (61–70)
//  Module 8: Research Scientist (71–80)
//  Total: 20 Levels — Error-Free
// ============================================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

// ──────────────────────────────────────────
// EQUIPMENT BOARD — Levels 61–80 Kit
// ──────────────────────────────────────────

export const levels61to80EquipmentBoard = {
  moduleTitle: 'Innovation Master & Research Scientist Kit',
  description: 'All materials needed for Scientist Levels 61–80.',
  categories: [
    {
      categoryName: 'Microcontrollers & Boards',
      items: [
        { name: 'Arduino Uno', quantity: 1, imageUrl: '/materials/arduino.jpg', reusable: true },
        { name: 'ESP8266 / NodeMCU', quantity: 1, imageUrl: '/materials/esp8266.jpg', reusable: true },
        { name: 'USB Cables (Type B + Micro)', quantity: 2, imageUrl: '/materials/usb-cable.jpg', reusable: true },
        { name: 'Breadboard (830 point)', quantity: 2, imageUrl: '/materials/breadboard.jpg', reusable: true },
        { name: 'Jumper Wires (M-M, M-F, F-F pack)', quantity: 60, imageUrl: '/materials/jumper-wires.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Displays & Output',
      items: [
        { name: 'OLED Display (0.96" I2C SSD1306)', quantity: 1, imageUrl: '/materials/oled.jpg', reusable: true },
        { name: 'LCD Display (16x2 I2C)', quantity: 1, imageUrl: '/materials/lcd.jpg', reusable: true },
        { name: 'LEDs (Red, Green, Blue, White)', quantity: 10, imageUrl: '/materials/led-pack.jpg', reusable: true },
        { name: 'RGB LED (Common Cathode)', quantity: 2, imageUrl: '/materials/rgb-led.jpg', reusable: true },
        { name: 'Buzzer (Piezo)', quantity: 2, imageUrl: '/materials/buzzer.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Sensors',
      items: [
        { name: 'Sound Sensor Module (KY-038)', quantity: 1, imageUrl: '/materials/sound-sensor.jpg', reusable: true },
        { name: 'Soil Moisture Sensor', quantity: 1, imageUrl: '/materials/soil-sensor.jpg', reusable: true },
        { name: 'DHT11 Temperature & Humidity Sensor', quantity: 1, imageUrl: '/materials/dht11.jpg', reusable: true },
        { name: 'MQ-135 Air Quality Sensor', quantity: 1, imageUrl: '/materials/mq135.jpg', reusable: true },
        { name: 'Ultrasonic Sensor (HC-SR04)', quantity: 1, imageUrl: '/materials/ultrasonic.jpg', reusable: true },
        { name: 'LDR (Light Dependent Resistor)', quantity: 2, imageUrl: '/materials/ldr.jpg', reusable: true },
        { name: 'Rain Sensor Module', quantity: 1, imageUrl: '/materials/rain-sensor.jpg', reusable: true },
        { name: 'pH Sensor Module', quantity: 1, imageUrl: '/materials/ph-module.jpg', reusable: true },
        { name: 'Pulse Sensor (Heart Rate)', quantity: 1, imageUrl: '/materials/pulse-sensor.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Modules & Actuators',
      items: [
        { name: 'RFID Module (RC522) + Cards', quantity: 1, imageUrl: '/materials/rfid.jpg', reusable: true },
        { name: 'Micro SD Card Module + SD Card', quantity: 1, imageUrl: '/materials/sd-module.jpg', reusable: true },
        { name: 'RTC Module (DS3231)', quantity: 1, imageUrl: '/materials/rtc.jpg', reusable: true },
        { name: 'Relay Module (5V, 2-channel)', quantity: 1, imageUrl: '/materials/relay-2ch.jpg', reusable: true },
        { name: 'Water Pump (5V submersible)', quantity: 1, imageUrl: '/materials/water-pump.jpg', reusable: true },
        { name: 'Servo Motor (SG90)', quantity: 2, imageUrl: '/materials/servo.jpg', reusable: true },
        { name: 'DC Motor with Fan Blade', quantity: 1, imageUrl: '/materials/dc-fan.jpg', reusable: true },
        { name: 'Small Solar Panel (5V)', quantity: 1, imageUrl: '/materials/solar-panel.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Passive Components',
      items: [
        { name: 'Resistors (220, 1k, 4.7k, 10k)', quantity: 30, imageUrl: '/materials/resistors.jpg', reusable: true },
        { name: 'Capacitors (100uF, 10uF, 0.1uF)', quantity: 6, imageUrl: '/materials/capacitor.jpg', reusable: true },
        { name: 'Diodes (1N4007)', quantity: 4, imageUrl: '/materials/diode.jpg', reusable: true },
        { name: 'NPN Transistor (BC547)', quantity: 4, imageUrl: '/materials/transistor.jpg', reusable: true },
        { name: 'Push Buttons', quantity: 4, imageUrl: '/materials/push-button.jpg', reusable: true }
      ]
    },
    {
      categoryName: 'Power',
      items: [
        { name: 'Battery Holder (4xAA)', quantity: 1, imageUrl: '/materials/battery-holder-4aa.jpg', reusable: true },
        { name: 'AA Batteries', quantity: 8, imageUrl: '/materials/batteries.jpg', reusable: false },
        { name: '9V Battery + Snap', quantity: 2, imageUrl: '/materials/9v-battery.jpg', reusable: false }
      ]
    },
    {
      categoryName: 'Science & Lab Supplies',
      items: [
        { name: 'Safety Goggles', quantity: 1, imageUrl: '/materials/goggles.jpg', reusable: true },
        { name: 'Disposable Gloves', quantity: 6, imageUrl: '/materials/gloves.jpg', reusable: false },
        { name: 'Notebook & Pen', quantity: 1, imageUrl: '/materials/notebook.jpg', reusable: true },
        { name: 'Ruler & Measuring Tape', quantity: 1, imageUrl: '/materials/ruler.jpg', reusable: true },
        { name: 'Stopwatch', quantity: 1, imageUrl: '/materials/stopwatch.jpg', reusable: true },
        { name: 'Multimeter', quantity: 1, imageUrl: '/materials/multimeter.jpg', reusable: true },
        { name: 'Small Plant Pot with Soil', quantity: 2, imageUrl: '/materials/plant-pot.jpg', reusable: true },
        { name: 'Seeds (fast-growing: bean/mustard)', quantity: 1, imageUrl: '/materials/seeds.jpg', reusable: false },
        { name: 'Plastic Bottles (500ml)', quantity: 3, imageUrl: '/materials/plastic-bottle.jpg', reusable: true },
        { name: 'String (2m)', quantity: 1, imageUrl: '/materials/string.jpg', reusable: true },
        { name: 'Cardboard Sheets', quantity: 3, imageUrl: '/materials/cardboard.jpg', reusable: false },
        { name: 'Protractor', quantity: 1, imageUrl: '/materials/protractor.jpg', reusable: true },
        { name: 'Magnifying Glass', quantity: 1, imageUrl: '/materials/magnifying.jpg', reusable: true }
      ]
    }
  ]
};

// ──────────────────────────────────────────
// SECTION A: Innovation Master (Levels 61–70)
// ──────────────────────────────────────────

const scientistLevels61to80 = [

  {
    levelNumber: 61,
    id: 'scientist-61',
    title: 'OLED Display Interface',
    subtitle: 'Crisp graphics on a tiny screen',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Displays',

    overview: 'Connect a 0.96-inch OLED display to Arduino via I2C and display text, shapes, and sensor data with pixel-level control.',

    learningObjectives: [
      'Wire an I2C OLED display (SSD1306)',
      'Use the Adafruit SSD1306 and GFX libraries',
      'Draw text, lines, rectangles, and circles'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'OLED Display (0.96" I2C)', imageUrl: '/materials/oled.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire the OLED',
        instruction: 'Connect SDA to A4, SCL to A5, VCC to 5V (or 3.3V depending on module), GND to GND.',
        imageUrl: '/steps/s61-step1.jpg',
        tip: 'Most OLED modules accept both 3.3V and 5V. Check your module specs.'
      },
      {
        stepNumber: 2,
        title: 'Install Libraries',
        instruction: 'Install Adafruit SSD1306 and Adafruit GFX Library from the Library Manager.',
        imageUrl: '/steps/s61-step2.jpg',
        tip: 'Both libraries are needed — GFX provides drawing functions, SSD1306 handles the hardware.'
      },
      {
        stepNumber: 3,
        title: 'Display Text',
        instruction: 'Initialize display. Use display.setTextSize(1), display.setCursor(0,0), display.println("Hello OLED!"), display.display().',
        imageUrl: '/steps/s61-step3.jpg',
        tip: 'Always call display.display() to push the buffer to the screen.'
      },
      {
        stepNumber: 4,
        title: 'Draw Graphics',
        instruction: 'Draw lines, rectangles, circles, and a custom animation. Combine with a temperature reading for a dashboard.',
        imageUrl: '/steps/s61-step4.jpg',
        tip: 'display.clearDisplay() before each frame for animation.'
      }
    ],

    explanation: {
      simple: 'The OLED is a tiny high-contrast screen. Each dot (pixel) can be controlled individually, letting you draw anything from text to graphics.',
      scientific: 'OLED (Organic LED) displays emit light from each pixel independently, providing high contrast. The SSD1306 controller receives I2C commands to update a 128x64 pixel frame buffer.',
      keyTerms: [
        { term: 'OLED', definition: 'Organic Light Emitting Diode — a self-emitting display technology' },
        { term: 'Frame Buffer', definition: 'Memory that stores the pixel data before it is displayed' },
        { term: 'SSD1306', definition: 'The driver IC that controls the OLED display' }
      ]
    },

    experiment: {
      hypothesis: 'The OLED can display real-time sensor readings with graphics faster than an LCD.',
      variables: {
        independent: 'Display content complexity',
        dependent: 'Refresh speed and readability',
        controlled: 'I2C speed, library version, display size'
      },
      dataTable: {
        columns: ['Content Type', 'Render Time (ms)', 'Readability (1-5)', 'Notes'],
        rows: [
          ['Text only', '___', '___', '___'],
          ['Text + rectangle', '___', '___', '___'],
          ['Full dashboard', '___', '___', '___'],
          ['Animation', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'OLED stands for:', options: ['Optical LED', 'Organic Light Emitting Diode', 'Open LED', 'Output Light Emitting Device'], correctIndex: 1 },
      { question: 'SSD1306 resolution is:', options: ['16x2', '64x32', '128x64', '320x240'], correctIndex: 2 },
      { question: 'display.display() does:', options: ['Clears the screen', 'Pushes buffer to screen', 'Turns off display', 'Changes brightness'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s61-oled.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20OLED%20SSD1306%20tutorial',
    safetyInstructions: ['Handle OLED gently to avoid cracking', 'Check voltage compatibility before connecting']
  },

  {
    levelNumber: 62,
    id: 'scientist-62',
    title: 'Sound Sensor Clap Switch',
    subtitle: 'Control devices with sound',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Sensors',

    overview: 'Use a sound sensor module to detect clap sounds and toggle an LED or relay on/off.',

    learningObjectives: [
      'Read analog sound levels from KY-038',
      'Implement clap detection with threshold',
      'Build a toggle mechanism with debounce'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Sound Sensor Module (KY-038)', imageUrl: '/materials/sound-sensor.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistor (220 ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire Sound Sensor',
        instruction: 'VCC to 5V, GND to GND, A0 (analog out) to Arduino A0, D0 (digital out) to pin 2.',
        imageUrl: '/steps/s62-step1.jpg',
        tip: 'The module has a potentiometer to adjust sensitivity.'
      },
      {
        stepNumber: 2,
        title: 'Read Baseline',
        instruction: 'Print analogRead(A0) to Serial. Note quiet room level. Clap and note the spike value.',
        imageUrl: '/steps/s62-step2.jpg',
        tip: 'Quiet room might read 300-400. A clap might spike to 700+.'
      },
      {
        stepNumber: 3,
        title: 'Write Toggle Logic',
        instruction: 'If sound exceeds threshold, toggle LED state. Add a 300ms debounce delay to prevent double triggers.',
        imageUrl: '/steps/s62-step3.jpg',
        tip: 'Use a boolean variable to track current LED state.'
      },
      {
        stepNumber: 4,
        title: 'Double-Clap Detection',
        instruction: 'Detect two claps within 500ms. First clap starts a timer. If second clap arrives within the window, toggle the LED.',
        imageUrl: '/steps/s62-step4.jpg',
        tip: 'This reduces false triggers from random noise.'
      }
    ],

    explanation: {
      simple: 'The sound sensor converts sound waves into an electrical signal. Loud sounds like claps create big spikes. Your code watches for these spikes and toggles the LED.',
      scientific: 'The KY-038 uses a condenser microphone that converts acoustic pressure waves into analog voltage variations. The comparator circuit provides a digital threshold output. Debouncing prevents multiple triggers from echo and ringing.',
      keyTerms: [
        { term: 'Condenser Microphone', definition: 'A microphone that uses capacitance changes to detect sound' },
        { term: 'Debounce', definition: 'Ignoring additional triggers for a short period after the first detection' },
        { term: 'Threshold Detection', definition: 'Triggering an action when a value exceeds a set level' }
      ]
    },

    experiment: {
      hypothesis: 'Double-clap detection will have fewer false triggers than single-clap detection.',
      variables: {
        independent: 'Detection method (single vs double clap)',
        dependent: 'False trigger rate',
        controlled: 'Threshold value, sensor position, room noise level'
      },
      dataTable: {
        columns: ['Method', 'True Triggers (of 10)', 'False Triggers', 'Accuracy (%)'],
        rows: [
          ['Single clap', '___', '___', '___'],
          ['Double clap', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Debouncing prevents:', options: ['Sound detection', 'Multiple false triggers', 'LED from lighting', 'Power consumption'], correctIndex: 1 },
      { question: 'A clap produces a:', options: ['Constant signal', 'Short analog spike', 'Digital square wave', 'No signal'], correctIndex: 1 },
      { question: 'The potentiometer on KY-038 adjusts:', options: ['Volume output', 'Detection sensitivity', 'Power supply', 'LED color'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s62-clap-switch.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20sound%20sensor%20clap%20switch',
    safetyInstructions: ['Adjust sensitivity to avoid false triggers', 'Keep sensor away from speakers']
  },

  {
    levelNumber: 63,
    id: 'scientist-63',
    title: 'Automated Plant Watering',
    subtitle: 'Keep plants alive with code',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Automation',

    overview: 'Build a system that reads soil moisture and automatically waters a plant when the soil is too dry using a pump and relay.',

    learningObjectives: [
      'Calibrate a soil moisture sensor',
      'Control a water pump via relay',
      'Implement safe watering with time limits'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Soil Moisture Sensor', imageUrl: '/materials/soil-sensor.jpg' },
      { name: 'Relay Module (5V)', imageUrl: '/materials/relay-2ch.jpg' },
      { name: 'Water Pump (5V submersible)', imageUrl: '/materials/water-pump.jpg' },
      { name: 'LEDs (Red, Green)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Small Plant Pot with Soil', imageUrl: '/materials/plant-pot.jpg' },
      { name: 'Plastic Bottle (water reservoir)', imageUrl: '/materials/plastic-bottle.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Battery Holder + AA Batteries', imageUrl: '/materials/battery-holder-4aa.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Calibrate Sensor',
        instruction: 'Read sensor values in dry air (highest reading), dry soil, damp soil, and water-saturated soil. Record all values.',
        imageUrl: '/steps/s63-step1.jpg',
        tip: 'Typical range: dry air ~1023, saturated soil ~300. Map to a 0-100% moisture scale.'
      },
      {
        stepNumber: 2,
        title: 'Wire Relay and Pump',
        instruction: 'Connect relay signal to pin 7. Connect pump through relay NO and COM terminals. Pump powered by separate battery.',
        imageUrl: '/steps/s63-step2.jpg',
        tip: 'Add a flyback diode across the relay coil for protection.'
      },
      {
        stepNumber: 3,
        title: 'Write Watering Logic',
        instruction: 'If moisture < 30%: activate relay (pump ON) for 3 seconds, then wait 60 seconds before re-checking. Display status on LCD.',
        imageUrl: '/steps/s63-step3.jpg',
        tip: 'The wait period allows water to soak in before rechecking prevents overwatering.'
      },
      {
        stepNumber: 4,
        title: 'Add Safety Limits',
        instruction: 'Maximum 3 watering cycles per hour. If moisture does not rise after 3 cycles, show error on LCD (possible sensor or pump failure).',
        imageUrl: '/steps/s63-step4.jpg',
        tip: 'Green LED = soil OK. Red LED = needs water or error.'
      }
    ],

    explanation: {
      simple: 'The moisture sensor tells Arduino how wet the soil is. When it is too dry, Arduino turns on the water pump for a few seconds. It checks again later and repeats if needed.',
      scientific: 'The soil moisture sensor measures electrical conductivity between two probes. Wetter soil conducts more, lowering resistance. The relay provides galvanic isolation between the logic circuit and pump motor. Timed watering with soak periods implements a hysteresis control strategy.',
      keyTerms: [
        { term: 'Hysteresis Control', definition: 'Using different on/off thresholds to prevent rapid switching' },
        { term: 'Soak Period', definition: 'Wait time after watering to let water distribute through soil' },
        { term: 'Fail-Safe', definition: 'A limit that prevents damage if something goes wrong' }
      ]
    },

    experiment: {
      hypothesis: 'Automated watering will maintain soil moisture within 30-70% range consistently.',
      variables: {
        independent: 'Watering duration and threshold',
        dependent: 'Soil moisture level over 24 hours',
        controlled: 'Plant type, soil type, reservoir volume'
      },
      dataTable: {
        columns: ['Hour', 'Moisture (%)', 'Pump Activated?', 'Duration (s)', 'Notes'],
        rows: [
          ['0', '___', '___', '___', 'Start'],
          ['4', '___', '___', '___', '___'],
          ['8', '___', '___', '___', '___'],
          ['12', '___', '___', '___', '___'],
          ['24', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Why wait after watering before re-checking?', options: ['To save power', 'To let water soak into soil', 'To reset the sensor', 'No reason'], correctIndex: 1 },
      { question: 'A fail-safe limit prevents:', options: ['Watering at all', 'Overwatering or pump damage', 'Sensor reading', 'LCD display'], correctIndex: 1 },
      { question: 'Wet soil has _____ resistance:', options: ['Higher', 'Lower', 'Same', 'Zero'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s63-plant-water.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20automatic%20plant%20watering%20system',
    safetyInstructions: ['Keep electronics away from water', 'Use waterproof connections for the pump', 'Never leave unattended for extended periods without testing', 'Use low-voltage pump only']
  },

  {
    levelNumber: 64,
    id: 'scientist-64',
    title: 'RFID Access Control',
    subtitle: 'Scan cards to unlock',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Security Systems',

    overview: 'Build an RFID-based access control system that reads card UIDs and grants or denies access with a servo lock.',

    learningObjectives: [
      'Wire and initialize the RC522 RFID module',
      'Read card/tag UIDs',
      'Compare UIDs against an authorized list'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'RFID Module (RC522) + Cards', imageUrl: '/materials/rfid.jpg' },
      { name: 'Servo Motor (SG90)', imageUrl: '/materials/servo.jpg' },
      { name: 'LEDs (Red, Green)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Resistors (220 ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire RC522',
        instruction: 'SDA to pin 10, SCK to pin 13, MOSI to pin 11, MISO to pin 12, RST to pin 9, VCC to 3.3V, GND to GND.',
        imageUrl: '/steps/s64-step1.jpg',
        tip: 'RC522 operates at 3.3V — do not connect VCC to 5V!'
      },
      {
        stepNumber: 2,
        title: 'Read Card UIDs',
        instruction: 'Install MFRC522 library. Upload the DumpInfo example. Scan cards and record their UID bytes.',
        imageUrl: '/steps/s64-step2.jpg',
        tip: 'Each card has a unique 4-byte UID like "A3 B2 C1 D0".'
      },
      {
        stepNumber: 3,
        title: 'Build Access Logic',
        instruction: 'Store authorized UIDs in an array. When a card is scanned, compare to the list. Match = access granted (servo opens, green LED, LCD shows "Welcome"). No match = denied (red LED, buzzer, LCD shows "Access Denied").',
        imageUrl: '/steps/s64-step3.jpg',
        tip: 'Auto-lock after 3 seconds by returning servo to closed position.'
      },
      {
        stepNumber: 4,
        title: 'Add Logging',
        instruction: 'Print each access attempt with UID, result (granted/denied), and timestamp to Serial Monitor.',
        imageUrl: '/steps/s64-step4.jpg',
        tip: 'This creates a simple access log for review.'
      }
    ],

    explanation: {
      simple: 'Each RFID card has a unique code embedded in it. When you hold it near the reader, the code is sent wirelessly. If it matches an authorized code, the door unlocks.',
      scientific: 'RFID (Radio Frequency Identification) uses electromagnetic coupling at 13.56 MHz to power passive tags and read their stored UID. The RC522 communicates with Arduino via SPI protocol to transmit the tag data.',
      keyTerms: [
        { term: 'RFID', definition: 'Radio Frequency Identification — wireless identification using radio waves' },
        { term: 'UID', definition: 'Unique Identifier — a specific code stored in each RFID tag' },
        { term: 'SPI', definition: 'Serial Peripheral Interface — a fast synchronous communication protocol' }
      ]
    },

    experiment: {
      hypothesis: 'The system will correctly accept authorized cards and reject unauthorized ones with 100% accuracy.',
      variables: {
        independent: 'Card UID (authorized vs unauthorized)',
        dependent: 'System response (grant/deny)',
        controlled: 'Reader distance, card type, code logic'
      },
      dataTable: {
        columns: ['Card', 'UID', 'Authorized?', 'System Response', 'Correct?'],
        rows: [
          ['Card A', '___', 'Yes', '___', '___'],
          ['Card B', '___', 'Yes', '___', '___'],
          ['Card C', '___', 'No', '___', '___'],
          ['Card D', '___', 'No', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'RFID operates at:', options: ['2.4 GHz', '13.56 MHz', '433 MHz', '900 MHz'], correctIndex: 1 },
      { question: 'RC522 communicates via:', options: ['I2C', 'UART', 'SPI', 'Bluetooth'], correctIndex: 2 },
      { question: 'RC522 VCC should be:', options: ['5V', '3.3V', '9V', '12V'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s64-rfid.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20RFID%20RC522%20access%20control',
    safetyInstructions: ['Connect RC522 to 3.3V only', 'Handle RFID cards gently', 'Do not bend or scratch the antenna coil']
  },

  {
    levelNumber: 65,
    id: 'scientist-65',
    title: 'Data Logging to SD Card',
    subtitle: 'Save sensor data permanently',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Data Systems',

    overview: 'Log temperature and light readings to an SD card with timestamps from an RTC module for offline data analysis.',

    learningObjectives: [
      'Wire and use a micro SD card module',
      'Read real time from a DS3231 RTC',
      'Write CSV data to a file on the SD card'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Micro SD Card Module + Card', imageUrl: '/materials/sd-module.jpg' },
      { name: 'RTC Module (DS3231)', imageUrl: '/materials/rtc.jpg' },
      { name: 'DHT11 Temperature & Humidity Sensor', imageUrl: '/materials/dht11.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'Resistor (10k ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Set RTC Time',
        instruction: 'Wire DS3231 via I2C (SDA to A4, SCL to A5). Install RTClib. Upload a sketch to set current time.',
        imageUrl: '/steps/s65-step1.jpg',
        tip: 'The RTC has a coin battery so it keeps time even when Arduino is off.'
      },
      {
        stepNumber: 2,
        title: 'Wire SD Module',
        instruction: 'CS to pin 4, SCK to pin 13, MOSI to pin 11, MISO to pin 12, VCC to 5V, GND to GND.',
        imageUrl: '/steps/s65-step2.jpg',
        tip: 'Format the SD card as FAT16 or FAT32 before use.'
      },
      {
        stepNumber: 3,
        title: 'Wire Sensors',
        instruction: 'DHT11 data pin to pin 2 with 4.7k pull-up resistor. LDR divider to A0.',
        imageUrl: '/steps/s65-step3.jpg',
        tip: 'Install the DHT library for easy temperature and humidity reading.'
      },
      {
        stepNumber: 4,
        title: 'Write Logger Code',
        instruction: 'Every 30 seconds: read RTC time, read temp, humidity, light. Open file "log.csv" in append mode. Write CSV row. Close file.',
        imageUrl: '/steps/s65-step4.jpg',
        tip: 'Always close the file after writing to prevent data corruption.'
      }
    ],

    explanation: {
      simple: 'Your Arduino records sensor data with real timestamps onto an SD card. You can remove the card, put it in a computer, and analyze hours or days of data.',
      scientific: 'The DS3231 RTC provides accurate timestamps via I2C. The SD card module uses SPI to write to a FAT file system. CSV format enables direct import into spreadsheet software for statistical analysis and visualization.',
      keyTerms: [
        { term: 'RTC', definition: 'Real-Time Clock — a chip that keeps accurate time with battery backup' },
        { term: 'FAT File System', definition: 'File Allocation Table — a common file system format for removable media' },
        { term: 'Data Logging', definition: 'Automatically recording measurements at regular intervals for later analysis' }
      ]
    },

    experiment: {
      hypothesis: 'The SD logger will capture a complete 24-hour temperature profile showing day/night variation.',
      variables: {
        independent: 'Time of day',
        dependent: 'Temperature, humidity, and light readings',
        controlled: 'Sampling interval, sensor types, location'
      },
      dataTable: {
        columns: ['Time', 'Temp (C)', 'Humidity (%)', 'Light (0-1023)', 'File Size (KB)'],
        rows: [
          ['Start', '___', '___', '___', '___'],
          ['+6h', '___', '___', '___', '___'],
          ['+12h', '___', '___', '___', '___'],
          ['+18h', '___', '___', '___', '___'],
          ['+24h', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'RTC stands for:', options: ['Real-Time Calculator', 'Real-Time Clock', 'Remote Terminal Computer', 'Radio Transmit Channel'], correctIndex: 1 },
      { question: 'Why close the file after each write?', options: ['To save power', 'To prevent data corruption', 'To delete old data', 'It is not necessary'], correctIndex: 1 },
      { question: 'CSV stands for:', options: ['Computer System Variable', 'Comma-Separated Values', 'Central Storage Volume', 'Common Sensor Values'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s65-sd-logger.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20SD%20card%20data%20logger%20RTC',
    safetyInstructions: ['Format SD card before first use', 'Do not remove SD card while writing', 'Handle SD module gently']
  },

  {
    levelNumber: 66,
    id: 'scientist-66',
    title: 'RGB LED Color Mixing',
    subtitle: 'Create any color with code',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 40,
    category: 'Optics & Electronics',

    overview: 'Use an RGB LED with PWM to mix colors and create a color-cycling mood light.',

    learningObjectives: [
      'Understand additive color mixing (RGB)',
      'Control three PWM channels independently',
      'Create smooth color transitions'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'RGB LED (Common Cathode)', imageUrl: '/materials/rgb-led.jpg' },
      { name: 'Resistors (220 ohm x3)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire RGB LED',
        instruction: 'Common cathode to GND. Red pin to pin 9 (via 220 ohm), Green to pin 10, Blue to pin 11. All PWM-capable.',
        imageUrl: '/steps/s66-step1.jpg',
        tip: 'The longest leg of a common cathode RGB LED is the cathode (GND).'
      },
      {
        stepNumber: 2,
        title: 'Primary Colors',
        instruction: 'Set Red=255,G=0,B=0 for pure red. Then pure green (0,255,0) and pure blue (0,0,255).',
        imageUrl: '/steps/s66-step2.jpg',
        tip: 'Use analogWrite() for each channel independently.'
      },
      {
        stepNumber: 3,
        title: 'Mix Colors',
        instruction: 'Yellow = R255+G255. Cyan = G255+B255. Magenta = R255+B255. White = all 255.',
        imageUrl: '/steps/s66-step3.jpg',
        tip: 'Any color can be made by mixing different amounts of R, G, and B.'
      },
      {
        stepNumber: 4,
        title: 'Rainbow Cycle',
        instruction: 'Write a function that smoothly transitions through all colors using sin() waves or linear interpolation.',
        imageUrl: '/steps/s66-step4.jpg',
        tip: 'Use a counter variable and map it to RGB values in a continuous loop.'
      }
    ],

    explanation: {
      simple: 'Red, green, and blue light mix together to create any color. By changing the brightness of each, you can make yellow, purple, white, or anything in between.',
      scientific: 'Additive color mixing combines light wavelengths. The human eye perceives the sum of R (620-750nm), G (495-570nm), and B (450-495nm) intensities. PWM controls perceived brightness via duty cycle at each wavelength.',
      keyTerms: [
        { term: 'Additive Color Mixing', definition: 'Combining light of different colors to create new colors' },
        { term: 'RGB', definition: 'Red, Green, Blue — the three primary colors of light' },
        { term: 'Common Cathode', definition: 'An RGB LED where all LEDs share a common negative pin' }
      ]
    },

    experiment: {
      hypothesis: 'Mixing R=255 and G=255 will produce yellow light.',
      variables: {
        independent: 'RGB values (0-255 each)',
        dependent: 'Perceived color',
        controlled: 'LED type, resistor values, viewing distance'
      },
      dataTable: {
        columns: ['R', 'G', 'B', 'Expected Color', 'Observed Color'],
        rows: [
          ['255', '0', '0', 'Red', '___'],
          ['0', '255', '0', 'Green', '___'],
          ['0', '0', '255', 'Blue', '___'],
          ['255', '255', '0', 'Yellow', '___'],
          ['255', '0', '255', 'Magenta', '___'],
          ['0', '255', '255', 'Cyan', '___'],
          ['255', '255', '255', 'White', '___']
        ]
      }
    },

    quiz: [
      { question: 'Red + Green light makes:', options: ['Orange', 'Yellow', 'Purple', 'Brown'], correctIndex: 1 },
      { question: 'All three colors at full brightness make:', options: ['Black', 'Gray', 'White', 'Brown'], correctIndex: 2 },
      { question: 'Additive mixing uses:', options: ['Paint pigments', 'Light wavelengths', 'Sound waves', 'Chemicals'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s66-rgb.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20RGB%20LED%20color%20mixing%20PWM',
    safetyInstructions: ['Use current-limiting resistors for each LED channel', 'Do not stare at bright LEDs directly']
  },

  {
    levelNumber: 67,
    id: 'scientist-67',
    title: 'Air Quality Monitor',
    subtitle: 'Detect pollution levels',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '55 minutes',
    xpReward: 55,
    category: 'Environmental Science',

    overview: 'Use the MQ-135 gas sensor to measure air quality and display an Air Quality Index (AQI) with alerts.',

    learningObjectives: [
      'Understand gas sensor operation and warm-up',
      'Read and interpret air quality values',
      'Create an AQI classification system'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'MQ-135 Air Quality Sensor', imageUrl: '/materials/mq135.jpg' },
      { name: 'OLED Display', imageUrl: '/materials/oled.jpg' },
      { name: 'LEDs (Green, Yellow, Red)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'Resistors (220 ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire MQ-135',
        instruction: 'VCC to 5V, GND to GND, A0 to Arduino A0. Allow 24-hour burn-in period for new sensors or at least 5 minutes warm-up.',
        imageUrl: '/steps/s67-step1.jpg',
        tip: 'The sensor heater gets hot — this is normal and necessary for operation.'
      },
      {
        stepNumber: 2,
        title: 'Read Baseline',
        instruction: 'In clean air, read the analog value. This is your baseline. Values above baseline indicate pollution.',
        imageUrl: '/steps/s67-step2.jpg',
        tip: 'Take an average of 100 readings for a stable baseline.'
      },
      {
        stepNumber: 3,
        title: 'Create AQI Scale',
        instruction: 'Map sensor values to categories: Good (green), Moderate (yellow), Unhealthy (red). Display on OLED with a bar graph.',
        imageUrl: '/steps/s67-step3.jpg',
        tip: 'Example: baseline to +50 = Good, +50 to +150 = Moderate, +150 = Unhealthy.'
      },
      {
        stepNumber: 4,
        title: 'Test with Sources',
        instruction: 'Test with different sources: clean air, near a marker pen, near cooking fumes (from a safe distance), outside. Record values.',
        imageUrl: '/steps/s67-step4.jpg',
        tip: 'Never expose the sensor to direct flames or heavy fumes.'
      }
    ],

    explanation: {
      simple: 'The gas sensor detects invisible pollutants in the air. It shows how clean or dirty the air is, like a thermometer but for air quality.',
      scientific: 'The MQ-135 uses a tin dioxide (SnO2) semiconductor whose conductivity increases in the presence of target gases (CO2, NH3, benzene). The analog output voltage changes proportionally to gas concentration. Proper calibration requires stable baseline readings in clean air.',
      keyTerms: [
        { term: 'AQI', definition: 'Air Quality Index — a standardized scale for reporting air pollution' },
        { term: 'MQ-135', definition: 'A semiconductor gas sensor for air quality monitoring' },
        { term: 'Baseline Calibration', definition: 'Establishing a reference reading in known clean conditions' }
      ]
    },

    experiment: {
      hypothesis: 'The sensor will detect higher readings near pollution sources than in clean outdoor air.',
      variables: {
        independent: 'Air source (clean, marker, cooking, outdoor)',
        dependent: 'Sensor analog reading and AQI category',
        controlled: 'Sensor warm-up time, distance, ventilation'
      },
      dataTable: {
        columns: ['Location', 'Analog Reading', 'Delta from Baseline', 'AQI Category', 'LED Color'],
        rows: [
          ['Clean room', '___', '___', '___', '___'],
          ['Near marker', '___', '___', '___', '___'],
          ['Kitchen', '___', '___', '___', '___'],
          ['Outdoor', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'MQ-135 detects:', options: ['Temperature', 'Sound', 'Air pollutant gases', 'Light'], correctIndex: 2 },
      { question: 'The sensor needs warm-up because:', options: ['It is decorative', 'The heater must reach operating temperature', 'It needs to cool down', 'It charges a battery'], correctIndex: 1 },
      { question: 'AQI stands for:', options: ['Automatic Quality Indicator', 'Air Quality Index', 'Analog Quantity Input', 'Arduino Quality Interface'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s67-air-quality.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20MQ135%20air%20quality%20monitor',
    safetyInstructions: ['The sensor heater gets hot — do not touch', 'Use in well-ventilated areas', 'Do not expose to flammable gases directly', 'Wear goggles if testing near fumes']
  },

  {
    levelNumber: 68,
    id: 'scientist-68',
    title: 'Heart Rate Monitor',
    subtitle: 'Measure your pulse electronically',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Biomedical Science',

    overview: 'Use a pulse sensor to detect heartbeats via a fingertip and calculate and display beats per minute (BPM) on an OLED.',

    learningObjectives: [
      'Understand photoplethysmography (PPG)',
      'Read and filter pulse sensor data',
      'Calculate BPM from inter-beat intervals'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Pulse Sensor', imageUrl: '/materials/pulse-sensor.jpg' },
      { name: 'OLED Display', imageUrl: '/materials/oled.jpg' },
      { name: 'LED (Red)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire Pulse Sensor',
        instruction: 'Signal (S) to A0, VCC to 5V (or 3.3V), GND to GND. Place your fingertip on the sensor.',
        imageUrl: '/steps/s68-step1.jpg',
        tip: 'Do not press too hard — light pressure gives the best reading.'
      },
      {
        stepNumber: 2,
        title: 'Visualize Raw Signal',
        instruction: 'Use Serial Plotter (Tools > Serial Plotter) to see the pulse waveform. You should see a rhythmic wave.',
        imageUrl: '/steps/s68-step2.jpg',
        tip: 'Hold your hand steady. Movement creates noise in the signal.'
      },
      {
        stepNumber: 3,
        title: 'Detect Heartbeats',
        instruction: 'Find the threshold for a heartbeat peak. When signal crosses above threshold, record the time. Calculate BPM = 60000 / interval_ms.',
        imageUrl: '/steps/s68-step3.jpg',
        tip: 'Use a running average of the last 5 intervals for stable BPM.'
      },
      {
        stepNumber: 4,
        title: 'Display on OLED',
        instruction: 'Show BPM number and a heart icon that pulses with each beat. Flash an LED in sync with heartbeats.',
        imageUrl: '/steps/s68-step4.jpg',
        tip: 'Draw a small heart shape using OLED graphics functions.'
      }
    ],

    explanation: {
      simple: 'The sensor shines light into your fingertip. With each heartbeat, more blood flows, which changes how much light is absorbed. The sensor detects this tiny change.',
      scientific: 'Photoplethysmography (PPG) uses an optical sensor to detect volumetric changes in blood flow. An LED illuminates the tissue, and a photodetector measures reflected light. Arterial pulsation modulates the optical signal at the heart rate frequency.',
      keyTerms: [
        { term: 'PPG', definition: 'Photoplethysmography — optical measurement of blood volume changes' },
        { term: 'BPM', definition: 'Beats Per Minute — the heart rate measurement' },
        { term: 'Inter-Beat Interval (IBI)', definition: 'Time between consecutive heartbeats in milliseconds' }
      ]
    },

    experiment: {
      hypothesis: 'BPM will increase after physical activity compared to resting state.',
      variables: {
        independent: 'Physical activity level (resting vs after exercise)',
        dependent: 'Measured BPM',
        controlled: 'Sensor position, measurement duration, subject'
      },
      dataTable: {
        columns: ['Condition', 'BPM Reading 1', 'BPM Reading 2', 'BPM Reading 3', 'Average BPM'],
        rows: [
          ['Resting (seated)', '___', '___', '___', '___'],
          ['After 10 jumping jacks', '___', '___', '___', '___'],
          ['After 30 jumping jacks', '___', '___', '___', '___'],
          ['After 2 min rest', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'PPG measures:', options: ['Temperature', 'Blood volume changes via light', 'Sound waves', 'Electrical resistance'], correctIndex: 1 },
      { question: 'Normal resting BPM for a child is:', options: ['20-40', '60-100', '150-200', '200-300'], correctIndex: 1 },
      { question: 'BPM = 60000 divided by:', options: ['Heart rate', 'Inter-beat interval in ms', 'Sensor voltage', 'Number of beats'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s68-heart-rate.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20pulse%20sensor%20heart%20rate%20BPM',
    safetyInstructions: ['This is NOT a medical device — for educational use only', 'Apply light pressure on the sensor', 'Keep hands clean and dry']
  },

  {
    levelNumber: 69,
    id: 'scientist-69',
    title: 'Sensor Calibration Lab',
    subtitle: 'Make measurements accurate',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Measurement Science',

    overview: 'Learn proper calibration techniques by comparing your sensor readings against known reference values and applying correction factors.',

    learningObjectives: [
      'Understand calibration and accuracy',
      'Perform two-point linear calibration',
      'Calculate and apply correction factors'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'DHT11 Temperature Sensor', imageUrl: '/materials/dht11.jpg' },
      { name: 'Multimeter (as reference)', imageUrl: '/materials/multimeter.jpg' },
      { name: 'LCD Display (16x2 I2C)', imageUrl: '/materials/lcd.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Collect Reference Data',
        instruction: 'Use a calibrated thermometer or multimeter as a reference. Record both sensor reading and reference reading at room temperature.',
        imageUrl: '/steps/s69-step1.jpg',
        tip: 'Wait for both instruments to stabilize before recording.'
      },
      {
        stepNumber: 2,
        title: 'Multiple Points',
        instruction: 'Take readings at different temperatures: room temp, near a cold surface, and near a warm surface. Record sensor vs reference for each.',
        imageUrl: '/steps/s69-step2.jpg',
        tip: 'Three or more points give a better calibration curve.'
      },
      {
        stepNumber: 3,
        title: 'Calculate Correction',
        instruction: 'Find the error at each point (sensor - reference). Calculate the average offset. Apply it in code: correctedTemp = rawTemp + offset.',
        imageUrl: '/steps/s69-step3.jpg',
        tip: 'For a linear correction: corrected = slope * raw + offset (two-point calibration).'
      },
      {
        stepNumber: 4,
        title: 'Verify Calibration',
        instruction: 'Take new readings with the correction applied. Compare to the reference again. The error should be much smaller.',
        imageUrl: '/steps/s69-step4.jpg',
        tip: 'Display both raw and corrected values on the LCD for comparison.'
      }
    ],

    explanation: {
      simple: 'Sensors are not perfectly accurate out of the box. Calibration compares your sensor to a known-good reference and adjusts the readings to be more accurate.',
      scientific: 'Two-point linear calibration establishes a linear transfer function y = mx + b by measuring sensor output at two known reference values. This corrects for offset and gain errors in the sensor signal chain.',
      keyTerms: [
        { term: 'Calibration', definition: 'Adjusting a sensor to match a known reference standard' },
        { term: 'Offset Error', definition: 'A constant difference between sensor reading and true value' },
        { term: 'Gain Error', definition: 'A proportional error that grows with the measured value' },
        { term: 'Transfer Function', definition: 'The mathematical relationship between input and corrected output' }
      ]
    },

    experiment: {
      hypothesis: 'Applying a calibration correction will reduce measurement error by more than 50%.',
      variables: {
        independent: 'Calibration state (raw vs corrected)',
        dependent: 'Measurement error vs reference',
        controlled: 'Reference instrument, sensor model, environment'
      },
      dataTable: {
        columns: ['Reference (C)', 'Raw Sensor (C)', 'Error (C)', 'Corrected (C)', 'New Error (C)'],
        rows: [
          ['___', '___', '___', '___', '___'],
          ['___', '___', '___', '___', '___'],
          ['___', '___', '___', '___', '___'],
          ['___', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Calibration compares sensor readings to:', options: ['Random values', 'A known reference standard', 'Another uncalibrated sensor', 'The internet'], correctIndex: 1 },
      { question: 'Offset error is:', options: ['Variable', 'A constant shift in all readings', 'Only at high values', 'Not fixable'], correctIndex: 1 },
      { question: 'Two-point calibration uses:', options: ['One measurement', 'Two reference measurements', 'No measurements', 'Only software'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s69-calibration.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=sensor%20calibration%20tutorial%20Arduino',
    safetyInstructions: ['Handle reference instruments carefully', 'Do not expose sensors to extreme conditions during calibration']
  },

  {
    levelNumber: 70,
    id: 'scientist-70',
    title: 'Smart Greenhouse System',
    subtitle: 'Module 7 capstone project',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '120 minutes',
    xpReward: 85,
    category: 'Capstone Project',

    overview: 'Build a complete smart greenhouse that monitors temperature, humidity, soil moisture, and light, automatically waters plants, controls ventilation, displays data, and logs to SD card.',

    learningObjectives: [
      'Integrate 4+ sensors into one automated system',
      'Implement multi-condition automation logic',
      'Log data with timestamps for long-term analysis'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'DHT11 Temperature & Humidity', imageUrl: '/materials/dht11.jpg' },
      { name: 'Soil Moisture Sensor', imageUrl: '/materials/soil-sensor.jpg' },
      { name: 'LDR', imageUrl: '/materials/ldr.jpg' },
      { name: 'Water Pump + Relay', imageUrl: '/materials/water-pump.jpg' },
      { name: 'DC Motor Fan + Relay', imageUrl: '/materials/dc-fan.jpg' },
      { name: 'Servo Motor (vent control)', imageUrl: '/materials/servo.jpg' },
      { name: 'OLED Display', imageUrl: '/materials/oled.jpg' },
      { name: 'SD Card Module + RTC', imageUrl: '/materials/sd-module.jpg' },
      { name: 'LEDs and Buzzer', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Plant Pot with Soil and Seeds', imageUrl: '/materials/plant-pot.jpg' },
      { name: 'Breadboard + Wires', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'System Design',
        instruction: 'Draw a complete system diagram with all sensors, actuators, display, and data storage. Define all thresholds and automation rules.',
        imageUrl: '/steps/s70-step1.jpg',
        tip: 'Rules: Temp>30=fan ON. Moisture<30%=pump ON. Light<200=LED grow light ON.'
      },
      {
        stepNumber: 2,
        title: 'Wire All Components',
        instruction: 'DHT11 to pin 2, soil sensor to A0, LDR divider to A1, pump relay to pin 5, fan relay to pin 6, servo to pin 9, OLED via I2C, SD module via SPI.',
        imageUrl: '/steps/s70-step2.jpg',
        tip: 'I2C and SPI can coexist — they use different pins.'
      },
      {
        stepNumber: 3,
        title: 'Write Automation Code',
        instruction: 'Create separate functions for each subsystem: checkTemperature(), checkMoisture(), checkLight(), updateDisplay(), logData(). Call all in loop with appropriate timing.',
        imageUrl: '/steps/s70-step3.jpg',
        tip: 'Use millis() for non-blocking timing so all systems run smoothly.'
      },
      {
        stepNumber: 4,
        title: 'Test Each Subsystem',
        instruction: 'Test each automation rule independently before combining. Verify watering, fan activation, and vent control.',
        imageUrl: '/steps/s70-step4.jpg',
        tip: 'Simulate conditions: cover LDR, warm DHT11, dry the soil.'
      },
      {
        stepNumber: 5,
        title: 'Run and Document',
        instruction: 'Run the system for 3+ days. Analyze logged data. Write a complete report with circuit diagram, flowchart, data analysis, and conclusions.',
        imageUrl: '/steps/s70-step5.jpg',
        tip: 'Create graphs from the SD card CSV data showing temperature, moisture, and light over time.'
      }
    ],

    explanation: {
      simple: 'Your smart greenhouse is a mini automated farm. It senses the environment, makes decisions, takes actions, and records everything — all by itself.',
      scientific: 'This system implements multi-variable closed-loop control with independent feedback paths for temperature, moisture, and light. Non-blocking scheduling ensures responsive real-time operation. Persistent logging enables post-hoc analysis of environmental trends and system performance.',
      keyTerms: [
        { term: 'Multi-Variable Control', definition: 'Controlling multiple independent parameters simultaneously' },
        { term: 'Non-Blocking Code', definition: 'Code that checks conditions without pausing the entire program' },
        { term: 'Post-Hoc Analysis', definition: 'Analyzing recorded data after the experiment to draw conclusions' }
      ]
    },

    experiment: {
      hypothesis: 'The automated greenhouse will maintain optimal growing conditions (temp 20-30C, moisture 40-70%, adequate light) without human intervention.',
      variables: {
        independent: 'Time (over 3 days)',
        dependent: 'Environmental conditions maintained within targets',
        controlled: 'Threshold values, plant type, greenhouse size'
      },
      dataTable: {
        columns: ['Day', 'Avg Temp', 'Avg Moisture', 'Avg Light', 'Pump Events', 'Fan Events', 'Plant Health'],
        rows: [
          ['1', '___', '___', '___', '___', '___', '___'],
          ['2', '___', '___', '___', '___', '___', '___'],
          ['3', '___', '___', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Non-blocking code uses:', options: ['delay()', 'millis() comparisons', 'while(true)', 'sleep()'], correctIndex: 1 },
      { question: 'How many independent control loops does this system have?', options: ['1', '2', '3 or more', 'None'], correctIndex: 2 },
      { question: 'Post-hoc analysis means:', options: ['Predicting the future', 'Analyzing data after collection', 'Deleting data', 'Real-time monitoring'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s70-greenhouse.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20smart%20greenhouse%20automated%20project',
    safetyInstructions: ['Keep water away from electronics', 'Use waterproof enclosures for sensors near soil', 'Monitor the system daily during first run', 'Disconnect power when modifying wiring'],

    completionMessage: 'Module 7 Complete! You are now an Innovation Master! You have built automated systems, smart devices, and data-driven projects. Next: Research Scientist!'
  },

  // ──────────────────────────────────────────
  // SECTION B: Research Scientist (Levels 71–80)
  // ──────────────────────────────────────────

  {
    levelNumber: 71,
    id: 'scientist-71',
    title: 'Pendulum Physics Lab',
    subtitle: 'Measure gravity with a string',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Physics Research',

    overview: 'Build a simple pendulum and use it to experimentally determine the acceleration due to gravity by measuring period vs length.',

    learningObjectives: [
      'Build and measure a simple pendulum',
      'Understand the relationship between length and period',
      'Calculate gravitational acceleration from data'
    ],

    materials: [
      { name: 'String (2m)', imageUrl: '/materials/string.jpg' },
      { name: 'Small weight (metal nut or bolt)', imageUrl: '/materials/weight.jpg' },
      { name: 'Ruler & Measuring Tape', imageUrl: '/materials/ruler.jpg' },
      { name: 'Stopwatch', imageUrl: '/materials/stopwatch.jpg' },
      { name: 'Protractor', imageUrl: '/materials/protractor.jpg' },
      { name: 'Support structure (doorframe or stand)', imageUrl: '/materials/stand.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Build Pendulum',
        instruction: 'Tie the weight to one end of the string. Attach the other end to a fixed support so it can swing freely.',
        imageUrl: '/steps/s71-step1.jpg',
        tip: 'Measure length from the pivot point to the center of the weight.'
      },
      {
        stepNumber: 2,
        title: 'Measure Period',
        instruction: 'Set string length to 25cm. Pull the weight to about 15 degrees and release. Time 10 complete swings. Divide by 10 for one period.',
        imageUrl: '/steps/s71-step2.jpg',
        tip: 'Timing 10 swings and dividing gives a more accurate period.'
      },
      {
        stepNumber: 3,
        title: 'Vary Length',
        instruction: 'Repeat with 50cm, 75cm, 100cm, and 125cm string lengths. Record all periods.',
        imageUrl: '/steps/s71-step3.jpg',
        tip: 'Keep the release angle the same for all trials.'
      },
      {
        stepNumber: 4,
        title: 'Calculate Gravity',
        instruction: 'Use the formula: g = 4 * pi^2 * L / T^2. Calculate g for each trial and find the average.',
        imageUrl: '/steps/s71-step4.jpg',
        tip: 'The accepted value is 9.81 m/s^2. How close did you get?'
      }
    ],

    explanation: {
      simple: 'A pendulum swings at a speed determined by its length and gravity. By measuring how long it takes to swing, you can calculate the strength of gravity.',
      scientific: 'For small angles, a simple pendulum has period T = 2 * pi * sqrt(L/g). Rearranging: g = 4 * pi^2 * L / T^2. This experiment demonstrates harmonic motion and provides an experimental measurement of gravitational acceleration.',
      keyTerms: [
        { term: 'Period (T)', definition: 'The time for one complete swing (back and forth)' },
        { term: 'Simple Harmonic Motion', definition: 'Periodic oscillation with a restoring force proportional to displacement' },
        { term: 'Gravitational Acceleration (g)', definition: 'The rate at which objects accelerate toward Earth, approximately 9.81 m/s^2' }
      ]
    },

    experiment: {
      hypothesis: 'Longer pendulums will have longer periods, and calculated g values will be close to 9.81 m/s^2.',
      variables: {
        independent: 'String length (L)',
        dependent: 'Period (T)',
        controlled: 'Release angle, weight type, timing method'
      },
      dataTable: {
        columns: ['Length (cm)', 'Time for 10 swings (s)', 'Period T (s)', 'T^2 (s^2)', 'Calculated g (m/s^2)'],
        rows: [
          ['25', '___', '___', '___', '___'],
          ['50', '___', '___', '___', '___'],
          ['75', '___', '___', '___', '___'],
          ['100', '___', '___', '___', '___'],
          ['125', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Pendulum period depends on:', options: ['Weight only', 'Color', 'Length and gravity', 'Temperature only'], correctIndex: 2 },
      { question: 'Doubling the length:', options: ['Doubles the period', 'Halves the period', 'Increases period by sqrt(2)', 'No change'], correctIndex: 2 },
      { question: 'Accepted value of g is approximately:', options: ['3.14 m/s^2', '6.67 m/s^2', '9.81 m/s^2', '15.0 m/s^2'], correctIndex: 2 }
    ],

    outputImageUrl: '/outputs/s71-pendulum.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=pendulum%20experiment%20calculate%20gravity',
    safetyInstructions: ['Ensure the support is stable', 'Keep clear of the swinging weight', 'Use small release angles only']
  },

  {
    levelNumber: 72,
    id: 'scientist-72',
    title: 'Plant Growth Experiment',
    subtitle: 'Controlled scientific study',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 min setup + 14 days observation',
    xpReward: 60,
    category: 'Biology Research',

    overview: 'Design and conduct a controlled experiment measuring how light conditions affect plant growth rate over two weeks.',

    learningObjectives: [
      'Design a controlled experiment with variables',
      'Collect quantitative data over time',
      'Analyze growth data and draw conclusions'
    ],

    materials: [
      { name: 'Small Plant Pots (x3)', imageUrl: '/materials/plant-pot.jpg' },
      { name: 'Fast-growing seeds (bean/mustard)', imageUrl: '/materials/seeds.jpg' },
      { name: 'Ruler', imageUrl: '/materials/ruler.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' },
      { name: 'Cardboard (for dark box)', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Magnifying Glass', imageUrl: '/materials/magnifying.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Design Experiment',
        instruction: 'Three groups: Full sunlight, Partial light (by a window with shade), Dark (covered box). Same soil, same water, same seeds.',
        imageUrl: '/steps/s72-step1.jpg',
        tip: 'The only difference between groups should be the light condition.'
      },
      {
        stepNumber: 2,
        title: 'Plant Seeds',
        instruction: 'Plant 3 seeds in each pot at the same depth. Water equally. Label pots: "Sun," "Partial," "Dark." Place in their locations.',
        imageUrl: '/steps/s72-step2.jpg',
        tip: 'Plant extra seeds in case some do not germinate.'
      },
      {
        stepNumber: 3,
        title: 'Daily Measurements',
        instruction: 'Every day: measure stem height (cm), count leaves, note color, water equally. Record all data in a table.',
        imageUrl: '/steps/s72-step3.jpg',
        tip: 'Take photos every day from the same angle for visual comparison.'
      },
      {
        stepNumber: 4,
        title: 'Analyze and Report',
        instruction: 'After 14 days, create growth charts. Compare the three groups. Write a conclusion about how light affects growth.',
        imageUrl: '/steps/s72-step4.jpg',
        tip: 'Calculate average growth rate: total height / number of days.'
      }
    ],

    explanation: {
      simple: 'Plants need light for photosynthesis. By giving plants different amounts of light and measuring their growth, you can prove how important light is.',
      scientific: 'This controlled experiment isolates the independent variable (light exposure) while controlling confounding variables (water, soil, seeds). Photosynthesis efficiency determines growth rate, as light energy drives carbon fixation. Plants in darkness exhibit etiolation — elongated, pale growth seeking light.',
      keyTerms: [
        { term: 'Controlled Experiment', definition: 'An experiment where only one variable changes while others stay constant' },
        { term: 'Photosynthesis', definition: 'The process plants use to convert light energy into chemical energy' },
        { term: 'Etiolation', definition: 'Abnormal plant growth in darkness — pale and elongated stems' }
      ]
    },

    experiment: {
      hypothesis: 'Plants in full sunlight will grow taller and greener than plants in partial light or darkness.',
      variables: {
        independent: 'Light exposure (full sun, partial, dark)',
        dependent: 'Plant height, leaf count, color',
        controlled: 'Water amount, soil type, seed type, pot size'
      },
      dataTable: {
        columns: ['Day', 'Sun Height (cm)', 'Partial Height (cm)', 'Dark Height (cm)', 'Notes'],
        rows: [
          ['1', '___', '___', '___', '___'],
          ['3', '___', '___', '___', '___'],
          ['5', '___', '___', '___', '___'],
          ['7', '___', '___', '___', '___'],
          ['10', '___', '___', '___', '___'],
          ['14', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'In this experiment, light is the:', options: ['Dependent variable', 'Independent variable', 'Controlled variable', 'Constant'], correctIndex: 1 },
      { question: 'Plants in darkness may show:', options: ['Dark green color', 'Etiolation (pale, elongated)', 'No change', 'Flowers'], correctIndex: 1 },
      { question: 'Why use multiple seeds per pot?', options: ['To waste seeds', 'In case some do not germinate', 'For decoration', 'To crowd the pot'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s72-plant-growth.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=plant%20growth%20light%20experiment%20science%20fair',
    safetyInstructions: ['Wash hands after handling soil', 'Do not eat the plants', 'Water carefully to avoid mold']
  },

  {
    levelNumber: 73,
    id: 'scientist-73',
    title: 'Rain Detector System',
    subtitle: 'Automated rain response',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Environmental Tech',

    overview: 'Build a rain detection system that senses water droplets and triggers a servo to close a window cover or retract a clothesline.',

    learningObjectives: [
      'Use a rain sensor module',
      'Implement automated physical response to rain',
      'Display rain status on OLED'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'Rain Sensor Module', imageUrl: '/materials/rain-sensor.jpg' },
      { name: 'Servo Motor', imageUrl: '/materials/servo.jpg' },
      { name: 'OLED Display', imageUrl: '/materials/oled.jpg' },
      { name: 'Buzzer', imageUrl: '/materials/buzzer.jpg' },
      { name: 'LEDs (Blue, Yellow)', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Wire Rain Sensor',
        instruction: 'Connect sensor board to controller module. Controller A0 to Arduino A0, D0 to pin 2, VCC to 5V, GND to GND.',
        imageUrl: '/steps/s73-step1.jpg',
        tip: 'The sensor board has conductive traces that change resistance when wet.'
      },
      {
        stepNumber: 2,
        title: 'Read Sensor',
        instruction: 'Print analog readings to Serial. Dry = high values (~1023). Wet = lower values. Calibrate your threshold.',
        imageUrl: '/steps/s73-step2.jpg',
        tip: 'Add a few water drops to simulate rain and note the value change.'
      },
      {
        stepNumber: 3,
        title: 'Add Servo Response',
        instruction: 'When rain detected: move servo to 90 degrees (close position), blue LED on, buzzer alert. When dry: servo to 0 degrees (open), yellow LED on.',
        imageUrl: '/steps/s73-step3.jpg',
        tip: 'Add a 5-second delay before reopening to avoid rapid toggling from intermittent drops.'
      },
      {
        stepNumber: 4,
        title: 'OLED Status Display',
        instruction: 'Show rain status, analog value, and a rain animation or sun icon on the OLED.',
        imageUrl: '/steps/s73-step4.jpg',
        tip: 'Use custom pixel art for rain drops and sun symbols.'
      }
    ],

    explanation: {
      simple: 'The rain sensor has metal tracks that water bridges, changing the electrical signal. When rain is detected, the servo automatically moves to close a cover, protecting things from getting wet.',
      scientific: 'The rain sensor board consists of nickel-plated conductive traces. Water droplets bridge adjacent traces, decreasing resistance. The control module compares this resistance against a potentiometer-set threshold, providing both analog and digital outputs.',
      keyTerms: [
        { term: 'Conductivity Detection', definition: 'Sensing the presence of water by measuring changes in electrical resistance' },
        { term: 'Hysteresis Delay', definition: 'A time delay to prevent rapid on-off switching from fluctuating sensor values' },
        { term: 'Automated Response', definition: 'A physical action taken by the system without human intervention' }
      ]
    },

    experiment: {
      hypothesis: 'The system will detect water drops within 1 second and activate the servo cover.',
      variables: {
        independent: 'Amount of water on sensor',
        dependent: 'Sensor value and servo response',
        controlled: 'Threshold setting, servo speed, delay time'
      },
      dataTable: {
        columns: ['Water Amount', 'Analog Value', 'Digital Output', 'Servo Position', 'Response Time (s)'],
        rows: [
          ['Dry', '___', '___', '0 (open)', '___'],
          ['1 drop', '___', '___', '___', '___'],
          ['3 drops', '___', '___', '___', '___'],
          ['Wet surface', '___', '___', '90 (closed)', '___']
        ]
      }
    },

    quiz: [
      { question: 'Rain sensor detects water by:', options: ['Temperature change', 'Conductivity between traces', 'Sound of rain', 'Weight of water'], correctIndex: 1 },
      { question: 'Hysteresis delay prevents:', options: ['Rain detection', 'Rapid toggling', 'Power consumption', 'OLED display'], correctIndex: 1 },
      { question: 'Dry sensor reads:', options: ['Low analog value', 'High analog value', 'Zero', 'Negative value'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s73-rain-detector.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=Arduino%20rain%20sensor%20servo%20project',
    safetyInstructions: ['Keep Arduino and electronics protected from water', 'Only the sensor board should get wet', 'Dry the sensor after testing']
  },

  {
    levelNumber: 74,
    id: 'scientist-74',
    title: 'Renewable Energy: Wind Power',
    subtitle: 'Generate electricity from wind',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Energy Science',

    overview: 'Build a simple wind turbine from a DC motor used as a generator, and measure the electricity produced at different wind speeds.',

    learningObjectives: [
      'Understand how generators convert motion to electricity',
      'Build a wind turbine from a DC motor',
      'Measure voltage output at different wind speeds'
    ],

    materials: [
      { name: 'DC Motor with Fan Blade', imageUrl: '/materials/dc-fan.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' },
      { name: 'Cardboard Sheets', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Plastic Bottle (for blades)', imageUrl: '/materials/plastic-bottle.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Build Turbine Blades',
        instruction: 'Cut a plastic bottle into 4-6 angled blade shapes. Attach to a hub that fits the motor shaft.',
        imageUrl: '/steps/s74-step1.jpg',
        tip: 'Angle the blades so wind pushes them in one direction.'
      },
      {
        stepNumber: 2,
        title: 'Mount Motor as Generator',
        instruction: 'Secure the motor with blades on a stand facing into the wind. Connect motor wires to a multimeter set to DC voltage.',
        imageUrl: '/steps/s74-step2.jpg',
        tip: 'A DC motor becomes a generator when spun externally — it outputs voltage.'
      },
      {
        stepNumber: 3,
        title: 'Measure Output',
        instruction: 'Blow on the blades (or use a fan at different distances). Record the voltage generated.',
        imageUrl: '/steps/s74-step3.jpg',
        tip: 'Faster wind = faster spin = more voltage.'
      },
      {
        stepNumber: 4,
        title: 'Light an LED',
        instruction: 'Connect an LED to the motor output. Spin the blades fast enough to light the LED.',
        imageUrl: '/steps/s74-step4.jpg',
        tip: 'You may need to spin quite fast — LEDs need about 1.8V minimum.'
      }
    ],

    explanation: {
      simple: 'When wind spins the motor backward, the motor becomes a generator and produces electricity. Faster wind means more electricity, just like real wind farms.',
      scientific: 'A DC motor contains magnets and coils. When the shaft is rotated externally, electromagnetic induction generates an EMF (voltage) across the terminals. Power output P = V * I increases with rotational speed, limited by mechanical friction and electrical resistance.',
      keyTerms: [
        { term: 'Generator', definition: 'A device that converts mechanical energy to electrical energy' },
        { term: 'Electromagnetic Induction', definition: 'Generating voltage by moving a conductor through a magnetic field' },
        { term: 'EMF', definition: 'Electromotive Force — the voltage generated by a source' }
      ]
    },

    experiment: {
      hypothesis: 'Higher wind speed will produce higher voltage output from the generator.',
      variables: {
        independent: 'Wind speed (fan distance or blow strength)',
        dependent: 'Voltage generated (V)',
        controlled: 'Motor type, blade design, measurement tool'
      },
      dataTable: {
        columns: ['Wind Source', 'Distance/Strength', 'Voltage (V)', 'LED Lit?', 'Blade RPM (est.)'],
        rows: [
          ['Gentle blow', 'Soft', '___', '___', '___'],
          ['Strong blow', 'Hard', '___', '___', '___'],
          ['Fan (far)', '1m', '___', '___', '___'],
          ['Fan (medium)', '50cm', '___', '___', '___'],
          ['Fan (close)', '25cm', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A DC motor can act as a:', options: ['Sensor only', 'Generator when spun externally', 'Battery', 'Capacitor'], correctIndex: 1 },
      { question: 'Electromagnetic induction requires:', options: ['Static magnets only', 'Relative motion between magnet and conductor', 'No magnets', 'Only AC power'], correctIndex: 1 },
      { question: 'Faster blade rotation produces:', options: ['Less voltage', 'More voltage', 'No change', 'More resistance'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s74-wind-turbine.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=DIY%20wind%20turbine%20DC%20motor%20generator',
    safetyInstructions: ['Keep fingers clear of spinning blades', 'Secure the turbine stand firmly', 'Do not use near small children']
  },

  {
    levelNumber: 75,
    id: 'scientist-75',
    title: 'Solar vs Battery Comparison',
    subtitle: 'Renewable energy efficiency',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Energy Science',

    overview: 'Compare the energy output of a small solar panel under different light conditions against a standard battery, analyzing efficiency and sustainability.',

    learningObjectives: [
      'Measure solar panel output under various conditions',
      'Compare solar energy to battery energy',
      'Calculate energy efficiency and cost'
    ],

    materials: [
      { name: 'Small Solar Panel (5V)', imageUrl: '/materials/solar-panel.jpg' },
      { name: 'AA Battery + Holder', imageUrl: '/materials/batteries.jpg' },
      { name: 'Multimeter', imageUrl: '/materials/multimeter.jpg' },
      { name: 'LED', imageUrl: '/materials/led-pack.jpg' },
      { name: 'Resistor (220 ohm)', imageUrl: '/materials/resistors.jpg' },
      { name: 'Stopwatch', imageUrl: '/materials/stopwatch.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Measure Solar Panel',
        instruction: 'Measure open-circuit voltage and short-circuit current of the solar panel in direct sunlight, shade, indoor light, and darkness.',
        imageUrl: '/steps/s75-step1.jpg',
        tip: 'Angle the panel directly at the light source for maximum output.'
      },
      {
        stepNumber: 2,
        title: 'Calculate Solar Power',
        instruction: 'Power = V x I for each condition. Record maximum power output.',
        imageUrl: '/steps/s75-step2.jpg',
        tip: 'Maximum power is not at open-circuit or short-circuit but in between.'
      },
      {
        stepNumber: 3,
        title: 'Measure Battery',
        instruction: 'Measure battery voltage under the same LED load. Calculate power: P = V x I.',
        imageUrl: '/steps/s75-step3.jpg',
        tip: 'A fresh AA battery reads about 1.5V. Under load it drops slightly.'
      },
      {
        stepNumber: 4,
        title: 'Compare and Analyze',
        instruction: 'Create a comparison table. Discuss which source is better for different scenarios. Consider cost, sustainability, and reliability.',
        imageUrl: '/steps/s75-step4.jpg',
        tip: 'Solar is free but intermittent. Batteries are reliable but depletable.'
      }
    ],

    explanation: {
      simple: 'Solar panels generate free electricity from sunlight, but only when the sun is shining. Batteries provide steady power but run out and must be replaced. Each has strengths and weaknesses.',
      scientific: 'Photovoltaic cells convert photon energy into electron flow via the photovoltaic effect. Maximum power point varies with irradiance. Battery capacity is measured in mAh. Total energy (Wh) allows comparison: Battery E = V * Ah. Solar E depends on irradiance duration.',
      keyTerms: [
        { term: 'Photovoltaic Effect', definition: 'Generation of voltage when light hits a semiconductor junction' },
        { term: 'Open-Circuit Voltage', definition: 'Maximum voltage with no load connected' },
        { term: 'Renewable Energy', definition: 'Energy from sources that are naturally replenished' }
      ]
    },

    experiment: {
      hypothesis: 'In direct sunlight, the solar panel will produce enough power to match the battery for lighting an LED.',
      variables: {
        independent: 'Energy source and light condition',
        dependent: 'Voltage, current, and power output',
        controlled: 'Load (LED + resistor), measurement tools'
      },
      dataTable: {
        columns: ['Source', 'Condition', 'Voltage (V)', 'Current (mA)', 'Power (mW)'],
        rows: [
          ['Solar', 'Direct sun', '___', '___', '___'],
          ['Solar', 'Shade', '___', '___', '___'],
          ['Solar', 'Indoor', '___', '___', '___'],
          ['Solar', 'Dark', '___', '___', '___'],
          ['Battery', 'Fresh AA', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Solar panels use the:', options: ['Thermoelectric effect', 'Photovoltaic effect', 'Piezoelectric effect', 'Magnetic effect'], correctIndex: 1 },
      { question: 'Solar energy is classified as:', options: ['Non-renewable', 'Renewable', 'Fossil fuel', 'Nuclear'], correctIndex: 1 },
      { question: 'Open-circuit voltage is measured with:', options: ['A load connected', 'No load connected', 'A short circuit', 'A motor running'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s75-solar-battery.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=solar%20panel%20vs%20battery%20experiment%20comparison',
    safetyInstructions: ['Do not short-circuit the solar panel for extended periods', 'Handle batteries properly', 'Do not stare at reflected sunlight']
  },

  {
    levelNumber: 76,
    id: 'scientist-76',
    title: 'Communication Protocols',
    subtitle: 'How devices talk to each other',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Digital Systems',

    overview: 'Compare I2C, SPI, and UART communication protocols by connecting different devices and measuring their characteristics.',

    learningObjectives: [
      'Understand I2C, SPI, and UART protocols',
      'Compare speed, wiring, and use cases',
      'Scan for I2C devices on the bus'
    ],

    materials: [
      { name: 'Arduino Uno', imageUrl: '/materials/arduino.jpg' },
      { name: 'USB Cable', imageUrl: '/materials/usb-cable.jpg' },
      { name: 'OLED Display (I2C)', imageUrl: '/materials/oled.jpg' },
      { name: 'SD Card Module (SPI)', imageUrl: '/materials/sd-module.jpg' },
      { name: 'Breadboard', imageUrl: '/materials/breadboard.jpg' },
      { name: 'Jumper Wires', imageUrl: '/materials/jumper-wires.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'I2C Scanner',
        instruction: 'Upload an I2C scanner sketch. Connect the OLED and RTC. See their addresses appear in Serial Monitor.',
        imageUrl: '/steps/s76-step1.jpg',
        tip: 'I2C uses only 2 wires (SDA, SCL) and can connect multiple devices.'
      },
      {
        stepNumber: 2,
        title: 'Compare SPI',
        instruction: 'Wire the SD card module (SPI). Note the 4 wires needed: MOSI, MISO, SCK, CS. Each device needs its own CS line.',
        imageUrl: '/steps/s76-step2.jpg',
        tip: 'SPI is faster than I2C but uses more pins.'
      },
      {
        stepNumber: 3,
        title: 'Compare UART',
        instruction: 'Observe Serial communication (UART) via USB. Note it uses TX and RX lines and is point-to-point.',
        imageUrl: '/steps/s76-step3.jpg',
        tip: 'Bluetooth modules (HC-05) use UART for wireless serial communication.'
      },
      {
        stepNumber: 4,
        title: 'Create Comparison Chart',
        instruction: 'Make a table comparing wires needed, speed, addressing, and best use cases for each protocol.',
        imageUrl: '/steps/s76-step4.jpg',
        tip: 'I2C = many devices, fewer wires. SPI = fast, more wires. UART = simple, point-to-point.'
      }
    ],

    explanation: {
      simple: 'Just like people use different languages, electronic devices use different communication protocols. Each has advantages: I2C uses few wires, SPI is fast, and UART is simple.',
      scientific: 'I2C is a multi-master, multi-slave synchronous protocol using 7-bit addressing over 2 wires. SPI is a full-duplex synchronous protocol with separate chip select lines. UART is asynchronous, using start/stop bits for frame synchronization.',
      keyTerms: [
        { term: 'I2C', definition: 'Inter-Integrated Circuit — 2-wire multi-device bus with addressing' },
        { term: 'SPI', definition: 'Serial Peripheral Interface — fast 4-wire full-duplex protocol' },
        { term: 'UART', definition: 'Universal Asynchronous Receiver-Transmitter — simple 2-wire serial' },
        { term: 'Protocol', definition: 'A set of rules for how devices communicate data' }
      ]
    },

    experiment: {
      hypothesis: 'SPI will transfer data faster than I2C for the same amount of data.',
      variables: {
        independent: 'Communication protocol',
        dependent: 'Transfer speed, wiring complexity',
        controlled: 'Arduino model, data amount, clock settings'
      },
      dataTable: {
        columns: ['Protocol', 'Wires Needed', 'Max Devices', 'Speed', 'Best For'],
        rows: [
          ['I2C', '2 + GND', 'Up to 127', '___', '___'],
          ['SPI', '3 + CS per device', 'Limited by CS pins', '___', '___'],
          ['UART', '2 + GND', '1 (point-to-point)', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'I2C uses how many data wires?', options: ['1', '2', '4', '8'], correctIndex: 1 },
      { question: 'SPI requires a separate ____ for each device:', options: ['Power wire', 'Chip Select (CS) line', 'Ground', 'LED'], correctIndex: 1 },
      { question: 'UART communication is:', options: ['Synchronous', 'Asynchronous', 'Wireless', 'Optical'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s76-protocols.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=I2C%20SPI%20UART%20comparison%20Arduino%20tutorial',
    safetyInstructions: ['Double-check wiring before powering on', 'Do not mix up 3.3V and 5V logic levels']
  },

  {
    levelNumber: 77,
    id: 'scientist-77',
    title: 'Scientific Method Mastery',
    subtitle: 'Design rigorous experiments',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Research Methodology',

    overview: 'Master the complete scientific method by designing, executing, and analyzing your own original experiment.',

    learningObjectives: [
      'Formulate testable hypotheses',
      'Design experiments with proper controls',
      'Analyze data and draw evidence-based conclusions'
    ],

    materials: [
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' },
      { name: 'Any available sensors and Arduino', imageUrl: '/materials/arduino.jpg' },
      { name: 'Ruler & Measuring Tape', imageUrl: '/materials/ruler.jpg' },
      { name: 'Stopwatch', imageUrl: '/materials/stopwatch.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Ask a Question',
        instruction: 'Choose a testable question from your daily life. Example: "Does the color of a surface affect how hot it gets in sunlight?"',
        imageUrl: '/steps/s77-step1.jpg',
        tip: 'Good questions are specific and measurable.'
      },
      {
        stepNumber: 2,
        title: 'Research & Hypothesize',
        instruction: 'Research the topic briefly. Form a specific, testable hypothesis: "Dark surfaces will heat up more than light surfaces in sunlight."',
        imageUrl: '/steps/s77-step2.jpg',
        tip: 'A hypothesis is an educated prediction that can be tested.'
      },
      {
        stepNumber: 3,
        title: 'Design Experiment',
        instruction: 'Define independent, dependent, and controlled variables. Plan your procedure step-by-step. Decide on sample size and number of trials.',
        imageUrl: '/steps/s77-step3.jpg',
        tip: 'At least 3 trials per condition for statistical reliability.'
      },
      {
        stepNumber: 4,
        title: 'Execute & Analyze',
        instruction: 'Conduct the experiment. Record all data. Calculate averages. Create charts. Draw conclusions.',
        imageUrl: '/steps/s77-step4.jpg',
        tip: 'State whether your hypothesis was supported or refuted by the evidence.'
      }
    ],

    explanation: {
      simple: 'The scientific method is a step-by-step process for answering questions with evidence: Ask, Hypothesize, Test, Analyze, Conclude. It is how all science is done.',
      scientific: 'The scientific method is an empirical framework: observation leads to questions, which generate falsifiable hypotheses, tested through controlled experiments. Statistical analysis of results either supports or refutes the hypothesis, contributing to scientific knowledge through peer review and reproducibility.',
      keyTerms: [
        { term: 'Hypothesis', definition: 'A testable prediction based on observation and reasoning' },
        { term: 'Falsifiable', definition: 'A hypothesis that can potentially be proven wrong by evidence' },
        { term: 'Reproducibility', definition: 'The ability for others to repeat the experiment and get similar results' },
        { term: 'Statistical Significance', definition: 'Confidence that results are not due to random chance' }
      ]
    },

    experiment: {
      hypothesis: 'Student-designed hypothesis goes here.',
      variables: {
        independent: 'Student-defined',
        dependent: 'Student-defined',
        controlled: 'Student-defined'
      },
      dataTable: {
        columns: ['Trial', 'Independent Var Value', 'Measurement 1', 'Measurement 2', 'Average'],
        rows: [
          ['Condition A', '___', '___', '___', '___'],
          ['Condition B', '___', '___', '___', '___'],
          ['Condition C', '___', '___', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'A testable hypothesis must be:', options: ['Vague', 'Falsifiable', 'Always correct', 'A guess'], correctIndex: 1 },
      { question: 'Controlled variables are:', options: ['Changed on purpose', 'Measured', 'Kept the same across all groups', 'Ignored'], correctIndex: 2 },
      { question: 'Multiple trials are needed for:', options: ['Fun', 'Statistical reliability', 'Using more supplies', 'Longer experiments'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s77-scientific-method.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=scientific%20method%20steps%20experiment%20design',
    safetyInstructions: ['Follow all safety procedures for chosen experiment', 'Get adult supervision for any experiment involving heat, chemicals, or electricity']
  },

  {
    levelNumber: 78,
    id: 'scientist-78',
    title: 'Research Paper Writing',
    subtitle: 'Document your discoveries',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 55,
    category: 'Research Communication',

    overview: 'Learn to write a structured scientific research paper with abstract, introduction, methods, results, and conclusion sections.',

    learningObjectives: [
      'Understand the structure of a research paper',
      'Write each section with proper content',
      'Create data tables, charts, and references'
    ],

    materials: [
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' },
      { name: 'Data from previous experiments', imageUrl: '/materials/data.jpg' },
      { name: 'Graph paper or computer', imageUrl: '/materials/graph-paper.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Write Title & Abstract',
        instruction: 'Create a descriptive title. Write a 100-word abstract summarizing your question, method, key findings, and conclusion.',
        imageUrl: '/steps/s78-step1.jpg',
        tip: 'The abstract should give a complete overview in one short paragraph.'
      },
      {
        stepNumber: 2,
        title: 'Introduction',
        instruction: 'Explain the background, why the question matters, and state your hypothesis clearly.',
        imageUrl: '/steps/s78-step2.jpg',
        tip: 'End the introduction with your specific hypothesis.'
      },
      {
        stepNumber: 3,
        title: 'Methods & Results',
        instruction: 'Describe your procedure in enough detail that someone could repeat it. Present results with data tables and charts. Do not interpret yet.',
        imageUrl: '/steps/s78-step3.jpg',
        tip: 'Methods = what you did. Results = what you found. Keep them separate.'
      },
      {
        stepNumber: 4,
        title: 'Discussion & Conclusion',
        instruction: 'Interpret your results. Was the hypothesis supported? What were the limitations? What would you do differently? What are the next steps?',
        imageUrl: '/steps/s78-step4.jpg',
        tip: 'A good scientist admits limitations honestly.'
      }
    ],

    explanation: {
      simple: 'A research paper tells the story of your experiment in a organized way. It helps others understand what you did, what you found, and what it means.',
      scientific: 'Scientific papers follow the IMRAD format (Introduction, Methods, Results, And Discussion) to ensure clear communication of research findings. Peer review and reproducibility are cornerstones of scientific publishing.',
      keyTerms: [
        { term: 'Abstract', definition: 'A brief summary of the entire paper (typically 100-300 words)' },
        { term: 'IMRAD', definition: 'Introduction, Methods, Results, And Discussion — standard paper structure' },
        { term: 'Peer Review', definition: 'Evaluation of research by other experts in the field' }
      ]
    },

    experiment: {
      hypothesis: 'A well-structured paper will communicate findings more clearly than an unstructured report.',
      variables: {
        independent: 'Paper structure (IMRAD vs freeform)',
        dependent: 'Reader comprehension and clarity rating',
        controlled: 'Content, length, writer'
      },
      dataTable: {
        columns: ['Section', 'Word Count', 'Key Content', 'Completed?'],
        rows: [
          ['Title', '___', 'Descriptive research title', '___'],
          ['Abstract', '___', 'Summary of entire paper', '___'],
          ['Introduction', '___', 'Background and hypothesis', '___'],
          ['Methods', '___', 'Detailed procedure', '___'],
          ['Results', '___', 'Data tables and charts', '___'],
          ['Discussion', '___', 'Interpretation and conclusions', '___']
        ]
      }
    },

    quiz: [
      { question: 'IMRAD stands for:', options: ['Input, Method, Result, Analysis, Data', 'Introduction, Methods, Results, And Discussion', 'Integrated Measurement Research And Design', 'International Method for Research And Discovery'], correctIndex: 1 },
      { question: 'The abstract should be:', options: ['The longest section', 'A brief summary of the whole paper', 'Only about methods', 'Optional'], correctIndex: 1 },
      { question: 'Limitations should be:', options: ['Hidden', 'Honestly discussed', 'Invented', 'In the abstract only'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s78-research-paper.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=how%20to%20write%20a%20science%20research%20paper',
    safetyInstructions: ['Cite all sources properly', 'Do not fabricate data', 'Get feedback before finalizing']
  },

  {
    levelNumber: 79,
    id: 'scientist-79',
    title: 'Invention Design Sprint',
    subtitle: 'Create something new',
    difficulty: DIFFICULTY.CAPSTONE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '90 minutes',
    xpReward: 70,
    category: 'Innovation',

    overview: 'Use the design thinking process to identify a real-world problem, brainstorm solutions, and build a working prototype using your Arduino and sensor skills.',

    learningObjectives: [
      'Apply design thinking (Empathize, Define, Ideate, Prototype, Test)',
      'Build a functional prototype',
      'Present your invention with a pitch'
    ],

    materials: [
      { name: 'All available Arduino components', imageUrl: '/materials/arduino.jpg' },
      { name: 'Cardboard and craft supplies', imageUrl: '/materials/cardboard.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' },
      { name: 'All available sensors', imageUrl: '/materials/sensor-pack.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Empathize & Define',
        instruction: 'Identify a real problem at home, school, or in your community. Interview 2-3 people about the problem. Write a clear problem statement.',
        imageUrl: '/steps/s79-step1.jpg',
        tip: 'Good inventions solve real problems that real people have.'
      },
      {
        stepNumber: 2,
        title: 'Ideate',
        instruction: 'Brainstorm at least 5 possible solutions. Sketch each idea. Choose the most feasible one to build.',
        imageUrl: '/steps/s79-step2.jpg',
        tip: 'No idea is too crazy during brainstorming. Filter later.'
      },
      {
        stepNumber: 3,
        title: 'Prototype',
        instruction: 'Build a working prototype using Arduino, sensors, actuators, and craft materials. It does not need to be perfect, just functional.',
        imageUrl: '/steps/s79-step3.jpg',
        tip: 'Focus on demonstrating the core function. Polish can come later.'
      },
      {
        stepNumber: 4,
        title: 'Test & Iterate',
        instruction: 'Test your prototype. Get feedback from users. Make one improvement based on feedback.',
        imageUrl: '/steps/s79-step4.jpg',
        tip: 'Real user feedback is more valuable than your own opinion.'
      },
      {
        stepNumber: 5,
        title: 'Prepare Pitch',
        instruction: 'Create a 3-minute presentation: Problem, Solution, Demo, Impact. Practice delivering it.',
        imageUrl: '/steps/s79-step5.jpg',
        tip: 'Start with the problem, not the technology. People care about problems being solved.'
      }
    ],

    explanation: {
      simple: 'Design thinking is how real inventors work. You find a problem, come up with ideas, build something, test it, and improve it. Your invention could help real people!',
      scientific: 'Design thinking is a human-centered iterative methodology. The five phases (Empathize, Define, Ideate, Prototype, Test) form a non-linear process that converges on validated solutions through rapid prototyping and user feedback loops.',
      keyTerms: [
        { term: 'Design Thinking', definition: 'A human-centered approach to innovation through empathy and experimentation' },
        { term: 'Prototype', definition: 'An early working model used to test and refine an idea' },
        { term: 'Iteration', definition: 'Repeating the design cycle to improve the solution' }
      ]
    },

    experiment: {
      hypothesis: 'User testing will reveal at least one improvement opportunity not identified during initial design.',
      variables: {
        independent: 'Design iteration (before vs after user feedback)',
        dependent: 'User satisfaction and functionality',
        controlled: 'Core problem, available materials, time'
      },
      dataTable: {
        columns: ['Phase', 'Activity', 'Output', 'Time Spent', 'Status'],
        rows: [
          ['Empathize', 'Interviews', 'Problem insights', '___', '___'],
          ['Define', 'Problem statement', 'Clear definition', '___', '___'],
          ['Ideate', 'Brainstorm', '5+ ideas', '___', '___'],
          ['Prototype', 'Build', 'Working model', '___', '___'],
          ['Test', 'User feedback', 'Improvements', '___', '___']
        ]
      }
    },

    quiz: [
      { question: 'Design thinking starts with:', options: ['Building', 'Empathizing with users', 'Coding', 'Buying parts'], correctIndex: 1 },
      { question: 'A prototype should be:', options: ['Perfect', 'Functional enough to test the idea', 'Made of expensive materials', 'Identical to the final product'], correctIndex: 1 },
      { question: 'Iteration means:', options: ['Doing it once', 'Repeating and improving', 'Giving up', 'Copying someone else'], correctIndex: 1 }
    ],

    outputImageUrl: '/outputs/s79-invention.jpg',
    youtubeEmbed: 'https://www.youtube.com/embed?listType=search&list=design%20thinking%20process%20invention%20project',
    safetyInstructions: ['Follow all safety guidelines for components used', 'Get adult supervision for tools', 'Test prototypes in a safe environment']
  },

  {
    levelNumber: 80,
    id: 'scientist-80',
    title: 'Grand Science Fair Showcase',
    subtitle: 'Module 8 capstone — Present your science',
    difficulty: DIFFICULTY.CAPSTONE,
    safetyLevel: SAFETY_LEVEL.CAUTION,
    estimatedTime: '180 minutes',
    xpReward: 100,
    category: 'Grand Capstone',

    overview: 'Prepare and present a complete science fair project including an original experiment, research paper, display board, and live demonstration.',

    learningObjectives: [
      'Complete an original end-to-end scientific investigation',
      'Create a professional display board',
      'Deliver a confident presentation with live demo'
    ],

    materials: [
      { name: 'All available components', imageUrl: '/materials/full-kit.jpg' },
      { name: 'Display Board or Poster', imageUrl: '/materials/display-board.jpg' },
      { name: 'Printed Research Paper', imageUrl: '/materials/paper.jpg' },
      { name: 'Working Prototype', imageUrl: '/materials/prototype.jpg' },
      { name: 'Notebook & Pen', imageUrl: '/materials/notebook.jpg' }
    ],

    steps: [
      {
        stepNumber: 1,
        title: 'Choose Your Project',
        instruction: 'Select your best experiment or invention from Levels 61-79. Refine the question and redesign for maximum impact.',
        imageUrl: '/steps/s80-step1.jpg',
        tip: 'Choose something you are passionate about and that has clear, measurable results.'
      },
      {
        stepNumber: 2,
        title: 'Conduct Final Experiment',
        instruction: 'Run the experiment with at least 3 trials. Collect clean data. Photograph every step.',
        imageUrl: '/steps/s80-step2.jpg',
        tip: 'More data points make your conclusions stronger.'
      },
      {
        stepNumber: 3,
        title: 'Write Research Paper',
        instruction: 'Complete the full IMRAD paper with title, abstract, introduction, methods, results (with charts), discussion, and conclusion.',
        imageUrl: '/steps/s80-step3.jpg',
        tip: 'Have someone proofread your paper before finalizing.'
      },
      {
        stepNumber: 4,
        title: 'Create Display Board',
        instruction: 'Design a tri-fold display board with: Title, Question, Hypothesis, Method, Results (charts/photos), Conclusion. Make it visually appealing.',
        imageUrl: '/steps/s80-step4.jpg',
        tip: 'Use large, clear fonts. Include photos of your setup and results.'
      },
      {
        stepNumber: 5,
        title: 'Prepare Live Demo',
        instruction: 'Set up your working prototype for live demonstration. Prepare a 5-minute presentation covering problem, approach, findings, and significance.',
        imageUrl: '/steps/s80-step5.jpg',
        tip: 'Practice your presentation 3 times. Prepare for questions.'
      },
      {
        stepNumber: 6,
        title: 'Present!',
        instruction: 'Present to your family, friends, or class. Demonstrate your project live. Answer questions confidently.',
        imageUrl: '/steps/s80-step6.jpg',
        tip: 'Be proud of your work. You have earned this moment!'
      }
    ],

    explanation: {
      simple: 'This is your graduation project. Everything you have learned from Level 1 to now comes together in one amazing presentation. You are a real scientist!',
      scientific: 'A science fair presentation integrates experimental methodology, data analysis, technical communication, and public speaking. It demonstrates the complete scientific process from question formulation through peer communication of findings — the same cycle used by professional researchers worldwide.',
      keyTerms: [
        { term: 'Science Fair', definition: 'A public presentation of student research projects' },
        { term: 'Display Board', definition: 'A visual summary of the research project for viewers' },
        { term: 'Live Demonstration', definition: 'Showing a working experiment or prototype in real-time' }
      ]
    },

    experiment: {
      hypothesis: 'Student-defined original hypothesis for their chosen project.',
      variables: {
        independent: 'Student-defined',
        dependent: 'Student-defined',
        controlled: 'Student-defined'
      },
      dataTable: {
        columns: ['Deliverable', 'Status', 'Quality (1-5)', 'Feedback Received'],
        rows: [
          ['Research Paper',
