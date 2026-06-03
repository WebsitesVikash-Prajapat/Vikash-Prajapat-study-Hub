import React, { useState } from "react";

export default function AIChatBox() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "hi-IN";

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setMessage(text);
      sendToAI(text);
    };

    recognition.start();
  };

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "hi-IN";
    window.speechSynthesis.speak(speech);
  };

  const sendToAI = async (userMessage) => {
    try {
      // Demo AI Reply
      const aiReply =
        "Namaste Vikash! Abhi backend connect nahi hai. Firebase/OpenAI connect karne par real AI answer milega.";

      setReply(aiReply);
      speak(aiReply);
    } catch (error) {
      console.error(error);
      setReply("AI server not connected.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "320px",
          background: "#111",
          color: "#fff",
          padding: "15px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h3>🤖 Vikash AI Assistant</h3>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Question pucho..."
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button onClick={() => sendToAI(message)}>
            🚀 Send
          </button>

          <button onClick={startVoice}>
            🎤 Voice
          </button>
        </div>

        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#222",
            borderRadius: "10px",
          }}
        >
          <strong>AI Reply:</strong>
          <br />
          {reply}
        </div>
      </div>
    </div>
  );
}