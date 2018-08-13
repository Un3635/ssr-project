import createApp from './app.js'

let { app, router } = createApp()

router.onReady(() => {
  // router.beforeResolve((to, from, next) => {
  //   const matched = router.getMatchedComponents(to);
  //   const prevMatched = router.getMatchedComponents(from);

  //   let diffed = false;
  //   const activated = matched.filter((c, i) => {
  //     return diffed || (diffed = (prevMatched[i] !== c));
  //   });
  //   if (!activated.length) {
  //     return next();
  //   }
  //   // start loading indicator
  //   Promise.all(activated.map(c => {
  //     NProgress.start();
  //     if (c.asyncData) {
  //       return c.asyncData({ store, route: to });
  //     }
  //   })).then(() => {
  //     // stop loading indicator
  //     NProgress.done(); 
  //     next();
  //   }).catch(next);
  // });
  // 当路径 是 / 的时候，此时 会报 "#app"没有找到 ，是因为，在刚开始的时候，App.vue并没有被成功的挂载上去，此时取找app， 肯定是找不到的
  // 当路径 是 /about的时候， 却可以成功 是因为
  app.$mount('#app')
  
})

