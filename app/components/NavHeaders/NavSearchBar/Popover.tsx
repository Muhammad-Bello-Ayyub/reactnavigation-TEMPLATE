'use client'

import {
  Box,
  Input,
  Center,
  Popover,
  IconButton, 
  InputGroup,
  PopoverHeader,
  PopoverContent,
  PopoverTrigger,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function XmPopover() {
    return (
        <Box display={{ base:'flex', md:'none' }} mr={{ base:'2em', md:'0' }}>
          <Popover placement={'top-start'}>
            <PopoverTrigger>
              <IconButton aria-label='search icon' borderRadius={'full'} size={'xs'} bg='#000' colorScheme='transparent'>
                <Center>
                  <Box>
                    <SearchIcon boxSize={'3'}/>
                  </Box>
                </Center>
              </IconButton>
            </PopoverTrigger>
            <PopoverContent  w={'fit-content'}>
              <PopoverHeader>
                <InputGroup size='sm'>
                  <InputLeftElement h='full'>
                    <Center>
                      <Box>
                        <SearchIcon boxSize={4}/>
                      </Box>
                    </Center>
                  </InputLeftElement>
                  <Input 
                    size='sm'
                    variant='outlined'
                    placeholder='Search' 
                    borderRadius='10px'
                  />
                </InputGroup>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </Box>
    )
}

export default XmPopover;