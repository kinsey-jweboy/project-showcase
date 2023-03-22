<template>
  <scroll-view scroll-y :scorll-top="0">
    <loading :visible="loading" />
    <slot :data="data" />
  </scroll-view>
</template>

<script lang="js">
import Loading from '@/components/loading';

export default {
  name: 'ScrollList',
  components: { Loading },
  props: {
    collection: { type: String, default: 'project_showcase' },
    type: { type: String, default: 'MINI_PROGRAM' },
  },
  data() {
    return {
      where: `type=='MINI_PROGRAM'`,
    };
  },
  watch: {
    type: {
      handler(newVal) {
        this.where = `type=='${newVal}'`;
      },
    },
  },
};
</script>
