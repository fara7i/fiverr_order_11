"use client"


import { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';

const DarkModeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        // Check local storage for theme preference on initial load
        // const savedTheme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setIsDarkMode(true)
        }
    }, []);

    const handleThemeChange = (checked: any) => {
        setIsDarkMode(checked);

        setTheme(theme == 'dark' ? 'light' : 'dark');

        // const newTheme = checked ? 'dark' : 'light';
        // localStorage.setItem('theme', newTheme);
        // document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="flex items-center space-x-2">
            <span>{isDarkMode ? '☀️' : '🌙'}</span>
            <Switch
                // checked={true}
                isSelected={isDarkMode}
                color='success'
                onChange={(e) => handleThemeChange(e.target.checked)}
                aria-label="Toggle dark mode"
            />
        </div>
    );
};

export default DarkModeSwitcher;
