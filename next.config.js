/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    compiler: {
        removeConsole: true,
    }
}

module.exports = withContentlayer({ ...nextConfig })

const path = require('path')

// module.exports = {
//   webpack: config => {
//     config.resolve.modules.push(path.resolve('./'))

//     return config
//   }
// }