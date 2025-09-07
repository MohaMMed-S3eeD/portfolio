import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // يقلل حجم الحِزم عبر تقسيم الاستيرادات إلى وحدات أصغر
    optimizePackageImports: ["gsap", "@gsap/react", "lucide-react"],
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
