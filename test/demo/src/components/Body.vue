<template>
    <div>
        
        <div class="clearfix">
           <Shop class="shop" :key="i" v-for="(v,i) in arr" :info="v"></Shop>
        </div>
    </div>
</template>
<script>
    import Shop from './Shop.vue'
    
    export default {
        components:{Shop},
        data:function(){
            return {
                arr:[
                    {title:'商品2',price:100,img:'https://v2.cn.vuejs.org/images/logo.svg'},
                   
                ]
            }
        },
        created(){
            //发送ajax 得到res.data
            //this.arr=res.data
        }
    }
</script>
<style>
    .clearfix:after{
        content: '';
        display: block;
        clear: both;
    }
    .shop{
        float: left;
    }
</style>


<!-- <script>
//函数的定义
function show(a) {
    alert(a)
}
//函数的调用
show(1)
show(2)
show(3)

['a','b','d']

</script> -->