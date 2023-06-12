<template>
    <div>
        <div class="div1">我是头部组件</div>
        <div>我是头部组件--{{msg}}</div>
        <p>{{ msg2 }}</p>
        <button @click="fn">点击</button>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            msg:'我是一个数据'
        }
    },
    computed:{
        msg2:function(){
            return this.msg+'haha'
        }
    },
    methods:{
        fn(){
            alert(1);
        }
    },
    beforeCreate(){
        console.log('创建前')
    },
    created(){
        console.log('创建后')
    },
    beforeMount(){
        console.log('挂载前')
    },
    mounted(){
        console.log('挂载后')
    }
}
</script>
<style>
.div1{
    color: red;
}
</style>