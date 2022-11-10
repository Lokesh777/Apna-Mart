import React from "react";
import styles from "../styles/Style.module.css";
import APNAMAT from "../logo/APNAMAT.jpeg";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUser } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
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
  chakra,
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
  Flex,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenOne, onOpenTwo, onCloseThree } = useDisclosure();
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
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                borderBottomWidth="1px"
                background={"rgb(0, 38, 49)"}
              >
                <Flex>
                  <FaUserCircle color={"white"} />
                  <Text
                    fontSize={"1rem"}
                    color={"white"}
                    marginLeft={"4"}
                    marginRight={"44%"}
                  >
                    Hello, Sign in
                  </Text>
                  <FiX color={"white"} />
                </Flex>

                <Flex marginTop={"5%"}>
                  <chakra.button
                    bgColor={useColorModeValue("rgb(0, 38, 49)")}
                    color={useColorModeValue("white")}
                    border={"1px solid whitesmoke"}
                    rounded={""}
                    w={40}
                    h={8}
                    cursor={"pointer"}
                    as={"c"}
                    display={"inline-flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    transition={"background 0.3s"}
                    _hover={{
                      bg: "",
                    }}
                    Link="https://play.google.com/store/games"
                  >
                    Google Play
                  </chakra.button>
                  <chakra.button
                    bgColor={useColorModeValue("rgb(0, 38, 49)")}
                    color={useColorModeValue("white")}
                    border={"1px solid whitesmoke"}
                    rounded={""}
                    w={40}
                    h={8}
                    cursor={"pointer"}
                    as={"c"}
                    display={"inline-flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    transition={"background 0.3s"}
                    _hover={{
                      bg: "",
                    }}
                    marginLeft={"5%"}
                  >
                    App store
                  </chakra.button>
                </Flex>
              </DrawerHeader>
              <DrawerBody fontSize={"0.9rem"} marginBottom={"5%"}>
                <Link to={"#"}>Staples</Link>
                <br />
                <Link to={"#"}>Bervergea</Link>
                <br />
                <Link to={"#"}>Personal Care</Link>
                <br />
                <Link to={"#"}>Home Care</Link>
                <br />
                <Link to={"#"}>Fruits and Vegetables</Link>
                <br />
                <Link to={"#"}>Baby Care</Link>
                <br />
                <Link to={"#"}>Snacks & Branded Foods</Link>
                <br />
                <Link to={"#"}>Dairy & Bakery</Link>
              </DrawerBody>

              <DrawerBody
                fontSize={"0.9rem"}
                marginTop={"-1%"}
                marginBottom={"-11%"}
                borderBottom={"2px solid balck"}
                borderTop={"4px solid rgb(213, 219, 219)"}
              >
                <Link to={"#"}>My Account</Link>
                <br />
                <Link to={"#"}>Need Help</Link>
                <br />
                <Link to={"#"}>About</Link>
                <br />
                <Link to={"#"}>Guide</Link>
              </DrawerBody>

              <DrawerBody
                fontSize={"0.9rem"}
                marginTop={"-12%"}
                borderTop={"4px solid rgb(213, 219, 219)"}
              >
                <Text fontStyle={"bold"}>
                  <b>CONTACT US</b>
                </Text>
                <Link to={"#"}>WhtasApp us : 70003 70003</Link>
                <br />
                <Link to={"#"}>Call Us : 1800 890 1222</Link>
                <br />
                <Link to={"#"}>8:00 AM to 8:00 PM, 365 days</Link>
                <br />
                <Link to={"#"}>
                  Please note that you are accessing the BETA Version of
                  www.jiomart.com
                </Link>
                <br />
                <Link to={"#"}>
                  Should you encounter any bugs, glitches, lack of
                  functionality, delayed deliveries, billing errors or other
                  problems on the beta website, please email us on
                  cs@jiomart.com
                </Link>
                <br />
                <Text marginTop={"7%"}>
                  <b>DOWNLOAD APP</b>
                </Text>

                <Flex width={"45%"} >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHUwqPViAb_9pi_Qfp_JfWqbIYfb2RqD68A&usqp=CAU" alt="" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIxqWzg96N3lKYiagEsP6XZBgjUZhCe_Y5g&usqp=CAU" alt="" />
                
                </Flex>
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
            <Text marginTop={"3%"} marginLeft={"2"}>
              Sign up/Sign in
            </Text>
          </flex>
          <flex className={styles.flexbar}>
            <CiShoppingCart fontSize={"30px"} color={"white"} />
            <Text marginTop={"5%"} marginLeft={"2"}>
              Cart
            </Text>
          </flex>
        </div>
      </nav>
      <div className={styles.secondiv}>
        <Flex fontSize={"14"} width={"8%"} marginLeft={"9"}>
          <HiLocationMarker fontSize={"30"} color={"grey"} />
          <Text marginLeft={"2"}>
            Deliver to <b>400020</b>
          </Text>
        </Flex>

        <details>
          <summary>Groceries</summary>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Bekery</p>
          <p>Staples</p>
          <p>Snacks & Branded Food</p>
        </details>

        <details>
          <summary>Premium Fruits</summary>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Bekery</p>
          <p>Staples</p>
          <p>Snacks & Branded Food</p>
        </details>

        <details>
          <summary>Home & Kitchen</summary>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Bekery</p>
          <p>Staples</p>
          <p>Snacks & Branded Food</p>
        </details>
        <details>
          <summary>Fashion</summary>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Bekery</p>
          <p>Staples</p>
          <p>Snacks & Branded Food</p>
        </details>
        <details>
          <summary>Beauty</summary>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Bekery</p>
          <p>Staples</p>
          <p>Snacks & Branded Food</p>
        </details>
        <details>
          <summary>Home Improvement</summary>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Bekery</p>
          <p>Staples</p>
          <p>Snacks & Branded Food</p>
        </details>
        <details>
          <summary>Sports, Toys & Luggage</summary>
          <p>Fruits & Vegetables</p>
          <p>Dairy & Bekery</p>
          <p>Staples</p>
          <p>Snacks & Branded Food</p>
        </details>
        
      </div>
    </div>
  );
};

export default Navbar;
