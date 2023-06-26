<template>
  <view>
    <button @click="handleSubscribeMsg">扫地机器人订阅</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      deviceData: {},
    };
  },
  mounted() {
    wx.cloud.init({ env: 'showcase-5gkr3p7fdcc6d285' });
    wx.cloud
      .callFunction({
        name: 'device',
      })
      .then((data) => {
        const { result } = data;
        console.log(result);
        this.deviceData = result;
      });
  },
  methods: {
    handleSubscribeMsg() {
      wx.requestSubscribeDeviceMessage({
        tmplIds: [
          'ielhP9xBpbGHdp8lKStgk17EvU68TwdmpoFQh89T2WU',
          'aZ0HceohZ3F6novBME1od7dkMcNCSA34WosiLDw33LU',
          'nV5K9na-N7zdjnlkZorxeQjjUIKZf0NGRbsX3eR-bDU',
        ],
        ...this.deviceData,
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log(res);
        },
      });
    },
  },
};
</script>
