import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AllProducts from "../Product Page/AllProducts";
import { CategoriesSideBar } from "./SubPages/CategoriesSideBar";
import { DataSection } from "./SubPages/DataSection";

export const SubPage = ({ headerImage, menudata, cartdata }) => {
  return (
    <>
      <Flex w="full" bg={"blackAlpha.100"} mt="125px">
        <CategoriesSideBar menudata={menudata} />

        <Box>
          <DataSection headerImage={headerImage} cartdata={cartdata} />
          {/* <AllProducts /> */}
        </Box>
      </Flex>
    </>
  );
};
