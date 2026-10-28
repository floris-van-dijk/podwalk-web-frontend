const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'NPO Podwalks'
    }
  },
  devServer: {
    proxy: {
      // Only proxy podwalks API requests
      '^/podwalks-api': {
        target: '',
        changeOrigin: true,
        secure: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/podwalks-api': '' // Remove /podwalks-api prefix when forwarding
        },
        onProxyReq: (proxyReq, req, res) => {
          // Add the API key header to the proxied request
          proxyReq.setHeader('X-API-KEY', '');
          console.log('🔄 Proxying podwalks request to:', ``);
        }
      }
    }
  }
})
