const path = require('path');
const fs = require('fs');
const marked = require('marked');

const mdToJs = str => {
  const content = marked(str);
  return `
  import { defineComponent, h } from '/@modules/vue.js';
  const com = h('div', {
        innerHTML: ${JSON.stringify(content)}
      })
  export default com`
};

module.exports = () => {
  return {
    configureServer: [
      async ({ app }) => {
        app.use(async (ctx, next) => {
          if (ctx.path.endsWith('.md')) {
            ctx.type = 'js';
            const filePath = path.join(process.cwd(), ctx.path);
            ctx.body = mdToJs(fs.readFileSync(filePath).toString());
            await next();
          } else {
            await next()
          }
        })
      },
    ],
    rollupPluginVueOptions: {
      include: /\.(vue|md)$/
    },
    transforms: [{
      test: context => context.path.endsWith('.md'),
      transform: ({ code }) => code
    }]
  }
};
