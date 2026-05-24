// FILE: src/App.jsx
// EDIT HERE: Main router and global rendering

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAB from './components/FAB';
import AIChatBox from './components/AIChatBox';

import Home from './pages/Home';
import School from './pages/School';
import College from './pages/College';
import University from './pages/University';
import Results from './pages/Results';
import AIChat from './pages/AIChat';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

export default function App() {
  const [page, setPage] = useState('Home');
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(saved);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'School':
        return <School />;
      case 'College':
        return <College />;
      case 'University':
        return <University />;
      case 'Results':
        return <Results />;
      case 'AIChat':
        return <AIChat />;
      case 'Contact':
        return <Contact />;
      case 'Admin':
        return <Admin />;
      case 'Auth':
        return <Auth />;
      case 'Profile':
        return <Profile />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} bookmarks={bookmarks} />

      {page !== 'Home' && (
        <button
          onClick={() => setPage('Home')}
          style={{
            position: 'fixed',
            top: 90,
            left: 20,
            zIndex: 999
          }}
        >
          ← Back
        </button>
      )}

      {renderPage()}

      {page === 'Home' && <Footer />}

      <FAB />
      <AIChatBox />
    </div>
  );
}