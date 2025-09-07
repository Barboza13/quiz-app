import { ref } from 'vue'

const score = ref<number>(0)
const correctAnswerCounter = ref<number>(0)
const incorrectAnswerCounter = ref<number>(0)
const questionsAnswered = ref<number>(0)

export function useScore() {
  const incrementQuestionsAnsweredCounter = (): void => {
    questionsAnswered.value++
  }

  const getQuestionsAnsweredCounter = (): number => {
    return questionsAnswered.value
  }

  const incrementCorrectAnswerCounter = (): void => {
    correctAnswerCounter.value++
  }

  const getCorrectAnswerCounter = (): number => {
    return correctAnswerCounter.value
  }

  const incrementIncorrectAnswerCounter = (): void => {
    incorrectAnswerCounter.value++
  }

  const getIncorrectAnswerCounter = (): number => {
    return incorrectAnswerCounter.value
  }

  const incrementScore = (): void => {
    score.value++
  }

  const decrementScore = (): void => {
    if (score.value > 0) score.value--
  }

  const getScore = (): number => {
    return score.value
  }

  const resetScore = (): void => {
    score.value = 0
  }

  return {
    incrementQuestionsAnsweredCounter,
    getQuestionsAnsweredCounter,
    incrementCorrectAnswerCounter,
    getCorrectAnswerCounter,
    incrementIncorrectAnswerCounter,
    getIncorrectAnswerCounter,
    incrementScore,
    decrementScore,
    getScore,
    resetScore,
  }
}
