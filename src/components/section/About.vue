<template>
    <section id="about" class="about_section section">
        <div class="about_textblock">
            <h2 class="about_title">
                <slot name="title"></slot>
            </h2>
            <span class="about_text text">
                <slot name="text"></slot>
            </span>
        </div>
        <img class="about_img" src="/src/assets/images/about/about_img.svg" alt="">
    </section>
</template>