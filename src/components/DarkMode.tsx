'use client';

import React from 'react';
import ClickEffect from './ui/ClickEffect';

interface DarkModeProps {
    onToggleDarkMode: (darkMode: boolean) => void;
    darkMode: boolean;
}

const DarkMode: React.FC<DarkModeProps> = ({ onToggleDarkMode, darkMode }) => {
  

    return (
        <ClickEffect>
            <button
                
                className='text-black dark:text-white size-12'
            >
                <ToggleMode />
            </button>
        </ClickEffect>
    );
};

export default DarkMode;

const ToggleMode = () => (
   <div></div>
);
