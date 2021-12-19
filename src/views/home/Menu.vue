<template>
  <Model :table="table" :page-info="pageInfo" :search-form="searchForm" @search="search"></Model>
</template>

<script>
import Model from "../../components/Model";
import ServiceCenter from "../../base/utils/ServiceCenter";
import BaseUtils from "../../base/utils/BaseUtils";

export default {
  name: "Menu",
  components: {Model},
  data(){
    return {
      table:{
        data:[],
        fields:[
          {prop:"title",label:"名称"},
          {prop:"path",label:"路径"},
          {prop:"component",label:"组件"},
        ]
      },
      searchForm: {
        fields: [
          {label: "名称", field: "name", placeholder: "请输入名称", type: "text"},
          {
            label: "等级", field: "level", placeholder: "请选择等级", type: "select",
            options: [
              {label: "一级菜单", value: 1},
              {label: "二级菜单", value: 2}
            ]
          },
        ],
        form: {}
      },
      pageInfo:{},
    }
  },
  created() {
    ServiceCenter.MenuService.listMenu().then((response)=>{
      this.table.data = response.list;
      this.pageInfo = response.pageInfo;
    })
  },
  methods:{
    search(){
      let params = BaseUtils.lodash.cloneDeep(this.searchForm.form);
      ServiceCenter.MenuService.listMenu(params).then((response)=>{
        console.log(response);
      })
    }
  }
}
</script>

<style scoped>

</style>