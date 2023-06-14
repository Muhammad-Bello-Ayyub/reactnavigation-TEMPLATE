import { Flex, Link, Text } from '@chakra-ui/react'

function Paragraph() {
    return (
        <Flex align={'center'} fontSize={{ base:'16px', md:'18px' }} w='fit-content'>
            <Text p={4} textAlign='center'>
                React Navigation is built by{' '}
                <Link fontWeight={'bold'} href='#'>Expo, Software Mansion,</Link>{' '}and{' '}
                <Link fontWeight={'bold'} href='#'>{' '}Callstack{' '}</Link>, with contributions from the{' '}
                <Link fontWeight={'bold'} href='#'>community</Link>{' '}and{' '}<Link fontWeight={'bold'} href='#'>sponsors</Link>:
            </Text>
        </Flex>
    )
}

export default Paragraph;