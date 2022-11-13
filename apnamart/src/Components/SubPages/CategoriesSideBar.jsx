import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { CategoryMenu } from "./CategoriesMenu";
import { v4 as uuidv4 } from "uuid";
import { FilterMenu } from "./FilterMenu";
import data from "./Data/listdata.json";
export const CategoriesSideBar = ({ menudata }) => {
  return (
    <Box
      w={["0", "0", "0", "23%", "23%", "20%"]}
      display={["none", "none", "none", "block", "block", "block"]}
    >
      <VStack position={"relative"} top="0" left={"0"} p="16px" gap={10}>
        <Flex
          align={"flex-start"}
          flexDir={"column"}
          w="full"
          bg="white"
          p="10px"
          h="350px"
        >
          <Heading fontSize={"20px"} mb="6px" py="10px">
            Categories
          </Heading>
          <Box
            w="full"
            bg="white"
            h="350px"
            overflowY={"scroll"}
            sx={{
              "&::-webkit-scrollbar": {
                width: "3px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#6f7284`,
              },
            }}
          >
            {data.map((item) => (
              <CategoryMenu
                data={item["sub-menu"]}
                name={item["cat-submenu"]}
                key={uuidv4()}
              />
            ))}
          </Box>
        </Flex>
        <FilterMenu menudata={menudata} key={uuidv4()} />
      </VStack>
    </Box>
  );
};
