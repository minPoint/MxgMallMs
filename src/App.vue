<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
  <router-view/>
</template>

<script>
export default {
  name: "App",
  created() {

    window.addEventListener("",()=>{
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem('store')) {
        this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))));
      }

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(this.$store.state));
      });
    })
  }

}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
*::-webkit-scrollbar{
  width: 10px;
}
*::-webkit-scrollbar-button{
  display: none;
}
*::-webkit-scrollbar-thumb{
  border-radius: 4px;
  background-color: #CCCCCC;
}
*::-webkit-scrollbar-thumb:hover{
  background-color: #6c6c6c;
}
html,body{
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: $bg-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
