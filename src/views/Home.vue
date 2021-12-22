<template>
  <el-container>
    <el-header>
      <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col>
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
                router
            >
              <el-sub-menu :index="menu.path" v-for="menu in this.$store.getters.menuList">
                <template #title>
                  <el-icon v-if="menu.icon">
                    <!--                    <location/>-->
                  </el-icon>
                  <span v-text="menu.title"></span>
                </template>
                <el-menu-item :index="sonMenu.path" v-for="sonMenu in menu.sonMenuList">
                  {{ sonMenu.title }}
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main style="width: 100%;height: 100%">
          <router-view/>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>
<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import ServiceCenter from "../base/utils/ServiceCenter";

export default {
  name: 'Home',
  components: {
    Footer
  },
  data() {
    return {
      menuList: []
    }
  },
}
</script>
<style scoped lang="scss">
.el-header {
  padding: 0;
}

.el-container {
  height: 100%;
}

.tac {
  height: 100%;
}

.el-menu {
  height: 100%;
}

::v-deep.el-menu--horizontal {
  border-bottom: none;
}

::v-deep.el-menu--horizontal > .el-sub-menu .el-sub-menu__title, .el-menu--horizontal > .el-menu-item {
  height: 59px;
}
</style>
