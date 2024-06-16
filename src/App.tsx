import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BottomContainer } from "./components/BottomContainer";
import { Header } from "./components/Header";
import { theme } from "./themes/VsCode.theme";
import { TopMenu } from "./components/TopMenu";
import { TitleBar } from "./components/TitleBar";
import { LabelContext } from "./contexts/LabelContext";
import { LabelUtil } from "./utils/LabelUtil";
import { FlexContainer } from "./components/FlexContainer";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Career } from "./components/Career";
import { DetailedContent } from "./components/DetailedContent";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Page } from "./interfaces/RouteTypes";

export const App = (): React.JSX.Element => (
  <ChakraProvider theme={theme}>
    <LabelContext.Provider value={new LabelUtil()}>
      <BrowserRouter>
        <Routes>
          <Route
            path={Page.HOME}
            element={
              <FlexContainer
                header={<Header menu={<TopMenu />} title={<TitleBar />} />}
                footer={<BottomContainer />}
              />
            }
          >
            <Route index element={<AboutMe />} />
            <Route path={Page.HOME.concat(Page.CAREER)} element={<Career />}>
              <Route
                index
                element={
                  <DetailedContent
                    titleLabel="professionalExperience.title"
                    detailsLabel="professionalExperience.details"
                  />
                }
              />
              <Route
                path={Page.PROJECTS}
                element={
                  <DetailedContent
                    titleLabel="projects.title"
                    detailsLabel="projects.details"
                  />
                }
              />
            </Route>
            <Route path={Page.CONTACT} element={<ContactMe />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LabelContext.Provider>
  </ChakraProvider>
);
