import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { Page } from "../interfaces/RouteTypes";
import { AICompletions } from "../utils/OpenAIClient";
import "../css/Terminal.css";
import { FunctionName } from "../interfaces/ContentTypes";
import { getAsciiQuote } from "../utils/TextUtil";

export const TerminalContainer = (): React.JSX.Element => {
  let terminalCmd = "";
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const lineBreak = /(\r\n|\r|\n)/;
  const XTERM_INTRO = "\x1B[1;3;31mguest@shrunsprint.github.io>\x1B[0m ";
  const XTERM_HELP = "Interactive Terminal\r\n" + "-".repeat(20) + "\r\n";
  const completions = new AICompletions();

  const onDataHandler = (e: string, term: Terminal) => {
    if (lineBreak.test(e)) {
      interpretCmd(terminalCmd, term);
    } else {
      term.write(e);
      terminalCmd = terminalCmd.concat(e);
    }
  };

  const interpretCmd = (cmd: string, term: Terminal) => {
    switch (cmd) {
      case "clear":
      case "reset":
        resetTerm(term);
        break;
      default:
        getFunctionCallFromAI(cmd, term);
        resetTerm(term);
    }
  };

  const getFunctionCallFromAI = (input: string, term: Terminal) => {
    completions.getFunctionCallFromServer(input).then((result) => {
      if (result.functionResponse) {
        switch (result.functionResponse.name) {
          case FunctionName.NAVIGATE:
            const { path } = JSON.parse(result.functionResponse.arguments);
            navigateTo(path, term);
            break;
          case FunctionName.GETASCIIQUOTE:
            printQuote(term);
            break;
          default:
            navigateTo("home", term);
        }
      } else if (result.textResponse) {
        term.writeln(result.textResponse);
      }
    });
  };

  const navigateTo = (path: string, term: Terminal) => {
    switch (path) {
      case "HOME":
        navigate(Page.HOME);
        break;
      case "ABOUT":
        navigate(Page.ABOUT);
        break;
      case "CAREER":
        navigate(Page.CAREER);
        break;
      case "CONTACT":
        navigate(Page.CONTACT);
        break;
      case "PROJECTS":
        navigate(Page.CAREER.concat("/").concat(Page.PROJECTS));
        break;
      default:
        resetTerm(term);
        term.writeln("\n\x1B[1;3;31mIncorrect command\x1B[0m");
    }
  };

  const resetTerm = (term: Terminal) => {
    terminalCmd = "";
    term.reset();
    term.writeln(XTERM_HELP);
    term.write(XTERM_INTRO);
  };
  const printQuote = (term: Terminal) => {
    const quote = getAsciiQuote();
    resetTerm(term);
    term.writeln(`\n${quote}`);
  };

  useEffect(() => {
    if (terminalRef.current) {
      const term = new Terminal({
        cursorBlink: true,
      });
      const fitAddon = new FitAddon();
      term.open(terminalRef.current);
      fitAddon.fit();
      resetTerm(term);
      term.focus();
      term.onData((e) => onDataHandler(e, term));
      return () => {
        term.dispose();
      };
    }
  });

  return (
    <Box ref={terminalRef} style={{ height: "100%", width: "100%" }}></Box>
  );
};
