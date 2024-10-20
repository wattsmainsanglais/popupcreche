/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const cspHeader = `
    default-src 'self' http://localhost:3000 https://localhost:3000 https://www.thepopupweddingcreche.fr 'https://thepopupweddingcreche.fr';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    connect-src https://maps.googleapis.com https://maps.gstatic.com http://localhost:3000 https://localhost:3000 https://www.thepopupweddingcreche.fr https://thepopupweddingcreche.fr ws://localhost:3000 ;
    img-src 'self' 'unsafe-inline' blob: data: https://maps.googleapis.com  https://maps.gstatic.com;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig = {

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
