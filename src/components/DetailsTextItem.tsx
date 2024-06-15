import { ListItem } from "@chakra-ui/react";
import { TextWithHighlights } from "./TextWithHighlights";

export const DetailsTextItem = ({
  children,
  listItemKey,
  ...props
}: {
  children: React.ReactNode;
  listItemKey: string;
  [key: string]: any;
}): React.JSX.Element => {
  return (
    <ListItem key={listItemKey}>
      <TextWithHighlights {...props}>{children}</TextWithHighlights>
    </ListItem>
  );
};
