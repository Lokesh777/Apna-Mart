import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import side from './Product.module.css';
const Sidebar = () => {
  return (
    <Box className={side.Sidebar}>
      <Box>
        <Text borderBottom={"1px solid grey"}>C</Text>
        <Box >

          <Text> Apples</Text>
        </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Sidebar
