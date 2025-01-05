/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'vectorified.com',
          },
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
          },
          {
            protocol: "https",
            hostname: "bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link"
          }, 
          {
            protocol: "https",
            hostname: "images.unsplash.com"
          },
          {
            protocol: "http",
            hostname: "localhost"
          }
        ],
      },
      redirects: async () => ([
        {
          source: "/category",
          destination: "/blog",
          permanent: false
        }
      ]),
};

export default nextConfig;