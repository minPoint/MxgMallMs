<template>
  <SearchForm :search-fields="searchFields" :table-fields="tableFields" :options="searchOptions" :service="service">
    <ButtonGroup @add="showOrHideAddModel"/>
  </SearchForm>
  <AddForm :fields="addFields" :options="addModelOptions" @showOrHideAddModel="showOrHideAddModel" @save="save"
           :ref="'add' + options.ref + 'Model'"/>

</template>

<script>
import Table from "./Table";
import SearchForm from "./SearchForm";
import BaseUtils from "../base/utils/BaseUtils";
import ButtonGroup from "./ButtonGroup";
import AddForm from "./AddForm";
export default {
  name: "Model",
  components: {AddForm, ButtonGroup, Table, SearchForm},
  props:{
    tableFields:{
      type: Array,
      required:true,
    },
    searchFields:{
      type: Array,
      required: true
    },
    options:{
      type: Object,
      required: true
    },
    addFields:{
      type: Array,
      required: false
    },
    service:{
      required: true
    }
  },
  data(){
    return{
      searchOptions: {
        inline: true
      },
      addModelOptions: {
        // 新增表单的显示与隐藏
        addModelDrawer: false,
        inline: true,
        size: '30%',
      },
    }
  },
  created() {
    this.searchOptions.table = this.options.table
    this.searchOptions.ref = this.options.ref
    this.addModelOptions.ref = this.options.ref
  },
  methods:{
    // 弹出 / 隐藏 新增表单
    showOrHideAddModel(isShow){
      if(!isShow && isShow instanceof Boolean){
        this.addModelOptions.addModelDrawer = isShow;
      }else{
        this.addModelOptions.addModelDrawer = !this.addModelOptions.addModelDrawer;
      }
    },
    // 重置新增表单
    resetAddForm(){
      this.$refs[this.addForm].resetForm();
    },
    // 保存新增表单内容
    save(model){
      this.service.add(model).then((response)=>{
        this.showOrHideAddModel(false);
        this.resetAddForm();
        this.$bus.emit("search");
      });
    },
    upt(){

    },
    del(){

    }
  },
  computed:{
    addForm(){
      return "add" + this.addModelOptions.ref +"Model"
    }
  }
}
</script>

<style scoped>

</style>