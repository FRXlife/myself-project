<template>
  <div class="set">
    <div class="title">设置</div>
    <p><span>帮助中心</span><a href=""><i class="fa fa-angle-right fright" aria-hidden="true"></i></a></p>
    <p><span>关于我们</span><a href=""><i class="fa fa-angle-right fright" aria-hidden="true"></i></a></p>
    <p>客服电话   <span class="fright">400-2341-903</span></p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .set {
    // padding:0.3rem 0;
    .fright {
      float: right;
      margin-right: 0.3rem;
      font-size:0.3rem;
    }
    .title {
      width: 100%;
      height: 1rem;
      color: #ffffff;
      text-align: center;
      line-height: 1rem;
      background-color: red;
    }
    p {
      padding: 0.3rem 0.35rem;
      border-bottom: 1px solid #cccccc;
    }
  }

</style>

