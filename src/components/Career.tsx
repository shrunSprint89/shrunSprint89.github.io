import { Box, Flex } from "@chakra-ui/react";
import { QuickSummaryBar } from "./QuickSummaryBar";
import { CareerNav } from "../navigation/CareerNav";
import { Outlet } from "react-router-dom";
import { ContentList } from "./ContentList";

export const Career = (): React.JSX.Element => {
  return (
    <Flex direction={"row"} p={0} height="100%">
      <Box flexWrap={"nowrap"} flex={1} height="100%" width="100%">
        <QuickSummaryBar nav={<CareerNav />} />
      </Box>
      <Box flex={3} height="100%" width="100%" overflow={"auto"}>
        <ContentList>
          <Outlet></Outlet>
        </ContentList>
      </Box>
    </Flex>
  );
};
