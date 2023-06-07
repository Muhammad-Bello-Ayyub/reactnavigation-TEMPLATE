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
        <Box display={{ base:'none', md:'flex' }} h='fit-content'>
          <Popover placement={'right-start'}>
            <PopoverTrigger>
              <Box bg='gray.500' borderRadius="15px" mr={4}>
                <HStack spacing='2px'>
                  <Box pl={1}>
                    <SearchIcon boxSize={2.5}/>
                  </Box>

                  <Box color="gray.200" fontSize={'20px'}>
                    Search
                  </Box>
                  
                  <Box pr={0.5} alignItems={'center'}>
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