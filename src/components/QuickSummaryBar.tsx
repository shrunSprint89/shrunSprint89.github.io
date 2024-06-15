import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

export const QuickSummaryBar = (): React.JSX.Element => {
    return (
      <Box height={"full"} width={"full"} p={4}
      bg="gray.300" 
      color="gray.100">

      <UnorderedList
      >
        <ListItem>Quick Summary Bar</ListItem>
      </UnorderedList>
      </Box>
    );
  };