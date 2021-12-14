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
            >
              <el-sub-menu :index="menu.dbId" v-for="menu in menuList">
                <template #title>
                  <el-icon v-if="menu.icon">
                    <!--                    <location/>-->
                  </el-icon>
                  <span v-text="menu.name"></span>
                </template>
                <el-menu-item :index="menu.dbId + '-' + sonMenu.dbId " v-for="sonMenu in menu.sonMenuList">
                  {{ sonMenu.name }}
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
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
import axios from "axios";

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
  created() {
    // console.log(this.$router.getRoutes());
    ServiceCenter.MenuService.listMenuTree().then((response)=>{
      // console.log(this.$router.getRoutes());
      // console.log(response)
      this.menuList = response.data;
      console.log(response.data)
      let routerList = this.$router.getRoutes();
      let rootRouter;
      for (let router of routerList) {
        if (router.name === "Home") {
          rootRouter = router;
          break;
        }
      }
      this.menuTree(rootRouter, this.menuList);
      console.log(rootRouter)
    })
  },
  methods: {
    menuTree(fatherMenu, menuList) {
      fatherMenu.children = [];

      for (let menu of menuList) {
        if (!menu['component']) {
          continue;
        }
        let sonMenu = {
          path: menu.path,
          // component: import(menu['component'])
        };
        if (menu.sonMenuList && menu.sonMenuList.length > 0) {
          this.menuTree(sonMenu, menu.sonMenuList);
        }
        fatherMenu.children.push(sonMenu);
      }
    }
  }
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
