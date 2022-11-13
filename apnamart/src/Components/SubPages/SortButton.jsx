import { Button } from "@chakra-ui/react";
import React from "react";

export const SortButton = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      _focus={{ color: "#008ecc", border: "1px solid #008ecc" }}
      _hover={{ background: "none" }}
      borderRadius="6px"
      fontSize={"12px"}
      fontWeight="100"
      p="5px 18px"
      h="26px"
      bg="white"
    >
      {text}
    </Button>
  );
};
