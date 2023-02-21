<template>
  <view class="cu-card article" @tap="handleCardClick">
    <view class="cu-item shadow">
      <view class="title">
        <view class="text-cut"> {{ title }}</view>
      </view>
      <view class="content">
        <image
          :src="imgUrl"
          mode="aspectFill"
          :style="{ width: '240rpx', height: '240rpx' }"
          @click.stop="handlePreviewImage"
        />
        <view class="desc">
          <view class="text-content"> {{ desc }}</view>
          <view>
            <view :class="['cu-tag', `bg-${tag.color}`, 'light', 'round']">{{
              tag.text
            }}</view
            >&nbsp;&nbsp;
            <view v-if="mediaUrl" class="cu-btn round sm" @click="handlePreview"
              >视频预览</view
            >
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    title: { default: '', type: String },
    imgUrl: { default: '', type: String },
    desc: { default: '', type: String },
    miniType: { default: '', type: String },
    type: { default: '', type: String },
    url: { default: '', type: String },
    tag: { default: () => ({}), type: Object },
    mediaUrl: { default: '', type: String },
    id: { default: '', type: String },
  },
  methods: {
    handleCardClick() {
      if (this.type === 'H5') {
        window.location.href = this.url;
      }
    },
    handlePreview() {
      uni.navigateTo({ url: `/pages/video/index?url=${this.mediaUrl}` });
    },
    handlePreviewImage() {
      uni.previewImage({ urls: [this.imgUrl] });
    },
  },
};
</script>
