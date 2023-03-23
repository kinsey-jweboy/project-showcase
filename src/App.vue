<template>
  <index-page />
</template>

<script lang="ts">
import IndexPage from './pages/index/index.vue';

export default {
  components: { IndexPage },
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style>
/*每个页面公共css */
@import '@/styles/colorui/main.css';
@import '@/styles/colorui/icon.css';
</style>
