import { MdSettings } from 'react-icons/md'
import { GrHomeRounded } from "react-icons/gr";
import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Flex, HStack, Icon } from "@chakra-ui/react";

const Phone = () => {
  return (
    <Center>
        <Box maxW="160px" mx="auto" position="relative" >
            <Box w={4} h={'1.3px'} bg={'white'} borderTopRadius="15px" ml={'4.5em'}></Box>
            <Flex
                align="center"
                justify="center"
                bg="black"
                borderWidth="5px"
                borderColor="white"
                borderRadius="15px"
                position="relative"
            >
                <Card minW={'150px'} h="260px">
                    <CardHeader h={'1.5em'} p={0} m={0}>

                        {/* Phone header content here */}
                        <Flex gap={2} alignItems={'center'} flexDir={'row'} p={1}>
                            <Box 
                                w='25px' 
                                h='25px' 
                                p={0}
                                bg={'gray.200'} 
                                borderRadius="sm"
                            >
                                <Center>
                                    <ArrowBackIcon color='black' boxSize={3}/>
                                </Center>
                            </Box>

                            <Box 
                                h={'2.5px'} 
                                w={'1.2em'} 
                                ml={'0.65em'}
                                bg={'#ffff'} 
                                borderRadius="md"
                            ></Box>
                                {/* // Switch Button */}
                            <Box w={'3px'} h={4} bg={'white'} borderRadius="15px" ml={'5.65em'} mt={'30px'} pos={'absolute'}></Box>
                        </Flex>
                        {/* // horizontal line */}
                        <Box h={'2px'} w={'100%'} bg={'#fefefe'}></Box>
                    
                    </CardHeader>

                    {/* Phone body content here */}
                    <CardBody p={0} m={0}>
                        <Flex 
                            p={'0.15em'}
                            pb={0}
                            w={'100%'}
                            position="relative"
                            gap={"2px"}
                            flexDir={'column'}
                        >
                            <Flex borderRadius="10px" w={'100%'} h={7} bg="purple.500" mt={"5px"}></Flex>

                            {/* // Switch Button */}
                            <Box w={'3px'} h={4}  bg={'white'} borderRadius="10px" mt={'14px'} ml={'5.75em'} pos={'absolute'}></Box>
                            
                            <Flex borderRadius="10px" w={'100%'} h={7} gap={"2px"} pt={"4px"} pb={"4px"}>
                                <Box w={'50%'} bg="purple.500" borderRadius="10px"></Box>
                                <Box w={'50%'} bg="purple.500" borderRadius="10px"></Box>
                            </Flex>
                            <Flex borderTopRadius="10px" w={'100%'} h={12} bg="purple.500"></Flex>
                        </Flex>
                        <Box h={'2px'} w={'100%'} bg={'#fefefe'}></Box>
                    </CardBody>

                    {/* Phone footer content here */}
                    <CardFooter p={0} pb={"2px"} m={0}>
                        <Box w="100%" mt={0} p={"2px"}>
                            <HStack 
                                p={"4px"}
                                gap={3}
                                pos={'relative'}
                                bg="purple.400"
                                borderRadius="10px"
                                justifyContent={'center'}
                            >
                                <Icon as={GrHomeRounded} boxSize={3} color={'purple.900'}/>

                                <Icon as={HamburgerIcon} boxSize={3} color={'purple.900'}/>

                                <Icon as={MdSettings} boxSize={3} color={'purple.900'}/>
                            </HStack>
                        </Box>
                    </CardFooter>
                </Card>
            </Flex>
        </Box>
    </Center>
  );
};

export default Phone;