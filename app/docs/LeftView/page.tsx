'use client'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Hide, LinkBox
  } from '@chakra-ui/react'
import Link from 'next/link'

function LeftContent() {

    return (
        <Hide below="md">
            <Accordion pos={'fixed'} defaultIndex={[0]} allowMultiple variant={'unstyled'}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Fundamentals
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Getting started</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Hello React Navigation</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Moving between screens</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Passing parameters to routes</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Configuring the header bar</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Header buttons</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Nesting navigators</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Navigation lifecycle</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Next steps</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Glossary of terms</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Troubleshooting</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Limitations</LinkBox>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Guides
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Tab navigation</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Drawer navigation</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Authentication flows</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Supporting safe areas</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Hiding tab bar in specific screens</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Different status bar configuration based on route</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Opening a modal</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Multiple drawers</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Screen options with nested navigators</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Custom Android back button behavior</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Animating elements between screens</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Preventing going back</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Call a function when focused screen changes</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Access the navigation prop from any component</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Navigating without the navigation prop</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Deep linking</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Configuring links</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Web support</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Server rendering</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Screen tracking for analytics</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Themes</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>State persistence</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Testing with Jest</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Type checking with TypeScript</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Redux integration</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>MobX State Tree integration</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Upgrading from 5.x</LinkBox>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Navigators
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }} w='100%'>Stack</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Native Stack</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Drawer</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Bottom Tabs</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Material Bottom Tabs</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}> Material Top Tabs</LinkBox>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Libraries
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Developer tools</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Elements</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Tab View</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Drawer Layout</LinkBox>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                API reference
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>NavigationContainer</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>ServerContainer</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Group</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Screen</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Options for screens</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Route prop</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Navigation prop</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>NavigationContext</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Navigation events</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Navigation state</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Link</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Hooks</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Actions</LinkBox>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Build your own Navigator
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Custom routers</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Custom navigators </LinkBox>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Additional resources
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Migration Guides</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Navigation Solutions and Community Libraries</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>More Resources</LinkBox>
                        </Box>
                    </AccordionPanel>
                    
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Meta 
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} w='100%'>
                        <Box w='100%' px={4} display='grid' gap={2} textAlign={'start'}>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Pitch & anti-pitch</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Apps using React Navigation</LinkBox>
                            <LinkBox as={Link} href={'/docs'} _hover={{  bg:'whiteAlpha.100' }}>Contributing</LinkBox>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Hide>
    )
}

export default LeftContent