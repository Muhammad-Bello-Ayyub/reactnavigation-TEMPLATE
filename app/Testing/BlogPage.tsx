// Import the Pagination component
// import Pagination from './Pagination';

// const BlogPage = () => {
//   // Current page and total pages variables
//   const currentPage = 1; // Replace with the current page number
//   const totalPages = 10; // Replace with the total number of pages

//   return (
//     <div>
//       {/* Your blog content goes here */}

//       {/* Render the Pagination component */}
//       <Pagination currentPage={currentPage} totalPages={totalPages} />
//     </div>
//   );
// };

// export default BlogPage;

'use client'

import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const blogData = [
  // Replace with your actual blog data
  { id: 1, title: 'Blog Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Blog Post 2', content: 'Praesent in lectus non velit rhoncus ullamcorper vel vel lorem.' },
  { id: 3, title: 'Blog Post 3', content: 'Etiam a mauris a nisl imperdiet varius.' },
  // ...
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2; // Number of posts to display per page
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link href={`/blog/${post.id}`} passHref>
              <Button as="a" colorScheme="blue" mt={2}>
                Read More
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <Pagination currentPage={currentPage} totalPages={totalPages} onNext={handleNextPage} onPrev={handlePrevPage} />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
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
    </Flex>
  );
};

export default BlogPage;