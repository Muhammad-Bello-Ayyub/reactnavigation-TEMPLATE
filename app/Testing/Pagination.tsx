'use client'
// import { Box, Button, Flex, Text } from '@chakra-ui/react';
// import Link from 'next/link';

// const Pagination = ({ currentPage, totalPages }) => {
//   const isFirstPage = currentPage === 1;
//   const isLastPage = currentPage === totalPages;

//   return (
//     <Flex align="center" justify="center" mt={4}>
//       <Box>
//         {!isFirstPage && (
//           <Link href={`/blog?page=${currentPage - 1}`} passHref>
//             <Button as="a" colorScheme="blue" mr={2}>
//               Previous
//             </Button>
//           </Link>
//         )}
//         {!isLastPage && (
//           <Link href={`/blog?page=${currentPage + 1}`} passHref>
//             <Button as="a" colorScheme="blue">
//               Next
//             </Button>
//           </Link>
//         )}
//       </Box>
//       <Text ml={4}>
//         Page {currentPage} of {totalPages}
//       </Text>
//     </Flex>
//   );
// };

// export default Pagination;

import { Box, Button, Flex, IconButton, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Flex align="center" justify="center" mt={4}>
      <Box>
        {!isFirstPage && (
          <Button colorScheme="blue" onClick={onPrev} mr={2}>
            Previous
          </Button>
        )}
        {!isLastPage && (
          <Button colorScheme="blue" onClick={onNext}>
            Next
          </Button>
        )}
      </Box>
      <Text ml={4}>
        Page {currentPage} of {totalPages}
      </Text>
      <IconButton
        ml={4}
        aria-label="Toggle Color Mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Pagination;


// import { Box, Button, Flex, Text } from '@chakra-ui/react';
// import Link from 'next/link';

// const Pagination = ({ currentPage, totalPages }) => {
//   const isFirstPage = currentPage === 1;
//   const isLastPage = currentPage === totalPages;

//   return (
//     <Flex align="center" justify="center" mt={4}>
//       <Box>
//         {!isFirstPage && (
//           <Link href={`/blog?page=${currentPage - 1}`} passHref>
//             <Button as="a" colorScheme="blue" mr={2}>
//               Previous
//             </Button>
//           </Link>
//         )}
//         {!isLastPage && (
//           <Link href={`/blog?page=${currentPage + 1}`} passHref>
//             <Button as="a" colorScheme="blue">
//               Next
//             </Button>
//           </Link>
//         )}
//       </Box>
//       <Text ml={4}>
//         Page {currentPage} of {totalPages}
//       </Text>
//     </Flex>
//   );
// };

// export default Pagination;



// import { Box, Button, Flex, Text } from '@chakra-ui/react';
// import Link from 'next/link';

// const Pagination = ({ currentPage, totalPages }) => {
//   const isFirstPage = currentPage === 1;
//   const isLastPage = currentPage === totalPages;

//   return (
//     <Flex align="center" justify="center" mt={4}>
//       <Box>
//         {!isFirstPage && (
//           <Link href={currentPage === 2 ? '/blog' : `/blog/page/${currentPage - 1}`} passHref>
//             <Button as="a" colorScheme="blue" mr={2}>
//               Previous
//             </Button>
//           </Link>
//         )}
//         {!isLastPage && (
//           <Link href={`/blog/page/${currentPage + 1}`} passHref>
//             <Button as="a" colorScheme="blue">
//               Next
//             </Button>
//           </Link>
//         )}
//       </Box>
//       <Text ml={4}>
//         Page {currentPage} of {totalPages}
//       </Text>
//     </Flex>
//   );
// };

// export default Pagination;