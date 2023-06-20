'use client'

import {
  Kbd, 
  Box,
  Input,
  Center,
  HStack,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  useDisclosure,
  Hide,
} from '@chakra-ui/react';
import XmModal from './Modal';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

function NavSearchBar() {

  const { isOpen, onOpen, onClose } = useDisclosure()


  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
      <Hide below='md'>
        <Box 
          onClick={onOpen}  
          bg='#000' 
          px={2} 
          borderRadius="15px" 
          mr={4} 
          cursor={'pointer'} 
          _hover={{ border:'2px',  borderColor:'#565872'}}
        >
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
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody pb={6}>
              <FormControl>
                <InputGroup size='sm'>
                  <InputLeftElement h='full'>
                    <Center>
                      <Box>
                        <SearchIcon boxSize={5} color='black'/>
                      </Box>
                    </Center>
                  </InputLeftElement>
                  <Input 
                    size='lg'
                    bg='white'
                    color={'black'}
                    variant='outlined'
                    placeholder='Search' 
                    borderRadius={'10px'}
                    ref={initialRef}
                  />
                </InputGroup>
              </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Hide>

      {/* small screen display */}
      <XmModal />
    </>
  )
}

export default NavSearchBar