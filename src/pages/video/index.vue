<template>
  <view class="video">
    <video :src="url" />
  </view>
</template>

<script lang="ts">
export default {
  name: 'VideoPage',
  data() {
    return {
      url: '',
    };
  },
  onLoad(options) {
    this.url = options.url;
  },
};
</script>

<style lang="scss" scoped>
.video {
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background: #000;
}
</style>
