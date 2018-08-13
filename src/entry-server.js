// 服务端这边，需要把访问的路径给到 vue-router

import createApp from './app.js'

// 外面的express服务使用  {url: / /about}
// 访问 / 的时候 会自动匹配到 /favicon.ico
export default (context) => {
  
  return new Promise((resolve, reject) => {
    let { app, router } = createApp();
    router.push(context.url);

    router.onReady(() => {
      // 访问路径，可定匹配到组件
      let matchedCompoents = router.getMatchedComponents();
      if (!matchedCompoents.length) {
        return reject({ code: 404 })
      }
      resolve(app)
    }, reject)

  })
}
