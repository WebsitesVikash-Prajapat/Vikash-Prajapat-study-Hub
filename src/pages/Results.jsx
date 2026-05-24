import React from 'react';
import results from '../data/results';
import { PageShell, GlassCard, Btn } from '../components/UI';

export default function Results() {
  return (
    <PageShell>
      <div
        style={{
          maxWidth: 1000,
          margin: 'auto'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 40,
            fontSize: '3rem',
            color: '#b8860b'
          }}
        >
          📢 Latest Results
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(280px,1fr))',
            gap: 20
          }}
        >
          {results.map((item) => (
            <GlassCard key={item.title}>
              <h2>{item.title}</h2>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: 'none'
                }}
              >
                <Btn
                  style={{
                    marginTop: 20
                  }}
                >
                  Open Result
                </Btn>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageShell>
  );
}