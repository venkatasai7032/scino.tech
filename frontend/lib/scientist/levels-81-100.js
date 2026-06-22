/**
 * SCINO Learning Platform
 * Scientist Program — Advanced Robotics
 * Levels 81–100
 *
 * File: /lib/learning-engine/scientist/levels-81-100.js
 *
 * Each level contains:
 *  - id, level, title, category, difficulty, xpReward
 *  - description
 *  - materials (name + image placeholder)
 *  - steps (ordered instructions)
 *  - safetyInstructions
 *  - howItWorks
 *  - youtubeSearch (query string to find a demo video)
 *  - finalOutputImage (placeholder key)
 *  - tags
 */

// ---------------------------------------------------------------------------
// Helper: build a material object
// ---------------------------------------------------------------------------
const mat = (name, imageKey) => ({ name, image: `/images/materials/${imageKey}.webp` });

// ---------------------------------------------------------------------------
// Levels 81–100 — Advanced Robotics
// ---------------------------------------------------------------------------

export const LEVELS_81_TO_100 = [
  // =========================================================================
  // LEVEL 81 — Autonomous Line-Following Robot (PID Controlled)
  // =========================================================================
  {
    id: "sci-081",
    level: 81,
    title: "PID Line-Following Robot",
    category: "Advanced Robotics",
    difficulty: "Advanced",
    xpReward: 420,
    description:
      "Build a robot that follows a curved line using a PID (Proportional-Integral-Derivative) controller for smooth, precise tracking — no more jerky zigzag motion!",
    materials: [
      mat("Arduino Uno", "arduino-uno"),
      mat("IR Sensor Array (5-channel)", "ir-array"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Jumper Wires", "jumper-wires"),
      mat("Black Tape (track)", "black-tape"),
    ],
    steps: [
      "Assemble the robot chassis and mount both gear motors firmly.",
      "Attach the 5-channel IR sensor array at the front, centered, 5–8 mm above the ground.",
      "Wire the IR sensors to Arduino digital pins 2–6.",
      "Connect the L298N motor driver to Arduino pins 9, 10 (left motor) and 11, 12 (right motor).",
      "Power the L298N from the Li-Po battery; power Arduino from the same battery through its 5V regulator pin.",
      "Upload the base line-following code and test on a simple straight track.",
      "Introduce the PID formula: error = center − sensorReading; output = Kp×error + Ki×integral + Kd×derivative.",
      "Tune Kp first (start 0.5), then Kd (start 1.0), finally Ki (usually very small, ~0.001).",
      "Test on a curved track and re-tune until the robot follows smoothly without oscillating.",
      "Record your final Kp, Ki, Kd values in comments at the top of your code.",
    ],
    safetyInstructions: [
      "Never connect Li-Po battery while uploading code via USB — it can damage the Arduino.",
      "Check motor driver heat; add a small heatsink if it gets too hot.",
      "Keep fingers clear of wheels when robot is powered.",
      "Use a fireproof Li-Po bag during charging.",
    ],
    howItWorks:
      "The IR sensor array detects the black line below the robot by measuring reflected infrared light. Each sensor returns a value — white surface reflects more, black absorbs. The PID controller calculates the error (how far off-center the line is) and adjusts motor speeds proportionally, reducing overshoot and oscillation. The result is smooth, accurate line tracking even on curves.",
    youtubeSearch: "PID line follower robot Arduino tutorial",
    finalOutputImage: "/images/outputs/sci-081-output.webp",
    tags: ["PID", "line-follower", "motor-control", "IR-sensor", "Arduino"],
  },

  // =========================================================================
  // LEVEL 82 — Obstacle-Avoiding Robot with Ultrasonic + Servo Scan
  // =========================================================================
  {
    id: "sci-082",
    level: 82,
    title: "Scanning Obstacle-Avoidance Robot",
    category: "Advanced Robotics",
    difficulty: "Advanced",
    xpReward: 425,
    description:
      "Upgrade a basic obstacle avoider with a servo-mounted ultrasonic sensor that scans left and right to choose the best escape path — just like real autonomous vehicles.",
    materials: [
      mat("Arduino Uno", "arduino-uno"),
      mat("HC-SR04 Ultrasonic Sensor", "hc-sr04"),
      mat("SG90 Servo Motor", "sg90-servo"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("9V Battery", "9v-battery"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Mount the SG90 servo at the front center of the robot chassis.",
      "Attach the HC-SR04 ultrasonic sensor on the servo horn so it rotates with the servo.",
      "Wire servo signal to Arduino pin 7; HC-SR04 Trig→pin 8, Echo→pin 9.",
      "Connect the L298N motor driver and wire both motors.",
      "Write a scanDistance(angle) function that rotates the servo and reads distance.",
      "In the main loop: if front distance < 20 cm, stop the robot.",
      "Scan left (angle 150°) and right (angle 30°); store both distances.",
      "Turn toward the side with more free space (higher distance reading).",
      "Resume forward motion after turning.",
      "Test in an obstacle course and adjust threshold distances.",
    ],
    safetyInstructions: [
      "Do not run robot on tables — it may fall off.",
      "Ensure servo wiring is not twisted when it rotates.",
      "Keep battery level above 7V for consistent sensor readings.",
    ],
    howItWorks:
      "The servo motor rotates the ultrasonic sensor to scan the environment. The HC-SR04 sends a 40kHz sound pulse and measures the echo return time to calculate distance. By comparing left and right scan distances, the Arduino makes a smart decision about which direction is safer, mimicking the basic decision loop of an autonomous vehicle.",
    youtubeSearch: "Arduino obstacle avoiding robot servo ultrasonic scan",
    finalOutputImage: "/images/outputs/sci-082-output.webp",
    tags: ["obstacle-avoidance", "ultrasonic", "servo", "autonomous", "Arduino"],
  },

  // =========================================================================
  // LEVEL 83 — Bluetooth-Controlled Robot with Android App
  // =========================================================================
  {
    id: "sci-083",
    level: 83,
    title: "Bluetooth Robot with Android Control",
    category: "Advanced Robotics",
    difficulty: "Advanced",
    xpReward: 430,
    description:
      "Build a robot you can drive from your phone using Bluetooth. Control forward, backward, left, right, and speed using a free Android app.",
    materials: [
      mat("Arduino Uno", "arduino-uno"),
      mat("HC-05 Bluetooth Module", "hc05"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("9V Battery", "9v-battery"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Assemble the robot chassis and mount motors.",
      "Wire L298N to Arduino motor control pins.",
      "Connect HC-05: VCC→5V, GND→GND, TX→Arduino RX(0), RX→Arduino TX(1) through a voltage divider (1kΩ + 2kΩ).",
      "Upload the Bluetooth serial command code to Arduino.",
      "Command map: 'F'=forward, 'B'=backward, 'L'=left, 'R'=right, 'S'=stop.",
      "Install 'Bluetooth RC Controller' app on Android phone.",
      "Pair phone with HC-05 (default PIN: 1234).",
      "Open app, connect to HC-05, and test all directions.",
      "Add speed control using PWM values sent as numeric strings.",
      "Decorate your robot and test in an open area.",
    ],
    safetyInstructions: [
      "Use voltage divider on HC-05 RX pin — direct 5V will damage the module.",
      "Remove USB cable before Bluetooth testing to avoid serial conflicts.",
      "Test at low speed first before increasing motor power.",
    ],
    howItWorks:
      "The HC-05 Bluetooth module receives serial commands from the Android app over a 2.4GHz wireless connection. Arduino reads these characters from its Serial port and maps them to motor direction commands. PWM (pulse-width modulation) on motor driver enable pins controls speed by varying the average voltage to the motors.",
    youtubeSearch: "Arduino Bluetooth robot HC-05 Android app control",
    finalOutputImage: "/images/outputs/sci-083-output.webp",
    tags: ["Bluetooth", "wireless", "Android", "motor-control", "HC-05"],
  },

  // =========================================================================
  // LEVEL 84 — WiFi-Controlled Robot with ESP8266
  // =========================================================================
  {
    id: "sci-084",
    level: 84,
    title: "WiFi Robot with ESP8266 Web Interface",
    category: "Advanced Robotics",
    difficulty: "Advanced",
    xpReward: 435,
    description:
      "Control your robot from any browser on the same WiFi network. The ESP8266 hosts a mini web server — open the IP address on your phone and drive the robot like a game.",
    materials: [
      mat("NodeMCU ESP8266", "nodemcu"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Install ESP8266 board package in Arduino IDE (board manager URL from docs).",
      "Assemble chassis and mount the NodeMCU on top.",
      "Wire L298N motor driver to NodeMCU GPIO pins (D1, D2, D3, D4).",
      "Write a web server sketch that serves an HTML page with arrow buttons.",
      "Each button sends an HTTP GET request: /forward, /backward, /left, /right, /stop.",
      "In the sketch, handle each route and call the corresponding motor function.",
      "Upload the sketch; open Serial Monitor to find the assigned IP address.",
      "Connect phone to the same WiFi and open the IP in the browser.",
      "Test all directions from the browser control panel.",
      "Add speed slider using a range input that sends PWM values via URL.",
    ],
    safetyInstructions: [
      "ESP8266 runs on 3.3V logic — do not connect 5V signals directly.",
      "Ensure Li-Po battery is properly secured and cannot fall out.",
      "Use a separate 5V regulator for the motor driver logic if needed.",
    ],
    howItWorks:
      "The ESP8266 connects to your WiFi network and starts an HTTP server. When you press a button in the browser, it sends an HTTP request to the ESP8266's IP. The ESP8266 parses the URL path and calls the appropriate motor control function. This is the same client-server model used in real IoT devices.",
    youtubeSearch: "ESP8266 NodeMCU WiFi robot web server control",
    finalOutputImage: "/images/outputs/sci-084-output.webp",
    tags: ["WiFi", "ESP8266", "IoT", "web-server", "robot"],
  },

  // =========================================================================
  // LEVEL 85 — Robotic Arm with Servo Control
  // =========================================================================
  {
    id: "sci-085",
    level: 85,
    title: "4-DOF Robotic Arm with Servo Motors",
    category: "Advanced Robotics",
    difficulty: "Advanced",
    xpReward: 445,
    description:
      "Build a robotic arm with 4 degrees of freedom (base rotation, shoulder, elbow, gripper) and control each joint using potentiometers or a joystick.",
    materials: [
      mat("Arduino Uno", "arduino-uno"),
      mat("4× SG90 / MG996R Servo Motors", "servo-motors"),
      mat("Robotic Arm Kit (3D printed or acrylic)", "robot-arm-kit"),
      mat("2× Joystick Modules", "joystick"),
      mat("External 5V 3A Power Supply", "power-supply-5v"),
      mat("Jumper Wires", "jumper-wires"),
      mat("Breadboard", "breadboard"),
    ],
    steps: [
      "Assemble the robotic arm kit following the physical build guide included in kit.",
      "Mount servo motors at each joint: base (rotation), shoulder (up/down), elbow (bend), gripper (open/close).",
      "Wire all servo signal wires to Arduino pins 3, 5, 6, 9.",
      "Power servos from external 5V 3A supply — NOT from Arduino 5V pin (insufficient current).",
      "Connect joystick X-axis to A0 (shoulder), Y-axis to A1 (elbow); second joystick X→A2 (base), Y→A3 (gripper).",
      "Map joystick analog values (0–1023) to servo angles (0–180°) using map() function.",
      "Upload the arm control code and test each joint individually.",
      "Add angle limits to prevent mechanical damage (e.g., shoulder 30°–150°).",
      "Practice picking and placing small objects.",
      "Record a demo of the arm completing a simple pick-and-place task.",
    ],
    safetyInstructions: [
      "Never power servos from Arduino 5V — it can burn the Arduino voltage regulator.",
      "Add joint angle limits in code to prevent mechanical over-travel.",
      "Keep fingers away from gripper mechanism during testing.",
      "Start with slow movements before attempting fast control.",
    ],
    howItWorks:
      "Each servo motor receives PWM pulses that determine its angle. The joystick outputs analog voltage (0–5V) proportional to deflection. Arduino's analogRead() converts this to a 0–1023 number, which map() scales to 0–180 degrees for the servo. With 4 independent servo joints, the arm achieves 4 degrees of freedom — enough to reach, grasp, and place objects.",
    youtubeSearch: "Arduino 4DOF robotic arm joystick control servo",
    finalOutputImage: "/images/outputs/sci-085-output.webp",
    tags: ["robotic-arm", "servo", "DOF", "joystick", "pick-and-place"],
  },

  // =========================================================================
  // LEVEL 86 — Voice-Controlled Robot with Arduino + Bluetooth
  // =========================================================================
  {
    id: "sci-086",
    level: 86,
    title: "Voice-Controlled Robot",
    category: "Advanced Robotics",
    difficulty: "Advanced",
    xpReward: 450,
    description:
      "Control your robot with spoken voice commands using the Google Voice Recognition on Android connected via Bluetooth. Say 'Forward', 'Stop', 'Left' — and the robot obeys!",
    materials: [
      mat("Arduino Uno", "arduino-uno"),
      mat("HC-05 Bluetooth Module", "hc05"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("9V Battery", "9v-battery"),
      mat("Android Phone", "android-phone"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Build and wire the Bluetooth robot (same as Level 83).",
      "Install 'Arduino Voice Control' app from the Play Store on your Android phone.",
      "Pair your phone with HC-05 module.",
      "Open the voice control app and map voice commands to serial characters:",
      "  'move forward' → sends 'F'",
      "  'move backward' → sends 'B'",
      "  'turn left' → sends 'L'",
      "  'turn right' → sends 'R'",
      "  'stop' → sends 'S'",
      "Upload the command-parser code to Arduino.",
      "Test each voice command; adjust command sensitivity in the app settings.",
      "Add extra commands like 'spin' or 'dance' for fun behaviors.",
    ],
    safetyInstructions: [
      "Ensure robot is on the floor before giving move commands.",
      "Have the 'stop' command ready and tested before testing other commands.",
      "Bluetooth range is ~10m — stay within range to maintain control.",
    ],
    howItWorks:
      "Google's speech recognition engine on Android converts your voice to text in real time. The voice control app maps recognized text phrases to single-character serial commands sent over Bluetooth. The Arduino receives these characters via the HC-05 module and executes the corresponding motor function. Voice → Text → Bluetooth → Arduino → Motors.",
    youtubeSearch: "Arduino voice controlled robot Bluetooth Android",
    finalOutputImage: "/images/outputs/sci-086-output.webp",
    tags: ["voice-control", "Bluetooth", "speech-recognition", "robot", "Android"],
  },

  // =========================================================================
  // LEVEL 87 — Self-Balancing Robot (Inverted Pendulum)
  // =========================================================================
  {
    id: "sci-087",
    level: 87,
    title: "Self-Balancing Two-Wheel Robot",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 480,
    description:
      "Build a two-wheeled robot that balances itself upright like a Segway using an MPU-6050 gyroscope/accelerometer and a PID control loop. One of the most challenging — and rewarding — robotics projects!",
    materials: [
      mat("Arduino Uno or Nano", "arduino-uno"),
      mat("MPU-6050 Gyroscope + Accelerometer", "mpu6050"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors with Encoders", "encoder-motor"),
      mat("Self-Balancing Robot Chassis (narrow, tall)", "balance-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Assemble the tall, narrow two-wheel chassis and mount motors at the bottom.",
      "Mount MPU-6050 at the center of the robot (this is the 'brain' for balance).",
      "Wire MPU-6050: SDA→A4, SCL→A5, VCC→3.3V, GND→GND.",
      "Install MPU6050 library (by Electronic Cats) and Wire library in Arduino IDE.",
      "Read the tilt angle using the complementary filter formula: angle = 0.98 × (angle + gyro × dt) + 0.02 × accelAngle.",
      "Implement a PID loop using tilt angle as the error (target angle = 0°, or the balanced angle).",
      "Connect PID output to motor speeds — positive output = forward, negative = backward.",
      "Power on robot and hold it upright; it should resist falling.",
      "Tune PID values: start with Kp=5, Kd=1, Ki=0; adjust until it balances.",
      "Fine-tune the balance angle offset to compensate for your robot's center of mass.",
    ],
    safetyInstructions: [
      "Robot may fall suddenly during tuning — clear the area of fragile objects.",
      "Start tuning with the robot held above the ground.",
      "Use a padded surface in case the robot falls during testing.",
      "Do not place hands under the robot while motors are running.",
    ],
    howItWorks:
      "The MPU-6050 measures tilt angle using both accelerometer (gravity direction) and gyroscope (rotation rate). A complementary filter combines both for accurate, drift-free angle measurement. The PID controller calculates how much correction is needed: if the robot tilts forward, it drives wheels forward to 'catch itself'. This continuous correction loop at ~100Hz keeps the robot balanced — the same physics used in Segways and hoverboards.",
    youtubeSearch: "Arduino self balancing robot MPU6050 PID tutorial",
    finalOutputImage: "/images/outputs/sci-087-output.webp",
    tags: ["self-balancing", "MPU6050", "PID", "gyroscope", "inverted-pendulum"],
  },

  // =========================================================================
  // LEVEL 88 — Gesture-Controlled Robot with MPU-6050 Glove
  // =========================================================================
  {
    id: "sci-088",
    level: 88,
    title: "Gesture-Controlled Robot Glove",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 460,
    description:
      "Control a robot with your hand gestures! Wear a glove with an MPU-6050 and NRF24L01 radio — tilt your hand forward to drive forward, tilt left to turn left. Pure magic.",
    materials: [
      mat("2× Arduino Uno/Nano", "arduino-uno"),
      mat("MPU-6050 (for glove)", "mpu6050"),
      mat("2× NRF24L01 Radio Modules", "nrf24l01"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Glove (any cloth glove)", "cloth-glove"),
      mat("9V Battery ×2", "9v-battery"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Build the robot chassis with motors and L298N driver (transmitter unit).",
      "Wire one NRF24L01 to the robot's Arduino (receiver): CE→pin 9, CSN→pin 10, SPI pins.",
      "Mount MPU-6050 and second NRF24L01 on the glove (transmitter).",
      "Install RF24 library and MPU6050 library in Arduino IDE.",
      "Transmitter code: read tilt angles from MPU-6050, package as X/Y struct, send via NRF24L01.",
      "Receiver code: receive the struct, map tilt angles to motor commands.",
      "Gesture map: tilt forward → forward; tilt back → reverse; tilt left → left; tilt right → right; flat → stop.",
      "Test the radio link at short range first (1m), then increase.",
      "Calibrate the 'flat/neutral' angle in code for your hand position.",
      "Test outdoors and enjoy controlling the robot with hand movements.",
    ],
    safetyInstructions: [
      "NRF24L01 requires 3.3V — connecting to 5V will damage it permanently.",
      "Add a 10µF capacitor across NRF24L01 VCC and GND to stabilize power.",
      "Test in an open area away from 2.4GHz WiFi interference.",
    ],
    howItWorks:
      "The MPU-6050 on the glove measures hand tilt angles in real time. The transmitter Arduino packages these angles into a data struct and transmits wirelessly via the 2.4GHz NRF24L01 radio. The robot's receiver Arduino decodes the struct and maps tilt angles to motor direction and speed. This is the same concept used in drone controllers and gaming motion controllers.",
    youtubeSearch: "Arduino gesture controlled robot NRF24L01 MPU6050 glove",
    finalOutputImage: "/images/outputs/sci-088-output.webp",
    tags: ["gesture-control", "NRF24L01", "wireless", "MPU6050", "glove"],
  },

  // =========================================================================
  // LEVEL 89 — Multi-Sensor Fire Fighting Robot
  // =========================================================================
  {
    id: "sci-089",
    level: 89,
    title: "Autonomous Fire-Fighting Robot",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 470,
    description:
      "Build a robot that autonomously detects fire using flame sensors, navigates toward it, and extinguishes it with a mini water pump and fan. A real emergency-response bot!",
    materials: [
      mat("Arduino Uno", "arduino-uno"),
      mat("3× Flame Sensors (IR)", "flame-sensor"),
      mat("Mini Water Pump + Tubing", "mini-pump"),
      mat("Small Fan (5V)", "mini-fan"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Relay Module 5V", "relay-module"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Small Water Tank", "water-tank"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Assemble chassis with motors, L298N, and Arduino.",
      "Mount three flame sensors: front-left, front-center, front-right.",
      "Wire flame sensors to Arduino A0, A1, A2.",
      "Mount the mini pump and fan at the front of the robot.",
      "Connect pump and fan to relay module; relay signal to Arduino pin 7.",
      "Logic: if only center sensor detects fire → stop and activate pump+fan.",
      "If left sensor detects fire → turn left to face fire; if right → turn right.",
      "If no sensor detects → move forward slowly searching.",
      "Add a timeout: if fire is extinguished (sensors clear), deactivate pump.",
      "Test with a small candle in a safe, fireproof environment.",
    ],
    safetyInstructions: [
      "ALWAYS test with adult supervision.",
      "Use a very small candle flame only — never a large fire.",
      "Keep a real fire extinguisher nearby during testing.",
      "Ensure the water tank is sealed to prevent spills on electronics.",
      "Test on a non-flammable surface.",
    ],
    howItWorks:
      "Flame sensors detect infrared (IR) radiation emitted by fire. The robot uses three sensors to triangulate the fire's direction. Once aligned (center sensor triggers), it stops and activates the relay to power both the water pump and fan simultaneously. The fan disperses water into a mist to increase the cooling area. This mirrors the logic used in real autonomous fire-response systems.",
    youtubeSearch: "Arduino fire fighting robot flame sensor water pump",
    finalOutputImage: "/images/outputs/sci-089-output.webp",
    tags: ["fire-fighting", "flame-sensor", "autonomous", "relay", "water-pump"],
  },

  // =========================================================================
  // LEVEL 90 — SLAM-Inspired Maze Mapping Robot
  // =========================================================================
  {
    id: "sci-090",
    level: 90,
    title: "Maze-Mapping Robot with OLED Display",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 490,
    description:
      "Build a robot that navigates a maze, maps its path, and displays a live maze map on an OLED screen. An introduction to SLAM (Simultaneous Localization and Mapping) concepts.",
    materials: [
      mat("Arduino Mega 2560", "arduino-mega"),
      mat("HC-SR04 Ultrasonic Sensor ×3 (front, left, right)", "hc-sr04"),
      mat("0.96\" OLED Display (I2C)", "oled-096"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors with Encoders", "encoder-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Assemble chassis with encoder motors for accurate distance measurement.",
      "Mount 3 ultrasonic sensors: front (Trig→22, Echo→23), left (→24,25), right (→26,27).",
      "Connect OLED via I2C: SDA→20, SCL→21 on Mega.",
      "Install U8g2 library for OLED and encoder tracking library.",
      "Implement right-hand-rule maze navigation: always try turning right first.",
      "Track robot position using encoder tick counts → convert to cm.",
      "Store maze cell data in a 2D array (wall present: 1 or 0).",
      "On each OLED frame refresh, draw the explored maze grid (8×8 cells).",
      "Mark the current robot position with a dot on the OLED.",
      "Test in a simple cardboard maze and observe live mapping.",
    ],
    safetyInstructions: [
      "Ensure encoder wires do not get tangled in wheels.",
      "Check that OLED is wired to 3.3V if it's a 3.3V model.",
      "Arduino Mega provides more pins — don't substitute with Uno for this level.",
    ],
    howItWorks:
      "Motor encoders count wheel rotations to track distance traveled (odometry). Three ultrasonic sensors detect walls on each side. The right-hand-rule algorithm guides navigation: always follow the right wall. Each cell visited is marked in a 2D array. The OLED displays this grid in real time, giving a visual map of explored territory. This simplified version demonstrates the core concepts behind robot SLAM systems used in autonomous vehicles.",
    youtubeSearch: "Arduino maze mapping robot OLED SLAM tutorial",
    finalOutputImage: "/images/outputs/sci-090-output.webp",
    tags: ["SLAM", "maze-mapping", "OLED", "encoder", "navigation"],
  },

  // =========================================================================
  // LEVEL 91 — Swarm Robotics: 2-Robot Communication
  // =========================================================================
  {
    id: "sci-091",
    level: 91,
    title: "Swarm Robots — Leader & Follower System",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 495,
    description:
      "Build two robots that communicate wirelessly — a leader robot is controlled manually, and a follower robot mirrors its every move. This is the foundation of swarm robotics!",
    materials: [
      mat("2× Arduino Uno", "arduino-uno"),
      mat("2× NRF24L01 Radio Modules", "nrf24l01"),
      mat("2× L298N Motor Drivers", "l298n"),
      mat("4× DC Gear Motors", "dc-gear-motor"),
      mat("2× Robot Chassis", "robot-chassis"),
      mat("2× 9V Battery", "9v-battery"),
      mat("Joystick Module", "joystick"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Build two identical robot platforms with motors and L298N drivers.",
      "Wire NRF24L01 to each Arduino (CE→9, CSN→10, SPI pins).",
      "Connect joystick to the leader robot's Arduino (A0, A1).",
      "Leader code: read joystick, package direction + speed, transmit every 20ms.",
      "Follower code: receive struct, execute same direction + speed commands.",
      "Test with robots side by side — follower should mirror leader's movements.",
      "Increase distance to test radio range.",
      "Add 100ms delay to follower to create a 'follow in path' behavior.",
      "Experiment with 3 robots if possible — chain communication.",
      "Document observations: latency, range limits, synchronization quality.",
    ],
    safetyInstructions: [
      "NRF24L01 requires 3.3V — use a 3.3V regulator or Arduino's 3.3V pin.",
      "Add 10µF bypass capacitors on NRF24L01 power pins for stable radio.",
      "Test in open space — walls reflect 2.4GHz and reduce range.",
    ],
    howItWorks:
      "The leader Arduino reads joystick input and packages motor direction and speed values into a data struct transmitted via NRF24L01 at 2.4GHz. The follower Arduino continuously listens on the same pipe address and decodes received structs to mirror motor commands. This parent-child communication pattern is the basis for drone swarms, robot fleets, and distributed robotic systems.",
    youtubeSearch: "Arduino swarm robots NRF24L01 leader follower",
    finalOutputImage: "/images/outputs/sci-091-output.webp",
    tags: ["swarm-robotics", "NRF24L01", "multi-robot", "wireless", "leader-follower"],
  },

  // =========================================================================
  // LEVEL 92 — Computer Vision Robot with OpenCV + Raspberry Pi
  // =========================================================================
  {
    id: "sci-092",
    level: 92,
    title: "Color-Tracking Robot with Raspberry Pi + OpenCV",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 510,
    description:
      "Use a Raspberry Pi camera and OpenCV to make a robot track and follow a colored object in real time. A doorway into computer vision and AI-powered robotics!",
    materials: [
      mat("Raspberry Pi 4 (2GB+)", "rpi4"),
      mat("Raspberry Pi Camera Module v2", "rpi-camera"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Jumper Wires", "jumper-wires"),
      mat("Brightly Colored Ball (red/green/blue)", "color-ball"),
    ],
    steps: [
      "Set up Raspberry Pi OS on microSD card; enable camera interface in raspi-config.",
      "Install OpenCV: sudo apt install python3-opencv.",
      "Test camera: python3 -c 'import cv2; print(cv2.__version__)'.",
      "Wire L298N to RPi GPIO pins (e.g., BCM 17, 18, 22, 23 for motor control).",
      "Install RPi.GPIO library: sudo pip3 install RPi.GPIO.",
      "Write Python script: capture frame → convert to HSV → apply color mask → find contours.",
      "Calculate centroid of detected color blob: (cX, cY).",
      "If cX < frame_center-50 → turn left; if cX > frame_center+50 → turn right; else → forward.",
      "If detected area < min_area → move forward; if > max_area → stop (close enough).",
      "Test by moving a colored ball and watching the robot follow.",
    ],
    safetyInstructions: [
      "Power Raspberry Pi with a stable 5V 3A source — USB power banks may drop voltage.",
      "Ensure motor power and RPi power are separate (share GND only).",
      "Avoid direct sunlight — it interferes with color detection.",
      "Stop motors (GPIO cleanup) in a try/finally block to prevent runaways.",
    ],
    howItWorks:
      "OpenCV captures video frames from the camera. Each frame is converted from RGB to HSV color space, where colors are easier to isolate. A color mask filters only pixels in the target color range. findContours() detects the blob's outline, and moments() calculates its centroid. Based on the centroid's X position in the frame, the robot turns left or right to keep the object centered — real-time closed-loop control driven by vision.",
    youtubeSearch: "Raspberry Pi OpenCV color tracking robot Python",
    finalOutputImage: "/images/outputs/sci-092-output.webp",
    tags: ["computer-vision", "OpenCV", "Raspberry-Pi", "color-tracking", "Python"],
  },

  // =========================================================================
  // LEVEL 93 — ROS Introduction: Robot Operating System
  // =========================================================================
  {
    id: "sci-093",
    level: 93,
    title: "Introduction to ROS with a Mobile Robot",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 520,
    description:
      "Set up ROS (Robot Operating System) on a Raspberry Pi and control your robot using ROS topics and nodes. The industry-standard framework used in real-world robots!",
    materials: [
      mat("Raspberry Pi 4 (4GB recommended)", "rpi4"),
      mat("microSD 32GB+", "microsd"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors with Encoders", "encoder-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Laptop (Ubuntu 20.04 or VM)", "laptop"),
      mat("Ethernet Cable / WiFi", "ethernet"),
    ],
    steps: [
      "Install Ubuntu 20.04 Server on Raspberry Pi microSD card.",
      "Install ROS Noetic: follow wiki.ros.org/noetic/Installation/Ubuntu.",
      "On your laptop (Ubuntu 20.04), install ROS Noetic as well.",
      "Set ROS_MASTER_URI on RPi to laptop's IP for remote control.",
      "Create a ROS package: catkin_create_pkg scino_robot rospy std_msgs.",
      "Write a subscriber node (motor_controller.py) that listens to /cmd_vel topic.",
      "Map linear.x and angular.z from cmd_vel to L298N GPIO motor commands.",
      "On laptop, run: rosrun teleop_twist_keyboard teleop_twist_keyboard.py.",
      "Control robot with keyboard arrow keys over the network.",
      "Explore rqt_graph to visualize the node communication graph.",
    ],
    safetyInstructions: [
      "ROS setup requires careful network configuration — follow IP settings precisely.",
      "Always shutdown ROS nodes (Ctrl+C) before disconnecting power.",
      "Test robot on the ground away from stairs.",
    ],
    howItWorks:
      "ROS is a middleware framework that lets software components (nodes) communicate via a publish/subscribe message system. The teleop_twist_keyboard node publishes velocity commands to the /cmd_vel topic. Your motor_controller node subscribes to this topic and translates Twist messages (linear and angular velocity) into GPIO signals for the motor driver. This decoupled architecture allows complex robot systems to be built from independent, reusable components.",
    youtubeSearch: "ROS Noetic Raspberry Pi robot tutorial beginner",
    finalOutputImage: "/images/outputs/sci-093-output.webp",
    tags: ["ROS", "Raspberry-Pi", "middleware", "cmd_vel", "professional"],
  },

  // =========================================================================
  // LEVEL 94 — Drone Build: Quadcopter from Scratch
  // =========================================================================
  {
    id: "sci-094",
    level: 94,
    title: "Build a Quadcopter Drone from Scratch",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 540,
    description:
      "Assemble a real quadcopter drone — frame, motors, ESCs, flight controller, and radio system. Learn the physics of drone flight and configure Betaflight for your first hover!",
    materials: [
      mat("F450 Quadcopter Frame", "f450-frame"),
      mat("4× 1000KV Brushless Motors", "brushless-motor"),
      mat("4× 30A ESC (Electronic Speed Controller)", "esc-30a"),
      mat("Flight Controller (CC3D or Betaflight F4)", "flight-controller"),
      mat("10×4.5 Propellers (2 CW, 2 CCW)", "propellers"),
      mat("Li-Po Battery 3S 2200mAh", "lipo-3s"),
      mat("FS-i6 Transmitter + Receiver", "radio-tx-rx"),
      mat("XT60 Connector + Power Distribution Board", "pdb"),
    ],
    steps: [
      "Assemble the F450 frame and mount motors at each arm end.",
      "Solder ESC power wires to the Power Distribution Board (PDB).",
      "Connect each ESC signal wire to flight controller motor outputs (M1–M4).",
      "Mount flight controller in center; connect receiver to FC's SBUS/PPM port.",
      "Install Betaflight Configurator on your laptop and connect FC via USB.",
      "Set motor order and direction in Betaflight (props-out configuration).",
      "Calibrate ESCs (all throttle high, power on, wait for beep, throttle low).",
      "Bind radio transmitter to receiver; verify all sticks move in Betaflight.",
      "Set up modes: Angle mode (stabilized) on switch for beginner flying.",
      "FIRST FLIGHT: outdoors, open area, hover at 50cm, learn the feel.",
    ],
    safetyInstructions: [
      "ALWAYS remove propellers when configuring and testing on the bench.",
      "Never arm the drone indoors during initial setup.",
      "Check local regulations — drone flying requires registration in most countries.",
      "Wear safety glasses during bench testing.",
      "Never fly near people, airports, or restricted areas.",
      "Li-Po fire risk: use fireproof bag for storage and charging.",
    ],
    howItWorks:
      "A quadcopter flies by spinning four motors at different speeds. Opposite motors spin in opposite directions to cancel torque. The flight controller uses an IMU (gyroscope + accelerometer) to measure tilt and rotation. A PID loop adjusts motor speeds hundreds of times per second to maintain level flight. Radio commands shift the thrust balance between motors to pitch, roll, and yaw the drone.",
    youtubeSearch: "build quadcopter drone from scratch Betaflight tutorial",
    finalOutputImage: "/images/outputs/sci-094-output.webp",
    tags: ["drone", "quadcopter", "Betaflight", "brushless", "flight-controller"],
  },

  // =========================================================================
  // LEVEL 95 — Machine Learning on Microcontroller (TinyML)
  // =========================================================================
  {
    id: "sci-095",
    level: 95,
    title: "TinyML — Gesture Recognition on Arduino Nano 33 BLE",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 555,
    description:
      "Train a tiny machine learning model to recognize hand gestures using the Arduino Nano 33 BLE Sense's built-in IMU. Deploy the model directly on the microcontroller — no internet needed!",
    materials: [
      mat("Arduino Nano 33 BLE Sense", "nano33-ble"),
      mat("USB-C Cable", "usb-c-cable"),
      mat("Laptop with Chrome Browser", "laptop"),
    ],
    steps: [
      "Install Arduino IDE and the Arduino Mbed OS Nano board package.",
      "Install Arduino_LSM9DS1 and TensorFlowLite libraries from Library Manager.",
      "Open the IMU Capture sketch; upload to Nano 33 BLE Sense.",
      "Record 10+ samples of Gesture 1 (e.g., punch) and Gesture 2 (e.g., flex) via Serial Monitor → save as CSV.",
      "Open Google Colab; upload the TinyML training notebook.",
      "Load your CSV data, train a simple neural network (2 LSTM or Dense layers).",
      "Export the trained model as a TensorFlow Lite model (.tflite) → convert to a C array (.h file).",
      "Add the model .h file to your Arduino sketch.",
      "Upload the inference sketch — it reads IMU data and runs the model.",
      "Test: perform gestures and observe the Serial Monitor print predictions.",
    ],
    safetyInstructions: [
      "Handle Nano 33 BLE Sense carefully — its onboard sensors are fragile.",
      "Ensure laptop USB port delivers sufficient current for stable operation.",
      "Keep gesture samples consistent — inconsistent data leads to poor accuracy.",
    ],
    howItWorks:
      "The Nano 33 BLE Sense's IMU records accelerometer and gyroscope data when you perform a gesture. This time-series data is collected as training samples. A neural network in Google Colab learns the pattern differences between gestures. The trained model is quantized to int8 and converted to C code that runs on the Nano's ARM Cortex-M4 processor. During inference, live IMU data is fed to the model and a prediction (gesture class) is output — all running on a €30 microcontroller!",
    youtubeSearch: "Arduino Nano 33 BLE TinyML gesture recognition tutorial",
    finalOutputImage: "/images/outputs/sci-095-output.webp",
    tags: ["TinyML", "machine-learning", "gesture-recognition", "IMU", "TensorFlow-Lite"],
  },

  // =========================================================================
  // LEVEL 96 — Humanoid Robot Hand (Servo-Actuated with Flex Sensors)
  // =========================================================================
  {
    id: "sci-096",
    level: 96,
    title: "Robotic Hand with Flex Sensor Glove",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 560,
    description:
      "Build a robotic hand that mimics your finger movements in real time. Wear a glove with flex sensors — bend your finger, the robot finger bends too. Prosthetics technology at home!",
    materials: [
      mat("Arduino Uno", "arduino-uno"),
      mat("5× SG90 Servo Motors (one per finger)", "sg90-servo"),
      mat("5× Flex Sensors", "flex-sensor"),
      mat("5× 10kΩ Resistors", "resistor-10k"),
      mat("3D Printed or Cardboard Robotic Hand", "robot-hand"),
      mat("Fishing Line (tendons)", "fishing-line"),
      mat("Cloth Glove", "cloth-glove"),
      mat("External 5V 3A Power Supply", "power-supply-5v"),
      mat("Breadboard + Jumper Wires", "breadboard"),
    ],
    steps: [
      "Build or 3D-print the robotic hand with 5 fingers and string attachment points.",
      "Thread fishing line through each finger joint; attach to a servo horn.",
      "Mount all 5 SG90 servos on the hand base (wrist area).",
      "Wire servos to Arduino pins 3–7; power from external 5V 3A supply.",
      "Attach flex sensors to the glove fingers; wire each as a voltage divider with 10kΩ resistor to Arduino A0–A4.",
      "Map analog reading (straight ~200, bent ~700) to servo angle (0°–90°).",
      "Upload the glove→hand mirroring code.",
      "Wear the glove, make a fist — the robot hand closes.",
      "Open fingers one by one — observe individual finger control.",
      "Demo: write your name in the air → robot hand copies.",
    ],
    safetyInstructions: [
      "Power servos from external supply — 5 servos together draw too much current for Arduino.",
      "Keep fishing line tension appropriate — too tight can damage servo gears.",
      "Test servo range before full assembly to avoid over-travel.",
    ],
    howItWorks:
      "Flex sensors change resistance when bent (straight ~25kΩ, bent ~100kΩ). Connected as a voltage divider with a fixed resistor, they produce a voltage that changes with finger bend angle. Arduino's analogRead() samples this voltage 100+ times per second. The value is mapped to a servo angle using map(), and the servo pulls the tendon (fishing line) to curl the finger. Five independent channels give full five-finger mimicry.",
    youtubeSearch: "Arduino robotic hand flex sensor glove servo finger",
    finalOutputImage: "/images/outputs/sci-096-output.webp",
    tags: ["robotic-hand", "flex-sensor", "prosthetics", "servo", "glove-control"],
  },

  // =========================================================================
  // LEVEL 97 — Autonomous Navigation with GPS + Compass
  // =========================================================================
  {
    id: "sci-097",
    level: 97,
    title: "GPS-Guided Autonomous Outdoor Robot",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 575,
    description:
      "Program a robot to autonomously navigate to GPS waypoints outdoors using a GPS module and digital compass. Set a destination coordinate — the robot drives there by itself!",
    materials: [
      mat("Arduino Mega 2560", "arduino-mega"),
      mat("NEO-6M GPS Module", "neo6m-gps"),
      mat("HMC5883L / QMC5883 Compass Module", "compass"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis (large)", "large-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("Jumper Wires", "jumper-wires"),
    ],
    steps: [
      "Connect NEO-6M GPS: TX→Mega RX1(19), RX→Mega TX1(18); use SoftwareSerial if using Uno.",
      "Connect HMC5883L compass via I2C: SDA→20, SCL→21.",
      "Install TinyGPS++ and QMC5883LCompass libraries.",
      "Calibrate compass: rotate module in figure-8 pattern; record min/max X,Y values.",
      "Get GPS fix outdoors (takes 1–3 minutes first time).",
      "Set target waypoint coordinates (latitude, longitude).",
      "Calculate bearing to target using atan2() with destination and current GPS coords.",
      "Compare bearing to compass heading; turn robot to align with target bearing.",
      "Drive forward; repeat bearing calculation every 500ms.",
      "Stop when distance to target < 2 meters.",
    ],
    safetyInstructions: [
      "Test in an open outdoor area — GPS requires clear sky view.",
      "GPS accuracy is ±2–5m — robot will not stop at exact point.",
      "Keep robot on a flat surface; slopes affect compass readings.",
      "Always have a manual stop button (kill switch) connected.",
    ],
    howItWorks:
      "The NEO-6M GPS receiver decodes satellite signals to provide latitude/longitude coordinates (±2–5m accuracy). The bearing from current position to target is calculated using the atan2() function on the coordinate difference. The HMC5883L digital compass provides the robot's current heading using Earth's magnetic field. The robot rotates to align its heading with the calculated bearing, then drives forward, updating every 500ms. This is how real autonomous land vehicles navigate to waypoints.",
    youtubeSearch: "Arduino GPS autonomous robot navigation waypoint compass",
    finalOutputImage: "/images/outputs/sci-097-output.webp",
    tags: ["GPS", "autonomous-navigation", "compass", "waypoint", "outdoor-robot"],
  },

  // =========================================================================
  // LEVEL 98 — AI Object Detection Robot with Coral USB Accelerator
  // =========================================================================
  {
    id: "sci-098",
    level: 98,
    title: "Real-Time Object Detection Robot (Coral Edge TPU)",
    category: "Advanced Robotics",
    difficulty: "Expert",
    xpReward: 590,
    description:
      "Add real-time AI object detection to your robot using Google Coral USB Accelerator and a Raspberry Pi. The robot identifies objects in its view and reacts — the closest to real AI robotics you can get!",
    materials: [
      mat("Raspberry Pi 4 (4GB)", "rpi4"),
      mat("Google Coral USB Accelerator", "coral-usb"),
      mat("Raspberry Pi Camera v2", "rpi-camera"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors", "dc-gear-motor"),
      mat("Robot Chassis", "robot-chassis"),
      mat("Li-Po Battery 7.4V", "lipo-battery"),
      mat("USB-A Hub (powered)", "usb-hub"),
    ],
    steps: [
      "Set up Raspberry Pi OS 64-bit on RPi 4.",
      "Install Coral Edge TPU runtime: follow coral.ai/docs/accelerator/get-started/.",
      "Install PyCoral library: pip3 install pycoral.",
      "Download MobileNet SSD v2 TFLite model compiled for Edge TPU.",
      "Download COCO labels file (90 common object categories).",
      "Write detect.py: capture frame → run inference on Coral → parse detections.",
      "Print detected object labels and confidence scores.",
      "Add decision logic: if 'person' detected with >70% confidence → stop robot.",
      "If 'bottle' detected → turn right; if 'chair' → turn left (demonstrate reactive behavior).",
      "Test by placing different objects in front of the robot and observing reactions.",
    ],
    safetyInstructions: [
      "Coral USB Accelerator runs hot — ensure adequate ventilation.",
      "Always test robot reactions at low speed first.",
      "Ensure powered USB hub provides sufficient current for Coral.",
    ],
    howItWorks:
      "The Coral USB Accelerator contains Google's Edge TPU chip, capable of running TensorFlow Lite models at 4 TOPS (trillion operations per second) with minimal power. MobileNet SSD is a pre-trained neural network that detects 90 object categories from the COCO dataset. On each video frame, the model outputs bounding boxes, labels, and confidence scores. The robot's Python code reads these detections and maps object types to motor commands — creating a robot that 'sees' and reacts to its environment.",
    youtubeSearch: "Raspberry Pi Google Coral object detection robot Python",
    finalOutputImage: "/images/outputs/sci-098-output.webp",
    tags: ["AI", "object-detection", "Coral-TPU", "TensorFlow-Lite", "computer-vision"],
  },

  // =========================================================================
  // LEVEL 99 — Full Autonomous Indoor Robot (Ultrasonic SLAM + AI Avoidance)
  // =========================================================================
  {
    id: "sci-099",
    level: 99,
    title: "Full Autonomous Indoor Robot — The Almost-Complete System",
    category: "Advanced Robotics",
    difficulty: "Master",
    xpReward: 620,
    description:
      "Integrate everything learned: autonomous navigation, obstacle avoidance, path planning, and basic AI decision making into one complete indoor robot platform. This is your penultimate project.",
    materials: [
      mat("Raspberry Pi 4 (4GB)", "rpi4"),
      mat("Arduino Mega 2560", "arduino-mega"),
      mat("RPLidar A1 (2D LiDAR)", "rplidar-a1"),
      mat("MPU-6050 IMU", "mpu6050"),
      mat("L298N Motor Driver", "l298n"),
      mat("2× DC Gear Motors with Encoders", "encoder-motor"),
      mat("Large Robot Chassis", "large-chassis"),
      mat("Li-Po Battery 11.1V 5Ah", "lipo-11v"),
      mat("DC-DC Buck Converter 5V 5A", "buck-converter"),
      mat("Laptop (ROS workstation)", "laptop"),
    ],
    steps: [
      "Set up ROS Noetic on Raspberry Pi (from Level 93).",
      "Connect RPLidar A1 via USB; install rplidar_ros package.",
      "Run: roslaunch rplidar_ros rplidar.launch — verify LaserScan topic.",
      "Install gmapping package for SLAM map building.",
      "Connect Arduino Mega as motor controller; communicate via rosserial.",
      "Run robot around the room; gmapping builds a 2D occupancy map.",
      "Save the map: rosrun map_server map_saver -f my_room_map.",
      "Install navigation stack (move_base); configure costmaps and planners.",
      "Set a 2D Nav Goal in RViz — robot plans and navigates to the goal autonomously.",
      "Add obstacle detection re-planning: robot re-routes when new obstacles appear.",
    ],
    safetyInstructions: [
      "LiDAR laser is Class 1 eye-safe, but avoid staring into the rotating head.",
      "Always test navigation at slow speed (max_vel_x: 0.2 m/s) initially.",
      "Ensure emergency stop is accessible at all times.",
      "Clear the test area of tripping hazards before autonomous runs.",
    ],
    howItWorks:
      "RPLidar spins 360° and fires a laser to measure distances to walls and objects, building a real-time point cloud. GMapping uses this LiDAR data plus wheel odometry to simultaneously build a map and track the robot's position (SLAM). The ROS navigation stack plans collision-free paths on this map using the A* algorithm. move_base continuously adjusts motor commands to follow the planned path while avoiding dynamic obstacles detected by LiDAR — this is exactly how professional service robots operate.",
    youtubeSearch: "ROS navigation stack SLAM gmapping LiDAR robot tutorial",
    finalOutputImage: "/images/outputs/sci-099-output.webp",
    tags: ["ROS", "SLAM", "LiDAR", "navigation-stack", "autonomous", "gmapping"],
  },

  // =========================================================================
  // LEVEL 100 — FINAL PROJECT: Your Own Invention
  // =========================================================================
  {
    id: "sci-100",
    level: 100,
    title: "🏆 FINAL PROJECT — Build Your Own Robot Invention",
    category: "Advanced Robotics",
    difficulty: "Master",
    xpReward: 1000,
    description:
      "You have reached the final level of the Scientist Program. This is YOUR project — no instructions, no guided steps. Design, build, and present a robot that solves a real problem in your life or community. This is where a student becomes an inventor.",
    materials: [
      mat("Any components you need (student's choice)", "components-choice"),
      mat("Design notebook / paper for sketching", "notebook"),
      mat("3D printer access (if available)", "3d-printer"),
      mat("Soldering iron + solder", "soldering-iron"),
      mat("Multimeter", "multimeter"),
      mat("Your creativity and 100 levels of knowledge", "brain-icon"),
    ],
    steps: [
      "DEFINE THE PROBLEM: Write down a real problem you want to solve with a robot.",
      "RESEARCH: Study existing solutions; find what's missing or can be improved.",
      "SKETCH YOUR DESIGN: Draw the robot — what sensors, actuators, and controllers will it use?",
      "LIST COMPONENTS: Make a bill of materials; calculate estimated cost.",
      "BUILD PROTOTYPE v1: Focus on core functionality; don't worry about looks yet.",
      "TEST AND DOCUMENT: Record what works and what doesn't; keep a build log.",
      "ITERATE: Fix problems; improve the design; build v2 if needed.",
      "POLISH: Add final touches — housing, wiring management, power switch.",
      "PRESENT: Create a short video demo explaining your problem and solution.",
      "SUBMIT: Upload your project to the SCINO community gallery and earn your Certificate.",
    ],
    safetyInstructions: [
      "Follow all safety rules learned in previous levels — especially battery, soldering, and high-voltage safety.",
      "Get an adult to review your design before building if you are under 18.",
      "Document all safety considerations for your specific project.",
      "Never test untested electrical designs connected to mains power.",
    ],
    howItWorks:
      "This level has no single 'how it works' — it's yours to define. Every great robot starts with a problem worth solving. You now have knowledge of sensors, actuators, microcontrollers, wireless communication, computer vision, AI, ROS, and robotics principles. The question is: what will YOU build? The SCINO community is waiting to see your invention.",
    youtubeSearch: "student robotics projects final year invention showcase",
    finalOutputImage: "/images/outputs/sci-100-output.webp",
    tags: ["final-project", "invention", "capstone", "open-ended", "certificate"],
    isFinalProject: true,
    certificateAwarded: true,
  },
];

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

/**
 * Returns all 20 levels (81–100) as an array.
 */
export const getAllLevels = () => LEVELS_81_TO_100;

/**
 * Returns a single level by its level number.
 * @param {number} levelNumber — 81 to 100
 * @returns {object|undefined}
 */
export const getLevelByNumber = (levelNumber) =>
  LEVELS_81_TO_100.find((lvl) => lvl.level === levelNumber);

/**
 * Returns a single level by its unique string ID.
 * @param {string} id — e.g. "sci-087"
 * @returns {object|undefined}
 */
export const getLevelById = (id) =>
  LEVELS_81_TO_100.find((lvl) => lvl.id === id);

/**
 * Returns levels filtered by difficulty string.
 * @param {"Advanced"|"Expert"|"Master"} difficulty
 * @returns {object[]}
 */
export const getLevelsByDifficulty = (difficulty) =>
  LEVELS_81_TO_100.filter((lvl) => lvl.difficulty === difficulty);

/**
 * Returns the total XP available in this section.
 * @returns {number}
 */
export const getTotalXP = () =>
  LEVELS_81_TO_100.reduce((sum, lvl) => sum + lvl.xpReward, 0);

/**
 * Returns levels that award a certificate on completion.
 * @returns {object[]}
 */
export const getCertificateLevels = () =>
  LEVELS_81_TO_100.filter((lvl) => lvl.certificateAwarded);

export default LEVELS_81_TO_100;
