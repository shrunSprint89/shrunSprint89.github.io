import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Header = ({
  menu,
  title,
}: {
  menu: React.JSX.Element;
  title: React.JSX.Element;
}): React.JSX.Element => {
  return (
    <Flex
      height="full"
      w="full"
      bg="gray.300"
      color="gray.100"
      flexDirection={"row"}
    >
      {menu}
      {title}
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};
