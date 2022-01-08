<template>
  <el-table :data="data" v-if="data" border style="width: 100%;margin-top: 20px">
    <el-table-column type="selection" width="50"  v-if="options && options.table && options.table.section"/>
    <el-table-column type="index" width="50" v-if="options && options.table && options.table.index"/>
    <el-table-column v-for="col in fields" :prop="col.prop" :label="col.label"/>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props: {
    data:{
      type: Array,
    },
    fields:{
      type: Array,
    },
    options: {
      type: Object
    }
  },
  created() {

  },
  methods:{

  }

}
</script>

<style scoped>

</style>