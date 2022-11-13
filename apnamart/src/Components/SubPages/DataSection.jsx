import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { SortButton } from "./SortButton";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AllProducts from "../../Product Page/AllProducts";
export const changeNumber = (val) => {
  let number = val.trim().split(" ");
  number = number[number.length - 1];
  return Number(number);
};
export const DataSection = ({ headerImage, cartdata }) => {
  const [data, setData] = useState(cartdata);

  let sortdata = [...cartdata];
  const handleSort = (text) => {
    if (text === "High to Low")
      sortdata.sort(
        (a, b) =>
          changeNumber(b["final-price"]) - changeNumber(a["final-price"])
      );
    if (text === "Low to High")
      sortdata.sort(
        (a, b) =>
          changeNumber(a["final-price"]) - changeNumber(b["final-price"])
      );
    if (text === "Discount")
      sortdata.sort(
        (a, b) => changeNumber(b["disc-price"]) - changeNumber(a["disc-price"])
      );
    if (text === "Popularity")
      sortdata.sort((a, b) => b["offer_value"] - a["offer_value"]);
    if (text === "All Products") setData(cartdata);
    setData(sortdata);
  };
  return (
    <Box w={["full", "full", "full", "100%", "100%", "100%"]} mx="auto" pt="20px" >
      <Box
        w="100%"
        display={["block", "block", "block", "block", "block", "block"]}
      >
        <Image w="100%" h="100%" src={headerImage}></Image>
      </Box>
      <Flex
        align={"center"}
        justify="space-between"
        h="26px"
        mt="20px"
        fontSize={"14px"}
        display={["block", "block", "block", "flex", "flex", "flex"]}
      >
        <Flex gap={"4px"}>
          <Text>Showing</Text>
          <Text fontWeight={"black"}>20</Text> <Text>of</Text>{" "}
          <Text fontWeight={"black"}>3000</Text> <Text>items</Text>
        </Flex>
        <HStack>
          <Text>Sort by :</Text>
          <SortButton
            onClick={() => handleSort("Popularity")}
            text="Popularity"
          />
          <SortButton
            onClick={() => handleSort("High to Low")}
            text="High to Low"
          />
          <SortButton
            onClick={() => handleSort("Low to High")}
            text="Low to High"
          />
          <SortButton onClick={() => handleSort("Discount")} text="Discount" />
          <SortButton
            onClick={() => handleSort("All Products")}
            text="All Products"
          />
        </HStack>
      </Flex>
      <Box w="100%" bg="white" >
        {/* <Heading p="10px 15px" fontSize="14px">
          ALL PRODUCTS
        </Heading> */}
        
        <AllProducts />
      </Box>
    </Box>
  );
};
