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
import { AiFillGithub, AiFillLinkedin, AiOutlineX } from "react-icons/ai";
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
    <Box p={5} bg="gray.300" color="gray.100" height={"full"} width={"full"}>
      <Stack
        w="90%"
        minW="22rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="md"
        margin="0 auto"
        boxShadow={"0 0 5px 1px rgba(0, 0, 0, 0.2)"}
      >
        <Box pos="relative">
          <Avatar
            src="https://avatars.githubusercontent.com/u/50130010?v=4"
            name={labels.name}
            size="full"
            borderRadius="md"
          />
        </Box>

        <HStack justifyContent="space-between" alignItems="normal">
          <chakra.h1 fontSize="xl" fontWeight="bold">
            {labels.name}
          </chakra.h1>
          <HStack justifyContent="space-between" alignItems="normal">
            <Link isExternal href="https://github.com/shrunSprint89">
              <Icon as={AiFillGithub} w={6} h={6} />
            </Link>
            <Link isExternal href="https://www.linkedin.com/in/sharanselvaraj/">
              <Icon as={AiFillLinkedin} w={6} h={6} />
            </Link>
            <Link isExternal href="https://x.com/shrunSpeak">
              <Icon as={AiOutlineX} w={6} h={6} />
            </Link>
            <Tooltip
              label="Coimbatore, India"
              aria-label="Coimbatore, India"
              placement="right-end"
              size="sm"
              // Sizes for Tooltip are not implemented in the default theme. You can extend the theme to implement them
            >
              <Avatar
                src="https://flagcdn.com/in.svg"
                name="Indian Flag"
                size="xs"
                borderRadius="full"
              />
            </Tooltip>
          </HStack>
        </HStack>
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
