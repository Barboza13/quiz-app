<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AnswerButton from '@components/AnswerButton.vue'
import { useScore } from '@composables/useScore.ts'
import rawQuestionsJson from '@/questions.json'

import type { Quiz } from '@/types/index.ts'

const questionsJson: Quiz = rawQuestionsJson
const {
  incrementScore,
  incrementQuestionsAnsweredCounter,
  incrementCorrectAnswerCounter,
  incrementIncorrectAnswerCounter,
  decrementScore,
  getScore,
} = useScore()
const score = computed(() => getScore())
const counter = ref<number>(60)
const questionNumber = ref<number>(0)
const question = computed(() => questionsJson[questionNumber.value].question)
const answers = computed(() => questionsJson[questionNumber.value].answers)
const isAnswered = ref<boolean>(false)

const emits = defineEmits(['finishedQuestions'])

let intervalId: number | null = null

const selectAnswer = (isCorrect: boolean): void => {
  incrementQuestionsAnsweredCounter()

  if (isCorrect) {
    incrementScore()
    incrementCorrectAnswerCounter()
  } else {
    decrementScore()
    incrementIncorrectAnswerCounter()
  }

  isAnswered.value = true
  counter.value = 0

  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const nextQuestion = (): void => {
  if (questionNumber.value < 9) {
    questionNumber.value++
    counter.value = 60
    isAnswered.value = false

    startTimer()
  } else {
    emits('finishedQuestions')
  }
}

const startTimer = (): void => {
  if (intervalId) {
    clearInterval(intervalId)
  }

  intervalId = setInterval(() => {
    if (counter.value > 0) {
      counter.value--
    } else {
      clearInterval(intervalId!)
      intervalId = null
      isAnswered.value = true
      decrementScore()
    }
  }, 1000)
}

onMounted(() => startTimer())

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="header">
    <p>Questions number: {{ questionNumber + 1 }}</p>
    <p>Score: {{ score }}</p>
    <p>Time: {{ counter }}s.</p>
  </div>
  <div class="question-container">
    <p>{{ question }}</p>
  </div>
  <div class="options-container">
    <AnswerButton
      v-for="(answer, index) in answers"
      :key="index"
      :answer-data="answer"
      :is-answered="isAnswered"
      @select-answer="selectAnswer"
    />
  </div>
  <div class="footer">
    <button class="next-button" @click="nextQuestion">Next</button>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.question-container {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 10%;
  width: 100%;
  color: var(--default-text-color);
  padding-left: 1rem;
  padding-right: 1rem;
}

.options-container {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 70%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 1rem;
}

.footer {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 10%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.5rem;

  & .next-button {
    background-color: blueviolet;
    color: #fff;
    text-align: center;
    height: 2rem;
    width: 30%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: rgb(111, 34, 182);
      transition: all 75ms ease-in;
    }
  }
}
</style>
