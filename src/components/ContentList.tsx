import { OrderedList } from "@chakra-ui/react";

export const ContentList = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <OrderedList
      styleType="decimal"
      color="gray.200"
      height={"fit-content"}
      width={"100%"}
      pl={3}
    >
      {children}
    </OrderedList>
  );
};
