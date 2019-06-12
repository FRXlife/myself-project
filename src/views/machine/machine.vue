<template>
    <div class = "index ">
        <div class="title">售卖机   <span>分类</span></div>
        <ul class="kind-content">
            <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" >
                <span :class="{active:active==index}">{{tab.type}}</span>
            </li>
        </ul>
        <!--:is实现多个组件实现同一个挂载点-->
        <!-- <component :is="currentView"></component> -->

        <ul class="kind-list">
            <li class="list-item" v-for="(item,index) in kindList" :key="index">
                <div class="img-info">
                    <img src="" alt="">
                </div>
                <div class="text-info">
                    <p class="name">{{ item.name }}</p>
                    <div class="item-info">
                        <span>{{ item.price }}</span>
                        <span class="buy" style="float:right;">立即购买</span>
                    </div>
                </div>
            </li>   
        </ul>
        <v-bottom></v-bottom>
    </div>
</template>

<script>
export default {
    name: 'Machine',
    data() {
        return {
            index: 1,
            active:0,
            currentView:'tab1',
            tabs:[
                {
                type:'默认',
                view:'tab1'
                },
                {
                type:'销量',
                view:'tab2'
                },
                {
                type:'价格',
                view:'tab1'
                },
                {
                type:'上架时间',
                view:'tab2'
                }
            ],
            kindList: [
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
                {
                    name: '广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层',
                    price: '￥190.00'
                },
            ]
        }
    },
    methods: {
        toggle(i,v){
            this.active=i;
            this.currentView=v;
        }
    },
    created() {
        console.log('')
    }

}
</script>
<style lang="scss" scoped>
    .index {
        padding-bottom: 1rem;
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
    .kind-content {
        display: flex;
        background:rgb(255,255,255);
        justify-content: space-around;
        border: 1px solid #cccccc;
        li {
            text-align: center;
            align-items: center;    
            justify-content: center;
            height: 1rem;
            display: flex;
            span {
                display: inline-block;
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                height: 100%;
                line-height: 1rem;
            }
            span.active {
                border-bottom: 1px solid #f66;
                color:#f66;
            }
        }
    }
    .kind-list {
        width: 100%;
        height: auto;
        .list-item {
            height: 2.4rem;
            padding: 0.2rem;
            border-bottom: 1px solid #cccccc;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            .img-info {
                width:35%;
                border:1px solid #cccccc;
                margin-right:0.3rem;
            }
            .text-info {
                width:63%;
                position: relative;
                overflow: hidden;
                .item-info {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    overflow: hidden;
                    width: 100%;
                    .buy {
                        display: inline-block;
                        padding: 0.1rem 0.25rem;
                        background-color: #f66;
                        color:#ffffff;
                        margin-right: 0.2rem;
                    }
                }
            }
        }
    }
</style>

