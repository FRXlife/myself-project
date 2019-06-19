<template>
  <div class="content-block">
		<input id="demo1" type="text" readonly="" placeholder="城市选择特效"  value="北京市,东城区">
		<!-- <input id="value1" type="hidden" value="1,1,1"> -->
	</div>
</template>
<script>
import '@/js/LAreaData1.js'
import '@/js/LAreaData2.js'
import '@/js/LArea.js'
export default {
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
}
</script>

<style lang="scss" scoped>
    @import "../style/LArea.css";
    .content-block input {
      width: 100%;
      height: 1.1rem;
      margin-top: 0.3rem;
      padding-left: 0.2rem;
    }
</style>


