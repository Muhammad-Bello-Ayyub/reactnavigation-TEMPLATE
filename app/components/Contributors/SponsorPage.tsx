'use client'

import { Center, Flex, Link, Text } from "@chakra-ui/react"

function SponsorPage() {
    return (
        <Flex w={"100vw"} py={10} color='#fefefe' bg={'#414360'} align={'center'} fontSize={{ base:'15px', md:'18px' }} textAlign={'center'}>
            <Center w={"100vw"}>
                <Text p={4}>
                    If React Navigation is helpful to you, consider{' '}
                    <Link fontWeight={'bold'} href='#'> supporting the project by sponsoring it 💜</Link>
                </Text>
            </Center>
        </Flex>
    )
}

export default SponsorPage;