'use client'

import Breadcrumbs from './GettingStartedGuide/Breadcrumb'
import { Flex, Box } from '@chakra-ui/react'
import GettingStarted from './GettingStartedGuide/Main'

function MiddleContent() {
    return (
        <Flex flexDir={'column'} py={4}>
            <Flex>
                <Breadcrumbs />
            </Flex>
            <Box 
                py={'2px'} 
                px={'3px'}
                mt={4}
                fontWeight='bold'
                fontSize='14px'
                bg={'gray.200'} 
                color='black'
                borderRadius={5} 
                w='fit-content'
                >Version: 6.x</Box>
            <Flex>
                <GettingStarted />
            </Flex>
        </Flex>
    )
}

export default MiddleContent