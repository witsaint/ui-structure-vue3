<template>
  <div class="mtl-row" @click="consoleSome">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'mtl-row',
  props: ['title'],
  data() {
    return {
      txt: '',
    };
  },
  mounted() {
  },
  methods: {
    consoleSome() {
      console.log('hello word', this.$props);
    },
  }
};

</script>

<style lang="less">

</style>
