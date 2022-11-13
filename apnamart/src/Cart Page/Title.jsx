import { Box, Flex, Hide, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import cart1 from "./Logo/cart1.png";
import cart2 from "./Logo/Cart2.png";
import checkList1 from "./Logo/checkList1.png";
import checkList2 from "./Logo/checkList2.png";
import creditcard1 from "./Logo/creditcard1.png";
import creditcard2 from "./Logo/creditcard2.png";
import creditcard3 from "./Logo/creditcard3.png";

const Title = () => {
  const [state, setState] = useState(true);
  const track = [
    {
      page: "Your Cart",
      icon1: cart1,
      icon2: cart2,
    },
    {
      page: "Order Summary",
      icon1: checkList1,
      icon2: checkList2,
    },
    {
      page: "Payment",
      icon1: creditcard1,
      icon2: creditcard2,
    },
  ];
  return (
    <Hide below="lg">

   
    <HStack w="100%"  mt="5">
      <Box w="33%" h="30px" >
        <Text fontSize="24px" fontFamily="Arial Black" textAlign={"start"}>
          {" "}
          My Cart()
        </Text>
      </Box>
      <Flex w="67%" h="30px" justifyContent={"end"}>
        <Flex w="60%" h="30px" gap={"5%"} justifyContent={"end"}>
          {track.map((ele,i) =>
            state ? (
              <>
                <Image src={ele.icon1} />
                <Box width="40%" h="1px" mt="3" >
                  {" "}
                </Box>
              </>
            ) : (
              <>
                <Image src={ele.icon1} />
                <Box width="50%" >
                  {" "}
                </Box>
              </>
            )
          )}
        </Flex>
      </Flex>
    </HStack>
    </Hide>
  );
};

export default Title;
