/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const cspHeader = `
    default-src 'self' http://localhost:3000 https://localhost:3000 https://www.thepopupweddingcreche.fr https://thepopupweddingcreche.fr;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com http://localhost:3000 https://thepopupweddingcreche.fr https://www.thepopupweddingcreche.fr;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    connect-src data: https://maps.googleapis.com https://maps.gstatic.com https://www.gstatic.com http://localhost:3000 https://localhost:3000 https://www.thepopupweddingcreche.fr https://thepopupweddingcreche.fr ws://localhost:3000 https://popupcreche-production.up.railway.app;
    img-src 'self' 'unsafe-inline' blob: data: https://maps.googleapis.com  https://maps.gstatic.com;
    font-src 'self' https://fonts.gstatic.com;
    worker-src blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig = {

  typescript: {
  
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },


  reactStrictMode: false,


    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
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
