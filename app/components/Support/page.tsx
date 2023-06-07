'use client'

import { Box, Center, Link, Text } from "@chakra-ui/react"

function SupportPage() {
  return (
    <>
        <Box w='100vw' h='20vh' bg='blackAlpha.500' color='white'>
            <Center>
                <Text>Black Lives Matter.<Link href="/">Support the Equal Justice Initiative.</Link></Text> 
            </Center>
        </Box>
    </>
  )
}

export default SupportPage;