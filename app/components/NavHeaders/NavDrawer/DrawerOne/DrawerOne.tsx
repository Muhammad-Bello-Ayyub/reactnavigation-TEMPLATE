'use client'

import {
  Box,
  Menu,
  Drawer,
  IconButton, 
  MenuButton,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegMoon } from "react-icons/fa";
import DrawerOneLinks from './DrawerOneLinks';
import { SiSemanticuireact  } from 'react-icons/si';
import { HamburgerIcon } from '@chakra-ui/icons';


function DrawerOne() {

    const btnRef = React.useRef ();

    const { isOpen, onOpen, onClose } = useDisclosure ();

    return (
        <>  
            <Box display={{ base:'flex', md:'none' }} >
                <Menu >
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon color={'white'} boxSize={25}/>}
                        variant='unstyled'
                        ref={btnRef} 
                        onClick={onOpen}
                    />

                    <Drawer
                        size={'sm'}
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        colorScheme='blue'
                    >
                        <DrawerOverlay />
                        
                        <DrawerContent bg='#1b1b1d' color={'#fefefe'}>
                            <DrawerCloseButton />
                            <DrawerHeader display={'inline-list-item'} alignItems={'center'}>
                                <Box display={'inline-list-item'} alignItems={'center'}>
                                    <IconButton aria-label='logo' borderRadius={'full'} size={'sm'}>
                                        <SiSemanticuireact size={'full'}/>
                                    </IconButton>
                                    <Box ml='3' fontSize={'22px'}>
                                        React Naviga...
                                    </Box>
                                </Box>

                                <Box>
                                    <IconButton
                                        aria-label='toggle color mode'
                                        colorScheme='transparent'
                                        icon={<FaRegMoon color='white' size={20}/>}
                                        pl={'1em'}
                                    />
                                </Box>
                            </DrawerHeader>

                            <DrawerBody>
                                <DrawerOneLinks />
                            </DrawerBody>   
                        </DrawerContent>
                </Drawer>
                </Menu>
            </Box>
        </>
    )
}

export default DrawerOne;