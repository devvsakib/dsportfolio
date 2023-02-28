import { useState } from 'react';

const getThemeStatus = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
}

const Theme = () => {
    const [theme, setTheme] = useState(getThemeStatus() ? true : false);
    localStorage.setItem('theme', !theme)
    theme ? document.body.style.background = "white" : document.body.style.background = ""
    
    const toggleTheme = () => {
        setTheme(!theme);
    };
    return { theme, toggleTheme };
}

export default Theme;