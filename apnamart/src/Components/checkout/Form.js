import { VStack } from "@chakra-ui/react";
import React from "react";
import Builder from "./Builder";

export default function Form() {
  return (
    <VStack mt={8} spacing="3px">
      <Builder />
    </VStack>
  );
}
