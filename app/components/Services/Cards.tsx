'use client'

import 
{ 
    Box, 
    Flex, 
    Card, 
    Text,
    Heading, 
    CardBody,  
    CardHeader, 
    SimpleGrid, 
} from "@chakra-ui/react";
// import { getCardListData } from "@/api";
// import { Image } from "@chakra-ui/next-js";
import Image from 'next/image';
import { useState } from "react";


export default async function CardList() {

    const [ servicesData, setServicesData ] = useState([
        {
            "id":1,
            "title":"Easy to Use",
            "description":"Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.",
            "img": "/home_smile.svg"
         },
         {
            "id":2,
            "title":"Components built for iOS and Android",
            "description":"Platform-specific look-and-feel with smooth animations and gestures.",
            "img": "/home_devices.svg"
         },
         {
            "id":3,
            "title":"Completely customizable",
            "description":"If you know how to write apps using JavaScript you can customize any part of React Navigation.",
            "img": "/home_star.svg"
         },
         {
            "id":4,
            "title":"Extensible platform",
            "description":"React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.",
            "img": "/home_extend.svg"
         }
    ])
    // const services = await getCardListData();

    return (

        <SimpleGrid pt='2em' p={'10px'} minChildWidth={'500px'} spacing={8} bg="gray.900">
            {servicesData && servicesData.map(service =>(
                <Card key={service.id} p={4} minH='400px' variant='unstyled' bg="gray.900">
                    <CardHeader pb='1em'>
                        <Flex gap={3} flexDir="column">
                            <Box>
                                <Image
                                    // boxSize='100px'
                                    width={100}
                                    height={100}
                                    priority
                                    src={`${service.img}`}
                                    alt='img icons'
                                />
                            </Box>
                            <Box>
                                <Heading color='#fefefe' fontSize='50px'>{service.title}</Heading>
                            </Box>
                        </Flex>
                    </CardHeader>

                    <CardBody>
                        <Text color="gray.200">{service.description}</Text>
                    </CardBody>
                </Card>
            ))}   
        </SimpleGrid>
    );
};