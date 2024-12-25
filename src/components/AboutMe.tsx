import { Box, Flex } from "@chakra-ui/react";
import { DetailedContent } from "./DetailedContent";
import UserCard from "./UserCard";
import { ContentList } from "./ContentList";

export const AboutMe = (): React.JSX.Element => {
  return (
    <Flex direction={"row"} p={0} height="100%" fontFamily={"mono"}>
      <Box
        flexWrap={"nowrap"}
        p={0}
        flex={1}
        height="100%"
        width="100%"
        borderRight={"1.5px solid"}
        borderRightColor={"gray.200"}
        overflowY={"auto"}
        overflowX={"hidden"}
        bg="gray.300"
      >
        <UserCard />
      </Box>
      <Box
        flex={3}
        p={5}
        height="100%"
        width="100%"
        overflowY={"auto"}
        overflowX={"hidden"}
      >
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
