import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Page } from "../interfaces/RouteTypes";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MainNavItem } from "./MainNavItem";

export const MainNav = (): React.JSX.Element => {
  const careerLink = Page.HOME.concat(Page.CAREER);
  const projectLink = careerLink.concat("/", Page.PROJECTS);
  return (
    <HStack paddingLeft={"2rem"}>
      <Box padding={"10px"}>
        <NavLink to={Page.HOME}>About me</NavLink>
      </Box>
      <Box padding={"10px"}>
        <Menu>
          <MenuButton
            px={2}
            py={1}
            transition="all 0.2s"
            borderRadius="md"
            _expanded={{ bg: "gray.200" }}
          >
            Career & Projects <ChevronDownIcon />
          </MenuButton>
          <MenuList
            bg={"gray.300"}
            boxShadow={"2px 2px 4px 2px rgba(0, 0, 0, 0.6)"}
          >
            <MenuItem bg={"gray.300"} _hover={{ bg: "gray.200" }}>
              <MainNavItem text="Career" link={careerLink} />
            </MenuItem>
            <MenuItem bg={"gray.300"} _hover={{ bg: "gray.200" }}>
              <MainNavItem text="Projects" link={projectLink} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box padding={"10px"}>
        <NavLink to={Page.HOME.concat(Page.CONTACT)}>Contact me</NavLink>
      </Box>
    </HStack>
  );
};
