// ============================================
//  SCINO Coding Program — Levels 51–100
//  Stages: Data Alchemist & App Architect
//  Theme: Advanced JS, React, APIs, Backend & AI Integration
// ============================================

import { DIFFICULTY, LANGUAGE_TYPE } from '../constants';

const codingLevels51to100 = [
  // ═══════════════════════════════════════════
  //  LEVEL 51 — The Power of Repetition (Loops)
  // ═══════════════════════════════════════════
  {
    levelNumber: 51,
    id: 'coding-51',
    title: 'Loops and Arrays',
    subtitle: 'Managing lists of data automatically',
    difficulty: DIFFICULTY.INTERMEDIATE,
    xpReward: 40,
    category: 'JavaScript Programming',

    overview:
      'What if you have 1,000 users? You can\'t write 1,000 "if" statements. ' +
      'Learn how to use Arrays to store lists and Loops to process them in milliseconds.',

    learningObjectives: [
      'Create and manipulate JavaScript Arrays',
      'Master the "for" and "while" loops',
      'Use the .forEach() and .map() methods',
    ],

    codeSandbox: {
      initialCode: 'let fruits = ["Apple", "Banana", "Mango"];\nfruits.forEach(fruit => {\n  console.log("I like " + fruit);\n});',
      language: 'javascript',
    },

    steps: [
      { stepNumber: 1, title: 'Array Creation', instruction: 'Create a list of your 5 favorite scientists using square brackets [ ].', imageUrl: '/steps/c51-step1.jpg' },
      { stepNumber: 2, title: 'The For Loop', instruction: 'Write a loop that counts from 1 to 100 and prints every number.', imageUrl: '/steps/c51-step2.jpg' },
      { stepNumber: 3, title: 'Array Methods', instruction: 'Use .push() to add a new item to your list and .length to see how big it is.', tip: 'Arrays in coding always start counting at 0, not 1!', imageUrl: '/steps/c51-step3.jpg' },
    ],

    explanation: {
      simple: 'An Array is like a shelf with many boxes. A Loop is a robot that starts at the first box and does a job for every box until it reaches the end.',
      scientific: 'Arrays are zero-indexed, ordered collections of data. Iteration via loops allows for O(n) time complexity operations over data structures.',
    },

    quiz: [
      { question: 'If fruits = ["Apple", "Orange"], what is fruits[0]?', options: ['Apple', 'Orange', 'undefined', '2'], correctIndex: 0 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 61 — Fetching Real World Data (APIs)
  // ═══════════════════════════════════════════
  {
    levelNumber: 61,
    id: 'coding-61',
    title: 'Connecting to the World: APIs',
    subtitle: 'Build a Live Weather App',
    difficulty: DIFFICULTY.ADVANCED,
    xpReward: 50,
    category: 'Asynchronous JavaScript',

    overview: 'Learn how your website can "talk" to other computers. Use the Fetch API to get real-time weather data from a global server.',

    codeSandbox: {
      initialCode: 'fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London")\n  .then(response => response.json())\n  .then(data => console.log(data));',
      language: 'javascript',
    },

    steps: [
      { stepNumber: 1, title: 'JSON Basics', instruction: 'Learn about JSON—the format computers use to send data (looks like a JS Object).', imageUrl: '/steps/c61-step1.jpg' },
      { stepNumber: 2, title: 'Async/Await', instruction: 'Use "async" and "await" to make your code wait for the data to arrive from the internet.', imageUrl: '/steps/c61-step2.jpg' },
      { stepNumber: 3, title: 'Displaying Data', instruction: 'Take the temperature from the API and show it in an <h1> on your website.', tip: 'Always use a try/catch block to handle errors if the internet is down!', imageUrl: '/steps/c61-step3.jpg' },
    ],

    explanation: {
      simple: 'An API is like a waiter in a restaurant. You (the client) ask for data, the API goes to the kitchen (the server), and brings the data back to your table (your app).',
      scientific: 'Application Programming Interfaces (APIs) facilitate communication between software components. Modern web APIs typically use RESTful architecture and JSON payloads.',
    },

    quiz: [
      { question: 'What does the "await" keyword do?', options: ['Deletes the data', 'Pauses code execution until the promise is resolved', 'Speeds up the internet', 'Makes the text bold'], correctIndex: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 71 — The React Revolution
  // ═══════════════════════════════════════════
  {
    levelNumber: 71,
    id: 'coding-71',
    title: 'Building with Components: React',
    subtitle: 'Intro to the world\'s most popular UI library',
    difficulty: DIFFICULTY.ADVANCED,
    xpReward: 60,
    category: 'Frameworks',

    overview: 'In professional coding, we don\'t write huge HTML files. We build small "Components" and put them together like LEGO blocks. Welcome to React.js.',

    codeSandbox: {
      initialCode: 'function Welcome() {\n  return <h1>Hello SCINO Master!</h1>;\n}\n\nexport default Welcome;',
      language: 'jsx',
    },

    steps: [
      { stepNumber: 1, title: 'JSX', instruction: 'Write HTML-like code inside your JavaScript. This is called JSX.', imageUrl: '/steps/c71-step1.jpg' },
      { stepNumber: 2, title: 'Props', instruction: 'Learn how to pass "properties" from one component to another (like a parent giving a gift to a child).', imageUrl: '/steps/c71-step2.jpg' },
      { stepNumber: 3, title: 'State (useState)', instruction: 'Use the "useState" hook to make your UI change when a user clicks a button.', tip: 'State is the "memory" of your component.', imageUrl: '/steps/c71-step3.jpg' },
    ],

    explanation: {
      simple: 'React lets you build a website one piece at a time. If you build a "Button" component once, you can use it 1,000 times across your whole site!',
      scientific: 'React uses a Virtual DOM to optimize rendering performance by only updating the parts of the real DOM that have changed.',
    },

    quiz: [
      { question: 'What is a "Hook" in React?', options: ['A way to catch fish', 'A special function to use state and other features', 'An error in the code', 'A CSS property'], correctIndex: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 85 — Database Foundations (Firebase)
  // ═══════════════════════════════════════════
  {
    levelNumber: 85,
    id: 'coding-85',
    title: 'Saving Data: The Database',
    subtitle: 'Connecting your app to a Cloud Database',
    difficulty: DIFFICULTY.EXPERT,
    xpReward: 75,
    category: 'Backend & Data',

    overview: 'Currently, if you refresh your page, all data is lost. Learn how to use Google Firebase to save user data permanently in the cloud.',

    steps: [
      { stepNumber: 1, title: 'Firebase Setup', instruction: 'Create a project in the Firebase Console and get your API keys.', imageUrl: '/steps/c85-step1.jpg' },
      { stepNumber: 2, title: 'Firestore', instruction: 'Learn how to "push" a message into the database and "pull" it back out.', imageUrl: '/steps/c85-step2.jpg' },
      { stepNumber: 3, title: 'Authentication', instruction: 'Add a "Login with Google" button to your app with just 5 lines of code.', imageUrl: '/steps/c85-step3.jpg' },
    ],

    explanation: {
      simple: 'A database is like a giant digital warehouse. Even if you turn off your phone, the data stays safe in the warehouse until you ask for it again.',
      scientific: 'Firebase is a NoSQL (Document-based) database. It uses real-time listeners to sync data across all connected clients instantly.',
    },

    quiz: [
      { question: 'Why do we need a database?', options: ['To make the website colorful', 'To store data permanently', 'To make the internet faster', 'To write better HTML'], correctIndex: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 95 — AI & Machine Learning Intro
  // ═══════════════════════════════════════════
  {
    levelNumber: 95,
    id: 'coding-95',
    title: 'The AI Architect',
    subtitle: 'Integrating OpenAI/Gemini into your App',
    difficulty: DIFFICULTY.EXPERT,
    xpReward: 90,
    category: 'AI Integration',

    overview: 'Give your app a brain. Connect to an AI model (like GPT-4) to summarize text, answer questions, or generate images for your users.',

    steps: [
      { stepNumber: 1, title: 'Prompt Engineering', instruction: 'Learn how to give specific instructions to an AI to get the best results.', imageUrl: '/steps/c95-step1.jpg' },
      { stepNumber: 2, title: 'The AI Fetch', instruction: 'Send a prompt from your React app to the AI API and display the smart response.', imageUrl: '/steps/c95-step2.jpg' },
      { stepNumber: 3, title: 'Ethics', instruction: 'Learn about bias and why we must use AI responsibly.', tip: 'AI is a powerful tool, but it can make mistakes (hallucinations).', imageUrl: '/steps/c95-step3.jpg' },
    ],

    explanation: {
      simple: 'You are now teaching your website how to "think" and "talk". By connecting it to an AI, your app can help people solve problems like a human would.',
      scientific: 'Large Language Models (LLMs) are trained on massive datasets. By using APIs, we can leverage these pre-trained transformers in our own lightweight applications.',
    },

    quiz: [
      { question: 'What is an "API Key"?', options: ['A password for a website', 'A secret code that identifies your app to the AI server', 'A key to unlock a computer', 'A type of code error'], correctIndex: 1 },
    ],
  },

  // ═══════════════════════════════════════════
  //  LEVEL 100 — THE SCINO SOFTWARE GRAND CHALLENGE
  // ═══════════════════════════════════════════
  {
    levelNumber: 100,
    id: 'coding-100',
    title: 'The Full-Stack Masterpiece',
    subtitle: 'Build, Deploy, and Launch your own SaaS',
    difficulty: DIFFICULTY.MASTER,
    xpReward: 500,
    category: 'Innovation',

    overview:
      'This is the culmination of your coding journey. You will build a "Full-Stack" application ' +
      'that solves a real problem. It must include a Database, User Login, and a beautiful React interface.',

    requirements: [
      'Must solve a specific community problem (e.g., Blood Donor Finder, School Library Manager)',
      'Must use a modern framework (React/Next.js)',
      'Must be deployed on a live URL (Vercel/Netlify)',
      'Must have a functional Database (Firebase/Supabase)',
    ],

    steps: [
      { stepNumber: 1, title: 'Architecture', instruction: 'Plan your app on paper. What are the screens? What does the data look like?', imageUrl: '/steps/c100-step1.jpg' },
      { stepNumber: 2, title: 'The Sprint', instruction: 'Spend 14 days building your MVP (Minimum Viable Product).', imageUrl: '/steps/c100-step2.jpg' },
      { stepNumber: 3, title: 'Bug Squash', instruction: 'Test your app on different devices and fix any errors.', imageUrl: '/steps/c100-step3.jpg' },
      { stepNumber: 4, title: 'The Launch', instruction: 'Share your URL with the SCINO community and present your code!', imageUrl: '/steps/c100-step4.jpg' },
    ],

    explanation: {
      simple: 'You have evolved from writing single lines of code to building entire digital universes. You are now a Software Engineer.',
      scientific: 'Full-stack development requires mastery of both the frontend (client-side) and backend (server/data-side). Successful deployment confirms competence in the entire Software Development Life Cycle (SDLC).',
    },

    youtubeVideoId: 'U_A4F-h3hWw',
    outputImageUrl: '/outputs/c100-graduation.jpg',
    nextLevelPreview: '🎓 GRADUATION: You have attained the rank of SCINO CODE MASTER. Welcome to the elite circle of digital innovators!',
  },
];

export default codingLevels51to100;
