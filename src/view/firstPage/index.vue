<template>
  <div class="row">
    <el-tree 
      :data="data" 
      :prop="defaultProps"
      highlight-current
      ref="selectTree"
      node-key="id"
      @node-click="handleNodeClick"
      :default-expand-all="expand">
    </el-tree>
    <el-button @click="handleExpand">expand</el-button>
    <el-button @click="handleCollapse">collapse</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      expand: false,
      data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  created() {
  },
  filters: {
  },
  computed: {
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleExpand() {
      const that = this
      let fn = (data) => {
        data.map(el => {
          if(el.children) {
            that.$refs.selectTree.store.nodesMap[el.id].expanded = true
            fn(el.children)
          } else {
            that.$refs.selectTree.store.nodesMap[el.id].expanded = true
          }
        })
      } 
      fn(this.data)
    },
    handleCollapse() {
      const that = this
      let fn = (data) => {
        data.map(el => {
          if(el.children) {
            that.$refs.selectTree.store.nodesMap[el.id].expanded = false
            fn(el.children)
          } else {
            that.$refs.selectTree.store.nodesMap[el.id].expanded = false
          }
        })
      } 
      fn(this.data)
    }
  }
};
</script>

<style lang='scss' scoped>
</style>