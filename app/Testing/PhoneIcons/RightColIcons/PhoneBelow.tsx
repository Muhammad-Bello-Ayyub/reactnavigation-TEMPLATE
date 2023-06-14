// import { motion } from "framer-motion";
// import { Box, Card, CardBody, Flex } from "@chakra-ui/react";

// function PhoneBelow() {

//   return (
//     <>
//         <Box 
//             maxW="160px" 
//             mx="1.5em" 
//             my="4em" 
//             position="relative" 
//             as={motion.div}  
//             animate={{ rotate: -12 }}
//         >
//             <Flex
//                 align="center"
//                 justify="center"
//                 bg="black"
//                 borderWidth="5px"
//                 borderColor="white"
//                 borderRadius="15px"
//                 position="relative"
//             >
//                 <Card minW={'150px'} h="260px">

//                     {/* Phone body content here */}
//                     <CardBody p={0} m={0}>
//                         <Flex 
//                             pb={0}
//                             w={'100%'}
//                             position="relative"
//                             flexDir={'column'}
//                         >

//                             {/* // Switch Button */}
//                             <Box w={'3px'} h={4}  bg={'white'} borderRadius="10px" mt={'14px'} ml={'5.8em'} pos={'absolute'}></Box>
                            
//                             <Flex w={'100%'} h={260}>
//                                 <Box w={'75%'} h={'100%'} bg="purple.400" borderBottomLeftRadius="10px" borderTopLeftRadius="10px"></Box>
//                                 <Box w={'25%'} h={'100%'} bg="purple.900" borderBottomRightRadius="15px" borderTopRightRadius="15px"></Box>
//                             </Flex>
//                         </Flex>
//                     </CardBody>
//                 </Card>
//             </Flex>
//         </Box>
//     </>
//   )
// }

// export default PhoneBelow;