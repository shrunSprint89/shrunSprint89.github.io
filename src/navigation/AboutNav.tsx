import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AboutNav = (): React.JSX.Element => {
  return (
    <UnorderedList>
      <ListItem>
        <Link to="">Personal details</Link>
      </ListItem>
      <ListItem>
        <Link to="projects">Sports</Link>
      </ListItem>
      <ListItem>
        <Link to="hobbies">Hobbies</Link>
      </ListItem>
    </UnorderedList>
  );
};
