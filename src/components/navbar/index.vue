<template>
  <view class="navbar">
    <scroll-view scroll-x class="bg-green nav text-center nav fixed">
      <view
        v-for="item in tabs"
        :key="item.key"
        class="cu-item"
        :class="item.key == current ? 'text-white cur' : ''"
        @tap="handleTabChange(item)"
      >
        {{ item.title }}
      </view>
    </scroll-view>
    <view class="list">
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      current: 'MINI_PROGRAM',
      tabs: [
        { key: 'MINI_PROGRAM', title: '小程序' },
        { key: 'PC', title: '后台' },
        { key: 'H5', title: 'H5' },
      ],
    };
  },
  methods: {
    handleTabChange({ key }) {
      this.current = key;
      this.$emit('change', this.current);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  .list {
    margin-top: 90upx;
  }
}
</style>
