import React from "react";
import Routebar from "./Routebar";
import Sidebar from "./Sidebar";
import AllProducts from "./AllProducts";
import { Box, Flex } from "@chakra-ui/react";
const Product = () => {
  return (
    <div>
      <Routebar />
      {/* <Flex  border="1px solid red">
        <Box w="30%">
        <Sidebar  />
        </Box>
       <Box box="70%">
        <AllProducts  />
        </Box>
      </Flex> */}
      <Sidebar />
    </div>
  );
};

export default Product;
