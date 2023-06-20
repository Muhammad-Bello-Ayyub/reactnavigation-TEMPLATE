'use client'

import {
  Box,
  Input,
  Center,
  IconButton, 
  InputGroup,
  InputLeftElement,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  Show,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

function XmModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    
    return (
        <Show below='md'>
            <Box  mr={{ base:'20px', md:'0' }}>
                <Box borderRadius={'full'} onClick={onOpen} bg='#000' _hover={{ border:'2px',  borderColor:'#565872'}}>
                    <IconButton 
                        aria-label='search icon' 
                        borderRadius={'full'} 
                        boxSize={10}
                        bg='#000' 
                        colorScheme='transparent'
                    >
                        <Center>
                            <Box>
                                <SearchIcon boxSize={'5'} color='white' />
                            </Box>
                        </Center>
                    </IconButton>
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
                            <InputGroup size='sm' >
                                <InputLeftElement h='full' >
                                    <Center>
                                    <Box>
                                        <SearchIcon boxSize={4} color={'black'}/>
                                    </Box>
                                    </Center>
                                </InputLeftElement>
                                <Input 
                                    size='sm'
                                    bg='white'
                                    color={'black'}
                                    variant='outlined'
                                    placeholder='Search' 
                                    borderRadius='10px'
                                />
                            </InputGroup>
                        </FormControl>
                    </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </Show>
    )
}

export default XmModal;