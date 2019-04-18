<template>
    <div class = "index ">
        <div class="title">个人中心   <span>设置</span></div>
        <div class="user-info">
            <div class="img-info">
                <img src="" alt="">
            </div>
            <div class="text-info">
                <p class="name">v朋数码</p>
                <p>手机号: 136****9321</p>
            </div>
            <div class="icon">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
        </div> 
        <UserNav   /> 
        <ul class="kind-list">
            <li><a href="#">全部订单</a></li>
            <li><a href="#">收获地址</a></li>
            <li><a href="#">取货码订单</a></li>
            <li><a href="#">我的发票</a></li>
            <li><a href="#">优惠券</a></li>
            <li><a href="#">意见反馈</a></li>
            <li><a href="#">联系客服</a></li>
        </ul>
        <v-bottom></v-bottom>
    </div>
</template>

<script>
import UserNav from './components/userNav'
export default {
    name: 'User',
    components: {
        UserNav
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
    .user-info {
        height: 2rem;
        padding: 0.3rem;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        background-color: red;
        position: relative;
        .img-info {
            width:16%;

            border:1px solid #cccccc;
            border-radius: 100px;
            margin-right: 0.8rem;
        }
        .text-info {
            width:83%;
            position: relative;
            overflow: hidden;
            p {
                color: #ffffff;
                font-size: 0.3rem;
                &:nth-child(1) {
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }
            }

        }
        .icon {
            position: absolute;
            height: 100%;
            width: 1rem;
            right: 0.2rem;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .fa {
                font-size: 0.5rem;
                color: #ffffff;
            }
        }
    }
    .kind-list {
        overflow: hidden;
        li {
            height: 1.5rem;
            border-bottom: 1px solid #cccccc;
            display: flex;
            align-items: center;
            padding-left: 0.3rem;
        }
    }
</style>

