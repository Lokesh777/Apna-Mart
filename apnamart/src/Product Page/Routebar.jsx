import React from "react";
import { Box, Grid, Hide, Show, Text } from "@chakra-ui/react";
import styles from "./Product.module.css";
import { useState } from "react";
const Routebar = () => {
  const [state, setState] = useState(true)
  console.log(state)
  const toggleDisplay = () =>{
    setState(!state)
  }
  return (
    <Box onClick={toggleDisplay} >
      <Hide  above="120px">
        <Box className={styles.routeBar}>
          This text hides at the "md" value screen width and smaller.
        </Box>
        
      </Hide>

      <Show  ssr={false} above="sm">
  <Box>This text appears only on screens 400px and smaller.</Box>
</Show>

    </Box>
  );
};

export default Routebar;
