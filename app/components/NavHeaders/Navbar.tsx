'use client'

import NavIcon from './NavIcon/page';
import NavLinks from './NavLinks/page';
import { Flex, Spacer } from '@chakra-ui/react';
import NavDrawer from './NavDrawer/page';
import NavSearchBar from './NavSearchBar/page';


function Navbar() {

  return (
    <Flex 
      p={5}
      gap={10}
      w={'100vw'} 
      zIndex={99}
      pos={'fixed'}
      align='center' 
      flexDir={'row'}
      bg='#1b1b1d'
      overflow={'hidden'}
      fontSize={{ base:'20px', md:'22px' }} 
    >
      <NavDrawer />

      <NavIcon />
    
      <NavLinks />
    
      <NavSearchBar />
      
    </Flex>
  )
}

export default Navbar;