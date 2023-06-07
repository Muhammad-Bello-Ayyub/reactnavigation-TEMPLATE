import { Box, Card, CardBody, Flex } from "@chakra-ui/react";

function PhoneTop() {

  return (
    <>
        <Box maxW="160px" mx="2.5em" my="1px" position="absolute">
            <Box w={4} h={'1.3px'} bg={'white'} borderTopRadius="15px" ml={'4.5em'}></Box>
            <Flex
                align="center"
                justify="center"
                bg="black"
                borderWidth="5px"
                borderColor="white"
                borderRadius="20px"
                position="relative"
            >
                <Card minW={'150px'} h="260px">

                    {/* Phone body content here */}
                    <CardBody p={0} m={0}>
                        <Flex 
                            mt={1}
                            w={'100%'}
                            h="257px"
                            gap={3}
                            borderWidth="5px"
                            flexDir={'column'}
                            borderColor="white"
                            position="relative"
                            alignItems={"center"}
                            borderTopRadius="15px"
                            borderBottomRadius="15px"
                        >
                            {/* // Switch Button */}
                            <Box w={'3px'} h={4}  bg={'white'} borderRadius="10px" mt={'14px'} ml={'6.2em'} pos={'absolute'}></Box>
                            <Box w={'3px'} h={4}  bg={'white'} borderRadius="10px" mt={'1.8em'} ml={'6.2em'} pos={'absolute'}></Box>
                            
                            <Flex w={70} h={70} bg="purple.400" borderRadius="full" mt={3}></Flex>

                            <Flex w={100} h={100} bg="purple.400" borderRadius="10px" ></Flex>
                        </Flex>
                    </CardBody>
                </Card>
            </Flex>
        </Box>
    </>
  )
}

export default PhoneTop;