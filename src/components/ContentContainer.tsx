import { Box, OrderedList } from "@chakra-ui/react";
import { DetailedContent } from "./DetailedContent";

export const ContentContainer = (): React.JSX.Element => {
  return (
    <Box height="full" width="full" p={4}>
      <OrderedList styleType="decimal" color="gray.200">
        <DetailedContent
          titleLabel="professionalExperience.title"
          detailsLabel="professionalExperience.details"
        />
        <DetailedContent
          titleLabel="projects.title"
          detailsLabel="projects.details"
        />
      </OrderedList>
    </Box>
  );
};
