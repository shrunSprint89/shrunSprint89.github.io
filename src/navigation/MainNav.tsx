import { Box, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const MainNav = (): React.JSX.Element => {
  return (
    <HStack>
      <Box padding={"10px"}>
        <NavLink to="/">About me</NavLink>
      </Box>
      <Box padding={"10px"}>
        <NavLink to="/career">Career & Projects</NavLink>
      </Box>
      <Box padding={"10px"}>
        <NavLink to="/contact">Contact me</NavLink>
      </Box>
    </HStack>
  );
};
