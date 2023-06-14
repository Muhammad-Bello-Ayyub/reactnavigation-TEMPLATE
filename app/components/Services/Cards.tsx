'use client'

import Image from 'next/image';
import { useState } from "react";
import { Box, Flex, Card, Text, Heading, CardBody, CardHeader, SimpleGrid } from "@chakra-ui/react";

export default function CardList() {

    const [servicesData, setServicesData] = useState([
        {
        "title": "Easy to Use",
        "description": "Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.",
        "img": "/home_smile.svg"
        },
        {
        "title": "Components built for iOS and Android",
        "description": "Platform-specific look-and-feel with smooth animations and gestures.",
        "img": "/home_devices.svg"
        },
        {
        "title": "Completely customizable",
        "description": "If you know how to write apps using JavaScript you can customize any part of React Navigation.",
        "img": "/home_star.svg"
        },
        {
        "title": "Extensible platform",
        "description": "React Navigation is extensible at every layer—you can write your own navigators or even replace the user-facing API.",
        "img": "/home_extend.svg"
        }
    ]);

    return (
        <SimpleGrid pt="2em" p="10px" minChildWidth="500px" spacing={8} bg="#1c1e21" w={'100vw'}>
            {servicesData.map((service, index) => (
                <Card key={index} p={4} minH={{ base:"250px", md:"300px"  }} variant="unstyled" bg="#1c1e21">
                    <CardHeader pb="1em">
                        <Flex gap={5} flexDir="column">
                            <Box>
                                <Image
                                    src={service.img}
                                    alt="img icons"
                                    width={70}
                                    height={70}
                                />
                            </Box>
                            <Box>
                                <Heading color="#fefefe" fontSize={{ base: "30px", md:"35px" }}>{service.title}</Heading>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text color="gray.200" fontSize={{ base:'19px', md:'21px' }}>{service.description}</Text>
                    </CardBody>
                </Card>
            ))}
        </SimpleGrid>
    );
}