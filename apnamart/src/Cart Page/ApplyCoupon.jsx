import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";

// import axios from "axios";
const axios = require("axios").default;

const ApplyCoupon = () => {
 

 

 

  return (
    <Box w="96%" borderRadius="2" m="auto" pl={{ md: 4 }} textAlign={"start"}>
      <Box w="90%" m="5" >
        <Text
          fontSize={{ md: "18px", sm: "14px", base: "12px" }}
          fontFamily={"Arial Black"}
        >
          Apply Coupon
        </Text>
        <Box
          fontSize={{ md: "16px", sm: "12px", base: "10px" }}
          pb="5"
          display={"flex"}
          gap="1"
          fontWeight={"500"}
        >
          <Link color="#008ECC" textDecoration={"underline"}>
            Log in{" "}
          </Link>{" "}
          <Text> to see best offers and cashback deals </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ApplyCoupon;
