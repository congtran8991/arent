import React from "react";
import { Box } from "@chakra-ui/react";

const BtnBottomChart = (props) => {
  const { background, color, text } = props;
  return (
    <Box
      borderRadius={11}
      background={background}
      color={color}
      height={"28px"}
      width={"56px"}
      mr={5}
      textAlign={"center"}
    >
      {text}
    </Box>
  );
};

export default BtnBottomChart;
