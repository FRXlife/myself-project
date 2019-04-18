<template>
    <div class = "index ">
        <div class="top">
            <p class="address"><i class="fa fa-map-marker" aria-hidden="true"></i><span>正在定位...</span></p>
            <div class="search">
                <input type="text" placeholder="小米爆品">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <swiper />
        </div>
        <IndexNav />
        <p class="item-title">
            发现好货
        </p>
        <div class="goods">
            <div class="goods-item"></div>
            <div class="goods-item" style="margin-left:0.2rem;">
                <div class="item"></div>  
                <div class="item" style="margin-top:0.2rem;"></div>  
            </div>
        </div>
        <p class="item-title">
            附近得售卖机
        </p>
        <div class="item-info">
            <div class="img-info">
                <a href="#">
                    <img src="@/assets/1.jpg" alt="">
                    <p>
                        生命诚可贵<br/>爱情价更高
                    </p>
                </a>
            </div>
            <div class="text-info">
                <p class="name">广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层</p>
                <div class="distance">
                    <Star :score="4" />
                    <span style="float:right;">1.2KM</span>
                </div>
                <div class="address">
                    <span>朝阳区</span>
                    <span style="margin:0;">电子产品</span>
                </div>
            </div>
        </div>
        <div class="item-info">
            <div class="img-info">
                <a href="#">
                    <img src="@/assets/1.jpg" alt="">
                    <p>
                        生命诚可贵<br/>爱情价更高
                    </p>
                </a>
            </div>
            <div class="text-info">
                <p class="name">广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层</p>
                <div class="distance">
                    <Star :score="3" />
                    <span style="float:right;">1.2KM</span>
                </div>
                <div class="address">
                    <span>朝阳区</span>
                    <span style="margin:0;">电子产品</span>
                </div>
            </div>
        </div>
        <div class="item-info">
            <div class="img-info">
                <a href="#">
                    <img src="@/assets/1.jpg" alt="">
                    <p>
                        生命诚可贵<br/>爱情价更高
                    </p>
                </a>
            </div>
            <div class="text-info">
                <p class="name">广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层广顺北大街33号四层</p>
                <div class="distance">
                    <Star :score="4.5" />
                    <span style="float:right;">1.2KM</span>
                </div>
                <div class="address">
                    <span>朝阳区</span>
                    <span style="margin:0;">电子产品</span>
                </div>
            </div>
        </div>
        <v-bottom></v-bottom>
    </div>
</template>
<script>
import Swiper from './components/swiper'
import IndexNav from './components/indexNav'
import Star from '@/components/star'
export default {
    name: 'Index',
    data() {
        return {

        }
    },
    components: {
        Swiper, IndexNav, Star
    }
}
</script> 
<style scoped lang="scss" scoped>
    .index {
        overflow-y: scroll;
        padding-bottom: 1rem;
    }
    .top {
        background-color:rgb(209, 214, 236);
        padding:0 0.4rem 0;

    }
    .fa-map-marker {
        color:#f66;
        font-size:0.4rem;
        margin-right:0.15rem;
    }
    .address {
        height: 1rem;
        display: flex;
        align-items: center;
        color:#f66;
    }
    .search {
        position:relative;
        height:0.7rem;
        input {
            background-color:#ffffff;
            height:100%;
            width:100%;
            padding-left: 0.55rem;
            outline: none;
        }
        .fa-search {
            position:absolute;
            left: 0.1rem;
            top: 0.2rem;
            color:#cccccc;
        }
    }
    .item-title {
        height: 1rem;
        align-items: center;
        display:flex;
        font-size: 0.3rem;
        padding-left: 0.4rem;
        font-weight: bold;
        border-top:0.2rem solid #ece8e8;
    }
    .goods {
        width: 100%;
        height: 4rem;
        display: flex;
        background-color: #f7f7f7;
        .goods-item {
            width: 49%;
            &:nth-child(1) {
                border:1px solid #cccccc;
            }
            .item {
                height: 47%;
                border: 1px solid #cccccc;
            }
        }
    }
    .item-info {
        height: 3rem;
        padding: 0.2rem;
        border-top: 1px solid #cccccc;
        border-bottom: 1ox solid #cccccc;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        .img-info {
            width:35%;
            border:1px solid #cccccc;
            margin-right:0.3rem;
            img {
                width: 100%;
                height: 100%;
                opacity: 1;
                transform-origin: 50% 50%;
                transition: all 0.35s ease-in-out;
            }
            p {
                width: 100%;
                height: 100%;
                visibility: hidden;
                background: #333333;
                transition: all 0.35s ease 0.35s;
                text-shadow: 0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3);
            }
            a {
                display: inline-block;
                width: 100%;
                height: 100%;
            }   
            a:hover p {
                visibility: visible;
                opacity: 1;
                transform: scale(1);
                transform: translateY(-2.6rem) scale(1);
            }
                
            a:hover img{
                transform: translateY(50px) scale(0);
            }
        }
        .text-info {
            width:63%;
            position: relative;
            overflow: hidden;
            .distance {
                margin-top: 0.3rem;
                overflow: hidden;
            }
            .address {
                height: 0.7rem;
                position: absolute;
                right: 0;
                bottom: 0;
                span {
                    display: inline-block;
                    padding: 0.1rem 0.25rem;
                    background-color: #f66;
                    color:#ffffff;
                    margin-right: 0.2rem;
                }
            }
        }
    }
</style>

