// createContext: Creates a Context object for theming.
// useContext: Allows components to consume the context.
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// useTheme: A custom hook that simplifies the consumption of the ThemeContext. Instead of importing useContext and ThemeContext everywhere, you can just import and use useTheme.
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  //  document.body.setAttribute("data-theme", theme): Sets a custom attribute data-theme on the body element to the current theme. This can be used for theming in CSS.
  // localStorage.setItem("theme", theme): Updates the localStorage with the current theme to persist it across page reloads.
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
