/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['raw.githubusercontent.com'],
    // pathname:['raw.githubusercontent.com']
  }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http://localhost:3000/(https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/harry_potter.png',
  //       hostname: 'raw.githubusercontent.com',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
