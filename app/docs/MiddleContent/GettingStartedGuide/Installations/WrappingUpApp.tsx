'use client'

import { useState } from 'react';
import { Box, Text, IconButton, Tooltip } from '@chakra-ui/react';
import { MdContentCopy } from 'react-icons/md';

const WrappingUpApp = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      `import * as React from 'react';
      import { NavigationContainer } from '@react-navigation/native';
      
      export default function App() {
        return (
          <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
        );
      }
    }`
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

    return (
        <Box display="flex" alignItems="center" bg="whiteAlpha.200" borderRadius="5px" my={4} p={4}>
            <Box flex="1">
                import * as React from  &#123;react &#123;;
                    <br />
                import { /*.... */ } from &#123;@react-navigation/native&#123;;
                    <br />
                    export default function App() 
                    <br />
                    return (
                        {/* Rest of your app code */}
                        );
                    <br />
                &#125;
            </Box>

            <Tooltip label={isCopied ? 'Copied!' : 'Copy code'} placement="top" hasArrow>
            <IconButton
                icon={<MdContentCopy />}
                aria-label="Copy code"
                onClick={handleCopyClick}
                size="sm"
                ml={4}
            />
            </Tooltip>
        </Box>
    );
};

export default WrappingUpApp;