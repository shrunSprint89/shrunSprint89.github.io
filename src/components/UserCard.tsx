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
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiFillGithub, AiFillLinkedin, AiOutlineX } from "react-icons/ai";
import { LabelContext } from "../contexts/LabelContext";
import { useContext, useRef } from "react";
import {
  ShowMore,
  ShowMoreRef,
  ShowMoreToggleLinesFn,
} from "@re-dev/react-truncate";
import { BiCollapseVertical, BiExpandVertical } from "react-icons/bi";

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
  const ref = useRef<ShowMoreRef>(null);
  const toggleLines: ShowMoreToggleLinesFn = (e) => {
    ref.current?.toggleLines(e);
  };
  return (
    <Box p={5} color="gray.100" width={"full"}>
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
        <Text color="gray.500">
          <ShowMore
            ref={ref}
            lines={8}
            more={
              <span>
                ...
                <IconButton
                  aria-label={"Expand button"}
                  bgColor={"gray.300"}
                  color={"gray.500"}
                  float={"right"}
                  height={"25px"}
                  icon={<BiExpandVertical />}
                  marginLeft={"1rem"}
                  onClick={toggleLines}
                  width={"10px"}
                />
              </span>
            }
            less={
              <IconButton
                aria-label={"Collapse button"}
                bgColor={"gray.300"}
                color={"gray.500"}
                float={"right"}
                height={"25px"}
                icon={<BiCollapseVertical />}
                marginLeft={"1rem"}
                onClick={toggleLines}
                width={"10px"}
              />
            }
          >
            <Text textIndent="2rem">{labels.shortbio}</Text>
            <Text textIndent="2rem" marginTop={"1rem"}>
              {labels.otherdescription}
            </Text>
          </ShowMore>
        </Text>
      </Stack>
    </Box>
  );
};

export default UserCard;
