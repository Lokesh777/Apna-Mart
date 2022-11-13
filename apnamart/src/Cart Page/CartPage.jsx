import React from 'react'

import {Box, Flex} from "@chakra-ui/react";
import Title from './Title';
import Basket from "./Basket"
import ApplyCoupon from './ApplyCoupon';
import PaymentDetails from './PaymentDetails';
import Navbar from '../navbars/Navbar';
import Footer from "../footer/Footer"
const CartPage = () => {

  return (
    <Box w="100%">
      <Navbar />
       <Box w="95%"  m="auto" mt="10" mb="10">
         <Title />
         <Box display={{lg:"flex", md:"block"}}  h="987px" mt="5">
             <Basket />
             <Box w={{lg:"40%", md:"90%"}}>
                <ApplyCoupon />
                <PaymentDetails />
             </Box>
         </Box>
       </Box>
      <Footer />
    </Box>
  )
}

export default CartPage
