// ============================================================
//  SCINO Coding Program — Levels 51–100
//  Stage: Advanced → Expert → Capstone
//  Theme: APIs, Databases, Frameworks, DevOps, Final Projects
// ============================================================

import { DIFFICULTY, SAFETY_LEVEL } from '../constants';

const codingLevels51to100 = [

  // ──────────────────────────────────────────
  // SECTION A: APIs & Async (Levels 51–55)
  // ──────────────────────────────────────────

  {
    levelNumber: 51,
    id: 'coding-51',
    title: 'API Basics',
    subtitle: 'Fetch data from the web',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 40,
    category: 'Web Development',
    overview: 'Learn how to fetch data from a public API and display it.',
    learningObjectives: [
      'Understand what an API is',
      'Make HTTP requests using fetch',
      'Parse JSON responses',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'JavaScript Runtime', imageUrl: '/materials/nodejs.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Choose API', instruction: 'Select a public API like JSONPlaceholder.', imageUrl: '/steps/c51-step1.jpg' },
      { stepNumber: 2, title: 'Fetch Data', instruction: 'Use fetch() to send a GET request.', imageUrl: '/steps/c51-step2.jpg' },
      { stepNumber: 3, title: 'Display Data', instruction: 'Parse JSON and log the results to the console.', imageUrl: '/steps/c51-step3.jpg' },
    ],
    explanation: {
      simple: 'APIs let programs talk to each other over the internet.',
      scientific: 'APIs expose HTTP endpoints that return structured data like JSON for consumption by clients.',
    },
    quiz: [
      { question: 'What format do most APIs return?', options: ['HTML', 'JSON', 'PDF', 'MP3'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c51-api.jpg',
  },

  {
    levelNumber: 52,
    id: 'coding-52',
    title: 'Async / Await',
    subtitle: 'Handle asynchronous code cleanly',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'JavaScript',
    overview: 'Use async/await to write cleaner asynchronous code.',
    learningObjectives: [
      'Understand Promises',
      'Use async/await syntax',
      'Handle errors with try/catch',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'JavaScript Runtime', imageUrl: '/materials/nodejs.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Async Function', instruction: 'Write: async function getData() {}', imageUrl: '/steps/c52-step1.jpg' },
      { stepNumber: 2, title: 'Await Fetch', instruction: 'const res = await fetch(url);', imageUrl: '/steps/c52-step2.jpg' },
      { stepNumber: 3, title: 'Error Handling', instruction: 'Wrap in try/catch and log errors.', imageUrl: '/steps/c52-step3.jpg' },
    ],
    explanation: {
      simple: 'Await pauses the function until data arrives, then continues.',
      scientific: 'Async/await is syntactic sugar over Promises, enabling sequential-looking asynchronous code.',
    },
    quiz: [
      { question: 'What does await do?', options: ['Stops forever', 'Waits for a Promise to resolve', 'Skips the line', 'Deletes data'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c52-async.jpg',
  },

  {
    levelNumber: 53,
    id: 'coding-53',
    title: 'Intro to Databases',
    subtitle: 'Store and retrieve data',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 45,
    category: 'Databases',
    overview: 'Use a lightweight database to persist data beyond program runtime.',
    learningObjectives: [
      'Understand relational databases',
      'Create tables and columns',
      'Perform CRUD operations',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'SQLite', imageUrl: '/materials/sqlite.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install SQLite', instruction: 'Add better-sqlite3 package to your project.', imageUrl: '/steps/c53-step1.jpg' },
      { stepNumber: 2, title: 'Create Table', instruction: 'CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, grade INTEGER);', imageUrl: '/steps/c53-step2.jpg' },
      { stepNumber: 3, title: 'Insert and Read', instruction: 'INSERT a row and SELECT it back.', imageUrl: '/steps/c53-step3.jpg' },
    ],
    explanation: {
      simple: 'Databases store data permanently so programs can find it later.',
      scientific: 'Relational databases organize data in tables with defined schemas and support SQL queries.',
    },
    quiz: [
      { question: 'What does CRUD stand for?', options: ['Create Read Update Delete', 'Copy Read Upload Delete', 'Create Run Update Drop', 'Compile Read Use Debug'], correctIndex: 0 },
    ],
    outputImageUrl: '/outputs/c53-database.jpg',
  },

  {
    levelNumber: 54,
    id: 'coding-54',
    title: 'REST API Builder',
    subtitle: 'Create your own API',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '55 minutes',
    xpReward: 50,
    category: 'Backend Development',
    overview: 'Build a simple REST API that serves data from your database.',
    learningObjectives: [
      'Set up an Express server',
      'Create GET and POST routes',
      'Connect API to SQLite',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js', imageUrl: '/materials/nodejs.jpg' },
      { name: 'Express.js', imageUrl: '/materials/express.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install Express', instruction: 'npm install express', imageUrl: '/steps/c54-step1.jpg' },
      { stepNumber: 2, title: 'Create Server', instruction: 'Set up app.listen(3000).', imageUrl: '/steps/c54-step2.jpg' },
      { stepNumber: 3, title: 'Add Routes', instruction: 'Create GET /students and POST /students routes.', imageUrl: '/steps/c54-step3.jpg' },
    ],
    explanation: {
      simple: 'You can build your own API so other programs can access your data.',
      scientific: 'Express provides middleware-based routing on top of Node.js HTTP for building RESTful services.',
    },
    quiz: [
      { question: 'Which HTTP method retrieves data?', options: ['POST', 'DELETE', 'GET', 'PUT'], correctIndex: 2 },
    ],
    outputImageUrl: '/outputs/c54-rest.jpg',
  },

  {
    levelNumber: 55,
    id: 'coding-55',
    title: 'Error Handling Mastery',
    subtitle: 'Build resilient code',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Best Practices',
    overview: 'Handle errors gracefully using try/catch, validation, and custom errors.',
    learningObjectives: [
      'Use try/catch/finally blocks',
      'Create custom error classes',
      'Validate inputs before processing',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'JavaScript Runtime', imageUrl: '/materials/nodejs.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Try/Catch', instruction: 'Wrap risky code in try/catch.', imageUrl: '/steps/c55-step1.jpg' },
      { stepNumber: 2, title: 'Custom Errors', instruction: 'Create class ValidationError extends Error.', imageUrl: '/steps/c55-step2.jpg' },
      { stepNumber: 3, title: 'Input Guards', instruction: 'Check inputs before using them.', imageUrl: '/steps/c55-step3.jpg' },
    ],
    explanation: {
      simple: 'Good programs prepare for things going wrong.',
      scientific: 'Exception handling separates error-processing code from normal flow, improving reliability.',
    },
    quiz: [
      { question: 'What block always runs?', options: ['try', 'catch', 'finally', 'else'], correctIndex: 2 },
    ],
    outputImageUrl: '/outputs/c55-errors.jpg',
  },

  // ──────────────────────────────────────────
  // SECTION B: Frontend (Levels 56–60)
  // ──────────────────────────────────────────

  {
    levelNumber: 56,
    id: 'coding-56',
    title: 'HTML Foundations',
    subtitle: 'Structure a web page',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 35,
    category: 'Frontend',
    overview: 'Learn how to structure content using HTML tags.',
    learningObjectives: [
      'Use headings, paragraphs, and divs',
      'Add images and links',
      'Understand semantic HTML',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create HTML', instruction: 'Write a basic HTML5 boilerplate.', imageUrl: '/steps/c56-step1.jpg' },
      { stepNumber: 2, title: 'Add Content', instruction: 'Add headings, paragraphs, and an image.', imageUrl: '/steps/c56-step2.jpg' },
      { stepNumber: 3, title: 'Open in Browser', instruction: 'View your page in the browser.', imageUrl: '/steps/c56-step3.jpg' },
    ],
    explanation: {
      simple: 'HTML is the skeleton of every web page.',
      scientific: 'HTML provides a Document Object Model (DOM) that browsers parse and render visually.',
    },
    quiz: [
      { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyper Transfer Markup Language'], correctIndex: 0 },
    ],
    outputImageUrl: '/outputs/c56-html.jpg',
  },

  {
    levelNumber: 57,
    id: 'coding-57',
    title: 'CSS Styling',
    subtitle: 'Make pages beautiful',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 35,
    category: 'Frontend',
    overview: 'Style HTML elements with CSS properties.',
    learningObjectives: [
      'Use selectors and properties',
      'Apply colors, fonts, and spacing',
      'Understand the box model',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Link CSS', instruction: 'Create style.css and link it in HTML.', imageUrl: '/steps/c57-step1.jpg' },
      { stepNumber: 2, title: 'Style Elements', instruction: 'Add colors, padding, margins to body and headings.', imageUrl: '/steps/c57-step2.jpg' },
      { stepNumber: 3, title: 'Box Model', instruction: 'Experiment with border, margin, and padding.', imageUrl: '/steps/c57-step3.jpg' },
    ],
    explanation: {
      simple: 'CSS controls how HTML looks on screen.',
      scientific: 'CSS uses the cascade algorithm to resolve style conflicts and applies the box model for layout.',
    },
    quiz: [
      { question: 'What property changes text color?', options: ['font-size', 'color', 'border', 'margin'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c57-css.jpg',
  },

  {
    levelNumber: 58,
    id: 'coding-58',
    title: 'Flexbox Layout',
    subtitle: 'Align elements easily',
    difficulty: DIFFICULTY.INTERMEDIATE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 40,
    category: 'Frontend',
    overview: 'Use Flexbox to create responsive layouts.',
    learningObjectives: [
      'Understand flex containers and items',
      'Use justify-content and align-items',
      'Build a navigation bar',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Flex Container', instruction: 'Set display: flex on a parent div.', imageUrl: '/steps/c58-step1.jpg' },
      { stepNumber: 2, title: 'Alignment', instruction: 'Use justify-content: space-between.', imageUrl: '/steps/c58-step2.jpg' },
      { stepNumber: 3, title: 'Navbar', instruction: 'Build a horizontal navigation bar.', imageUrl: '/steps/c58-step3.jpg' },
    ],
    explanation: {
      simple: 'Flexbox lets you arrange items in rows or columns easily.',
      scientific: 'Flexbox is a one-dimensional layout model that distributes space among items in a container.',
    },
    quiz: [
      { question: 'What does justify-content control?', options: ['Vertical alignment', 'Horizontal spacing', 'Font size', 'Border width'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c58-flexbox.jpg',
  },

  {
    levelNumber: 59,
    id: 'coding-59',
    title: 'DOM Manipulation',
    subtitle: 'Change pages with JavaScript',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Frontend',
    overview: 'Use JavaScript to dynamically update HTML elements.',
    learningObjectives: [
      'Select elements with querySelector',
      'Change text and styles',
      'Add event listeners',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Select Element', instruction: 'const btn = document.querySelector("#myBtn");', imageUrl: '/steps/c59-step1.jpg' },
      { stepNumber: 2, title: 'Add Listener', instruction: 'btn.addEventListener("click", handler);', imageUrl: '/steps/c59-step2.jpg' },
      { stepNumber: 3, title: 'Update DOM', instruction: 'Change text content on click.', imageUrl: '/steps/c59-step3.jpg' },
    ],
    explanation: {
      simple: 'JavaScript can change what you see on the page after it loads.',
      scientific: 'The DOM API exposes document nodes as objects that JavaScript can read and modify at runtime.',
    },
    quiz: [
      { question: 'Which method selects an element?', options: ['console.log', 'querySelector', 'fetch', 'setTimeout'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c59-dom.jpg',
  },

  {
    levelNumber: 60,
    id: 'coding-60',
    title: 'Mini Project: To-Do App',
    subtitle: 'Full frontend project',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 55,
    category: 'Mini Project',
    overview: 'Build a complete To-Do app using HTML, CSS, and JavaScript.',
    learningObjectives: [
      'Combine HTML/CSS/JS',
      'Handle form inputs',
      'Add and remove items dynamically',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'HTML Form', instruction: 'Create an input field and Add button.', imageUrl: '/steps/c60-step1.jpg' },
      { stepNumber: 2, title: 'JS Logic', instruction: 'On click, add a new list item to the page.', imageUrl: '/steps/c60-step2.jpg' },
      { stepNumber: 3, title: 'Delete Feature', instruction: 'Add a delete button to each item.', imageUrl: '/steps/c60-step3.jpg' },
    ],
    explanation: {
      simple: 'A To-Do app combines everything you have learned into one useful tool.',
      scientific: 'This project exercises DOM manipulation, event handling, and state management in the browser.',
    },
    quiz: [
      { question: 'Which event fires when a form is submitted?', options: ['click', 'submit', 'hover', 'load'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c60-todo.jpg',
  },

  // ──────────────────────────────────────────
  // SECTION C: React & State (Levels 61–70)
  // ──────────────────────────────────────────

  {
    levelNumber: 61,
    id: 'coding-61',
    title: 'Intro to React',
    subtitle: 'Component-based UI',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'React',
    overview: 'Learn what React is and create your first component.',
    learningObjectives: [
      'Understand components and JSX',
      'Set up a React project',
      'Render a simple component',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js', imageUrl: '/materials/nodejs.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create App', instruction: 'Run npx create-react-app my-app.', imageUrl: '/steps/c61-step1.jpg' },
      { stepNumber: 2, title: 'Edit App.js', instruction: 'Replace content with your own JSX.', imageUrl: '/steps/c61-step2.jpg' },
      { stepNumber: 3, title: 'Run', instruction: 'npm start and view in browser.', imageUrl: '/steps/c61-step3.jpg' },
    ],
    explanation: {
      simple: 'React lets you build web pages from reusable pieces called components.',
      scientific: 'React uses a virtual DOM to efficiently update only the parts of the UI that change.',
    },
    quiz: [
      { question: 'What is JSX?', options: ['A database', 'JavaScript XML syntax for UI', 'A CSS library', 'A testing tool'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c61-react.jpg',
  },

  {
    levelNumber: 62,
    id: 'coding-62',
    title: 'Props and Components',
    subtitle: 'Pass data between components',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'React',
    overview: 'Use props to make components reusable and dynamic.',
    learningObjectives: [
      'Pass props to child components',
      'Render lists of components',
      'Use default props',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Card Component', instruction: 'function Card({ title, text }) { return <div>...</div>; }', imageUrl: '/steps/c62-step1.jpg' },
      { stepNumber: 2, title: 'Pass Props', instruction: 'Use <Card title="Hello" text="World" />.', imageUrl: '/steps/c62-step2.jpg' },
      { stepNumber: 3, title: 'Render List', instruction: 'Map an array of data to Card components.', imageUrl: '/steps/c62-step3.jpg' },
    ],
    explanation: {
      simple: 'Props are like arguments for components, making them flexible.',
      scientific: 'Props enable unidirectional data flow from parent to child in the component tree.',
    },
    quiz: [
      { question: 'Props flow in which direction?', options: ['Child to parent', 'Parent to child', 'Both ways', 'Sideways'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c62-props.jpg',
  },

  {
    levelNumber: 63,
    id: 'coding-63',
    title: 'State with useState',
    subtitle: 'Make components interactive',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'React',
    overview: 'Use React state to make components respond to user actions.',
    learningObjectives: [
      'Use the useState hook',
      'Update state on events',
      'Re-render on state change',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Import useState', instruction: 'import { useState } from "react";', imageUrl: '/steps/c63-step1.jpg' },
      { stepNumber: 2, title: 'Create Counter', instruction: 'const [count, setCount] = useState(0);', imageUrl: '/steps/c63-step2.jpg' },
      { stepNumber: 3, title: 'Button Click', instruction: 'onClick={() => setCount(count + 1)}', imageUrl: '/steps/c63-step3.jpg' },
    ],
    explanation: {
      simple: 'State remembers values that change over time inside a component.',
      scientific: 'useState returns a state variable and a setter function that triggers a re-render when called.',
    },
    quiz: [
      { question: 'What triggers a re-render?', options: ['console.log', 'setState call', 'A comment', 'An import'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c63-state.jpg',
  },

  {
    levelNumber: 64,
    id: 'coding-64',
    title: 'useEffect Hook',
    subtitle: 'Side effects in React',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'React',
    overview: 'Run code when a component mounts or when data changes.',
    learningObjectives: [
      'Understand side effects',
      'Use useEffect with dependencies',
      'Fetch data on mount',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Import useEffect', instruction: 'import { useEffect } from "react";', imageUrl: '/steps/c64-step1.jpg' },
      { stepNumber: 2, title: 'Fetch on Mount', instruction: 'useEffect(() => { fetchData(); }, []);', imageUrl: '/steps/c64-step2.jpg' },
      { stepNumber: 3, title: 'Dependency Array', instruction: 'Add state variables to the dependency array.', imageUrl: '/steps/c64-step3.jpg' },
    ],
    explanation: {
      simple: 'useEffect runs extra code after the component appears on screen.',
      scientific: 'useEffect synchronizes a component with external systems by running after render commits.',
    },
    quiz: [
      { question: 'An empty dependency array means the effect runs:', options: ['Every render', 'Only once on mount', 'Never', 'On unmount'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c64-effect.jpg',
  },

  {
    levelNumber: 65,
    id: 'coding-65',
    title: 'Conditional Rendering',
    subtitle: 'Show or hide UI elements',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '35 minutes',
    xpReward: 40,
    category: 'React',
    overview: 'Render different content based on state or props.',
    learningObjectives: [
      'Use ternary operators in JSX',
      'Show loading states',
      'Toggle visibility',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Loading State', instruction: 'Create isLoading state variable.', imageUrl: '/steps/c65-step1.jpg' },
      { stepNumber: 2, title: 'Ternary in JSX', instruction: '{isLoading ? <Spinner /> : <Content />}', imageUrl: '/steps/c65-step2.jpg' },
      { stepNumber: 3, title: 'Toggle Button', instruction: 'Toggle a section visible or hidden.', imageUrl: '/steps/c65-step3.jpg' },
    ],
    explanation: {
      simple: 'You can show different parts of a page depending on what is happening.',
      scientific: 'Conditional rendering evaluates expressions at render time to select which JSX subtree to return.',
    },
    quiz: [
      { question: 'Which operator is commonly used for inline conditions in JSX?', options: ['for', 'switch', 'ternary (?:)', 'while'], correctIndex: 2 },
    ],
    outputImageUrl: '/outputs/c65-conditional.jpg',
  },

  {
    levelNumber: 66,
    id: 'coding-66',
    title: 'Forms in React',
    subtitle: 'Controlled components',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'React',
    overview: 'Build forms using controlled components and handle submissions.',
    learningObjectives: [
      'Create controlled inputs with state',
      'Handle onChange events',
      'Process form data on submit',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'State for Input', instruction: 'const [email, setEmail] = useState("");', imageUrl: '/steps/c66-step1.jpg' },
      { stepNumber: 2, title: 'Controlled Input', instruction: '<input value={email} onChange={e => setEmail(e.target.value)} />', imageUrl: '/steps/c66-step2.jpg' },
      { stepNumber: 3, title: 'Submit Handler', instruction: 'Prevent default and process data.', imageUrl: '/steps/c66-step3.jpg' },
    ],
    explanation: {
      simple: 'Controlled forms keep the input value in state so React always knows the current value.',
      scientific: 'Controlled components lift form state into React, making the component the single source of truth.',
    },
    quiz: [
      { question: 'What makes an input controlled?', options: ['A CSS class', 'Value bound to state', 'An id attribute', 'A placeholder'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c66-forms.jpg',
  },

  {
    levelNumber: 67,
    id: 'coding-67',
    title: 'React Router',
    subtitle: 'Multi-page navigation',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'React',
    overview: 'Add client-side routing to navigate between pages without reloading.',
    learningObjectives: [
      'Install and configure React Router',
      'Create Route components',
      'Use Link for navigation',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install Router', instruction: 'npm install react-router-dom', imageUrl: '/steps/c67-step1.jpg' },
      { stepNumber: 2, title: 'Define Routes', instruction: 'Wrap app in BrowserRouter and add Route components.', imageUrl: '/steps/c67-step2.jpg' },
      { stepNumber: 3, title: 'Navigation', instruction: 'Use <Link to="/about">About</Link> for links.', imageUrl: '/steps/c67-step3.jpg' },
    ],
    explanation: {
      simple: 'React Router lets you switch pages without the browser reloading.',
      scientific: 'Client-side routing intercepts navigation events and renders the matching component tree.',
    },
    quiz: [
      { question: 'What component replaces <a> tags in React Router?', options: ['<Route>', '<Link>', '<Switch>', '<Nav>'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c67-router.jpg',
  },

  {
    levelNumber: 68,
    id: 'coding-68',
    title: 'Context API',
    subtitle: 'Global state without prop drilling',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'React',
    overview: 'Share data across components without passing props through every level.',
    learningObjectives: [
      'Create a context',
      'Provide and consume values',
      'Avoid prop drilling',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Context', instruction: 'const ThemeCtx = createContext("light");', imageUrl: '/steps/c68-step1.jpg' },
      { stepNumber: 2, title: 'Provider', instruction: 'Wrap tree in <ThemeCtx.Provider value={theme}>.', imageUrl: '/steps/c68-step2.jpg' },
      { stepNumber: 3, title: 'Consume', instruction: 'const theme = useContext(ThemeCtx);', imageUrl: '/steps/c68-step3.jpg' },
    ],
    explanation: {
      simple: 'Context is like a broadcast that any component can listen to.',
      scientific: 'Context provides a way to pass data through the component tree without prop drilling at every level.',
    },
    quiz: [
      { question: 'Context solves which problem?', options: ['CSS styling', 'Prop drilling', 'Database queries', 'File uploads'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c68-context.jpg',
  },

  {
    levelNumber: 69,
    id: 'coding-69',
    title: 'Custom Hooks',
    subtitle: 'Reuse stateful logic',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'React',
    overview: 'Create your own hooks to share logic between components.',
    learningObjectives: [
      'Extract logic into custom hooks',
      'Follow hook naming conventions',
      'Reuse across components',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Hook', instruction: 'function useCounter(initial) { ... }', imageUrl: '/steps/c69-step1.jpg' },
      { stepNumber: 2, title: 'Return Values', instruction: 'return { count, increment, reset };', imageUrl: '/steps/c69-step2.jpg' },
      { stepNumber: 3, title: 'Use in Components', instruction: 'const { count, increment } = useCounter(0);', imageUrl: '/steps/c69-step3.jpg' },
    ],
    explanation: {
      simple: 'Custom hooks let you package logic so you do not repeat yourself.',
      scientific: 'Custom hooks compose built-in hooks into reusable units following the rules of hooks.',
    },
    quiz: [
      { question: 'Custom hooks must start with:', options: ['get', 'set', 'use', 'on'], correctIndex: 2 },
    ],
    outputImageUrl: '/outputs/c69-hooks.jpg',
  },

  {
    levelNumber: 70,
    id: 'coding-70',
    title: 'Mini Project: Dashboard',
    subtitle: 'Full React application',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '90 minutes',
    xpReward: 70,
    category: 'Mini Project',
    overview: 'Build a multi-page dashboard with routing, state, and API data.',
    learningObjectives: [
      'Combine all React concepts',
      'Fetch and display real data',
      'Navigate between views',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Layout', instruction: 'Create Sidebar and Content components.', imageUrl: '/steps/c70-step1.jpg' },
      { stepNumber: 2, title: 'Routes', instruction: 'Add Home, Stats, and Settings pages.', imageUrl: '/steps/c70-step2.jpg' },
      { stepNumber: 3, title: 'Data Fetch', instruction: 'Fetch stats from an API and display.', imageUrl: '/steps/c70-step3.jpg' },
    ],
    explanation: {
      simple: 'A dashboard brings all your skills together into one professional app.',
      scientific: 'Dashboards integrate routing, state management, data fetching, and component composition.',
    },
    quiz: [
      { question: 'Which hook fetches data on mount?', options: ['useState', 'useEffect', 'useRef', 'useMemo'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c70-dashboard.jpg',
  },

  // ──────────────────────────────────────────
  // SECTION D: Backend & Full-Stack (71–80)
  // ──────────────────────────────────────────

  {
    levelNumber: 71,
    id: 'coding-71',
    title: 'Node.js Deep Dive',
    subtitle: 'Server-side JavaScript',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Backend',
    overview: 'Understand how Node.js runs JavaScript outside the browser.',
    learningObjectives: [
      'Use the fs module for file operations',
      'Understand the event loop',
      'Create a simple HTTP server',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js', imageUrl: '/materials/nodejs.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Read File', instruction: 'Use fs.readFileSync to read a text file.', imageUrl: '/steps/c71-step1.jpg' },
      { stepNumber: 2, title: 'HTTP Server', instruction: 'Create a server with http.createServer.', imageUrl: '/steps/c71-step2.jpg' },
      { stepNumber: 3, title: 'Respond', instruction: 'Send "Hello from Node!" to the browser.', imageUrl: '/steps/c71-step3.jpg' },
    ],
    explanation: {
      simple: 'Node.js lets you run JavaScript on the server instead of in a browser.',
      scientific: 'Node.js uses the V8 engine with an event-driven, non-blocking I/O model for scalable applications.',
    },
    quiz: [
      { question: 'Which module handles files in Node?', options: ['http', 'fs', 'url', 'dom'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c71-node.jpg',
  },

  {
    levelNumber: 72,
    id: 'coding-72',
    title: 'Express Middleware',
    subtitle: 'Request processing pipeline',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Backend',
    overview: 'Learn how middleware processes requests before they reach your routes.',
    learningObjectives: [
      'Create custom middleware',
      'Use built-in middleware',
      'Understand the next() function',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Express Project', imageUrl: '/materials/express.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Logger Middleware', instruction: 'Log method, URL, and timestamp for every request.', imageUrl: '/steps/c72-step1.jpg' },
      { stepNumber: 2, title: 'JSON Parser', instruction: 'Use app.use(express.json()).', imageUrl: '/steps/c72-step2.jpg' },
      { stepNumber: 3, title: 'Chain Middleware', instruction: 'Add auth check before protected routes.', imageUrl: '/steps/c72-step3.jpg' },
    ],
    explanation: {
      simple: 'Middleware is like a checkpoint that every request passes through.',
      scientific: 'Middleware functions execute sequentially in the request-response cycle, calling next() to proceed.',
    },
    quiz: [
      { question: 'What does next() do in middleware?', options: ['Stops the server', 'Passes to the next middleware', 'Sends response', 'Logs errors'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c72-middleware.jpg',
  },

  {
    levelNumber: 73,
    id: 'coding-73',
    title: 'MongoDB Basics',
    subtitle: 'NoSQL database',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Databases',
    overview: 'Store documents in a flexible NoSQL database.',
    learningObjectives: [
      'Understand documents and collections',
      'Use Mongoose for schema modeling',
      'Perform CRUD with MongoDB',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'MongoDB Atlas', imageUrl: '/materials/mongodb.jpg' },
      { name: 'Mongoose', imageUrl: '/materials/mongoose.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Connect', instruction: 'Use mongoose.connect() with your Atlas URI.', imageUrl: '/steps/c73-step1.jpg' },
      { stepNumber: 2, title: 'Define Schema', instruction: 'Create a Student schema with name and grade.', imageUrl: '/steps/c73-step2.jpg' },
      { stepNumber: 3, title: 'CRUD Operations', instruction: 'Create, read, update, and delete documents.', imageUrl: '/steps/c73-step3.jpg' },
    ],
    explanation: {
      simple: 'MongoDB stores data as flexible JSON-like documents.',
      scientific: 'MongoDB is a document-oriented database using BSON format, with dynamic schemas.',
    },
    quiz: [
      { question: 'MongoDB stores data as:', options: ['Tables', 'Documents', 'Spreadsheets', 'Files'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c73-mongo.jpg',
  },

  {
    levelNumber: 74,
    id: 'coding-74',
    title: 'Authentication Basics',
    subtitle: 'Login and signup',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 55,
    category: 'Security',
    overview: 'Implement basic user authentication with hashed passwords.',
    learningObjectives: [
      'Hash passwords with bcrypt',
      'Create signup and login endpoints',
      'Use JWT for sessions',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Express Project', imageUrl: '/materials/express.jpg' },
      { name: 'bcrypt & jsonwebtoken', imageUrl: '/materials/npm.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Hash Password', instruction: 'Use bcrypt.hash() during signup.', imageUrl: '/steps/c74-step1.jpg' },
      { stepNumber: 2, title: 'Verify Password', instruction: 'Use bcrypt.compare() during login.', imageUrl: '/steps/c74-step2.jpg' },
      { stepNumber: 3, title: 'Issue JWT', instruction: 'Sign a token and send it to the client.', imageUrl: '/steps/c74-step3.jpg' },
    ],
    explanation: {
      simple: 'Authentication confirms who you are so the app can trust you.',
      scientific: 'JWT encodes claims into a signed token that the server can verify without storing session state.',
    },
    quiz: [
      { question: 'Why hash passwords?', options: ['To make them longer', 'So they cannot be read if the database leaks', 'To encrypt the database', 'To speed up login'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c74-auth.jpg',
  },

  {
    levelNumber: 75,
    id: 'coding-75',
    title: 'File Uploads',
    subtitle: 'Handle user files',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Backend',
    overview: 'Accept file uploads from users and store them on the server.',
    learningObjectives: [
      'Use multer middleware',
      'Validate file types and sizes',
      'Serve uploaded files',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Express Project', imageUrl: '/materials/express.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install Multer', instruction: 'npm install multer', imageUrl: '/steps/c75-step1.jpg' },
      { stepNumber: 2, title: 'Configure Storage', instruction: 'Set destination and filename rules.', imageUrl: '/steps/c75-step2.jpg' },
      { stepNumber: 3, title: 'Upload Route', instruction: 'Create POST /upload endpoint.', imageUrl: '/steps/c75-step3.jpg' },
    ],
    explanation: {
      simple: 'Multer handles multipart form data so your server can accept files.',
      scientific: 'File uploads use multipart/form-data encoding, which multer parses into accessible file objects.',
    },
    quiz: [
      { question: 'Which middleware handles file uploads?', options: ['cors', 'multer', 'helmet', 'morgan'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c75-upload.jpg',
  },

  {
    levelNumber: 76,
    id: 'coding-76',
    title: 'WebSockets',
    subtitle: 'Real-time communication',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'Real-Time',
    overview: 'Build real-time features using WebSockets.',
    learningObjectives: [
      'Understand WebSocket protocol',
      'Use Socket.io for real-time events',
      'Build a simple chat feature',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Express Project', imageUrl: '/materials/express.jpg' },
      { name: 'Socket.io', imageUrl: '/materials/socketio.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install Socket.io', instruction: 'npm install socket.io', imageUrl: '/steps/c76-step1.jpg' },
      { stepNumber: 2, title: 'Server Setup', instruction: 'Attach Socket.io to your Express server.', imageUrl: '/steps/c76-step2.jpg' },
      { stepNumber: 3, title: 'Client Events', instruction: 'Emit and listen for messages.', imageUrl: '/steps/c76-step3.jpg' },
    ],
    explanation: {
      simple: 'WebSockets keep a connection open so data can flow instantly both ways.',
      scientific: 'WebSockets upgrade HTTP to a full-duplex TCP connection for low-latency bidirectional communication.',
    },
    quiz: [
      { question: 'WebSockets provide:', options: ['One-way data', 'Two-way real-time data', 'File storage', 'CSS styling'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c76-websocket.jpg',
  },

  {
    levelNumber: 77,
    id: 'coding-77',
    title: 'Testing Basics',
    subtitle: 'Write reliable tests',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 45,
    category: 'Testing',
    overview: 'Write unit tests to catch bugs before users do.',
    learningObjectives: [
      'Use Jest for testing',
      'Write test cases',
      'Use assertions',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Jest', imageUrl: '/materials/jest.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install Jest', instruction: 'npm install --save-dev jest', imageUrl: '/steps/c77-step1.jpg' },
      { stepNumber: 2, title: 'Write Test', instruction: 'test("adds 1 + 2", () => { expect(add(1,2)).toBe(3); });', imageUrl: '/steps/c77-step2.jpg' },
      { stepNumber: 3, title: 'Run Tests', instruction: 'npx jest and check results.', imageUrl: '/steps/c77-step3.jpg' },
    ],
    explanation: {
      simple: 'Tests check your code automatically so you know it works.',
      scientific: 'Unit tests verify individual functions in isolation, improving code reliability and maintainability.',
    },
    quiz: [
      { question: 'What does expect().toBe() check?', options: ['File existence', 'Exact value equality', 'CSS styles', 'Console output'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c77-testing.jpg',
  },

  {
    levelNumber: 78,
    id: 'coding-78',
    title: 'Environment Variables',
    subtitle: 'Secure configuration',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '30 minutes',
    xpReward: 35,
    category: 'DevOps',
    overview: 'Keep secrets and config out of your code using environment variables.',
    learningObjectives: [
      'Use .env files',
      'Access variables with process.env',
      'Keep secrets out of Git',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'dotenv package', imageUrl: '/materials/npm.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create .env', instruction: 'Add DB_URL=your_database_url to .env file.', imageUrl: '/steps/c78-step1.jpg' },
      { stepNumber: 2, title: 'Load Variables', instruction: 'require("dotenv").config();', imageUrl: '/steps/c78-step2.jpg' },
      { stepNumber: 3, title: 'Use Variables', instruction: 'const dbUrl = process.env.DB_URL;', imageUrl: '/steps/c78-step3.jpg' },
    ],
    explanation: {
      simple: 'Environment variables keep passwords outside your code files.',
      scientific: 'Environment variables separate configuration from code, following the twelve-factor app methodology.',
    },
    quiz: [
      { question: 'Where should you never store secrets?', options: ['In .env', 'In environment variables', 'Directly in code pushed to Git', 'In a vault'], correctIndex: 2 },
    ],
    outputImageUrl: '/outputs/c78-env.jpg',
  },

  {
    levelNumber: 79,
    id: 'coding-79',
    title: 'Deployment',
    subtitle: 'Put your app online',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 50,
    category: 'DevOps',
    overview: 'Deploy your application to a hosting platform.',
    learningObjectives: [
      'Understand hosting options',
      'Deploy to Vercel or Render',
      'Set environment variables in production',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Git', imageUrl: '/materials/git.jpg' },
      { name: 'Hosting Account', imageUrl: '/materials/hosting.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Push to Git', instruction: 'Commit and push your project to GitHub.', imageUrl: '/steps/c79-step1.jpg' },
      { stepNumber: 2, title: 'Connect Platform', instruction: 'Link your GitHub repo to Vercel or Render.', imageUrl: '/steps/c79-step2.jpg' },
      { stepNumber: 3, title: 'Deploy', instruction: 'Trigger a deployment and test the live URL.', imageUrl: '/steps/c79-step3.jpg' },
    ],
    explanation: {
      simple: 'Deployment makes your app available to everyone on the internet.',
      scientific: 'CI/CD pipelines automate build, test, and deployment steps from version control to production.',
    },
    quiz: [
      { question: 'What does deployment do?', options: ['Deletes code', 'Makes app live online', 'Resets the database', 'Installs packages'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c79-deploy.jpg',
  },

  {
    levelNumber: 80,
    id: 'coding-80',
    title: 'Mini Project: Full-Stack Blog',
    subtitle: 'Complete MERN application',
    difficulty: DIFFICULTY.ADVANCED,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '120 minutes',
    xpReward: 80,
    category: 'Mini Project',
    overview: 'Build a full-stack blog with React frontend and Express/MongoDB backend.',
    learningObjectives: [
      'Connect React to an API',
      'Store blog posts in MongoDB',
      'Deploy the full app',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React + Express', imageUrl: '/materials/fullstack.jpg' },
      { name: 'MongoDB Atlas', imageUrl: '/materials/mongodb.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Backend API', instruction: 'Create Express routes for GET/POST/DELETE posts.', imageUrl: '/steps/c80-step1.jpg' },
      { stepNumber: 2, title: 'React Frontend', instruction: 'Fetch posts and display in a list.', imageUrl: '/steps/c80-step2.jpg' },
      { stepNumber: 3, title: 'Create Post Form', instruction: 'Add a form to create new posts.', imageUrl: '/steps/c80-step3.jpg' },
    ],
    explanation: {
      simple: 'A full-stack blog connects everything: frontend, backend, and database.',
      scientific: 'MERN stack combines MongoDB, Express, React, and Node into a cohesive full-stack architecture.',
    },
    quiz: [
      { question: 'What does MERN stand for?', options: ['MongoDB Express React Node', 'MySQL Express React Next', 'Mongo Electron React Node', 'MongoDB Express Redux Node'], correctIndex: 0 },
    ],
    outputImageUrl: '/outputs/c80-blog.jpg',
  },

  // ──────────────────────────────────────────
  // SECTION E: Advanced Patterns (81–90)
  // ──────────────────────────────────────────

  {
    levelNumber: 81,
    id: 'coding-81',
    title: 'TypeScript Introduction',
    subtitle: 'Add types to JavaScript',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'TypeScript',
    overview: 'Learn how TypeScript adds safety to your JavaScript code.',
    learningObjectives: [
      'Understand type annotations',
      'Define interfaces',
      'Catch errors at compile time',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'TypeScript', imageUrl: '/materials/typescript.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install TypeScript', instruction: 'npm install -g typescript', imageUrl: '/steps/c81-step1.jpg' },
      { stepNumber: 2, title: 'Type Variables', instruction: 'let name: string = "Ravi";', imageUrl: '/steps/c81-step2.jpg' },
      { stepNumber: 3, title: 'Interface', instruction: 'interface User { name: string; age: number; }', imageUrl: '/steps/c81-step3.jpg' },
    ],
    explanation: {
      simple: 'TypeScript checks your code for type mistakes before it runs.',
      scientific: 'TypeScript adds a static type system to JavaScript, catching type errors at compile time.',
    },
    quiz: [
      { question: 'TypeScript adds what to JavaScript?', options: ['Colors', 'Static types', 'Animations', 'Database support'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c81-typescript.jpg',
  },

  {
    levelNumber: 82,
    id: 'coding-82',
    title: 'Next.js Basics',
    subtitle: 'React framework for production',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '55 minutes',
    xpReward: 55,
    category: 'Frameworks',
    overview: 'Use Next.js for server-side rendering and file-based routing.',
    learningObjectives: [
      'Create a Next.js project',
      'Use file-based routing',
      'Understand SSR vs CSR',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Node.js', imageUrl: '/materials/nodejs.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Next App', instruction: 'npx create-next-app@latest my-next-app', imageUrl: '/steps/c82-step1.jpg' },
      { stepNumber: 2, title: 'Add Pages', instruction: 'Create files in the pages directory.', imageUrl: '/steps/c82-step2.jpg' },
      { stepNumber: 3, title: 'API Routes', instruction: 'Add an API route in pages/api/.', imageUrl: '/steps/c82-step3.jpg' },
    ],
    explanation: {
      simple: 'Next.js makes React apps faster by rendering pages on the server.',
      scientific: 'Next.js supports SSR, SSG, and ISR for optimized page delivery and SEO.',
    },
    quiz: [
      { question: 'Next.js uses what type of routing?', options: ['Manual routing', 'File-based routing', 'Database routing', 'CSS routing'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c82-nextjs.jpg',
  },

  {
    levelNumber: 83,
    id: 'coding-83',
    title: 'GraphQL Introduction',
    subtitle: 'Query APIs flexibly',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'APIs',
    overview: 'Learn how GraphQL lets clients request exactly the data they need.',
    learningObjectives: [
      'Understand queries and mutations',
      'Set up a GraphQL server',
      'Write typed schemas',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Apollo Server', imageUrl: '/materials/apollo.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Define Schema', instruction: 'type Query { hello: String }', imageUrl: '/steps/c83-step1.jpg' },
      { stepNumber: 2, title: 'Resolvers', instruction: 'Create resolver for the hello query.', imageUrl: '/steps/c83-step2.jpg' },
      { stepNumber: 3, title: 'Test', instruction: 'Run the server and query from the playground.', imageUrl: '/steps/c83-step3.jpg' },
    ],
    explanation: {
      simple: 'GraphQL lets you ask for exactly what you need and nothing more.',
      scientific: 'GraphQL provides a type system for APIs where clients define the structure of the response.',
    },
    quiz: [
      { question: 'GraphQL uses what instead of endpoints?', options: ['Files', 'Queries', 'Tables', 'Modules'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c83-graphql.jpg',
  },

  {
    levelNumber: 84,
    id: 'coding-84',
    title: 'State Management with Redux',
    subtitle: 'Predictable state container',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '55 minutes',
    xpReward: 55,
    category: 'React',
    overview: 'Manage complex application state with Redux Toolkit.',
    learningObjectives: [
      'Understand store, actions, reducers',
      'Use Redux Toolkit slices',
      'Connect Redux to React',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install Redux', instruction: 'npm install @reduxjs/toolkit react-redux', imageUrl: '/steps/c84-step1.jpg' },
      { stepNumber: 2, title: 'Create Slice', instruction: 'Define state, reducers, and actions.', imageUrl: '/steps/c84-step2.jpg' },
      { stepNumber: 3, title: 'Connect', instruction: 'Use useSelector and useDispatch in components.', imageUrl: '/steps/c84-step3.jpg' },
    ],
    explanation: {
      simple: 'Redux keeps all app data in one central place so nothing gets lost.',
      scientific: 'Redux implements a unidirectional data flow pattern with a single immutable state tree.',
    },
    quiz: [
      { question: 'Redux stores state in:', options: ['Components', 'A single store', 'Local storage', 'CSS files'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c84-redux.jpg',
  },

  {
    levelNumber: 85,
    id: 'coding-85',
    title: 'Docker Basics',
    subtitle: 'Containerize your apps',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'DevOps',
    overview: 'Package your application into a portable container.',
    learningObjectives: [
      'Write a Dockerfile',
      'Build and run containers',
      'Understand images vs containers',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Docker Desktop', imageUrl: '/materials/docker.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Dockerfile', instruction: 'FROM node:18 WORKDIR /app COPY . . RUN npm install CMD ["node","index.js"]', imageUrl: '/steps/c85-step1.jpg' },
      { stepNumber: 2, title: 'Build Image', instruction: 'docker build -t my-app .', imageUrl: '/steps/c85-step2.jpg' },
      { stepNumber: 3, title: 'Run Container', instruction: 'docker run -p 3000:3000 my-app', imageUrl: '/steps/c85-step3.jpg' },
    ],
    explanation: {
      simple: 'Docker packages your app so it runs the same everywhere.',
      scientific: 'Containers use OS-level virtualization to isolate processes with consistent runtime environments.',
    },
    quiz: [
      { question: 'A Docker container is:', options: ['A virtual machine', 'An isolated runtime environment', 'A programming language', 'A database'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c85-docker.jpg',
  },

  {
    levelNumber: 86,
    id: 'coding-86',
    title: 'CI/CD Pipeline',
    subtitle: 'Automate deployments',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'DevOps',
    overview: 'Set up automatic testing and deployment on every push.',
    learningObjectives: [
      'Understand CI/CD concepts',
      'Use GitHub Actions',
      'Automate test and deploy steps',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'GitHub Account', imageUrl: '/materials/github.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Workflow', instruction: 'Add .github/workflows/ci.yml file.', imageUrl: '/steps/c86-step1.jpg' },
      { stepNumber: 2, title: 'Define Steps', instruction: 'Checkout, install, test, deploy.', imageUrl: '/steps/c86-step2.jpg' },
      { stepNumber: 3, title: 'Push and Watch', instruction: 'Push code and see the pipeline run.', imageUrl: '/steps/c86-step3.jpg' },
    ],
    explanation: {
      simple: 'CI/CD automatically tests and deploys your code when you push changes.',
      scientific: 'Continuous Integration and Delivery pipelines enforce quality gates and automate release workflows.',
    },
    quiz: [
      { question: 'CI/CD runs when you:', options: ['Open the editor', 'Push code to Git', 'Close the browser', 'Delete a file'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c86-cicd.jpg',
  },

  {
    levelNumber: 87,
    id: 'coding-87',
    title: 'Performance Optimization',
    subtitle: 'Make apps faster',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Optimization',
    overview: 'Learn techniques to make web applications load and run faster.',
    learningObjectives: [
      'Use React.memo and useMemo',
      'Lazy load components',
      'Optimize bundle size',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Memoize Components', instruction: 'Wrap expensive components in React.memo.', imageUrl: '/steps/c87-step1.jpg' },
      { stepNumber: 2, title: 'Lazy Loading', instruction: 'Use React.lazy() with Suspense.', imageUrl: '/steps/c87-step2.jpg' },
      { stepNumber: 3, title: 'Analyze Bundle', instruction: 'Use webpack-bundle-analyzer to find large modules.', imageUrl: '/steps/c87-step3.jpg' },
    ],
    explanation: {
      simple: 'Optimized apps load fast and respond quickly to users.',
      scientific: 'Memoization caches computation results, and code splitting reduces initial bundle payload.',
    },
    quiz: [
      { question: 'React.memo prevents:', options: ['Compilation', 'Unnecessary re-renders', 'API calls', 'Styling changes'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c87-perf.jpg',
  },

  {
    levelNumber: 88,
    id: 'coding-88',
    title: 'Accessibility (a11y)',
    subtitle: 'Build for everyone',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '40 minutes',
    xpReward: 45,
    category: 'Best Practices',
    overview: 'Make your web apps usable by people with disabilities.',
    learningObjectives: [
      'Use semantic HTML',
      'Add ARIA labels',
      'Test with screen readers',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Semantic Tags', instruction: 'Use <main>, <nav>, <article> instead of only <div>.', imageUrl: '/steps/c88-step1.jpg' },
      { stepNumber: 2, title: 'ARIA Labels', instruction: 'Add aria-label to interactive elements.', imageUrl: '/steps/c88-step2.jpg' },
      { stepNumber: 3, title: 'Keyboard Nav', instruction: 'Ensure all actions work with Tab and Enter keys.', imageUrl: '/steps/c88-step3.jpg' },
    ],
    explanation: {
      simple: 'Accessible apps work for people who use keyboards, screen readers, or other tools.',
      scientific: 'WCAG guidelines define accessibility standards that ensure equitable web experiences.',
    },
    quiz: [
      { question: 'ARIA stands for:', options: ['Accessible Rich Internet Applications', 'Advanced React Interface API', 'Auto Rendered Input Area', 'Accessible Runtime Integration API'], correctIndex: 0 },
    ],
    outputImageUrl: '/outputs/c88-a11y.jpg',
  },

  {
    levelNumber: 89,
    id: 'coding-89',
    title: 'Design Patterns',
    subtitle: 'Proven code solutions',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Architecture',
    overview: 'Learn reusable design patterns that solve common problems.',
    learningObjectives: [
      'Understand Singleton and Factory patterns',
      'Use the Observer pattern',
      'Apply patterns in real code',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'JavaScript Runtime', imageUrl: '/materials/nodejs.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Singleton', instruction: 'Create a class that allows only one instance.', imageUrl: '/steps/c89-step1.jpg' },
      { stepNumber: 2, title: 'Factory', instruction: 'Build a function that creates different object types.', imageUrl: '/steps/c89-step2.jpg' },
      { stepNumber: 3, title: 'Observer', instruction: 'Implement subscribe and notify methods.', imageUrl: '/steps/c89-step3.jpg' },
    ],
    explanation: {
      simple: 'Design patterns are proven recipes for solving common coding problems.',
      scientific: 'Design patterns provide reusable solutions to recurring software design challenges.',
    },
    quiz: [
      { question: 'Singleton ensures:', options: ['Many instances', 'Only one instance', 'No instances', 'Random instances'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c89-patterns.jpg',
  },

  {
    levelNumber: 90,
    id: 'coding-90',
    title: 'Mini Project: E-Commerce API',
    subtitle: 'Full backend system',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '120 minutes',
    xpReward: 80,
    category: 'Mini Project',
    overview: 'Build a complete e-commerce backend with products, cart, and orders.',
    learningObjectives: [
      'Design REST endpoints for a store',
      'Implement cart logic',
      'Handle order processing',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Express + MongoDB', imageUrl: '/materials/fullstack.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Product Routes', instruction: 'CRUD for products with categories.', imageUrl: '/steps/c90-step1.jpg' },
      { stepNumber: 2, title: 'Cart Logic', instruction: 'Add, remove, update quantities.', imageUrl: '/steps/c90-step2.jpg' },
      { stepNumber: 3, title: 'Order Flow', instruction: 'Convert cart to an order with total.', imageUrl: '/steps/c90-step3.jpg' },
    ],
    explanation: {
      simple: 'An e-commerce API powers online stores behind the scenes.',
      scientific: 'This project exercises data modeling, business logic, and transactional consistency.',
    },
    quiz: [
      { question: 'What converts a cart to a purchase?', options: ['A query', 'An order', 'A style', 'A route'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c90-ecommerce.jpg',
  },

  // ──────────────────────────────────────────
  // SECTION F: Capstone (Levels 91–100)
  // ──────────────────────────────────────────

  {
    levelNumber: 91,
    id: 'coding-91',
    title: 'System Design Thinking',
    subtitle: 'Plan before you build',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Architecture',
    overview: 'Learn to plan software systems before writing code.',
    learningObjectives: [
      'Break systems into components',
      'Identify data flow',
      'Plan APIs and database schemas',
    ],
    materials: [
      { name: 'Whiteboard or Paper', imageUrl: '/materials/whiteboard.jpg' },
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Define Requirements', instruction: 'List what the system must do.', imageUrl: '/steps/c91-step1.jpg' },
      { stepNumber: 2, title: 'Draw Architecture', instruction: 'Sketch frontend, backend, and database boxes.', imageUrl: '/steps/c91-step2.jpg' },
      { stepNumber: 3, title: 'Plan APIs', instruction: 'Define endpoints and data models.', imageUrl: '/steps/c91-step3.jpg' },
    ],
    explanation: {
      simple: 'Good systems start with a plan, not code.',
      scientific: 'System design decomposes complex applications into manageable components with defined interfaces.',
    },
    quiz: [
      { question: 'What comes before coding?', options: ['Deployment', 'Testing', 'Planning and design', 'Styling'], correctIndex: 2 },
    ],
    outputImageUrl: '/outputs/c91-design.jpg',
  },

  {
    levelNumber: 92,
    id: 'coding-92',
    title: 'Git Advanced Workflows',
    subtitle: 'Collaborate like a pro',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Version Control',
    overview: 'Master branching, merging, and pull request workflows.',
    learningObjectives: [
      'Create and merge branches',
      'Resolve merge conflicts',
      'Use pull requests for code review',
    ],
    materials: [
      { name: 'Terminal', imageUrl: '/materials/terminal.jpg' },
      { name: 'GitHub Account', imageUrl: '/materials/github.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Create Branch', instruction: 'git checkout -b feature/new-ui', imageUrl: '/steps/c92-step1.jpg' },
      { stepNumber: 2, title: 'Make Changes', instruction: 'Edit files, commit with clear messages.', imageUrl: '/steps/c92-step2.jpg' },
      { stepNumber: 3, title: 'Pull Request', instruction: 'Open a PR and request review.', imageUrl: '/steps/c92-step3.jpg' },
    ],
    explanation: {
      simple: 'Branches let teams work on features without breaking the main code.',
      scientific: 'Git manages parallel development through DAG-based version tracking and three-way merge algorithms.',
    },
    quiz: [
      { question: 'A pull request is for:', options: ['Deleting code', 'Reviewing and merging changes', 'Installing packages', 'Starting a server'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c92-git.jpg',
  },

  {
    levelNumber: 93,
    id: 'coding-93',
    title: 'Responsive Design',
    subtitle: 'Mobile-first approach',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Frontend',
    overview: 'Make your web apps look great on all screen sizes.',
    learningObjectives: [
      'Use media queries',
      'Implement mobile-first design',
      'Test across viewports',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Mobile First CSS', instruction: 'Write base styles for small screens.', imageUrl: '/steps/c93-step1.jpg' },
      { stepNumber: 2, title: 'Media Queries', instruction: '@media (min-width: 768px) { ... }', imageUrl: '/steps/c93-step2.jpg' },
      { stepNumber: 3, title: 'Test Viewports', instruction: 'Use browser dev tools to test different sizes.', imageUrl: '/steps/c93-step3.jpg' },
    ],
    explanation: {
      simple: 'Responsive design makes pages adapt to any screen size.',
      scientific: 'Media queries apply conditional CSS rules based on viewport dimensions for adaptive layouts.',
    },
    quiz: [
      { question: 'Mobile-first means:', options: ['Design desktop first', 'Design for small screens first', 'Only support mobile', 'Ignore tablets'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c93-responsive.jpg',
  },

  {
    levelNumber: 94,
    id: 'coding-94',
    title: 'Data Visualization',
    subtitle: 'Charts and graphs',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Frontend',
    overview: 'Display data visually using chart libraries.',
    learningObjectives: [
      'Use Chart.js or Recharts',
      'Create bar and line charts',
      'Bind data to visual elements',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'React Project', imageUrl: '/materials/react-app.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Install Library', instruction: 'npm install recharts', imageUrl: '/steps/c94-step1.jpg' },
      { stepNumber: 2, title: 'Create Chart', instruction: 'Use BarChart with sample data.', imageUrl: '/steps/c94-step2.jpg' },
      { stepNumber: 3, title: 'Dynamic Data', instruction: 'Fetch data and pass to chart.', imageUrl: '/steps/c94-step3.jpg' },
    ],
    explanation: {
      simple: 'Charts turn numbers into pictures that are easier to understand.',
      scientific: 'Data visualization maps data dimensions to visual properties like position, size, and color.',
    },
    quiz: [
      { question: 'Which library creates charts in React?', options: ['Express', 'Recharts', 'Mongoose', 'Jest'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c94-charts.jpg',
  },

  {
    levelNumber: 95,
    id: 'coding-95',
    title: 'PWA Basics',
    subtitle: 'Progressive Web Apps',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Web Development',
    overview: 'Make your web app installable and work offline.',
    learningObjectives: [
      'Add a service worker',
      'Create a manifest file',
      'Cache assets for offline use',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Web Browser', imageUrl: '/materials/browser.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Manifest', instruction: 'Create manifest.json with app name and icons.', imageUrl: '/steps/c95-step1.jpg' },
      { stepNumber: 2, title: 'Service Worker', instruction: 'Register a service worker to cache files.', imageUrl: '/steps/c95-step2.jpg' },
      { stepNumber: 3, title: 'Test Offline', instruction: 'Disconnect internet and verify the app loads.', imageUrl: '/steps/c95-step3.jpg' },
    ],
    explanation: {
      simple: 'PWAs are websites that behave like installed apps.',
      scientific: 'Service workers intercept network requests and serve cached responses for offline capability.',
    },
    quiz: [
      { question: 'Service workers enable:', options: ['Database queries', 'Offline caching', 'CSS styling', 'TypeScript'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c95-pwa.jpg',
  },

  {
    levelNumber: 96,
    id: 'coding-96',
    title: 'Security Best Practices',
    subtitle: 'Protect your apps',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '45 minutes',
    xpReward: 50,
    category: 'Security',
    overview: 'Learn common web vulnerabilities and how to prevent them.',
    learningObjectives: [
      'Understand XSS and CSRF',
      'Sanitize user inputs',
      'Use HTTPS and security headers',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Express Project', imageUrl: '/materials/express.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Input Sanitization', instruction: 'Escape all user inputs before rendering.', imageUrl: '/steps/c96-step1.jpg' },
      { stepNumber: 2, title: 'Helmet Middleware', instruction: 'npm install helmet and use in Express.', imageUrl: '/steps/c96-step2.jpg' },
      { stepNumber: 3, title: 'Rate Limiting', instruction: 'Add rate limiter to prevent abuse.', imageUrl: '/steps/c96-step3.jpg' },
    ],
    explanation: {
      simple: 'Security keeps your app and users safe from attackers.',
      scientific: 'Defense in depth applies multiple security layers including input validation, headers, and rate limiting.',
    },
    quiz: [
      { question: 'XSS stands for:', options: ['Extra Simple Styling', 'Cross-Site Scripting', 'XML Style Sheets', 'Cross-Server Sync'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c96-security.jpg',
  },

  {
    levelNumber: 97,
    id: 'coding-97',
    title: 'Microservices Concept',
    subtitle: 'Modular architecture',
    difficulty: DIFFICULTY.EXPERT,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '50 minutes',
    xpReward: 55,
    category: 'Architecture',
    overview: 'Understand how to break applications into independent services.',
    learningObjectives: [
      'Compare monolith vs microservices',
      'Define service boundaries',
      'Communicate between services',
    ],
    materials: [
      { name: 'Whiteboard', imageUrl: '/materials/whiteboard.jpg' },
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Identify Services', instruction: 'Split an e-commerce app into user, product, and order services.', imageUrl: '/steps/c97-step1.jpg' },
      { stepNumber: 2, title: 'API Contracts', instruction: 'Define how services communicate via REST or messages.', imageUrl: '/steps/c97-step2.jpg' },
      { stepNumber: 3, title: 'Independent Deploy', instruction: 'Deploy each service separately.', imageUrl: '/steps/c97-step3.jpg' },
    ],
    explanation: {
      simple: 'Microservices split big apps into small, independent pieces.',
      scientific: 'Microservices architecture decomposes monoliths into loosely coupled services with bounded contexts.',
    },
    quiz: [
      { question: 'Microservices are:', options: ['One big application', 'Small independent services', 'CSS frameworks', 'Database types'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c97-microservices.jpg',
  },

  {
    levelNumber: 98,
    id: 'coding-98',
    title: 'Capstone Planning',
    subtitle: 'Design your final project',
    difficulty: DIFFICULTY.CAPSTONE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '60 minutes',
    xpReward: 60,
    category: 'Capstone',
    overview: 'Plan your capstone project with architecture and requirements.',
    learningObjectives: [
      'Define the problem and users',
      'Design system architecture',
      'Create a development timeline',
    ],
    materials: [
      { name: 'Notebook', imageUrl: '/materials/notebook.jpg' },
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Problem Statement', instruction: 'Write what problem your project solves.', imageUrl: '/steps/c98-step1.jpg' },
      { stepNumber: 2, title: 'Architecture Diagram', instruction: 'Draw frontend, backend, and database components.', imageUrl: '/steps/c98-step2.jpg' },
      { stepNumber: 3, title: 'Timeline', instruction: 'Break work into weekly milestones.', imageUrl: '/steps/c98-step3.jpg' },
    ],
    explanation: {
      simple: 'Every great project starts with a clear plan.',
      scientific: 'Structured planning reduces risk and improves delivery outcomes in software projects.',
    },
    quiz: [
      { question: 'What should a capstone plan include?', options: ['Only code', 'Problem, architecture, timeline', 'Only CSS', 'Only testing'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c98-plan.jpg',
  },

  {
    levelNumber: 99,
    id: 'coding-99',
    title: 'Capstone Build',
    subtitle: 'Build your original project',
    difficulty: DIFFICULTY.CAPSTONE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '180 minutes',
    xpReward: 90,
    category: 'Capstone',
    overview: 'Build the MVP of your capstone project from scratch.',
    learningObjectives: [
      'Implement frontend and backend',
      'Integrate database and authentication',
      'Test all features',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Full-Stack Setup', imageUrl: '/materials/fullstack.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Backend First', instruction: 'Build API endpoints and connect database.', imageUrl: '/steps/c99-step1.jpg' },
      { stepNumber: 2, title: 'Frontend', instruction: 'Build React pages that consume your API.', imageUrl: '/steps/c99-step2.jpg' },
      { stepNumber: 3, title: 'Integration Test', instruction: 'Test full flow from UI to database.', imageUrl: '/steps/c99-step3.jpg' },
    ],
    explanation: {
      simple: 'Building the MVP proves your idea works.',
      scientific: 'MVP development validates core hypotheses with minimal effort before scaling complexity.',
    },
    quiz: [
      { question: 'MVP stands for:', options: ['Most Valuable Player', 'Minimum Viable Product', 'Maximum Version Plan', 'Minimum Version Protocol'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c99-build.jpg',
  },

  {
    levelNumber: 100,
    id: 'coding-100',
    title: 'Capstone Presentation & Launch',
    subtitle: 'Ship your project to the world',
    difficulty: DIFFICULTY.CAPSTONE,
    safetyLevel: SAFETY_LEVEL.SAFE,
    estimatedTime: '120 minutes',
    xpReward: 100,
    category: 'Capstone',
    overview: 'Deploy, document, and present your capstone project.',
    learningObjectives: [
      'Deploy to production',
      'Write documentation and README',
      'Present and demo your project',
    ],
    materials: [
      { name: 'Code Editor', imageUrl: '/materials/vscode.jpg' },
      { name: 'Hosting Platform', imageUrl: '/materials/hosting.jpg' },
      { name: 'Presentation Tool', imageUrl: '/materials/slides.jpg' },
    ],
    steps: [
      { stepNumber: 1, title: 'Deploy', instruction: 'Push final code and deploy to production.', imageUrl: '/steps/c100-step1.jpg' },
      { stepNumber: 2, title: 'Documentation', instruction: 'Write a clear README with setup instructions.', imageUrl: '/steps/c100-step2.jpg' },
      { stepNumber: 3, title: 'Present', instruction: 'Demo your app and explain your design decisions.', imageUrl: '/steps/c100-step3.jpg' },
    ],
    explanation: {
      simple: 'Launching is the most exciting part. Your code is now live for the world to see!',
      scientific: 'Production deployment and documentation complete the software development lifecycle.',
    },
    quiz: [
      { question: 'A README should include:', options: ['Only the logo', 'Setup instructions and description', 'Only the license', 'Nothing'], correctIndex: 1 },
    ],
    outputImageUrl: '/outputs/c100-launch.jpg',
    completionMessage: 'Congratulations! You have completed the entire SCINO Coding Program! You are now a Full-Stack Developer ready for the real world!',
  },
];

export default codingLevels51to100;
