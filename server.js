// const favicon = require('serve-favicon');
const express = require('express');
const app = express();
const path = require('path');
const resolve = file => path.resolve(__dirname, file);
const favicons = require('serve-favicon');
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
app.use(favicons(path.resolve(__dirname + '/static/favicon.ico'))); // connect-favicons 使用时 会跑2次，并且最后一次是 将图片的地址进行累加了一次
app.use(express.static(path.join(__dirname, '/static')));

app.get('*', (req, res) => {
  console.log('url', req.url)
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.');
  }
  res.setHeader('Content-Type', 'text/html;charset=utf-8;')
  const errorHandler = err => {
    if (err && err.code === 404) {
      // 未找到页面
      // res.status(404).sendFile(resolve('public/404.html'));
      res.status(404).end('404');
    } else {
      // 页面渲染错误
      res.status(500).end('500 - Internal Server Error');
      console.error(`error during render : ${req.url}`);
      console.error(err);
    }
  };
  // *** html 在前
  renderer.renderToString({ url: req.url }).then((html, err) => {
    if (err) {
      return errorHandler(err);
    }
    res.end(html);
  }).catch(err => console.log(err))
})
app.listen(9091, () => {
  console.log('9091启动成功');
});