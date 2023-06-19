'use client'

import { 
    Box,
    Text, 
    Flex, 
    Heading
} from "@chakra-ui/react";
import Buttons from "../Button";


const DocSection = () => {

    return (
       <Flex alignItems={'center'} flexDir={{ md:'column' }}>
            <Flex
                h="fit-content"
                color="#fefefe"
                flexDir={'column'}
                borderRadius={{ md:"1em" }}
                borderWidth={{ md: "10px" }}
                borderColor={{ md:"white" }}
                w={{ base:'100%', md:'auto' }}
                alignItems={{ base:'center' }}
                // bgImg={ '/bglogo.png' }  
                // backgroundSize={'contain'}
                // bgSize={100}
            >
                {/* header content here */}
                <Box>
                    <Heading lineHeight={{ base:"1em" }} pt={6} fontSize={{ base:"2.6em", md:'4em' }} textAlign={'center'}>React<br/> Navigation</Heading>
                </Box>

                {/* body content here */}
                <Box>
                    <Text  display={{ base:'flex', md:'none' }} fontSize={{ base:'1.2em', md:'35px' }} pt={{ base:'1em' }} textAlign={'center'}>
                        Routing and navigation<br/> for Expo and React<br/> Native apps.
                    </Text>
                    <Text display={{ base:'none', md:'flex' }} fontSize={{ base:'1.2em', md:'35px' }} pt={{ base:'1em' }} textAlign={'center'}>
                        Routing and navigation for Expo and React Native apps.
                    </Text>
                </Box>

                {/* footer content here */}
                <Box w="100%" p={10}>
                    <Buttons />
                </Box>
            </Flex>
            <Flex
                w={'90%'}
                borderWidth="10px"
                display={{ base:"none", md:'flex' }}
                borderColor="whiteAlpha.700"
                borderBottomRadius="1em"
            ></Flex>
       </Flex>
    );
};

export default DocSection;