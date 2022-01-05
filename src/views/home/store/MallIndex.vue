<template>
  <Model :table-fields="tableFields" :service="service" :search-fields="searchFields" :add-fields="addFields" :options="options"></Model>

</template>

<script>
import Model from "@/components/Model";
import {MallService} from "@/services/ServiceCenter";

export default {
  name: "MallIndex",
  components: {Model},
  data() {
    return {
      options: {
        needAddModel: true,
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
      service: MallService
    }
  },
}
</script>

<style scoped>

</style>