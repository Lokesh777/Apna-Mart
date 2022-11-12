import { Flex, Heading, VStack } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { CategoryMenu2 } from "./CategoriesMenu2";
import { CustomRangeSlider } from "./RangeSlider";
export const FilterMenu = ({ menudata }) => {
  return (
    <Flex align={"flex-start"} flexDir={"column"} w="full" bg="white" p="10px">
      <Heading fontSize={"20px"} mb="16px" py="10px">
        Filters
      </Heading>
      <VStack align={"flex-start"} w="full" bg="white">
        {menudata.map((item) => (
          <CategoryMenu2
            data={item["ListData"]}
            name={item["List"]}
            key={uuidv4()}
          />
        ))}
      </VStack>
      <CustomRangeSlider name="Price" />
      <CustomRangeSlider name="Discount" />
    </Flex>
  );
};
