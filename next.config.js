const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/imgixLoader.js",
    domains: ["spectate.imgix.net"],
  },
};

module.exports = withNextra(nextConfig)
