'use client'

import {
  Box,
  Menu,
  Link,
  MenuList,
  MenuItem,
  MenuButton,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from "next/link"
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';

function DrawerOneLinks() {

    return (

        <>
            <Box pl={'2'} gap={5} display={{ base:'block', md: 'none' }} >
                <Box>
                    <NextLink href='/docs' passHref>
                        <Link>Docs</Link>
                    </NextLink>
                </Box>
                <Box>
                    <NextLink href='/blog' passHref>
                        <Link>Blog</Link>
                    </NextLink>
                </Box>
                <Box>
                    <Link href='https://github.com' isExternal>
                        GitHub <ExternalLinkIcon mx='2px'/>
                    </Link>
                </Box>
                <Box>
                    <NextLink href='/help' passHref>
                        <Link>Help</Link>
                    </NextLink>
                </Box>
                
                <Menu>
                    <MenuButton>
                        Verions<ChevronRightIcon mx={'2em'} />
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuItem>6.x</MenuItem>
                        <MenuItem >5.x</MenuItem>
                        <MenuItem >4.x</MenuItem>
                        <MenuItem >3.x</MenuItem>
                        <MenuItem>2.x</MenuItem>
                        <MenuItem>1.x</MenuItem>
                        <MenuItem>All versions</MenuItem>
                    </MenuList>
                </Menu>  

            </Box>
        </>
    )
}

export default DrawerOneLinks;