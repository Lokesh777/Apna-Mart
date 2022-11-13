import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
// import axios from "axios";
const axios = require("axios").default 

const ApplyCoupon = () => {

  // const get = async () =>{
  //     let res = await fetch("http://localhost:8080/products");
  //     let data = await res.json();
  //     console.log(data)
  // }
  // useEffect(() =>{
  // get();
  // },[])

const getL = async () =>{
  let res = await axios.post("http://localhost:8080/authUser/login", {
    
  email: "v@g",
  password: "123",
  
  });
  let data = res.data;
  console.log(data);
}

useEffect(() =>{
  getL();
},[])


  return (
    <Box w="96%" border="1px solid blue" 
    borderRadius="2" m="auto" pl={{md:4}} textAlign={"start"}>
      <Box w="90%"  m="5" border="1px solid red">
        <Text fontSize={{md:"18px", sm:"14px", base:"12px"}} fontFamily={"Arial Black"} 
        >Apply Coupon</Text>
        <Box fontSize={{md:"16px", sm:"12px",base:"10px"}} pb="5" display={"flex"} gap="1"
        fontWeight={"500"}>
<Link color="#008ECC" textDecoration={"underline"}>Log in </Link> <Text>  to see best offers and cashback deals </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ApplyCoupon;
