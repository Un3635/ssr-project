import Vue from 'vue'
// import store from './store';
import router from './router';
import App from './app.vue'

// 实例 每次请求都会创建新的实例

export default () => {
  // 同步路由状态(route state)到 store
  // sync(router);
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    // store,
    render: h => h(App)
    // components: { App },
    // template: '<App/>'
  });
  // 暴露 app, router 和 store。
  return {app, router};
}