import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
}

module.exports = {
  turbopack: {
    // Example: adding an alias and custom file extension
    // rules: {
    //   '*.svg': {
    //     loaders: ['@svgr/webpack'],
    //     as: '*.js',
    //   },
    // },
    resolveExtensions: [".pdf,.md"],
  },
}
 
export default nextConfig