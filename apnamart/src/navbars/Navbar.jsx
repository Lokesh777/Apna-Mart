import React from "react";
import styles from "../styles/Style.module.css";
import APNAMAT from "../logo/APNAMAT.jpeg";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUser } from "react-icons/hi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  HStack,
  Box,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.leftbar}>
          <Button
            className={styles.sidebtn}
            colorScheme="white"
            onClick={onOpen}
          >
            <GiHamburgerMenu fontSize={"40px"} color="white" />
          </Button>
          <Drawer placement={placement} onClose={onClose} isOpen={""}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <img className={styles.logoimage} src={APNAMAT} alt="Logo" />
        </div>
        <div className={styles.middlebar}>
          <input
            className={styles.inputbox}
            type="text"
            placeholder="Search essentials, groceries,and more ..."
          />
        </div>
        <div className={styles.rightbar}>
          <flex className={styles.flexbar}>
            <HiUser fontSize={"30px"} color="white" />
            <Text>Sign up/Sign in</Text>
          </flex>
          <flex className={styles.flexbar}>
            <CiShoppingCart fontSize={"30px"} color={"white"} />
            <Text>Cart</Text>
          </flex>
        </div>
      </nav>
      <div className={styles.secondiv}>
        {/* <Menu>
        <MenuButton as={Button} className="drop">Groceries</MenuButton>

        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>

         <MenuButton as={Button}>Groceries</MenuButton>
          <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList> 
        
      </Menu> */}

        <HStack
          borderRadius={"5px"}
          border="1px solid grey"
          justifyContent={"space-between"}
        >
          <Box display={"flex"} onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Box bg="RGBA(0, 0, 0, 0.16)" p="0.5vw">
              {" "}
              <Text color="#B61671">Groceries</Text>
            </Box>
          </Box>

          <Menu isOpen={isOpen} pos="absolute">
            <Box pos="relative" top="" zIndex={5}>
              <MenuList
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                w="20vw"
                mt="2vw">
                <MenuItem>Fruits & Vegetables</MenuItem>
                <MenuItem>Dairy & Bekery</MenuItem>
                <MenuItem>Staples</MenuItem>
                <MenuItem>Snacks & Branded Food</MenuItem>
                
              </MenuList>
            </Box>
          </Menu>
        </HStack>
      </div>
    </div>
  );
};

export default Navbar;
