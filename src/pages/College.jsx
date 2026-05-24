import React, { useState } from 'react';

import papers from '../data/papers';

import {
  PageShell,
  GlassCard,
  Btn
} from '../components/UI';

export default function College() {

  const [selectedYear, setSelectedYear] =
    useState('All');

  const years = [
    'All',
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year'
  ];

  const filtered =
    selectedYear === 'All'
      ? papers
      : papers.filter(
          (p) => p.year === selectedYear
        );

  return (
    <PageShell>
      <div
        style={{
          maxWidth: 1200,
          margin: 'auto'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 30,
            color: '#b8860b'
          }}
        >
          📚 Download Papers
        </h1>

        {/* YEAR BUTTONS */}

        <div
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 40
          }}
        >
          {years.map((y) => (
            <Btn
              key={y}
              onClick={() =>
                setSelectedYear(y)
              }
            >
              {y}
            </Btn>
          ))}
        </div>

        {/* PAPERS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(260px,1fr))',

            gap: 20
          }}
        >
          {filtered.map((item) => (
            <GlassCard
              key={item.subject}
            >
              <h2>{item.subject}</h2>

              <p>{item.year}</p>

              <a
                href={item.pdf}
                download
                style={{
                  textDecoration:
                    'none'
                }}
              >
                <Btn
                  style={{
                    marginTop: 20
                  }}
                >
                  Download PDF
                </Btn>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageShell>
  );
}