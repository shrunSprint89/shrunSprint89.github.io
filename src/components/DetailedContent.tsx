import { ListItem } from "@chakra-ui/react";
import { TextWithHighlights } from "./TextWithHighlights";
import { useContext } from "react";
import { LabelContext } from "../contexts/LabelContext";
import { Details } from "@interfaces/ContentTypes";
import { DetailsList } from "./DetailsList";

export const DetailedContent = ({
  titleLabel,
  detailsLabel,
}: {
  titleLabel: string;
  detailsLabel: string;
}): React.JSX.Element => {
  const labels = useContext(LabelContext);
  const detailedContent: Details[] = labels.getDetails(detailsLabel);
  const professionalExperienceTitle: string = labels.getLabel(titleLabel);
  return (
    <ListItem pb={"5"} key="professionalExperienceTitle">
      <TextWithHighlights
        orangeHighlightQuery={["@", "()"]}
        fontSize="19"
        color="white.500"
      >
        {professionalExperienceTitle}
      </TextWithHighlights>
      <DetailsList details={detailedContent} />
    </ListItem>
  );
};
