<template>
    <div class = "cart ">
        <div class="title">购物车   <span>设置</span></div>
        <div class="cartlist">
            <!--  -->
            <div class="item" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip" :data-index="index" v-for="(item,index) in listData"
                :key="index" data-type="0">
                <div class="con" :style="item.textStyle">
                    <div class="left">
                        <div class="icon" @click="changeColor(index,item.goods_id)" :class="[ Listids[index] ? 'active' : '',{active:allcheck}]"></div>
                        <div class="img">
                        <img :src="item.list_pic_url" alt="">
                        </div>
                        <div class="info">
                        <p>{{item.goods_name}}</p>
                        <p>￥{{item.retail_price}}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="num">
                        x{{item.number}}
                        </div>
                    </div>
                </div>

                <div @click="deleteItem" class="delete" :style="item.textStyle1">
                    <div>
                        删除
                    </div>
                </div>

            </div>
        </div>
        <div v-if="false" class="nogoods">
            <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
            </div>
            <div class="fixed">
            <div @click="allCheck" :class="{active:allcheck}" class="left">
                全选({{isCheckedNumber}})
            </div>
            <div class="right">
                <div>
                ￥{{allPrise}}
                </div>
                <div @click="orderDown">下单</div>
            </div>
            </div>
        <v-bottom></v-bottom>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    created() {
        this.getListData()
    },
    data() {
      return {
        openId: "",
        listData: [
            {
                goods_id:1134030,
                goods_name:"简约知性记忆棉坐垫",
                id:639,
                list_pic_url:"http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png",
                number: 1, 
                retail_price : 46,
                user_id: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",   
            },
            {
                goods_id:1134031,
                goods_name:"简约知性记忆棉坐垫",
                id:640,
                list_pic_url:"http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png",
                number: 1, 
                retail_price : 465,
                user_id: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",   
            },
            {
                goods_id:1134032,
                goods_name:"简约知性记忆棉坐垫",
                id:641,
                list_pic_url:"http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png",
                number: 1, 
                retail_price : 146,
                user_id: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",   
            },
        ],
        allcheck: false,
        Listids: [],
        startX: "",
        endX: "",
      };
    },
    components: {},
    methods: {
      skip(){
            if( this.checkSlide() ){
                this.restSlide();
            }
        },
        //滑动开始
        touchStart(e){
            // 记录初始位置
            this.startX = e.touches[0].clientX;
        },
        //滑动结束
        touchEnd(e){
            // 当前滑动的父级元素
            let parentElement = e.currentTarget;
            // 记录结束位置
            this.endX = e.changedTouches[0].clientX;
            // 左滑
            if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
                this.restSlide();
                parentElement.dataset.type = 1;
            }
            // 右滑
            if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
                this.restSlide();
                parentElement.dataset.type = 0;
            }
            this.startX = 0;
            this.endX = 0;
        },
        //判断当前是否有滑块处于滑动状态
        checkSlide(){
            let listItems = document.querySelectorAll('.item');
            for( let i = 0 ; i < listItems.length ; i++){
                if( listItems[i].dataset.type == 1 ) {
                    return true;
                }
            }
            return false;
        },
        //复位滑动状态
        restSlide(){
            let listItems = document.querySelectorAll('.item');
            // 复位
            for( let i = 0 ; i < listItems.length ; i++){
                listItems[i].dataset.type = 0;
            }
        },
        //删除
        deleteItem(e){
            // 当前索引
            let index = e.currentTarget.dataset.index;
            // 复位
            this.restSlide();
            // 删除
            this.listData.splice(index,1);
        },
      orderDown() {
        // if (this.Listids.length == 0) {
        //   wx.showToast({
        //     title: "请选择商品",
        //     icon: "none",
        //     duration: 1500
        //   });
        //   return false;
        // }
        // 去掉数组中空的false的
        // var newgoodsid = [];
        // for (let i = 0; i < this.Listids.length; i++) {
        //   const element = this.Listids[i];
        //   if (element) {
        //     newgoodsid.push(element);
        //   }
        // }
        // var goodsId = newgoodsid.join(",");
        // const data = await post("/order/submitAction", {
        //   goodsId: goodsId,
        //   openId: this.openId,
        //   allPrise: this.allPrise
        // });
        // if (data) {
        //   wx.navigateTo({
        //     url: "/pages/order/main"
        //   });
        // }
      },
      delGoods(id, index) {
        var _this = this;
        wx.showModal({
          title: "",
          content: "是否要删除该商品",
          success: function (res) {
            if (res.confirm) {

              _this.Listids.splice(index, 1);
              const data = get("/cart/deleteAction", {
                id: id
              }).then(() => {
                _this.getListData();
              });
            } else if (res.cancel) {
              console.log("用户点击取消");
              //滑动之前先初始化样式数据
              _this.initTextStyle();
            }
          }
        });
      },
      getListData() {
        // const data = await get("/cart/cartList", {
        //   openId: this.openId
        // });
        // this.listData = data.data;
        console.log(this.listData)
      },
      allCheck() {
        //先清空
        this.Listids = [];
        if (this.allcheck) {
          this.allcheck = false;
        } else {
          console.log("选择全部");

          this.allcheck = true;
          //循环遍历所有的商品id
          for (let i = 0; i < this.listData.length; i++) {
            const element = this.listData[i];
            this.Listids.push(element.goods_id);
          }
        }
      },
      change(e) {},
      changeColor(index, id) {
        if (this.Listids[index]) {
          this.$set(this.Listids, index, false);
        } else {
          this.$set(this.Listids, index, id);
        }
      }
    },
    computed: {
        isCheckedNumber() {
            let number = 0;
            for (let i = 0; i < this.Listids.length; i++) {
                if (this.Listids[i]) {
                    number++;
                }
            }
            if (number == this.listData.length && number != 0) {
                this.allcheck = true;
            } else {
                this.allcheck = false;
            }
            return number;
        },
        allPrise() {
            var Prise = 0;
            for (let i = 0; i < this.Listids.length; i++) {
                if (this.Listids[i]) {
                    Prise = Prise + this.listData[i].retail_price * this.listData[i].number;
                }
            }
            return Prise;
        }
    }
}
</script>
<style lang="scss" scoped>
    .cart {
        padding-bottom: 1rem;
        overflow-x: hidden;
    }
    .title {
        width: 100%;
        height: 1rem;
        color: #ffffff;
        text-align: center;
        line-height: 1rem;
        background-color: #f66;
        span {
            float: right;
            margin-right: 0.2rem;
        }
    }

    .cartlist {
        background: #fff;
        margin-bottom: 55px;
        .item {
        padding: 10px 0;
        border-bottom: 1px solid #f4f4f4;
        height: 83px;
        position: relative;
        &[data-type="0"] {
            transform: translate3d(0,0,0);
        }
        &[data-type="1"] {
            transform: translate3d(-50px,0,0);
        }
        .con {
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 300ms ease;
            .left {
            display: flex;
            align-items: center;
            width: 80%;
            .icon {
                height: 62px;
                width: 17px;
                background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat center center;
                background-size: 17px 17px;
                margin: 0 10px;
            }
            .icon.active {
                background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat center center;
                background-size: 17px 17px;
            }
            .img {
                height: 62px;
                width: 62px;
                display: block;
                background: #f4f4f4;
                img {
                width: 100%;
                height: 100%;
                }
            }
            .info {
                width: 50%;
                padding: 10px;
                p {
                line-height: 20px;
                }
            }
            }
            .right {
            padding-right: 25px;
            }
        }
        .delete {
            position: absolute;
            width: 50px;
            top: 0;
            right: -50px;
            text-align: center;
            height: 100%;
            background: #b4282d;
            color: #fff;
            transition: all 200ms ease;
            display: flex;
            align-items: center;
            justify-content: center;
            div {
            color: #fff;
            }
        }
        }
    }
    .fixed {
        position: fixed;
        bottom: 1rem;
        left: 0;
        height: 50px;
        line-height: 5px;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
        display: flex;
        align-items: center;
        background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat;
        background-size: 17px 17px;
        background-position: 10px;
        padding-left: 35px;
        height: 62px;
        }
        .active {
        background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat;
        background-size: 17px 17px;
        background-position: 10px;
        height: 62px;
        }
        .right {
        display: flex;
        div:nth-child(1) {
            color: #b4282d;
            padding-right: 20px;
            display: flex;
            align-items: center;
        }
        div:nth-child(2) {
            width: 100px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 14px;
            background: #b4282d;
            color: #fff;
        }
        }
    }
    .nogoods {
        margin-top: 100px;
        img {
        margin: 0 auto;
        display: block;
        width: 129px;
        height: 129px;
        }
    }
</style>

