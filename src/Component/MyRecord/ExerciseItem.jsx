import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { COLOR } from "../../Constant";

const ExerciseItem = (props) => {
  const { title, kcal, time } = props;
  return (
    <Flex
      width={"47%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px"}
      borderBottomColor={COLOR.gray_400}
      color={COLOR.light}
      height={"55px"}
    >
      <Box>
        <Box>{title}</Box>
        <Box color={COLOR.primary_300}>{kcal}</Box>
      </Box>
      <Box color={COLOR.primary_300}>{time}</Box>
    </Flex>
  );
};

export default ExerciseItem;
