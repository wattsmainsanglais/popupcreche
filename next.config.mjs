/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const cspHeader = `
    default-src 'self' http://localhost:3000 https://localhost:3000 https://www.thepopupweddingcreche.fr https://thepopupweddingcreche.fr;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com http://localhost:3000 https://thepopupweddingcreche.fr https://www.thepopupweddingcreche.fr;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    connect-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com https://www.gstatic.com http://localhost:3000 https://localhost:3000 https://www.thepopupweddingcreche.fr https://thepopupweddingcreche.fr ws://localhost:3000 https://popupcreche-production.up.railway.app;
    img-src 'self' 'unsafe-inline' blob: data: https://maps.googleapis.com  https://maps.gstatic.com https://tile.openstreetmap.org;
    font-src 'self' https://fonts.gstatic.com;
    worker-src blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig = {

  reactStrictMode: false,

  images: {
    // Keep optimised copies for 31 days (default is 4 hours), so the server re-processes images far less often
    minimumCacheTTL: 2678400,
  },

    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: cspHeader.replace(/\n/g, ''),
              },
            ],
          },
        ]
      },
    

};

export default withNextIntl(nextConfig);
