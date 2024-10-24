<script setup>
import { RouterLink } from 'vue-router';
import HeaderMenu from './header/HeaderMenu.vue';
import BurgerMenu from './header/BurgerMenu.vue';
import { screenWidth } from '@composable/screenWidthTracking.js';

const { windowWidth } = screenWidth(769);
</script>

<template>
  <header class="header">
    <RouterLink class="header_logo_link" to="/">
      <img class="header_logo_img logo" src="../assets/images/logo/logo.svg"/> 
      <h2 class="header_logo_text">Karlov</h2>
    </RouterLink>
    <nav class="header_menu">
      <HeaderMenu v-if="windowWidth"></HeaderMenu>
      <BurgerMenu v-else></BurgerMenu>
    </nav>
  </header>
</template>