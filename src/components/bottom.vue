<template>
    <div id="bottom">
        <ul>
            <router-link to="/index" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-envelope-open-o" aria-hidden="true" ></i></p>
                    <span>首页</span>
                </div>
            </router-link>
            <router-link to="/product" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-pencil" aria-hidden="true"></i></p>
                    <span>商品</span>
                </div>
            </router-link>
            <router-link to="/machine" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-microchip" aria-hidden="true"></i></p>
                    <span>售卖机</span>
                </div>
            </router-link>
            <router-link to="/cart" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
                    <span>购物车</span>
                </div>
            </router-link>
            <router-link to="/user" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-user" aria-hidden="true"></i></i></p>
                    <span>我的</span>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
  @import "../style/mixin.scss";
    .router-link-active {
        color:#f66;
    }
    #bottom {
        width:100%;
        position:fixed;
        bottom:0;
        left:0;
        z-index:999;
        border-top:1px solid #cccccc;
        span {
            font-size: 0.3rem;
        }
        ul {
            display: flex;
            background:rgb(255,255,255);
            li {
                text-align: center;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 1rem;
                .item {
                    margin: 0.1rem auto;
                    .fa {
                        width: 100%;
                        font-size:0.34rem;
                        margin: 0.1rem 0;
                    }
                    span {
                        font-size: 0.3rem;
                    }
                }

            }
        }
    }
</style>
