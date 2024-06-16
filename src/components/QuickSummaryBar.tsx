import { Box } from "@chakra-ui/react";

export const QuickSummaryBar = ({
  nav,
}: {
  nav: React.JSX.Element;
}): React.JSX.Element => {
  return (
    <Box height={"full"} width={"full"} p={4} bg="gray.300" color="gray.100">
      {nav}
    </Box>
  );
};
