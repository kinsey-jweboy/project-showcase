<template>
  <scroll-view scroll-y :scorll-top="0">
    <unicloud-db
      v-slot="{ data, loading }"
      :collection="collection"
      :where="where"
    >
      <loading :visible="loading" />
      <slot :data="data" />
    </unicloud-db>
  </scroll-view>
</template>

<script>
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
