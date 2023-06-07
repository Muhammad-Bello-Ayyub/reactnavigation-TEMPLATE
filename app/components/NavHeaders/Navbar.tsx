'use client'

import NavIcon from './NavIcon/page';
import NavLinks from './NavLinks/page';
import { Flex } from '@chakra-ui/react';
import NavDrawer from './NavDrawer/page';
import NavSearchBar from './NavSearchBar/page';


function Navbar() {

  return (
    <>
      <Flex 
        alignItems='center' 
        w={'100vw'} 
        minH="5em"
        bg='black'
        fontSize={{ base:'20px', md:'22px' }} 
        pos={'fixed'}
        zIndex={99}
      >

        <NavDrawer />

        <NavIcon />

        <NavLinks />

        <NavSearchBar />

      </Flex>

    </>
  )
}

export default Navbar;