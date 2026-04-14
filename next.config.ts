import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.assettype.com' },
      { protocol: 'https', hostname: 'www.digitalindiagov.in' },
      { protocol: 'https', hostname: 'wpblogassets.paytm.com' },
      { protocol: 'https', hostname: 'voterlist.co.in' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'behuraprint.com' },
      { protocol: 'https', hostname: 'www.kktaxiservices.com' },
      { protocol: 'https', hostname: 'greatchoice.co.in' },
      { protocol: 'https', hostname: 'www.gadgets360.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
    ],
  },
};

export default nextConfig;
