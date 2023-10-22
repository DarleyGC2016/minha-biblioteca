/** @type {import('jest').Config} */
const config = {
    transformIgnorePatterns: [
        '/node_modules/(?!axios)/',
        '/node_modules/(?!swr)/',
        '/src/(?!hooks)/'
    ],
};
module.exports = config;