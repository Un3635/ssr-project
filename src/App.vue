<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">首页</router-link>
    <router-link to="/h">/h</router-link>
    <router-link to="/about">/about</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {}
};
</script>
