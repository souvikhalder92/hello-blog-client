import React, { createContext, useEffect, useState } from "react";

export const modeChangeContext = createContext();
const ModeContext = ({ children }) => {
  console.log("nav");
  if (localStorage.getItem("theme-mode")) {
    console.log("nav-ok");
  } else {
    localStorage.setItem("theme-mode", "light");
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme-mode"));
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      console.log(localStorage.getItem("theme-mode"), theme, "okif");
      localStorage.setItem("theme-mode", theme);
      console.log(localStorage.getItem("theme-mode"), theme, "okif");
    } else {
      setTheme("light");
      console.log(localStorage.getItem("theme-mode"), theme, "ok-else");
      localStorage.setItem("theme-mode", theme);
      console.log(localStorage.getItem("theme-mode"), theme, "ok-else");
    }
  };

  useEffect(() => {
    // setTheme(localStorage.getItem("theme-mode"));
    localStorage.setItem("theme-mode", theme);
    document.body.className = theme;

    console.log(localStorage.getItem("theme-mode"), theme, "effect");
  }, [theme]);
  localStorage.setItem("theme-mode", theme);
  console.log(localStorage.getItem("theme-mode"), theme, "global");

  const modeInfo = { toggleTheme, theme };

  return (
    <div>
      <modeChangeContext.Provider value={modeInfo}>
        {children}
      </modeChangeContext.Provider>
    </div>
  );
};

export default ModeContext;
