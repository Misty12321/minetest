<template>
    <div>
        我是一个子组件-----{{ parentData }}--{{ b }}
        <button @click="send">给父级传数据</button>
        <button @click="update">更改数据</button>
        <input>
    </div>
</template>
<script>
export default {
    props: ['msg'],
    data: function () {
        return {
            a: '我是子组件的数据',
            b:'更改后的子组件数据',
            parentData:''
        }
    },
    methods: {
        send() {
            this.$emit('ev', this.a);
        },
        update(){
            this.b='修改后'
           
        }
    },
    beforeMount(){
        this.$emit('ev','我是初始的子组件数据');
        console.log('8888')
    },
    mounted(){
        console.log(666,this.$parent.msg)
        this.parentData=this.$parent.msg;
    },
    updated(){
        console.log('111')
    }
}
</script>