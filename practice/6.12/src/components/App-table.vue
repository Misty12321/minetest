<template>
  <div id="app">
    <MyTable :data="arr1"></MyTable>
    <MyTable :data="arr2"></MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue';
export default {
  name: 'App',
  components: {
    MyTable
  },
  data:function(){
    return {
      arr1:[  
        {id:1,name:'张三',age:12,sex:'男'},
        {id:2,name:'张三',age:12,sex:'男'},
        {id:3,name:'张三',age:12,sex:'男'},
      ],
      arr2:[  
        {id:4,name:'张三',age:12,sex:'男'},
        {id:5,name:'张三',age:12,sex:'男'},
        {id:6,name:'张三',age:12,sex:'男'},
      ]
    }
  }
}
</script>

<style>

</style>
