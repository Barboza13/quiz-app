<script setup lang="ts">
import { ref } from 'vue'
import QuizContainer from '@components/QuizContainer.vue'
import QuestionsContainer from '@components/QuestionsContainer.vue'
import GameOverContainer from '@components/GameOverContainer.vue'

const isRunning = ref<boolean>(false)
const isFinished = ref<boolean>(false)

const startedQuestions = (): void => {
  isRunning.value = true
  isFinished.value = false
}

const finishedQuestions = (): void => {
  isRunning.value = false
  isFinished.value = true
}
</script>

<template>
  <main class="main-container">
    <QuizContainer v-if="!isRunning && !isFinished" @started-questions="startedQuestions" />
    <QuestionsContainer v-else-if="!isFinished" @finished-questions="finishedQuestions" />
    <GameOverContainer v-if="isFinished" @restart-game="startedQuestions" />
  </main>
</template>

<style scoped>
.main-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: var(--default-text-color);
  background-color: var(--primary-color);
  height: 400px;
  width: 600px;
  border-radius: 15px;
  box-shadow: 6px 8px 10px rgba(0, 0, 0, 0.5);
}

@media screen and (width <= 768px) {
  .main-container {
    height: 300px;
    width: 500px;
  }
}

@media screen and (width <= 480px) {
  .main-container {
    height: 300px;
    width: 350px;
  }
}
</style>
