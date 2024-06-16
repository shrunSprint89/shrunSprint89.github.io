import { Box, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Page } from "../interfaces/RouteTypes";

export const MainNav = (): React.JSX.Element => {
  return (
    <HStack>
      <Box padding={"10px"}>
        <NavLink to={Page.HOME}>About me</NavLink>
      </Box>
      <Box padding={"10px"}>
        <NavLink to={Page.HOME.concat(Page.CAREER)}>Career & Projects</NavLink>
      </Box>
      <Box padding={"10px"}>
        <NavLink to={Page.HOME.concat(Page.CONTACT)}>Contact me</NavLink>
      </Box>
    </HStack>
  );
};
