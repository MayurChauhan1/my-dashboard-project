// next.config.js
module.exports = {
    async redirects() {
        return [
            {
                source: '/old-dashboard',
                destination: '/dashboard',
                permanent: true,
            },
        ];
    },
};
