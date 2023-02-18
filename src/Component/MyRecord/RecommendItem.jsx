import React from "react";
import { COLOR } from "../../Constant";
import { Box, Image, Flex } from "@chakra-ui/react";

const Recommend = (props) => {
  const { text1, text2, srcImage = "" } = props;
  return (
    <Box width={"auto"} background={COLOR.primary_300}>
      <Box padding={10}>
        <Box position={"relative"}>
          <Box
            background={COLOR.dark_600}
            top={0}
            position={"absolute"}
            height={"350px"}
            width={"100%"}
          ></Box>
          <Image
            opacity={0.25}
            objectFit={"cover"}
            height={"350px"}
            minWidth={"350px"}
            width={"100%"}
            src={srcImage}
          />
          <Flex
            width={"100%"}
            position={"absolute"}
            top={"40%"}
            flexDirection="column"
            alignItems={"center"}
          >
            <Box color={COLOR.primary_300} fontSize={"30px"}>
              {text1}
            </Box>
            <Box mt={1} background={COLOR.primary_400}>
              <Box color={COLOR.light} paddingX={5} paddingY={1}>
                {text2}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Recommend;
