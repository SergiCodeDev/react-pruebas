import { create } from 'zustand'
import { type Question } from '../types'
import confetti from 'canvas-confetti'
// tener la extension de Redux DevTools  para usar devtools
import { persist, devtools } from 'zustand/middleware'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}
/* 
// crear custom middleware para zustand
const logger = (config) => (set, get, api) => {
  return config (
    (...args) => {
      console.log("applying", args)
      set(...args) // original
      console.log("new state", get())
    },
    get,
    api
  )
}

// envolver con logger()
export const useQuestionsStore = create<State>()(logger(persist((set, get) => {
  return {...}
}, {
  name: "questions",
})))
*/



// persist devuelve una fn
export const useQuestionsStore = create<State>()(devtools(persist((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
      const res = await fetch("http://localhost:5173/data.json")
      const json = await res.json()
      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      // set({ questions })
      set({ questions }, false, "FETCH_QUESTIONS")
      // ESTO ES PARA USAR LAS DEVTOOLS Y TENER NOMBRADAS LAS ACCIONES
    },

    selectAnswer: (questionId: number, answerIndex: number) => {
      const { questions } = get()
      const newQuestions = structuredClone(questions)
      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      const questionInfo = newQuestions[questionIndex]

      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
      if (isCorrectUserAnswer) confetti()

      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex
      }

      // set({ questions: newQuestions })
      set({ questions: newQuestions }, false, "SELECT_ANSWER")
    },

    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
        // set({ currentQuestion: nextQuestion })
        set({ currentQuestion: nextQuestion }, false, 'GO_NEXT_QUESTION')
      }
    },

    goPreviousQuestion: () => {
      const { currentQuestion } = get()
      const previousQuestion = currentQuestion - 1

      if (previousQuestion >= 0) {
        // set({ currentQuestion: previousQuestion })
        set({ currentQuestion: previousQuestion }, false, 'GO_PREVIOUS_QUESTION')
      }
    },

    reset: () => {
      // set({ currentQuestion: 0, questions: [] })
      set({ currentQuestion: 0, questions: [] }, false, "RESET")
    }
  }
}, {
  name: "questions", // defecto localStorage
  // getStorage: () => localStorage
  // getStorage: () => sessionStorage
})))