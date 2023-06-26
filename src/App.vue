<script lang="ts">
export default {
  onLaunch: function () {
    console.log('App Launch');
    uni.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
    });
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="css">
/*每个页面公共css */
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
</style>
