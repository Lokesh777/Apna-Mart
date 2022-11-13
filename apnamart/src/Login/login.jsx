import "./PhoneInput.css";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  PinInput,
  PinInputField,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useContext } from "react";
import { AuthContext } from "./loginContext";
import { Link, useNavigate } from "react-router-dom";
// import { async } from "@firebase/util";
import "../App.css";

export default function PhoneLogin() {
  const navigate = useNavigate();
  const { setUpCaptcha } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [temp, setTemp] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined) {
      return setError("Please enter a valid phone number!");
    }
    try {
      const res = await setUpCaptcha(number);
      console.log(res);
      setResult(res);

      setTemp(true);
    } catch (err) {
      setError(err.message);
    }
    console.log(number);
  };

  const varifyOTP = async (e) => {
    e.preventDefault();
    console.log(otp);
    setLoading(true);
    if (otp === "" || otp === null) return;
    try {
      setLoading(true);
      setError("");
      await result.confirm(otp);
      navigate("/dashboard");
      setLoading(false);
    } catch (err) {
      setError(err.mesage);
      setLoading(false);
    }
  };

  const skeletonFunction = () => {
    // setLoading(true)
    setTimeout(() => {
      // setLoading(true)
      navigate("/login");
    }, 3000);
    // setLoading(false)
  };
  if (loading) {
    return (
      <>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        // position={"center"}
        margin={"auto"}
        size="xl"
        position={"absolute"}
        ml="50%"
        mt="25%"
      />
      {/* <Skeleton>
         <Box w={"100%"} minHeight={"100%"}>&nbsp;</Box>
      </Skeleton> */}
      <Skeleton height={"100vh"} position={"relative"} ></Skeleton>
      </>
    );
  } else {
    return (
      <>
        <Box
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          w={"30%"}
          p={"6"}
          m={"auto"}
          mt={"36"}
        >
          <form
            onSubmit={handleOtpSubmit}
            style={{ display: !temp ? "block" : "none" }}
          >
            <FormControl isRequired>
              <Heading textAlign={"center"} mb={"4"}>
                Login with Phone
              </Heading>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              <Box>
                <FormLabel>Mobile No.</FormLabel>
                <PhoneInput
                  // className="phoneInputCSS"
                  defaultCountry="IN"
                  value={number}
                  onChange={setNumber}
                  placeholder="Enter Phone Number"
                />
              </Box>
              <Box id="recaptcha-container"></Box>
            </FormControl>
            <Box
              mt={2}
              w={"100%"}
              textAlign={"center"}
              display={"flex"}
              gap={"2rem"}
              justifyContent={"right"}
            >
              <Link to="/login">
                <Button mt={4} colorScheme="red" type="submit">
                  Cancel
                </Button>
              </Link>
              <Button mt={4} colorScheme="teal" type="submit">
                Send OTP
              </Button>
            </Box>
          </form>

          <form
            onSubmit={varifyOTP}
            style={{ display: temp ? "block" : "none" }}
          >
            <FormControl isRequired>
              <Heading textAlign={"center"} mb={"4"}>
                Enter OTP
              </Heading>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              <Box>
                <FormLabel>OTP</FormLabel>
                <PinInput onChange={(e) => setOtp(e)} otp>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </Box>
            </FormControl>
            <Box
              mt={2}
              w={"100%"}
              textAlign={"center"}
              display={"flex"}
              gap={"2rem"}
              justifyContent={"right"}
            >
              <Button
                onClick={skeletonFunction}
                mt={4}
                colorScheme="red"
                type="submit"
              >
                Cancel
              </Button>

              <Button mt={4} colorScheme="teal" type="submit">
                Verify OTP
              </Button>
            </Box>
          </form>
        </Box>
      </>
    );
  }
}

