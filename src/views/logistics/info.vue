<template>
    <div class = "info">
        <div class="info-top">
          <p class="item-top">订单号 9813478834313   <span>运行中</span></p>
          <div class='content-info'>
            <div class="content-top">
              <img src="" alt="">
              <div class="content-right">
                <p class="content-title">
                  爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源爱国者英东电源
                </p>
                <p>
                  <span style="float: right;">数量 1</span>
                </p>
              </div>
            </div>
            <p class="content-bottom">
              <span>共1件商品    合计:￥199:90</span>
            </p>
          </div>
        </div>
        <div class="logistics-info">
          <div class="info-title">物流信息</div>
          <div class="logistics-item">
            <img src="" alt="">
            <div class="right-msg">
              <p  class="user">收货人：xxx  <span  style="float:right;">123****2333</span></p>
              <p class="address">收获地址：北京市海淀区莲花池（放在前台就好，谢谢）</p>
            </div>
          </div>
          <div class="logistics-item">
            <img src="" alt="">
            <div class="right-msg">
              <p class="user">圆通速递<span style="float:right;">官方电话：9554</span></p>
              <p class="address">订单号：234234234333</p>
            </div>
          </div>
        </div>
        <div class="logistics-detail">
          <div class="info-title">物流详情</div>
          <div class="item-info">
            <ul class="info-status">
              <li v-for="item in logistics">
                <div class="left-info">
                  {{ item.date }}<br/>
                  {{ item.time }}
                  <span class="circle" :class="{ 'bg-color': item.newsInfo}"></span>
                </div>
                <div class="right-info">
                  <p v-for="v in item.content">
                    {{ v }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Machine',
    data() {
        return {
           index: 1,
           logistics: [
              {
               date: '09-02',
               time: '17:32',
               newsInfo: true,
               content: [
                '该商品已经到达国投财富广场',
                '联系人: 往先生',
                '电话: 22311333'
               ]
              },
              {
               date: '09-02',
               time: '14:32',
               newsInfo: false,
               content: [
                '该商品已经到达丰台区',
                '联系人: 左先生',
                '电话: 22311333'
               ]
              }, 
              {
               date: '09-02',
               time: '10:32',
               newsInfo: false,
               content: [
                '该商品已经到达北京市',
                '联系人: 田先生',
                '电话: 22311333'
               ]
              }, 
              {
               date: '09-01',
               time: '00:00',
               newsInfo: false,
               content: [
                '该商品已经出库',
               ]
              }, 
           ]
        }
    },
    methods: {

    }

}
</script>
<style lang="scss" scoped>
    .info {
      padding: 0.2rem 0.2rem 1rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eeeeee;
      overflow-y: scroll;
    }
    .info-top {
      background: #ffffff;
      overflow: hidden;
      .content-top{
        padding: 0.3rem;
        display: flex;
        justify-content: start;
        img {
          width: 1.5rem;
          height: 1.5rem;
          border: 1px solid #eeeeee;
        }
        .content-right {
          margin-left: 0.3rem;
          width: 80%;
          .content-title {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 0.2rem;
            line-height: 0.4rem;
          }
        }
      }
      .content-bottom {
        float: right;
        margin-right: 0.3rem;
        padding-bottom: 0.2rem;
      }
    } 
    .info-top .item-top{
      padding: 0.3rem 0 0.3rem 0.2rem;
      border-bottom: 1px solid #cccccc;
    }
    .info-top .item-top span{
      float: right;
      padding-right: 0.2rem;
    }
    .info-title {
      padding: 0.2rem;
      background: #ffffff;
      border-bottom: 1px solid #cccccc;
      margin-top: 0.2rem;
    }

    .logistics-info {
      background: #ffffff;
      width: 100%;
      .logistics-item {
        display: flex;
        align-items: center;
        padding: 0.4rem 0;
        border-bottom: 1px solid #cccccc;
        width: 100%;
        img {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 100px;
          border: 1px solid #cccccc;
          margin: 0 0.5rem;
        }
        .right-msg {
          width: 76%;
          p {
            width: 90%;
            // max-width: 6rem;
            overflow: hidden;
            line-height: 0.4rem;
          }
          .user {
            padding-bottom: 0.3rem;
          }
        }
       
      }
    }







    .item-info {
      padding: 0.5rem 0 0 0.2rem;
      background: #ffffff;
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
      padding: 0 0 0 1.1rem;
    }
    .right-info p {
      padding-bottom: 0.3rem;
    }
    li:first-child .left-info {
      padding-bottom: 0.7rem;
      padding-top: 0.3rem;
    }
    li:first-child .right-info {
      padding-top: 0.3rem;
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

