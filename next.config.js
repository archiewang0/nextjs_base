// import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 當/pages 裡面使用nodejs 的套件時候可以使用相關的config 設定
  // webpack5: true,
  // webpack: (config) => {
  //   // config.resolve.fallback = {
  //   //   fs: false,
  //   // };
  //   config.resolve = {
  //     ...config.resolve,
  //     fallback: { fs: false },
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
