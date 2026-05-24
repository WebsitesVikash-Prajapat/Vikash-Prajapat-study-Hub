// FILE: src/hooks/useLocalStorage.js
// EDIT: Local storage logic

import { useState } from "react";

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initial;
  });

  const update = (v) => {
    setValue(v);
    localStorage.setItem(key, JSON.stringify(v));
  };

  return [value, update];
}