import React, { useState } from "react";

interface BossChallengeProps {
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

interface BossScenario {
  id: number;
  scenario: string;
  scenarioRu: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationRu: string;
  points: number;
}

const BossChallenge: React.FC<BossChallengeProps> = ({ onAnswer, onBack }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRu, setShowRu] = useState(false);
  const [challengeComplete, setChallengeComplete] = useState(false);

  const scenarios: BossScenario[] = [
    {
      id: 1,
      scenario: "Your boss says: “Good morning.” What do you say?",
      scenarioRu: "Начальник говорит: «Доброе утро». Что ответить?",
      options: ["Good morning.", "Good night.", "See you.", "Thank you."],
      correctAnswer: "Good morning.",
      explanation: "Say “Good morning.” to return the greeting politely.",
      explanationRu: "Вежливо вернуть приветствие: «Good morning.»",
      points: 10
    },
    {
      id: 2,
      scenario: "Your boss asks: “How are you?” Choose a polite short reply.",
      scenarioRu: "Начальник спрашивает: «Как дела?» Выберите вежливый короткий ответ.",
      options: ["I'm fine, thank you.", "Good night.", "Please.", "Later."],
      correctAnswer: "I'm fine, thank you.",
      explanation: "Use a simple polite reply: “I'm fine, thank you.”",
      explanationRu: "Короткий вежливый ответ: «I'm fine, thank you.»",
      points: 10
    },
    {
      id: 3,
      scenario: "Your boss says: “Thank you.” What do you say?",
      scenarioRu: "Начальник говорит: «Спасибо». Что ответить?",
      options: ["You're welcome.", "Goodbye.", "Please.", "No."],
      correctAnswer: "You're welcome.",
      explanation: "Answer with “You're welcome.” after thanks.",
      explanationRu: "После «Спасибо» отвечают «You're welcome.»",
      points: 10
    },
    {
      id: 4,
      scenario: "Your boss asks: “Can you help me?” What do you say?",
      scenarioRu: "Начальник спрашивает: «Вы можете мне помочь?» Что ответить?",
      options: ["Yes, I can.", "I don't care.", "No way.", "Good night."],
      correctAnswer: "Yes, I can.",
      explanation: "Confirm help: “Yes, I can.”",
      explanationRu: "Подтвердите, что поможете: «Yes, I can.»",
      points: 10
    },
    {
      id: 5,
      scenario: "Your boss asks: “When can you finish this task?” Give a simple answer.",
      scenarioRu: "Начальник спрашивает: «Когда вы сможете закончить эту задачу?» Дайте простой ответ.",
      options: ["Tomorrow.", "Never.", "I don't know.", "Please."],
      correctAnswer: "Tomorrow.",
      explanation: "Give a clear timeline: “Tomorrow.”",
      explanationRu: "Назовите простой срок: «Tomorrow.»",
      points: 10
    },
    {
      id: 6,
      scenario: "Your boss says: “This is wrong.” Choose a professional reply.",
      scenarioRu: "Начальник говорит: «Здесь ошибка». Выберите профессиональный ответ.",
      options: ["I'm sorry, I'll fix it.", "It's not my fault.", "I don't care.", "Ask someone else."],
      correctAnswer: "I'm sorry, I'll fix it.",
      explanation: "Take responsibility and offer a solution.",
      explanationRu: "Возьмите ответственность и предложите решение: «I'll fix it.»",
      points: 10
    },
    {
      id: 7,
      scenario: "You don't understand the task. What should you say?",
      scenarioRu: "Вы не понимаете задание. Что сказать?",
      options: ["Sorry, I don't understand. Could you repeat, please?", "Yes, I understand.", "Later.", "No."],
      correctAnswer: "Sorry, I don't understand. Could you repeat, please?",
      explanation: "Ask to repeat politely to avoid mistakes.",
      explanationRu: "Вежливо попросите повторить, чтобы не ошибиться.",
      points: 10
    },
    {
      id: 8,
      scenario: "Your boss asks: “Can you work overtime today?” Choose a polite reply.",
      scenarioRu: "Начальник спрашивает: «Можете поработать сверхурочно сегодня?» Выберите вежливый ответ.",
      options: ["Yes, I can.", "No way.", "I don't know.", "Bye."],
      correctAnswer: "Yes, I can.",
      explanation: "Confirm politely if you can help today.",
      explanationRu: "Если можете — подтвердите вежливо: «Yes, I can.»",
      points: 10
    },
    {
      id: 9,
      scenario: "You are late to the meeting. What do you say first?",
      scenarioRu: "Вы опоздали на встречу. Что сказать сначала?",
      options: ["I'm sorry for being late.", "Where is coffee?", "I don't care.", "Tomorrow."],
      correctAnswer: "I'm sorry for being late.",
      explanation: "Apologize briefly and clearly.",
      explanationRu: "Коротко извиниться: «I'm sorry for being late.»",
      points: 10
    },
    {
      id: 10,
      scenario: "You need time to think. What do you say to your boss?",
      scenarioRu: "Вам нужно время подумать. Что сказать начальнику?",
      options: ["Give me a moment, please.", "I quit.", "No.", "Later, maybe."],
      correctAnswer: "Give me a moment, please.",
      explanation: "Use a polite request for a short pause.",
      explanationRu: "Вежливо попросите немного времени: «Give me a moment, please.»",
      points: 10
    }
  ];

  const total = scenarios.length;
  const current = currentScenarioIndex + 1;
  const percent = Math.round((current / total) * 100);
  const currentScenario = scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === total - 1;

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === currentScenario.correctAnswer;
    onAnswer(isCorrect, currentScenario.points, "scenario");
    setShowExplanation(true);
  };

  const handleNextScenario = () => {
    if (isLastScenario) {
      setChallengeComplete(true);
    } else {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowRu(false);
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowRu(false);
    setChallengeComplete(false);
  };

  if (challengeComplete) {
    return (
      <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
        <div className="flex items-center gap-4 pb-5 border-b border-white/10">
          <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-rose-400 to-orange-500 text-2xl shadow">👔</div>
          <div>
            <h2 className="text-2xl font-bold">Challenge Complete</h2>
            <p className="text-slate-300">Great job! Ready for client practice next.</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={handleRestart} className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 transition">Try Again</button>
          <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
      <div className="mb-4">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-rose-400 to-orange-400 transition-[width] duration-500" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
          <span>Boss Challenge</span>
          <span>Scenario {current} / {total}</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">What would you say to your boss?</h3>
          <button
            type="button"
            onClick={() => setShowRu(v => !v)}
            className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20"
          >
            {showRu ? "Скрыть перевод" : "Показать перевод"}
          </button>
        </div>
        <p className="text-slate-200 mt-2">{currentScenario.scenario}</p>
        {showRu && <p className="text-slate-300 mt-2">{currentScenario.scenarioRu}</p>}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {currentScenario.options.map((option, idx) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === currentScenario.correctAnswer;
          const base = "px-4 py-3 rounded-lg text-left border transition disabled:opacity-90";
          const idle = "bg-white/5 border-white/10 hover:bg-white/10";
          const good = "bg-emerald-500/85 border-emerald-400 text-white";
          const bad = "bg-rose-500/85 border-rose-400 text-white";
          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleAnswerSelect(option)}
              disabled={selectedAnswer !== null}
              className={`${base} ${selectedAnswer ? (isCorrect ? good : isSelected ? bad : "bg-white/5 border-white/10") : idle}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 min-h-[92px]">
        {showExplanation ? (
          <>
            <h4 className="font-semibold mb-1">Tip</h4>
            <p className="text-slate-200">{currentScenario.explanation}</p>
            <p className="text-slate-300 mt-1">{currentScenario.explanationRu}</p>
          </>
        ) : (
          <div className="text-slate-400 text-sm">Выберите вариант ответа…</div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        {showExplanation && (
          <button
            onClick={handleNextScenario}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition"
          >
            {isLastScenario ? "Finish Challenge" : "Next Scenario"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BossChallenge;


