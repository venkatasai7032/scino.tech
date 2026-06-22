// ============================================================
//  SCINO Coding Program — Levels 1–50
//  Stage: Beginner → Intermediate → Pre-Advanced
//  Theme: Foundations, Data Structures, Algorithms, Patterns
//  Module 7/8
// ============================================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const codingLevels1to50 = [

  // ──────────────────────────────────────────
  // SECTION A: Beginner Foundations (1–10)
  // ──────────────────────────────────────────

  {
    levelNumber: 1,
    id: 'coding-1',
    title: 'Hello, World!',
    subtitle: 'Your very first program',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '20 minutes',
    xpReward: 20,
    category: 'Basics',
    overview: 'Learn how to run a simple program and print text to the screen.',
    learningObjectives: [
      'Understand what a program is',
      'Write and run a basic script',
      'Print output to the console'
    ],
    materials: [
      { name: 'Laptop or PC', imageUrl: '/materials/laptop.jpg' },
      { name: 'Code Editor (VS Code)', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create File', instruction: 'Create a new file named hello.js in your project folder.', imageUrl: '/steps/c1-step1.jpg' },
      { stepNumber: 2, title: 'Write Code', instruction: 'Type: console.log("Hello, World!");', imageUrl: '/steps/c1-step2.jpg' },
      { stepNumber: 3, title: 'Run It', instruction: 'Open terminal and run: node hello.js', imageUrl: '/steps/c1-step3.jpg' }
    ],
    explanation: {
      simple: 'Programs are instructions for the computer. This one says: show this message on screen.',
      scientific: 'The JavaScript runtime reads your source code, interprets it line by line, and executes the print instruction to stdout.',
      keyTerms: [
        { term: 'Console', definition: 'A text-based output area where programs display messages' },
        { term: 'Script', definition: 'A file containing executable instructions' }
      ]
    },
    quiz: [
      { question: 'What does console.log() do?', options: ['Deletes a file', 'Prints text to the console', 'Turns off the computer', 'Opens a browser'], correctIndex: 1 },
      { question: 'What command runs a JS file in terminal?', options: ['run hello.js', 'node hello.js', 'start hello.js', 'open hello.js'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c1-hello.jpg'
  },

  {
    levelNumber: 2,
    id: 'coding-2',
    title: 'Variables & Data Types',
    subtitle: 'Store and use information',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 25,
    category: 'Core Concepts',
    overview: 'Learn how to store values using variables and understand common data types like strings, numbers, and booleans.',
    learningObjectives: [
      'Create variables using let and const',
      'Understand strings, numbers, and booleans',
      'Use typeof to check data types'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Variables', instruction: 'Write: let name = "Asha"; const age = 12;', imageUrl: '/steps/c2-step1.jpg' },
      { stepNumber: 2, title: 'Print Them', instruction: 'console.log(name, age);', imageUrl: '/steps/c2-step2.jpg' },
      { stepNumber: 3, title: 'Boolean Type', instruction: 'Add: let isCoder = true; console.log(typeof isCoder);', imageUrl: '/steps/c2-step3.jpg' }
    ],
    explanation: {
      simple: 'Variables are labeled boxes that hold values. You can put text, numbers, or true/false inside them.',
      scientific: 'Variables bind identifiers to memory locations. JavaScript is dynamically typed, meaning types are determined at runtime.',
      keyTerms: [
        { term: 'String', definition: 'Text data enclosed in quotes, like "hello"' },
        { term: 'Number', definition: 'Numeric data like 42 or 3.14' },
        { term: 'Boolean', definition: 'A true or false value' }
      ]
    },
    quiz: [
      { question: 'Which is a boolean value?', options: ['"blue"', '42', 'true', '"42"'], correctIndex: 2 },
      { question: 'What does typeof return for "hello"?', options: ['number', 'boolean', 'string', 'object'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c2-variables.jpg'
  },

  {
    levelNumber: 3,
    id: 'coding-3',
    title: 'Math & Operators',
    subtitle: 'Compute values like a calculator',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '25 minutes',
    xpReward: 25,
    category: 'Core Concepts',
    overview: 'Perform arithmetic calculations using JavaScript operators.',
    learningObjectives: [
      'Use +, -, *, / and % operators',
      'Understand order of operations',
      'Store computed results in variables'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Basic Math', instruction: 'let sum = 10 + 5; let diff = 10 - 3;', imageUrl: '/steps/c3-step1.jpg' },
      { stepNumber: 2, title: 'Multiply & Divide', instruction: 'let area = 4 * 7; let half = 20 / 2;', imageUrl: '/steps/c3-step2.jpg' },
      { stepNumber: 3, title: 'Modulus', instruction: 'let remainder = 17 % 5; console.log(remainder);', imageUrl: '/steps/c3-step3.jpg' }
    ],
    explanation: {
      simple: 'JavaScript can do math instantly. The % operator gives you the leftover after division.',
      scientific: 'Arithmetic operators follow PEMDAS precedence. The modulus operator returns the remainder of integer division.'
    },
    quiz: [
      { question: 'What is 17 % 5?', options: ['3', '2', '12', '5'], correctIndex: 1 },
      { question: 'What is 4 + 3 * 2?', options: ['14', '10', '9', '7'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c3-math.jpg'
  },

  {
    levelNumber: 4,
    id: 'coding-4',
    title: 'If / Else Decisions',
    subtitle: 'Make choices in code',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Logic',
    overview: 'Use conditional statements to make your program choose different paths.',
    learningObjectives: [
      'Write if / else if / else blocks',
      'Use comparison operators (>, <, >=, <=, ===, !==)',
      'Combine conditions with && and ||'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Simple If', instruction: 'let score = 85; if (score >= 60) { console.log("Pass"); }', imageUrl: '/steps/c4-step1.jpg' },
      { stepNumber: 2, title: 'If / Else', instruction: 'Add else { console.log("Try again"); }', imageUrl: '/steps/c4-step2.jpg' },
      { stepNumber: 3, title: 'Else If Chain', instruction: 'Add grade levels: A (90+), B (80+), C (70+), F (below 70).', imageUrl: '/steps/c4-step3.jpg' }
    ],
    explanation: {
      simple: 'If statements let your code make decisions, just like you decide what to wear based on weather.',
      scientific: 'Conditional branching evaluates boolean expressions to determine which code block executes.'
    },
    quiz: [
      { question: 'Which operator means "strictly equal"?', options: ['=', '==', '===', '!='], correctIndex: 2 },
      { question: 'What does && mean?', options: ['OR', 'NOT', 'AND', 'EQUAL'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c4-ifelse.jpg'
  },

  {
    levelNumber: 5,
    id: 'coding-5',
    title: 'Loops: Repeat Tasks',
    subtitle: 'Automate repetition',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 30,
    category: 'Loops',
    overview: 'Use loops to repeat code without writing the same lines over and over.',
    learningObjectives: [
      'Write for loops with counters',
      'Use while loops',
      'Avoid infinite loops'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'For Loop', instruction: 'for (let i = 1; i <= 5; i++) { console.log(i); }', imageUrl: '/steps/c5-step1.jpg' },
      { stepNumber: 2, title: 'Countdown', instruction: 'for (let i = 10; i >= 1; i--) { console.log(i); }', imageUrl: '/steps/c5-step2.jpg' },
      { stepNumber: 3, title: 'While Loop', instruction: 'let n = 0; while (n < 3) { console.log(n); n++; }', imageUrl: '/steps/c5-step3.jpg' }
    ],
    explanation: {
      simple: 'Loops save time by repeating code automatically. Change the counter to control how many times it runs.',
      scientific: 'Iteration executes a code block repeatedly while a boolean condition remains true.'
    },
    quiz: [
      { question: 'How many times does for(i=0; i<3; i++) run?', options: ['2', '3', '4', '1'], correctIndex: 1 },
      { question: 'What causes an infinite loop?', options: ['Using let', 'Condition never becomes false', 'Using console.log', 'Short variable names'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c5-loops.jpg'
  },

  {
    levelNumber: 6,
    id: 'coding-6',
    title: 'Functions',
    subtitle: 'Create reusable code blocks',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Functions',
    overview: 'Functions let you bundle code into named, reusable blocks you can call anytime.',
    learningObjectives: [
      'Define functions with parameters',
      'Return values from functions',
      'Call functions with arguments'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Define Function', instruction: 'function greet(name) { return "Hello, " + name; }', imageUrl: '/steps/c6-step1.jpg' },
      { stepNumber: 2, title: 'Call Function', instruction: 'console.log(greet("Ravi"));', imageUrl: '/steps/c6-step2.jpg' },
      { stepNumber: 3, title: 'Multiple Params', instruction: 'function add(a, b) { return a + b; } console.log(add(3, 4));', imageUrl: '/steps/c6-step3.jpg' }
    ],
    explanation: {
      simple: 'Functions are mini-programs you name, fill with instructions, and reuse whenever needed.',
      scientific: 'Functions enable procedural abstraction by encapsulating logic under a named identifier with defined inputs and outputs.'
    },
    quiz: [
      { question: 'What keyword sends a value back from a function?', options: ['send', 'output', 'return', 'print'], correctIndex: 2 },
      { question: 'What are inputs to a function called?', options: ['Outputs', 'Parameters', 'Variables', 'Loops'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c6-functions.jpg'
  },

  {
    levelNumber: 7,
    id: 'coding-7',
    title: 'Arrays',
    subtitle: 'Store lists of values',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Data Structures',
    overview: 'Arrays let you store multiple values in a single ordered list.',
    learningObjectives: [
      'Create and access array elements',
      'Use push, pop, shift, unshift',
      'Loop through arrays'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Array', instruction: 'let colors = ["red", "blue", "green"];', imageUrl: '/steps/c7-step1.jpg' },
      { stepNumber: 2, title: 'Access Items', instruction: 'console.log(colors[0]); // "red"', imageUrl: '/steps/c7-step2.jpg' },
      { stepNumber: 3, title: 'Add & Remove', instruction: 'colors.push("yellow"); colors.pop();', imageUrl: '/steps/c7-step3.jpg' },
      { stepNumber: 4, title: 'Loop Array', instruction: 'for (let c of colors) { console.log(c); }', imageUrl: '/steps/c7-step4.jpg' }
    ],
    explanation: {
      simple: 'Arrays are like numbered shelves. Each shelf holds one value and has a number starting from 0.',
      scientific: 'Arrays are indexed collections stored contiguously in memory, providing O(1) access by index.'
    },
    quiz: [
      { question: 'What is the index of the first element?', options: ['1', '0', '-1', '2'], correctIndex: 1 },
      { question: 'What does push() do?', options: ['Removes first item', 'Adds item to end', 'Sorts the array', 'Reverses the array'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c7-arrays.jpg'
  },

  {
    levelNumber: 8,
    id: 'coding-8',
    title: 'Objects',
    subtitle: 'Group related data together',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Data Structures',
    overview: 'Objects store key-value pairs, perfect for representing real-world things.',
    learningObjectives: [
      'Create objects with properties',
      'Access and update properties',
      'Nest objects and arrays inside objects'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Object', instruction: 'let student = { name: "Ravi", grade: 6, active: true };', imageUrl: '/steps/c8-step1.jpg' },
      { stepNumber: 2, title: 'Access Property', instruction: 'console.log(student.name); console.log(student["grade"]);', imageUrl: '/steps/c8-step2.jpg' },
      { stepNumber: 3, title: 'Update & Add', instruction: 'student.grade = 7; student.city = "Hyderabad";', imageUrl: '/steps/c8-step3.jpg' }
    ],
    explanation: {
      simple: 'Objects keep related data together. A student object can hold name, grade, and city all in one place.',
      scientific: 'Objects are hash-map-like structures that map string keys to arbitrary values, supporting O(1) average property access.'
    },
    quiz: [
      { question: 'How do you access a property called "name"?', options: ['obj->name', 'obj.name', 'obj(name)', 'obj#name'], correctIndex: 1 },
      { question: 'Objects store data as:', options: ['Indexed lists', 'Key-value pairs', 'Single values', 'Binary trees'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c8-objects.jpg'
  },

  {
    levelNumber: 9,
    id: 'coding-9',
    title: 'User Input & Output',
    subtitle: 'Make interactive programs',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Interaction',
    overview: 'Learn to accept user input from the console and respond dynamically.',
    learningObjectives: [
      'Use readline module for console input',
      'Process user text',
      'Build a simple Q&A flow'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Import readline', instruction: 'const readline = require("readline");', imageUrl: '/steps/c9-step1.jpg' },
      { stepNumber: 2, title: 'Create Interface', instruction: 'const rl = readline.createInterface({ input: process.stdin, output: process.stdout });', imageUrl: '/steps/c9-step2.jpg' },
      { stepNumber: 3, title: 'Ask & Respond', instruction: 'rl.question("What is your name? ", (ans) => { console.log("Hello, " + ans); rl.close(); });', imageUrl: '/steps/c9-step3.jpg' }
    ],
    explanation: {
      simple: 'Interactive programs ask questions and use the answers. This makes software feel alive.',
      scientific: 'stdin provides an input stream that readline processes line-by-line using event-driven callbacks.'
    },
    quiz: [
      { question: 'Which module handles console input in Node?', options: ['fs', 'http', 'readline', 'path'], correctIndex: 2 },
      { question: 'Why do we call rl.close()?', options: ['To delete the file', 'To free the input stream', 'To print output', 'To start the program'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c9-input.jpg'
  },

  {
    levelNumber: 10,
    id: 'coding-10',
    title: 'Mini Project: Console Quiz Game',
    subtitle: 'Combine all Level 1-9 concepts',
    difficulty: DIFFICULTY.EASY,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Mini Project',
    overview: 'Build a console-based quiz game that asks questions, checks answers, and tracks score.',
    learningObjectives: [
      'Use variables, arrays, objects, and functions together',
      'Implement score tracking',
      'Create a simple game loop'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Store Questions', instruction: 'Create an array of question objects with question, options, and answer.', imageUrl: '/steps/c10-step1.jpg' },
      { stepNumber: 2, title: 'Ask Questions', instruction: 'Loop through questions and use readline to get user input.', imageUrl: '/steps/c10-step2.jpg' },
      { stepNumber: 3, title: 'Check & Score', instruction: 'Compare input to correct answer and increment score.', imageUrl: '/steps/c10-step3.jpg' },
      { stepNumber: 4, title: 'Show Results', instruction: 'Print final score and a message based on performance.', imageUrl: '/steps/c10-step4.jpg' }
    ],
    explanation: {
      simple: 'This project mixes everything you have learned. Variables store data, loops repeat questions, and conditions check answers.',
      scientific: 'Sequential execution, conditional branching, iteration, and data structures compose to create interactive software behavior.'
    },
    quiz: [
      { question: 'Which data structure best stores quiz questions?', options: ['A single string', 'An array of objects', 'A number', 'A boolean'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c10-quiz.jpg'
  },

  // ──────────────────────────────────────────
  // SECTION B: Intermediate Concepts (11–20)
  // ──────────────────────────────────────────

  {
    levelNumber: 11,
    id: 'coding-11',
    title: 'String Methods',
    subtitle: 'Manipulate text like a pro',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Strings',
    overview: 'Master built-in string methods to search, slice, and transform text.',
    learningObjectives: [
      'Use toUpperCase, toLowerCase, trim',
      'Use slice, indexOf, includes',
      'Use split and join'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Transform Case', instruction: 'let msg = "  Hello World  "; console.log(msg.trim().toUpperCase());', imageUrl: '/steps/c11-step1.jpg' },
      { stepNumber: 2, title: 'Search Text', instruction: 'console.log(msg.includes("World")); console.log(msg.indexOf("World"));', imageUrl: '/steps/c11-step2.jpg' },
      { stepNumber: 3, title: 'Split & Join', instruction: 'let words = "a,b,c".split(","); console.log(words.join(" - "));', imageUrl: '/steps/c11-step3.jpg' }
    ],
    explanation: {
      simple: 'String methods let you search inside text, change its case, cut pieces out, and combine strings.',
      scientific: 'Strings in JavaScript are immutable sequences of UTF-16 code units with prototype methods for transformation.'
    },
    quiz: [
      { question: 'What does trim() do?', options: ['Removes spaces from both ends', 'Deletes the string', 'Makes it uppercase', 'Reverses the string'], correctIndex: 0 },
      { question: 'What does split(",") return?', options: ['A string', 'An array', 'A number', 'A boolean'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c11-strings.jpg'
  },

  {
    levelNumber: 12,
    id: 'coding-12',
    title: 'Array Methods',
    subtitle: 'Powerful list operations',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 35,
    category: 'Arrays',
    overview: 'Learn essential array methods: forEach, map, filter, find, and reduce.',
    learningObjectives: [
      'Iterate with forEach',
      'Transform with map',
      'Filter and find elements'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'forEach', instruction: 'let nums = [1,2,3]; nums.forEach(n => console.log(n * 2));', imageUrl: '/steps/c12-step1.jpg' },
      { stepNumber: 2, title: 'map', instruction: 'let doubled = nums.map(n => n * 2); console.log(doubled);', imageUrl: '/steps/c12-step2.jpg' },
      { stepNumber: 3, title: 'filter', instruction: 'let big = nums.filter(n => n > 1); console.log(big);', imageUrl: '/steps/c12-step3.jpg' }
    ],
    explanation: {
      simple: 'Array methods process lists in one line. Map transforms, filter selects, and forEach visits each item.',
      scientific: 'Higher-order array methods accept callback functions and return new arrays, enabling functional programming patterns.'
    },
    quiz: [
      { question: 'map() returns:', options: ['Nothing', 'A new transformed array', 'A boolean', 'The original array'], correctIndex: 1 },
      { question: 'filter() keeps items that:', options: ['Are strings', 'Return true from the callback', 'Are at even indexes', 'Are undefined'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c12-array-methods.jpg'
  },

  {
    levelNumber: 13,
    id: 'coding-13',
    title: 'Arrow Functions',
    subtitle: 'Modern function syntax',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '25 minutes',
    xpReward: 30,
    category: 'ES6+',
    overview: 'Write shorter functions using arrow syntax.',
    learningObjectives: [
      'Convert regular functions to arrow functions',
      'Understand implicit return',
      'Use with array methods'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Basic Arrow', instruction: 'const add = (a, b) => a + b;', imageUrl: '/steps/c13-step1.jpg' },
      { stepNumber: 2, title: 'Single Param', instruction: 'const double = n => n * 2;', imageUrl: '/steps/c13-step2.jpg' },
      { stepNumber: 3, title: 'With Array Methods', instruction: 'let evens = [1,2,3,4].filter(n => n % 2 === 0);', imageUrl: '/steps/c13-step3.jpg' }
    ],
    explanation: {
      simple: 'Arrow functions are a shorter way to write functions. They skip the function keyword.',
      scientific: 'Arrow functions provide concise syntax and lexically bind the this context from their enclosing scope.'
    },
    quiz: [
      { question: 'Arrow functions use which symbol?', options: ['->', '=>', '::', '>>'], correctIndex: 1 },
      { question: 'When can you skip the return keyword?', options: ['Never', 'When the body is a single expression', 'Always', 'When there are no params'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c13-arrow.jpg'
  },

  {
    levelNumber: 14,
    id: 'coding-14',
    title: 'Template Literals',
    subtitle: 'Dynamic string building',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '20 minutes',
    xpReward: 25,
    category: 'ES6+',
    overview: 'Use backticks and ${} to embed expressions inside strings.',
    learningObjectives: [
      'Use template literals instead of concatenation',
      'Embed variables and expressions',
      'Create multi-line strings'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Basic Template', instruction: 'let name = "Asha"; console.log(`Hello, ${name}!`);', imageUrl: '/steps/c14-step1.jpg' },
      { stepNumber: 2, title: 'Expressions', instruction: 'console.log(`Sum: ${3 + 4}`);', imageUrl: '/steps/c14-step2.jpg' },
      { stepNumber: 3, title: 'Multi-line', instruction: 'let poem = `Line one\nLine two\nLine three`; console.log(poem);', imageUrl: '/steps/c14-step3.jpg' }
    ],
    explanation: {
      simple: 'Template literals let you insert variables directly into text using backticks and dollar-curly syntax.',
      scientific: 'Template literals support expression interpolation and multi-line strings, replacing concatenation patterns.'
    },
    quiz: [
      { question: 'Template literals use which quotes?', options: ['Single quotes', 'Double quotes', 'Backticks', 'No quotes'], correctIndex: 2 },
      { question: 'How do you embed a variable?', options: ['#{var}', '${var}', '&{var}', '%{var}'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c14-template.jpg'
  },

  {
    levelNumber: 15,
    id: 'coding-15',
    title: 'Scope & Closures',
    subtitle: 'Where variables live',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Core Concepts',
    overview: 'Understand where variables are accessible and how closures capture them.',
    learningObjectives: [
      'Understand global, function, and block scope',
      'Differentiate let, const, and var scoping',
      'Create and use closures'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Block Scope', instruction: 'if (true) { let x = 10; } console.log(x); // Error!', imageUrl: '/steps/c15-step1.jpg' },
      { stepNumber: 2, title: 'Function Scope', instruction: 'function test() { let y = 5; } // y not accessible outside', imageUrl: '/steps/c15-step2.jpg' },
      { stepNumber: 3, title: 'Closure', instruction: 'function counter() { let n = 0; return () => ++n; } const inc = counter(); console.log(inc(), inc());', imageUrl: '/steps/c15-step3.jpg' }
    ],
    explanation: {
      simple: 'Scope is the area where a variable exists. A closure remembers variables even after its parent function finishes.',
      scientific: 'Closures capture the lexical environment of their creation, maintaining references to outer scope variables beyond their lifetime.'
    },
    quiz: [
      { question: 'let is scoped to:', options: ['Global only', 'The nearest block', 'The entire file', 'The nearest object'], correctIndex: 1 },
      { question: 'A closure captures:', options: ['Only numbers', 'Variables from its outer scope', 'Global CSS', 'HTML elements'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c15-scope.jpg'
  },

  {
    levelNumber: 16,
    id: 'coding-16',
    title: 'Destructuring',
    subtitle: 'Extract values elegantly',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 35,
    category: 'ES6+',
    overview: 'Unpack values from arrays and objects into individual variables.',
    learningObjectives: [
      'Destructure arrays',
      'Destructure objects',
      'Use default values and renaming'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Array Destructuring', instruction: 'const [a, b, c] = [1, 2, 3]; console.log(a, b, c);', imageUrl: '/steps/c16-step1.jpg' },
      { stepNumber: 2, title: 'Object Destructuring', instruction: 'const { name, age } = { name: "Ravi", age: 12 };', imageUrl: '/steps/c16-step2.jpg' },
      { stepNumber: 3, title: 'Defaults & Rename', instruction: 'const { city = "Unknown", name: studentName } = obj;', imageUrl: '/steps/c16-step3.jpg' }
    ],
    explanation: {
      simple: 'Destructuring pulls values out of arrays or objects and assigns them to named variables in one step.',
      scientific: 'Destructuring assignment uses pattern matching against the structure of arrays and objects for binding.'
    },
    quiz: [
      { question: 'const { x } = { x: 5 } sets x to:', options: ['undefined', '5', '{ x: 5 }', 'null'], correctIndex: 1 },
      { question: 'const [a,,c] = [1,2,3] sets c to:', options: ['1', '2', '3', 'undefined'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c16-destructure.jpg'
  },

  {
    levelNumber: 17,
    id: 'coding-17',
    title: 'Spread & Rest Operators',
    subtitle: 'Expand and collect values',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 35,
    category: 'ES6+',
    overview: 'Use ... to spread arrays/objects or collect remaining arguments.',
    learningObjectives: [
      'Spread arrays and objects',
      'Use rest parameters in functions',
      'Clone and merge data'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Spread Array', instruction: 'const a = [1,2]; const b = [...a, 3, 4]; console.log(b);', imageUrl: '/steps/c17-step1.jpg' },
      { stepNumber: 2, title: 'Spread Object', instruction: 'const obj = { x: 1 }; const copy = { ...obj, y: 2 };', imageUrl: '/steps/c17-step2.jpg' },
      { stepNumber: 3, title: 'Rest Params', instruction: 'function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }', imageUrl: '/steps/c17-step3.jpg' }
    ],
    explanation: {
      simple: 'Spread unpacks items. Rest collects leftover items. Both use three dots, but in different positions.',
      scientific: 'The spread operator iterates over iterables to expand elements; rest parameters aggregate arguments into an array.'
    },
    quiz: [
      { question: 'Spread is used to:', options: ['Delete arrays', 'Expand arrays/objects', 'Sort values', 'Create loops'], correctIndex: 1 },
      { question: 'Rest parameters collect:', options: ['CSS styles', 'Remaining function arguments', 'HTML tags', 'File names'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c17-spread.jpg'
  },

  {
    levelNumber: 18,
    id: 'coding-18',
    title: 'Classes & OOP Basics',
    subtitle: 'Object-oriented JavaScript',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'OOP',
    overview: 'Create blueprints for objects using JavaScript classes.',
    learningObjectives: [
      'Define classes with constructor',
      'Add methods to classes',
      'Use the new keyword'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Class', instruction: 'class Animal { constructor(name) { this.name = name; } }', imageUrl: '/steps/c18-step1.jpg' },
      { stepNumber: 2, title: 'Add Method', instruction: 'speak() { console.log(this.name + " makes a sound."); }', imageUrl: '/steps/c18-step2.jpg' },
      { stepNumber: 3, title: 'Instantiate', instruction: 'const dog = new Animal("Rex"); dog.speak();', imageUrl: '/steps/c18-step3.jpg' }
    ],
    explanation: {
      simple: 'A class is a blueprint. You create objects from it like building houses from the same plan.',
      scientific: 'ES6 classes provide syntactic sugar over JavaScript prototypal inheritance for constructor-based object creation.'
    },
    quiz: [
      { question: 'What keyword creates an object from a class?', options: ['create', 'build', 'new', 'make'], correctIndex: 2 },
      { question: 'The constructor runs when:', options: ['The class is defined', 'A method is called', 'A new object is created', 'The file is saved'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c18-classes.jpg'
  },

  {
    levelNumber: 19,
    id: 'coding-19',
    title: 'Modules & Imports',
    subtitle: 'Organize code into files',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Architecture',
    overview: 'Split your code into multiple files and import them where needed.',
    learningObjectives: [
      'Export functions and objects',
      'Import using require or ES modules',
      'Organize code by feature'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Module', instruction: 'In math.js: module.exports = { add: (a, b) => a + b };', imageUrl: '/steps/c19-step1.jpg' },
      { stepNumber: 2, title: 'Import Module', instruction: 'In app.js: const math = require("./math"); console.log(math.add(2, 3));', imageUrl: '/steps/c19-step2.jpg' },
      { stepNumber: 3, title: 'ES Module Style', instruction: 'export const add = (a, b) => a + b; import { add } from "./math.js";', imageUrl: '/steps/c19-step3.jpg' }
    ],
    explanation: {
      simple: 'Modules let you split code into separate files. This makes big projects manageable.',
      scientific: 'Module systems encapsulate code into isolated scopes, exposing only public interfaces for dependency resolution.'
    },
    quiz: [
      { question: 'What does require() do?', options: ['Deletes a file', 'Imports a module', 'Creates a class', 'Starts a server'], correctIndex: 1 },
      { question: 'Why use modules?', options: ['To make files bigger', 'To organize and reuse code', 'To slow down the program', 'To add colors'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c19-modules.jpg'
  },

  {
    levelNumber: 20,
    id: 'coding-20',
    title: 'Mini Project: Contact Book',
    subtitle: 'CRUD with arrays and objects',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 55,
    category: 'Mini Project',
    overview: 'Build a console contact book that can add, search, list, and delete contacts.',
    learningObjectives: [
      'Use arrays of objects',
      'Implement CRUD operations',
      'Organize code with functions and modules'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Data Structure', instruction: 'Create contacts array with objects: { name, phone, email }.', imageUrl: '/steps/c20-step1.jpg' },
      { stepNumber: 2, title: 'Add Contact', instruction: 'Function to push new contact from user input.', imageUrl: '/steps/c20-step2.jpg' },
      { stepNumber: 3, title: 'Search', instruction: 'Function to find contacts by name using filter.', imageUrl: '/steps/c20-step3.jpg' },
      { stepNumber: 4, title: 'Delete', instruction: 'Function to remove a contact by name using splice.', imageUrl: '/steps/c20-step4.jpg' }
    ],
    explanation: {
      simple: 'A contact book is a real app that uses everything: arrays for the list, objects for each contact, and functions for actions.',
      scientific: 'CRUD operations form the basis of all data-driven applications, mapping to Create, Read, Update, Delete actions.'
    },
    quiz: [
      { question: 'CRUD stands for:', options: ['Copy Run Upload Delete', 'Create Read Update Delete', 'Code Review Upload Deploy', 'Create Render Use Debug'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c20-contacts.jpg'
  },

  // ──────────────────────────────────────────
  // SECTION C: Data Structures & Algorithms (21–30)
  // ──────────────────────────────────────────

  {
    levelNumber: 21,
    id: 'coding-21',
    title: 'Stack Data Structure',
    subtitle: 'Last In, First Out',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 40,
    category: 'Data Structures',
    overview: 'Build a stack that follows the Last In, First Out (LIFO) principle.',
    learningObjectives: [
      'Understand LIFO behavior',
      'Implement push, pop, and peek',
      'Use a stack to reverse a string'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Stack Class', instruction: 'class Stack { constructor() { this.items = []; } }', imageUrl: '/steps/c21-step1.jpg' },
      { stepNumber: 2, title: 'Add Methods', instruction: 'Add push(item), pop(), peek(), isEmpty(), and size() methods.', imageUrl: '/steps/c21-step2.jpg' },
      { stepNumber: 3, title: 'Reverse String', instruction: 'Push each character, then pop all to reverse.', imageUrl: '/steps/c21-step3.jpg' }
    ],
    explanation: {
      simple: 'A stack is like a pile of plates. You always take the top one off first.',
      scientific: 'Stacks provide O(1) push and pop operations, used in call stacks, undo systems, and expression parsing.'
    },
    quiz: [
      { question: 'LIFO means:', options: ['Last In First Out', 'Last Input First Output', 'Low In Fast Out', 'List In File Out'], correctIndex: 0 },
      { question: 'peek() does what?', options: ['Removes the top item', 'Views the top item without removing it', 'Adds an item', 'Clears the stack'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c21-stack.jpg'
  },

  {
    levelNumber: 22,
    id: 'coding-22',
    title: 'Queue Data Structure',
    subtitle: 'First In, First Out',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 40,
    category: 'Data Structures',
    overview: 'Build a queue that follows the First In, First Out (FIFO) principle.',
    learningObjectives: [
      'Understand FIFO behavior',
      'Implement enqueue and dequeue',
      'Simulate a printer queue'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Queue Class', instruction: 'class Queue { constructor() { this.items = []; } }', imageUrl: '/steps/c22-step1.jpg' },
      { stepNumber: 2, title: 'Add Methods', instruction: 'Add enqueue(item), dequeue(), front(), isEmpty(), and size().', imageUrl: '/steps/c22-step2.jpg' },
      { stepNumber: 3, title: 'Printer Simulation', instruction: 'Enqueue print jobs and dequeue them one by one.', imageUrl: '/steps/c22-step3.jpg' }
    ],
    explanation: {
      simple: 'A queue is like a line at a shop. The first person in line is served first.',
      scientific: 'Queues provide FIFO ordering used in BFS, task scheduling, and message processing systems.'
    },
    quiz: [
      { question: 'FIFO means:', options: ['First In First Out', 'Fast Input Fast Output', 'File In File Out', 'First Index First Output'], correctIndex: 0 },
      { question: 'dequeue() removes from:', options: ['The end', 'The front', 'The middle', 'A random position'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c22-queue.jpg'
  },

  {
    levelNumber: 23,
    id: 'coding-23',
    title: 'Linked List',
    subtitle: 'Chain nodes together',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Data Structures',
    overview: 'Build a singly linked list where each node points to the next.',
    learningObjectives: [
      'Create Node and LinkedList classes',
      'Insert at head and tail',
      'Traverse and print the list'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Node Class', instruction: 'class Node { constructor(data) { this.data = data; this.next = null; } }', imageUrl: '/steps/c23-step1.jpg' },
      { stepNumber: 2, title: 'LinkedList Class', instruction: 'Track head. Add append(data) and prepend(data) methods.', imageUrl: '/steps/c23-step2.jpg' },
      { stepNumber: 3, title: 'Print List', instruction: 'Traverse from head to null, printing each node.', imageUrl: '/steps/c23-step3.jpg' }
    ],
    explanation: {
      simple: 'A linked list is a chain. Each link knows the next one, but you can only start from the first link.',
      scientific: 'Singly linked lists store elements in nodes with data and a pointer to the next node, providing O(1) insertion at head.'
    },
    quiz: [
      { question: 'Each node in a linked list has:', options: ['Only data', 'Data and a next pointer', 'Only a pointer', 'An index'], correctIndex: 1 },
      { question: 'The last node points to:', options: ['The first node', 'null', 'Itself', 'The middle'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c23-linkedlist.jpg'
  },

  {
    levelNumber: 24,
    id: 'coding-24',
    title: 'Recursion',
    subtitle: 'Functions that call themselves',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Algorithms',
    overview: 'Solve problems by having a function call itself with smaller inputs.',
    learningObjectives: [
      'Understand base case and recursive case',
      'Calculate factorial recursively',
      'Understand the call stack'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Factorial', instruction: 'function factorial(n) { if (n <= 1) return 1; return n * factorial(n - 1); }', imageUrl: '/steps/c24-step1.jpg' },
      { stepNumber: 2, title: 'Trace It', instruction: 'Write out each call: factorial(4) -> 4 * factorial(3) -> ...', imageUrl: '/steps/c24-step2.jpg' },
      { stepNumber: 3, title: 'Fibonacci', instruction: 'Write a recursive Fibonacci function.', imageUrl: '/steps/c24-step3.jpg' }
    ],
    explanation: {
      simple: 'Recursion is a function calling itself with a simpler version of the problem, until it hits a stop condition.',
      scientific: 'Recursive algorithms divide problems into subproblems. The base case prevents infinite recursion and stack overflow.'
    },
    quiz: [
      { question: 'The base case is:', options: ['Where recursion starts', 'Where recursion stops', 'The biggest input', 'A loop'], correctIndex: 1 },
      { question: 'factorial(0) returns:', options: ['0', '1', 'undefined', 'Error'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c24-recursion.jpg'
  },

  {
    levelNumber: 25,
    id: 'coding-25',
    title: 'Sorting Algorithms',
    subtitle: 'Organize data efficiently',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Algorithms',
    overview: 'Implement Bubble Sort and Selection Sort to understand how sorting works.',
    learningObjectives: [
      'Implement Bubble Sort',
      'Implement Selection Sort',
      'Compare their performance'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Bubble Sort', instruction: 'Compare adjacent elements and swap if out of order. Repeat until sorted.', imageUrl: '/steps/c25-step1.jpg' },
      { stepNumber: 2, title: 'Selection Sort', instruction: 'Find the minimum element, swap it to the front. Repeat for remaining.', imageUrl: '/steps/c25-step2.jpg' },
      { stepNumber: 3, title: 'Compare', instruction: 'Time both on an array of 1000 random numbers.', imageUrl: '/steps/c25-step3.jpg' }
    ],
    explanation: {
      simple: 'Sorting puts items in order. Bubble Sort keeps swapping neighbors. Selection Sort picks the smallest each time.',
      scientific: 'Both Bubble Sort and Selection Sort have O(n^2) average time complexity but differ in swap count and stability.'
    },
    quiz: [
      { question: 'Bubble Sort compares:', options: ['Random elements', 'Adjacent elements', 'First and last only', 'Every pair at once'], correctIndex: 1 },
      { question: 'Both sorts have time complexity:', options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(1)'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c25-sorting.jpg'
  },

  {
    levelNumber: 26,
    id: 'coding-26',
    title: 'Searching Algorithms',
    subtitle: 'Find values fast',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Algorithms',
    overview: 'Implement Linear Search and Binary Search.',
    learningObjectives: [
      'Implement Linear Search',
      'Implement Binary Search on sorted arrays',
      'Compare their performance'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Linear Search', instruction: 'Loop through each element and compare to the target.', imageUrl: '/steps/c26-step1.jpg' },
      { stepNumber: 2, title: 'Binary Search', instruction: 'Use left, right, and mid pointers on a sorted array. Halve the search space each step.', imageUrl: '/steps/c26-step2.jpg' },
      { stepNumber: 3, title: 'Performance', instruction: 'Count comparisons for both on a 1000-element array.', imageUrl: '/steps/c26-step3.jpg' }
    ],
    explanation: {
      simple: 'Linear Search checks every item. Binary Search cuts the list in half each time, so it is much faster on sorted data.',
      scientific: 'Linear Search is O(n). Binary Search is O(log n) but requires a pre-sorted array.'
    },
    quiz: [
      { question: 'Binary Search requires the array to be:', options: ['Empty', 'Sorted', 'Reversed', 'Shuffled'], correctIndex: 1 },
      { question: 'Binary Search complexity is:', options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c26-search.jpg'
  },

  {
    levelNumber: 27,
    id: 'coding-27',
    title: 'Hash Maps',
    subtitle: 'Key-value lookup in O(1)',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Data Structures',
    overview: 'Understand hash maps and use JavaScript Map for fast lookups.',
    learningObjectives: [
      'Use JavaScript Map object',
      'Understand hashing concepts',
      'Solve frequency counting problems'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Map', instruction: 'const map = new Map(); map.set("a", 1); map.set("b", 2);', imageUrl: '/steps/c27-step1.jpg' },
      { stepNumber: 2, title: 'Access & Check', instruction: 'map.get("a"); map.has("c"); map.size;', imageUrl: '/steps/c27-step2.jpg' },
      { stepNumber: 3, title: 'Frequency Counter', instruction: 'Count how many times each character appears in a string.', imageUrl: '/steps/c27-step3.jpg' }
    ],
    explanation: {
      simple: 'A hash map is like a dictionary. You look up a word (key) and instantly get its meaning (value).',
      scientific: 'Hash maps use hash functions to compute bucket indices, providing amortized O(1) get, set, and has operations.'
    },
    quiz: [
      { question: 'Map lookup time is:', options: ['O(n)', 'O(log n)', 'O(1) average', 'O(n^2)'], correctIndex: 2 },
      { question: 'map.has("x") returns:', options: ['The value', 'true or false', 'The index', 'An error'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c27-hashmap.jpg'
  },

  {
    levelNumber: 28,
    id: 'coding-28',
    title: 'Sets',
    subtitle: 'Unique collections',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 35,
    category: 'Data Structures',
    overview: 'Use Sets to store unique values and perform set operations.',
    learningObjectives: [
      'Create and use JavaScript Set',
      'Remove duplicates from arrays',
      'Perform union and intersection'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Set', instruction: 'const s = new Set([1, 2, 2, 3]); console.log(s.size); // 3', imageUrl: '/steps/c28-step1.jpg' },
      { stepNumber: 2, title: 'Deduplicate', instruction: 'const unique = [...new Set(array)];', imageUrl: '/steps/c28-step2.jpg' },
      { stepNumber: 3, title: 'Set Operations', instruction: 'Write union and intersection functions using two Sets.', imageUrl: '/steps/c28-step3.jpg' }
    ],
    explanation: {
      simple: 'A Set is a list that automatically removes duplicates. Every value appears only once.',
      scientific: 'Sets store unique values with O(1) add, delete, and has operations, backed by hash-based storage.'
    },
    quiz: [
      { question: 'A Set automatically:', options: ['Sorts values', 'Removes duplicates', 'Reverses order', 'Adds indexes'], correctIndex: 1 },
      { question: 'How to convert Set to array?', options: ['Set.toArray()', '[...set]', 'set.list()', 'Array(set)'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c28-sets.jpg'
  },

  {
    levelNumber: 29,
    id: 'coding-29',
    title: 'Big O Notation',
    subtitle: 'Measure algorithm speed',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Algorithms',
    overview: 'Understand how to analyze and compare algorithm efficiency.',
    learningObjectives: [
      'Understand O(1), O(n), O(n^2), O(log n)',
      'Identify complexity from code',
      'Choose better algorithms'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'O(1) Example', instruction: 'Accessing arr[0] is always instant regardless of array size.', imageUrl: '/steps/c29-step1.jpg' },
      { stepNumber: 2, title: 'O(n) Example', instruction: 'A single loop through n items.', imageUrl: '/steps/c29-step2.jpg' },
      { stepNumber: 3, title: 'O(n^2) Example', instruction: 'A nested loop (loop inside a loop).', imageUrl: '/steps/c29-step3.jpg' },
      { stepNumber: 4, title: 'Compare', instruction: 'Time different algorithms on increasing input sizes.', imageUrl: '/steps/c29-step4.jpg' }
    ],
    explanation: {
      simple: 'Big O tells you how fast an algorithm gets slower as the input gets bigger. Lower is better.',
      scientific: 'Big O notation describes the upper bound of an algorithm time or space complexity as a function of input size n.'
    },
    quiz: [
      { question: 'A nested loop is typically:', options: ['O(1)', 'O(n)', 'O(n^2)', 'O(log n)'], correctIndex: 2 },
      { question: 'Which is fastest?', options: ['O(n^2)', 'O(n)', 'O(log n)', 'O(n log n)'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c29-bigo.jpg'
  },

  {
    levelNumber: 30,
    id: 'coding-30',
    title: 'Mini Project: Algorithm Visualizer',
    subtitle: 'See algorithms in action',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Mini Project',
    overview: 'Build a console-based visualizer that shows sorting steps.',
    learningObjectives: [
      'Visualize Bubble Sort step by step',
      'Print array state after each swap',
      'Count total operations'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Random Array', instruction: 'Generate an array of 10 random numbers.', imageUrl: '/steps/c30-step1.jpg' },
      { stepNumber: 2, title: 'Step Logger', instruction: 'After each swap, print the entire array with the swapped elements highlighted.', imageUrl: '/steps/c30-step2.jpg' },
      { stepNumber: 3, title: 'Stats', instruction: 'Print total swaps and comparisons at the end.', imageUrl: '/steps/c30-step3.jpg' }
    ],
    explanation: {
      simple: 'Seeing each step of a sort helps you understand how algorithms work inside.',
      scientific: 'Algorithm visualization aids comprehension of state transitions and computational complexity.'
    },
    quiz: [
      { question: 'Visualizing algorithms helps:', options: ['Make code slower', 'Understand how they work', 'Delete data', 'Add bugs'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c30-visualizer.jpg'
  },

  // ──────────────────────────────────────────
  // SECTION D: Problem Solving Patterns (31–40)
  // ──────────────────────────────────────────

  {
    levelNumber: 31,
    id: 'coding-31',
    title: 'Two Pointers Pattern',
    subtitle: 'Solve problems with two cursors',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Patterns',
    overview: 'Use two pointers to solve array problems efficiently.',
    learningObjectives: [
      'Understand the two-pointer technique',
      'Find pairs that sum to a target',
      'Reverse an array in place'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Pair Sum', instruction: 'Use left and right pointers on a sorted array to find pairs summing to a target.', imageUrl: '/steps/c31-step1.jpg' },
      { stepNumber: 2, title: 'In-place Reverse', instruction: 'Swap elements at left and right pointers, moving inward.', imageUrl: '/steps/c31-step2.jpg' },
      { stepNumber: 3, title: 'Remove Duplicates', instruction: 'Use two pointers to remove duplicates from a sorted array.', imageUrl: '/steps/c31-step3.jpg' }
    ],
    explanation: {
      simple: 'Two pointers walk through an array from different ends or speeds to solve problems without extra loops.',
      scientific: 'Two-pointer technique reduces O(n^2) brute-force solutions to O(n) by exploiting sorted order or invariants.'
    },
    quiz: [
      { question: 'Two pointers typically reduces complexity to:', options: ['O(n^2)', 'O(n)', 'O(n^3)', 'O(1)'], correctIndex: 1 },
      { question: 'For pair sum, the array must be:', options: ['Empty', 'Sorted', 'Reversed', 'Randomized'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c31-twopointer.jpg'
  },

  {
    levelNumber: 32,
    id: 'coding-32',
    title: 'Sliding Window Pattern',
    subtitle: 'Track a moving subset',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Patterns',
    overview: 'Use a sliding window to find subarrays or substrings efficiently.',
    learningObjectives: [
      'Understand fixed-size windows',
      'Find maximum sum subarray of size k',
      'Use dynamic windows for substring problems'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Fixed Window', instruction: 'Find max sum of k consecutive elements by sliding the window.', imageUrl: '/steps/c32-step1.jpg' },
      { stepNumber: 2, title: 'Slide Logic', instruction: 'Add the new element, subtract the old one as you slide.', imageUrl: '/steps/c32-step2.jpg' },
      { stepNumber: 3, title: 'Dynamic Window', instruction: 'Find longest substring without repeating characters.', imageUrl: '/steps/c32-step3.jpg' }
    ],
    explanation: {
      simple: 'Imagine a window sliding across your array. You update the total by adding one new item and removing one old item.',
      scientific: 'Sliding window maintains a running aggregate over a contiguous subarray, converting O(n*k) to O(n).'
    },
    quiz: [
      { question: 'Sliding window avoids:', options: ['Using arrays', 'Recalculating the entire window each time', 'Using variables', 'Printing output'], correctIndex: 1 },
      { question: 'A fixed window has:', options: ['Variable size', 'Constant size k', 'No elements', 'Only one element'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c32-sliding.jpg'
  },

  {
    levelNumber: 33,
    id: 'coding-33',
    title: 'Frequency Counter Pattern',
    subtitle: 'Count occurrences fast',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 40,
    category: 'Patterns',
    overview: 'Use objects or Maps to count element frequencies and solve comparison problems.',
    learningObjectives: [
      'Build frequency maps',
      'Check if two strings are anagrams',
      'Find most frequent element'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Build Counter', instruction: 'Loop through a string and count each character using an object.', imageUrl: '/steps/c33-step1.jpg' },
      { stepNumber: 2, title: 'Anagram Check', instruction: 'Compare frequency maps of two strings.', imageUrl: '/steps/c33-step2.jpg' },
      { stepNumber: 3, title: 'Most Frequent', instruction: 'Find the element with the highest count.', imageUrl: '/steps/c33-step3.jpg' }
    ],
    explanation: {
      simple: 'Counting how often things appear lets you compare lists without nested loops.',
      scientific: 'Frequency counting replaces O(n^2) comparison loops with O(n) hash-based aggregation.'
    },
    quiz: [
      { question: 'Anagram means:', options: ['Same length only', 'Same characters in different order', 'Same first letter', 'Different length'], correctIndex: 1 },
      { question: 'Frequency counting uses:', options: ['Nested loops', 'A hash map', 'Recursion', 'Sorting'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c33-frequency.jpg'
  },

  {
    levelNumber: 34,
    id: 'coding-34',
    title: 'Matrix Operations',
    subtitle: 'Work with 2D arrays',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Data Structures',
    overview: 'Create and manipulate 2D arrays (matrices).',
    learningObjectives: [
      'Create 2D arrays',
      'Traverse rows and columns',
      'Rotate and transpose matrices'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Matrix', instruction: 'const matrix = [[1,2,3],[4,5,6],[7,8,9]];', imageUrl: '/steps/c34-step1.jpg' },
      { stepNumber: 2, title: 'Traverse', instruction: 'Use nested loops to access matrix[row][col].', imageUrl: '/steps/c34-step2.jpg' },
      { stepNumber: 3, title: 'Transpose', instruction: 'Swap rows and columns: result[j][i] = matrix[i][j].', imageUrl: '/steps/c34-step3.jpg' }
    ],
    explanation: {
      simple: 'A matrix is a grid of values. You need two indexes: row and column.',
      scientific: '2D arrays store data in row-major order, accessed with double indexing for grid-based computations.'
    },
    quiz: [
      { question: 'matrix[1][2] accesses:', options: ['Row 1, Column 2', 'Row 2, Column 1', 'The first element', 'The last element'], correctIndex: 0 },
      { question: 'Transpose swaps:', options: ['Values and types', 'Rows and columns', 'First and last rows', 'Nothing'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c34-matrix.jpg'
  },

  {
    levelNumber: 35,
    id: 'coding-35',
    title: 'Tree Basics',
    subtitle: 'Hierarchical data',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Data Structures',
    overview: 'Build a basic binary tree and understand tree terminology.',
    learningObjectives: [
      'Create TreeNode class',
      'Understand root, leaf, parent, child',
      'Insert nodes into a binary search tree'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'TreeNode Class', instruction: 'class TreeNode { constructor(val) { this.val = val; this.left = null; this.right = null; } }', imageUrl: '/steps/c35-step1.jpg' },
      { stepNumber: 2, title: 'BST Insert', instruction: 'If value < current, go left. If value > current, go right. Insert at null.', imageUrl: '/steps/c35-step2.jpg' },
      { stepNumber: 3, title: 'Build a Tree', instruction: 'Insert values [8, 3, 10, 1, 6, 14] and draw the resulting tree.', imageUrl: '/steps/c35-step3.jpg' }
    ],
    explanation: {
      simple: 'A tree is like a family tree. Each person (node) can have children, and the very top is called the root.',
      scientific: 'Binary Search Trees maintain the invariant that left children are less than the parent and right children are greater, enabling O(log n) search.'
    },
    quiz: [
      { question: 'A leaf node has:', options: ['Two children', 'One child', 'No children', 'Three children'], correctIndex: 2 },
      { question: 'In a BST, left child is:', options: ['Greater than parent', 'Less than parent', 'Equal to parent', 'Random'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c35-tree.jpg'
  },

  {
    levelNumber: 36,
    id: 'coding-36',
    title: 'Tree Traversals',
    subtitle: 'BFS and DFS',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Algorithms',
    overview: 'Traverse trees using Breadth-First Search and Depth-First Search.',
    learningObjectives: [
      'Implement BFS using a queue',
      'Implement DFS (in-order, pre-order, post-order)',
      'Understand when to use each'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'BFS', instruction: 'Use a queue. Enqueue root, then for each node: process, enqueue left, enqueue right.', imageUrl: '/steps/c36-step1.jpg' },
      { stepNumber: 2, title: 'DFS In-Order', instruction: 'Recurse left, process node, recurse right. Gives sorted order for BST.', imageUrl: '/steps/c36-step2.jpg' },
      { stepNumber: 3, title: 'Compare', instruction: 'Print traversal results for the same tree and compare order.', imageUrl: '/steps/c36-step3.jpg' }
    ],
    explanation: {
      simple: 'BFS visits level by level (wide). DFS goes deep down one branch before backtracking.',
      scientific: 'BFS uses O(w) space (tree width). DFS uses O(h) space (tree height) via the call stack.'
    },
    quiz: [
      { question: 'BFS uses which data structure?', options: ['Stack', 'Queue', 'Linked list', 'Set'], correctIndex: 1 },
      { question: 'In-order DFS on a BST gives:', options: ['Random order', 'Reverse order', 'Sorted order', 'Level order'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c36-traversal.jpg'
  },

  {
    levelNumber: 37,
    id: 'coding-37',
    title: 'Dynamic Programming Intro',
    subtitle: 'Optimize with memoization',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Algorithms',
    overview: 'Speed up recursive solutions by caching results.',
    learningObjectives: [
      'Identify overlapping subproblems',
      'Implement memoization',
      'Optimize Fibonacci with DP'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Slow Fibonacci', instruction: 'Time the naive recursive Fibonacci for n = 40.', imageUrl: '/steps/c37-step1.jpg' },
      { stepNumber: 2, title: 'Add Memo', instruction: 'Cache results in an object. Check cache before computing.', imageUrl: '/steps/c37-step2.jpg' },
      { stepNumber: 3, title: 'Compare Speed', instruction: 'Time the memoized version and see the massive speedup.', imageUrl: '/steps/c37-step3.jpg' }
    ],
    explanation: {
      simple: 'Memoization remembers answers to problems you already solved. It avoids doing the same work twice.',
      scientific: 'Dynamic programming transforms exponential recursive algorithms to polynomial time by eliminating redundant computations.'
    },
    quiz: [
      { question: 'Memoization stores:', options: ['Function names', 'Previously computed results', 'CSS styles', 'File paths'], correctIndex: 1 },
      { question: 'DP requires:', options: ['Only loops', 'Overlapping subproblems', 'Global variables', 'HTML'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c37-dp.jpg'
  },

  {
    levelNumber: 38,
    id: 'coding-38',
    title: 'Regular Expressions',
    subtitle: 'Pattern matching in text',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Strings',
    overview: 'Use regular expressions to search, match, and validate text patterns.',
    learningObjectives: [
      'Write basic regex patterns',
      'Use test, match, and replace',
      'Validate email and phone formats'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Basic Pattern', instruction: 'const regex = /hello/i; console.log(regex.test("Hello World"));', imageUrl: '/steps/c38-step1.jpg' },
      { stepNumber: 2, title: 'Character Classes', instruction: 'Use \\d for digits, \\w for word characters, + for one or more.', imageUrl: '/steps/c38-step2.jpg' },
      { stepNumber: 3, title: 'Email Validator', instruction: 'Write a regex to validate basic email format.', imageUrl: '/steps/c38-step3.jpg' }
    ],
    explanation: {
      simple: 'Regex is a special language for describing text patterns. It can find, check, or replace text instantly.',
      scientific: 'Regular expressions define finite automata patterns that match character sequences in strings.'
    },
    quiz: [
      { question: '\\d matches:', options: ['Letters', 'Digits', 'Spaces', 'Symbols'], correctIndex: 1 },
      { question: 'The i flag means:', options: ['Integer only', 'Case insensitive', 'Include all', 'Ignore errors'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c38-regex.jpg'
  },

  {
    levelNumber: 39,
    id: 'coding-39',
    title: 'Date & Time',
    subtitle: 'Work with dates in JavaScript',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Utilities',
    overview: 'Create, format, and calculate with JavaScript Date objects.',
    learningObjectives: [
      'Create Date objects',
      'Format dates for display',
      'Calculate time differences'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Create Date', instruction: 'const now = new Date(); console.log(now.toLocaleDateString());', imageUrl: '/steps/c39-step1.jpg' },
      { stepNumber: 2, title: 'Extract Parts', instruction: 'now.getFullYear(), now.getMonth(), now.getDate(), now.getDay()', imageUrl: '/steps/c39-step2.jpg' },
      { stepNumber: 3, title: 'Age Calculator', instruction: 'Calculate age from a birthdate.', imageUrl: '/steps/c39-step3.jpg' }
    ],
    explanation: {
      simple: 'JavaScript Date objects hold a specific moment in time. You can pull out year, month, day, and more.',
      scientific: 'Date stores milliseconds since the Unix epoch (January 1, 1970 UTC) and provides methods for calendar calculations.'
    },
    quiz: [
      { question: 'getMonth() returns 0 for:', options: ['December', 'January', 'February', 'March'], correctIndex: 1 },
      { question: 'Date is stored internally as:', options: ['A string', 'Milliseconds since 1970', 'A formatted date', 'An array'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c39-date.jpg'
  },

  {
    levelNumber: 40,
    id: 'coding-40',
    title: 'Mini Project: Student Gradebook',
    subtitle: 'Apply patterns and structures',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Mini Project',
    overview: 'Build a gradebook that stores student records, calculates averages, finds top scorers, and sorts by grade.',
    learningObjectives: [
      'Use objects, arrays, and Maps together',
      'Apply sorting and searching',
      'Calculate statistics'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Data Model', instruction: 'Create student objects with name, grades array, and methods.', imageUrl: '/steps/c40-step1.jpg' },
      { stepNumber: 2, title: 'Statistics', instruction: 'Calculate average, highest, and lowest grades.', imageUrl: '/steps/c40-step2.jpg' },
      { stepNumber: 3, title: 'Sort & Rank', instruction: 'Sort students by average grade and display rankings.', imageUrl: '/steps/c40-step3.jpg' },
      { stepNumber: 4, title: 'Search', instruction: 'Find students scoring above a threshold.', imageUrl: '/steps/c40-step4.jpg' }
    ],
    explanation: {
      simple: 'A gradebook combines data storage, math, sorting, and searching into one useful tool.',
      scientific: 'This project exercises data modeling, aggregation, comparison sorting, and threshold-based filtering.'
    },
    quiz: [
      { question: 'Average is calculated by:', options: ['Max minus min', 'Sum divided by count', 'First plus last', 'Count times max'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c40-gradebook.jpg'
  },

  // ──────────────────────────────────────────
  // SECTION E: Pre-Advanced (Levels 41–50)
  // ──────────────────────────────────────────

  {
    levelNumber: 41,
    id: 'coding-41',
    title: 'Git Basics',
    subtitle: 'Version control fundamentals',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Tools',
    overview: 'Track code changes and collaborate using Git.',
    learningObjectives: [
      'Initialize a repository',
      'Stage and commit changes',
      'View history and diff'
    ],
    materials: [
      { name: 'Terminal', imageUrl: '/materials/terminal.jpg' },
      { name: 'Git', imageUrl: '/materials/git.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Init Repo', instruction: 'Run: git init', imageUrl: '/steps/c41-step1.jpg' },
      { stepNumber: 2, title: 'Stage & Commit', instruction: 'git add . && git commit -m "Initial commit"', imageUrl: '/steps/c41-step2.jpg' },
      { stepNumber: 3, title: 'View History', instruction: 'git log --oneline to see commit history.', imageUrl: '/steps/c41-step3.jpg' }
    ],
    explanation: {
      simple: 'Git saves snapshots of your code so you can go back in time if something breaks.',
      scientific: 'Git is a distributed version control system that stores content-addressable objects in a directed acyclic graph.'
    },
    quiz: [
      { question: 'git commit does:', options: ['Deletes files', 'Saves a snapshot of staged changes', 'Pushes to server', 'Creates a branch'], correctIndex: 1 },
      { question: 'git add stages files for:', options: ['Deletion', 'The next commit', 'Download', 'Printing'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c41-git.jpg'
  },

  {
    levelNumber: 42,
    id: 'coding-42',
    title: 'npm & Packages',
    subtitle: 'Use other people\'s code',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Tools',
    overview: 'Install and use third-party packages from npm.',
    learningObjectives: [
      'Initialize a project with npm init',
      'Install packages with npm install',
      'Use installed packages in code'
    ],
    materials: [
      { name: 'Terminal', imageUrl: '/materials/terminal.jpg' },
      { name: 'Node.js', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Init Project', instruction: 'Run: npm init -y', imageUrl: '/steps/c42-step1.jpg' },
      { stepNumber: 2, title: 'Install Package', instruction: 'npm install chalk', imageUrl: '/steps/c42-step2.jpg' },
      { stepNumber: 3, title: 'Use Package', instruction: 'Import and use chalk to color console output.', imageUrl: '/steps/c42-step3.jpg' }
    ],
    explanation: {
      simple: 'npm is a huge library of free code. Instead of building everything yourself, you can install ready-made tools.',
      scientific: 'npm is the default package manager for Node.js, resolving dependency trees from the npm registry.'
    },
    quiz: [
      { question: 'npm stands for:', options: ['New Programming Mode', 'Node Package Manager', 'Next Page Module', 'Normal Process Manager'], correctIndex: 1 },
      { question: 'package.json stores:', options: ['CSS styles', 'Project info and dependencies', 'Images', 'HTML templates'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c42-npm.jpg'
  },

  {
    levelNumber: 43,
    id: 'coding-43',
    title: 'JSON',
    subtitle: 'Universal data format',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 30,
    category: 'Data Formats',
    overview: 'Read and write JSON, the format used by APIs and config files.',
    learningObjectives: [
      'Understand JSON structure',
      'Use JSON.stringify and JSON.parse',
      'Read and write JSON files'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Stringify', instruction: 'const json = JSON.stringify({ name: "Asha", age: 12 });', imageUrl: '/steps/c43-step1.jpg' },
      { stepNumber: 2, title: 'Parse', instruction: 'const obj = JSON.parse(json); console.log(obj.name);', imageUrl: '/steps/c43-step2.jpg' },
      { stepNumber: 3, title: 'File I/O', instruction: 'Write JSON to a file with fs.writeFileSync and read it back.', imageUrl: '/steps/c43-step3.jpg' }
    ],
    explanation: {
      simple: 'JSON is a text format that looks like JavaScript objects. It is how data travels between programs.',
      scientific: 'JSON (JavaScript Object Notation) is a language-independent text format for structured data interchange.'
    },
    quiz: [
      { question: 'JSON.parse() converts:', options: ['Object to string', 'String to object', 'Number to string', 'Array to set'], correctIndex: 1 },
      { question: 'JSON keys must be:', options: ['Numbers', 'Booleans', 'Strings in double quotes', 'Undefined'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c43-json.jpg'
  },

  {
    levelNumber: 44,
    id: 'coding-44',
    title: 'Local Storage Simulation',
    subtitle: 'Persist data between runs',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Data Persistence',
    overview: 'Save and load data from a JSON file to simulate persistent storage.',
    learningObjectives: [
      'Save state to a JSON file',
      'Load state on program start',
      'Update and persist changes'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Save Function', instruction: 'Write a function that saves data to data.json using fs.', imageUrl: '/steps/c44-step1.jpg' },
      { stepNumber: 2, title: 'Load Function', instruction: 'Write a function that reads data.json on startup.', imageUrl: '/steps/c44-step2.jpg' },
      { stepNumber: 3, title: 'Test Persistence', instruction: 'Add data, restart the program, and verify it loads.', imageUrl: '/steps/c44-step3.jpg' }
    ],
    explanation: {
      simple: 'Without saving, your data disappears when the program stops. File storage keeps it safe between runs.',
      scientific: 'Persistence layers serialize runtime state to durable storage, enabling stateful applications across sessions.'
    },
    quiz: [
      { question: 'Persistent data survives:', options: ['Only one loop', 'Program restart', 'Only while running', 'Only in memory'], correctIndex: 1 },
      { question: 'Which module handles files in Node?', options: ['http', 'path', 'fs', 'url'], correctIndex: 2 }
    ],
    outputImageUrl: '/outputs/c44-persist.jpg'
  },

  {
    levelNumber: 45,
    id: 'coding-45',
    title: 'Event-Driven Programming',
    subtitle: 'Respond to events',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Core Concepts',
    overview: 'Understand how event-driven architecture works using Node.js EventEmitter.',
    learningObjectives: [
      'Use EventEmitter to emit and listen',
      'Create custom events',
      'Build an event-driven logger'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Import EventEmitter', instruction: 'const EventEmitter = require("events"); const emitter = new EventEmitter();', imageUrl: '/steps/c45-step1.jpg' },
      { stepNumber: 2, title: 'Listen', instruction: 'emitter.on("userLogin", (name) => console.log(name + " logged in"));', imageUrl: '/steps/c45-step2.jpg' },
      { stepNumber: 3, title: 'Emit', instruction: 'emitter.emit("userLogin", "Asha");', imageUrl: '/steps/c45-step3.jpg' }
    ],
    explanation: {
      simple: 'Events are signals. Your code can listen for signals and react when they happen.',
      scientific: 'Event-driven architecture decouples producers from consumers using the observer pattern with pub/sub semantics.'
    },
    quiz: [
      { question: 'emitter.on() does:', options: ['Emits an event', 'Listens for an event', 'Stops an event', 'Creates a file'], correctIndex: 1 },
      { question: 'Event-driven code reacts to:', options: ['File sizes', 'Named events', 'CSS changes', 'Array lengths'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c45-events.jpg'
  },

  {
    levelNumber: 46,
    id: 'coding-46',
    title: 'Callbacks & Promises',
    subtitle: 'Async foundations',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Async',
    overview: 'Understand how JavaScript handles code that takes time.',
    learningObjectives: [
      'Write and use callbacks',
      'Create and consume Promises',
      'Chain .then() and .catch()'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Callback', instruction: 'function fetchData(callback) { setTimeout(() => callback("data"), 1000); }', imageUrl: '/steps/c46-step1.jpg' },
      { stepNumber: 2, title: 'Promise', instruction: 'const p = new Promise((resolve, reject) => { resolve("done"); });', imageUrl: '/steps/c46-step2.jpg' },
      { stepNumber: 3, title: 'Chain', instruction: 'p.then(val => console.log(val)).catch(err => console.error(err));', imageUrl: '/steps/c46-step3.jpg' }
    ],
    explanation: {
      simple: 'Some code takes time (like loading data). Callbacks and Promises let your program keep working while waiting.',
      scientific: 'Promises represent the eventual result of an async operation, supporting chaining and error propagation.'
    },
    quiz: [
      { question: 'A Promise can be:', options: ['Only resolved', 'Pending, resolved, or rejected', 'Only rejected', 'Only pending'], correctIndex: 1 },
      { question: '.catch() handles:', options: ['Success', 'Errors', 'Timeouts only', 'All events'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c46-promises.jpg'
  },

  {
    levelNumber: 47,
    id: 'coding-47',
    title: 'Map, Filter, Reduce Mastery',
    subtitle: 'Functional programming power',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Functional Programming',
    overview: 'Master the three most powerful array methods by solving real problems.',
    learningObjectives: [
      'Chain map, filter, and reduce',
      'Process complex data sets',
      'Replace loops with functional patterns'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Map + Filter', instruction: 'Get names of students with grade > 80: students.filter(s => s.grade > 80).map(s => s.name)', imageUrl: '/steps/c47-step1.jpg' },
      { stepNumber: 2, title: 'Reduce', instruction: 'Calculate total: [10,20,30].reduce((sum, n) => sum + n, 0)', imageUrl: '/steps/c47-step2.jpg' },
      { stepNumber: 3, title: 'Complex Chain', instruction: 'From a list of orders, find total revenue from completed orders.', imageUrl: '/steps/c47-step3.jpg' }
    ],
    explanation: {
      simple: 'Filter picks items, map transforms items, reduce combines items into one value. Together they are unstoppable.',
      scientific: 'These higher-order functions compose a data pipeline that transforms collections without mutable state.'
    },
    quiz: [
      { question: 'reduce() returns:', options: ['An array', 'A single accumulated value', 'A boolean', 'A string always'], correctIndex: 1 },
      { question: 'Chaining means:', options: ['Using loops', 'Calling methods one after another on results', 'Creating classes', 'Writing comments'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c47-functional.jpg'
  },

  {
    levelNumber: 48,
    id: 'coding-48',
    title: 'OOP Principles',
    subtitle: 'Inheritance and polymorphism',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'OOP',
    overview: 'Apply core OOP principles: encapsulation, inheritance, and polymorphism.',
    learningObjectives: [
      'Use extends for inheritance',
      'Override methods (polymorphism)',
      'Use super to call parent methods'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Base Class', instruction: 'class Shape { constructor(color) { this.color = color; } area() { return 0; } }', imageUrl: '/steps/c48-step1.jpg' },
      { stepNumber: 2, title: 'Extend', instruction: 'class Circle extends Shape { constructor(color, radius) { super(color); this.radius = radius; } area() { return Math.PI * this.radius ** 2; } }', imageUrl: '/steps/c48-step2.jpg' },
      { stepNumber: 3, title: 'Polymorphism', instruction: 'Create Circle and Rectangle. Call area() on both — different results, same method name.', imageUrl: '/steps/c48-step3.jpg' }
    ],
    explanation: {
      simple: 'Inheritance lets you create specialized versions of a class. Polymorphism lets different classes respond to the same method differently.',
      scientific: 'OOP pillars — encapsulation, inheritance, and polymorphism — enable code reuse and extensible design through class hierarchies.'
    },
    quiz: [
      { question: 'super() calls:', options: ['The current class', 'The parent constructor', 'A sibling class', 'A static method'], correctIndex: 1 },
      { question: 'Polymorphism means:', options: ['One shape only', 'Many forms for the same interface', 'No inheritance', 'Copying classes'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c48-oop.jpg'
  },

  {
    levelNumber: 49,
    id: 'coding-49',
    title: 'Clean Code Practices',
    subtitle: 'Write code others can read',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Best Practices',
    overview: 'Learn naming conventions, formatting, and writing self-documenting code.',
    learningObjectives: [
      'Use meaningful variable and function names',
      'Keep functions small and focused',
      'Add comments only when needed'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'Bad vs Good Names', instruction: 'Compare: let x = 10; vs let maxRetries = 10;', imageUrl: '/steps/c49-step1.jpg' },
      { stepNumber: 2, title: 'Small Functions', instruction: 'Refactor a 30-line function into three small 10-line functions.', imageUrl: '/steps/c49-step2.jpg' },
      { stepNumber: 3, title: 'Remove Dead Code', instruction: 'Delete commented-out code and unused variables.', imageUrl: '/steps/c49-step3.jpg' }
    ],
    explanation: {
      simple: 'Clean code is code that is easy to read, understand, and change. It saves time for you and your team.',
      scientific: 'Clean code minimizes cognitive load, follows the Single Responsibility Principle, and reduces maintenance cost.'
    },
    quiz: [
      { question: 'Which is a better variable name?', options: ['x', 'd', 'maxRetries', 'a1'], correctIndex: 2 },
      { question: 'Functions should be:', options: ['As long as possible', 'Small and focused on one task', 'Without any names', 'Written in one line always'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c49-clean.jpg'
  },

  {
    levelNumber: 50,
    id: 'coding-50',
    title: 'Mini Project: CLI Task Manager',
    subtitle: 'Complete pre-advanced capstone',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '75 minutes',
    xpReward: 70,
    category: 'Mini Project',
    overview: 'Build a full command-line task manager with add, list, complete, delete, and save features using JSON persistence.',
    learningObjectives: [
      'Combine all concepts from Levels 1-49',
      'Handle CLI arguments',
      'Persist tasks to a JSON file',
      'Use clean code practices'
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js Runtime', imageUrl: '/materials/nodejs.jpg' }
    ],
    steps: [
      { stepNumber: 1, title: 'CLI Arguments', instruction: 'Read commands from process.argv: node task.js add "Buy milk"', imageUrl: '/steps/c50-step1.jpg' },
      { stepNumber: 2, title: 'Task Model', instruction: 'Each task: { id, text, completed, createdAt }', imageUrl: '/steps/c50-step2.jpg' },
      { stepNumber: 3, title: 'CRUD Commands', instruction: 'Implement add, list, done <id>, delete <id> commands.', imageUrl: '/steps/c50-step3.jpg' },
      { stepNumber: 4, title: 'JSON Persistence', instruction: 'Save tasks to tasks.json on every change. Load on startup.', imageUrl: '/steps/c50-step4.jpg' },
      { stepNumber: 5, title: 'Polish', instruction: 'Add colored output, error handling, and help command.', imageUrl: '/steps/c50-step5.jpg' }
    ],
    explanation: {
      simple: 'This project brings everything together: variables, functions, objects, arrays, file I/O, JSON, clean code, and real usefulness.',
      scientific: 'A CLI CRUD application exercises argument parsing, state management, serialization, and command pattern design.'
    },
    quiz: [
      { question: 'process.argv contains:', options: ['CSS selectors', 'Command-line arguments', 'File contents', 'Environment variables'], correctIndex: 1 },
      { question: 'This project uses JSON for:', options: ['Styling', 'Persistent storage', 'API calls', 'Testing'], correctIndex: 1 }
    ],
    outputImageUrl: '/outputs/c50-taskmanager.jpg',
    completionMessage: 'You have completed the first 50 levels! You now have strong foundations in programming logic, data structures, algorithms, and tooling. Next: Advanced Web Development, APIs, and Frameworks!'
  }
];

export default codingLevels1to50;
