import { Flex } from "@chakra-ui/react";
import React from "react";
import { CategoriesSideBar } from "./SubPages/CategoriesSideBar";
import AllProducts from "../Product Page/AllProducts";
export const SubPage = ({ headerImage, menudata, cartdata }) => {
  return (
    <Flex w="full" bg={"blackAlpha.100"} >
      <CategoriesSideBar menudata={menudata} />
      {/* data section here products */}
      <AllProducts  headerImage={headerImage}/>
    </Flex>
  );
};
