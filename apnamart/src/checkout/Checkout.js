import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';
import Proceed from './Proceed';

const Checkout = () =>{

  const navigate=useNavigate()

  // const onToken = (token) => {
  //       fetch('/save-stripe-token', {
  //         method: 'POST',
  //         body: JSON.stringify(token),
  //       }).then(response => {
  //         response.json().then(data => {
  //           alert(`We are in business, ${data.email}`);
  //         });
  //       });
  //     }
  const onToken = (token, addresses) => {
            console.log(token, addresses);
            navigate("/")
          };


    return (
        <>
             <div>
             
                 <Box>
                   <Proceed/>
                 </Box>
                 <Box display={"flex"} justifyContent="center" textAlign={"center"} >
                   {/* <Button 
                    onClick={()=>navigate("/home")}
                    > */}
                      <StripeCheckout 
                    stripeKey="pk_test_m9Dp6uaJcynCkZNTNS1nDR8B00AQg2m6vJ"
                    token={onToken}
                    />
                    {/* </Button> */}
                 </Box>
                 
                   {/* <p>Please checkout:</p> */}
                    
        
                    
            </div>
        </>
    )
}

export default Checkout;