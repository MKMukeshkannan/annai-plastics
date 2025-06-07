import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [new URL('https://easchangesystems.com/wp-content/uploads/2015/08/130913_munchen_065.jpg')],
  },
};

export default nextConfig;
