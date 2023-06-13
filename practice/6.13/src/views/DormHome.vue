<template>
    <div >
        <el-row class="tac">

  <el-col :span="12">
    <h5>自定义颜色</h5>
    <el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/home/NoticeHome">选项1</el-menu-item>
          <el-menu-item index="/home/DormHome">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     
   
      
    </el-menu>
  </el-col>
</el-row>
    </div>
    
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.div2{
    background-color: red;
    height: 100px;
    width: 100px;

}</style>