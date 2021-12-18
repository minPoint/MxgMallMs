<template>
  <Model :table="table" :page-info="pageInfo" :search-form="searchForm"></Model>
</template>

<script>
import Model from "../../components/Model";
import ServiceCenter from "../../base/utils/ServiceCenter";

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
      searchForm:{
        fields:[
          {label:"名称",placeholder:"请输入名称",type:"text"},
          {label:"等级",placeholder:"请选择等级",type:"select",
            options:[
              {label:"一级菜单",value:1},
              {label:"二级菜单",value:2}
            ]
          },
        ],
        form:{}
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
  }
}
</script>

<style scoped>

</style>