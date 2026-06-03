// FILE: src/components/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "60px 30px 20px",
        background: "linear-gradient(135deg,#0a0a0a,#1a1a1a,#000)",
        color: "#fff",
        borderTop: "4px solid #FFD700",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        {/* BRAND */}
        <div>
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "10px",
              background:
                "linear-gradient(90deg,#FFD700,#ffffff,#FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🎓 Vikash Study Hub
          </h1>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.8",
            }}
          >
            Smart Learning Platform
            <br />
            Notes, PYQs, Results,
            AI Learning, PDFs and more.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 style={{ color: "#FFD700", marginBottom: "20px" }}>
            Quick Links
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a href="/" style={linkStyle}>Home</a>
            <a href="/notes" style={linkStyle}>Notes</a>
            <a href="/pyqs" style={linkStyle}>PYQs</a>
            <a href="/results" style={linkStyle}>Results</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>
        </div>

        {/* RESOURCES */}
        <div>
          <h2 style={{ color: "#FFD700", marginBottom: "20px" }}>
            Resources
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a href="#" style={linkStyle}>PDF Notes</a>
            <a href="#" style={linkStyle}>Previous Papers</a>
            <a href="#" style={linkStyle}>Syllabus</a>
            <a href="#" style={linkStyle}>AI Learning</a>
            <a href="#" style={linkStyle}>Latest Updates</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h2 style={{ color: "#FFD700", marginBottom: "20px" }}>
            Contact
          </h2>

          <p style={textStyle}>📞 +91 9024895686</p>
          <p style={textStyle}>📧 websitesvikash@gmail.com</p>
          <p style={textStyle}>📍 Kalota, Dausa, Rajasthan</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <a
              href="https://wa.me/919024895686"
              target="_blank"
              rel="noreferrer"
              style={socialBtn}
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              style={socialBtn}
            >
              Instagram
            </a>

            <a
              href="https://youtube.com/@vikash_prajapat63"
              target="_blank"
              rel="noreferrer"
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
          marginTop: "50px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#aaa" }}>
          © 2026 Vikash Study Hub • All Rights Reserved
        </p>

        <p
          style={{
            color: "#FFD700",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Founder: VIKASH PRAJAPAT
        </p>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "#ddd",
  textDecoration: "none",
  fontSize: "1rem",
};

const textStyle = {
  color: "#ccc",
  marginBottom: "10px",
};

const socialBtn = {
  background: "linear-gradient(135deg,#FFD700,#B8860B)",
  padding: "10px 18px",
  borderRadius: "12px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};