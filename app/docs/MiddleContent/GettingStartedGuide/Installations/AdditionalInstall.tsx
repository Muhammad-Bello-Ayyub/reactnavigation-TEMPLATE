'use client'

import { useState } from 'react';
import { Box, Text, IconButton, Tooltip } from '@chakra-ui/react';
import { MdContentCopy } from 'react-icons/md';

const AdditionalInstall = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      `public class MainActivity extends ReactActivity {
        // ...
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(null);
        }
        // ...
    }`
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Box>
      <Text py={4}>
        Install the required packages in your React Native project:
      </Text>

      <Box display="flex" alignItems="center" bg="whiteAlpha.200" borderRadius="5px" my={4} p={4}>
        <Box flex="1">
          public class MainActivity extends ReactActivity &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;// ...
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;@Override
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;protected void onCreate(Bundle savedInstanceState) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super.onCreate(null);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;// ...
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
    </Box>
  );
};

export default AdditionalInstall;