/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["t1.daumcdn.net", "images.unsplash.com"],
    },
    i18n: {
        locales: ['en', 'ko'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig
