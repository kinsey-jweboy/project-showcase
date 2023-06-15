<template>
  <view class="bg-gradient-to-r from-green-400 to-blue-500 h-screen home-page">
    <navbar @change="handleNavbarChange">
      <list ref="list" :data="list">
        <template #default="{ data }">
          <view class="grid grid-cols-1 gap-4 px-4 py-4">
            <card
              v-for="item in data"
              :id="item._id"
              :key="item._id"
              :title="item.title"
              :desc="item.desc"
              :img-url="item.img_url"
              :mini-type="item.mini_type"
              :type="item.type"
              :url="item.url"
              :tag="item.tag"
              :media-url="item.media_url"
              :miniprogram="item.miniprogram"
            />
          </view>
        </template>
      </list>
    </navbar>
  </view>
</template>

<script lang="ts">
import Navbar from '@/components/navbar';
import Card from '@/components/card';
import List from '@/components/list';

export default {
  name: 'HomePage',
  components: { Navbar, Card, List },
  data() {
    return {
      list: [],
    };
  },
  beforeMount() {
    this.asyncGetList({
      type: 'MINI_PROGRAM',
    });
  },
  methods: {
    async asyncGetList(options) {
      uni.showLoading({ title: 'loading...' });
      await wx.cloud.init();
      const { data } = await wx.cloud.callContainer({
        config: {
          env: 'dev-5gg3jp5z5144e3dd', // 微信云托管的环境ID
        },
        path: '/', // 填入业务自定义路径和参数，根目录，就是 /
        method: 'POST', // 按照自己的业务开发，选择对应的方法
        header: {
          'X-WX-SERVICE': 'showcase', // xxx中填入服务名称（微信云托管 - 服务管理 - 服务列表 - 服务名称），在上述实践中是 demo
        },
        data: options,
        // 其余参数同 wx.request
      });

      this.list = data.data.records;
      uni.hideLoading();
    },
    handleNavbarChange(type) {
      this.list = [];
      this.asyncGetList({ type });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  margin-top: calc(var(--status-bar-height) + 60px);
}
</style>
