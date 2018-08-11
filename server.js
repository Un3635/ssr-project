// const favicon = require('serve-favicon');
const express = require('express');
const app = express();
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

let renderer;
if(isProd) {
  ;
} else {
  require('./build/dev-server')(app, (bundle, template) => {
    renderer = createRenderer(bundle, template);
  });
}
function createRenderer(bundle, template) {
  return require('vue-server-renderer').createBundleRenderer(bundle, {
    template
  });
}
// const vueRenderer = require('vue-server-renderer');

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html;charset=utf-8;')
  renderer.renderToString({ url: req.url }).then((html) => {
    res.end(html)
  }).catch(err => console.log(err))
})
app.listen(9091,'0.0.0.0', () => {
  console.log('9091启动成功');
});