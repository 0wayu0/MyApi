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
    GridItem,
    FormLabel,
    Stack,
    Heading,
    HStack,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Link,
    Text
} from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import { Form } from "react-router-dom";
import NavBar from "../component/navBar";
class HeroAdd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            id: props.id,
            data: {},
            isLoading: true,
            image: '',
            name: '',
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
    _AddData = async () => {
        const { image, name } = this.state;
        
        // Create an object with the data to send
        const dataToSend = {
            image: image,
          name: name,
        };
      
        try {
          // Send a POST request to the specified URL with the data
          const response = await axios.post(
            'http://127.16.1.1:3000/hero',
            dataToSend
          );
      
          // Handle the response here (e.g., show a success message)
          console.log('Response from server:', response.data);
      
          // Optionally, you can reset the form fields or perform other actions.
          this.setState({
            image: '',
            name: '',
          });
        } catch (error) {
          // Handle errors (e.g., show an error message)
          console.error('Error:', error);
        }
      };
    handleInputChangeimage = (e) => {
        // Update the 'image' state when the input value changes
        this.setState({ image: e.target.value });
    };
    handleInputChangename = (e) => {
        // Update the 'image' state when the input value changes
        this.setState({ name: e.target.value });
    };
    render() {
        const { name, image, listskills, listultimates } = this.state.data
        const isLoading = this.state.isLoading;
        return (
            // isLoading ? <p>loading...</p> :
            <>
            <NavBar />
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                // bg={useColorModeValue('gray.50', 'gray.800')}
                >
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'} textAlign={'center'}>
                                add hero
                            </Heading>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            // bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <HStack>
                                    <Box>
                                        <FormControl id="image">
                                            <FormLabel>Hero Name</FormLabel>
                                            <Input
                                                value={this.state.name}
                                                onChange={this.handleInputChangename} // Use the function to update state
                                                placeholder="Here is a sample placeholder"
                                                size="sm"
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="image">
                                            <FormLabel>Link image</FormLabel>
                                            <Input
                                                value={this.state.image}
                                                onChange={this.handleInputChangeimage} // Use the function to update state
                                                placeholder="Here is a sample placeholder"
                                                size="sm"
                                            />
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type="submit"
                                        onClick={() => this._AddData()} // Call the AddData function with parentheses
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                    >
                                        Add
                                    </Button>

                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </>
        );
    }
}



export default HeroAdd