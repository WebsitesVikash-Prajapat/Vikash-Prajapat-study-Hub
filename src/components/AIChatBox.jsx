// FILE: src/components/AIChatBox.jsx
// EDIT HERE: Floating AI Chat Integration

import React, { useState } from 'react';
import { AI_SYSTEM_PROMPT } from '../data/constants';

export default function AIChatBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const sendMessage = async () => {
    if (!text) return;

    const userMsg = { role: 'user', text };
    setMessages((p) => [...p, userMsg]);

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY',
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          system: AI_SYSTEM_PROMPT,
          messages: [{ role: 'user', content: text }]
        })
      });

      const data = await res.json();

      setMessages((p) => [
        ...p,
        {
          role: 'assistant',
          text: data.content?.[0]?.text || 'No response'
        }
      ]);
    } catch (e) {
      console.log(e);
    }

    setText('');
  };

  return (
    <div style={{ position: 'fixed', left: 20, bottom: 20, zIndex: 999 }}>
      {open && (
        <div
          style={{
            width: 320,
            height: 420,
            background: '#111827',
            borderRadius: 20,
            padding: 20,
            marginBottom: 10,
            overflow: 'auto'
          }}
        >
          {messages.map((m, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <b>{m.role}:</b> {m.text}
            </div>
          ))}

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Ask AI...'
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 70,
          height: 70,
          borderRadius: '50%',
          border: 'none',
          background: 'linear-gradient(135deg, cyan, blue)',
          color: '#fff'
        }}
      >
        AI
      </button>
    </div>
  );
}
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
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setReply(data.reply);
      speak(data.reply);
    } catch (error) {
      console.error(error);
      setReply("AI server not connected.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "15px",
        background: "#111",
        color: "#fff",
      }}
    >
      <h2>🤖 Vikash AI Assistant</h2>

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
          marginTop: "20px",
          padding: "15px",
          background: "#222",
          borderRadius: "10px",
        }}
      >
        <strong>AI Reply:</strong>
        <br />
        {reply}
      </div>
    </div>
  );
}