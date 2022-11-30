import React from 'react'
import { useState, useEffect } from "react";
function Darkmode() {
  const {theme, setTheme} = useState("light")
  
  const storedTheme = localStorage.getItem("mode");
  if (storedTheme == null) {
    localStorage.setItem("mode", "light");
  }
  //  useEffect(() => {
  //   setTheme(storedTheme);
  // }, []);

  const handleClick = () => {
    if (storedTheme === "light" || storedTheme === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setTheme("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setTheme("Light");
    }
  };

  return (
    <>
<label className="switch">
  <input type="checkbox" className={`button-${theme}`} onClick={handleClick}/>
  <span className="slider round"></span>
</label>

  </>
  )
}

export default Darkmode