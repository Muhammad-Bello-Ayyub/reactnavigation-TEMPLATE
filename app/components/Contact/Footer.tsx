'use client'

import NextLink from 'next/link'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardHeader, Center,Flex, Heading, Link, Text } from "@chakra-ui/react";
import ScrollToTopButton from '../ScrollToTop';

function Footer() {
  return (
    <Flex w={'100vw'} h={{ base:'100vh', md:'35vh' }} textAlign={'start'} flexDir={{ base:"column", md:'row' }} bg="#303846">

      <Center w="100%" gap={{ base:"2em", md:"3em"}} pt={{ base:'10px', md:'20px' }} px={{ base:"10px", md:" " }} flexDir={{ base:"column", md:'row' }}>

        <Card minW={{ base:'100%', md:"15em" }}  h={"100%"} variant={'unstyled'} bg="transparent" color="#fefefe">
          <CardHeader>
            <Heading fontSize={"20px"}>Docs</Heading>
          </CardHeader>
          <CardBody pt={{ base:'10px', md:'15px' }}>
            <Box>
              <Box><Text>Getting Started</Text></Box>
              <Box><Text>Building your own Navigator</Text></Box>
              <Box><Text>Contributing</Text></Box>
            </Box>
          </CardBody>
        </Card>
      
        <Card minW={{ base:'100%', md:"15em" }} h={"100%"} variant={'unstyled'} bg="transparent" color="#fefefe">
          <CardHeader>
            <Heading fontSize={"20px"}>Support</Heading>
          </CardHeader>
          <CardBody pt={{ base:'10px', md:'15px' }}>
            <Box>
              <Link as={NextLink} href='https://twitter.com' isExternal>
                Chat in our Discord channel <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
            <Box>
              <Link as={NextLink} href='https://twitter.com' isExternal>
                Get help on Stack Overflow <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
            <Box>
              <Link as={NextLink} href='https://twitter.com' isExternal>
                Request a feature on Canny <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
            <Box>
              <Link as={NextLink} href='https://twitter.com' isExternal>
                Report a bug on GitHub <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
          </CardBody>
        </Card>
        
        <Card minW={{ base:'100%', md:"15em" }} h={"100%"} variant={'unstyled'} bg="transparent" color="#fefefe">
          <CardHeader>
            <Heading fontSize={"20px"}>Social</Heading>
          </CardHeader>
          <CardBody pt={{ base:'10px', md:'15px' }}>
            <Box>Blog</Box>
            <Box>
              <Link as={NextLink} href='https://github.com' isExternal>
                Github <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
            <Box>
              <Link as={NextLink} href='https://twitter.com' isExternal>
                Twitter <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
          </CardBody>
        </Card>
      
        <Card minW={{ base:'100%', md:"15em" }} h={"100%"} variant={'unstyled'} bg="transparent" color="#fefefe">
          <CardHeader>
            <Heading fontSize={"20px"}>Built with</Heading>
          </CardHeader>
          <CardBody pt={{ base:'10px', md:'15px' }}>
            <Box>Docusaurus</Box>
            <Box>
              <Link as={NextLink} href='https://github.com' isExternal>
                Github Pages <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
            <Box>
              <Link as={NextLink} href='https://netlify.com' isExternal>
                Netlify <ExternalLinkIcon mx='2px'/>
              </Link>
            </Box>
          </CardBody>
        </Card>

        <ScrollToTopButton />
      </Center>
    </Flex>
  )
}

export default Footer;