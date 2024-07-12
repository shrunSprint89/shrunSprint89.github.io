import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { Page } from "../interfaces/RouteTypes";
import { AICompletions } from "../utils/OpenAIClient";
import "../css/Terminal.css";

export const TerminalContainer = (): React.JSX.Element => {
  let terminalCmd = "";
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const lineBreak = /(\r\n|\r|\n)/;
  const XTERM_INTRO = "\x1B[1;3;31m$\x1B[0m ";
  const XTERM_HELP =
    "Use the AI bot for talk to the web application (powered by OpenAI APIs)";
  const completions = new AICompletions();
  let term: Terminal;

  const interpretCmd = (cmd: string) => {
    switch (cmd) {
      case "clear":
      case "reset":
        resetTerm();
        break;
      default:
        getFunctionCallFromAI(cmd);
        resetTerm();
    }
  };
  const getFunctionCallFromAI = (input: string) => {
    completions.getFunctionCallFromServer(input).then((result) => {
      if (result.functionResponse) {
        const { path } = JSON.parse(result.functionResponse.arguments);
        navigateToPage(path);
      } else if (result.textResponse) {
        term.writeln(result.textResponse);
      }
    });
  };
  const onDataHandler = (e: string) => {
    if (lineBreak.test(e)) {
      console.log("linebreak. Command: " + terminalCmd);
      interpretCmd(terminalCmd);
    } else {
      term.write(e);
      terminalCmd = terminalCmd.concat(e);
    }
  };
  const navigateToPage = (path: string) => {
    switch (path) {
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
  };
  const resetTerm = () => {
    terminalCmd = "";
    term.reset();
    term.writeln(XTERM_HELP);
    term.write(XTERM_INTRO);
  };

  useEffect(() => {
    if (terminalRef.current) {
      term = new Terminal({
        cursorBlink: true,
      });
      const fitAddon = new FitAddon();
      term.open(terminalRef.current);
      fitAddon.fit();
      resetTerm();
      term.onData((e) => onDataHandler(e));
      return () => {
        term.dispose();
      };
    }
  });
  return (
    <Box
      ref={terminalRef}
      style={{ height: "100%", width: "100%" }}
      overflowY="scroll"
    ></Box>
  );
};
