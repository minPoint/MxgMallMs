<template>
  <el-form :inline="true" :model="form" class="form-inline">
    <el-form-item :label="item.label" v-for="item in fields">
      <el-input v-if="item.type === 'text'" v-model="form[item.field]" :placeholder="item.placeholder"></el-input>
      <el-select v-if="item.type === 'select'" v-model="form[item.field]" :placeholder="item.placeholde">
        <el-option :label="option.label" :value="option.value" v-for="option in item.options"></el-option>
      </el-select>

    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search()">搜索</el-button>
      <el-button type="danger">重置</el-button>

    </el-form-item>

  </el-form>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    fields:{
      type: Array,
    },
    form:{
      type: Object,
    },
  },
  data() {
    return {
      searchForm: {}
    }
  },
  created() {
    console.log(this.fields);
  },
  methods:{
    search(){
      this.$emit("search")
    }
  }
}
</script>

<style scoped lang="scss">
.form-inline {
  display: flex;
  justify-content: flex-start;
}
.form-inline .el-form-item ::v-deep.el-form-item__label{
  text-indent: 10px;
}
</style>