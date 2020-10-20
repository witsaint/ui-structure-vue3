const vitePluginVuedoc = require('vite-plugin-vuedoc');
const md = require('./md.js');

module.exports = {
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  plugins: [md()],
};
