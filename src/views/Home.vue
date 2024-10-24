<script setup>
import Button from '@ui/Button.vue';
import Card from '@ui/Card.vue';
import About from '@components/section/About.vue';
import Banner from '@components/section/Banner.vue';

</script>

<template>
    <article class="home_container">
        <Banner>
            <template #title>
                Welcome to Karlův <p class="banner_title">Most Praha</p>
            </template>
            <template #text>
                <p>Explore the rich history and stunning</p> 
                <p>architecture of the iconic Karlův Most, a</p> 
                <p>beloved landmark in the heart of Prague</p>
            </template>
            <template #first_btn>
                <Button class="banner_btn">Learn More</Button>
            </template>
            <template #second_btn>
                <Button class="banner_btn">Learn More</Button>
            </template>
        </Banner>
        <About>
            <template #title>
                Captivating Prague
            </template>
            <template #text>
                <p class="text">Discover the timeless charm of Karlův Most, a beloved Prague landmark that has witnessed the city's evolution over the centuries.</p>
                <p class="text">Experience the Charm of Karlův Most, a beloved Prague landmark that has stood the test of time, connecting the city's past and present with its stunning architecture and rich history. Explore the bridge's intricate details, marvel at the panoramic views, and immerse yourself in the vibrant culture that thrives along its banks</p>
            </template>
        </About>
        <section class="cards_section section">
            <Card v-for="Card in 6"></Card>
        </section>
    </article>
</template>