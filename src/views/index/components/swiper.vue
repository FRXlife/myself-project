<template>
    <div class = "swipe ">
      <swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper" v-if="categoryList.length!=0">
        <swiper-slide v-for="(item,index) in categoryList" :key="index" >
          <img :src="item.url" alt="" />
        </swiper-slide>
        <!-- 常见的小圆点 -->
        <div class="swiper-pagination"  v-for="(item,index) in categoryList" :key="index" slot="pagination" ></div>
      </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    name: 'Swipe',
    data() {
        const that = this
        return {
          imgIndex: 1,
          swiperOption: {
            //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            //循环
            loop: true,
            //设定初始化时slide的索引
            initialSlide: 0,
            //自动播放
            autoplay: {
              delay: 1500,
              stopOnLastSlide: false,
              /* 触摸滑动后是否继续轮播 */
              disableOnInteraction: false
            },
            //滑动速度
            speed: 800,
            //滑动方向
            direction: "horizontal",
            //小手掌抓取滑动
            grabCursor: true,
            on: {
              //滑动之后回调函数
              slideChangeTransitionStart: function() {
                /* realIndex为滚动到当前的slide索引值 */
                that.imgIndex= this.realIndex - 1;
              },
            },
            //分页器设置
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "progressbar"
            },
          },
          categoryList: [
              {
                  name: '美食',
                  url: require('@/assets/L3.jpg'),
                  type: 'food'
              },
              {
                  name: '美团超市',
                  url: require('@/assets/L4.jpg'),
                  type: 'supermarket'
              },
              {
                  name: '生鲜果蔬',
                  url: require('@/assets/L5.jpg'),
                  type: 'fruit'
              },
              {
                  name: '下午茶',
                  url: require('@/assets/L6.jpg'),
                  type: 'tea'
              },
              {
                  name: '正餐优选',
                  url: require('@/assets/L7.jpg'),
                  type: 'dinner'
              },
              {
                  name: '汉堡披萨',
                  url: require('@/assets/L8.jpg'),
                  type: 'pizza'
              },
          ],
        }
    }
}
</script>
<style lang="scss" scoped>
  @import "@/style/mixin.scss";

  .swipe {
    padding-top: 0.3rem;
    @include px2rem(height, 370);
    box-sizing: border-box;
    .swiper-container {
      width:100%;
      overflow: hidden;
      height: 100%;
      img {
        height:100%;
        width:100%;
      }
    }
  }
</style>

