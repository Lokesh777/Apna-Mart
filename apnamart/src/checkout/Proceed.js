import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import Form from "./Form";
// import "../styles.css";

export default function Proceed() {
  return (
    <Box className="App" my={10}>
      <Heading as="h1">Checkout Form</Heading>
      {/* <Text>Proceed to Pay</Text> */}
      <Form />
    </Box>
  );
}
