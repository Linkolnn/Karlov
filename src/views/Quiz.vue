<script setup>
import About from '@components/section/About.vue';
import Banner from '@components/section/Banner.vue';
import QuizTest from '@components/section/QuizTest.vue';
</script>

<template>
    <article class="quiz_container">
        <Banner>
            <template #title>
                Quiz about Karlův <p class="banner_title">Most Praha</p>
            </template>
        </Banner>
        <About>
            <template #title>
                Quiz
            </template>
            <template class="quiz_textblock" #text>
                <p class="text quiz_text">Ready for a challenging and fun way to explore Karlův Most? Our quiz is here to guide you through the history, architecture, and lore surrounding this famous Prague landmark. Test your knowledge and see how much you really know about this bridge that has connected people for centuries.</p>
                <p class="text quiz_text">Take our Karlův Most quiz and enrich your understanding of this iconic structure. Each question is an opportunity to learn more about the stunning views and cultural tales associated with the bridge. Experience the bridge’s significance through engaging trivia that connects the dots between its past and present.</p>
            </template>
        </About>
        <QuizTest />
    </article>
</template>