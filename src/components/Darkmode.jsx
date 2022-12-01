import React from 'react'
import { useState, useEffect } from "react";
function DarkTheme() {
  const [theme, setTheme] = useState("light");
  const storedTheme = localStorage.getItem("Theme");
  if (storedTheme == null) {
    localStorage.setItem("Theme", "light");
  }
  useEffect(() => {
    setTheme(storedTheme);
  }, []);

  const handleClick = () => {
    if (storedTheme == "light" || storedTheme === null) {
      localStorage.removeItem("Theme");
      localStorage.setItem("Theme", "dark");
      setTheme("dark");
    } else {
      localStorage.removeItem("Theme");
      localStorage.setItem("Theme", "light");
      setTheme("Light");
    }
  };
  return (
    <div className="home">
      <h2>{theme}</h2>
      <button className={`button-${Theme}`} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default DarkTheme