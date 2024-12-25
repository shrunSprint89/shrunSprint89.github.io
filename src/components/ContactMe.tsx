import { Box, Flex } from "@chakra-ui/react";
import { DetailedContent } from "./DetailedContent";
import { ContentList } from "./ContentList";

export const ContactMe = (): React.JSX.Element => {
  return (
    <Flex direction={"row"} p={0} height="100%" fontFamily={"mono"}>
      <Box
        p={5}
        flex={3}
        height="100%"
        width="100%"
        overflowY={"auto"}
        overflowX={"hidden"}
      >
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
