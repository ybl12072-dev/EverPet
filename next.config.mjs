/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Memorial photos will come from user uploads (Supabase/S3) later.
    // For the MVP scaffold we allow the placeholder image host.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
