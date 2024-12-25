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
      fontSize={"medium"}
    >
      <Box
        flex={1}
        overflow={"clip"}
        zIndex="docked"
        borderBottom={"1.5px solid"}
        borderBottomColor={"gray.200"}
        boxShadow={"0 0 4px 3px rgba(22, 22, 22, 0.8)"}
      >
        {header}
      </Box>
      <Box flex={25} overflow={"hidden"}>
        <Outlet />
      </Box>
      <Box
        flex={9}
        overflow={"scroll"}
        borderTop={"1.5px solid"}
        borderTopColor={"gray.200"}
      >
        {footer}
      </Box>
    </Flex>
  );
};
