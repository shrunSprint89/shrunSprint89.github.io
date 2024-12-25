import { HStack } from "@chakra-ui/react";

export const Header = ({
  menu,
  title,
}: {
  menu: React.JSX.Element;
  title?: React.JSX.Element;
}): React.JSX.Element => {
  return (
    <HStack
      height="full"
      w="full"
      bg="gray.300"
      color="gray.100"
      align={"center"}
      justify={"flex-start"}
    >
      {menu}
      {title && title}
    </HStack>
  );
};
