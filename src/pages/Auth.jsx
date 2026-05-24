// FILE: src/pages/Auth.jsx

import React, { useState } from 'react';
import { PageShell, GlassCard, Input, Btn } from '../components/UI';

export default function Auth() {
  const [tab, setTab] = useState('login');

  return (
    <PageShell>
      <GlassCard>
        <div style={{ display: 'flex', gap: 10 }}>
          <Btn onClick={() => setTab('login')}>Login</Btn>
          <Btn onClick={() => setTab('register')}>Register</Btn>
          <Btn onClick={() => setTab('otp')}>OTP</Btn>
        </div>

        <div style={{ marginTop: 20 }}>
          {tab === 'login' && (
            <>
              <Input placeholder='Email' />
              <br />
              <br />
              <Input placeholder='Password' type='password' />
              <br />
              <br />
              <Btn>Login</Btn>
            </>
          )}

          {tab === 'register' && (
            <>
              <Input placeholder='Name' />
              <br />
              <br />
              <Input placeholder='Email' />
              <br />
              <br />
              <Input placeholder='Password' type='password' />
              <br />
              <br />
              <Btn>Register</Btn>
            </>
          )}

          {tab === 'otp' && (
            <>
              <Input placeholder='Phone Number' />
              <br />
              <br />
              <Btn>Send OTP</Btn>
              <p>Demo OTP: 1234</p>
            </>
          )}
        </div>
      </GlassCard>
    </PageShell>
  );
}