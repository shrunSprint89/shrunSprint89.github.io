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
  const XTERM_INTRO = "\x1B[1;3;31mxterm>\x1B[0m ";
  const XTERM_HELP = "Function calling chat powered by OpenAI";
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
        switch (result.functionResponse.name) {
          case FunctionName.NAVIGATE:
            const { path } = JSON.parse(result.functionResponse.arguments);
            navigateTo(path);
            break;
          case FunctionName.GETASCIIQUOTE:
            printQuote();
            break;
          default:
            navigateTo("home");
        }
      } else if (result.textResponse) {
        term.writeln(result.textResponse);
      }
    });
  };

  const onDataHandler = (e: string) => {
    if (lineBreak.test(e)) {
      interpretCmd(terminalCmd);
    } else {
      term.write(e);
      terminalCmd = terminalCmd.concat(e);
    }
  };

  const navigateTo = (path: string) => {
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
        resetTerm();
        term.writeln("\n\x1B[1;3;31mIncorrect command\x1B[0m");
    }
  };

  const resetTerm = () => {
    terminalCmd = "";
    term.reset();
    term.writeln(XTERM_HELP);
    term.write(XTERM_INTRO);
  };
  const printQuote = () => {
    const quote = getAsciiQuote();
    resetTerm();
    term.writeln(`\n${quote}`);
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
      term.focus();
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
