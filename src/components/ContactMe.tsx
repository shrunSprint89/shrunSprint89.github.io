import { Box, Flex } from "@chakra-ui/react";
import { QuickSummaryBar } from "./QuickSummaryBar";
import { DetailedContent } from "./DetailedContent";
import { ContentList } from "./ContentList";

export const ContactMe = (): React.JSX.Element => {
  return (
    <Flex direction={"row"} p={0} height="100%" fontFamily={"mono"}>
      <Box flexWrap={"nowrap"} flex={1} height="100%" width="100%">
        <QuickSummaryBar showProfileImage={true} />
      </Box>
      <Box p={5} flex={3} height="100%" width="100%" overflow={"auto"}>
        <ContentList>
          <DetailedContent
            titleLabel="contactMe.title"
            detailsLabel="contactMe.details"
          />
        </ContentList>
      </Box>
    </Flex>
  );
};
