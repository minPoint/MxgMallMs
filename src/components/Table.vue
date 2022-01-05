<template>
  <el-table :data="data" v-if="data" border style="width: 100%;margin-top: 20px">
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
      table: {
        props: {
          // Table 的高度
          height: {
            type: [String, Number],
            required: false
          },
          // Table 的最大高度
          maxHeight: {
            default: '100%'
          },
          // 是否为斑马纹 table
          stripe: {
            type: Boolean,
            default: true,
            required: false,
          },
          // 是否带有纵向边框
          border: {
            type: Boolean,
            default: true,
            required: false,
          },
          // Table 的尺寸
          size: {
            type: String,
            validator(value) {
              return ["medium", "small", "min"].includes(value)
            },
            required: false
          },
          // 列的宽度是否自撑开
          fit: {
            type: Boolean,
            default: true,
            required: false,
          },
          // 是否显示表头
          showHeader: {
            type: Boolean,
            default: true,
            required: false,
          },
          // 是否要高亮当前行
          highLightCurrentRow: {
            type: Boolean,
            default: true,
            required: false,
          },
          // 当前行的 key，只写属性
          currentRowKey: {
            type: [String, Number],
            required: false,
            default: "id"
          }
        },
        event: {
          /**
           * 当用户手动勾选数据行的 Checkbox 时触发的事件
           * 回调参数：selection, row
           */
          select: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当用户手动勾选全选 Checkbox 时触发的事件
           * 回调参数：selection
           */
          selectALl: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当选择项发生变化时会触发该事件
           * 回调参数：selection
           */
          selectionChange: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当单元格 hover 进入时会触发该事件
           * 回调参数：row, column, cell, event
           */
          cellMouseEnter: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当单元格 hover 退出时会触发该事件
           * 回调参数：row, column, cell, event
           */
          cellMouseLeave: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某个单元格被点击时会触发该事件
           * 回调参数：row, column, cell, event
           */
          cellClick: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某个单元格被双击击时会触发该事件
           * 回调参数：row, column, cell, event
           */
          cellDbClick: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某个单元格被鼠标右键点击时会触发该事件
           * 回调参数：row, column, cell, event
           */
          cellContextMenu: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某一行被点击时会触发该事件
           * 回调参数：row, column, event
           */
          rowClick: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某一行被鼠标右键点击时会触发该事件
           * 回调参数：row, column, event
           */
          rowContentMenu: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某一行被双击时会触发该事件
           * 回调参数：row, column, event
           */
          rowDbClick: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某一列的表头被点击时会触发该事件
           * 回调参数：column, event
           */
          headerClick: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当某一列的表头被鼠标右键点击时触发该事件
           * 回调参数：column, event
           */
          headerContextMenu: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当表格的排序条件发生变化的时候会触发该事件
           * 回调参数：{ column, prop, order }
           */
          sortChange: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件
           * 回调参数：filters
           */
          filterChange: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性
           * 回调参数：currentRow, oldCurrentRow
           */
          currentChange: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           * 当拖动表头改变了列的宽度的时候会触发该事件
           * 回调参数：newWidth, oldWidth, column, event
           */
          headerDragend: {
            type: Function,
            default: () => {
            },
            required: false
          },
          /**
           *
           * 回调参数：row, column, event
           */
          expandChange: {
            type: Function,
            default: () => {
            },
            required: false
          },
        },
        fun: {},
        slot: {}
      },
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