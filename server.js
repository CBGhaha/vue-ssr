
var express = require('express');
const server = express()
const { createBundleRenderer } = require('vue-server-renderer')
const template = require('fs').readFileSync('./index.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

server.get('*', (req, res,next) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
      if (err) {
        next()
      } else {
        res.end(html)
      }
    })

})
server.use(express.static('dist'));
server.listen(8080)
