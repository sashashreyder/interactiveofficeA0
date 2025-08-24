import type { Question } from "../types";

export const grammar1: Question[] = [
  // --- Personal pronouns & to be ---
  {
    id: 2001,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ a manager.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "am",
    explanation: "Я менеджер.",
    explanationRu: "С местоимением I используем форму am.",
    points: 10,
    category: "To be",
    hintRu: "Форма to be для 'I'."
  },
  {
    id: 2002,
    type: "grammar",
    difficulty: "beginner",
    question: "They ___ colleagues.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "are",
    explanation: "Они коллеги.",
    explanationRu: "С местоимением they используем are.",
    points: 10,
    category: "To be",
    hintRu: "Форма to be для множественного числа."
  },
  {
    id: 2003,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ in the office now.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
    explanation: "Она сейчас в офисе.",
    explanationRu: "He/She/It требуют форму is.",
    points: 10,
    category: "To be",
    hintRu: "Форма to be для she."
  },
  {
    id: 2004,
    type: "grammar",
    difficulty: "beginner",
    question: "We ___ at the meeting.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "are",
    explanation: "Мы на встрече.",
    explanationRu: "С местоимением we используем are.",
    points: 10,
    category: "To be",
    hintRu: "Форма to be для we."
  },
  {
    id: 2005,
    type: "grammar",
    difficulty: "beginner",
    question: "It ___ a good product.",
    options: ["am", "is", "are", "be"],
    correctAnswer: "is",
    explanation: "Это хороший продукт.",
    explanationRu: "С местоимением it используется форма is.",
    points: 10,
    category: "To be",
    hintRu: "Форма to be для it."
  },

  // --- Articles a/an/the ---
  {
    id: 2006,
    type: "grammar",
    difficulty: "beginner",
    question: "This is ___ email from the manager.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "an",
    explanation: "Это письмо от менеджера.",
    explanationRu: "Перед гласным звуком используем артикль an.",
    points: 10,
    category: "Articles",
    hintRu: "Смотри на первый звук слова."
  },
  {
    id: 2007,
    type: "grammar",
    difficulty: "beginner",
    question: "I have ___ colleague in New York.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "a",
    explanation: "У меня есть коллега в Нью-Йорке.",
    explanationRu: "Перед согласным звуком используем артикль a.",
    points: 10,
    category: "Articles",
    hintRu: "Слово начинается с согласного звука."
  },
  {
    id: 2008,
    type: "grammar",
    difficulty: "beginner",
    question: "We visited ___ office near our store.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "the",
    explanation: "Мы посетили офис рядом с нашим магазином.",
    explanationRu: "Артикль the используем, если предмет известен собеседнику.",
    points: 10,
    category: "Articles",
    hintRu: "Офис уже упомянут или понятен из контекста."
  },
  {
    id: 2009,
    type: "grammar",
    difficulty: "beginner",
    question: "She bought ___ tablet yesterday.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "a",
    explanation: "Она купила планшет вчера.",
    explanationRu: "Артикль a/an используем, если предмет упоминается впервые.",
    points: 10,
    category: "Articles",
    hintRu: "Впервые упоминается."
  },
  {
    id: 2010,
    type: "grammar",
    difficulty: "beginner",
    question: "Look at ___ manager over there.",
    options: ["a", "an", "the", "-"],
    correctAnswer: "the",
    explanation: "Посмотри на того менеджера вон там.",
    explanationRu: "Используем the, когда предмет конкретный и видимый.",
    points: 10,
    category: "Articles",
    hintRu: "Уже конкретный, видимый."
  },

  // --- To have / has ---
  {
    id: 2011,
    type: "grammar",
    difficulty: "beginner",
    question: "I ___ a meeting today.",
    options: ["have", "has", "am", "is"],
    correctAnswer: "have",
    explanation: "У меня сегодня встреча.",
    explanationRu: "С I, you, we, they используем have.",
    points: 10,
    category: "To have",
    hintRu: "Форма для I/you/we/they."
  },
  {
    id: 2012,
    type: "grammar",
    difficulty: "beginner",
    question: "She ___ a new job.",
    options: ["have", "has", "am", "is"],
    correctAnswer: "has",
    explanation: "У неё новая работа.",
    explanationRu: "С he/she/it используем has.",
    points: 10,
    category: "To have",
    hintRu: "Форма для she."
  },
  {
    id: 2013,
    type: "grammar",
    difficulty: "beginner",
    question: "We ___ many products in our store.",
    options: ["have", "has", "are", "is"],
    correctAnswer: "have",
    explanation: "У нас много продуктов в магазине.",
    explanationRu: "Множественное число требует have.",
    points: 10,
    category: "To have",
    hintRu: "Форма для we/they."
  },
  {
    id: 2014,
    type: "grammar",
    difficulty: "beginner",
    question: "He ___ two colleagues in London.",
    options: ["have", "has", "am", "are"],
    correctAnswer: "has",
    explanation: "У него два коллеги в Лондоне.",
    explanationRu: "He → has.",
    points: 10,
    category: "To have",
    hintRu: "Форма для he."
  },
  {
    id: 2015,
    type: "grammar",
    difficulty: "beginner",
    question: "They ___ many meetings this week.",
    options: ["have", "has", "is", "are"],
    correctAnswer: "have",
    explanation: "У них много встреч на этой неделе.",
    explanationRu: "They → have.",
    points: 10,
    category: "To have",
    hintRu: "Форма для they."
  },

  // --- Possessive adjectives ---
  {
    id: 2016,
    type: "grammar",
    difficulty: "beginner",
    question: "This is ___ office. (мы)",
    options: ["our", "my", "their", "his"],
    correctAnswer: "our",
    explanation: "Это наш офис.",
    explanationRu: "Our используется для 'мы'.",
    points: 10,
    category: "Possessive adjectives",
    hintRu: "Притяжательное для we."
  },
  {
    id: 2017,
    type: "grammar",
    difficulty: "beginner",
    question: "He likes ___ job.",
    options: ["his", "her", "our", "my"],
    correctAnswer: "his",
    explanation: "Ему нравится его работа.",
    explanationRu: "His = его.",
    points: 10,
    category: "Possessive adjectives",
    hintRu: "Притяжательное для he."
  },
  {
    id: 2018,
    type: "grammar",
    difficulty: "beginner",
    question: "I like ___ new colleague.",
    options: ["my", "our", "their", "her"],
    correctAnswer: "my",
    explanation: "Мне нравится мой новый коллега.",
    explanationRu: "My = мой/моя/моё.",
    points: 10,
    category: "Possessive adjectives",
    hintRu: "Притяжательное для I."
  },
  {
    id: 2019,
    type: "grammar",
    difficulty: "beginner",
    question: "She likes ___ manager.",
    options: ["her", "his", "our", "my"],
    correctAnswer: "her",
    explanation: "Ей нравится её менеджер.",
    explanationRu: "Her = её.",
    points: 10,
    category: "Possessive adjectives",
    hintRu: "Притяжательное для she."
  },
  {
    id: 2020,
    type: "grammar",
    difficulty: "beginner",
    question: "They like ___ new office.",
    options: ["their", "our", "his", "her"],
    correctAnswer: "their",
    explanation: "Им нравится их новый офис.",
    explanationRu: "Their = их.",
    points: 10,
    category: "Possessive adjectives",
    hintRu: "Притяжательное для they."
  }
];




