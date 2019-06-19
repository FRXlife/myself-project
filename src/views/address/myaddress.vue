<template>
  <div class="address">
    <div class="title">收货信息</div>
    <div class="address-content">
      <div class="address-item">
        <label for="titleName">收货人姓名</label>
        <input id="titleName" type="text" placeholder="收货人姓名">
      </div>
      <div class="address-item">
        <label for="titleTel">收货人电话</label>
        <input id="titleTel" type="text"  placeholder="收货人电话">
      </div>
      <div class="address-item">
        <label for="titleArea">收获地区</label>
        <!-- <input id="titleArea" type="text" readonly @click="showPop" v-model="areaData" placeholder="收获地区"> -->
        <input id="demo1" type="text" readonly="" placeholder="收获地区">
      </div>
      <div class="address-item">
        <label for="titleAddress">详细地址</label>
        <input id="titleAddress" type="text" placeholder="街道门牌，楼层房间号等信息">
      </div>
      <button>保存</button>
    </div>
    <!-- <v-bottom></v-bottom> -->
    <Area :showAddress = 'showAddress' @editReceive="getReceive"  @getData="getReceive" />

    <!-- <Area2 /> -->
    <!-- <Area3 /> -->
    <!-- <Area4 /> -->
  </div>
</template>

<script>
import Area from '@/components/area'
import Area2 from '@/components/area2'
import Area3 from '@/components/area3'
import Area4 from '@/components/area4'
import '@/js/LAreaData1.js'
import '@/js/LAreaData2.js'
import '@/js/LArea.js'
export default {
  data() {
    return {
      showAddress: false,
      areaData: '',
    };
  },
  components: {
    Area,Area2,Area3,Area4
  },
  methods: {
    getReceive(data) {
      this[data.key] = data.value
    },
    showPop() {
      this.showAddress = true;
    }
  },
  created() {},
  mounted() {
    var area1 = new LArea();
    area1.init({
      'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
      'valueTo': '#value1', //选择完毕后id属性输出到该位置
      'keys': {
        id: 'id',
        name: 'name'
      }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
      'type': 1, //数据源类型
      'data': LAreaData //数据源
    });
    area1.value=[0,0,0];//控制初始位置，注意：该方法并不会影响到input的value
    // var area2 = new LArea();
    // area2.init({ 
    //   'trigger': '#demo2',
    //   'valueTo': '#value2',
    //   'keys': {
    //     id: 'value',
    //     name: 'text'
    //   },
    //   'type': 2,
    //   'data': [provs_data, citys_data, dists_data]
    // });
  }  

};
</script>

<style lang="scss" scoped>
  body {
    background: #eeeeee !important;
  }
  .address {
    position: fixed;
    top: 0;
    left:0;
    right:0;
    bottom: 0;
    background: #eeeeee;
  }
  .address-content {
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
  .address-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.3rem;
  }
  .address-item input,.address-item textarea {
    width: 100%;
    padding-left: 0.1rem;
  }
  .address-item label {
    width: 2rem;
  }
  .address-item input {
    height: 1rem;
  }
  .address-item textarea {
    height: 4rem;
    resize: none;
  }
  .address-item .content {
    padding-top: 0.2rem;
  }
  .address-content button {
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
