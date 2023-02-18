import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { COLOR } from "../Constant";
import Recommend from "../Component/Recommend";
import BtnBottomChart from "../Component/BtnBottomChart";
import ExerciseItem from "../Component/ExerciseItem";
import DiaryItem from "../Component/DiaryItem";
import { Line } from "react-chartjs-2";
import BtnSeeMore from "../Component/BtnSeeMore";

import {
  dataChart,
  optionsChart,
  listBtnBottomChart,
  listRecommend,
  listExerciseItem,
  listDiaryItem,
} from "../JsonData/MyRecordData";

const MyRecord = () => {
  return (
    <Box paddingTop={"70px"}>
      <Box>
        <Flex
          margin={"0 auto"}
          width={"80%"}
          justifyContent={"space-between"}
          gap={10}
        >
          {listRecommend.map((item, index) => {
            return (
              <Recommend
                key={index}
                text1={item.text1}
                text2={item.text2}
                srcImage={item.image}
              />
            );
          })}
        </Flex>
      </Box>
      <Box marginTop={70} marginBottom={70}>
        <Box width={"80%"} margin={"0 auto"} background={COLOR.dark_600}>
          <Box p={4}>
            <Flex
              alignItems="center"
              color={COLOR.light}
              pl={4}
              pr={4}
            >
              <Box fontSize={"18px"} width={100}>
                BODY RECORD
              </Box>
              <Box fontSize={"22px"} ml={5}>
                2021.05.21
              </Box>
            </Flex>
            <Box pl={4} pr={4}>
              <Line height={90} data={dataChart} options={optionsChart} />
            </Box>
            <Flex>
              {listBtnBottomChart.map((item, index) => {
                return (
                  <BtnBottomChart
                    background={item.background}
                    color={item.color}
                    text={item.text}
                    key={index}
                  />
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Box>
      {/* //////// */}
      <Box marginTop={70} marginBottom={70}>
        <Box margin={"0 auto"} width={"80%"} background={COLOR.dark_500}>
          <Box p={4}>
            <Flex
              pl={4}
              pr={4}
              alignItems="center"
              color={COLOR.light}
            >
              <Box fontSize={"18px"} width={100}>
                MY EXERCISE
              </Box>
              <Box fontSize={"22px"} ml={5}>
                2021.05.21
              </Box>
            </Flex>
            <Flex
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              height={"240px"}
              overflowY={"auto"}
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "6px",
                  background: COLOR.gray_400,
                  borderRadius: "24px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: COLOR.primary_300,
                  borderRadius: "24px",
                },
              }}
              p={4}
            >
              {listExerciseItem.map((item, index) => {
                return (
                  <ExerciseItem
                    key={index}
                    title={item.title}
                    time={item.time}
                    kcal={item.kcal}
                  />
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box width={"80%"} margin={"0 auto"}>
          <Box color={COLOR.dark_500} fontSize={"22px"}>
            MY DIARY
          </Box>
          <Flex flexWrap={"wrap"}>
            {listDiaryItem.map((item, index) => {
              return (
                <DiaryItem
                  key={index}
                  time={item.time}
                  content={item.content}
                  num={index + 1}
                />
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box mt={5} marginBottom={70} textAlign={"center"}>
        <BtnSeeMore text={"記録をもっと見る"} />
      </Box>
    </Box>
  );
};

export default MyRecord;
