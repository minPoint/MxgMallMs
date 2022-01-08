<template>
  <SearchForm :search-fields="searchFields" :table-fields="tableFields" :options="searchOptions" :service="service" :ref="searchModelRef">
    <ButtonGroup @add="showOrHideAddModel" @del="del"/>
  </SearchForm>
  <AddForm :fields="addFields" :options="addModelOptions" @showOrHideAddModel="showOrHideAddModel" @save="save"
           :ref="addFormRef"/>

</template>

<script>
import Table from "./Table";
import SearchForm from "./SearchForm";
import ButtonGroup from "./ButtonGroup";
import AddForm from "./AddForm";
import {ElMessage} from "element-plus";
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
      this.$refs[this.addFormRef].resetForm();
    },
    // 保存新增表单内容
    save(model){
      this.service.add(model).then((response)=>{
        this.showOrHideAddModel(false);
        this.resetAddForm();
        ElMessage({
          message: '保存成功',
          type: 'success',
        })
        this.$bus.emit("search");
      });
    },
    upt(){

    },
    del(){
      let selectDate = this.$refs[this.searchModelRef].getSelectDate();
      let idList = selectDate.map(e => e.id);
      this.service.del(idList).then((response)=>{
        ElMessage({
          message: '删除成功',
          type: 'success',
        });
        this.$bus.emit("search");
      });
    }
  },
  computed:{
    addFormRef(){
      return "add" + this.addModelOptions.ref +"Model"
    },
    searchModelRef(){
      return "search" + this.addModelOptions.ref +"Model"
    }
  }
}
</script>

<style scoped>

</style>