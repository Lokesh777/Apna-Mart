import {
    Flex,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    List,
    ListItem,
    Checkbox,
    Text,
  } from "@chakra-ui/react";
  import { v4 as uuidv4 } from "uuid";
  export const CategoryMenu2 = ({ data, name }) => {
    return (
      <List color={"#6f7284"} key={uuidv4()} w="full">
        <ListItem key={uuidv4()}>
          <Flex align={"center"} cursor="pointer">
            <Text my={"10px"}>{name}</Text>
          </Flex>
          <InputGroup background={"white"} borderRadius={"10px"} w="full">
            <Input placeholder="Search" type="search"></Input>
            <InputRightElement>
              <Image src="https://www.jiomart.com/assets/version1664452279/smartweb/images/icons/search.svg"></Image>
            </InputRightElement>
          </InputGroup>
          <List
            mt={4}
            maxH="272px"
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
            key={uuidv4()}
          >
            {data.map((item) => (
              <ListItem w="full" key={uuidv4()} py="5px">
                <Checkbox size={"sm"}>{item["sub-list"]}</Checkbox>
              </ListItem>
            ))}
          </List>
        </ListItem>
      </List>
    );
  };
  