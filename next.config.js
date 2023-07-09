/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["t1.daumcdn.net"]
    },
    i18n: {
        locales: ['en', 'ko'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig
