/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
          pathname: '/u/**',
        },
      ],
    },
  };

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