/**
 * Modified from https://templateskart.com/components/cards
 */

import {
  chakra,
  Box,
  Stack,
  Link,
  HStack,
  Text,
  Icon,
  Avatar,
  Tooltip,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiFillGithub } from "react-icons/ai";
import { LabelContext } from "../contexts/LabelContext";
import { useContext } from "react";

const UserCard = () => {
  const keys = {
    name: "aboutMe.name",
    shortbio: "aboutMe.shortbio",
    otherdescription: "aboutMe.otherdescription",
  };
  const labelContext = useContext(LabelContext);
  const labels = Object.entries(keys).reduce(
    (
      labelObj: {
        [key: string]: string;
      },
      [key, labelKey]
    ) => {
      labelObj[key] = labelContext.getLabel(labelKey);
      return labelObj;
    },
    {}
  );
  return (
    <Box bg="gray.300" color="gray.100" height={"full"} width={"full"}>
      <Stack
        w="17rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.4)"
          ),
        }}
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Tooltip
            label="Lahore, Pakistan"
            aria-label="Lahore, Pakistan"
            placement="right-end"
            size="sm"
            // Sizes for Tooltip are not implemented in the default theme. You can extend the theme to implement them
          >
            <Box pos="relative">
              <Avatar
                src="https://avatars.githubusercontent.com/u/50130010?v=4"
                name={labels.name}
                size="xl"
                borderRadius="md"
              />
              <Avatar
                src="https://flagcdn.com/in.svg"
                name="Indian Flag"
                size="xs"
                borderRadius="full"
                pos="absolute"
                bottom={0}
                right="-12px"
              />
            </Box>
          </Tooltip>
          <Link isExternal href="https://github.com/shrunSprint89">
            <Icon as={AiFillGithub} w={6} h={6} />
          </Link>
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
          {labels.name}
        </chakra.h1>
        <Text fontSize="md" color="gray.500">
          {labels.shortbio}
        </Text>
        <Divider />
        <Text fontSize="md" color="gray.500">
          {labels.otherdescription}
        </Text>
      </Stack>
    </Box>
  );
};

export default UserCard;
