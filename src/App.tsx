import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GridContainer } from "./components/GridContainer";
import { BottomContainer } from "./components/BottomContainer";
import { Header } from "./components/Header";
import { QuickSummaryBar } from "./components/QuickSummaryBar";
import { ContentContainer } from "./components/ContentContainer";
import { theme } from "./themes/VsCode.theme";

export const App = (): React.JSX.Element => (
  <ChakraProvider theme={theme}>
      <GridContainer
        footer={<BottomContainer />}
        header={<Header />}
        nav={<QuickSummaryBar />}
        main={<ContentContainer />}
      />
  </ChakraProvider>
);
