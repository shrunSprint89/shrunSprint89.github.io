import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Page } from "../interfaces/RouteTypes";

export const CareerNav = (): React.JSX.Element => {
  return (
    <UnorderedList>
      <ListItem>
        <Link to="">Career</Link>
      </ListItem>
      <ListItem>
        <Link to={Page.PROJECTS}>Projects</Link>
      </ListItem>
    </UnorderedList>
  );
};
