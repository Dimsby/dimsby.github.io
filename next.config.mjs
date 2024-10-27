/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    basePath: "/about",
    reactStrictMode: true,
};

export default nextConfig;