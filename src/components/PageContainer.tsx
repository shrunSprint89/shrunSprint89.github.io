import { Box, Flex } from "@chakra-ui/react";
import { BottomContainer } from "./BottomContainer";
import { QuickSummaryBar } from "./QuickSummaryBar";
import { Header } from "./Header";

export const PageLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    return (
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Flex flex="1" pt={8}>
          <QuickSummaryBar />
          <Box flex="1" p={4}>
            {children}
          </Box>
        </Flex>
        <BottomContainer />
      </Flex>
    );
  };