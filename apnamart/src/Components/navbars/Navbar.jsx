import React, { useReducer, useState } from "react";
import styles from "../../styles/Style.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUser } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
// import data from "../../Product Page/freshFruits.json";


import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Text,
  useColorModeValue,
  chakra,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Hide,
  Input,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom"
import { SearchReducer } from "../Reducer/reducer";
import { SearchProd } from "../Reducer/action";

const initValue = {
  isLoading: false,
  isError: false,
  data: [],
  token: ""
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  const {
    // isOpenOne,
    onOpenTwo, onCloseThree } = useDisclosure();
  const [placement,
    //  setPlacement
  ] = React.useState("left");

  const [state, dispatch] = useReducer(SearchReducer, initValue);

  const [prod,setProd] = useState("");

  // console.log(state.data.map((ele)=>ele.title),"Data is Here")

  const GoToSearch = (title) =>{
    let bag = title||[]
    localStorage.setItem('ProductName', bag);
    navigate("product");
  }

  const SearchReturn = (item) => {
    
    return(<div className={styles.searchData} 
  onClick={()=>GoToSearch(item.title)}
  key={item.title}> {item.title}</div>
)}

  return (
    <div className={styles.mainNavbar}>
          {state.isLoading && <h3>...Loading</h3>}
      {state.isError && <h3>Something went wrong....</h3>}

      

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
                  <FiX onClick={onClose} color={"white"} />
                </Flex>

                <Flex marginTop={"5%"}>
                  <chakra.button
                    bgColor={useColorModeValue("rgb(0, 38, 49)")}
                    color={useColorModeValue("white")}
                    // border={"1px solid whitesmoke"}
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
                    // border={"1px solid whitesmoke"}
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

                <Flex width={"45%"}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHUwqPViAb_9pi_Qfp_JfWqbIYfb2RqD68A&usqp=CAU"
                    alt=""
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIxqWzg96N3lKYiagEsP6XZBgjUZhCe_Y5g&usqp=CAU"
                    alt=""
                  />
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          {/* logo image  */}
          <Link to="/">
            <img className={styles.logoimage} src="apnamart.gif" alt="Logo" />
          </Link>

        </div>

        {/* search box */}
        <div className={styles.middlebar}>
          <Hide below={"md"}>
            <Flex>
            
             <Input
             value={prod}
             onChange={(e)=>setProd(e.target.value)}
              className={styles.inputbox}
              type="text"
              placeholder="Search essentials, groceries,and more ..."
            />
              <Button  
              onClick={()=>SearchProd(dispatch,prod)}
              className={styles.inputboxBtn}
              // colorScheme='teal'/
               variant='outline'>
               <SearchIcon color='white' />
              </Button>

              </Flex>
          </Hide>
        </div>

        {/* login and cart */}
        <div className={styles.rightbar}>
          <Link to="/login" >   <flex className={styles.flexbar}>
            <HiUser fontSize={"25px"} color="white" />

            <Text marginTop={"3%"} >
              Login
            </Text>
          </flex>  </ Link>

          <flex className={styles.flexbar}>
            <CiShoppingCart fontSize={"30px"} color={"white"} />
            <Link to="/cart">
              <Text marginTop={"5%"} marginLeft={"2"}>
                Cart
              </Text>
            </Link>

          </flex>
        </div>
      </nav>
       
      <div className={styles.ResultBox}>
        {state.data.map(SearchReturn)}
      </div>

      <div className={styles.secondiv}>
        <Flex fontSize={"14"} gap={{ lg: "5px" }} width={"8%"} marginLeft={{ lg: "10px", md: "5px", sm: "2px" }}>
          <HiLocationMarker fontSize={"30px"} color={"grey"} />
          <Text
            marginLeft={{ lg: "10px", md: "5px", sm: "2px" }}
            fontSize={{ lg: "14px", md: "12px", sm: "10px" }}
          >
            Deliver to 400020
          </Text>
        </Flex>

        <Menu isOpen={onOpenTwo} >
          <MenuButton
            // border={"1px solid red"}

            fontSize={{ lg: "14px", md: "12px", sm: "10px", base: "10px" }}
            variant="ghost"
            mx={{ lg: 4, md: 3, sm: 3, base: 0 }}
            // py={[1, 2, 2]}
            // px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpenTwo}
            onMouseLeave={onCloseThree}
          >
            Groceries{onOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseThree}>
            <Link to="/product"><MenuItem>Fruits & Vegetables</MenuItem> </Link>

            <MenuItem>Dairy & Bekery</MenuItem>
            <MenuItem>Staples</MenuItem>
            <MenuItem>Snacks & Branded Food</MenuItem>
          </MenuList>
        </Menu>


        <Menu isOpen={onOpenTwo}>
          <MenuButton
            // border={"1px solid red"}
            fontSize={{ lg: "14px", md: "12px", sm: "10px", base: "10px" }}
            variant="ghost"
            mx={{ lg: 4, md: 3, sm: 3, base: 0 }}
            // py={[1, 2, 2]}
            // px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpenTwo}
            onMouseLeave={onCloseThree}
          >
            Premium Fruits{onOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseThree}>
            <MenuItem>Apple & Pears</MenuItem>
            <MenuItem>Avocado,Peach,Plum</MenuItem>
            <MenuItem>Banana,Melons & Coconut</MenuItem>
            <MenuItem>Cherries,Berries & Exotc Fruits</MenuItem>
          </MenuList>
        </Menu>

        <Menu isOpen={onOpenTwo}>
          <MenuButton
            // border={"1px solid red"}
            fontSize={{ lg: "14px", md: "12px", sm: "10px", base: "10px" }}
            variant="ghost"
            mx={{ lg: 4, md: 3, sm: 3, base: 0 }}
            // py={[1, 2, 2]}
            // px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpenTwo}
            onMouseLeave={onCloseThree}
          >
            Home & Kitchen{onOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseThree}>
            <MenuItem>Bathroom & Laundry Accessories</MenuItem>
            <MenuItem>Furnishing</MenuItem>
            <MenuItem>Staples</MenuItem>
            <MenuItem>Furniture</MenuItem>
          </MenuList>
        </Menu>

        <Menu isOpen={onOpenTwo}>
          <MenuButton
            // border={"1px solid red"}
            fontSize={{ lg: "14px", md: "12px", sm: "10px", base: "10px" }}
            variant="ghost"
            mx={{ lg: 4, md: 3, sm: 3, base: 0 }}
            // py={[1, 2, 2]}
            // px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpenTwo}
            onMouseLeave={onCloseThree}
          >
            Fashion{onOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseThree}>
            <MenuItem>Fruits & Vegetables</MenuItem>
            <MenuItem>Dairy & Bekery</MenuItem>
            <MenuItem>Staples</MenuItem>
            <MenuItem>Snacks & Branded Food</MenuItem>
          </MenuList>
        </Menu>

        <Menu isOpen={onOpenTwo}>
          <MenuButton
            // border={"1px solid red"}
            fontSize={{ lg: "14px", md: "12px", sm: "10px", base: "10px" }}
            variant="ghost"
            mx={{ lg: 4, md: 3, sm: 3, base: 0 }}
            // py={[1, 2, 2]}
            // px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpenTwo}
            onMouseLeave={onCloseThree}
          >
            Beauty{onOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseThree}>
            <MenuItem>Make-Up</MenuItem>
            <MenuItem>Hair</MenuItem>
            <MenuItem>Fragrance</MenuItem>
            <MenuItem>Personal Care</MenuItem>
            <MenuItem>Mom & Baby</MenuItem>
            <MenuItem>Men's Grooming</MenuItem>
            <MenuItem>Tools & Appliances</MenuItem>
            <MenuItem>Covid Essesntials</MenuItem>
            <MenuItem>Wellness</MenuItem>
            <MenuItem>Fitness</MenuItem>
          </MenuList>
        </Menu>


        <Menu isOpen={onOpenTwo}>
          <MenuButton
            // border={"1px solid red"}
            fontSize={{ lg: "14px", md: "12px", sm: "10px", base: "10px" }}
            variant="ghost"
            mx={{ lg: 4, md: 3, sm: 3, base: 0 }}
            // py={[1, 2, 2]}
            // px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpenTwo}
            onMouseLeave={onCloseThree}
          >
            Home Improvement{onOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseThree}>
            <MenuItem>Auto Care</MenuItem>
            <MenuItem>Building Supplies & Measuring Tools</MenuItem>
            <MenuItem>Carpentry</MenuItem>
            <MenuItem>Electrical</MenuItem>
            <MenuItem>Hardware & plumbing</MenuItem>
            <MenuItem>Home Cleaning & Orgianisation</MenuItem>
            <MenuItem>Industrial & Scientifc Supplies</MenuItem>
            <MenuItem>Packaging Supplies</MenuItem>
          </MenuList>
        </Menu>

        <Menu isOpen={onOpenTwo}>
          <MenuButton
            // border={"1px solid red"}
            fontSize={{ lg: "14px", md: "12px", sm: "10px", base: "10px" }}
            variant="ghost"
            mx={{ lg: 4, md: 3, sm: 3, base: 0 }}
            // py={[1, 2, 2]}
            // px={4}
            borderRadius={5}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
            aria-label="Courses"
            fontWeight="normal"
            onMouseEnter={onOpenTwo}
            onMouseLeave={onCloseThree}
          >
            Sports, Toys & Luggage{onOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </MenuButton>
          <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseThree}>
            <MenuItem>Toys & Games</MenuItem>
            <MenuItem>Bags & Travel Lugguge</MenuItem>
            <MenuItem>Soprting Goods & Fitness Equipment</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
