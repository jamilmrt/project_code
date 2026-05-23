import React, { useEffect } from 'react';
import './App.css';
import * as monaco from 'monaco-editor';
import FileNavigation from './component/FileNavigation'; // Adjust the path as needed
import Terminal from './component/Terminal'; // Adjust the path as needed
import Settings from './component/Settings'; // Adjust the path as needed



const directoryStructure = [
  {
    name: 'src',
    type: 'folder',
    children: [
      { name: 'components', type: 'folder', children: [ FileList] },
      { name: 'index.js', type: 'file' },
      // ... other items
    ],
  },
  // ... other top-level items
];

// Handle theme change
const handleThemeChange = (selectedTheme) => {
  setTheme(selectedTheme);
  // Save the theme preference to localStorage
  localStorage.setItem('theme', selectedTheme);
  // Apply theme changes in your IDE's UI
};

// Handle keybindings change
const handleKeybindingsChange = (selectedKeybindings) => {
  setKeybindings(selectedKeybindings);
  // Save the keybindings preference to localStorage
  localStorage.setItem('keybindings', selectedKeybindings);
  // Apply keybindings changes in your IDE's UI
};

// When your app initializes
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
  // Apply saved theme settings
}

const savedKeybindings = localStorage.getItem('keybindings');
if (savedKeybindings) {
  setKeybindings(savedKeybindings);
  // Apply saved keybindings settings
}




function App() {
  useEffect(() => {
    // Load the Monaco Editor
    const editor = monaco.editor.create(document.getElementById('editor-container'), {
      value: 'console.log("Hello, world!");',
      language: 'javascript',
    });

    // Handle editor changes, if needed
    editor.onDidChangeModelContent(() => {
      const code = editor.getValue();
      // Handle the updated code here
    });

    // Clean up the editor when component unmounts
    return () => editor.dispose();
  }, []);



  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>VS Code Clone</h1>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <div className="sidebar">
          {/* File Navigation */}
          <div className="file-navigation">
            <FileNavigation />
            {/* Display project's directory structure */}
          </div>
        </div>

        {/* Code Editor and Terminal */}
        <div className="code-editor-terminal">
          {/* Code Editor */}
          <div className="code-editor" id="editor-container">
            {/* Integrate your chosen code editor library */}
          </div>

          {/* Terminal */}
          <div className="terminal">
            <Terminal />
            {/* Integrate terminal component */}
          </div>
        
        {/*Setting */}
      <div className="settings">
        <Settings />
      </div>
    

        </div>
      </div>
    </div>
  );
}

export default App;
