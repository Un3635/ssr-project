import createApp from './app'

let { app, router } = createApp()

router.onReady(() => {
  console.log(app);

  app.$mount('#app')
  
})

