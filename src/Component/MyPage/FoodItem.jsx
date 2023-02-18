import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { COLOR } from "../../Constant";

const Food = (props) => {
  const { srcImage, text } = props;
  return (
    <Box width={"25%"} height={"auto"}>
      <Box padding={2} width={"100%"} height={"100%"}>
        <Box position="relative">
          <Image
            objectFit={"cover"}
            width={"100%"}
            height={"280px"}s
            src={srcImage}
          />
          <Box
            bottom={0}
            position={"absolute"}
            background={COLOR.primary_300}
            padding={1}
            color={COLOR.light}
          >
            {text}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Food;
