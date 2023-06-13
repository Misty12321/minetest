<template>
  <div class="home">
    <div>homeview</div>
    <RouterView></RouterView>
    <router-link to="/home/NoticeHome">111</router-link>|
    <router-link to="/home/DormHome">222</router-link>|
  </div>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
  name: 'HomeView',
  components: {
    RouterView
}
}
</script>
