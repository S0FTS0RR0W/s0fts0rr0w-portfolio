import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemePreference = 'light' | 'dark' | 'system';

interface ThemeContextType {
  darkMode: boolean;
  themePreference: ThemePreference;
  setThemePreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => {
    const savedPreference = localStorage.getItem('themePreference');
    return (savedPreference as ThemePreference) || 'system';
  });

  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Effect to apply theme based on preference
  useEffect(() => {
    const applyTheme = () => {
      localStorage.setItem('themePreference', themePreference);
      if (themePreference === 'system') {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
        document.body.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
      } else {
        const isDark = themePreference === 'dark';
        setDarkMode(isDark);
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
      }
    };

    applyTheme();
  }, [themePreference]);

  // Effect to listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themePreference === 'system') {
        setDarkMode(mediaQuery.matches);
        document.body.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themePreference]); // Re-run if preference changes to/from 'system'

  return (
    <ThemeContext.Provider value={{ darkMode, themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
