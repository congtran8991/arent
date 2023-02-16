import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { COLOR } from "../Constant";
import Meal from "../Component/Meal";
import Food from "../Component/Food";
import BtnSeeMore from "../Component/BtnSeeMore";
import ImageD01 from "../asset/images/d01.jpg";

import {
  listMeal,
  foodList,
  optionsChart,
  dataChart,
} from "../JsonData/MyPageData";

import { Line } from "react-chartjs-2";

function MyPage() {
  return (
    <Box marginTop={"64px"}>
      <Box>
        <Flex>
          <Box width={"40%"}>
            <Image
              objectFit={"cover"}
              height={"400px"}
              width={"100%"}
              src={ImageD01}
            />
          </Box>
          <Box background={COLOR.dark_600} width={"60%"}>
            <Box p={2}>
              <Line height={110} data={dataChart} options={optionsChart} />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex
          width={"70%"}
          height={"180px"}
          justifyContent="space-around"
          margin={"0 auto"}
          alignItems="center"
        >
          {listMeal.map((item, index) => {
            return <Meal key={index} icon={item.icon} text={item.title} />;
          })}
        </Flex>
      </Box>
      <Box>
        <Flex
          width={"80%"}
          flexWrap="wrap"
          justifyContent="space-between"
          margin={"0 auto"}
          alignItems="center"
        >
          {foodList.map((item, index) => {
            return <Food srcImage={item.image} text={item.text} key={index} />;
          })}
        </Flex>
      </Box>
      <Box mt={5} mb={5} textAlign={"center"}>
        <BtnSeeMore text={"記録をもっと見る"} />
      </Box>
    </Box>
  );
}

export default MyPage;
