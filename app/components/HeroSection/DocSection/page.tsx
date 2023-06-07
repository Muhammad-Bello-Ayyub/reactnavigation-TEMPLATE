import { 
    Card, 
    CardBody, 
    CardFooter, 
    CardHeader, 
    Flex, 
    Heading, 
    Text 
} from "@chakra-ui/react";
import Buttons from "../Button";


const DocSection = () => {

    return (
       <Flex alignItems={'center'} flexDir={{ md:'column' }} >
            <Flex
                w={{ base:'100%',md:'50vw' }}
                h="fit-content"
                borderWidth={{ md: "10px" }}
                borderColor={{ md:"white" }}
                borderRadius={{ md:"1em" }}
                position="relative"
                alignItems={{ base:'center' }}
                opacity={0.60}
            >
                <Card 
                    variant={'unstyled'} 
                    m={0} p={0} 
                    // bgImg={ '/bglogo.png' }  
                    // backgroundSize={'contain'}
                    // bgSize={100}
                    zIndex={-1}
                >
                    <CardHeader >
                    {/* header content here */}
                        <Heading lineHeight={{ base:"1em" }} pt={6} fontSize={{ base:"2.6em", md:'4em' }} textAlign={'center'}>React<br/> Navigation</Heading>
                    </CardHeader>

                    {/* body content here */}
                    <CardBody>
                        <Text  display={{ base:'flex', md:'none' }} fontSize={{ base:'1.2em', md:'35px' }} pt={{ base:'1em' }} textAlign={'center'}>
                            Routing and navigation<br/> for Expo and React<br/> Native apps.
                        </Text>
                        <Text display={{ base:'none', md:'flex' }} fontSize={{ base:'1.2em', md:'35px' }} pt={{ base:'1em' }} textAlign={'center'}>
                            Routing and navigation for Expo and React Native apps.
                        </Text>
                    </CardBody>

                    {/* footer content here */}
                    <CardFooter m={0} w="100%" p={10}>
                        <Buttons />
                    </CardFooter>
                </Card>
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