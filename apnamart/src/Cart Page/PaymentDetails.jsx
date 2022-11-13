import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useContext } from "react";
import { TotalContext } from "../Context/TotalContext";
import { Link } from "react-router-dom";
const PaymentDetails = () => {
  // const cartData = async () =>{
  //   try{
  //     const res = await axios("http://localhost:8080/cart/9");
  //     const data = res.data;
  //     console.log(data[0].data);
  //     setCart(data[0].data)
  //   } 
  //   catch(e){
  //     console.log(e);
  //   }
        
  // }
  const {total , setTotal} = useContext(TotalContext);
  useEffect(() =>{

  },[total]);
  return (
    <Box w="96%" m="auto" pos={"sticky"} top="1" zIndex="5" >
 <Box 
     borderRadius="2" w="100%"
     
      m="auto" mt="10" >
      <Box w="90%" m="auto" mt="6"  >

        <Text fontSize={"18px"}
         fontFamily="Arial Black"
         textAlign={"start"}

         pb="4"
         > Payment Details</Text>

        <Box  >
          <Flex 
          borderBottom="1px solid grey"
           justifyContent={"space-between"}
           fontSize="14px" pb="2" mb="1">
            <Text 
            color="grey"> MRP Total</Text>
            <Text >₹{total}</Text>
          </Flex>
          <Flex justifyContent={"space-between"}  
          fontSize="14px" fontWeight={"500"} pb="6">
            <Text>Total Amount</Text>
            <Text>₹{total}</Text>
          </Flex>
        </Box>
      </Box>

      
    </Box>
    <Flex justifyContent={"end"}
       fontSize="14px" mt="4"  >
        <Link to ="/checkout">

        <Button bg="#008ECC" color="white">
          Place Order
        </Button>
        </Link>
       
      </Flex>
      
      
    </Box>
   
  );
};

export default PaymentDetails;
