<template>
  <div class="login-container">
    <h1 class="login-title">幕熙阁</h1>
    <p class="login-desc">ADMIN DASHBOARD</p>
    <form action="#" :model="login" class="login-form">
      <label for="#">
        <input type="text" v-model="login.account" placeholder="账户">
      </label>
      <label for="#">
        <input type="text" v-model="login.pwd" placeholder="密码">
      </label>
      <label for="#" id="msg-code">
        <input type="text" v-model="login.pwd" placeholder="验证码">
        <input type="button" value="验证码">
      </label>
      <label for="#" id="login-contain">
        <input type="button" value="登录" @click="loginDashBoard()">
      </label>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Index',
  components: {
    HelloWorld
  },
  data() {
    return {
      login: {
        account: "",
        pwd: ""
      },
    }
  },
  methods: {
    loginDashBoard() {
      this.$router.replace({name: "Home"})
    },
  }
}
</script>

<style scoped lang="scss">
.login-container {
  width: 25vw;
  //height: 30vh;
  background-color: white;
  border-radius: 5px;
  position: relative;
  left: 50%;
  margin-left: -12.5vw;
  top: 20vh;
  padding: 10px 0 20px 0;
  box-shadow: 0 0 5px 3px #dedede;
}

.login-container h1 {
  //margin-bottom: 5px;
  padding: 5px 0 0 0;
}

.login-container p {
  margin-bottom: 20px;
  color: #666666;
}

.login-container .login-form {
  width: 90%;
  margin: 0 5%;
}

.login-container .login-form label {
  display: inline-block;
  width: 100%;
  margin: 10px auto;
}

.login-form label input {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #e9e9e9;
  outline: none;
  text-indent: 10px;
  transition: all .35s;
  color: #666666;

  &:focus {
    background-color: #d9d9d9;
  }
}

#msg-code {
  display: flex;
  justify-content: space-between;
}

#msg-code input:nth-child(1) {
  margin: 0;
  width: 65%;
}

#msg-code input:nth-last-child(1) {
  text-indent: 0;
  margin: 0;
  width: 30%;
}

.login-form label input[type='button'] {
  cursor: pointer;
  margin-top: 10px;
  text-indent: 0;
  color: white;
  background-color: #666666;
  box-shadow: 0 0 2px 0 #8f8f8f;

  &:hover {
    box-shadow: 0 5px 10px 0 #8f8f8f;
  }
}
</style>
