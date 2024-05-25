
import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';


export const TerminalContainer = (): React.JSX.Element => {
    const terminalRef = useRef <HTMLDivElement>(null);
  
    useEffect(() => {
      if (terminalRef.current) {
        const term = new Terminal();
        const fitAddon = new FitAddon();
        term.open(terminalRef.current);
        fitAddon.fit();
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
        return () => {
          term.dispose();
        };
      }
    }, []);
    return (
      <Box ref={terminalRef} style={{ height: '100%', width: '100%' }}  overflowY='scroll'></Box>
)}
  