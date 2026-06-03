import React, { useState } from "react";

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const increaseScore = () => {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  const resetGame = () => {
    setScore(0);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        textAlign: "center",
        background: "#111",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(255,215,0,0.4)"
      }}
    >
      <h1 style={{ color: "gold" }}>🎮 Score Cube Game</h1>

      <div
        onClick={increaseScore}
        style={{
          width: "150px",
          height: "150px",
          margin: "30px auto",
          background: "linear-gradient(135deg,#ffd700,#b8860b)",
          borderRadius: "15px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#000"
        }}
      >
        CLICK
      </div>

      <h2>🏆 Score: {score}</h2>
      <h3>⭐ High Score: {highScore}</h3>

      <button
        onClick={resetGame}
        style={{
          padding: "10px 20px",
          background: "gold",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Reset Game
      </button>
    </div>
  );
}