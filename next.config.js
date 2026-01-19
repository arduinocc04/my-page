/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        domains: ["t1.daumcdn.net", "images.unsplash.com"],
    }
}

module.exports = withNextIntl(nextConfig)
