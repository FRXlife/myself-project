<template>
  <div class="invoice">
    <div class="title">发票</div>
    <div class="invoice-content">
      <div class="invoice-item">
        <label for="title">订单号</label>
        <span>asdfadfdasff</span>
      </div>
      <div class="invoice-item">
        <label for="title">开票金额</label>
        <span>285.000</span>
      </div>
      <div class="invoice-item">
        <label for="title">发票抬头</label>
        <input id="title" type="text">
      </div>
      <div class="invoice-item">
        <label for="content">税号</label>
        <input id="content" type="text">
      </div>
       <div class="invoice-item">
        <label for="email">预留邮箱</label>
        <input v-model="email" id="email" type="text">
      </div>
      <div class="invoice-item">
        <label for="tel">联系方式</label>
        <input v-model="tel" id="tel" type="text">
      </div>
      <button>保存</button>
    </div>
    <v-bottom></v-bottom>
  </div>
</template>
<script>
export default {
  name: "Invoice",
  data() {
    return {
      email: 'asda@163.com',
      tel: 18343324423
    }
  }
}
</script>

<style lang="scss" scoped>
  .invoice {
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom: 0;
    background: #eeeeee;
  }
  .invoice-content {
    padding: 0 0.35rem;
    padding-top: 0.5rem;
  }
  .title {
    width: 100%;
    height: 1rem;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
    background-color: red;
  }
  .invoice-item {
    display: flex;
    justify-content: start;
    margin-bottom: 0.5rem;
    align-items: center;
  }
  .invoice-item input,.invoice-item textarea {
    width:80%;
    padding-left: 0.1rem;
  }
  .invoice-item label {
    width: 2rem;
  }
  .invoice-item input {
    height: 1rem;
  }
  .invoice-item textarea {
    height: 4rem;
    resize: none;
  }
  .invoice-content button {
    width: 100%;
    height: 1.2rem;
    margin-top: 1rem;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.44rem;
    color: #ffffff;
  }
</style>



