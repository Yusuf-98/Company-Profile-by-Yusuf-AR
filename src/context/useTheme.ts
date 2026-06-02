import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Import dari file provider

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme harus digunakan di dalam ThemeProvider');
  }
  return context;
};
