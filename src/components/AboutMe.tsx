import { Box, Flex } from "@chakra-ui/react";
import { DetailedContent } from "./DetailedContent";
import UserCard from "./UserCard";
import { ContentList } from "./ContentList";

export const AboutMe = (): React.JSX.Element => {
  return (
    <Flex direction={"row"} p={0} height="100%">
      <Box flexWrap={"nowrap"} p={0} flex={1} height="100%" width="100%">
        <UserCard />
      </Box>
      <Box flex={3} height="100%" width="100%" overflow={"auto"}>
        <ContentList>
          <DetailedContent
            titleLabel="aboutMe.title"
            detailsLabel="aboutMe.details"
          />
        </ContentList>
      </Box>
    </Flex>
  );
};
