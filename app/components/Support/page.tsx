'use client'

import { Box, Center, Link, Text } from "@chakra-ui/react"

function SupportPage() {
  return (
    <Box w='100vw' h='20vh' bg='#1c1e21' color='white' fontSize={{ base:'18px', md:'22px' }}>
      <Center py={12}>
        <Text>Black Lives Matter. <Link href="/" color={'blue.400'} fontWeight={'bold'}>Support the Equal Justice Initiative.</Link></Text> 
      </Center>
    </Box>
  )
}

export default SupportPage;