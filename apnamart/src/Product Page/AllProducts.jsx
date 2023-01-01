
import axios from "axios"
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { TotalContext } from "../Context/TotalContext";

const AllProducts = ({headerImage , cartdata}) => {


  // ------------ Posting the Cart Data --------------
   const postCart = async(ele) =>{
    let {image, button,title,price} = ele;
    // console.log(image,button,title,price)
  //  console.log(ele)s
    
    try{
     
      axios.post('https://apnamart-backend.onrender.com/cart', {
        email: '12',
        data: 
         { 
           count : 1,
           image : image,
           button ,
           title,
           price 
          },
          
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (e) {
      console.log(e)
    }
      
  }
  // --------- Posted the Cart Data Successfully ----------

  const [fruit, setFruit] = useState([]);
  const [category, setCategory] = useState("fruitAndVegi")
  const [state ,
    //  setState
  ] = useState(true);

  const toggleButton = (ele) =>{
    postCart(ele)
    alert(`${ele.title} Added to cart`)
  }
  const {query} = useContext(TotalContext)  

  const getData = async () =>{
     try{
        let res = await axios(`https://apnamart-backend.onrender.com/products?type=${category}&q=${query}`);
        let data = res.data;
  
        // let freshFruis = data[0].freshFruis;
        console.log(data,"adat hai data ki");
        let fruit = data;
         setFruit(fruit);
     } 

      

     catch (e) {
         console.log(e);
     } 
     finally {

     }
  }

  useEffect(() =>{
   getData();
  },[])

  
  // const [items, setItems] = useState([]);

  // const items = JSON.parse(localStorage.getItem('ProductName'));
 
// console.log("get back to home",items);

  return (
      <Box w="97%"  m="auto">
        <Heading marginTop={"2rem"} mb="26px" fontSize={"16px"} mt="1">All Products</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(3,1fr)",
            xl : "repeat(4,1fr)",
            '2xl' : "repeat(4,1fr)",
          }}
          gap="1vw"
          w="100%"
          
        >
          {fruit.map((ele, i) => (
            <Box key={i} borderRadius={"8px"} border="1px solid grey" >
              <Box w="160px" h="160px" m="auto"  mt="5" >
                <Image
                  _hover={{ w: "160px", h: "160px", transition: "0.4s", cursor:"pointer"}}
                  src={ele.image}
                  alt={ele.title}
                  w="150px"
                  h="150px"
                  // border="1px solid red"
                />
              </Box>

              <Box h="36px" mt="10">
                <Text
                  fontFamily={"Arial Black"}
                  textAlign="start"
                  fontSize={{lg:"1vw",md:"12px", sm:"10px", base:"10px"}}
                >
                  {ele.title}
                </Text>
              </Box>

              <HStack h="37px">
                <Text fontSize={{lg:"1vw",md:"12px", sm:"10px", base:"10px"}}>M.R.P: </Text>
                <Text fontSize={{lg:"16px",md:"14px", sm:"12px", base:"10px"}} fontFamily="Arial Black">
                  {" "}
                  {ele.price}
                </Text>
              </HStack>
              {state ? 
                <Box
                bg=" #008ECC"
                w="144px"
                h="37px"
                fontSize={"14px"}
                margin="auto"
                fontFamily="Arial Black"
                borderRadius={"4px"}
                color="white"
                display={"flex"}
               gap="5"
                mb="7"
                mt="4"
              _hover={{cursor:"pointer"}}
              onClick = {() =>toggleButton(ele)}
              >
               
                <Text ml="3" mt="2" >
                  Add to Cart{" "}
                </Text>
               
                
                <AddIcon
                  borderRadius={"50%"}
                  border="1px solid grey"
                  p="3px"
                  boxSize="5"
                  mt="2"
                />
                
                
              </Box> :
              <Box
              bg="white"
              w="144px"
              h="37px"
              fontSize={"14px"}
              margin="auto"
              fontFamily="Arial Black"
              borderRadius={"4px"}
              color="white"
              display={"flex"}
             gap="5"
              mb="7"
              mt="4"
            _hover={{cursor:"pointer"}}
            onClick = {toggleButton}
            >
           <AddIcon
                borderRadius={"50%"}
                border="1px solid grey"
                p="3px"
                boxSize="5"
                mt="2"
                color="#008ECC"
              />
            </Box>
              }

            </Box>
          ))}
        </Grid>
      </Box>
  );
};

export default AllProducts;
