'use client'

import Phone from './PhoneIcons/Phone'
import { Box, Container, Flex, Link } from '@chakra-ui/react'
import DocSection from './DocSection/page'
import RightColPhone from './PhoneIcons/RightColIcons/page'

function HeroMainPage() {

  return (
    <>
        <Flex 
            w={'100vw'} 
            pos={'relative'}
            bg={'purple.900'}
            alignItems={'center'} 
            pt={{ base:"2em", md:"10em" }}
            flexDir={{ base:'column', md:'row' }}
        >
            <Flex color="#fefefe" flexDir={'column'} p={5} pl='3em' display={{ base:"none", md:'flex' }}>
                <Box fontStyle={'italic'} pb='2em' fontSize='15px'>Stack</Box>
                <Phone />
                <Box fontStyle={'italic'} pt='2em' fontSize='15px'>Tabs</Box>
            </Flex>

            <Flex alignItems="center" p={5} justify="center" >
                <DocSection />
            </Flex>
            
            <Flex display={{ base:"none", md:'flex' }}>
                <RightColPhone />
            </Flex>
        </Flex>
        <Flex bg={'purple.900'} w={'100vw'}>
            <Container pt={'3em'} pb={'5.5em'}>
                <Box bg={'purple.700'} p={4} borderRadius={5}>💡 Coming from an older version? Check out our <Link>migration guides.</Link> </Box>
            </Container>
        </Flex>
    </>
  )
}

export default HeroMainPage;