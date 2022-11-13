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

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

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
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack
            align={"flex-start"}
            textDecoration={"none"}
            color={"rgb(97, 97, 98)"}
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
            color={"rgb(97, 97, 98)"}
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
            align={"flex-start"}
            color={"rgb(97, 97, 98)"}
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
            <Link to={"#"}>
              Should you encounter any bugs, glitches, lack of functionality,
              delayed deliveries, billing errors or other problems on the beta
              website, please email us on cs@jiomart.com
            </Link>
            <Link to={"#"}>Law Enforcement</Link>
            <ListHeader color={"black"} fontSize={"bold"}>
              DOWNLOAD APPS
            </ListHeader>
            <Flex>
              <chakra.button
                bgColor={useColorModeValue("black")}
                color={useColorModeValue("white")}
                rounded={""}
                w={40}
                h={10}
                cursor={"pointer"}
                as={"c"}
                display={"inline-flex"}
                alignItems={"center"}
                justifyContent={"center"}
                transition={"background 0.3s"}
                _hover={{
                  bg: "",
                }}
                borderRadius={"10%"}
                Link="https://play.google.com/store/games"
              >
                Google Play
              </chakra.button>
              <chakra.button
                bgColor={useColorModeValue("black")}
                color={useColorModeValue("white")}
                rounded={""}
                w={40}
                h={10}
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
                borderRadius={"10%"}
                Link="https://play.google.com/store/games"
              >
                App store
              </chakra.button>
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
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari
            5.1.5+, Google Chrome 80+
          </Text>
          <Text>© 2022 All rights reserved. Reliance Retail Ltd</Text>
          
        </Container>
      </Box>
    </Box>
  );
}
