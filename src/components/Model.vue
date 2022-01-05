<template>
  <SearchForm :search-fields="searchFields" :table-fields="tableFields" :options="searchOptions" :service="service">
    <ButtonGroup @add="showOrHideAddModel"/>
  </SearchForm>
  <AddForm :fields="addFields" :options="addModelOptions" @showOrHideAddModel="showOrHideAddModel" @save="save"/>

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
  },
  methods:{
    showOrHideAddModel(isShow){
      if(!isShow && isShow instanceof Boolean){
        this.addModelOptions.addModelDrawer = isShow;
      }else{
        this.addModelOptions.addModelDrawer = !this.addModelOptions.addModelDrawer;
      }
    },
    save(model){
      let that = this;
      this.service.add(model).then((response)=>{
        that.$bus.emit("search");
      });
    },
    upt(){

    },
    del(){

    }
  }
}
</script>

<style scoped>

</style>