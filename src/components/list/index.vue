<template>
  <scroll-view scroll-y :scorll-top="0">
    <!-- <loading :visible="loading" /> -->
    <slot :data="data" />
  </scroll-view>
</template>

<script lang="ts">
// import Loading from '@/components/loading';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScrollList',
  // components: { Loading },
  props: {
    data: { type: Array, default: () => [] },
  },
  data() {
    return {};
  },
});
</script>
