import { Grid, GridItem } from "@chakra-ui/react";

export const GridContainer = ({
  header,
  nav,
  main,
  footer,
}: {
  header: React.JSX.Element;
  nav: React.JSX.Element;
  main: React.JSX.Element;
  footer: React.JSX.Element;
}): React.JSX.Element => {
  return (
    <Grid
      templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
      gridTemplateRows={"50px 1fr 250px"}
      gridTemplateColumns={"300px 1fr"}
      h="calc(100vh)"
      gap="0"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        {header}
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        {nav}
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        {main}
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        {footer}
      </GridItem>
    </Grid>
  );
};
