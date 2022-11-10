import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import fruit from "./fruits.json";

import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

const AllProducts = () => {

  const [state , setState] = useState(true);
  const toggleButton = () =>{
    setState(!state)
  }
  console.log(fruit);
  return (
    <Box
      w={{lg:"77%", md : "100%", base:"100%"}}
      border={"1px solid red"}
      ml="5px"
      mb="24px"
      p="16px 0px 16px 0px"
    >
      <Box w="97%" border="1px solid blue" m="auto">
        <Text mb="16px">All Products</Text>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
            xl : "repeat(4,1fr)",
            '2xl' : "repeat(4,1fr)",
          }}
          gap="1vw"
          w="100%"
          border={"1px solid red"}
        >
          {fruit.map((ele, i) => (
            <Box key={i} borderRadius={"8px"} border="1px solid green">
              <Box w="160px" h="160px" m="auto" border="1px solid grey" mt="5">
                <Image
                  _hover={{ w: "160px", h: "160px", transition: "0.4s", cursor:"pointer"}}
                  src={ele["product-image-photo"]}
                  alt={ele.clsgetname}
                  w="150px"
                  h="150px"
                  border="1px solid red"
                />
              </Box>

              <Box h="36px" mt="10">
                <Text
                  fontFamily={"Arial Black"}
                  textAlign="start"
                  fontSize={{lg:"1vw",md:"12px", sm:"10px", base:"10px"}}
                >
                  {ele.clsgetname}
                </Text>
              </Box>

              <HStack h="37px">
                <Text fontSize={{lg:"1vw",md:"12px", sm:"10px", base:"10px"}}>M.R.P: </Text>
                <Text fontSize={{lg:"16px",md:"14px", sm:"12px", base:"10px"}} fontFamily="Arial Black">
                  {" "}
                  {ele["price-box"]}
                </Text>
              </HStack>
              {state ? 
                <Box
                bg=" #008ECC"
                w="144px"
                h="37px"
                fontSize={"14px"}
                margin="auto"
                fontFamily="Arial Black"
                borderRadius={"4px"}
                color="white"
                display={"flex"}
               gap="5"
                mb="7"
                mt="4"
              _hover={{cursor:"pointer"}}
              onClick = {toggleButton}
              >
                <Text ml="3" mt="2" >
                  Add to Cart{" "}
                </Text>

                
                <AddIcon
                  borderRadius={"50%"}
                  border="1px solid grey"
                  p="3px"
                  boxSize="5"
                  mt="2"
                />
              </Box> :
              <Box
              bg="white"
              w="144px"
              h="37px"
              fontSize={"14px"}
              margin="auto"
              fontFamily="Arial Black"
              borderRadius={"4px"}
              color="white"
              display={"flex"}
             gap="5"
              mb="7"
              mt="4"
            _hover={{cursor:"pointer"}}
            onClick = {toggleButton}
            >
           <AddIcon
                borderRadius={"50%"}
                border="1px solid grey"
                p="3px"
                boxSize="5"
                mt="2"
                color="#008ECC"
              />
            </Box>
              }

              {/* <Box
                bg=" #008ECC"
                w="144px"
                h="37px"
                fontSize={"14px"}
                margin="auto"
                fontFamily="Arial Black"
                borderRadius={"4px"}
                color="white"
                display={"flex"}
               gap="5"
                mb="7"
                mt="4"
              _hover={{cursor:"pointer"}}
              >
                <Text ml="3" mt="2" >
                  Add to Cart{" "}
                </Text>

                
                <AddIcon
                  borderRadius={"50%"}
                  border="1px solid grey"
                  p="3px"
                  boxSize="5"
                  mt="2"
                />
              </Box> */}
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllProducts;
