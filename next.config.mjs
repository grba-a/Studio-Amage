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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',    value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy',    value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
