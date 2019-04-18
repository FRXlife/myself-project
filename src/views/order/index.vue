<template>
    <div class="order">
        <div class="title">全部订单</div>
        <TabBar />
        <router-view></router-view>
        <!-- <v-bottom></v-bottom> -->
    </div>
</template>

<script>
import TabBar from '@/components/tabBar'
export default {
    name: 'Order',
    components: {
        TabBar
    }
}
</script>

<style lang="scss" scoped>
    .title {
        width: 100%;
        height: 1rem;
        color: #ffffff;
        text-align: center;
        line-height: 1rem;
        background-color: #f66;
        margin-bottom: 0.9rem;
        span {
            float: right;
            margin-right: 0.2rem;
        }
    }
</style>
