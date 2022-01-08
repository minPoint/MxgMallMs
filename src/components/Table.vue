<template>
  <el-table :data="data" v-if="data" border style="width: 100%;margin-top: 20px" @select="select"
            @select-all="selectAll">
    <el-table-column type="selection" width="50" v-if="options && options.table && options.table.section"/>
    <el-table-column type="index" width="50" v-if="options && options.table && options.table.index"/>
    <el-table-column v-for="col in fields" :prop="col.prop" :label="col.label"/>
  </el-table>
</template>

<script>
import BaseUtils from "../base/utils/BaseUtils";
export default {
  name: "Table",
  props: {
    data: {
      type: Array,
    },
    fields: {
      type: Array,
    },
    options: {
      type: Object
    },
    ref:{
      type: String
    }
  },
  data(){
    return{
      selectData:[]
    }
  },
  methods: {
    getSelectDate(){
        return BaseUtils.getTarget(this.selectData);
    },
    select(section, row) {
      this.selectData = BaseUtils.getTarget(section)
    },
    selectAll(section) {
      this.selectData = BaseUtils.getTarget(section)
    }
  }

}
</script>

<style scoped>

</style>