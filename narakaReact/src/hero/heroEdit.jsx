import React, { Component } from 'react';
import {
    Flex,
    Box,
    Stack,
    Heading,
    FormControl,
    Input,
    Button,
    Spinner, // Import Spinner for loading indicator
} from "@chakra-ui/react";
import axios from "axios";
import NavBar from "../component/navBar";
// Get the current URL


class HeroEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroData: {
                name: "",
                image: "",
            },
            isLoading: true, // Add isLoading state
        };
    }

    componentDidMount() {
        const urlSearchString = window.location.search;
        const params = new URLSearchParams(urlSearchString);
        const id = params.get('id');

        // Check if 'id' is null or undefined
        if (!id) {
            console.error('ID parameter is missing in the URL');
            this.setState({
                isLoading: false,
            });
            return;
        }

        // Fetch hero data based on the 'id'
        axios.get(`http://127.16.0.1:3000/hero/${id}`)
            .then((response) => {
                this.setState({
                    heroData: response.data.data,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error('Error fetching hero data:', error);
                this.setState({
                    isLoading: false,
                });
            });
    }



    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            heroData: {
                ...prevState.heroData,
                [name]: value,
            },
        }));
    };

    handleUpdateHero = () => {
        const { id } = this.state.heroData;
        // Send a PUT request to update the hero data
        axios.put(`http://127.16.0.1:3000/hero/${id}`, this.state.heroData)
            .then((response) => {
                console.log('Hero updated successfully:', response.data);
                // Navigate back to the hero details page or any other appropriate route
                this.props.history.push(`/hero/${id}`);
            })
            .catch((error) => {
                console.error('Error updating hero:', error);
            });
    };

    render() {
        const { name, image } = this.state.heroData;
        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                >
                    <Spinner size="xl" />
                </Flex>
            );
        }

        return (
            <div>
                <NavBar />
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                >
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'} textAlign={'center'}>
                                Edit Hero
                            </Heading>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl>
                                    <Input
                                        name="name"
                                        value={name}
                                        onChange={this.handleInputChange}
                                        placeholder="Hero Name"
                                        size="sm"
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        name="image"
                                        value={image}
                                        onChange={this.handleInputChange}
                                        placeholder="Link image"
                                        size="sm"
                                    />
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type="submit"
                                        onClick={this.handleUpdateHero}
                                        loadingText="Updating"
                                        size="lg"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                    >
                                        Update Hero
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </div>
        );
    }
}

export default HeroEdit;
