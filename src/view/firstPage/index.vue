<template>
  <div class="row">
    <draggable
        :list="list"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false">
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name">
          {{ element.name }}
        </div>
      </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      enabled: true,
      list: [
        { name: "aaa", id: 0 },
        { name: "bbb", id: 1 },
        { name: "ccc", id: 2 }
      ],
      dragging: false
    }
  },
  created() {
  },
  methods: {
    checkMove(){},
  },
  components: {
    draggable
  }
};
</script>

<style lang='scss' scoped>
.list-group-item {
  display: inline-block;
  background: antiquewhite;
  margin-right: 8px;
  width: 80px;
}
</style>