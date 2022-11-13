import axios from "axios"
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import {useContext} from "react";
import { TotalContext } from "../Context/TotalContext";
const Basket = () => {
 const [state , setState] = useState(false);
  const [cart, setCart] = useState([]);
  const {total , setTotal} = useContext(TotalContext);
  const cartData = async () =>{
    try{
      const res = await axios("http://localhost:8080/cart/9");
      const data = res.data;
      console.log(data[0].data);
      setCart(data[0].data);
      setState(!state);
    } 
    catch(e){
      console.log(e);
    }
        
  }
  let sum = total;
  for(let i=0;i<cart.length;i++){
    let a = cart[i].price.trim().split(' ');
    let count = cart[i].count;
    let p = +a[1] * (+count)
    sum = sum + p;
   
  }
  
  console.log(total);

  const postCart = async(ele) =>{
    let {image, button,title,price} = ele;
    console.log(image,button,title,price)
   console.log(ele)
    
    try{
     
     let res = await axios.post('http://localhost:8080/cart', {
        email: '9',
        data: 
         { 
           count : 1,
           image : image,
           button ,
           title,
           price 
          },
          
        
      })
      
     let data = res.data;
     setCart(data[0].data);
     
    } catch (e) {
      console.log(e)
    }
      
  }
  const delCart = async(ele) =>{
    let {image, button,title,price} = ele;
    console.log(image,button,title,price)
   console.log(ele)
    
    try{
     
     let res = await axios.post('http://localhost:8080/cart/del', {
        email: '9',
        data: 
         { 
           count : 1,
           image : image,
           button ,
           title,
           price 
          },
          
        
      })
      let data = res.data;
      setCart(data[0].data);
    } catch (e) {
      console.log(e)
    }
      
  }
  const addCart = (ele) =>{
    postCart(ele)
  }
  const deleteCart = (ele) =>{
    delCart(ele)
  }
  useEffect(() =>{
    cartData();
    let sum = 0;
    for(let i=0;i<cart.length;i++){
      let a = cart[i].price.trim().split(' ');
      let count = cart[i].count;
      let p = +a[1] * (+count)
      sum = sum + p;
    }
    setTotal(sum);
  },[cart.length])
  return (
    // -----------------Outer Box -------------
    <Box w={{lg:"59%", md:"90"}} 
    // border="1px solid red" 
    mt="5">
     {/* -----------------inner Box ------------- */}
      <Box w="95%" 
      // border="1px solid blue"
       m="auto">

        <Box w="93%" m="auto" mt="5" 
        // border="1px solid blue"
        >
 {/* -----------------Title Flex ------------- */}
 <Flex
          justifyContent={"space-between"}
          fontSize="18px"
          w="100%"
          m="auto"
          fontWeight={"300"}
          mt="2"
          fontFamily="Arial Black"
        >
          <Box display={"flex"} mb="3"
          >
            <Text>
              Groceries Basket
             </Text>
             <Text>(items)</Text>
          </Box>
          <Box>
            <Text>Price</Text>
          </Box>
        </Flex>

         {/* -----------------Notification Flex------------- */}
        <Flex borderRadius={"2"}>
          <Image src="" alt="" />
          <Text fontSize={"12px"}
          fontWeight="500" 
          bg="#B5EDF6"
          textAlign={"start"} 
          borderRadius="5">
            
            Shop groceries worth ₹1499 & get sugar at ₹9 (Offer is applicable
            only on products sold by Reliance Retail . For specific exclusions &
            offer details refer  <a> T&C</a>)
          </Text>
        </Flex>
        </Box>
        


         {/* -----------------Item Box ------------- */}

         {cart.map((cart) => (
               <Flex w="93%" 
               //boxShadow ="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
               border="1px solid grey"
              //  border="1px solid red"

m="auto" mt="1" p="2">
                 
                 <Box w="15%"     //  border="1px solid blue"
                 >
                 <Image src={cart.image} alt={cart.title} />
                
                 </Box>
                  <Box 
                  // border="1px solid blue"

                  textAlign="start" 
                   w="85%" pl="4" fontWeight="500">
                     <Text fontSize={"16px"} pb="2"
                     
                    //  border="1px solid red" 
                     mt="5">
                       {cart.title}
                     </Text>
                     <Text fontSize={"18px"} >  {cart.price}</Text>
                     
                    <Box >
                    <Text mt="1" fontSize={"12px"}>
                     sold by <Link color="#008ECC" textDecoration={"underline"}>Relience</Link>
                     </Text>
                     <Flex justifyContent={"end"} gap="3" pr="2"
                     
                     >
                       <Box w="32px" h="32px" bg="#008ECC" borderRadius={"50%"} onClick={() => deleteCart(cart)} >
                       <MinusIcon  color={"white"} boxSize="5" ml="1.5"/>
                      
                       </Box>
                       <Text fontSize={"18px"}>{cart.count}</Text>
                       <Box w="32px" h="32px" bg="#008ECC" borderRadius={"50%"} onClick={() => addCart(cart)} >
                       
                       <AddIcon color={"white"} boxSize="5" ml="1.5" />
                       </Box>
                        
                     </Flex>
                    </Box>
                     
                 </Box>
     
               </Flex>
     
              ))}
         

      </Box>
    </Box>
  );
};

export default Basket;
