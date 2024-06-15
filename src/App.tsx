import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { GridContainer } from "./components/GridContainer";
import { BottomContainer } from "./components/BottomContainer";
import { Header } from "./components/Header";
import { QuickSummaryBar } from "./components/QuickSummaryBar";
import { ContentContainer } from "./components/ContentContainer";
import { theme } from "./themes/VsCode.theme";
import { TopMenu } from "./components/TopMenu";
import { TitleBar } from "./components/TitleBar";
import { LabelContext } from "./contexts/LabelContext";
import { LabelUtil } from "./utils/LabelUtil";

export const App = (): React.JSX.Element => (
  <ChakraProvider theme={theme}>
    <LabelContext.Provider value={new LabelUtil()}>
      <GridContainer
        footer={<BottomContainer />}
        header={<Header menu={<TopMenu />} title={<TitleBar />} />}
        nav={<QuickSummaryBar />}
        main={<ContentContainer />}
      />
    </LabelContext.Provider>
  </ChakraProvider>
);
