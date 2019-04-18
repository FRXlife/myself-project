<template>
    <div class="tabBar">
        <ul class="tab-list">
            <router-link to="/order/allorder" class="tab-item" tag="li">全部</router-link>
            <router-link to="/order/nopay" class="tab-item" tag="li">待付款</router-link>
            <router-link to="/order/nosend" class="tab-item" tag="li">待发货</router-link>
            <router-link to="/order/sended" class="tab-item" tag="li">已发货</router-link>
            <router-link to="/order/refund" class="tab-item" tag="li">退款</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {

        }        
    },

}
</script>

<style lang="scss" scoped>
    .tabBar {
        position: fixed;
        top: 1rem;
        left: 0;
        width: 100%;
        height: 0.9rem;
        overflow: auto;
    }
    .tab-list {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        overflow: auto;
        border-bottom: 1px solid #cccccc;
        .tab-item {
            margin: 0 0.3rem;
            padding: 0.2rem 0;
            box-sizing: border-box;
            text-align: center;
            border-bottom: 2px solid transparent;
        }
        .router-link-active {
            border-bottom: 2px solid red;
            color: red;
        }
    }
</style>
