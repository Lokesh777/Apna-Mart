import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";

export const CustomRangeSlider = ({ name }) => {
  return (
    <VStack bg="white" w="full" align={"flex-start"}>
      <Text>{name}</Text>
      <Box w="90%" m="auto" pl="15px" py={"8px"}>
        <RangeSlider
          defaultValue={[0, 100]}
          min={0}
          max={100}
          onChangeEnd={(val) => console.log(val)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>
    </VStack>
  );
};
