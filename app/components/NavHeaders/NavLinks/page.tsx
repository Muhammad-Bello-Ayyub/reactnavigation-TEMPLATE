'use client'

import {
  Box,
  Menu,
  Link,
  Show, 
  Hide,
  Spacer,
  Button,
  MenuItem,
  MenuList,
  MenuButton, 
  useColorMode, 
  useColorModeValue,
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

  return (
    <>
      <Links />

      <Show above='md'>
        <Menu>
          <MenuButton bg='transparent' as={Button} rightIcon={<ChevronDownIcon />}>
            7.x
          </MenuButton>
          <MenuList>
            <MenuItem >6.x</MenuItem>
            <MenuItem >5.x</MenuItem>
            <MenuItem >4.x</MenuItem>
            <MenuItem >3.x</MenuItem>
            <MenuItem>2.x</MenuItem>
            <MenuItem>1.x</MenuItem>
            <MenuItem>All versions</MenuItem>
          </MenuList>
        </Menu>
      
        <Spacer/>

        <Box color="#fefefe" p='2' gap={0.3} display={{ md:'inline-list-item' }}  alignItems={'center'}>
          <Box>
            <Link as={NextLink} href='https://github.com/react-navigation' isExternal>
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