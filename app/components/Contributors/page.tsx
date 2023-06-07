'use client'

import { Box, Center, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { uuid } from 'uuidv4';


function ContributorsMainPage() {

   const [ contributors, setContributors ] = useState([
      {
         "img": "https://avatars.githubusercontent.com/u/476779?v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/1057756?u=15c3cdff1c715ac27bbc63ccb8f0a1c27eeb3784&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/1257695?u=e142a0ae6314aa8b462e664db429d926b31bf978&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/1396951?v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/1629785?u=5b5d80ddcda83e4780e2391b2d0b475f442289bd&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/1764217?u=5e2e591796f65dba2551966be41b18456262856e&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/2443340?v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/4328772?u=c4e0fd72bd7cdb3751166c8ade8ef253e6f5ba67&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/5216601?u=33277f486965d5cbb390b76bf8b2cea89e20dec0&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/5967956?u=f7f5ed6b6b399c2953fd0e3be0512c378e9f76c4&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/6457344?u=47e100289441b7f4681a7809202ff683886e4f5e&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/7029942?u=5eb1fed31f05fe97bcb07227268165c4028cc662&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/9664363?u=46ba6d5fbd29729df2950b845c9ca2cd085a1c2b&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/12868063?u=bd60f0dc2fade84162e3e78fc6ddff01e6c04dbe&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/13172299?u=ec499b3d93c1fc422749842a957d22376355b949&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/13601619?v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/15199031?u=46da50e88594eb284cf249485f202d5d43d474d1&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/22625371?v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/27461460?u=594bf0d192c7d1bdffa89f17b4cf868d7e237ae9&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/46625943?u=63c9ed9017c34900df8b5ae2ed455ec4c82ef8aa&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/49920282?v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/66008143?u=df20807f45e886661c2f73e1647e3d5b6a712de5&amp;v=4"
      },
      {
         "img": "https://avatars.githubusercontent.com/u/81703263?u=c184298ee203c84546224b4397a9a68235caf1db&amp;v=4"
      },
   ])

   return (
      <Flex w='100vw' h='90vh' bg={'purple.900'} align={'center'}>
         <Flex flexDir={'column'} fontSize={'25px'} color={'#fefefe'} w='fit-content' align={'center'}>
            <Flex align={'center'}>
               <Text p={4} textAlign='center'>
                  React Navigation is built by{' '}
                  <Link fontWeight={'bold'} href='#'>Expo, Software Mansion,</Link>{' '}and{' '}
                  <Link fontWeight={'bold'} href='#'>{' '}Callstack{' '}</Link>, with contributions from the{' '}
                  <Link fontWeight={'bold'} href='#'>community</Link>{' '}and{' '}<Link fontWeight={'bold'} href='#'>sponsors</Link>:
               </Text>
            </Flex>
            {/* <Box maxW='85vw' dir={'row'}> */}
               <SimpleGrid spacing={10} minChildWidth={"100px"} dir="row">
                  { contributors && contributors.map(contributor =>(
                     <Image
                        key={uuid()}
                        width={110}
                        height={110}
                        priority
                        src={`${contributor.img}`}
                        alt='img Avatars'
                     />
                  ))} 
               </SimpleGrid>
            {/* </Box>  */}
            <Flex maxW='fit-content' align={'center'}>
               <Text p={4}>
                  <Center>
                     If React Navigation is helpful to you, consider{' '}
                     <Link fontWeight={'bold'} href='#'>supporting the project by sponsoring it 💜</Link>
                  </Center>
               </Text>
            </Flex>
         </Flex>
      </Flex>
   )
}

export default ContributorsMainPage;
