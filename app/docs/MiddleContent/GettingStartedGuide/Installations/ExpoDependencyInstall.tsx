'use client'

import { useState } from 'react';
import { CopyIcon } from '@chakra-ui/icons';
import styles from './../../styles.module.css'
import { Box, Flex, Spacer, Tabs, TabList, Tab, TabPanels, TabPanel, Tooltip, IconButton } from '@chakra-ui/react';

const DependenciesInstall = () => {
    
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (code: string) => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

    return (
        <Tabs variant="unstyled">
            <TabList>
                <Tab>
                    In your project directory, run:
                </Tab>
            </TabList>
            <TabPanels bg={'whiteAlpha.200'} borderRadius="5px" my={4}>
                <TabPanel>
                    <Flex flexDir='row' align={'center'} >
                        <Box>npx expo <span className={styles.green}>install</span> react-native-screens react-native-safe-area-context</Box>
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
            </TabPanels>
        </Tabs>
    );
};

export default DependenciesInstall;