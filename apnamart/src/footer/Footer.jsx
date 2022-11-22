import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, to }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      to={to}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
     p={5}
      // border={"1px solid red"}   
          bg={useColorModeValue("#002631", "gray.900")}
      // color={useColorModeValue("gray.700", "gray.200")}
      
    
      
    >
      <Container 
      as={Stack} 
      maxW={"6xl"}
        // py={10}
        height={"20rem"}
        width={"100%"}
        
        >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack
            align={"flex-start"}
            textDecoration={"none"}
            color={"white"}
            fontFamily={"sans-serif"}
            fontSize={"0.8rem"}
          >
            <ListHeader>MOST POPULAR CATEGORIES</ListHeader>
            <Link to={"#"}>Staples</Link>
            <Link to={"#"}>Bervergea</Link>
            <Link to={"#"}>Personal Care</Link>
            <Link to={"#"}>Home Care</Link>
            <Link to={"#"}>Fruits and Vegetables</Link>
            <Link to={"#"}>Baby Care</Link>
            <Link to={"#"}>Snacks & Branded Foods</Link>
            <Link to={"#"}>Dairy & Bakery</Link>
          </Stack>

          <Stack
            align={"flex-start"}
            color={"white"}
            fontFamily={"sans-serif"}
            fontSize={"0.8rem"}
          >
            <ListHeader>CUSTOMER SERVICES</ListHeader>
            <Link to={"https://www.jiomart.com/about-us"}>About Us</Link>
            <Link to={"#"}>FAQ</Link>
            <Link to={"#"}>Terms and conditions</Link>
            <Link to={"#"}>Privacy policy</Link>
            <Link to={"#"}>E-waste Policy</Link>
            <Link to={"#"}>Cancellation and return policy</Link>
          </Stack>

          <Stack
          // alignItems={"self-start"}
            align={"flex-start"}
            color={"white"}
            fontFamily={"sans-serif"}
            fontSize={"0.8rem"}
          >
            <ListHeader>CONTACT US</ListHeader>
            <Link to={"#"}>WhtasApp us : 70003 70003</Link>
            <Link to={"#"}>Call Us : 1800 890 1222</Link>
            <Link to={"#"}>8:00 AM to 8:00 PM, 365 days</Link>
            <Link to={"#"}>
              Please note that you are accessing the BETA Version of
              www.jiomart.com
            </Link>
            <Link to={"#"} >
              Should you encounter any bugs, glitches, lack of functionality,
              delayed deliveries, billing errors or other problems on the beta
              website, please email us on cs@apnamart.com
            </Link>
            <Link to={"#"}>Law Enforcement</Link>
            <ListHeader color={"white"} fontSize={"bold"}>
              DOWNLOAD APPS
            </ListHeader>
            <Flex width={"35%"} >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHUwqPViAb_9pi_Qfp_JfWqbIYfb2RqD68A&usqp=CAU" alt="" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIxqWzg96N3lKYiagEsP6XZBgjUZhCe_Y5g&usqp=CAU" alt="" />
                
                </Flex>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"} 
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"} fontSize={"14px"}
          py={4} marginTop={"1rem"}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text color={"white"}>
            Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari
            5.1.5+, Google Chrome 80+
          </Text>
          <Text color={"white"}>© 2022 All rights reserved. Reliance Retail Ltd</Text>
          
        </Container>
      </Box>
    </Box>
  );
}
