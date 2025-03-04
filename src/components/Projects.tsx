import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import { projects } from '@/utils';

const Projects = () => {
    return (
        <div className='relative'>
            <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-6'>
                Projects Portfolio
            </h1>
            <div>
                <HoverEffect
                    items={projects}
                    className='max-w-5xl mx-auto font-Montserrat'
                />
            </div>
        </div>
    );
};

export default Projects;
