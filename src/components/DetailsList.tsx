import { Details } from "@interfaces/ContentTypes";
import { DetailsTextItem } from "./DetailsTextItem";

export const DetailsList = ({
  details,
}: {
  details: Details[];
}): React.JSX.Element => {
  const greenHighlightQuery = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "present",
    "current",
  ];
  const orangeHighlightQuery = ["@", "()"];
  const pinkHighlightQuery = [
    "Cisco",
    "PolarisFT",
    "Intellect Design Arena Ltd",
    "Rialto",
    "JPMC",
    "JPMorgan",
    "TalentFil",
    "Graduation",
    "Chennai",
    "Bangalore",
  ];
  return (
    <>
      {details.map((detail, index) => (
        <>
          <DetailsTextItem
            listItemKey={detail.title + index}
            orangeHighlightQuery={orangeHighlightQuery}
            greenHighlightQuery={greenHighlightQuery}
            pinkHighlightQuery={pinkHighlightQuery}
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
