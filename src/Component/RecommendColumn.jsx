import React from "react";
import { COLOR } from "../Constant";
import { Box } from "@chakra-ui/react";

const RecommendColumn = (props) => {
  const { title, content } = props;
  return (
    <Box width={"24%"}>
      <Box
        width={"100%"}
        height={"100%"}
        background={COLOR.dark_600}
        color={COLOR.gray_400}
        p={4}
        textAlign={"center"}
      >
        <Box fontSize={25} color={COLOR.primary_300} width={200} margin={"0 auto"}>
          {title}
        </Box>
        <Box
          margin={"8px auto"}
          width={"100px"}
          height={"1px"}
          background={COLOR.light}
        ></Box>
        <Box color={COLOR.light} fontSize={"18px"} mt={2} mb={2}>
          {content}
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendColumn;
