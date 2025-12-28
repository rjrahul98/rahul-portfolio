"use client";
import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  Brain,
  MousePointer2,
} from "lucide-react";

// --- GAME 1: MEMORY MATRIX (Card Matching) ---
const MemoryMatrix = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);

  const emojis = [
    "🚀",
    "💎",
    "👻",
    "🔥",
    "🌵",
    "🍕",
    "🚀",
    "💎",
    "👻",
    "🔥",
    "🌵",
    "🍕",
  ];

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = [...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, id) => ({ id, emoji }));
    setCards(shuffled);
    setFlipped([]);
    setSolved([]);
    setMoves(0);
    setDisabled(false);
  };

  const handleClick = (id) => {
    if (disabled || flipped.includes(id) || solved.includes(id)) return;

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    setFlipped([flipped[0], id]);
    setDisabled(true);
    setMoves((prev) => prev + 1);

    if (cards[flipped[0]].emoji === cards[id].emoji) {
      setSolved((prev) => [...prev, flipped[0], id]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-slate-950">
      <div className="flex justify-between w-full px-4 mb-4 text-slate-300 font-medium">
        <span>Moves: {moves}</span>
        <button
          onClick={shuffleCards}
          className="flex items-center gap-1 hover:text-white transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`w-16 h-16 sm:w-20 sm:h-20 text-3xl flex items-center justify-center rounded-xl transition-all duration-500 transform
              ${
                flipped.includes(index) || solved.includes(index)
                  ? "bg-indigo-600 rotate-y-180 text-white scale-100"
                  : "bg-slate-700 hover:bg-slate-600 text-transparent scale-95"
              }
            `}
          >
            {flipped.includes(index) || solved.includes(index)
              ? card.emoji
              : "?"}
          </button>
        ))}
      </div>

      {solved.length === emojis.length && (
        <div className="mt-6 text-emerald-400 font-bold animate-bounce">
          🎉 Victory!
        </div>
      )}
    </div>
  );
};

// --- GAME 2: REFLEX RUSH (Speed Clicker) ---
const ReflexRush = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    moveTarget();
  };

  const moveTarget = () => {
    const top = Math.floor(Math.random() * 80) + 10 + "%";
    const left = Math.floor(Math.random() * 80) + 10 + "%";
    setPosition({ top, left });
  };

  const handleHit = () => {
    if (!isPlaying) return;
    setScore((s) => s + 1);
    moveTarget();
  };

  return (
    <div className="flex flex-col items-center w-full h-[400px]">
      <div className="flex justify-between w-full px-4 mb-4 text-slate-300">
        <div className="flex gap-4">
          <span className="font-bold text-white">Score: {score}</span>
          <span
            className={`${timeLeft < 10 ? "text-red-400" : "text-slate-300"}`}
          >
            Time: {timeLeft}s
          </span>
        </div>
        {!isPlaying && timeLeft !== 0 && (
          <button
            onClick={startGame}
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
          >
            <Play className="w-4 h-4" /> Start
          </button>
        )}
        {isPlaying && (
          <button
            onClick={() => setIsPlaying(false)}
            className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
          >
            <Pause className="w-4 h-4" /> Pause
          </button>
        )}
        {!isPlaying && timeLeft === 0 && (
          <button
            onClick={startGame}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
          >
            <RotateCcw className="w-4 h-4" /> Retry
          </button>
        )}
      </div>

      <div className="relative w-full h-full bg-slate-900 rounded-xl border-2 border-slate-700 overflow-hidden shadow-inner cursor-crosshair">
        {isPlaying ? (
          <button
            onClick={handleHit}
            style={{ top: position.top, left: position.left }}
            className="absolute w-12 h-12 bg-rose-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.6)] transform -translate-x-1/2 -translate-y-1/2 active:scale-90 transition-none hover:bg-rose-400"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-slate-500">
            {timeLeft === 0 ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Game Over
                </h3>
                <p>Final Score: {score}</p>
              </>
            ) : (
              <p>Press Start to Play</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT: GAME ARCADE ---
const GameArcade = () => {
  const [activeTab, setActiveTab] = useState("memory");

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Header / Switcher */}
      <div className="flex border-b border-slate-700">
        <button
          onClick={() => setActiveTab("memory")}
          className={`flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors
            ${
              activeTab === "memory"
                ? "bg-slate-700/50 text-indigo-400 border-b-2 border-indigo-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
            }
          `}
        >
          <Brain className="w-4 h-4" /> Memory Matrix
        </button>

        <button
          onClick={() => setActiveTab("reflex")}
          className={`flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors
            ${
              activeTab === "reflex"
                ? "bg-slate-700/50 text-rose-400 border-b-2 border-rose-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
            }
          `}
        >
          <MousePointer2 className="w-4 h-4" /> Reflex Rush
        </button>
      </div>

      {/* Game Container */}
      <div className="p-6 min-h-[450px] bg-slate-950">
        {activeTab === "memory" && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">Memory Matrix</h2>
              <p className="text-sm text-slate-400">
                Find matching pairs to clear the board.
              </p>
            </div>
            <MemoryMatrix />
          </div>
        )}

        {activeTab === "reflex" && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white">Reflex Rush</h2>
              <p className="text-sm text-slate-400">
                Click the red dots as fast as you can!
              </p>
            </div>
            <ReflexRush />
          </div>
        )}
      </div>
    </section>
  );
};

export default GameArcade;
