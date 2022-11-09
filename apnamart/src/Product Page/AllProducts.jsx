import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import fruit from '../../fruits.json';
const AllProducts = () => {
  return (
    <Box w="70%" border={"1px solid red"}>
      <Text>All Products</Text>
      <SimpleGrid columns={4} spacing={10}>

        {fruit.map((ele,i) => (
          <Box key={i}>
            <Image  src={ele.product-image-photo} alt={ele.clsgetname}/>
            <Text>{clsgetname}</Text>
            <Text>M.R.P: {el.price-box}</Text>
            <Button>Add To Cart</Button>
          </Box>
        ))}
          


      </SimpleGrid>
    </Box>
  )
}

export default AllProducts
