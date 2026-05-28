// FILE: src/components/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        padding: '60px 30px 30px',
        background:
          'linear-gradient(135deg,#111,#1a1a1a,#000)',
        color: '#fff',
        borderTop: '4px solid gold'
      }}
    >
      {/* TOP SECTION */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(250px,1fr))',
          gap: 40
        }}
      >
        {/* BRAND */}

        <div>
          <h1
            style={{
              fontSize: '2rem',
              marginBottom: 10,
              background:
                'linear-gradient(90deg,#ffd700,#fff,#ffd700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            🎓 Vikash Study Hub
          </h1>

          <p
            style={{
              color: '#ccc',
              lineHeight: 1.8
            }}
          >
            VIKASH PRAJAPAT
            <br />
            Notes, PYQs, Results, AI Learning,
            PDFs and more.
          </p>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h2
            style={{
              marginBottom: 20,
              color: '#ffd700'
            }}
          >
            Quick Links
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}
          >
            <a href='#' style={linkStyle}>
              Home
            </a>

            <a href='#' style={linkStyle}>
              Notes
            </a>

            <a href='#' style={linkStyle}>
              PYQs
            </a>

            <a href='#' style={linkStyle}>
              Results
            </a>

            <a href='#' style={linkStyle}>
              Contact
            </a>
          </div>
        </div>

        {/* CONTACT */}

        <div>
          <h2
            style={{
              marginBottom: 20,
              color: '#ffd700'
            }}
          >
            Contact
          </h2>

          <p style={textStyle}>
            📞 +91 9024895686
          </p>

          <p style={textStyle}>
            📧 websitesvikas@gmail.com
          </p>

          <p style={textStyle}>
            📍 KALOTA Dausa, Rajasthan
          </p>

          {/* SOCIAL */}

          <div
            style={{
              display: 'flex',
              gap: 15,
              marginTop: 20,
              flexWrap: 'wrap'
            }}
          >
            <a
              href='https://wa.me/919024895686'
              target='_blank'
              rel='noreferrer'
              style={socialBtn}
            >
              WhatsApp
            </a>

            <a
              href='https://instagram.com'
              target='_blank'
              rel='noreferrer'
              style={socialBtn}
            >
              Instagram
            </a>

            <a
              href='https://youtube.com/@vikash_prajapat63?si=FWBUxR8wmNTKzKvw'
              target='_blank'
              rel='noreferrer'
              style={socialBtn}
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div
        style={{
          marginTop: 50,
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: 20,
          textAlign: 'center',
          color: '#aaa'
        }}
      >
        © 2026 Vikash Study Hub •
        All Rights Reserved
      </div>
    </footer>
  );
}

/* STYLES */

const linkStyle = {
  color: '#ddd',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: '0.3s'
};

const textStyle = {
  color: '#ccc',
  marginBottom: 10
};

const socialBtn = {
  background:
    'linear-gradient(135deg,#ffd700,#b8860b)',
  padding: '10px 18px',
  borderRadius: 12,
  color: '#fbf1f1',
  textDecoration: 'none',
  fontWeight: '700'
};