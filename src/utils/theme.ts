// src/utils/theme.js

import { writable } from 'svelte/store';

// Define a writable store for the theme
export const theme = writable(getInitialTheme());

// Function to get the initial theme from local storage
function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light';
  } else {
    return 'light'; // Default to light theme
  }
}

// Function to toggle the theme
export function toggleTheme() {
  theme.update(currentTheme => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return newTheme;
  });
}
