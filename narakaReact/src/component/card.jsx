"use client"
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
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { FiShoppingCart, FiSidebar, FiTrash, FiEye, FiArrowUp ,FiEdit} from "react-icons/fi"

const data = {
    isNew: true,
    imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34
}

function Rating({ rating, numReviews }) {
    return (
        <Box display="flex" alignItems="center">
            {Array(5)
                .fill("")
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: "1" }}
                                color={i < rating ? "teal.500" : "gray.300"}
                            />
                        )
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: "1" }} />
                    }
                    return <BsStar key={i} style={{ marginLeft: "1" }} />
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && "s"}
            </Box>
        </Box>
    )
}

const CardHero = (props) => {
    const handleDelete = async (itemId) => {
        // Ask for confirmation before deleting
        const confirmDelete = window.confirm("Are you sure you want to delete this hero?");
        if (!confirmDelete) {
            return; // Cancel the deletion if the user doesn't confirm
        }

        try {
            // Make an API request to delete the hero with the given ID
            await axios.delete(`http://127.16.0.1:3000/hero/delete/${itemId}`);

            // After successful deletion, you can update the UI as needed
            // For example, remove the deleted hero from the component's state or re-fetch the data
            // ...

            // Show a success message to the user
            alert("Hero deleted successfully!");
        } catch (error) {
            console.error('Error deleting hero:', error);

            // Show an error message to the user
            alert("Error deleting hero: " + error.message);
        }
    };

    const hero = props.name;
    console.log(props)
    const HeroCard = hero.map((items, index) =>
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
            >
                {data.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}

                <Image
                    src={items.image}
                    alt={`Picture of ${items.name}`}
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
                            {items.name}
                        </Box>
                        <Tooltip
                            label="Add"
                            bg="white"
                            placement={"top"}
                            color={"gray.800"}
                            fontSize={"1.2em"}
                        >
                            <chakra.a href={"add?id=" + items.id} display={"flex"}>
                                <Icon as={FiArrowUp} h={7} w={7} alignSelf={"center"} />
                            </chakra.a>

                        </Tooltip>
                        <Tooltip label="Edit" bg="white" placement="top" color="gray.800" fontSize="1.2em">
                            <chakra.a
                                href={"edit?id=" + items.id}
                                display="flex"
                            >
                                <Icon as={FiEdit} h={7} w={7} alignSelf="center" />
                            </chakra.a>
                        </Tooltip>
                        <Tooltip
                            label="Delete"
                            bg="white"
                            placement="top"
                            color="gray.800"
                            fontSize="1.2em"
                        >
                            <chakra.a
                                href="#"
                                display="flex"
                                onClick={() => handleDelete(items.id)} // Call handleDelete with the item's ID
                            >
                                <Icon as={FiTrash} h={7} w={7} alignSelf="center" />
                            </chakra.a>
                        </Tooltip>
                        <Tooltip
                            label="Detail"
                            bg="white"
                            placement={"top"}
                            color={"gray.800"}
                            fontSize={"1.2em"}
                        >
                            <chakra.a href={"detail?id=" + items.id} display={"flex"}>
                                <Icon as={FiEye} h={7} w={7} alignSelf={"center"} />
                            </chakra.a>

                        </Tooltip>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
    // const HeroCard = hero.map(items => 

    // )
    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {HeroCard}
            </Grid>

        </>
    )
}

export default CardHero
