<template>
  <div class="suggest">
    <div class="title">意见反馈</div>
    <div class="suggest-content">
      <div class="suggest-item">
        <label for="title">标题</label>
        <input id="title" type="text">
      </div>
      <div class="suggest-item">
        <label class="content" for="content">内容</label>
        <textarea id="content"></textarea>
      </div>
      <button>保存</button>
       <input type="file" accept="image/*" capture="camera">
    </div>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
  body {
    background: #eeeeee !important;
  }
  .suggest {
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom: 0;
    background: #eeeeee;
  }
  .suggest-content {
    padding: 0 0.35rem;
    padding-top: 0.3rem;
  }
  .title {
    width: 100%;
    height: 1rem;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
    background-color: #f66;
  }
  .suggest-item {
    display: flex;
    justify-content: center;
    margin-bottom: 0.3rem;
  }
  .suggest-item input,.suggest-item textarea {
    width: 100%;
    padding-left: 0.1rem;
  }
  .suggest-item label {
    width: 1.4rem;
  }
  .suggest-item input {
    height: 1rem;
  }
  .suggest-item textarea {
    height: 4rem;
    resize: none;
  }
  .suggest-item:first-child {
    align-items: center;
  }
  .suggest-item:last-child {
    align-items: normal;
  }
  .suggest-item .content {
    padding-top: 0.2rem;
  }
  .suggest-content button {
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
