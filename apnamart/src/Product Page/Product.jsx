import React from "react";
import Routebar from "./Routebar";
import Sidebar from "./Sidebar";
import AllProducts from "./AllProducts";
import { Flex } from "@chakra-ui/react";
const Product = () => {
  return (
    <div>
      <Routebar />
      <Flex >
        <Sidebar w="30%" />
        <AllProducts w="70%" />
      </Flex>
    </div>
  );
};

export default Product;
