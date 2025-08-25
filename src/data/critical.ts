import type { Question } from "../types";

export const criticalThinkingQuestions: Question[] = [
  {
    id: 301,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "You are late. What do you say?",
    options: [
      "Sorry",
      "Good morning",
      "Bye",
      "Nothing"
    ],
    correctAnswer: "Sorry",
    explanation: "Best is to say 'Sorry'.",
    explanationRu: "Лучше всего сказать «Sorry».",
    points: 10,
    category: "School",
    hintRu: "Опоздал → коротко извиниться."
  },
  {
    id: 302,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "In shop: cashier gives extra money. What do you do?",
    options: [
      "Keep it",
      "Say: Too much",
      "Run",
      "Smile"
    ],
    correctAnswer: "Say: Too much",
    explanation: "Tell the cashier the change is wrong.",
    explanationRu: "Нужно сказать кассиру: «Too much» (слишком много).",
    points: 10,
    category: "Shopping",
    hintRu: "Получил лишние деньги."
  },
  {
    id: 303,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Friend is sad. What do you say?",
    options: [
      "Hello",
      "Are you OK?",
      "Good night",
      "Nothing"
    ],
    correctAnswer: "Are you OK?",
    explanation: "Best is to ask 'Are you OK?'.",
    explanationRu: "Лучше спросить: «Are you OK?» — «Ты в порядке?»",
    points: 10,
    category: "Friends",
    hintRu: "Друг грустный → спроси."
  },
  {
    id: 304,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Teacher says: 'Homework?'. But you forgot. What do you say?",
    options: [
      "I forgot",
      "Yes, here",
      "No English",
      "Nothing"
    ],
    correctAnswer: "I forgot",
    explanation: "Say honestly: 'I forgot'.",
    explanationRu: "Лучше честно сказать: «I forgot» — «Я забыл».",
    points: 10,
    category: "School",
    hintRu: "Домашка осталась дома."
  },
  {
    id: 305,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "In class: you don’t understand. What do you say?",
    options: [
      "Repeat, please",
      "OK",
      "Bye",
      "Nothing"
    ],
    correctAnswer: "Repeat, please",
    explanation: "Ask: 'Repeat, please'.",
    explanationRu: "Нужно сказать: «Repeat, please» — «Повторите, пожалуйста».",
    points: 10,
    category: "Learning",
    hintRu: "Не понял → попроси повторить."
  },
  {
    id: 306,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Floor is wet. What do you do?",
    options: [
      "Say nothing",
      "Tell teacher",
      "Run",
      "Play"
    ],
    correctAnswer: "Tell teacher",
    explanation: "Tell teacher or staff: floor is wet.",
    explanationRu: "Скажи учителю или персоналу: «Пол мокрый».",
    points: 10,
    category: "Safety",
    hintRu: "Чтобы не упали."
  },
  {
    id: 307,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Customer speaks fast. What do you say?",
    options: [
      "Slowly, please",
      "Bye",
      "Yes, yes",
      "Nothing"
    ],
    correctAnswer: "Slowly, please",
    explanation: "Ask: 'Slowly, please'.",
    explanationRu: "Скажи: «Slowly, please» — «Помедленнее, пожалуйста».",
    points: 10,
    category: "Communication",
    hintRu: "Если не понял речь."
  },
  {
    id: 308,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Friend says: 'Take my test answers!'. What do you do?",
    options: [
      "No, thanks",
      "Yes",
      "Copy",
      "Nothing"
    ],
    correctAnswer: "No, thanks",
    explanation: "Say 'No, thanks'. Don’t copy.",
    explanationRu: "Нужно сказать «No, thanks» и не списывать.",
    points: 10,
    category: "School",
    hintRu: "Не бери чужие ответы."
  }
];
