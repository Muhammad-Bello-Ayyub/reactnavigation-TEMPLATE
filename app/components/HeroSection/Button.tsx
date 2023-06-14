import { Button, Center, Flex, } from "@chakra-ui/react";

function Buttons() {
    return (
        <Center w="100%" pb={{ base:'0', md:'1em' }}>
            <Flex gap={10} flexDir={{ base:'column', md:'row' }} alignItems="center">
                <Button 
                    p={'2em'} 
                    w={'9em'}  
                    h={'4.5em'}
                    bg={'#414360'}
                    borderWidth="5px" 
                    borderColor="white"
                    cursor="pointer"
                    color='#fefefe'
                    _hover={{ bg:'#a697ce', borderWidth: "0" }}
                >
                    Read Docs
                </Button>

                <Button 
                    p={'2em'} 
                    w={'9em'}
                    h={'4.5em'}
                    bg={"white"}
                    color="purple.900"
                    cursor="pointer"
                    _hover={{ bg:'#a697ce', color:'white'}}
                >
                    Try It
                </Button>
            </Flex>
        </Center>
    )
}

export default Buttons;