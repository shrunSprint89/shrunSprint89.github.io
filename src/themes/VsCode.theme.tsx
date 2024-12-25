import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/poppins";

export const theme = extendTheme({
  colors: {
    blue: {
      100: "#9CDCFE",
      200: "#569CD6",
    },
    gray: {
      100: "#C4CBDA",
      200: "#494e5c",
      300: "#24272E",
      400: "#1F2228",
    },
    white: {
      900: "#FFFFFF",
      500: "#F0F0F0",
      100: "#D9D9D9",
    },
    pink: {
      100: "#C586C0",
    },
    green: {
      100: "#4EC9B0",
    },
    orange: {
      100: "#CE9178",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    mono: "'JetBrains Mono Variable', monospace",
  },
});
