<script lang="ts" setup>
import quizIcon from '@icons/quiz-icon-dark.svg'
const emits = defineEmits(['started-questions'])
</script>

<template>
  <div class="title-container">
    <div class="icon-container">
      <img id="quiz-icon" :src="quizIcon" alt="quiz icon" />
      Quiz App
    </div>
    <p>Made by <strong>Carlos Barboza</strong></p>
  </div>
  <div class="questions-container">
    <ul class="get-started-paragraph">
      <li>Each question is worth 1 point.</li>
      <li>For each question you miss, 1 point will be deducted.</li>
      <li>
        You have 60 seconds to answer each question; if the counter reaches zero, you lose 1 point.
      </li>
    </ul>
    <button class="get-started-button" @click="emits('started-questions')">Get started</button>
  </div>
</template>

<style scoped>
.title-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  & .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    gap: 0.3rem;

    & #quiz-icon {
      height: 2rem;
      width: 2rem;
    }
  }
}

.questions-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 100%;
  gap: 2rem;

  & .get-started-paragraph {
    color: var(--default-text-color);
    text-align: start;
    padding-left: 6rem;
    padding-right: 6rem;
  }

  & .get-started-button {
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
