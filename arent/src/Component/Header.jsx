import React, { useState } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { COLOR } from "../Constant";
import { ReactComponent as IC_MEMO } from "../asset/images/icon_memo.svg";
import { ReactComponent as IC_CHALLENGE } from "../asset/images/icon_challenge.svg";
import { ReactComponent as IC_INFO } from "../asset/images/icon_info.svg";
import { ReactComponent as IC_MENU } from "../asset/images/icon_menu.svg";

import Logo from "../asset/images/logo.png";

import MenuItem from "./MenuItem";

import { useNavigate } from "react-router-dom";

const listMenu = [
  {
    title: "自分の記録",
    url: "/my-record"
  },
  {
    title: "体重グラフ",
    url: ""
  },
  {
    title: "目標",
    url: ""
  },
  {
    title: "選択中のコース",
    url: ""
  },
  {
    title: "コラム一覧",
    url: "/column"
  },
  {
    title: "設定",
    url: ""
  }
]

const listHeader = [
  {
    icon: <IC_MEMO />,
    title: "自分の記録",
  },
  {
    icon: <IC_CHALLENGE />,
    title: "チャレンジ",
  },
  {
    icon: <IC_INFO />,
    title: "お知らせ",
  },
];

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(true)
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      background={COLOR.dark_500}
      position={"fixed"}
      top={0}
      zIndex={9999}
    >
      <Flex
        width={"80%"}
        height={"64px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"0 auto"}
      >
        <Box flex={1}>
          <Image
          cursor={"pointer"}
            src={Logo}
            onClick={() => {
              navigate("/");
            }}
          />
        </Box>
        <Flex flex={2} justifyContent={"space-between"}>
          {listHeader.map((item, index) => {
            return (
              <Flex cursor={"pointer"} key={index} alignItems={"center"} onClick={() => {
                navigate("/my-record")
              }}>
                <Box>{item.icon}</Box>
                <Box color={COLOR.light}>{item.title}</Box>
              </Flex>
            );
          })}

          <Box position={"relative"}>
            <Box cursor={"pointer"} onClick={() => {
              setIsShowMenu(!isShowMenu)
            }}><IC_MENU /></Box>
            <Box position={"absolute"} top={12} left={-24} display={isShowMenu && "none"}>
              {listMenu.map((item, index) => {
                return <MenuItem key={index} title={item.title} url={item.url}/>
              })}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
