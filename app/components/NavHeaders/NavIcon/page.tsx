'use client'

import {
  Box,
  IconButton, 
} from '@chakra-ui/react';
import { SiSemanticuireact  } from 'react-icons/si';


function NavIcon() {

  return (
    <>
        <Box p='2' display={'inline-list-item'} alignItems={'center'}>
          <IconButton aria-label='logo' borderRadius={'full'} size={'sm'}>
            <SiSemanticuireact size={'full'}/>
          </IconButton>
          <Box ml='3' color="#fefefe">
            React Navigation
          </Box>
        </Box>
    </>
  )
}

export default NavIcon