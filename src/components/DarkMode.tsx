'use client';

import React from 'react';
import ClickEffect from './ui/ClickEffect';



const DarkMode: React.FC = () => {
  

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
