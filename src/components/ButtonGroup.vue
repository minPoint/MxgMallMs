<template>
  <div class="button-group">
    <el-button @click="add()">新增</el-button>
    <el-button @click="del()">删除</el-button>
    <el-button @click="upt()">修改</el-button>

    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      open
    </el-button>

  </div>
</template>

<script>

export default {
  name: "ButtonGroup",
  data() {
    return {
      form: {
        date1: "",
        date2: "",
        delivery: ""
      },
      drawer: false,
    }
  },
  methods: {
    add() {
      this.$emit("add")
    },
    upt() {
      this.$emit("add")
    },
    del() {

      this.$emit("add")
    }
  }
}
</script>

<style scoped lang="scss">
.button-group {
  display: flex;
  justify-content: flex-start;
}

</style>