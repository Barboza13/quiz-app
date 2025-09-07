export interface Answer {
  text: string
  correct: boolean
}

export interface Question {
  question: string
  answers: Answer[]
}

export interface Quiz {
  [index: string]: Question
}
