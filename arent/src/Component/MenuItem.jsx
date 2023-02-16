import React from "react";
import { Box } from "@chakra-ui/react";
import { COLOR } from "../Constant";
import { useNavigate } from "react-router-dom";

const MenuItem = (props) => {
  const navigate = useNavigate();
  const { title, url } = props;
  return (
    <Box
      onClick={() => {
        !!url && navigate(url);
      }}
      borderBottom={"1px"}
      borderBottomColor={COLOR.light}
      p={3}
      background={COLOR.gray_400}
      width={"240px"}
      color={COLOR.light}
    >
      {title}
    </Box>
  );
};

export default MenuItem;
