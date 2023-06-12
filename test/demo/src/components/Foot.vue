<template>
    <div>
        <input type="text" @keyup.enter="add" v-model="msg"><button @click="add">添加</button>
        <ul>
            <li :key="v.id" v-for="v in arr.slice((page-1)*count,page*count)">{{v.tit}} <a @click="del(v.id)" href="javascript:;">删除</a></li>
        </ul>
        <ul>
            <li :class="page==v?'active':''" @click="page=v" v-for="v in Math.ceil(arr.length/count)">{{ v }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            id:0,
            arr:[],//{id:0,tit:'aaa'}
            msg:'',
            page:1,
            count:5
        }
    },
    methods:{
        add(){
            this.id=this.id+1;
            this.arr.push({id:this.id,tit:this.msg})
            this.msg='';
        },
        del(id){
            this.arr.forEach((v,i)=>{
                if(v.id==id){
                    this.arr.splice(i,1);
                    if(Math.ceil(this.arr.length/this.count)<this.page){
                        this.page--;
                    }
                }
            })
        }
    }
}
</script>
<style>
.active{
    color: red;
}
</style>
<!-- 
    1页5条
    1  arr.slice(0,5)
    1 0,5
    2 5,10
    n (n-1)count,n*count


    1   1
    5   1
    6   2
    10  2
    11  3
  total   Math.ceil(total/count)

   Math.ceil(total/count)  2  3
 -->