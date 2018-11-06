const fs = require('fs');
const path = require('path');
const mj = require('markdown-it-mathjax-chtml');
const tex2html = require('markdown-it-mathjax-chtml/src/tex2html');


module.exports = (options, ctx) => {
  const mathjaxStylePath = path.resolve(ctx.tempPath, 'plugins-mathjax.css')


  return {
    async ready() {
      options = Object.assign({
        tex2html: options.tex2html || {},
        mathjax: options.mathjax || {}
      }, options)

      const css = tex2html('', options.tex2html).css;
      fs.writeFileSync(mathjaxStylePath, css);
    },
    extendMarkdown: md => {
      md.use(mj, {
        mathjax: options.mathjax
      })
    },
    enhanceAppFiles: [
      {
        name: 'mathjaxClient',
        content: `
          import '${mathjaxStylePath}'
          export default ({Vue, options, router, siteData}) => {
            // Ignore mathjax element
            Vue.config.ignoredElements = [
              /^mjx-/
            ]
          }
        `
      }
    ]
  }
}
