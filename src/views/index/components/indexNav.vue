<template>
    <div class="nav">
        <ul>
            <router-link to="/index" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-envelope-open-o" aria-hidden="true" ></i></p>
                    <span>热销</span>
                </div>
            </router-link>
            <router-link to="/product" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-pencil" aria-hidden="true"></i></p>
                    <span>推荐</span>
                </div>
            </router-link>
            <router-link to="/machine" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-microchip" aria-hidden="true"></i></p>
                    <span>新品</span>
                </div>
            </router-link>
            <router-link to="/cart" tag = 'li'>
                <div class="index item">
                    <p><i class="fa fa-shopping-cart" aria-hidden="true"></i></p>
                    <span>优惠</span>
                </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'IndexVue',
}
</script>
<style lang="scss" scoped>
    .nav {
        margin-top: 0.5rem;
        width:100%;
        height: 1.5rem;
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
