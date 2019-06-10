<template>
    <div class = "info">
        <div class="info-top">订单号 9813478834313   <span>运行中</span></div>
        <div class="info-title">物流详情</div>
        <div class="item-info">
          <ul class="info-status">
            <li>
              <div class="left-info">
                09-02<br/>
                17:32
                <span class="circle" :class="{ 'bg-color': index == 1}"></span>
              </div>
              <div class="right-info">
                孤单影子哦那个
              </div>
            </li>
            <li>
              <div class="left-info">
                09-02<br/>
                17:32
                <span class="circle"></span>
              </div>
              <div class="right-info">
                孤单影子哦那个<br/>
                孤单影子哦那个<br/>
                孤单影子哦那个<br/>
                孤单影子哦那个<br/>
                孤单影子哦那个<br/>
                孤单影子哦那个<br/>
                孤单影子哦那个<br/>
              </div>
            </li>
                        <li>
              <div class="left-info">
                09-02<br/>
                17:32
                <span class="circle"></span>
              </div>
            </li>
            <li>
              <div class="left-info">
                09-02<br/>
                17:32
                <span class="circle"></span>
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Machine',
    data() {
        return {
           index: 1
        }
    },
    methods: {

    }

}
</script>
<style lang="scss" scoped>
    .info {
        padding: 0.2rem 0.2rem 1rem;
    }
    .info-top {
      padding-left: 0.2rem;
      padding: 0.3rem 0;
      border-bottom: 1px solid #cccccc;
    }
    .info-top span{
      float: right;
      padding-right: 0.2rem;
    }
    .info-title {
      padding: 0.2rem;
      // border-bottom: 1px solid #cccccc;
    }
      
    .item-info {
      padding: 0.5rem 0 0 0.2rem;
    }
    .item-info li {
      display: flex;
    }
    .left-info {
      width: 2.4rem;
      position: relative;
      height: auto;
      padding: 0.1rem 0.6rem 0.4rem  0.3rem;
      border-right: 3px solid #eeeeee;

    }
    .left-info .circle {
      width:0.3rem;
      height: 0.3rem;
      border-radius:0.15rem;
      background-color: #cccccc;
      position: absolute;
      right: 0;
      top: 0;
      margin-right: -0.18rem;
      z-index: 1000;
    }
    .bg-color {
      background: red !important;
    }
    .right-info {
      padding: 0.3rem 0 0 0.4rem;
    }
    li:first-child .left-info {
      padding-bottom: 0.7rem;
    }

    li:first-child .left-info .circle {
      top: 0.3rem;

    }
    li:last-child  .left-info{
      border:none;
    }
    li:last-child  .left-info .circle{
      margin-right: -0.12rem;
    }
</style>

