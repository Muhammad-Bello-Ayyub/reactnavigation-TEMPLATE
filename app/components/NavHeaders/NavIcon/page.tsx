'use client'

import {
  Box,
  IconButton,
  Link, 
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { SiSemanticuireact  } from 'react-icons/si';


function NavIcon() {

  return (
    <>
      <Link as={NextLink} href='/' _hover={{ textDecoration: "none" }}>
        <Box p='2' display={'inline-list-item'} alignItems={'center'}>
          <IconButton aria-label='logo' borderRadius={'full'} size={'md'}>
            {/* <SiSemanticuireact size={50}/></Link> */}
            LOGO
          </IconButton>
          <Box ml='3' color="#fefefe">
            React Navigation
          </Box>
        </Box>
      </Link>
    </>
  )
}

export default NavIcon