'use client'

import {
  Kbd, 
  Box,
  Input,
  Center,
  HStack,
  Popover,
  InputGroup,
  PopoverHeader,
  PopoverContent,
  PopoverTrigger,
  InputLeftElement,
} from '@chakra-ui/react';
import XmPopover from './Popover';
import { SearchIcon } from '@chakra-ui/icons';

function NavSearchBar() {

  return (
    <>
      <Box display={{ base:'none', md:'flex' }} h='fit-content' cursor="pointer">
        <Popover placement={'right-start'}>
          <PopoverTrigger>
            <Box bg='#000' px={2} borderRadius="15px" mr={4}>
              <HStack spacing='5px'>
                <Box pl={1}>
                  <SearchIcon boxSize={4} color='white'/>
                </Box>

                <Box color="gray.200" fontSize={'16px'}>
                  Search
                </Box>
                
                <Box fontSize={15}>
                  <Kbd>CTRL</Kbd> <Kbd>K</Kbd>
                </Box>  
              </HStack>
            </Box>
          </PopoverTrigger>

          <PopoverContent>
            <PopoverHeader>
              <InputGroup size='sm'>
                <InputLeftElement h='full'>
                  <Center>
                    <Box>
                      <SearchIcon boxSize={5}/>
                    </Box>
                  </Center>
                </InputLeftElement>
                <Input 
                  size='md'
                  variant='outlined'
                  placeholder='Search' 
                  bg={'blackAlpha.600'}
                  borderRadius={'10px'}
                />
              </InputGroup>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </Box>

      {/* This layout'll be displayed on small screen devices */}
      <XmPopover />
    </>
  )
}

export default NavSearchBar