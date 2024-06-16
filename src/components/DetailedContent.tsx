import { ListItem } from "@chakra-ui/react";
import { TextWithHighlights } from "./TextWithHighlights";
import { useContext } from "react";
import { LabelContext } from "../contexts/LabelContext";
import { DetailsList } from "./DetailsList";
import { Details } from "../interfaces/ContentTypes";

export const DetailedContent = ({
  titleLabel,
  detailsLabel,
}: {
  titleLabel: string;
  detailsLabel: string;
}): React.JSX.Element => {
  const labels = useContext(LabelContext);
  const detailedContent: Details[] = labels.getDetails(detailsLabel);
  const titleLabelText: string = labels.getLabel(titleLabel);
  return (
    <>
      <ListItem pl={1} pb={"5"} key="professionalExperienceTitle">
        <TextWithHighlights
          orangeHighlightQuery={["@", "()"]}
          fontSize="19"
          color="white.500"
        >
          {titleLabelText}
        </TextWithHighlights>
      </ListItem>
      <DetailsList details={detailedContent} />
    </>
  );
};
