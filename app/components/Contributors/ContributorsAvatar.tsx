'use client'

import Image from "next/image";
import { useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

function ContributorsAvatar() {
  
    const [ contributors, setContributors ] = useState([
      {
         "img": "/images/1.png"
      },
      {
         "img": "/images/2.png"
      },
      {
         "img": "/images/3.jpeg"
      },
      {
         "img": "/images/4.png"
      },
      {
         "img": "/images/5.jpeg"
      },
      {
         "img": "/images/6.jpeg"
      },
      {
         "img": "/images/7.png"
      },
      {
         "img": "/images/8.jpeg"
      },
      {
         "img": "/images/9.png"
      },
      {
         "img": "/images/10.png"
      },
      {
         "img": "/images/11.png"
      },
      {
         "img": "/images/12.jpeg"
      },
      {
         "img": "/images/13.jpeg"
      },
      {
         "img": "/images/14.png"
      },
      {
         "img": "/images/15.jpeg"
      },
      {
         "img": "/images/16.jpeg"
      },
      {
         "img": "/images/17.png"
      },
      {
         "img": "/images/18.jpeg"
      },
      {
         "img": "/images/19.jpeg"
      },
      {
         "img": "/images/20.png"
      },
      {
         "img": "/images/21.jpeg"
      },
      {
         "img": "/images/22.png"
      },
      {
         "img": "/images/23.png"
      },
      {
         "img": "/images/24.png"
      },
    ])


  return (
    <SimpleGrid gap={10} columns={contributors.length} minChildWidth={"30px"} w={"100vw"}>
      {contributors.map((contributor, index) => (
        <Box key={index} boxSize={'50px'}>
            <Image
               alt="Avatars"
               src={contributor.img}
               width={50}
               height={50}
               style={{ borderRadius: "3px", cursor:"pointer" }}
            />
         </Box>
      ))}
    </SimpleGrid>
  );
}

export default ContributorsAvatar;