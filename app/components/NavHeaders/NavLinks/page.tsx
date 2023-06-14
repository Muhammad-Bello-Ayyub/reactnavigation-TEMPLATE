'use client'

import {
  Box,
  Menu,
  Link,
  Spacer,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton, 
} from '@chakra-ui/react';
import Links from './Links';
import NextLink from "next/link"
import { FaRegMoon } from "react-icons/fa";
import { ChevronDownIcon, ExternalLinkIcon, } from '@chakra-ui/icons';


function NavLinks() {

  return (
    <>
      <Links />

      <Box display={{ base:'none', md:'flex' }} color="#fefefe">
        <Menu>
          <MenuButton>
            7.x <ChevronDownIcon />
          </MenuButton>
          <MenuList minWidth='240px' _expanded={{ bg: 'blackAlpha.400' }}>
            <MenuItem >6.x</MenuItem>
            <MenuItem >5.x</MenuItem>
            <MenuItem >4.x</MenuItem>
            <MenuItem >3.x</MenuItem>
            <MenuItem>2.x</MenuItem>
            <MenuItem>1.x</MenuItem>
            <MenuItem>All versions</MenuItem>
            <MenuItem ></MenuItem> 
          </MenuList>
        </Menu>  
      </Box>
      <Spacer/>

      <Box color="#fefefe" p='2' gap={0.3} display={{ base:'none', md:'inline-list-item' }}  alignItems={'center'}>
        <Box>
          <Link as={NextLink} href='https://github.com/react-navigation' isExternal>
            GitHub <ExternalLinkIcon mx='2px'/>
          </Link>
        </Box>
        <Box>
          <IconButton
            aria-label='toggle color mode'
            colorScheme='transparent'
            icon={<FaRegMoon color='white' size={20}/>}
          />
        </Box>
      </Box>
    </>
  )
}

export default NavLinks