import { Flex } from "@chakra-ui/react";
import React from "react";
import { CategoriesSideBar } from "./SubPages/CategoriesSideBar";

export const SubPage = ({ headerImage, menudata, cartdata }) => {
  return (
    <Flex w="full" bg={"blackAlpha.100"} mt="125px">
      <CategoriesSideBar menudata={menudata} />
      {/* data section here products */}
    </Flex>
  );
};
