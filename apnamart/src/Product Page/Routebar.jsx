import React from 'react'
import {Box, Hide, Text} from "@chakra-ui/react"
import styles from './Product.module.css'
const Routebar = () => {
  return (
    <Box >
      <Hide breakpoint='(max-width: 789px)'>
    <Box className= {styles.routeBar}>This text hides at the "md" value screen width and smaller.</Box>
  </Hide>


 
    </Box>
  )
}

export default Routebar
