import React, { useRef, useEffect } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css'; // Import xterm.css for styling

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new XTerm();
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    if (terminalRef.current) {
      term.open(terminalRef.current);
      fitAddon.fit();

      // Handle terminal input/output here if needed
      term.onData((data) => {
        // Handle user input and execute commands
        // For example, you can send the input to a command execution function
      });
    }

    return () => {
      term.dispose();
    };
  }, []);

  return <div ref={terminalRef} className="terminal"></div>;
};

export default Terminal;
