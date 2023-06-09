<template>
    <div class="shop-item">
        <img :src="info.images" alt="">
        <p>{{ info.title }}</p>
        <p><b>￥{{ info.price }}</b><i></i></p>
    </div>

</template>
<script>a
export default{
    props:['info']
}</script>
<style>
.shop-item{
    width: 200px;
    height: 400px;
    padding: 10px;
    box-sizing: border-box;
}
.shop-item img{
    width: 180px;
    height: 240px;
}
.shop-item p{
    font-size: 14px;
    color: aqua;
}
.shop-item b{
    color: red;
}
.shop-item i{
    cursor: pointer;
}
</style>