import React from 'react'
import { useState, useEffect } from "react";

import '../style/darkmode.css'

function DarkTheme() {
    const [theme, setTheme] = useState("light");

    const storedTheme = localStorage.getItem("Theme");

    if (storedTheme == null) {
        localStorage.setItem("Theme", "light");
    }
    
    // useEffect(() => {
    //   setTheme(storedTheme);
    // }, []);

    const handleClick = () => {
        if (storedTheme === "light" || storedTheme === null) {
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
        <label className={`button-${theme} switch`} onClick={handleClick}>
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    );
};

export default DarkTheme