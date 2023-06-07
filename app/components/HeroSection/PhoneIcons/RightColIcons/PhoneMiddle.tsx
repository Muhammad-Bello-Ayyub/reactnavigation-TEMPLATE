import { motion } from "framer-motion";
import { Box, Card, CardBody, Flex } from "@chakra-ui/react";

function PhoneMiddle() {

  return (
    <>
        <Box 
            maxW="160px" 
            mx="4.5em" 
            my="1.5em" 
            position="absolute" 
            as={motion.div}  
            animate={{ rotate: 20 }}
        >
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
                <Card w={'full'} minW={'150px'} h="260px">
                    <CardBody p={0} m={0}>
                        <Flex 
                            w={'full'}
                            h={'full'}
                            gap={1}
                            p={1}
                            pt={2}
                            flexDir={'column'}
                        >
                            {/* // Switch Button */}
                            <Box w={'3px'} h={4}  bg={'white'} borderRadius="10px" mt={'14px'} ml={'5.66em'} pos={'absolute'}></Box>
                            <Box w={'3px'} h={4}  bg={'white'} borderRadius="10px" mt={'1.8em'} ml={'5.66em'} pos={'absolute'}></Box>
                            
                            <Flex w={'full'} h={58} bg="purple.400" borderTopRadius="10px" ></Flex>
                            <Flex w={'full'} h={110} bg="purple.400"></Flex>
                            <Flex w={'full'} h={55} bg="purple.400" borderBottomRadius="10px" ></Flex>

                        </Flex>
                    </CardBody>
                </Card>
            </Flex>
        </Box>
    </>
  )
}

export default PhoneMiddle;