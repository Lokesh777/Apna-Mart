import { Box, Button, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import fruit from "./fruits.json";

import { AddIcon } from "@chakra-ui/icons";

const AllProducts = () => {
  console.log(fruit);
  return (
    <Box
      w="77%"
      border={"1px solid red"}
      ml="5px"
      mb="24px"
      p="16px 0px 16px 0px"
    >
      <Box w="97%" border="1px solid blue" m="auto">
        <Text mb="16px">All Products</Text>
        <SimpleGrid columns={[2, 3, 4]} spacing={13} w="100%" >
          {fruit.map((ele, i) => (
            <Box key={i} w="100%" borderRadius={"8px"} border="1px solid green">
              <Box w="160px"
                h="160px" m="auto" >
              <Image _hover={{w:"160px",h:"160px", transition : "0.4s" }}
                src={ele["product-image-photo"]}
                alt={ele.clsgetname}
                w="150px"
                h="150px"
                border="1px solid red"
                mt="10"
              />
              </Box>
              
              <Box h="36px" mt="40" >
                <Text
                  fontFamily={"Arial Black"}
                  textAlign="start"
                  fontSize="14px"
                >
                  {ele.clsgetname}
                </Text>
              </Box>

              <HStack h="37px">
                <Text fontSize={"13px"}>M.R.P: </Text>
                <Text fontSize="16px" fontFamily="Arial Black">
                  {" "}
                  {ele["price-box"]}
                </Text>
              </HStack>
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
                gap="20px"
                mb="10"
              >
                <Text ml="3px" mt="10" >Add to Cart </Text>

                {/* <Button borderRadius={"50%"} border="1px solid white">+</Button> */}
                <AddIcon
                  borderRadius={"50%"}
                  border="1px solid grey"
                  p="3px"
                  mt="10"
                  opacity="0.8"
                />
              </Box>
            </Box>
          ))}
        </SimpleGrid>

      </Box>
    </Box>
  );
};

export default AllProducts;
