import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { CategoriesSideBar } from "./SubPages/CategoriesSideBar";
import AllProducts from "../Product Page/AllProducts";
import { DataSection } from "./SubPages/DataSection";
export const SubPage = ({ headerImage, menudata, cartdata }) => {
  return (
    <Flex w="full" bg={"blackAlpha.100"} >
      <CategoriesSideBar menudata={menudata} />
      {/* data section here products */}
      <Box
      w={{lg:"77%", md : "100%", base:"100%"}}
      
      ml="5px"
      mb="24px"
      p="16px 0px 16px 0px"
    >
<DataSection headerImage={headerImage} cartdata={cartdata}/>

    </Box>
      
    </Flex>
  );
};
