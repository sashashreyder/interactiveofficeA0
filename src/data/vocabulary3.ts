import type { Question } from "../types";

/**
 * Темы: Words · Verbs · Personal Qualities · Useful Phrases · Career Plans · Career Actions · Work Environment · Career Phrases
 */

export const vocabulary3: Question[] = [
  // ——— Words ———
  {
    id: 901,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A useful ability someone has is called an ___.",
    options: ["ability", "salary", "position", "probation"],
    correctAnswer: "ability",
    explanation: "Ability = skill or talent.",
    explanationRu: "Ability — способность.",
    points: 10,
    category: "Words",
    hintRu: "То, что вы умеете делать."
  },
  {
    id: 902,
    type: "vocabulary",
    difficulty: "beginner",
    question: "A success or accomplishment is called an ___.",
    options: ["achievement", "duties", "internship", "skill"],
    correctAnswer: "achievement",
    explanation: "Achievement = something completed successfully.",
    explanationRu: "Achievement — достижение.",
    points: 10,
    category: "Words",
    hintRu: "Например: диплом, награда."
  },
  {
    id: 903,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Knowledge and ability in a subject = ___.",
    options: ["competence", "position", "probation", "salary"],
    correctAnswer: "competence",
    explanation: "Competence = having the required skills.",
    explanationRu: "Competence — компетентность.",
    points: 10,
    category: "Words",
    hintRu: "Профессиональный уровень."
  },
  {
    id: 904,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Tasks you are responsible for are your ___.",
    options: ["duties", "skill", "reference", "promotion"],
    correctAnswer: "duties",
    explanation: "Duties = responsibilities.",
    explanationRu: "Duties — обязанности.",
    points: 10,
    category: "Words",
    hintRu: "То, что входит в работу."
  },
  {
    id: 905,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Work experience for students or beginners is an ___.",
    options: ["internship", "probation", "career path", "portfolio"],
    correctAnswer: "internship",
    explanation: "Internship = short-term work training.",
    explanationRu: "Internship — стажировка.",
    points: 10,
    category: "Words",
    hintRu: "Начало карьеры, практика."
  },

  // ——— Key Verbs ———
  {
    id: 906,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To give value or help to a project = to ___.",
    options: ["contribute", "resign", "lead", "practice"],
    correctAnswer: "contribute",
    explanation: "Contribute = add value, support.",
    explanationRu: "To contribute — вносить вклад.",
    points: 10,
    category: "Verbs",
    hintRu: "Дать свой вклад."
  },
  {
    id: 907,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To officially leave your job = to ___.",
    options: ["resign", "develop", "multithread", "participate"],
    correctAnswer: "resign",
    explanation: "Resign = quit a job formally.",
    explanationRu: "To resign — увольняться.",
    points: 10,
    category: "Verbs",
    hintRu: "Уход по собственному желанию."
  },

  // ——— Personal Qualities ———
  {
    id: 908,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Someone who works a lot and seriously is ___.",
    options: ["hardworking", "trustworthy", "bespoke", "basic"],
    correctAnswer: "hardworking",
    explanation: "Hardworking = putting in a lot of effort.",
    explanationRu: "Hardworking — трудолюбивый.",
    points: 10,
    category: "Personal Qualities",
    hintRu: "Очень много работает."
  },
  {
    id: 909,
    type: "vocabulary",
    difficulty: "beginner",
    question: "If a person is reliable and can be trusted, they are ___.",
    options: ["trustworthy", "basic", "advanced", "confidently"],
    correctAnswer: "trustworthy",
    explanation: "Trustworthy = reliable and honest.",
    explanationRu: "Trustworthy — надёжный.",
    points: 10,
    category: "Personal Qualities",
    hintRu: "Можно положиться."
  },

  // ——— Useful Phrases ———
  {
    id: 910,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Phrase: “I have experience in…” means ___.",
    options: ["У меня есть опыт в…", "Я увольняюсь", "Работа на фрилансе", "Карьерный путь"],
    correctAnswer: "У меня есть опыт в…",
    explanation: "I have experience in = statement of past work knowledge.",
    explanationRu: "Фраза о профессиональном опыте.",
    points: 10,
    category: "Useful Phrases",
    hintRu: "Начало рассказа об опыте."
  },
  {
    id: 911,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Phrase: “My responsibilities included…” refers to ___.",
    options: ["Обязанности", "Зарплату", "Рекомендацию", "Навыки"],
    correctAnswer: "Обязанности",
    explanation: "It introduces past job duties.",
    explanationRu: "My responsibilities included — В мои обязанности входило.",
    points: 10,
    category: "Useful Phrases",
    hintRu: "Описание обязанностей."
  },

  // ——— Career Plans ———
  {
    id: 912,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Improving yourself = ___.",
    options: ["self-improvement", "promotion", "qualification", "reference"],
    correctAnswer: "self-improvement",
    explanation: "Self-improvement = making yourself better.",
    explanationRu: "Self-improvement — самосовершенствование.",
    points: 10,
    category: "Career Plans",
    hintRu: "Развитие себя."
  },
  {
    id: 913,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Getting a higher position at work is a ___.",
    options: ["promotion", "case", "trainee", "portfolio"],
    correctAnswer: "promotion",
    explanation: "Promotion = career advancement.",
    explanationRu: "Promotion — повышение.",
    points: 10,
    category: "Career Plans",
    hintRu: "Движение вверх по карьере."
  },

  // ——— Career Actions ———
  {
    id: 914,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To move to another city or country for work = to ___.",
    options: ["relocate", "reskill", "generalize", "specialize"],
    correctAnswer: "relocate",
    explanation: "Relocate = change location for job.",
    explanationRu: "To relocate — переезжать по работе.",
    points: 10,
    category: "Career Actions",
    hintRu: "Переезд по работе."
  },
  {
    id: 915,
    type: "vocabulary",
    difficulty: "beginner",
    question: "To gain new professional knowledge = to ___.",
    options: ["upskill", "resign", "take a break", "job-craft"],
    correctAnswer: "upskill",
    explanation: "Upskill = learn new skills.",
    explanationRu: "To upskill — повышать квалификацию.",
    points: 10,
    category: "Career Actions",
    hintRu: "Учиться новому."
  },

  // ——— Work Environment ———
  {
    id: 916,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Work done from home or outside office is ___.",
    options: ["remote", "underpaid", "abroad", "visionary"],
    correctAnswer: "remote",
    explanation: "Remote work = working online, not in office.",
    explanationRu: "Remote — удалённая работа.",
    points: 10,
    category: "Work Environment",
    hintRu: "Не в офисе."
  },
  {
    id: 917,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Work with high salary is ___.",
    options: ["well-paid", "fast-paced", "underpaid", "transferable"],
    correctAnswer: "well-paid",
    explanation: "Well-paid = earns good money.",
    explanationRu: "Well-paid — хорошо оплачиваемый.",
    points: 10,
    category: "Work Environment",
    hintRu: "Много денег."
  },

  // ——— Career Phrases ———
  {
    id: 918,
    type: "vocabulary",
    difficulty: "beginner",
    question: "Your professional journey = your ___.",
    options: ["career path", "company culture", "CV", "diverse skill set"],
    correctAnswer: "career path",
    explanation: "Career path = series of jobs/roles in life.",
    explanationRu: "Career path — карьерный путь.",
    points: 10,
    category: "Career Phrases",
    hintRu: "Дорога по профессии."
  },
  {
    id: 919,
    type: "vocabulary",
    difficulty: "beginner",
    question: "The shared values and style of a company is ___.",
    options: ["company culture", "promotion", "career transition", "portfolio"],
    correctAnswer: "company culture",
    explanation: "Company culture = the environment/values at work.",
    explanationRu: "Company culture — корпоративная культура.",
    points: 10,
    category: "Career Phrases",
    hintRu: "Атмосфера в компании."
  }
];
