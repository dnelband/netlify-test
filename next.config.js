/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
  },
};

module.exports = nextConfig;
