<script setup>
import Button from '@ui/Button.vue';
</script>

<template>
    <ul class="header_list">
      <li class="header_items">
        <RouterLink class="header_items_link nav_text" to="/">Home</RouterLink>
      </li>
      <li class="header_items">
        <RouterLink class="header_items_link nav_text" to="/#about" >About</RouterLink>
      </li>
      <li class="header_items">
        <RouterLink class="header_items_link nav_text" to="/quiz">Quiz</RouterLink>
      </li>
      <li class="header_items">
        <RouterLink class="header_items_link nav_text" to="/">Contact</RouterLink>
      </li>
      <li class="header_items">
        <Button class="header_items_btn">FAQ</Button>
      </li>
    </ul>
</template>