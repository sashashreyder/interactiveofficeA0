import type { Question } from "../types";

export const criticalThinkingQuestions: Question[] = [
  {
    id: 301,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Client says: 'Not happy'. What do you say?",
    options: [
      "Sorry. Tell me more?",
      "It’s not my job",
      "Nothing",
      "Come tomorrow"
    ],
    correctAnswer: "Sorry. Tell me more?",
    explanation: "Say sorry and ask more. Show care.",
    explanationRu: "Скажи «Sorry» и попроси рассказать подробнее.",
    points: 10,
    category: "Customer",
    hintRu: "Клиент жалуется → извинись и спроси."
  },
  {
    id: 302,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Meeting: you are late. What do you do?",
    options: [
      "Enter quiet. Say 'Sorry'.",
      "Skip meeting",
      "Talk loud about traffic",
      "Wait outside"
    ],
    correctAnswer: "Enter quiet. Say 'Sorry'.",
    explanation: "Come in quietly and say sorry.",
    explanationRu: "Зайди тихо и скажи «Sorry».",
    points: 10,
    category: "Meeting",
    hintRu: "Лучше не мешать и извиниться."
  },
  {
    id: 303,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Boss gives task. You don’t understand. What do you say?",
    options: [
      "Repeat, please",
      "Do nothing",
      "Say 'Impossible'",
      "Guess"
    ],
    correctAnswer: "Repeat, please",
    explanation: "Ask again to understand task.",
    explanationRu: "Скажи «Repeat, please» или попроси объяснить снова.",
    points: 10,
    category: "Work",
    hintRu: "Если не понял задание."
  },
  {
    id: 304,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Office floor is wet. What do you do?",
    options: [
      "Tell manager",
      "Play",
      "Say nothing",
      "Run"
    ],
    correctAnswer: "Tell manager",
    explanation: "Tell manager or staff. Safety first.",
    explanationRu: "Сообщи менеджеру или персоналу. Это безопасность.",
    points: 10,
    category: "Office",
    hintRu: "Опасность → сообщи."
  },
  {
    id: 305,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Cashier gives extra money. What do you do?",
    options: [
      "Say: Too much",
      "Keep it",
      "Smile",
      "Leave fast"
    ],
    correctAnswer: "Say: Too much",
    explanation: "Say money is too much. Be honest.",
    explanationRu: "Скажи «Too much». Будь честным.",
    points: 10,
    category: "Shopping",
    hintRu: "Получил лишние деньги."
  },
  {
    id: 306,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Client speaks very fast. What do you say?",
    options: [
      "Slowly, please",
      "Yes, yes",
      "Nothing",
      "Bye"
    ],
    correctAnswer: "Slowly, please",
    explanation: "Ask client to speak slowly.",
    explanationRu: "Скажи «Slowly, please».",
    points: 10,
    category: "Customer",
    hintRu: "Не понял → попроси медленнее."
  },
  {
    id: 307,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Teammate makes mistake in document. What do you do?",
    options: [
      "Fix it + tell friend",
      "Public chat blame",
      "Delete doc",
      "Say nothing"
    ],
    correctAnswer: "Fix it + tell friend",
    explanation: "Fix mistake and tell politely.",
    explanationRu: "Исправь и вежливо скажи коллеге.",
    points: 10,
    category: "Teamwork",
    hintRu: "Ошибка → исправь + предупреди."
  },
  {
    id: 308,
    type: "critical_thinking",
    difficulty: "beginner",
    question: "Colleague asks help. You are busy. What do you say?",
    options: [
      "I can later",
      "Ignore",
      "Yes and miss work",
      "No! Go away"
    ],
    correctAnswer: "I can later",
    explanation: "Say when you can help.",
    explanationRu: "Скажи, что поможешь позже.",
    points: 10,
    category: "Work",
    hintRu: "Баланс: работа и помощь."
  }
];
