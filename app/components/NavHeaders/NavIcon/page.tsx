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
        <Box p='2' display={'inline-list-item'} alignItems={'center'}>
          <IconButton aria-label='logo' borderRadius={'full'} size={'sm'}>
            <Link as={NextLink} href='/'><SiSemanticuireact size={'full'}/></Link>
          </IconButton>
          <Box ml='3' color="#fefefe">
            React Navigation
          </Box>
        </Box>
    </>
  )
}

export default NavIcon