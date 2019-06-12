<template>
    <div class="nav">
        <ul>
            <router-link to="/index" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-envelope-open-o" aria-hidden="true" ></i></p>
                    <span>待付款</span>
                </div>
            </router-link>
            <router-link to="/product" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-pencil" aria-hidden="true"></i></p>
                    <span>待发货</span>
                </div>
            </router-link>
            <router-link to="/machine" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-microchip" aria-hidden="true"></i></p>
                    <span>已发货</span>
                </div>
            </router-link>
            <router-link to="/cart" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
                    <span>退款中</span>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'UserNav',
}
</script>
<style lang="scss" scoped>
    .nav {
        width:100%;
        height: 2rem;
        border-top: 0.2rem solid #f3f3f3;
        border-bottom: 0.2rem solid #f3f3f3;
        span {
            font-size: 0.3rem;
        }
        ul {
            display: flex;
            background:rgb(255,255,255);
            height: 100%;
            li {
                text-align: center;
                flex: 1;
                justify-content: center;
                align-items: center;
                height: 100%;
                padding-top: 0.2rem;
                .item {
                    height: 100%;
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
