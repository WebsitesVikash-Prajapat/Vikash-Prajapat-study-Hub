// FILE: src/pages/Profile.jsx

import React from 'react';
import { PageShell, GlassCard, Btn } from '../components/UI';

export default function Profile() {
  return (
    <PageShell>
      <GlassCard>
        <h1>👤 Vikash</h1>
        <p>vikash@gmail.com</p>

        <div style={{ display: 'flex', gap: 20 }}>
          <GlassCard>Bookmarks: 12</GlassCard>
          <GlassCard>Downloads: 45</GlassCard>
          <GlassCard>Points: 120</GlassCard>
        </div>

        <Btn variant='danger'>Logout</Btn>
      </GlassCard>
    </PageShell>
  );
}