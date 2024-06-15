import { Text, useHighlight } from "@chakra-ui/react";

export const TextWithHighlights = ({
  children,
  greenHighlightQuery,
  orangeHighlightQuery,
  pinkHighlightQuery,
  indent,
  fontSize,
  lineHeight,
  color,
}: {
  children: React.ReactNode;
  greenHighlightQuery?: string[];
  orangeHighlightQuery?: string[];
  pinkHighlightQuery?: string[];
  indent?: number;
  fontSize?: string;
  lineHeight?: number;
  color?: string;
}): React.JSX.Element => {
  greenHighlightQuery =
    greenHighlightQuery?.map((query) => query.toLowerCase()) ?? [];
  orangeHighlightQuery =
    orangeHighlightQuery?.map((query) => query.toLowerCase()) ?? [];
  pinkHighlightQuery =
    pinkHighlightQuery?.map((query) => query.toLowerCase()) ?? [];
  const textContent = "".concat(children as string);
  const chunks = useHighlight({
    text: textContent,
    query: greenHighlightQuery.concat(
      orangeHighlightQuery.concat(pinkHighlightQuery)
    ),
  });

  return (
    <Text
      color={color ?? "blue.200"}
      marginLeft={indent}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {chunks.map(({ match, text }) => {
        let finalText: React.JSX.Element = <></>;
        if (!match) finalText = <Text as="span">{text}</Text>;
        const greenHighlight = greenHighlightQuery?.includes(
          text.toLowerCase()
        );
        const orangeHighlight = orangeHighlightQuery?.includes(
          text.toLowerCase()
        );
        const pinkHighlight = pinkHighlightQuery?.includes(text.toLowerCase());
        if (greenHighlight) {
          finalText = (
            <Text as="span" color="green.100">
              {text}
            </Text>
          );
        }
        if (orangeHighlight) {
          finalText = (
            <Text as="span" color="orange.100">
              {text}
            </Text>
          );
        }
        if (pinkHighlight) {
          finalText = (
            <Text as="span" color="pink.100">
              {text}
            </Text>
          );
        }
        return finalText;
      })}
    </Text>
  );
};
