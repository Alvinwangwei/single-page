<template>
  <div class="row">
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  created() {
    var s = function(str) {
      const number = parseInt(str, 10);
      if(isNaN(number)) {
          return 0;
      } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
          return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
      } else {
          return number;
      }
    };
  },
  filters: {
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
</style>