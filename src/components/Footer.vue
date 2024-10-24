<script setup>
import ScrollButton from '@ui/ScrollButton.vue';
import { screenWidth } from '@composable/screenWidthTracking.js';

const { windowWidthBtn } = screenWidth();
</script>

<template>
    <div v-if="windowWidthBtn > 500 && windowWidthBtn <= 1050" class="btn_scroll_block">
        <Transition name="scroll-transition">
            <ScrollButton></ScrollButton>
        </Transition>
    </div>
    <footer class="footer">
        <div class="copyright_block">
            <img class="footer_logo logo" src="../assets/images/logo/logo.svg" alt="">
            <span class="copyright_text text">
                <p>© 2024 Karlov, Inc.</p>
                <p>All rights reserved.</p>
            </span>
        </div>
        <nav class="footer_menu">
            <ul class="footer_list">
                <h3 class="footer_menu_title text">Quick Links</h3>
                <li class="footer_items">
                  <RouterLink  class="footer_items_link text" to="/">Home</RouterLink>
                </li>
                <li class="footer_items">
                    <RouterLink  class="footer_items_link text" to="/#about">About</RouterLink>
                </li>
                <li class="footer_items">
                  <RouterLink  class="footer_items_link text" to="/quiz">Quiz</RouterLink>
                </li>
                <li class="footer_items">
                    <RouterLink  class="footer_items_link text" to="/">Contact</RouterLink>
                </li>
            </ul>
            <ul class="footer_list">
                <h3 class="footer_menu_title text">Explore More</h3>
                <li class="footer_items">
                  <RouterLink  class="footer_items_link text" to="/">FAQ</RouterLink>
                </li>
                <li class="footer_items">
                    <RouterLink  class="footer_items_link text" to="/">Gallery</RouterLink>
                </li>
                <li class="footer_items">
                  <RouterLink  class="footer_items_link text" to="/">Events</RouterLink>
                </li>
                <li class="footer_items">
                    <RouterLink  class="footer_items_link text" to="/">Blog</RouterLink>
                </li>
            </ul>
            <ul class="footer_list">
                <h3 class="footer_menu_title text">Connect with Us</h3>
                <li class="footer_items">
                  <RouterLink  class="footer_items_link text" to="/">Facebook</RouterLink>
                </li>
                <li class="footer_items">
                    <RouterLink  class="footer_items_link text" to="/">Twitter</RouterLink>
                </li>
                <li class="footer_items">
                  <RouterLink  class="footer_items_link text" to="/">Instagram</RouterLink>
                </li>
                <li class="footer_items">
                    <RouterLink  class="footer_items_link text" to="/">LinkedIn</RouterLink>
                </li>
            </ul>
            <ul v-if="windowWidthBtn > 1050 || windowWidthBtn <= 500" class="footer_list">
                <div class="btn_scroll_block">
                    <Transition name="scroll-transition">
                        <ScrollButton />
                    </Transition>
                </div>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
.scroll-transition-enter-active,
.scroll-transition-leave-active {
  transition: all 0.5s ease;
}

.scroll-transition-enter-from,
.scroll-transition-leave-to {
  opacity: 0;
  transform: translateY(20px); 
}
</style>