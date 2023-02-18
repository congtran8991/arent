import React from "react";
import { Box } from "@chakra-ui/react";
import { COLOR } from "../../Constant";

const DiaryItem = (props) => {
  const { time, content, num } = props;
  const numPr = num%4 ? 3 : 0
  return (
    <Box width={"25%"} height={"auto"} pr={numPr} pb={3}>
      <Box
        width={"100%"}
        height={"100%"}
        border={"1px"}
        borderColor={COLOR.gray_400}
        background={COLOR.light}
        color={COLOR.gray_400}
        p={4}
      >
        <Box fontSize={18} width={"100px"}>
          {time}
        </Box>
        <Box mt={2} mb={2}>
          {content}
        </Box>
      </Box>
    </Box>
  );
};

export default DiaryItem;
