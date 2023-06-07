
'use client'

import {
  Box,
  Menu,
  Drawer,
  MenuButton,
  IconButton, 
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegMoon } from "react-icons/fa";
import DrawerTwoLinks from './DrawerTwoLinks';
import { SiSemanticuireact  } from 'react-icons/si';
import { HamburgerIcon, ArrowBackIcon,} from '@chakra-ui/icons';


function DrawerTwo() {

    const btnRef = React.useRef ()

    const { isOpen, onOpen, onClose } = useDisclosure ()

    return (
        <> 
            <Drawer
                size={'xs'}
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                    <DrawerOverlay />
    
                    <DrawerContent>
    
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

                                <Button 
                                    w={'100%'}
                                    h={'2em'}
                                    fontSize={'20px'}
                                    bg={'purple.700'} 
                                    borderRadius={'4px'} 
                                    cursor={'pointer'}
                                    // onClick={drawerTwo}
                                >
                                    <ArrowBackIcon /> Back to main
                                </Button>

                                <DrawerTwoLinks /> 
                                
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Menu>
            </Box>
        </>
    )
}

export default DrawerTwo;