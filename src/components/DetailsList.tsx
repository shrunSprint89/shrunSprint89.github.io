import { Details } from "../interfaces/ContentTypes";
import { DetailsTextItem } from "./DetailsTextItem";
import highlights from "../resources/hightlights.json";

export const DetailsList = ({
  details,
}: {
  details: Details[];
}): React.JSX.Element => {
  const greenHighlightQuery = highlights.greenHighlights;
  const orangeHighlightQuery = highlights.orangeHighlights;
  const pinkHighlightQuery = highlights.pinkHighlights;
  const links = highlights.links;
  return (
    <>
      {details.map((detail, index) => (
        <>
          <DetailsTextItem
            listItemKey={detail.title + index}
            orangeHighlightQuery={orangeHighlightQuery}
            greenHighlightQuery={greenHighlightQuery}
            pinkHighlightQuery={pinkHighlightQuery}
            links={links}
            fontSize={"l"}
            lineHeight={2}
          >
            {detail.title}
          </DetailsTextItem>
          {detail.role && (
            <DetailsTextItem
              listItemKey={detail.title + "_role_" + index}
              orangeHighlightQuery={orangeHighlightQuery}
              greenHighlightQuery={greenHighlightQuery}
              pinkHighlightQuery={pinkHighlightQuery}
              links={links}
              indent={2}
              fontSize={"m"}
              lineHeight={1.5}
            >
              {detail.role}
            </DetailsTextItem>
          )}
          {detail.duration && (
            <DetailsTextItem
              listItemKey={detail.title + "_duration_" + index}
              orangeHighlightQuery={orangeHighlightQuery}
              greenHighlightQuery={greenHighlightQuery}
              pinkHighlightQuery={pinkHighlightQuery}
              links={links}
              indent={5}
              fontSize={"m"}
              lineHeight={1.5}
            >
              {detail.duration}
            </DetailsTextItem>
          )}
          {detail.description && (
            <DetailsTextItem
              listItemKey={detail.title + "_description_" + index}
              orangeHighlightQuery={orangeHighlightQuery}
              greenHighlightQuery={greenHighlightQuery}
              pinkHighlightQuery={pinkHighlightQuery}
              links={links}
              indent={10}
              lineHeight={1.4}
            >
              {detail.description}
            </DetailsTextItem>
          )}
        </>
      ))}
    </>
  );
};
