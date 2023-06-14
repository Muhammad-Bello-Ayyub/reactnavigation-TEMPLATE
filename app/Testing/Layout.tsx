// {
//   "services": [
//     {
//        "id":1,
//        "title":"Easy to Use",
//        "description":"Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.",
//        "img": "https://reactnavigation.org/img/home_smile.svg"
//     },
//     {
//        "id":2,
//        "title":"Components built for iOS and Android",
//        "description":"Platform-specific look-and-feel with smooth animations and gestures.",
//        "img": "https://reactnavigation.org/img/home_devices.svg"
//     },
//     {
//        "id":3,
//        "title":"Completely customizable",
//        "description":"If you know how to write apps using JavaScript you can customize any part of React Navigation.",
//        "img": "https://reactnavigation.org/img/home_star.svg"
//     },
//     {
//        "id":4,
//        "title":"Extensible platform",
//        "description":"React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.",
//        "img": "https://reactnavigation.org/img/home_extend.svg"
//     }
//  ]
// }




// import { useState } from "react"
// import { Box, SimpleGrid, Image } from "@chakra-ui/react"

// function ContributorsAvatar() {

//     return (
//         <SimpleGrid columns={contributors.length} spacing={10} minChildWidth={"30px"} gap={2} w={'100%'}>
//             {contributors.map((contributor, index) => (
//                 <Box key={index}>
//                     <Image
//                         alt='Avatars'
//                         boxSize='100px' // Adjust the size according to your requirements
//                         objectFit='cover'
//                         borderRadius='10px'
//                         src={`${contributor.img}`}
//                         fallbackSrc='https://via.placeholder.com/150'
//                     /> 
//                 </Box>
//             ))}
//         </SimpleGrid>
//     )
// }

// export default ContributorsAvatar;


// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'avatars.githubusercontent.com',
//           port: '',
//           pathname: '/u/**',
//         },
//       ],
//     },
//   };

//   module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: '**.example.com',
//         },
//       ],
//     },
//   };

// https://img1.example.com or https://me.avatar.example.com


// <Image
//    key={uuid()}
//    width={110}
//    height={110}
//    priority
//    src={`${contributor.img}`}
//    alt='img Avatars'
// />
{/* <SimpleGrid columns={contributors.length} spacing={10} minChildWidth={"30px"} gap={2}>
{ contributors && contributors.map(contributor =>(
   <Box boxSize='20px' key={uuidv4()}>
      <Image
         alt='Avatars'
         boxSize='500px'
         objectFit='cover'
         borderRadius='10px'
         src={`${contributor.img}`}
         fallbackSrc='https://via.placeholder.com/150'
      /> 
   </Box>
))} 
</SimpleGrid>*/}