import React from "react";
import { Box, Grid, Hide, Text } from "@chakra-ui/react";
import styles from "./Product.module.css";
const Routebar = () => {
  return (
    <Box>
      {/* <Hide breakpoint="(max-width: 120px)"> */}
        <Box className={styles.routeBar}>
          This text hides at the "md" value screen width and smaller.
        </Box>
        <Grid templateColumns={{
            base: "repeat(4,1fr)",
            sm: "repeat(4,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)"
          }}>
          <Box border="1px solid red" h="10px"></Box>
          <Box border="1px solid red"  h="10px"></Box>
          <Box border="1px solid red"  h="10px"></Box>
          <Box border="1px solid red"  h="10px"></Box>
        </Grid>
      {/* </Hide> */}
    </Box>
  );
};

export default Routebar;
