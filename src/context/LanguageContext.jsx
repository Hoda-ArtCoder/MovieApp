import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default language is 'en'
  const [direction, setDirection] = useState('ltr'); // default direction is 'ltr'

  // Change direction based on the language
  useEffect(() => {
    if (language === 'ar') {
      setDirection('rtl');
    } else {
      setDirection('ltr');
    }
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, direction, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};