<template>
    <div>
        <h2>商品列表</h2>
        <div class="claerfix"> 
            <shop class="shop" v-for="v in arr" :info="v"></shop>
 
        </div>

    </div>
</template>
<script>
import shop from './shop.vue'
export default {
  data() {
    return {
      arr:[
        {price:"100",title:"20231款",images:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb337fd43-4787-464a-9d20-94e8128afac7%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688888672&t=0e8a3650d7e95ce58ef2fc3a1b5196a6"},
        {price:"200",title:"20232款",images:"https://img1.baidu.com/it/u=2514109667,999949709&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"},
        {price:"300",title:"20233款",images:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2c9cfe00-f7f3-432b-88fa-fa7e96802313%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688888672&t=a6a8b5ea75dd2cb48e90eca12538bc29"},
        {price:"400",title:"20234款",images:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc05445cf-1cac-42f1-918b-4ff9c78a7b65%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688888672&t=6db218fc923d57a20f0372aaefe64237"},

    ]
    };
  },
  components:{shop}
};
</script>
<style>
.div1{
    background-color: brown;
    width: 50px;
    height: 50px;
    margin-left: 50%;
}
.clearfix:after{
        content: '';
        display: block;
        clear: both;
    }
    .shop{
        float: left;
    }
</style>