import React from 'react'
import {Box, Flex} from "@chakra-ui/react";
import Title from './Title';
import Basket from "./Basket"
import ApplyCoupon from './ApplyCoupon';
import PaymentDetails from './PaymentDetails';
const CartPage = () => {

  return (
    <Box w="100%" border="1px solid red">
       <Box w="95%" border="1px solid red" m="auto">
         <Title />
         <Box display={{lg:"flex", md:"block"}} border="1px solid blue" h="987px" mt="5">
             <Basket />
             <Box w={{lg:"40%", md:"90%"}}>
                <ApplyCoupon />
                <PaymentDetails />
             </Box>
         </Box>
       </Box>
    </Box>
  )
}

export default CartPage
