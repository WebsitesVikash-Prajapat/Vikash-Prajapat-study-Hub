// FILE: src/pages/Home.jsx

import React from 'react';
import { PageShell, GlassCard, Btn, Input } from '../components/UI';

export default function Home({ setPage }) {
  const cats = [
    'School',
    'College',
    'University',
    'Results',
    'AI Chat'
  ];

  const stats = [
    { title: 'Students', value: '50,00000+' },
    { title: 'PDFs', value: '10,000+' },
    { title: 'Subjects', value: '500+' }
  ];

  const trending = [
    'Engineering Physics Notes',
    'Class 12 Chemistry PDF',
    'RTU PYQs',
    'Maths Important Questions'
  ];

  return (
    <PageShell>

      {/* 🔥 MOVING BACKGROUND NAME */}

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `moveUp ${8 + i}s linear infinite`,
              color: 'rgb(224, 18, 18)',
              fontSize: `${20 + Math.random() * 30}px`,
              fontWeight: '900',
              whiteSpace: 'nowrap'
            }}
          >
          
          </div>
        ))}
      </div>

      {/* 🔥 MAIN CONTENT */}

      <div
        style={{
          position: 'relative',
          zIndex: 1,

          minHeight: '100vh',
          padding: 30,
          borderRadius: 30,

          // 🔥 PREMIUM GOLD + WHITE CROSS GRADIENT
          background:
            'linear-gradient(135deg,#ffd700 0%,#ffffff 35%,#fff8dc 50%,#ffffff 70%,#d4af37 100%)',

          color: '#111',

          boxShadow: '0 0 40px rgba(255,215,0,0.35)'
        }}
      >
        {/* HERO SECTION */}

        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem,6vw,5rem)',
              marginBottom: 10,
              fontWeight: '900',

              color: '#444',

              textShadow:
                '0 2px 10px rgba(0, 0, 0, 0.4)'
            }}
          >
            Hi 👋 <br />
            My Name:-VIKASH PRAJAPAT
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1.2rem,3vw,2rem)',
              color: '#484747',
              marginTop: 10
            }}
          >
            I am From Dausa 📍
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              marginTop: 20,
              color: '#333',
              fontWeight: '600'
            }}
          >
            Notes • PYQs • AI Learning • Results
          </p>

          {/* SEARCH */}

          <div
            style={{
              maxWidth: 700,
              margin: '30px auto'
            }}
          >
            <Input placeholder='Search notes, papers, syllabus...' />
          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: 'flex',
              gap: 15,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 20
            }}
          >
            <Btn>Explore Notes</Btn>

            <Btn variant='secondary'>
              Download Papers
            </Btn>

            <Btn onClick={() => setPage('Auth')}>
              Login
            </Btn>
          </div>
        </div>

        {/* STATS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(180px,1fr))',

            gap: 20,
            marginTop: 50
          }}
        >
          {stats.map((s) => (
            <GlassCard key={s.title}>
              <h2
                style={{
                  fontSize: '2rem',
                  color: '#b8860b'
                }}
              >
                {s.value}
              </h2>

              <p
                style={{
                  color: '#333',
                  fontWeight: '600'
                }}
              >
                {s.title}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* CATEGORY SECTION */}

        <h2
          style={{
            marginTop: 60,
            marginBottom: 20,
            textAlign: 'center',
            color: '#222',
            fontSize: '2rem'
          }}
        >
          Explore Categories 📚
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(220px,1fr))',

            gap: 25
          }}
        >
          {cats.map((c) => (
            <GlassCard key={c}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  marginBottom: 20,
                  color: '#111'
                }}
              >
                {c}
              </h3>

              <Btn
                onClick={() =>
                  setPage(c.replace(' ', ''))
                }
              >
                Open
              </Btn>
            </GlassCard>
          ))}
        </div>

        {/* TRENDING SECTION */}

        <h2
          style={{
            marginTop: 70,
            marginBottom: 20,
            textAlign: 'center',
            color: '#222',
            fontSize: '2rem'
          }}
        >
          Trending Materials 🔥
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(250px,1fr))',

            gap: 20
          }}
        >
          {trending.map((item) => (
            <GlassCard key={item}>
              <h3
                style={{
                  color: '#111'
                }}
              >
                {item}
              </h3>

              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  marginTop: 20,
                  flexWrap: 'wrap'
                }}
              >
                <Btn>Download</Btn>

                <Btn variant='secondary'>
                  Bookmark
                </Btn>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* 🔥 ANIMATION STYLE */}

      <style>
        {`
          @keyframes moveUp {
            0% {
              transform: translateY(100vh);
            }

            100% {
              transform: translateY(-120vh);
            }
          }
        `}
      </style>

    </PageShell>
  );
}