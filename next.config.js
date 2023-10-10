const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  images: process.env.NODE_ENV === "production" ? {
    loader: "custom",
    loaderFile: "./lib/cfImagesLoader.js",
    domains: ["docs.spectate.net"],
  } : undefined,
};

module.exports = withNextra(nextConfig)
