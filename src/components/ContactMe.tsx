import { Box, Flex, OrderedList } from "@chakra-ui/react";
import { QuickSummaryBar } from "./QuickSummaryBar";
import { DetailedContent } from "./DetailedContent";

export const ContactMe = (): React.JSX.Element => {
  return (
    <Flex direction={"row"} p={0} height="100%">
      <Box flexWrap={"nowrap"} flex={1} height="100%" width="100%">
        <QuickSummaryBar showProfileImage={true} />
      </Box>
      <Box flex={3} height="100%" width="100%" overflow={"auto"}>
        <OrderedList
          styleType="decimal"
          color="gray.200"
          height={"fit-content"}
          width={"100%"}
        >
          <DetailedContent
            titleLabel="contactMe.title"
            detailsLabel="contactMe.details"
          />
        </OrderedList>
      </Box>
    </Flex>
  );
};
