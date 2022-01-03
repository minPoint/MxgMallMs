<template>
  <Form :fields="searchFields" :form="form" :options="options.searchOptions"></Form>
  <slot/>
  <Table :data="tableData" :fields="tableFields" :page-info="pageInfo"/>
</template>

<script>
import ButtonGroup from "./ButtonGroup";
import Form from "./Form";
import BaseUtils from "../base/utils/BaseUtils";
export default {
  name: "SearchForm",
  components: {Form,ButtonGroup},
  props: {
    searchFields: {
      type: Array,
    },
    tableFields:{
      type: Array,
      required:true,
    },
    options:{
      type: Object,
    },
    service:{
      required: true
    }
  },
  data() {
    return {
      form:{},
      tableData:[],
      pageInfo: {
        pageNum: 1,
        pageSize: 10
      },
    }
  },
  created() {
    this.search();
    this.$eventBus.$on("search",this.search)
  },
  methods: {
    search(){
      let that = this;
      let form = params = BaseUtils.getTarget(this.form);
      let params = Object.assign(form, this.pageInfo);
      this.service.list(params).then((response)=>{
        that.tableData = response.content;
        that.pageInfo = response.pageInfo;
        console.log(that.tableData);
        console.log(that.pageInfo);
      })
    },
  }
}
</script>

<style scoped lang="scss">
.form-inline {
  display: flex;
  justify-content: flex-start;
}

.form-inline .el-form-item ::v-deep.el-form-item__label {
  text-indent: 10px;
}
</style>