"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Game Logic Helpers ---
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Cols
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// Check for winner
const checkWinner = (squares) => {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = WINNING_COMBINATIONS[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: WINNING_COMBINATIONS[i] };
    }
  }
  return null;
};

// Simple AI Strategy (Win -> Block -> Center -> Random)
const getBestMove = (squares) => {
  // 1. Can AI win?
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = WINNING_COMBINATIONS[i];
    const line = [squares[a], squares[b], squares[c]];
    if (line.filter((x) => x === "O").length === 2 && line.includes(null)) {
      return [a, b, c].find((idx) => squares[idx] === null);
    }
  }
  // 2. Must Block Player?
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = WINNING_COMBINATIONS[i];
    const line = [squares[a], squares[b], squares[c]];
    if (line.filter((x) => x === "X").length === 2 && line.includes(null)) {
      return [a, b, c].find((idx) => squares[idx] === null);
    }
  }
  // 3. Take Center
  if (squares[4] === null) return 4;
  // 4. Random available
  const available = squares
    .map((val, idx) => (val === null ? idx : null))
    .filter((val) => val !== null);
  return available[Math.floor(Math.random() * available.length)];
};

const Play = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState(null); // { winner: 'X' | 'O', line: [] }
  const [scores, setScores] = useState({ player: 0, cpu: 0 });

  // Handle Player Click
  const handleClick = (index) => {
    if (board[index] || winnerInfo || !isPlayerTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    // Check win immediately after player move
    const result = checkWinner(newBoard);
    if (result) {
      handleWin(result);
    } else if (!newBoard.includes(null)) {
      // Draw
      setWinnerInfo({ winner: "Draw", line: [] });
    } else {
      setIsPlayerTurn(false);
    }
  };

  // Handle CPU Turn
  useEffect(() => {
    if (!isPlayerTurn && !winnerInfo) {
      // Fake thinking delay for realism
      const timer = setTimeout(() => {
        const moveIndex = getBestMove(board);
        if (moveIndex !== undefined) {
          const newBoard = [...board];
          newBoard[moveIndex] = "O";
          setBoard(newBoard);

          const result = checkWinner(newBoard);
          if (result) {
            handleWin(result);
          } else if (!newBoard.includes(null)) {
            setWinnerInfo({ winner: "Draw", line: [] });
          } else {
            setIsPlayerTurn(true);
          }
        }
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, board, winnerInfo]);

  const handleWin = (result) => {
    setWinnerInfo(result);
    if (result.winner === "X")
      setScores((s) => ({ ...s, player: s.player + 1 }));
    if (result.winner === "O") setScores((s) => ({ ...s, cpu: s.cpu + 1 }));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinnerInfo(null);
    setIsPlayerTurn(true);
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-2 block">
            System Challenge
          </span>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            Defeat the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">
              Mainframe
            </span>
          </h2>
          <p className="text-slate-400">Prove you aren't a robot. Best of 3.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* --- Scoreboard --- */}
          <div className="flex md:flex-col gap-8 order-2 md:order-1">
            <div
              className={`text-center p-4 rounded-2xl w-32 border transition-all duration-300 ${
                isPlayerTurn && !winnerInfo
                  ? "bg-indigo-500/20 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                  : "bg-slate-900/50 border-white/5"
              }`}
            >
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Player (X)
              </p>
              <p className="text-4xl font-bold text-white">{scores.player}</p>
            </div>
            <div
              className={`text-center p-4 rounded-2xl w-32 border transition-all duration-300 ${
                !isPlayerTurn && !winnerInfo
                  ? "bg-fuchsia-500/20 border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                  : "bg-slate-900/50 border-white/5"
              }`}
            >
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                CPU (O)
              </p>
              <p className="text-4xl font-bold text-white">{scores.cpu}</p>
            </div>
          </div>

          {/* --- The Game Grid --- */}
          <div className="order-1 md:order-2 bg-slate-900/50 p-6 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl relative">
            <div className="grid grid-cols-3 gap-3">
              {board.map((cell, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleClick(index)}
                  whileHover={{
                    scale: cell ? 1 : 1.05,
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center text-4xl sm:text-5xl font-bold relative overflow-hidden transition-colors
                    ${
                      cell
                        ? "bg-slate-800/50 cursor-default"
                        : "bg-slate-800/20 cursor-pointer border border-white/5 hover:border-white/20"
                    }
                    ${winnerInfo?.line.includes(index) ? "bg-white/10" : ""}
                  `}
                >
                  <AnimatePresence>
                    {cell === "X" && (
                      <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                      >
                        ✕
                      </motion.span>
                    )}
                    {cell === "O" && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.8)]"
                      >
                        ◯
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            {/* Winner Overlay / Reset Button */}
            <AnimatePresence>
              {winnerInfo && (
                <motion.div
                  initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                  animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/60 rounded-3xl"
                >
                  <motion.div
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="text-center"
                  >
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {winnerInfo.winner === "Draw"
                        ? "System Halted"
                        : winnerInfo.winner === "X"
                        ? "Access Granted"
                        : "Access Denied"}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {winnerInfo.winner === "Draw"
                        ? "Stalemate detected."
                        : winnerInfo.winner === "X"
                        ? "You defeated the AI."
                        : "The System wins."}
                    </p>
                    <button
                      onClick={resetGame}
                      className="px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                      Reboot System
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Turn Indicator (Text) */}
        {!winnerInfo && (
          <p className="text-center mt-8 text-slate-500 font-mono text-sm animate-pulse">
            {isPlayerTurn
              ? "> AWAITING USER INPUT..."
              : "> SYSTEM COMPUTING..."}
          </p>
        )}
      </div>
    </section>
  );
};

export default Play;
