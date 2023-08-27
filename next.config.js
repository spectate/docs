const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  images: process.env.NODE_ENV === "production" ? {
    loader: "custom",
    loaderFile: "./lib/imgixLoader.js",
    domains: ["spectate.imgix.net"],
  } : undefined,
};

module.exports = withNextra(nextConfig)
