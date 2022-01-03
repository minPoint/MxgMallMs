<template>
  <el-drawer
      v-model="options.addModelDrawer"
      title="I am the title"
      :direction="'rtl'"
      :before-close="handleClose"
      size="30%"
  >
    <div class="drawer-content">
      <Form :fields="fields" :form="form" :options="options"></Form>
      <div>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="danger" @click="handleClose">取消</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import Form from "./Form";
import {ElMessageBox} from 'element-plus'
import BaseUtils from "../base/utils/BaseUtils";

export default {
  name: "AddForm",
  components: {Form},
  props: {
    fields: {
      type: Array,
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      form:{},
      handleClose: (done) => {
        let tipMsg = "操作未保存，确定要退出吗？";
        if(this.options.unSaveTip){
          tipMsg = this.options.unSaveTip;
        }
        ElMessageBox.confirm(tipMsg)
            .then(() => {
              this.showOrHideAddModel(false);
              done()
            })
            .catch(() => {
              // catch error
            })
      }
    }
  },
  created(){
  },
  methods:{
    showOrHideAddModel(isShow){
      this.$emit("showOrHideAddModel",isShow)
    },
    save(){
      this.$emit("save", BaseUtils.getTarget(this.form));
    }
  }
}
</script>

<style scoped lang="scss">
.drawer-content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>