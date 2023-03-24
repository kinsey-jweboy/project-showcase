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
import { post } from '@/utils/request';

export default {
  name: 'HomePage',
  components: { Navbar, Card, List },
  data() {
    return {
      list: [],
    };
  },
  beforeMount() {
    this.asyncGetList({ type: 'MINI_PROGRAM' });
  },
  methods: {
    asyncGetList(options) {
      uni.showLoading({ title: 'loading...' });
      post('/', { data: options })
        .then((response) => {
          this.list = response.records;
          uni.hideLoading();
        })
        .catch(() => {
          uni.hideLoading();
        });
    },
    handleNavbarChange(data) {
      this.list = [];
      this.asyncGetList({ type: data });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  margin-top: calc(var(--status-bar-height) + 60px);
}
</style>
