// FILE: src/pages/School.jsx

import React, { useState } from 'react';
import { INIT_MATERIALS } from '../data/constants';
import { PageShell, GlassCard, Btn } from '../components/UI';

export default function School() {
  const [selected, setSelected] = useState(null);

  return (
    <PageShell>
      <h1>School Materials</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 20 }}>
        {INIT_MATERIALS.school.map((c) => (
          <GlassCard key={c.class}>
            <h3>{c.class}</h3>
            <Btn onClick={() => setSelected(c)}>Open</Btn>
          </GlassCard>
        ))}
      </div>

      {selected && (
        <div style={{ marginTop: 30 }}>
          <h2>{selected.class}</h2>
          {['notes', 'syllabus', 'papers', 'assignments'].map((t) => (
            <GlassCard key={t} style={{ marginBottom: 20 }}>
              <h3>{t.toUpperCase()}</h3>
              {selected[t].map((m) => (
                <div key={m} style={{ marginBottom: 10 }}>
                  {m} <Btn>Preview</Btn> <Btn>Bookmark</Btn> <Btn>Download</Btn>
                </div>
              ))}
            </GlassCard>
          ))}
        </div>
      )}
    </PageShell>
  );
}