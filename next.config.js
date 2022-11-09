/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['http://localhost:3000/(https://raw.githubusercontent.com/fedeperin/harry-potter-api/main/imagenes/harry_potter.png)'],
  }
}

module.exports = nextConfig
