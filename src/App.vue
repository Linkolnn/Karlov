<script setup>
import { RouterView } from 'vue-router';
import Header from '@components/Header.vue'
import Aside from '@components/Aside.vue';
import Footer from '@components/Footer.vue';
import { screenWidth } from '@composable/screenWidthTracking.js';

const { windowWidth } = screenWidth(769);

</script>

<template>
  <Header></Header>
  <main class="main"> 
    <Aside v-if="windowWidth"></Aside>
    <RouterView/>
  </main>
  <Footer></Footer>
</template>

<style scoped>
</style>
