'use client'

import {
  Box,
  Link,
  Show, 
  Spacer,
  Tooltip,
  useColorMode, 
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import Links from './Links';
import NextLink from "next/link"
import { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { ChevronDownIcon, ExternalLinkIcon, } from '@chakra-ui/icons';

function NavLinks() {

  const {toggleColorMode} = useColorMode();
  const [toggle, setToggle] = useState(false);

  const formBackground = useColorModeValue("gray.100", "gray.700");
  
  const CustomToolTip = () => (
    <List spacing={3} color='white' w='5em' textAlign={'center'}>
      <ListItem>
        <Box> <Link as={NextLink} href='/docs' _hover={{ textDecoration: "none" }}>6.x</Link></Box>
      </ListItem>
      <ListItem>
        <Box >5.x</Box>
      </ListItem>
      <ListItem>
        <Box >4.x</Box>
      </ListItem>
      <ListItem>
        <Box >3.x</Box>
      </ListItem>
      <ListItem>
        <Box >2.x</Box>
      </ListItem>
      <ListItem>
        <Box >1.x</Box>
      </ListItem>
    </List>
  )


  return (
    <>
      <Links />

      <Show above='md'>
        <Tooltip  bg='#1b1b1d' label={<CustomToolTip />} placement='bottom' closeDelay={500}>
          <Box>7.x <ChevronDownIcon /></Box>
        </Tooltip>
      
        <Spacer/>

        <Box color="#fefefe" p='2' gap={0.3} display={{ md:'inline-list-item' }}  alignItems={'center'}>
          <Box>
            <Link as={NextLink} href='https://github.com/react-navigation' isExternal _hover={{ textDecoration: "none" }}>
              GitHub <ExternalLinkIcon mx='2px'/>
            </Link>
          </Box>
          <Box
            px={5}
            onClick={() =>{
              toggleColorMode();
              setToggle(!toggle);}}
            cursor={"pointer"}
            >
              { toggle ? <IoSunny /> : <IoMoon /> }
          </Box>
        </Box>
      </Show>
    </>
  )
}

export default NavLinks