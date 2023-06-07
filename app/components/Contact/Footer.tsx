'use client'

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody,Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'

function Footer() {
  return (
    <>
      <Flex w={'100vw'} h='70vh' align={'center'} gap={4} flexDir={'row'}>
        <Flex gap={3} textAlign={'start'} lineHeight={'10px'} align={'center'} p='10px' maxW='250px' flexDir={'column'}>
          <Heading>Docs</Heading>
          <Card>
            <CardBody>
              <Text>Getting Started</Text>
              <Text>Building your own Navigator</Text>
              <Text>Contributing</Text>
            </CardBody>
          </Card>
        </Flex>
      
        <Flex gap={3} textAlign={'start'} lineHeight={'10px'} align={'center'} p='10px' maxW='250px' flexDir={'column'}>
          <Heading>Support</Heading>
          <Card>
            <CardBody>
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
        </Flex>
        
        <Flex gap={3} textAlign={'start'} lineHeight={'10px'} align={'center'} p='10px' maxW='250px' flexDir={'column'}>
          <Heading>Social</Heading>
          <Card>
            <CardBody>
              <Text>Blog</Text>
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
        </Flex>
      
        <Flex gap={3} textAlign={'start'} lineHeight={'10px'} align={'center'} p='10px' maxW='250px' flexDir={'column'}>
          <Heading>Built with</Heading>
          <Card>
            <CardBody>
              <Text>Docusaurus</Text>
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
        </Flex>
      </Flex>
    </>
  )
}

export default Footer;