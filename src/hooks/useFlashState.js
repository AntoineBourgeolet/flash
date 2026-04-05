import { useState, useEffect } from 'react';
import anecdotes from '../data/anecdotes';

const STORAGE_KEY = 'flash_category';

const CATEGORIES = [
  { id: 'animaux',  label: 'Animaux',  emoji: '🐾' },
  { id: 'espace',   label: 'Espace',   emoji: '🪐' },
  { id: 'histoire', label: 'Histoire', emoji: '📜' },
  { id: 'science',  label: 'Science',  emoji: '🔬' },
  { id: 'culture',  label: 'Culture',  emoji: '🎨' },
];

/**
 * Returns all distinct dates present in the dataset that are ≤ today,
 * sorted descending so the most recent date comes first.
 * @returns {string[]}
 */
function getAvailableDates() {
  const today = new Date().toISOString().slice(0, 10);
  const set = new Set(anecdotes.map((a) => a.date).filter((d) => d <= today));
  return [...set].sort((a, b) => (a < b ? 1 : -1));
}

/**
 * Returns the anecdote matching date + category, or null.
 * @param {string} date
 * @param {string} category
 */
function findAnecdote(date, category) {
  return anecdotes.find((a) => a.date === date && a.category === category) ?? null;
}

export function useFlashState() {
  const dates = getAvailableDates();

  const [category, setCategory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return CATEGORIES.some((c) => c.id === stored) ? stored : CATEGORIES[0].id;
    } catch {
      return CATEGORIES[0].id;
    }
  });

  const [selectedDate, setSelectedDate] = useState(dates[0] ?? '');

  // Persist category in LocalStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, category);
    } catch {
      // silently ignore (e.g. private browsing restrictions)
    }
  }, [category]);

  const anecdote = findAnecdote(selectedDate, category);

  return {
    category,
    setCategory,
    selectedDate,
    setSelectedDate,
    anecdote,
    dates,
    categories: CATEGORIES,
  };
}
