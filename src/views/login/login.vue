<template>
  <div class="login">
    <div class="login-bg">
      <div class="login-form">
        <p>快速登录</p>
        <div class="form-item">
            <label for="tel">手机号</label>
            <input id="tel" type="text">
            <a>获取验证码</a>
        </div>
        <div class="form-item">
          <label for="code">验证码</label>
          <input id="code" type="text">
          <a class="none"></a>
        </div>
        <button>
          提交
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style lang="scss" scoped>

  .login-bg {
    background-color: red;
    height: 7rem;
    position: relative;
    width: 100%;
    .login-form {
      position: absolute;
      width: 90%;
      left: 5%;
      height: 6rem;
      bottom: -3rem;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 10px;
      padding: 0 0.35rem;
      p {
        text-align: center;
        padding: 0.4rem 0;
        font-size: 0.45rem;
        color: red;

      }
      .form-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 1rem;
        margin-bottom: 0.4rem;
        label {
          width: 1.5rem;
          text-align: center;
        }
        input {
          border: 1px solid #cccccc;
          height: 100%;
          width: 56%;
          margin: 0 0.3rem;
          padding-left: 0.3rem;
          box-sizing: border-box;
        }
        a {
          color: #f66;
          display: inline-block;
          width: 2rem;
        }
      }
      button {
        width: 100%;
        height: 1.2rem;
        margin-top: 0.4rem;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.44rem;
        color: #ffffff;
      }
    }
  }
</style>


