import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Basket = () => {
  return (
    // -----------------Outer Box -------------
    <Box w={{lg:"59%", md:"90"}} border="1px solid red" mt="5">
     {/* -----------------inner Box ------------- */}
      <Box w="95%" border="1px solid blue" m="auto">

        <Box w="93%" m="auto" mt="5" border="1px solid blue">
 {/* -----------------Title Flex ------------- */}
 <Flex
          justifyContent={"space-between"}
          fontSize="18px"
          w="100%"
          m="auto"
          fontWeight={"300"}
          mt="2"
          fontFamily="Arial Black"
        >
          <Box display={"flex"} mb="3"
          >
            <Text>
              Groceries Basket
             </Text>
             <Text>(items)</Text>
          </Box>
          <Box>
            <Text>Price</Text>
          </Box>
        </Flex>

         {/* -----------------Notification Flex------------- */}
        <Flex borderRadius={"2"}>
          <Image src="" alt="" />
          <Text fontSize={"12px"}
          fontWeight="500" 
          bg="#B5EDF6"
          textAlign={"start"} 
          borderRadius="5">
            
            Shop groceries worth ₹1499 & get sugar at ₹9 (Offer is applicable
            only on products sold by Reliance Retail . For specific exclusions &
            offer details refer  <a> T&C</a>)
          </Text>
        </Flex>
        </Box>
        


         {/* -----------------Item Box ------------- */}

          <Flex w="93%" border="1px solid red"
          m="auto" mt="1">
            <Box w="15%" border="1px solid blue">
            <Image src="https://www.jiomart.com/images/product/75x75/590000086/coconut-1-pc-approx-350-g-600-g-product-images-o590000086-p590000086-0-202203170206.jpg" alt="coco" />
           
            </Box>
             <Box border="1px solid blue"
             textAlign="start" 
              w="85%" pl="4" fontWeight="500">
                <Text fontSize={"16px"} pb="2"
                border="1px solid red" mt="5">
                  COOC
                </Text>
                
                <Text fontSize={"18px"} >₹54.00</Text>
               <Box >
               <Text mt="1" fontSize={"12px"}>
                sold by <Link color="#008ECC" textDecoration={"underline"}>Rel</Link>
                </Text>
                <Flex justifyContent={"end"} gap="3" pr="2"
                
                >
                  <Box w="32px" h="32px" bg="#008ECC" borderRadius={"50%"} >
                  <MinusIcon  color={"white"} boxSize="5" ml="1.5"/>
                 
                  </Box>
                  <Text fontSize={"18px"}>5</Text>
                  <Box w="32px" h="32px" bg="#008ECC" borderRadius={"50%"} >
                  
                  <AddIcon color={"white"} boxSize="5" ml="1.5" />
                  </Box>
                   
                </Flex>
               </Box>
                
            </Box>

          </Flex>


      </Box>
    </Box>
  );
};

export default Basket;
