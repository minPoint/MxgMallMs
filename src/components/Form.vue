<template>
  <el-form :inline="true" :model="form" :class="{'form-inline': options.inline ? options.inline : true}" v-if="fields && fields.length > 0" :ref="'add' + options.ref + 'Form'">
    <el-form-item :label="item.label" v-for="item in fields">
      <el-input v-if="item.type === 'text'" v-model="form[item.field]" :placeholder="item.placeholder"></el-input>
      <el-select v-if="item.type === 'select'" v-model="form[item.field]" :placeholder="item.placeholde">
        <el-option :label="option.label" :value="option.value" v-for="option in item.options"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search()" v-text="options.searchBtnTxt ? options.searchBtnTxt : '搜索'"></el-button>
      <el-button type="danger" v-text="options.resetBtnTxt ? options.resetBtnTxt : '重置'"></el-button>
    </el-form-item>

  </el-form>
</template>

<script>
import BaseUtils from "../base/utils/BaseUtils";

export default {
  name: "Form",
  props: {
    fields: {
      type: Array,
    },
    form: {
      type: Object,
    },
    options:{
      type: Object
    },
  },
  created() {

  },
  methods: {
    search() {
      console.log("se")
      this.$emit('search')
    },
    save() {
      this.$emit('save')
    }
  }
}
</script>

<style scoped>

</style>