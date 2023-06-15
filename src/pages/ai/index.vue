<template>
  <view>
    <baidu-cloud />
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaiduCloud from './baidu';
import { get, post } from '@/utils/request';

export default defineComponent({
  name: 'AIPage',
  components: { BaiduCloud },
  beforeMount() {
    const accessToken = post('http://localhost:3000/oauth/token', {
      grant_type: 'client_credentials',
      client_id: 'aA3xVGHmipjEHkQEeHZGgODq',
      client_secret: 'ZOw3qShyLKtAbF7bGLAe4QygzsijRaYD',
    });
  },
});
</script>
