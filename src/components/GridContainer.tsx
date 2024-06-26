import { Grid, GridItem } from "@chakra-ui/react";

export const GridContainer = ({
  header,
  main,
  footer,
}: {
  header: React.JSX.Element;
  main: React.JSX.Element;
  footer: React.JSX.Element;
}): React.JSX.Element => {
  return (
    <Grid
      templateAreas={`"header header"
                        "main main"
                        "footer footer"`}
      gridTemplateRows={"50px 1fr 250px"}
      gridTemplateColumns={"300px 1fr"}
      h="calc(100vh)"
      gap="0"
      bg="gray.400"
      color="gray.100"
    >
      <GridItem area={"header"}>{header}</GridItem>
      <GridItem area={"main"}>{main}</GridItem>
      <GridItem area={"footer"}>{footer}</GridItem>
    </Grid>
  );
};
