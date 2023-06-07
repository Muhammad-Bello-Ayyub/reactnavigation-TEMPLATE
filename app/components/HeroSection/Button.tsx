import { Button, Center, Flex, } from "@chakra-ui/react";


function Buttons() {
  return (
    <Center w="100%" pb={{ base:'0', md:'1em' }}>
        <Flex gap={10} flexDir={{ base:'column', md:'row' }} alignItems="center">
            <Button 
                p={'2em'} 
                w={'9em'}  
                borderWidth="5px" 
                borderColor="white"
                cursor="pointer"
                _hover={{ bg:"white" }}
            >
                Read Docs
            </Button>

            <Button 
                p={'2em'} 
                w={'9em'}
                bg={"white"}
                color="purple.900"
                cursor="pointer"
            >
                Try It
            </Button>
        </Flex>
    </Center>
  )
}

export default Buttons;