import { Box, Image } from "@chakra-ui/react";

export const QuickSummaryBar = ({
  nav,
  showProfileImage,
}: {
  nav?: React.JSX.Element;
  showProfileImage?: boolean;
}): React.JSX.Element => {
  return (
    <>
      {nav && (
        <Box
          height={"full"}
          width={"full"}
          p={4}
          bg="gray.300"
          color="gray.100"
        >
          {nav}
        </Box>
      )}
      {showProfileImage && <Image />}
    </>
  );
};
