<template>
  <div class="mtl-row" @click="consoleSome">
    <slot name="header"></slot>
    {{title}}
    <div>瞎搞</div>
  </div>
</template>

<script>
export default {
  name: 'mtl-row',
  props: ['title'],
  data() {
    return {};
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
