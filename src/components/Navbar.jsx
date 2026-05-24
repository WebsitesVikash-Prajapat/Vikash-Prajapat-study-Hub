// FILE: src/components/Navbar.jsx

import React, { useEffect, useState } from 'react';

import logo1 from '../assets/logo.jpeg';
import logo2 from '../assets/logo.png';

export default function Navbar() {

  // 🔥 MULTIPLE LOGOS
  const logos = [logo1, logo2];

  // 🔥 CURRENT LOGO STATE
  const [currentLogo, setCurrentLogo] = useState(0);

  // 🔥 AUTO CHANGE EVERY 5 SEC
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      style={{
        width: '100%',
        padding: '15px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        // 🔥 PREMIUM GLASS EFFECT
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',

        borderBottom: '1px solid rgba(255,255,255,0.1)',

        position: 'sticky',
        top: 0,
        zIndex: 999
      }}
    >
      {/* LEFT SIDE */}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 15
        }}
      >
        {/* 🔥 AUTO CHANGING LOGO */}

        <img
          src={logos[currentLogo]}
          alt='logo'
          style={{
            width: 65,
            height: 65,
            borderRadius: '50%',
            objectFit: 'cover',

            // 🔥 GLOW EFFECT
            boxShadow: '0 0 25px rgba(255,215,0,0.7)',

            transition: 'all 0.8s ease-in-out'
          }}
        />

        {/* 🔥 WEBSITE NAME */}

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '1.8rem',
              fontWeight: '900',

              // 🔥 GOLD TEXT
              background:
                'linear-gradient(90deg,#b8860b,#ffd700,#b8860b)',

              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Vikash Study Hub
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: '0.9rem',
              color: '#ddd'
            }}
          >
            Smart Learning Platform 🚀
          </p>
        </div>
      </div>

      {/* RIGHT SIDE MENU */}

      <div
        style={{
          display: 'flex',
          gap: 20,
          fontWeight: '600'
        }}
      >
        <span style={{ cursor: 'pointer' }}>Home</span>

        <span style={{ cursor: 'pointer' }}>Notes</span>

        <span style={{ cursor: 'pointer' }}>Results</span>

        <span style={{ cursor: 'pointer' }}>AI Chat</span>
      </div>
    </nav>
  );
}