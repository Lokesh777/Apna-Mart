import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Alert,
    AlertIcon
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import {useContext} from "react";
import { TotalContext } from '../Context/TotalContext';
import { useNavigate} from "react-router-dom"

// import style from "./signup.module.css"

  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [move, setMove] = useState(false);
    const {emails , setEmails} = useContext(TotalContext);
    const [name,setName] =useState()
    const [email,setEmail] =useState()
    // const [data,setData] = useState()
    const [password,setPassword] =useState()
   const navigate = useNavigate();
const signup= async() =>{
    let res = await axios.post("https://apnamart-backend.onrender.com/auth/signup",{ 
         name,email,password
    })
    let data = res.data;
    setEmails(data);
   
    if(data !== email){

      alert(`${data}`);
    }else{
      alert(`Sign up Successful..!`);

    }
    
    console.log(data);
}
const login= async() =>{
    let res = await axios.post("https://apnamart-backend.onrender.com/auth/login",{ 
         email,password
    })
    let data = res.data;
    setEmails(data);
     if(data !== email){
      {alert(`${data}`)} }else{
        navigate("/")
      }
      
  //   return <>
  //   <Alert status='error'>
  //   <AlertIcon />
  //   There was an error processing your request
  // </Alert>
  //   </>  
 
    console.log(data);
}

//Signup
const submitSignup = () =>{
    signup()
}


    //login
 const SubmitLogin = () => {
     login()
 }
//  if(email === emails){

//  }

    return (
      <Flex
      // className={style.MainDiv}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('#002631', 'gray.800')}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
           
        >
          <Stack align={'center'}>

          {!move ?
            <Heading fontSize={'4xl'} textAlign={'center'} color={"white"} >
            Log In
            </Heading> 
            : 
           <Heading fontSize={'4xl'} textAlign={'center'} color={"white"} >
              Sign up
            </Heading> }

            
            <Text fontSize={'lg'} color={"white"} >
              to enjoy all of our cool features 
            </Text>
          </Stack>

        

          {!move ? 
                                (
                                <Box color={"white"}
                                bg={"#04303c"}
                                boxShadow = {"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}
                                p={16}
                                >
                                   <FormControl  id="email" isRequired>
                                        <FormLabel>Email address</FormLabel>
                                        <Input 
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        type="email" />
                                      </FormControl>
                                      <FormControl id="password" isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                          <Input
                                          value ={password}
                                           onChange={(e)=>setPassword(e.target.value)}
                                          type={showPassword ? 'text' : 'password'} />
                                          <InputRightElement h={'full'}>
                                            <Button
                                            variant={'ghost'}
                                              onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                              }>
                                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                          </InputRightElement>
                                        </InputGroup>
                                      </FormControl>
                                      <Stack spacing={10} pt={2}>
                                        <Button
                                         onClick={SubmitLogin}
                                          loadingText="Submitting"
                                          size="lg"
                                          bg={'white'}
                                          color={'#064556'}
                                          _hover={{
                                            bg: 'white.500',
                                          }}>
                                          Log in
                                        </Button>
                                      </Stack>
                                      <Stack pt={6}>
                                        <Text align={'center'}>
                                        Don’t have an account?  
                                          <Link
                                           marginLeft="1rem"
                                            color={'blue.400'}
                                            onClick={() => {setMove(true)}}
                                            >SIGNUP</Link>
                                        </Text>
                                      </Stack>

                                    
                                </Box>
                                ) 
                                : (
                                    <Box color={"white"}
                                    rounded={'lg'}
                                    // bg={useColorModeValue('white', 'gray.700')}
                                    bg={"#04303c"}
                                    boxShadow = {"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}
                                  
                                    // boxShadow={'lg'}
                                    p={16}>
                                    <Stack spacing={4}>
                                      {/* <HStack>
                                        <Box>
                                        
                                        </Box>
                                        <Box>
                                          <FormControl id="lastName">
                                            <FormLabel>Last Name</FormLabel>
                                            <Input type="text" />
                                          </FormControl>
                                        </Box>
                                      </HStack> */}
                                      <FormControl id="firstName" isRequired>
                                            {/* <FormLabel>Name</FormLabel> */}
                                            <Input type="text"
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)}
                                             placeholder="Full Name"
                                            />
                                          </FormControl>

                                      <FormControl id="email" isRequired>
                                        {/* <FormLabel>Email address</FormLabel> */}
                                        <Input type="email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        placeholder="Email Address"
                                        />
                                      </FormControl>

                                      <FormControl id="firstName" isRequired>
                                            {/* <FormLabel>Age</FormLabel> */}
                                            <Input type="number"
                                            placeholder="Mobile Number"
                                            />
                                          </FormControl>

                                      <FormControl id="password" isRequired>
                                        {/* <FormLabel>Password</FormLabel> */}
                                        <InputGroup>
                                          <Input 
                                           value={password}
                                           onChange={(e)=>setPassword(e.target.value)}
                                          type={showPassword ? 'text' : 'password'}
                                          placeholder="Password"
                                          />
                                          <InputRightElement h={'full'}>
                                            <Button
                                              variant={'ghost'}
                                              onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                              }>
                                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                          </InputRightElement>
                                        </InputGroup>
                                      </FormControl>
                                      <Stack spacing={10} pt={2}>
                                        <Button
                                        onClick={submitSignup}
                                          loadingText="Submitting"
                                          size="lg"
                                          bg={'white'}
                                          color={'#064556'}
                                          _hover={{
                                            bg: 'white.500',
                                          }}>
                                          Sign up
                                        </Button>
                                      </Stack>

                                      <Stack pt={6}>
                                        <Text align={'center'} >
                                          Already a user? 
                                          <Link
                                            marginLeft={"1rem"}
                                            color={'blue.400'}
                                            onClick={() => {setMove(false)}}
                                            >Login</Link>
                                        </Text>
                                      </Stack>
                                    </Stack>
                                  </Box>
                                )}
                    
        </Stack>
      </Flex>
    );
  }