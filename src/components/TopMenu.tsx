import { Center } from "@chakra-ui/react";
import { MainNav } from "../navigation/MainNav";

export const TopMenu = (): React.JSX.Element => {
  return (
    <Center flex={1}>
      <MainNav />
    </Center>
  );
};
