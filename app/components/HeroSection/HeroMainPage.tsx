'use client'

import DocSection from './DocSection/page'
import { Box, Container, Flex, Image, Link } from '@chakra-ui/react'

function HeroMainPage() {

  return (
    <Flex w={'100vw'} bg={'#565872'} flexDir={'column'} overflow={'hidden'} pt={{ base:"5em" }}>
        <Flex 
            w={'100vw'} 
            gap={5}
            pos={'relative'}
            alignItems={'center'} 
            pt={{ base:"2em", md:"10em" }}
            flexDir={{ base:'column', md:'row' }}
        >
            <Flex display={{ base:"none", md:'flex' }}>
                <Box>
                    <Image
                        boxSize='fit-content'
                        objectFit='cover'
                        src='/phone.png'
                        alt='device Icon'
                    />
                </Box>
            </Flex>

            <Flex alignItems="center" p={3} justify="center" >
                <DocSection />
            </Flex>
            
            <Flex display={{ base:"none", md:'flex' }} pr={4}>
                <Box>
                    <Image
                        boxSize='fit-content'
                        objectFit='cover'
                        src='/triplePhone.png'
                        alt='device Icon'
                    />
                </Box>
            </Flex>
        </Flex>
        <Flex w={'100vw'} color="#fefefe">
            <Container pt={'3em'} pb={'5.5em'} maxW='container.md'>
                <Box fontSize={{ base:'20px', md:'22px' }} bg={'#414360'} p={4} borderRadius={5} textAlign={'center'}>💡 Coming from an older version? Check out our <Link>migration guides.</Link> </Box>
            </Container>
        </Flex>
    </Flex>
  )
}

export default HeroMainPage;