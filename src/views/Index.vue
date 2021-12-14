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
        <a class="button">
          验证码
        </a>
      </label>
      <label for="#" id="login-contain">
        <a class="button"  @click="loginDashBoard()">
            登录
        </a>
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

.login-form label input,.login-form label a {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: $text-input-bg-color;
  outline: none;
  text-indent: 10px;
  transition: all .35s;
  color: #666666;

  &:focus {
    background-color: $text-input-focus-bg-color;
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

#msg-code *:nth-last-child(1) {
  text-indent: 0;
  margin: 0;
  width: 30%;
}

.login-form label a {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  text-indent: 0;
  color: white;
  background-color: $btn-input-bg-color;
  box-shadow: $btn-input-box-show;
  position: relative;
  overflow: hidden;


  &::before{
    content: "";
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    top: 0;
    opacity: 0;
    border-radius: 50%;
    transition: .35s;
    background-color: rgba(0,0,0,0);
  }


  &:hover {
    box-shadow: $btn-input-hover-box-show;
  }


  &:hover::before {
    border-radius: 0;
    width: 100%;
    height: 100%;
    left: 0;
    margin-left: 0;
    background-color: $btn-input-hover-bg-color;
    opacity: 1;
  }

}

#msg-code a::before{
  content: '验证码';
}
#login-contain a::before{
  content: '登录';
}
</style>
