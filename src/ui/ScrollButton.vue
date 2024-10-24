<script setup>
import { goScrollToTop } from '@composable/screenScrollHeightTracking';
const { scrollToTop, showButton, buttonClass } = goScrollToTop();
</script>

<template>
    <button :class="buttonClass" v-if="showButton" @click="scrollToTop" class="btn_scroll" >
        <img src="../assets/images/scroolbtn/Vector.svg" alt="">
    </button>
</template>
