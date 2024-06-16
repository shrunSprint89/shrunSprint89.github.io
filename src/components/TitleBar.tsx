import { Center, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LabelContext } from "../contexts/LabelContext";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const TitleBar = (): React.JSX.Element => {
  const titleLabel = useContext(LabelContext).getLabel("title");
  return (
    <Center flex={3}>
      <Text p={"10px"}>{titleLabel}</Text>
      <ColorModeSwitcher />
    </Center>
  );
};
