import { VStack, Input, useToast, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertPop from "./AlertPop";
import Stats from "./Stats";

export default function Builder() {
  const toast = useToast();
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    toast({
      title: "Submitted",
      status: "success",
      duration: 3000,
      isClosable: true
    });
    setData(data);
  };

  console.log(data);
  console.log(errors);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <Input
            type="text"
            placeholder="First name"
            {...register("firstname", {
              required: "Please enter first name",
              minLength: 3,
              maxLength: 80
            })}
          />
          {errors.firstname && <AlertPop title={errors.firstname.message} />}
          <Input
            type="text"
            placeholder="Last name"
            {...register("lastname", {
              required: "Please enter Last name",
              minLength: 3,
              maxLength: 100
            })}
          />
          {errors.lastname && <AlertPop title={errors.lastname.message} />}
          <Input
            type="Email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter Email2",
              minLength: { value: 8, message: "Too short" }
            })}
          />
          {errors.email && <AlertPop title={errors.email.message} />}
          <Input
            type="Address"
            placeholder="Address"
            {...register("address", {
              required: "Please enter Address2",
              minLength: { value: 8, message: "Too short" }
            })}
          />
          {errors.address && <AlertPop title={errors.address.message} />}

          <Button
            borderRadius="md"
            bg="cyan.600"
            _hover={{ bg: "cyan.200" }}
            variant="ghost"
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </form>
      {data && (
        <Stats
          Firstname={data.firstname}
          Lastname={data.lastname}
          email={data.email}
          address={data.address}
        />
      )}
    </Box>
  );
}
