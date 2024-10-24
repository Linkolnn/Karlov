<script setup>
import { screenWidth } from '@composable/screenWidthTracking.js';

const 
    { windowWidth } = screenWidth(1051),
    { windowWidthBtn } = screenWidth();

</script>

<template>
    <section class="banner_section section">
        <img class="banner_img" src="/src/assets/images/banner/Banner.svg" alt="">
        <div class="banner_content">
            <h1 class="banner_title">
                <slot name="title"></slot>
            </h1>
            <div class="banner_textblock">
                <span v-if="windowWidth" class="banner_text">
                    <slot name="text"></slot>
                </span>
                <slot v-if="windowWidthBtn >= 451" name="first_btn"></slot>
            </div>
        </div>
        <slot v-if="windowWidthBtn <= 450" name="second_btn"></slot>
    </section>
</template>