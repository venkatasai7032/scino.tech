// ============================================
//  SCINO Coding Program — Levels 1–50
//  Stages: Logic Architect & Web Weaver
//  Theme: Computational Thinking, HTML5, CSS3 & JavaScript Intro
// ============================================

import { DIFFICULTY, LANGUAGE_TYPE } from '../constants';

const codingLevels1to50 = [
  // ═══════════════════════════════════════════
  //  LEVEL 1 — The Language of Computers
  // ═══════════════════════════════════════════
  {
    levelNumber: 1,
    id: 'coding-1',
    title: 'Binary: The Secret Code',
    subtitle: 'How computers think with 0 and 1',
    difficulty: DIFFICULTY.BEGINNER,
    xpReward: 20,
    category: 'Computer Science Fundamentals',

    overview:
      'Computers don\'t understand English or Telugu. They only understand electricity: ON (1) or OFF (0). ' +
      'In this level, you will learn how to write numbers and letters using only these two digits.',

    learningObjectives: [
      'Understand Base-2 numbering system',
      'Convert Decimal (1-10) to Binary',
      'Learn about Bits and Bytes',
    ],

    toolsNeeded: ['Browser Console' or 'Paper & Pen'],

    steps: [
      { stepNumber: 1, title: 'The Power of 2', instruction: 'Draw 4 boxes. From right to left, label them 1, 2, 4, 8. These are the placeholders.', imageUrl: '/steps/c1-step1.jpg' },
      { stepNumber: 2, title: 'Turning On Bits', instruction: 'To make the number 5, turn ON the 4-box and the 1-box (4+1=5). Label them 1. Others are 0.', imageUrl: '/steps/c1-step2.jpg' },
      { stepNumber: 3, title: 'The Result', instruction: 'The binary for 5 is 0101!', tip: 'Every video, photo, and game you see is just a massive string of these 0s and 1s.', imageUrl: '/steps/c1-step3.jpg' },
    ],

    explanation: {
      simple: 'Imagine a row of light switches. By turning different switches on and off, you create a pattern. Computers use these patterns to represent everything in the world.',
      scientific: 'Binary is a positional numeral system with a radix of 2. Each digit is called a "bit". Eight bits make a "byte", which can represent 256 different values (0-255).',
    },

    quiz: [
      { question: 'What is the binary for the number 3?', options: ['0011', '0101', '1010', '1111'], correctIndex: 0 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 11 — Your First Web Page (HTML)
  // ═══════════════════════════════════════════
  {
    levelNumber: 11,
    id: 'coding-11',
    title: 'The Skeleton: HTML Tags',
    subtitle: 'Building your first website structure',
    difficulty: DIFFICULTY.BEGINNER,
    xpReward: 25,
    category: 'Web Development',

    overview: 'HTML (HyperText Markup Language) is the skeleton of every website. Learn how to use "Tags" to tell the browser what is a heading and what is a paragraph.',

    codeSandbox: {
      initialCode: '<h1>Hello World</h1>\n<p>This is my first website!</p>',
      language: 'html',
    },

    steps: [
      { stepNumber: 1, title: 'The Heading', instruction: 'Type <h1> followed by your name and </h1>. This creates a large title.', imageUrl: '/steps/c11-step1.jpg' },
      { stepNumber: 2, title: 'The Paragraph', instruction: 'Type <p> followed by "I am a SCINO Scientist" and </p>.', imageUrl: '/steps/c11-step2.jpg' },
      { stepNumber: 3, title: 'The Image', instruction: 'Use <img src="url"> to add a picture to your page.', tip: 'Tags usually come in pairs: an opening tag <tag> and a closing tag </tag>.', imageUrl: '/steps/c11-step3.jpg' },
    ],

    explanation: {
      simple: 'HTML is like a grocery list. You are telling the computer: "Here is a title, here is a list, and here is a photo."',
      scientific: 'HTML uses elements to wrap different parts of the content to make it appear or act a certain way. The tags act as delimiters for the browser\'s rendering engine.',
    },

    quiz: [
      { question: 'Which tag is used for the largest heading?', options: ['<head>', '<h6>', '<h1>', '<p>'], correctIndex: 2 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 21 — Styling with CSS
  // ═══════════════════════════════════════════
  {
    levelNumber: 21,
    id: 'coding-21',
    title: 'Adding Color & Style',
    subtitle: 'Introduction to CSS3',
    difficulty: DIFFICULTY.BEGINNER,
    xpReward: 30,
    category: 'Web Development',

    overview: 'If HTML is the skeleton, CSS (Cascading Style Sheets) is the skin, clothes, and makeup. Learn how to change colors, fonts, and sizes.',

    codeSandbox: {
      initialCode: 'h1 {\n  color: red;\n  font-size: 50px;\n}',
      language: 'css',
    },

    steps: [
      { stepNumber: 1, title: 'The Selector', instruction: 'In the CSS file, type "h1" to select your title.', imageUrl: '/steps/c21-step1.jpg' },
      { stepNumber: 2, title: 'Properties', instruction: 'Inside curly brackets { }, type "color: blue;" and "background-color: yellow;".', imageUrl: '/steps/c21-step2.jpg' },
      { stepNumber: 3, title: 'The Box Model', instruction: 'Add "border: 2px solid black;" to see how every element on a website is actually a box.', imageUrl: '/steps/c21-step3.jpg' },
    ],

    explanation: {
      simple: 'CSS allows you to point at something on your page and say: "Make this red!" or "Move this to the center!"',
      scientific: 'CSS follows a rule-based system. A selector picks an HTML element, and declarations define properties and values that modify the element\'s visual representation in the DOM.',
    },

    quiz: [
      { question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Computer Software System', 'Cascading Style Sheets', 'Colorful Style Sheets'], correctIndex: 2 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 31 — JavaScript: The Brains
  // ═══════════════════════════════════════════
  {
    levelNumber: 31,
    id: 'coding-31',
    title: 'Making it Move: JavaScript',
    subtitle: 'Variables and Simple Math',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xpReward: 35,
    category: 'JavaScript Programming',

    overview: 'JavaScript makes websites interactive. Learn how to store information in "Variables" and use your website as a calculator.',

    codeSandbox: {
      initialCode: 'let name = "Sai";\nlet age = 15;\nconsole.log(name + " is " + age);',
      language: 'javascript',
    },

    steps: [
      { stepNumber: 1, title: 'Declaring Variables', instruction: 'Use "let" to create a container for data. Example: let score = 0;', imageUrl: '/steps/c31-step1.jpg' },
      { stepNumber: 2, title: 'Operations', instruction: 'Try changing the variable: score = score + 10;.', tip: 'Think of a variable as a labeled box with something inside.', imageUrl: '/steps/c31-step2.jpg' },
      { stepNumber: 3, title: 'Alerts', instruction: 'Type alert("Welcome to SCINO!"); to make a popup appear in the browser.', imageUrl: '/steps/c31-step3.jpg' },
    ],

    explanation: {
      simple: 'JavaScript is the "Verb" of the web. It handles the actions. If you click a button and something happens, that is JavaScript working!',
      scientific: 'JavaScript is a high-level, interpreted scripting language. It uses dynamic typing and allows for complex logic, event handling, and asynchronous data fetching.',
    },

    quiz: [
      { question: 'Which keyword is used to define a variable in modern JS?', options: ['var', 'let', 'const', 'Both let and const'], correctIndex: 3 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 41 — Decision Making (If/Else)
  // ═══════════════════════════════════════════
  {
    levelNumber: 41,
    id: 'coding-41',
    title: 'Logical Decisions',
    subtitle: 'If / Else Statements',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xpReward: 40,
    category: 'JavaScript Programming',

    overview: 'Teach your code how to make choices. If a user is 18, they can vote. If they are younger, they cannot. This is Logic.',

    codeSandbox: {
      initialCode: 'let age = 20;\nif (age >= 18) {\n  console.log("Access Granted");\n} else {\n  console.log("Access Denied");\n}',
      language: 'javascript',
    },

    steps: [
      { stepNumber: 1, title: 'The Condition', instruction: 'Inside the ( ), write a comparison like (score > 50).', imageUrl: '/steps/c41-step1.jpg' },
      { stepNumber: 2, title: 'The "If" Block', instruction: 'Put the code you want to run if the condition is TRUE inside the first { }.', imageUrl: '/steps/c41-step2.jpg' },
      { stepNumber: 3, title: 'The "Else" Block', instruction: 'Put the "backup" code inside the else { } block.', tip: 'Double equals (==) checks if things are the same!', imageUrl: '/steps/c41-step3.jpg' },
    ],

    explanation: {
      simple: 'Logic is like a fork in the road. Your code looks at a condition and decides which path to take.',
      scientific: 'Conditional statements control the flow of execution based on boolean evaluations (true or false).',
    },

    quiz: [
      { question: 'What does "Else" do?', options: ['Runs if the "If" is true', 'Runs if the "If" is false', 'Deletes the code', 'Makes the code faster'], correctIndex: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 50 — The Developer Portfolio (Capstone)
  // ═══════════════════════════════════════════
  {
    levelNumber: 50,
    id: 'coding-50',
    title: 'Capstone: Your Digital Home',
    subtitle: 'Build an interactive Profile Page',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xpReward: 100,
    category: 'Full Stack Integration',

    overview: 'Combine HTML, CSS, and JS to build a professional-looking profile page that introduces you and your SCINO projects to the world.',

    requirements: [
      'A header with your name and photo',
      'A CSS-styled grid showing your best projects',
      'A JS "Contact Me" button that sends an alert',
      'Responsive design (looks good on phones)',
    ],

    steps: [
      { stepNumber: 1, title: 'Layout', instruction: 'Use <div> tags to separate your sections (About, Projects, Contact).', imageUrl: '/steps/c50-step1.jpg' },
      { stepNumber: 2, title: 'Beauty', instruction: 'Add Google Fonts and hover effects in CSS to make your page pop.', imageUrl: '/steps/c50-step2.jpg' },
      { stepNumber: 3, title: 'Interactivity', instruction: 'Add a "Dark Mode" button using JS that changes the background color of the whole page.', tip: 'Use "document.body.style" to change styles with JS!', imageUrl: '/steps/c50-step3.jpg' },
      { stepNumber: 4, title: 'Go Live!', instruction: 'Learn how to use GitHub Pages or Netlify to put your website on the real internet for free!', imageUrl: '/steps/c50-step4.jpg' },
    ],

    explanation: {
      simple: 'You have just built a real product. This website is your identity in the digital world. Anyone with the link can see your work!',
      scientific: 'This project integrates semantic HTML, CSS Flexbox/Grid for layout, and DOM (Document Object Model) manipulation for interactive state management.',
    },

    youtubeVideoId: 'f0m_Gj9N1RE',
    outputImageUrl: '/outputs/c50-portfolio.jpg',
    nextLevelPreview: '🎉 STAGE 2 COMPLETE! You are now a Web Weaver. Next: Level 51 — JavaScript Deep Dive: Arrays, Loops & API Data!',
  },
];

export default codingLevels1to50;
