// FILE: src/pages/University.jsx

import React, { useState } from 'react';
import { INIT_MATERIALS } from '../data/constants';
import { PageShell, Select } from '../components/UI';

export default function University() {
  const [uni, setUni] = useState(INIT_MATERIALS.universities[0]);

  return (
    <PageShell>
      <h1>University Materials</h1>

      <Select value={uni} onChange={(e) => setUni(e.target.value)}>
        {INIT_MATERIALS.universities.map((u) => (
          <option key={u}>{u}</option>
        ))}
      </Select>

      <div style={{ marginTop: 30 }}>{uni} Notes & PYQs Available</div>
    </PageShell>
  );
}