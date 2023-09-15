import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Grid,
    GridItem
} from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
class CardHeroDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            id: props.id,
            data: {},
            isLoading: true
        }
        console.log(this.state.id)
        this._getData(props.id)
    }

    _getData = async (id) => {
        const result = await axios(
            'http://127.16.0.1:3000/hero/' + id,
        );
        console.log(result.data.data)
        this.setState({
            data: result.data.data,
            isLoading: false
        });
    }

    render() {
        const { name, image, listskills, listultimates } = this.state.data
        const isLoading = this.state.isLoading;
        return (
            isLoading ? <p>loading...</p> :
                <>
                    <Flex p={50} w="full" alignItems="center" justifyContent="center">
                        <Box
                            // bg={useColorModeValue("white", "gray.800")}
                            maxW="lg"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative"
                        >
                            <Image
                                src={image}
                                alt={`Picture of ${name}`}
                                roundedTop="lg"
                            />

                            <Box p="6">
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="2xl"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        {name}
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex p={50} w="full" alignItems="center" justifyContent="center">
                        <Box
                            // bg={useColorModeValue("white", "gray.800")}
                            w='100%'
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative"
                        >
                            <Box p="6">
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="1xl"
                                        fontWeight="semibold"
                                        as="h6"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        skill 1<br />
                                        SkillName : {listskills[0].name}<br />
                                        focusType : {listskills[0].focusType}<br />
                                        attackFocusType : {listskills[0].attackFocusType}<br />
                                        cooldown : {listskills[0].cooldown}<br />
                                        ability : {listskills[0].ability}<br />
                                        damage : {listskills[0].damage}<br />
                                    </Box>

                                </Flex>
                            </Box>
                            <Box p="6">
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="1xl"
                                        fontWeight="semibold"
                                        as="h6"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        skill 2<br />
                                        SkillName : {listskills[1].name}<br />
                                        focusType : {listskills[1].focusType}<br />
                                        attackFocusType : {listskills[1].attackFocusType}<br />
                                        cooldown : {listskills[1].cooldown}<br />
                                        ability : {listskills[1].ability}<br />
                                        damage : {listskills[1].damage}<br />
                                    </Box>

                                </Flex>
                            </Box>
                            <Box p="6">
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="1xl"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        skill 3<br />
                                        SkillName : {listskills[2].name}<br />
                                        focusType : {listskills[2].focusType}<br />
                                        attackFocusType : {listskills[2].attackFocusType}<br />
                                        cooldown : {listskills[2].cooldown}<br />
                                        ability : {listskills[2].ability}<br />
                                        damage : {listskills[2].damage}<br />
                                    </Box>

                                </Flex>
                            </Box>
                            <Box p="6">
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="1xl"
                                        fontWeight="semibold"
                                        as="h6"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        Ultimate 1<br />
                                        UltimateName : {listultimates[0].name}<br />
                                        focusType : {listultimates[0].focusType}<br />
                                        attackFocusType : {listultimates[0].attackFocusType}<br />
                                        ability : {listultimates[0].ability}<br />
                                        castTime : {listultimates[0].castTime}<br />
                                        damReDurCast : {listultimates[0].damReDurCast}<br />
                                        range : {listultimates[0].range}<br />
                                    </Box>

                                </Flex>
                            </Box>
                            <Box p="6">
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="1xl"
                                        fontWeight="semibold"
                                        as="h6"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        Ultimate 2<br />
                                        UltimateName : {listultimates[1].name}<br />
                                        focusType : {listultimates[1].focusType}<br />
                                        attackFocusType : {listultimates[1].attackFocusType}<br />
                                        ability : {listultimates[1].ability}<br />
                                        castTime : {listultimates[1].castTime}<br />
                                        damReDurCast : {listultimates[1].damReDurCast}<br />
                                        range : {listultimates[1].range}<br />
                                    </Box>

                                </Flex>
                            </Box>
                            <Box p="6">
                                <Flex mt="1" justifyContent="space-between" alignContent="center">
                                    <Box
                                        fontSize="1xl"
                                        fontWeight="semibold"
                                        as="h6"
                                        lineHeight="tight"
                                        isTruncated
                                    >
                                        Ultimate 3<br />
                                        UltimateName : {listultimates[2].name}<br />
                                        focusType : {listultimates[2].focusType}<br />
                                        attackFocusType : {listultimates[2].attackFocusType}<br />
                                        ability : {listultimates[2].ability}<br />
                                        castTime : {listultimates[2].castTime}<br />
                                        damReDurCast : {listultimates[2].damReDurCast}<br />
                                        range : {listultimates[2].range}<br />
                                    </Box>

                                </Flex>
                            </Box>

                        </Box>
                    </Flex>
                </>
        );
    }
}



export default CardHeroDetail