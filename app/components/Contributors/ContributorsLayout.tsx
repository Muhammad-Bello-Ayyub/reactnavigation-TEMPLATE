'use client'

import Paragraph from './Paragraph'
import SponsorPage from './SponsorPage'
import { Box, Center, Flex } from '@chakra-ui/react'
import ContributorsAvatar from './ContributorsAvatar'

function ContributorsLayout() {
    return (
        <Flex 
            w='100vw' 
            align={'center'}  
            color={'#fefefe'} 
            bg={'#414360'} 
            flexDir={'column'} 
            overflow={'hidden'}
            h={{ base:'100vh', md:'45vh' }} 
        >
                
            <Box pt={10} w={{ base: '100vw', md:'80vw' }}>
                <Paragraph /> 
            </Box>

            <Box w={{ base: '70vw', md:'90vw' }}  py={5} px={20}>
                <Center><ContributorsAvatar /></Center>
            </Box>

        </Flex>
    )
}

export default ContributorsLayout;