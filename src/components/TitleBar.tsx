import { Center, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LabelContext } from "../contexts/LabelContext";

export const TitleBar = (): React.JSX.Element => {
  const titleLabel = useContext(LabelContext).getLabel("title");
  return (
    <Center flex={1}>
      <Text p={"10px"}>{titleLabel}</Text>
      {/* <ColorModeSwitcher /> */}
      {/* <Link isExternal href="https://github.com/shrunSprint89">
        <Icon as={AiFillGithub} w={6} h={6} />
      </Link> */}
    </Center>
  );
};
