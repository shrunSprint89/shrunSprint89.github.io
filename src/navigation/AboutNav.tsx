import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AboutNav = (): React.JSX.Element => {
  return (
    <UnorderedList>
      <ListItem>
        <Link to="">Personal details</Link>
      </ListItem>
    </UnorderedList>
  );
};
