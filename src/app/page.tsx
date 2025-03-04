'use client';

import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import Projects from '@/components/Projects';
import { Particles } from '@/components/ui/particles';
import { useMomentumScroll } from '@/hooks/useMomentumScroll';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';

const Page = () => {
    useMomentumScroll();

 


    const [isNavVisible, setIsNavVisible] = useState(true);
    const navContainerRef = useRef(null);
    const { y: currentScrollY } = useWindowScroll();
    const lastScrollY = useRef(0);
    const scrollThreshold = 20; // Avoids flickering

    useEffect(() => {
        if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
            return; // Ignore small scroll movements
        }

        if (currentScrollY > lastScrollY.current) {
            setIsNavVisible(false); // Hide navbar when scrolling down
        } else {
            setIsNavVisible(true); // Show navbar when scrolling up
        }

        lastScrollY.current = currentScrollY;
    }, [currentScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100, // Moves navbar up/down
            opacity: isNavVisible ? 1 : 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, [isNavVisible]);

   

    return (
        <div className='relative'>
            <Particles
                className='fixed inset-0 -z-10'
                quantity={300}
           
                staticity={10}
                ease={100}
                size={0.3}
            />

          
                <>
                    <div
                        ref={navContainerRef}
                        className='fixed z-50 inset-x-0 top-0 max-w-[100%] md:max-w-[90%] mx-auto max-sm:mt-2'
                    >
                        <Navbar  />
                    </div>
                    <div id='profile'>
                        <div className='fixed inset-x-0 top-0 max-w-[1320px] w-[90%] mx-auto'>
                            <Profile  />
                        </div>
                    </div>
                    <div className='h-screen' />{' '}
                    <div className='relative z-20'>
                        <Particles
                            className='absolute inset-0'
                            quantity={300}
                     
                            staticity={10}
                            ease={100}
                            size={0.3}
                        />
                        <div
                            id='projects'
                            className='border-t-2 dark:border-white border-slate-300 h-auto rounded-t-[3rem] bg-white dark:bg-black'
                        >
                            <div className='mb-12  sm:px-2 max-lg:px-4'>
                                <Projects />
                            </div>
                            <div
                                id='about'
                                className='mt-4 py-4 border-t-2 dark:border-white border-slate-300 rounded-t-[3rem]  sm:px-2 max-lg:px-4'
                            >
                                <About />
                            </div>
                        </div>
                    </div>
                </>
         
        </div>
    );
};

export default Page;
