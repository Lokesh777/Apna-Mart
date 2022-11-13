import { Alert, Box, Button, Flex, FormControl, HStack, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./login.module.css"

// import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
// import { useUserAuth } from "./loginContext";

const Login = () =>{
    const [authid, setAuthId] = useState(null)
  //   const [error, setError] = useState("");
  // const [number, setNumber] = useState("");
  // const [flag, setFlag] = useState(false);
  // const [otp, setOtp] = useState("");
  // const [result, setResult] = useState("");
  // // const { setUpRecaptha } = useUserAuth();
  // const navigate = useNavigate();

  // const getOtp = async (e) => {
  //   e.preventDefault();
  //   console.log(number);
  //   setError("");
  //   if (number === "" || number === undefined)
  //     return setError("Please enter a valid phone number!");
  //   try {
  //     const response = await setUpRecaptha(number);
  //     setResult(response);
  //     setFlag(true);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  // const verifyOtp = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   if (otp === "" || otp === null) return;
  //   try {
  //     await result.confirm(otp);
  //     navigate("/home");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  


return (
    <>
    <Box>
     <Flex>
          <Box className={styles.imageDiv}>
            <Image className={styles.imagetag} src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="login" />
          </Box>
          <Box className={styles.formDiv}>
           
           
                <Box gap={"1rem"}>
                <Text fontWeight={"600"} fontSize={{ base: '18px', md: '22px', lg: '26px' }}> 
                        Sign in
                    </Text>
                 <Text fontSize={{ base: '12px', md: '14px', lg: '16px' }}> 
                       
                        Sign in to access your Orders, Offers and Wishlist.
                    </Text>
                </Box>
                <Box>
                {authid === null ?
                    <>
                    <FormControl component="form" sx={{ p: 3, display: 'flex', justifyContent: 'center' }} noValidate id="login-form" 
                    // onSubmit={handleSendOTPForm}
                    >
                        <HStack elevation={3} sx={{ p: 3 }}>
                        {/* <Input id="phonenumber" name="phonenumber" required fullWidth margin='normal' label='Phone Number' /> */}
                        <PhoneInput
                            defaultCountry="IN"
                            // value={number}
                            // onChange={setNumber}
                            placeholder="Enter Phone Number"
                            />
                        <br />
                        <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
                            <Button  type='submit' variant='contained' bg={"skyblue"} color="error">Send OTP</Button>
                        </Box>
                        {/* {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''} */}
                        </HStack>
                    </FormControl>
                    </>
                    :
                    <>
                    <FormControl component="form" sx={{ p: 3, display: 'flex', justifyContent: 'center' }} noValidate id="verify-otp-form" 
                    // onSubmit={handleVerifyOTPForm}
                    >
                        <HStack elevation={3} sx={{ p: 3 }}>
                        <Input id="otpcode" name="otpcode" required fullWidth margin='normal' label='Enter OTP' />
                        <br />
                        <Box sx={{ m: 2, display: 'flex', justifyContent: 'center' }}>
                            <Button type='submit' variant='contained' color="info">Verify</Button>
                        </Box>
                        {/* {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''} */}
                        </HStack>
                    </FormControl>
                    </>}
                </Box>        
            
          

          </Box>
     </Flex>

    </Box>

    </>
)

}
export default Login;