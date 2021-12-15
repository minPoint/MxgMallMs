<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props:{
    options:{
      table:{
        props:{
          data:{
            type: Array,
            required: false
          },
          height:{
            type: [String, Number],
            required: false
          },
          maxHeight:{
            default: '100%'
          },
          stripe:{
            type: Boolean,
            default: true,
            required: false,
          },
          border:{
            type: Boolean,
            default: true,
            required: false,
          },
          size:{
            type: String,
            validator(value){
              return ["medium","small","min"].includes(value)
            },
            required: false
          }
        },
        event:{

        },
        fun:{

        },
        slot:{

        }
      }
    }
  }

}
</script>

<style scoped>

</style>