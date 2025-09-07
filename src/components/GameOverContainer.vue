<script lang="ts" setup>
import { useScore } from '@composables/useScore.ts'

const emits = defineEmits(['restart-game'])

const {
  getScore,
  getCorrectAnswerCounter,
  getIncorrectAnswerCounter,
  getQuestionsAnsweredCounter,
  resetScore,
} = useScore()
const totalScore = getScore()
const totalCorrectAnswer = getCorrectAnswerCounter()
const totalIncorrectAnswer = getIncorrectAnswerCounter()
const questionsAnswered = getQuestionsAnsweredCounter()

const restartQuestions = (): void => {
  resetScore()
  emits('restart-game')
}
</script>

<template>
  <div class="game-result-container">
    <p id="title">GAME OVER!</p>
    <p>Total score: {{ totalScore }}</p>
    <p>Correct answer: {{ totalCorrectAnswer }}</p>
    <p>Incorrect answer: {{ totalIncorrectAnswer }}</p>
    <p>Questions answered: {{ questionsAnswered }}</p>
    <button id="restart-button" @click="restartQuestions">Restart</button>
  </div>
</template>

<style scoped>
.game-result-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 1rem;

  & #title {
    font-size: 2rem;
    font-weight: bold;
  }

  & #restart-button {
    background-color: green;
    cursor: pointer;
    width: 30%;
    height: 2rem;
    border-radius: 15px;
    border: none;
    color: #fff;
    font-size: 1rem;
    box-shadow: inset -7px -5px 0px rgb(0, 110, 0);

    &:hover {
      background-color: rgb(0, 110, 0);
      transition: all 75ms ease-in;
    }
  }
}
</style>
