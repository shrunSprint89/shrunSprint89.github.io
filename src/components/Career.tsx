import { Box, Flex } from "@chakra-ui/react";
//import { QuickSummaryBar } from "./QuickSummaryBar";
//import { CareerNav } from "../navigation/CareerNav";
import { Outlet } from "react-router-dom";
import { ContentList } from "./ContentList";

export const Career = (): React.JSX.Element => {
  return (
    <Flex direction={"row"} p={0} height="100%" fontFamily={"mono"}>
      {/* 
      //TODO - Add a c word cloud here
      */}
      <Box
        p={5}
        pr={7}
        flex={3}
        height="100%"
        width="100%"
        overflowY={"auto"}
        overflowX={"hidden"}
      >
        <ContentList>
          <Outlet></Outlet>
        </ContentList>
      </Box>
    </Flex>
  );
};
