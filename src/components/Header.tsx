import {  Box, Flex, Menu, MenuButton } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Header = (): React.JSX.Element => {
    return (
      <Flex flexDirection={"row"}>
        <Box flex={2}>
          <Menu orientation="horizontal" >
            <MenuButton padding={"10px"}>
              Home
            </MenuButton >
            <MenuButton padding={"10px"}>
            About me
            </MenuButton>
            <MenuButton padding={"10px"}>
            Projects
            </MenuButton>
            <MenuButton padding={"10px"}>
            Blog
            </MenuButton>
            <MenuButton padding={"10px"}>
            Contact me
            </MenuButton>
          </Menu>
        </Box>
        
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    );
  };