<template>
  <view>
    <view class="grid grid-cols-3 py-2 gap-4 justify-center w-full">
      <view
        v-for="item in items"
        :key="item.key"
        :class="[
          'flex items-center justify-center py-2 mx-2 rounded-full text-center text-white',
          item.key === current ? 'bg-blue-500 ' : ' ',
        ]"
        @click="handleTabChange(item.key)"
      >
        <text>
          {{ item.title }}
        </text>
      </view>
    </view>
    <slot />
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      current: 'MINI_PROGRAM',
      items: [
        { key: 'MINI_PROGRAM', title: '小程序' },
        { key: 'H5', title: 'H5' },
        { key: 'PC', title: '后台' },
      ],
    };
  },
  methods: {
    handleTabChange(key) {
      this.current = key;
      this.$emit('change', key);
    },
  },
});
</script>
