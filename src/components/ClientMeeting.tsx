import React, { useState } from "react";

interface ClientMeetingProps {
  onAnswer: (isCorrect: boolean, points: number, questionType: string) => void;
  onBack: () => void;
}

interface ClientScenario {
  id: number;
  scenario: string;
  scenarioRu: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationRu: string;
  points: number;
}

const ClientMeeting: React.FC<ClientMeetingProps> = ({ onAnswer, onBack }) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showRu, setShowRu] = useState(false);
  const [meetingComplete, setMeetingComplete] = useState(false);

  const scenarios: ClientScenario[] = [
    {
      id: 1,
      scenario: "A client says: “Hello.” What do you say?",
      scenarioRu: "Клиент говорит: «Здравствуйте». Что ответить?",
      options: ["Hello.", "Good night.", "See you.", "Please."],
      correctAnswer: "Hello.",
      explanation: "Return the greeting politely.",
      explanationRu: "Вежливо верните приветствие: «Hello.»",
      points: 10
    },
    {
      id: 2,
      scenario: "You offer help to a new client.",
      scenarioRu: "Вы предлагаете помощь новому клиенту.",
      options: ["Can I help you?", "Goodbye.", "Tomorrow.", "No."],
      correctAnswer: "Can I help you?",
      explanation: "Start with a simple offer of help.",
      explanationRu: "Начните с простого предложения помощи.",
      points: 10
    },
    {
      id: 3,
      scenario: "A client asks: “How much is this?” Choose a clear answer.",
      scenarioRu: "Клиент спрашивает: «Сколько это стоит?» Дайте понятный ответ.",
      options: ["It costs $50.", "I don't know.", "See you.", "Please."],
      correctAnswer: "It costs $50.",
      explanation: "Give the price clearly.",
      explanationRu: "Назовите цену ясно: «It costs $50.»",
      points: 10
    },
    {
      id: 4,
      scenario: "A client says: “Thank you.” What do you say?",
      scenarioRu: "Клиент говорит: «Спасибо». Что ответить?",
      options: ["You're welcome.", "Goodbye.", "Later.", "No."],
      correctAnswer: "You're welcome.",
      explanation: "Respond to thanks politely.",
      explanationRu: "Вежливо ответьте на благодарность: «You're welcome.»",
      points: 10
    },
    {
      id: 5,
      scenario: "A client says: “I'm not happy with this.” Choose a polite reply.",
      scenarioRu: "Клиент говорит: «Мне это не нравится». Выберите вежливый ответ.",
      options: [
        "I'm sorry to hear that. How can I help?",
        "That's your problem.",
        "No.",
        "Later."
      ],
      correctAnswer: "I'm sorry to hear that. How can I help?",
      explanation: "Show empathy and offer help.",
      explanationRu: "Выразите сочувствие и предложите помощь.",
      points: 15
    },
    {
      id: 6,
      scenario: "A client asks about delivery time: “When can you deliver?”",
      scenarioRu: "Клиент спрашивает о сроках доставки: «Когда вы доставите?»",
      options: ["Next week.", "Never.", "I don't care.", "Please."],
      correctAnswer: "Next week.",
      explanation: "Give a simple time frame.",
      explanationRu: "Назовите простой срок: «Next week.»",
      points: 10
    },
    {
      id: 7,
      scenario: "A client says: “This is too expensive.” Choose a helpful reply.",
      scenarioRu: "Клиент говорит: «Это слишком дорого». Выберите полезный ответ.",
      options: [
        "I understand. Let me show you other options.",
        "Too bad.",
        "Go somewhere else.",
        "No."
      ],
      correctAnswer: "I understand. Let me show you other options.",
      explanation: "Acknowledge and offer alternatives.",
      explanationRu: "Признайте и предложите альтернативы.",
      points: 15
    },
    {
      id: 8,
      scenario: "A client asks: “Do you have this in blue?”",
      scenarioRu: "Клиент спрашивает: «Есть ли это в синем цвете?»",
      options: ["Yes, we do.", "No idea.", "Maybe.", "Good night."],
      correctAnswer: "Yes, we do.",
      explanation: "Answer clearly about availability.",
      explanationRu: "Отвечайте чётко о наличии: «Yes, we do.»",
      points: 10
    },
    {
      id: 9,
      scenario: "You didn't hear the client's name. What do you say?",
      scenarioRu: "Вы не расслышали имя клиента. Что сказать?",
      options: [
        "Sorry, could you repeat your name, please?",
        "What?",
        "No.",
        "Later."
      ],
      correctAnswer: "Sorry, could you repeat your name, please?",
      explanation: "Politely ask to repeat to avoid mistakes.",
      explanationRu: "Вежливо попросите повторить, чтобы избежать ошибок.",
      points: 10
    },
    {
      id: 10,
      scenario: "You want to set a meeting time with a client.",
      scenarioRu: "Вы хотите назначить время встречи с клиентом.",
      options: [
        "Can we meet tomorrow at 10 am?",
        "Goodbye.",
        "Never.",
        "I don't know."
      ],
      correctAnswer: "Can we meet tomorrow at 10 am?",
      explanation: "Offer a specific time to confirm.",
      explanationRu: "Предложите конкретное время для подтверждения.",
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
      setMeetingComplete(true);
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
    setMeetingComplete(false);
  };

  if (meetingComplete) {
    return (
      <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
        <div className="flex items-center gap-4 pb-5 border-b border-white/10">
          <div className="w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-emerald-400 to-teal-500 text-2xl shadow">🤝</div>
          <div>
            <h2 className="text-2xl font-bold">Meeting Complete</h2>
            <p className="text-slate-300">Nice work! You handled client basics well.</p>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={handleRestart} className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition">Try Again</button>
          <button onClick={onBack} className="px-4 py-2 rounded-lg bg-slate-500/80 hover:bg-slate-500 transition">Back to Menu</button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 max-w-[1000px] mx-auto rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl text-white p-6 shadow-[0_12px_40px_rgba(0,0,0,.22)]">
      <div className="mb-4">
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-[width] duration-500" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
          <span>Client Meeting</span>
          <span>Scenario {current} / {total}</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">What would you say to your client?</h3>
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
            {isLastScenario ? "Finish Meeting" : "Next Scenario"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientMeeting;


