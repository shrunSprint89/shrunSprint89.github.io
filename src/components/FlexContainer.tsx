import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const FlexContainer = ({
  header,
  footer,
}: {
  header: React.JSX.Element;
  footer: React.JSX.Element;
}): React.JSX.Element => {
  return (
    <Flex
      h="calc(100vh)"
      w="calc(100vw)"
      bg="gray.400"
      color="gray.100"
      direction={"column"}
    >
      <Box flex={1} overflow={"clip"}>
        {header}
      </Box>
      <Box flex={9} overflow={"hidden"}>
        <Outlet />
      </Box>
      <Box flex={3} overflow={"clip"}>
        {footer}
      </Box>
    </Flex>
  );
};
