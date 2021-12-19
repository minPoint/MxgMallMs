<template>
  <SearchForm :fields="searchForm.fields" :form="searchForm.form" @search="search"/>
  <Table :data="table.data" :fields="table.fields" :page-info="pageInfo"/>
</template>

<script>
import Table from "./Table";
import SearchForm from "./SearchForm";
export default {
  name: "Model",
  components: {Table, SearchForm},
  props:{
    table:{
    },
    searchForm:{
    },
    pageInfo:[]
  },
  created() {
    console.log(this.table);
  },
  methods:{
    search(){
      this.$emit("search");
    }
  }
}
</script>

<style scoped>

</style>