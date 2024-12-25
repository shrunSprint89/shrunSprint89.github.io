import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const MainNavItem = ({
  text,
  link,
}: {
  text: string;
  link: string;
}): React.JSX.Element => {
  return (
    <Box width={"100%"}>
      <NavLink to={link}>
        <Box>{text}</Box>
      </NavLink>
    </Box>
  );
};
