<template>
    <div class="content">
        <div class="title">商品详情 </div>
        <img src="" alt="">
        <p class="product-name">
            <span class="price">￥99.0</span>
            <span class="fright">剩余55件</span>
        </p>
    </div>
</template>
<script>
export default {
    name: 'Detail'
}
</script>
<style lang="scss" scoped>
    .content {
        padding-bottom: 1rem;
        .price {
            color: #f66;
        }
    }
    .fright {
        float: right;
        margin-right: 0.3rem;
    }
    .title {
        width: 100%;
        height: 1rem;
        color: #ffffff;
        text-align: center;
        line-height: 1rem;
        background-color: #f66;
    }
</style>

