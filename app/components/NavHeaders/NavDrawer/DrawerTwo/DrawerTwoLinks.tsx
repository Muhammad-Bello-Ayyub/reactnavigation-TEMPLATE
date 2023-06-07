
'use client'

import {
  Box,
  Link,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from "next/link"

function DrawerTwoLinks() {

    return (
        <>
            <Box fontSize={20}>
                <VStack pt={'1em'}>
                    <Box w={'100%'} p={1} _hover={{ bg: 'gray.600' }} borderRadius={'4px'} cursor={'pointer'}>
                        <NextLink href='#' passHref>
                            <Link>React Navication 6.0</Link>
                        </NextLink>
                    </Box>
                    <Box w={'100%'} p={1} _hover={{ bg: 'gray.600' }} borderRadius={'4px'} cursor={'pointer'}>
                        <NextLink href='#' passHref>
                            <Link>On the way to React Navigation 6.0</Link>
                        </NextLink>
                    </Box>
                    <Box w={'100%'} p={1} _hover={{ bg: 'gray.600' }} borderRadius={'4px'} cursor={'pointer'}>
                        <NextLink href='#' passHref>
                            <Link>React Navication joins GitHub Sponsors</Link>
                        </NextLink>
                    </Box>
                    <Box w={'100%'} p={1} _hover={{ bg: 'gray.600' }} borderRadius={'4px'} cursor={'pointer'}>
                        <NextLink href='#' passHref>
                            <Link>React Navication on the Web</Link>
                        </NextLink>
                    </Box>
                    <Box w={'100%'} p={1} _hover={{ bg: 'gray.600' }} borderRadius={'4px'} cursor={'pointer'}>
                        <NextLink href='#' passHref>
                            <Link>React Navication 5.0- A new way to navigate</Link>
                        </NextLink>
                    </Box>
                </VStack>
            </Box>
        </>
    )
}

export default DrawerTwoLinks