<template>

  <div id="app">

    <Navbar />
    <router-view/>

  </div>

</template>

<script>
import Navbar from '@/components/layout/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>

<style>

  #app {
    display: flex;
    flex-flow: column;
    font-family: 'Comic Sans MS';
    text-align: center;
    background-color: #ddd;
  }

</style>
