import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { Page } from "../interfaces/RouteTypes";

export const TerminalContainer = (): React.JSX.Element => {
  let terminalCmd = "";
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const lineBreak = /(\r\n|\r|\n)/;
  const XTERM_INTRO = "\x1B[1;3;31mxterm\x1B[0m $ ";
  const XTERM_HELP =
    "Enter a page to navigate to: home, career, projects or contact";

  const onDataHandler = (e: string, term: Terminal) => {
    if (lineBreak.test(e)) {
      console.log("linebreak. Command: " + terminalCmd);
      navigateToPage(term);
    } else {
      term.write(e);
      terminalCmd = terminalCmd.concat(e);
    }
  };
  const navigateToPage = (term: Terminal) => {
    switch (terminalCmd) {
      case "home":
        navigate(Page.HOME);
        break;
      case "career":
        navigate(Page.CAREER);
        break;
      case "contact":
        navigate(Page.CONTACT);
        break;
      case "projects":
        navigate(Page.CAREER.concat("/").concat(Page.PROJECTS));
        break;
      default:
        console.log("Incorrect command");
        term.writeln("\n\x1B[1;3;31mIncorrect command\x1B[0m");
    }
    terminalCmd = "";
    resetTerm(term);
  };
  const resetTerm = (term: Terminal) => {
    term.reset();
    term.writeln(XTERM_INTRO);
    printHelp(term);
  };
  const printHelp = (term: Terminal) => {
    term.writeln(XTERM_HELP);
  };

  useEffect(() => {
    if (terminalRef.current) {
      const term = new Terminal({
        cursorBlink: true,
      });
      const fitAddon = new FitAddon();
      term.open(terminalRef.current);
      fitAddon.fit();
      term.writeln(XTERM_INTRO);
      printHelp(term);
      term.onData((e) => onDataHandler(e, term));
      return () => {
        term.dispose();
      };
    }
  }, []);
  return (
    <Box
      ref={terminalRef}
      style={{ height: "100%", width: "100%" }}
      overflowY="scroll"
    ></Box>
  );
};
