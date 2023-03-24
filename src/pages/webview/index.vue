<template>
  <web-view :src="url" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WebviewPage',
  data() {
    return { url: '' };
  },
  onLoad(options) {
    this.url = options.url;
  },
});
</script>
