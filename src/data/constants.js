// FILE: src/data/constants.js
// EDIT HERE: Colors, contact info, AI prompt, materials, results

export const C = {
  bg: '#0A0F2E',
  blue: '#2563EB',
  violet: '#7C3AED',
  cyan: '#06B6D4',
  white: '#FFFFFF',
  glass: 'rgba(255,255,255,0.08)',
  border: 'rgba(255,255,255,0.12)',
  text: '#E2E8F0',
  muted: '#94A3B8',
  danger: '#EF4444',
  success: '#10B981'
};

export const CONTACT = {
  whatsapp: '+91 9024895686',
  whatsappLink: 'https://wa.me/919024895686',
  instagram: '@vikash.prajapat63',
  instagramLink: 'https://www.instagram.com/vikash.prajapat63',
  email: 'vikashstudyhub@gmail.com'
};

export const RESULT_BOARDS = [
  { title: 'CBSE Board Results', date: '20 May 2026', status: 'Declared' },
  { title: 'RBSE Results', date: '25 May 2026', status: 'Expected' },
  { title: 'RTU Semester Result', date: '18 May 2026', status: 'Declared' },
  { title: 'Uniraj Result', date: '22 May 2026', status: 'Expected' },
  { title: 'DU Results', date: '16 May 2026', status: 'Declared' },
  { title: 'Mumbai University Result', date: '28 May 2026', status: 'Expected' }
];

export const AI_SYSTEM_PROMPT = `You are Vikash Study Hub AI Teacher.
Reply in Hinglish.
Be friendly.
Explain concepts step by step.
Focus on students and education.`;

export const AI_QUICK_TOPICS = [
  {
    title: 'Maths',
    questions: ['What is differentiation?', 'Explain matrix rank', 'How to solve integration?', 'Explain determinants']
  },
  {
    title: 'Science',
    questions: ['Explain Newton laws', 'What is diffraction?', 'Define velocity', 'Explain atoms']
  },
  {
    title: 'History',
    questions: ['Who was Akbar?', '1857 revolt explain', 'What is Harappa?', 'French revolution summary']
  },
  {
    title: 'Commerce',
    questions: ['Explain balance sheet', 'What is GST?', 'Define economics', 'What is accounting?']
  },
  {
    title: 'Exams',
    questions: ['How to prepare for boards?', 'Best study timetable?', 'Tips to score 90%', 'How to avoid stress?']
  },
  {
    title: 'Computer',
    questions: ['What is React?', 'Explain HTML', 'What is AI?', 'How websites work?']
  },
  {
    title: 'English',
    questions: ['Improve spoken English', 'Tense explained', 'Essay writing tips', 'Grammar basics']
  },
  {
    title: 'Class 10',
    questions: ['Best notes for science?', 'Math important chapters?', 'Hindi grammar tips', 'Board prep guide']
  }
];

export const INIT_MATERIALS = {
  school: Array.from({ length: 12 }, (_, i) => ({
    class: `Class ${i + 1}`,
    notes: ['Math Notes', 'Science Notes'],
    syllabus: ['Latest Syllabus'],
    papers: ['Previous Year Paper'],
    assignments: ['Practice Assignment']
  })),
  college: {
    '1st Year': {
      '1st Semester': ['Physics', 'Maths', 'English'],
      '2nd Semester': ['Chemistry', 'Maths 2', 'Programming']
    }
  },
  universities: ['Rajasthan University', 'RTU', 'DU', 'Mumbai University']
};