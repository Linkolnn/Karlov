<script setup>
import { ref, watch, Transition } from 'vue';

const menuOpen = ref(false);

watch(menuOpen, (value) => {
  if (value) {
    document.body.classList.add('no_scroll'); 
  } else {
    document.body.classList.remove('no_scroll');
  }
});
</script>

<template>
  <div class="burger_menu_block">
    <TransitionGroup name="icon">   
      <img v-if="!menuOpen" @click="menuOpen = !menuOpen" class="burger_menu_icon" src="/src/assets/images/burger menu/menu.svg" alt="">
      <img v-if="menuOpen" @click="menuOpen = !menuOpen" class="burger_menu_icon" src="/src/assets/images/burger menu/cross.svg" alt="">
    </TransitionGroup>
    <Transition name="menu">
      <div v-if="menuOpen" class="burger_menu menu_open">
          <ul class="burger_list">
              <h3 class="burger_menu_title nav_text">Quick Links</h3>
              <li class="burger_items">
                <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Home</RouterLink>
              </li>
              <li class="burger_items">
                  <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/#about">About</RouterLink>
              </li>
              <li class="burger_items">
                <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/quiz">Quiz</RouterLink>
              </li>
              <li class="burger_items">
                  <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Contact</RouterLink>
              </li>
          </ul>
          <ul class="burger_list">
              <h3 class="burger_menu_title nav_text">Explore More</h3>
              <li class="burger_items">
                <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">FAQ</RouterLink>
              </li>
              <li class="burger_items">
                  <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Gallery</RouterLink>
              </li>
              <li class="burger_items">
                <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Events</RouterLink>
              </li>
              <li class="burger_items">
                  <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Blog</RouterLink>
              </li>
          </ul>
          <ul class="burger_list">
              <h3 class="burger_menu_title nav_text">Connect with Us</h3>
              <li class="burger_items">
                <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Facebook</RouterLink>
              </li>
              <li class="burger_items">
                  <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Twitter</RouterLink>
              </li>
              <li class="burger_items">
                <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">Instagram</RouterLink>
              </li>
              <li class="burger_items">
                  <RouterLink @click="menuOpen = !menuOpen" class="burger_items_link nav_text" to="/">LinkedIn</RouterLink>
              </li>
          </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

.icon-enter-active {
  transition: all 0.3s ease-out;
}

.icon-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.icon-leave-from, .icon-leave-to {
  transform: translateX(80px);
  opacity: 0;
}



.menu-enter-active, .menu-leave-active {
  transition: transform 1s ease;
}

.menu-enter-from {
  transition: transform 1s ease;
  transform: translateX(100%);
}

.menu-leave-to {
  transform: translateX(100%);
}

</style>