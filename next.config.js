/** @type {import('next').NextConfig} */
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
})

/* module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
}) */
