'use client'

import { Box, Card, CardBody, CardHeader, Heading, Link, Text } from "@chakra-ui/react"

function RightContent() {
    return (
        <Card pos={'fixed'} maxW={'15em'} variant={'unstyled'} bg="transparent" color="#fefefe">
            <CardHeader>
            <Heading fontSize={"20px"}>Stay up to date</Heading>
            </CardHeader>
            <CardBody>
            <Box>
                <Text>
                Read the release notes for new versions of React Navigation
                in the <Link href="https://github.com/react-navigation/react-navigation/releases" color={'#a697ce'}>releases tab on the Github repository.</Link>
                </Text>
            </Box>
            </CardBody>
        </Card>
    )
}

export default RightContent