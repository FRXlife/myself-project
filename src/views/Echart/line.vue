
<template>
  <div>
    <div id="main"></div>

  </div>
</template>
<script>
import Echarts from 'echarts'
export default {
  data() {
    return {
    }
  },
  methods: {
    getData() {
      var myChart = echarts.init(document.getElementById('main'));
      let   option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
        };
       myChart.setOption(option);
    },
    mounted() {
      this.getData();
    }
      
  }
}
</script>
<style lang="scss" scoped>
  .main {
    width: 6rem;
    height:6rem;
  }
    

</style>


