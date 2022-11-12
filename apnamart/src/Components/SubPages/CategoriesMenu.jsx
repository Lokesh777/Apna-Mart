import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, List, ListItem, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const CategoryMenu = ({ data, name }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <List color={"#6f7284"} key={uuidv4()}>
      <ListItem key={uuidv4()} py="4px">
        <Flex
          align={"center"}
          _hover={{ color: "black" }}
          onClick={onToggle}
          cursor="pointer"
        >
          <ChevronRightIcon /> <Text>{name}</Text>
        </Flex>
        <List ml="16px" display={isOpen ? "block" : "none"} key={uuidv4()}>
          {data.map((list) => (
            <ListItem
              _hover={{ color: "black" }}
              cursor="pointer"
              key={uuidv4()}
            >
              <Link>{list["sub-menu 1"]}</Link>
            </ListItem>
          ))}
        </List>
      </ListItem>
    </List>
  );
};
