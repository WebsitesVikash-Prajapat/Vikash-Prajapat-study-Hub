// FILE: src/pages/Contact.jsx
// EDIT HERE:
// 1. WhatsApp Number
// 2. Instagram Link
// 3. Email
// 4. Background
// 5. Button Colors

import React from 'react';
import { PageShell, GlassCard, Btn, Input } from '../components/UI';

export default function Contact() {
  return (
    <PageShell>
      <div
        style={{
          minHeight: '100vh',
          padding: 30,
          borderRadius: 30,

          // 🔥 PREMIUM GOLD + WHITE BACKGROUND
          background:
            'linear-gradient(135deg,#ffd700 0%,#ffffff 35%,#fff8dc 50%,#ffffff 70%,#d4af37 100%)',

          color: '#111',
          boxShadow: '0 0 40px rgba(255,215,0,0.35)'
        }}
      >
        {/* HEADING */}

        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem,6vw,5rem)',
              fontWeight: '900',
              color: '#444'
            }}
          >
            Contact Me 📞
          </h1>

          <p
            style={{
              color: '#333',
              fontSize: '1.1rem',
              marginTop: 10
            }}
          >
            Connect with VIKASH PRAJAPAT
          </p>
        </div>

        {/* CONTACT GRID */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(300px,1fr))',

            gap: 25
          }}
        >
          {/* FORM */}

          <GlassCard
            style={{
              background: 'rgba(255,255,255,0.45)'
            }}
          >
            <h2
              style={{
                marginBottom: 20,
                color: '#111'
              }}
            >
              Send Message ✉️
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 15
              }}
            >
              <Input placeholder='Your Name' />

              <Input placeholder='Your Email' />

              <textarea
                placeholder='Your Message'
                style={{
                  padding: 15,
                  borderRadius: 15,
                  border: '1px solid #ccc',
                  minHeight: 120,
                  resize: 'none',
                  fontSize: 16
                }}
              />

              <Btn>
                Send Message
              </Btn>
            </div>
          </GlassCard>

          {/* CONTACT INFO */}

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20
            }}
          >
            {/* WHATSAPP */}

            <GlassCard
              style={{
                background: 'rgba(255,255,255,0.45)'
              }}
            >
              <h2 style={{ color: '#111' }}>
                WhatsApp 💬
              </h2>

              <p
                style={{
                  marginTop: 10,
                  color: '#333'
                }}
              >
                +91 9024895686
              </p>

              <a
                href='https://wa.me/919024895686'
                target='_blank'
                rel='noreferrer'
                style={{
                  textDecoration: 'none'
                }}
              >
                <Btn
                  style={{
                    marginTop: 15
                  }}
                >
                  Open WhatsApp
                </Btn>
              </a>
            </GlassCard>

            {/* INSTAGRAM */}

            <GlassCard
              style={{
                background: 'rgba(255,255,255,0.45)'
              }}
            >
              <h2 style={{ color: '#111' }}>
                Instagram 📸
              </h2>

              <p
                style={{
                  marginTop: 10,
                  color: '#333'
                }}
              >
                @vikash.prajapat63
              </p>

              <a
                href='https://www.instagram.com/vikash.prajapat63'
                target='_blank'
                rel='noreferrer'
                style={{
                  textDecoration: 'none'
                }}
              >
                <Btn
                  style={{
                    marginTop: 15
                  }}
                >
                  Open Instagram
                </Btn>
              </a>
            </GlassCard>

            {/* EMAIL */}

            <GlassCard
              style={{
                background: 'rgba(255,255,255,0.45)'
              }}
            >
              <h2 style={{ color: '#e01717' }}>
                Email 📧
              </h2>

              <p
                style={{
                  marginTop: 10,
                  color: '#333'
                }}
              >
                websitesvikash@gmail.com
              </p>

              <Btn
                style={{
                  marginTop: 15
                }}
              >
                Send Email
              </Btn>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageShell>
  );
}