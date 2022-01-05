<template>
  <Model :table-fields="tableFields" :service="service" :search-fields="searchFields" ></Model>
</template>

<script>
import Model from "@/components/Model";
import {MenuService} from "@/services/ServiceCenter";

export default {
  name: "Menu",
  components: {Model},
  data(){
    return {
      tableFields:[
        {prop:"title",label:"名称"},
        {prop:"path",label:"路径"},
        {prop:"component",label:"组件"},
      ],
      searchFields:  [
          {label: "名称", field: "title", placeholder: "请输入名称", type: "text"},
          {
            label: "等级", field: "level", placeholder: "请选择等级", type: "select",
            options: [
              {label: "一级菜单", value: 1},
              {label: "二级菜单", value: 2}
            ]
          },
        ],
      service:MenuService
    }
  },
  created() {
  },
  methods:{
    resolve(response){

    },
    search(){
    }
  }
}
</script>

<style scoped>

</style>