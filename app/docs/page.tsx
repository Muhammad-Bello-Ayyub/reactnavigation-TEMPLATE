'use client'

import Layout from "../components/Layout"
import LeftContent from "./LeftView/page"
import RightContent from "./RightView/page"
import MiddleContent from "./MiddleContent/page"
import { Grid, GridItem, Hide } from "@chakra-ui/react"

function docsPage() {
  return (
    <Layout hideNavbarAndFooter={false}>
      <Grid 
        gap={4}
        w={'100vw'} 
        pt={'5.5em'}
        bg={'#1c1e21'} 
        color="#fefefe" 
        overflowX={'hidden'}
        h={'fit-content' } 
        pos={'relative'}
        templateColumns='repeat(5, 1fr)' 
      >
        <Hide below="md">
          <GridItem overflowX={'hidden'}>
            <LeftContent/>
          </GridItem>
        </Hide>

        <GridItem  colSpan={3} px={4} borderLeft={'1px'} borderColor={'whiteAlpha.200'}>
          <MiddleContent />
        </GridItem>

        <GridItem>
          <RightContent />
        </GridItem>
      </Grid>
    </Layout>
  )
}
export default docsPage;