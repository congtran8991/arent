import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { COLOR } from "../Constant";

const Footer = () => {
  console.log("hvhd")
  return (
    <Box width={"100%"} background={COLOR.dark_500}>
      <Flex
        width={"80%"}
        height={"128px"}
        alignItems={"center"}
        margin={"0 auto"}
        color={COLOR.light}
        gap={10}
      >
        <Box>会員登録</Box>
        <Box>運営会社</Box>
        <Box>利用規約</Box>
        <Box>個人情報の取扱について</Box>
        <Box>特定商取引法に基づく表記</Box>
        <Box>お問い合わせ</Box>
      </Flex>
    </Box>
  );
};

export default Footer;
