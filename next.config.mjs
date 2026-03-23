/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source:      '/tretmani-usluge',
        destination: '/ponuda',
        permanent:    true,
      },
    ]
  },
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
