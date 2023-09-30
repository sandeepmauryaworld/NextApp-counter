"use client";
import { useEffect, useState } from "react";
export const useDarkMode = (mode: () => Boolean) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(mode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = (value, existingMode) => {
    if (value == false) {
      setIsDarkMode(existingMode);
    } else {
      setIsDarkMode(!isDarkMode);
      document.cookie = `mode=${!isDarkMode}`;
    }
  };
  return { isDarkMode, toggleDarkMode: toggleDarkMode };
};
