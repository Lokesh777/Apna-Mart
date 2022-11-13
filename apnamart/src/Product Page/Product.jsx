import React from "react";
import Routebar from "./Routebar";
import Sidebar from "./Sidebar";
import AllProducts from "./AllProducts";
import { Flex } from "@chakra-ui/react";
const Product = () => {
  return (
    <div>
      <Routebar />
      <Sidebar w="30%" />
    </div>
  );
};

export default Product;
