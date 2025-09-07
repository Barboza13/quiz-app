<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import type { Answer } from '@/types'

const props = defineProps({
  answerData: {
    required: true,
    type: Object as PropType<Answer>,
  },
  isAnswered: {
    required: true,
    type: Boolean,
  },
})

const emits = defineEmits(['selectAnswer'])

const buttonColorOnSelectAnswer = computed(() =>
  props.answerData.correct ? 'is-correct-color' : 'is-not-correct-color',
)
</script>

<template>
  <button
    :disabled="isAnswered"
    :class="[
      isAnswered ? buttonColorOnSelectAnswer : 'default-button-color',
      'default-answer-button-style',
    ]"
    @click="emits('selectAnswer', answerData.correct)"
  >
    {{ answerData.text }}
  </button>
</template>

<style scoped>
.default-answer-button-style {
  text-align: center;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
}

.default-button-color {
  background-color: blue;

  &:hover {
    background-color: rgb(3, 3, 197);
    transition: all 75ms ease-in;
  }
}

.is-correct-color {
  background-color: green;
}

.is-not-correct-color {
  background-color: red;
}
</style>
