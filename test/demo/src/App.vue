<template>
  <div id="app">
    <Head></Head>
    <Body></Body>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Body from './components/Body.vue'
import Foot from './components/Foot.vue'

export default {
  components: {

    Body,

  },
  beforeCreate() {
    console.log('创建前1')
  },
  created() {
    console.log('创建后2')
  },
  beforeMount() {
    console.log('挂载前3')
  },
  mounted() {
    console.log('挂载后4')
  }
}
</script>

<style></style>
