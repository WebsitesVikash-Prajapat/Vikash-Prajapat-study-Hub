// FILE: src/pages/AIChat.jsx

import React, { useState } from 'react';
import { AI_QUICK_TOPICS } from '../data/constants';
import { PageShell, GlassCard, Btn } from '../components/UI';

export default function AIChat() {
  const [messages, setMessages] = useState([]);

  return (
    <PageShell>
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 20 }}>
        <GlassCard>
          <h2>Quick Topics</h2>

          {AI_QUICK_TOPICS.map((t) => (
            <div key={t.title} style={{ marginBottom: 20 }}>
              <h3>{t.title}</h3>

              {t.questions.map((q) => (
                <Btn
                  key={q}
                  style={{ width: '100%', marginBottom: 8 }}
                  onClick={() => setMessages((p) => [...p, { role: 'user', text: q }])}
                >
                  {q}
                </Btn>
              ))}
            </div>
          ))}
        </GlassCard>

        <GlassCard>
          <h2>AI Chat</h2>

          {messages.map((m, i) => (
            <div key={i}>{m.text}</div>
          ))}
        </GlassCard>
      </div>
    </PageShell>
  );
}