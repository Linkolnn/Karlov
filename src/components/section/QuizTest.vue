<script setup>
import services from '@services/questions';
import { ref, computed } from 'vue';

const 
    currentQuestionIndex = ref(0),
    selectedAnswer = ref(null),
    correctAnswersCount = ref(0),
    isNextEnabled = ref(false),
    showResults = ref(false);

const currentQuestion = computed(() => services.getQuestions()[currentQuestionIndex.value]);

const isLastQuestion = computed(() => currentQuestionIndex.value === services.getQuestions().length - 1);

const resultMessage = computed(() => {
  if (correctAnswersCount.value === 5) return 'GREAT RESULT!';
  if (correctAnswersCount.value >= 2) return 'GOOD!';
  return 'IT COULD HAVE BEEN BETTER…';
});

const enableNextButton = () => {
  isNextEnabled.value = true;
};

const nextQuestion = () => {
  if (selectedAnswer.value === currentQuestion.value.correctAnswer) {
    correctAnswersCount.value++;
  }

  if (isLastQuestion.value) {
    showResults.value = true;
  } else {
    currentQuestionIndex.value++;
    selectedAnswer.value = null;
    isNextEnabled.value = false;
  }
};

const restartQuiz = () => {
  currentQuestionIndex.value = 0;
  selectedAnswer.value = null;
  correctAnswersCount.value = 0;
  isNextEnabled.value = false;
  showResults.value = false;
};
</script>

<template>
    <section class="quiz_section section">
        <div class="quiz_result_block" v-if="showResults">
            <h2 class="quiz_result_title">THE RESULTS OF THE QUIZ</h2>
            <div class="quiz_result_content">
                <div class="quiz_result_titleblock">
                    <h2 class="quiz_result_title correct_title">
                        THE NUMBER OF CORRECT ANSWERS: 
                        <span class="quiz_result_title correct_number">{{ correctAnswersCount }}/5</span>
                    </h2>
                    <h2 class="quiz_result_title result_title">{{ resultMessage }}</h2>
                </div>
                <img class="quiz_img" src="/src/assets/images/card/card_img.svg" alt="">
            </div>
            <button class="quiz_result_btn btn" @click="restartQuiz">REPEAT</button>
        </div>
        <div class="quiz_question_block" v-else>
          <span class="quiz_number_page text"> {{ currentQuestion.number }} / 5 </span>
          <h2 class="quiz_questions_title">{{ currentQuestion.title }}</h2>
          <div class="quiz_question" v-for="(option, index) in currentQuestion.options" :key="index">
              <label class="quiz_question_text text">
                  <input class="quiz_question_radio" type="radio" :value="index" v-model="selectedAnswer" @change="enableNextButton"/> 
                  {{ option }} 
              </label>
          </div>
          <button class="quiz_questions_btn btn" :class="{ 'btn_active': isNextEnabled, 'btn_disabled': !isNextEnabled }" :disabled="!isNextEnabled" @click="nextQuestion" > {{ isLastQuestion ? 'RESULT' : 'NEXT' }}</button>
        </div>
    </section>
</template>