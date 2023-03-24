<template>
  <view
    class="flex px-3 py-3 items-start bg-white border border-gray-200 rounded-lg shadow"
    @click="handleCardClick"
  >
    <img
      class="object-cover w-36 h-36"
      :src="imgUrl"
      @click.stop="handlePreviewImage"
    />
    <view class="flex flex-1 flex-col ml-2">
      <view class="flex items-center mb-2">
        <text class="text-xl font-bold tracking-tight text-gray-900">
          {{ title }}
        </text>
      </view>
      <text class="mb-2 text-sm text-gray-500">
        {{ desc }}
      </text>
      <view class="flex justify-end">
        <button
          v-if="mediaUrl"
          :class="`ml-2 mr-0 text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 shadow-lg shadow-red-500/50 font-medium px-1 py-1 text-xs text-center`"
          @click="handlePreviewVideo"
        >
          点击预览
        </button>
        <button
          v-if="tag.id"
          :data-id="tag.color"
          :class="`ml-2 mr-0 text-white bg-gradient-to-r from-${tag.color}-400 via-${tag.color}-500 to-${tag.color}-600 shadow-lg shadow-${tag.color}-500/50 font-medium px-1 py-1 text-xs text-center`"
        >
          {{ tag.text }}
        </button>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
      uni.navigateTo({ url: `/pages/webview/index?url=${this.url}` });
    },
    handlePreviewVideo() {
      uni.navigateTo({ url: `/pages/video/index?url=${this.mediaUrl}` });
    },
    handlePreviewImage() {
      uni.previewImage({ urls: [this.imgUrl] });
    },
  },
});
</script>
