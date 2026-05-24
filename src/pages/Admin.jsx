// FILE: src/pages/Admin.jsx

import React, { useState } from 'react';
import { PageShell, GlassCard, Input, Btn } from '../components/UI';

export default function Admin() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handle = () => {
    if (user === 'admin' && pass === 'admin123') {
      setLogin(true);
    }
  };

  if (!login) {
    return (
      <PageShell>
        <GlassCard>
          <h1>Admin Login</h1>
          <Input placeholder='Username' onChange={(e) => setUser(e.target.value)} />
          <br />
          <br />
          <Input placeholder='Password' type='password' onChange={(e) => setPass(e.target.value)} />
          <br />
          <br />
          <Btn onClick={handle}>Login</Btn>
        </GlassCard>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <h1>Admin Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
        <GlassCard>Total Users</GlassCard>
        <GlassCard>Total PDFs</GlassCard>
        <GlassCard>Total Universities</GlassCard>
        <GlassCard>Analytics</GlassCard>
      </div>
    </PageShell>
  );
}