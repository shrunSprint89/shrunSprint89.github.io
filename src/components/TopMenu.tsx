import { Center, Menu, MenuButton } from "@chakra-ui/react";

export const TopMenu = (): React.JSX.Element => {
  return (
    <Center flex={1}>
      <Menu orientation="horizontal">
        <MenuButton padding={"10px"}>Home</MenuButton>
        <MenuButton padding={"10px"}>About Me</MenuButton>
        <MenuButton padding={"10px"}>Projects</MenuButton>
        <MenuButton padding={"10px"}>Blog</MenuButton>
        <MenuButton padding={"10px"}>Contact me</MenuButton>
      </Menu>
    </Center>
  );
};
