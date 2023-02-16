import React from "react";
import { Button } from "@chakra-ui/react"
import { COLOR } from "../Constant";

const BtnSeeMore = (props) => {
    const { text } = props
    return <Button pl={10} pr={10} _active={{}} _hover={{}} background={COLOR.primary_300_400} color={COLOR.light} >{text}</Button>
}

export default BtnSeeMore