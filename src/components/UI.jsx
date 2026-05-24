// FILE: src/components/UI.jsx
// EDIT HERE:
// 1. Button Colors
// 2. Glass Card Style
// 3. Input Design
// 4. Background Theme
// 5. Premium UI Effects

import React from 'react';
import { C } from '../data/constants';


// 🔥 PREMIUM BUTTON

export const Btn = ({
  children,
  variant = 'primary',
  style = {},
  ...props
}) => {

  const variants = {

    // GOLD BUTTON
    primary: {
      background:
        'linear-gradient(135deg,#b8860b,#ffd700,#fff4b0)',

      color: '#111',

      boxShadow:
        '0 0 20px rgba(255,215,0,0.45)'
    },

    // WHITE GLASS BUTTON
    secondary: {
      background:
        'rgba(255,255,255,0.35)',

      color: '#111',

      border:
        '1px solid rgba(255,255,255,0.4)',

      backdropFilter: 'blur(12px)'
    },

    // TRANSPARENT BUTTON
    ghost: {
      background: 'transparent',

      border:
        '1px solid rgba(255,215,0,0.4)',

      color: '#111'
    },

    // RED BUTTON
    danger: {
      background:
        'linear-gradient(135deg,#ff4d4d,#ff0000)',

      color: '#fff'
    },

    // GREEN BUTTON
    success: {
      background:
        'linear-gradient(135deg,#00b09b,#96c93d)',

      color: '#fff'
    }
  };

  return (
    <button
      {...props}
      style={{
        padding: '13px 22px',

        borderRadius: 16,

        border: 'none',

        cursor: 'pointer',

        transition: '0.35s',

        fontWeight: '800',

        fontSize: '1rem',

        letterSpacing: '0.5px',

        transform: 'scale(1)',

        ...variants[variant],

        ...style
      }}

      onMouseOver={(e) => {
        e.currentTarget.style.transform =
          'translateY(-4px) scale(1.03)';

        e.currentTarget.style.boxShadow =
          '0 0 30px rgba(255,215,0,0.7)';
      }}

      onMouseOut={(e) => {
        e.currentTarget.style.transform =
          'translateY(0px) scale(1)';

        e.currentTarget.style.boxShadow =
          '0 0 20px rgba(255,215,0,0.45)';
      }}
    >
      {children}
    </button>
  );
};


// 🔥 PREMIUM GLASS CARD

export const GlassCard = ({
  children,
  style = {}
}) => (

  <div
    style={{
      background:
        'rgba(255,255,255,0.22)',

      backdropFilter: 'blur(18px)',

      border:
        '1px solid rgba(255,215,0,0.25)',

      borderRadius: 28,

      padding: 24,

      transition: '0.35s',

      boxShadow:
        '0 8px 30px rgba(0,0,0,0.12)',

      ...style
    }}

    onMouseOver={(e) => {
      e.currentTarget.style.transform =
        'translateY(-6px)';

      e.currentTarget.style.boxShadow =
        '0 15px 40px rgba(255,215,0,0.3)';
    }}

    onMouseOut={(e) => {
      e.currentTarget.style.transform =
        'translateY(0px)';

      e.currentTarget.style.boxShadow =
        '0 8px 30px rgba(0,0,0,0.12)';
    }}
  >
    {children}
  </div>
);


// 🔥 PREMIUM INPUT

export const Input = (props) => (

  <input
    {...props}

    style={{
      width: '100%',

      padding: 16,

      borderRadius: 18,

      border:
        '1px solid rgba(255,215,0,0.3)',

      background:
        'rgba(255,255,255,0.35)',

      color: '#111',

      outline: 'none',

      fontSize: '1rem',

      backdropFilter: 'blur(10px)',

      boxShadow:
        '0 0 12px rgba(255,215,0,0.15)'
    }}
  />
);


// 🔥 PREMIUM SELECT

export const Select = ({
  children,
  ...props
}) => (

  <select
    {...props}

    style={{
      width: '100%',

      padding: 16,

      borderRadius: 18,

      border:
        '1px solid rgba(255,215,0,0.3)',

      background:
        'rgba(255,255,255,0.35)',

      color: '#111',

      outline: 'none',

      fontSize: '1rem',

      backdropFilter: 'blur(10px)'
    }}
  >
    {children}
  </select>
);


// 🔥 PREMIUM BADGE

export const Badge = ({
  text,
  color = '#ffd700'
}) => (

  <span
    style={{
      background: color,

      padding: '7px 14px',

      borderRadius: 99,

      fontSize: 12,

      fontWeight: '700',

      color: '#111',

      boxShadow:
        '0 0 12px rgba(255,215,0,0.4)'
    }}
  >
    {text}
  </span>
);


// 🔥 PAGE BACKGROUND

export const PageShell = ({
  children
}) => (

  <div
    style={{

      minHeight: '100vh',

      background:
        'linear-gradient(135deg,#b8860b 0%,#ffffff 45%,#ffffff 55%,#ffd700 100%)',

      color: '#111',

      padding:
        '100px 20px 40px'
    }}
  >
    {children}
  </div>
);