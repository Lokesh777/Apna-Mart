import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PaymentDetails = () => {
  return (
    <Box w="96%" m="auto" pos={"sticky"} top="1" zIndex="5" >
 <Box 
     borderRadius="2" w="100%"
     border="1px solid red"
      m="auto" mt="10" >
      <Box w="90%" m="auto" mt="6" border="1px solid blue" >

        <Text fontSize={"18px"}
         fontFamily="Arial Black"
         textAlign={"start"}

         pb="4"
         > Payment Details</Text>

        <Box border="1px solid blue" >
          <Flex 
          borderBottom="1px solid grey"
           justifyContent={"space-between"}
           fontSize="14px" pb="2" mb="1">
            <Text 
            color="grey"> MRP Total</Text>
            <Text >₹0</Text>
          </Flex>
          <Flex justifyContent={"space-between"}  
          fontSize="14px" fontWeight={"500"} pb="6">
            <Text>Total Amount</Text>
            <Text>₹0</Text>
          </Flex>
        </Box>
      </Box>

      
    </Box>
    <Flex justifyContent={"end"}
       fontSize="14px" mt="4"  >
        <Button bg="#008ECC" color="white">
          Place Order
        </Button>
      </Flex>
      
      
    </Box>
   
  );
};

export default PaymentDetails;
