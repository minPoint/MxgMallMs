<template>
  <Model :table-fields="tableFields" :service="service" :search-fields="searchFields" :add-fields="addFields" :options="options" :demo="demo"></Model>
</template>

<script>
import Model from "@/components/Model";
import ServiceCenter from "@/base/utils/ServiceCenter";

export default {
  name: "MallIndex",
  components: {Model},
  data() {
    return {
      options: {
        needAddModel: true,
        searchOptions:{
          inline: true
        },
      },
      tableFields: [
        {prop: "name", label: "名称"},
        {prop: "code", label: "编码"},
        {prop: "checkStatus", label: "状态"},
      ],
      searchFields: [
        {label: "名称", field: "name", placeholder: "请输入名称", type: "text"},
        {
          label: "状态", field: "checkStatus", placeholder: "请选择状态", type: "select",
          options: [
            {label: "上架", value: 1},
            {label: "下架", value: 2}
          ]
        },
      ],
      addFields: [
        {label: "名称", field: "name", placeholder: "请输入名称", type: "text"},
        {label: "编码", field: "code", placeholder: "请输入编码", type: "text"},
      ],
      service: ServiceCenter.MallService
    }
  },
}
</script>

<style scoped>

</style>