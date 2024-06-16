import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CareerNav = (): React.JSX.Element => {
  return (
    <UnorderedList>
      <ListItem>
        <Link to="">Career</Link>
      </ListItem>
      <ListItem>
        <Link to="projects">Projects</Link>
      </ListItem>
    </UnorderedList>
  );
};
