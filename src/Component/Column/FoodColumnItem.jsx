import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { COLOR } from "../../Constant";

const FoodColumn = (props) => {
  const { srcImage, time, content1, content2, num } = props;
  const numPr = num % 4 ? 3 : 0;
  return (
      <Box width={"25%"} height={"auto"} pr={numPr} pb={3}>
      <Box width={"100%"} background={COLOR.light} color={COLOR.gray_400}>
        <Box position={"relative"}>
          <Image
            width={"100%"}
            height={"200px"}
            objectFit={"cover"}
            src={srcImage}
          />
          <Box
            bottom={0}
            position={"absolute"}
            background={COLOR.primary_300}
            padding={1}
            color={COLOR.light}
          >
            {time}
          </Box>
        </Box>
        <Box mt={5}>
          <Box className="content-text-column" color={COLOR.dark_500}>
            {content1}
          </Box>
          <Box color={COLOR.primary_400} mt={3} fontSize={"14px"}>
            {content2}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FoodColumn;
