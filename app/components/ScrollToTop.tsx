'use client'

import { Box, Button } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.scrollY > 300; // Adjust the scroll position threshold as needed
      setShowButton(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({ smooth: true });
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <Box position="fixed" bottom="4" right="4" opacity={showButton ? 1 : 0} transition="opacity 0.3s">
      <Button
        w='50px'
        h='50px' 
        alignItems='center'
        colorScheme="blue" 
        borderRadius={'full'}
        onClick={handleClick}
        >  
        {<FaArrowUp size={'30px'}/>}   
      </Button>
    </Box>
  );
};

export default ScrollToTopButton;