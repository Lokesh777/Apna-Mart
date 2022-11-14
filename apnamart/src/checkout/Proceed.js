import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import Form from "./Form";
// import "../styles.css";

export default function Proceed() {
  return (
    <Box   my={10} p={2} > 
      <Heading as="h1" m={"-6rem 0 0 0"}>Checkout Form</Heading>
      {/* <Text>Proceed to Pay</Text> */}
      <Form />
    </Box>
  );
}
