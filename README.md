# @vite/vuepress-plugin-mathjax

> A mathjax render plugin for vuepress. It will render mathjax in server, without import some extra files in client.

## Install

```
yarn add -D @vite/vuepress-plugin-mathjax
```

Add `@vite/vuepress-plugin-mathjax` to `config.js`:

```javascript
plugins: [
    ['@vite/vuepress-plugin-mathjax', {
      tex2html: {},
      mathjax: {}
    }]
  ]
```

## Config

### `tex2html`

* **Type**: `Object`
* **Default**: {}

When generate `mathjax.css`, it will use this config. About more detail please visit [markdown-it-mathjax-chtml](https://github.com/yamavol/markdown-it-mathjax-chtml)


### `mathjax`

* **Type**: `Object`
* **Default**: {}

The mathjax config. [mathjax-v3](https://github.com/mathjax/mathjax-v3)