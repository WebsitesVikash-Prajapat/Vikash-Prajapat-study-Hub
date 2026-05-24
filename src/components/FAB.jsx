// FILE: src/components/FAB.jsx
// EDIT HERE: Floating Action Button options

import React, { useState } from 'react';
import { CONTACT } from '../data/constants';

export default function FAB() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 999 }}>
      {open && (
        <div style={{ display: 'grid', gap: 10, marginBottom: 10 }}>
          <a href={CONTACT.whatsappLink}>WhatsApp</a>
          <a href={CONTACT.instagramLink}>Instagram</a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Top
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          border: 'none',
          fontSize: 26
        }}
      >
        +
      </button>
    </div>
  );
}