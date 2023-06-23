import { useState } from 'react';
import { CopyIcon } from '@chakra-ui/icons';
import styles from './../../styles.module.css'
import { Box, Flex, Spacer, Tabs, TabList, Tab, TabPanels, TabPanel, Tooltip, IconButton } from '@chakra-ui/react';

const ReactDependencyInstall = () => {
    
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (code: string) => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

    return (
        <Box py={4}>
            <Tabs variant="unstyled">
                <TabList>
                    <Tab _selected={{ borderBottom: '4px', borderColor: '#a697ce', color:'#a697ce' }} _hover={{ bg: 'whiteAlpha.200', borderTopRadius: '10px' }}>
                        npm
                    </Tab>
                    <Tab _selected={{ borderBottom: '4px', borderColor: '#a697ce', color:'#a697ce' }} _hover={{ bg: 'whiteAlpha.200', borderTopRadius: '10px' }}>
                        Yarn
                    </Tab>
                </TabList>

                <TabPanels bg={'whiteAlpha.200'} borderRadius="5px" my={4}>
                    <TabPanel>
                        <Flex flexDir='row' align={'center'} >
                            <Box><span className={styles.green}>npm install</span> react-native-screens react-native-safe-area-context</Box>
                            <Spacer />
                                <Box>
                                <Tooltip label={isCopied ? 'Copied!' : 'Copy code'} placement="top" hasArrow>
                                    <IconButton
                                    icon={<CopyIcon />}
                                    aria-label="Copy code"
                                    onClick={() => handleCopyClick('npm install @react-navigation/native')}
                                    size="sm"
                                    mr={2}
                                    />
                                </Tooltip>
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex flexDir='row' align={'center'} >
                            <Box><span className={styles.green}>yarn add</span> react-native-screens react-native-safe-area-context</Box>
                            <Spacer />
                            <Box>
                                <Tooltip label={isCopied ? 'Copied!' : 'Copy code'} placement="top" hasArrow>
                                    <IconButton
                                    icon={<CopyIcon />}
                                    aria-label="Copy code"
                                    onClick={() => handleCopyClick('yarn add @react-navigation/native')}
                                    size="sm"
                                    mr={2}
                                    />
                                </Tooltip>
                            </Box>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default ReactDependencyInstall;