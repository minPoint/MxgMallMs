<template>
  <SearchForm :fields="searchFields" :form="searchForm" @search="search"/>
  <Table :data="tableData" :fields="tableFields" :page-info="pageInfo"/>
</template>

<script>
import Table from "./Table";
import SearchForm from "./SearchForm";
import BaseUtils from "../base/utils/BaseUtils";
export default {
  name: "Model",
  components: {Table, SearchForm},
  props:{
    tableFields:{
      type: Array,
      required:true,
    },
    searchFields:{
      type: Array,
      required: true
    },
    service:{
      required: true
    }
  },
  data(){
    return{
      tableData:[],
      searchForm:{},
      pageInfo: {
        pageNum: 1,
        pageSize: 10
      },
    }
  },
  created() {
    this.search();
    console.log(this.tableData);
  },
  methods:{
    search(){
      let that = this;
      let form = params = BaseUtils.getTarget(this.searchForm);
      let params = Object.assign(form, this.pageInfo);
      this.service.list(params).then((response)=>{
        that.tableData = response.data;
        that.pageInfo = response.pageInfo;
      })
    }
  }
}
</script>

<style scoped>

</style>