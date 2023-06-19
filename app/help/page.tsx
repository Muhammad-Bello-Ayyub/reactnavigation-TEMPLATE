'use client'

// import NextLink from 'next/link'
import Layout from "../components/Layout"
import styles from "./style.module.css"
import { Box, Card, CardBody, CardHeader, Center, Flex, Heading, Link, Text } from "@chakra-ui/react"

function help() {
  return (
    <Layout hideNavbarAndFooter={false}>
      <Flex w={'100vw'} h={'fit-content' } color="#fefefe" bg={'#1c1e21'} flexDir={'column'} pt={'10em'}>
        <Flex flexDir={'column'} gap={5} px={{ base:'1.5em', md:'8em' }}>
          <Box>
            <Heading fontSize={"22px"}>Need help?</Heading>
          </Box>
          <Box>
            <Text>
              If you&apos;ve encountered a bug with React Navigation,
              please <Link href="https://github.com/react-navigation/react-navigation/issues" color={'#a697ce'}>post an issue</Link> and be sure to fill out the issue template. 
              If you believe there is a feature missing, please <Link href="https://react-navigation.canny.io/feature-requests" color={'#a697ce'}>create a feature request
              on Canny</Link>, or if you&apos;re feeling up for the task of proposing an API for the 
              feature, <Link href="https://github.com/react-navigation/rfcs" color={'#a697ce'}>submit a RFC!</Link> If you just need some help, try joining us in the  
              <span className={styles.span}> react-navigation</span> channel on <Link href="https://discord.gg/4xEK3nD" color={'#a697ce'}>Discord</Link> or 
              <Link href="https://stackoverflow.com/questions/tagged/react-navigation" color={'#a697ce'}> post a question to StackOverflow.</Link>
            </Text> 
          </Box>
        </Flex>

        <Flex w={'100vw'} py={"5em"} px={{ base:'1.5em', md:'8em' }} textAlign={'start'} flexDir={{ base:"column", md:'row' }}>

          <Center w="100%" gap={{ base:"2em", md:"3em"}} flexDir={{ base:"column", md:'row' }}>

            <Card minW={{ base:'100%', md:"15em" }} h={'100%'}  variant={'unstyled'} bg="transparent" color="#fefefe">
              <CardHeader>
                <Heading fontSize={"20px"}>Browse Docs and API</Heading>
              </CardHeader>
              <CardBody pt={{ base:'10px', md:'15px' }}>
                <Box>
                  <Box>
                    <Text>Learn more using the <Link href="https://reactnavigation.org/docs/getting-started" color={'#a697ce'}>documentation on this site.</Link></Text>
                  </Box>
                </Box>
              </CardBody>
            </Card>
          
            <Card minW={{ base:'100%', md:"15em" }} variant={'unstyled'} bg="transparent" color="#fefefe">
              <CardHeader>
                <Heading fontSize={"20px"}>Join the community</Heading>
              </CardHeader>
              <CardBody pt={{ base:'10px', md:'15px' }}>
                <Box>
                  <Text>
                    Ask questions about the documentation and project in the 
                    `#help-react-native` channel on the <Link href="https://discord.gg/reactiflux" color={'#a697ce'}>Reactiflux Discord.</Link>
                  </Text>
                </Box>
              </CardBody>
            </Card>
            
            <Card minW={{ base:'100%', md:"15em" }} variant={'unstyled'} bg="transparent" color="#fefefe">
              <CardHeader>
                <Heading fontSize={"20px"}>Stay up to date</Heading>
              </CardHeader>
              <CardBody pt={{ base:'10px', md:'15px' }}>
                <Box>
                  <Text>
                    Read the release notes for new versions of React Navigation
                    in the <Link href="https://github.com/react-navigation/react-navigation/releases" color={'#a697ce'}>releases tab on the Github repository.</Link>
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Center>
        </Flex>
      </Flex>
    </Layout>
  )
}
export default help