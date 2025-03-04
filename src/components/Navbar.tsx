'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Menu, MenuItem } from '@/components/ui/navbar-menu';
import { IoCloseOutline } from 'react-icons/io5';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { NavbarProfile, NavbarProjects, NavbarAbout } from './NavbarItems';
import { IoMdMail } from 'react-icons/io';
import { FileUserIcon } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollToPlugin);


const Navbar = () => {
    const [active, setActive] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const borderRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<HTMLDivElement[]>([]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            setIsMenuOpen(false);

            // Prevent scroll interruption during animation
            document.body.style.overflowY = 'hidden';

            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: section,
                    offsetY: 0,
                    autoKill: false, // Prevents killing the animation mid-scroll
                },
                ease: 'power2.out',
                onComplete: () => {
                    // Re-enable scrolling after animation completes
                    setTimeout(() => {
                        document.body.style.overflowY = 'auto';
                    }, 100); // Small delay to prevent immediate scroll
                },
            });
        }
    };

    const handleResumeOpen = () => {
        window.open('/document/Abhishek_Shrestha_resume.pdf', '_blank');
    };

    useGSAP(() => {
        gsap.set(menuRef.current, {
            x: '100%',
            visibility: 'hidden',
        });
        gsap.set(borderRefs.current, {
            scaleX: 0,
            transformOrigin: 'right',
        });
        gsap.set(textRefs.current, {
            yPercent: 100,
            opacity: 0,
        });

        // Initial setup for social icons and darkmode
      

        gsap.set('.mobile-social-line', {
            scaleY: 0,
            transformOrigin: 'bottom',
        });
    });

    useEffect(() => {
        if (isMenuOpen) {
            // Show menu before animation
            gsap.set(menuRef.current, {
                visibility: 'visible',
            });

            // Animate menu in
            gsap.to(menuRef.current, {
                x: '0%',
                duration: 0.5,
                ease: 'power3.out',
            });

            // Animate borders with stagger
            gsap.to(borderRefs.current, {
                scaleX: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2,
            });

            // Animate text with screen-like reveal
            gsap.to(textRefs.current, {
                yPercent: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.3,
            });

            // Animate darkmode button
         

            // Animate social icons
            gsap.to('.mobile-social-icon', {
                opacity: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.5,
            });

            // Animate vertical line
            gsap.to('.mobile-social-line', {
                scaleY: 1,
                duration: 0.6,
                ease: 'power3.out',
                delay: 0.8,
            });
        } else {
            // Reverse animation sequence
            gsap.to(textRefs.current, {
                yPercent: 100,
                opacity: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.in',
            });

            gsap.to(borderRefs.current, {
                scaleX: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.in',
                delay: 0.1,
            });

            gsap.to(menuRef.current, {
                x: '100%',
                duration: 0.5,
                ease: 'power3.inOut',
                delay: 0.2,
                onComplete: () => {
                    gsap.set(menuRef.current, {
                        visibility: 'hidden',
                    });
                },
            });

            // Reverse darkmode animation
            gsap.to('.mobile-darkmode', {
                opacity: 0,
                y: 20,
                duration: 0.3,
                ease: 'power2.in',
            });

            // Reverse social icons animation
            gsap.to('.mobile-social-icon', {
                opacity: 0,
                y: 20,
                duration: 0.3,
                stagger: 0.05,
                ease: 'power2.in',
            });

            // Reverse line animation
            gsap.to('.mobile-social-line', {
                scaleY: 0,
                duration: 0.3,
                ease: 'power2.in',
            });
        }
    }, [isMenuOpen]);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: 'power3.out',
                duration: 0.3,
            },
        });

        gsap.set('#header, #nav', {
            y: -50,
            opacity: 0,
        });

        tl.to('#header', {
            y: 0,
            opacity: 1,
        }).to('nav', {
            y: 0,
            opacity: 1,
            stagger: 0.3,
        });
    });

    return (
        <header id='header' className='relative z-50'>
            <nav
                id='nav'
                className='absolute flex justify-between w-full max-md:px-4 items-center'
            >
                <div className='size-12 py-2 max-md:size-10 max-sm:size-8'>
                   
                </div>

                <div className='max-md:hidden w-[40%] max-lg:w-[50%]'>
                    <Menu setActive={setActive}>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => scrollToSection('profile')}
                        >
                            <MenuItem
                                setActive={setActive}
                                active={active}
                                item='Profile'
                            >
                                <div className='p-4'>
                                    <NavbarProfile />
                                </div>
                            </MenuItem>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => scrollToSection('projects')}
                        >
                            <MenuItem
                                setActive={setActive}
                                active={active}
                                item='Projects'
                            >
                                <div className='flex flex-col space-y-4 p-4'>
                                    <NavbarProjects />
                                </div>
                            </MenuItem>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => scrollToSection('about')}
                        >
                            <MenuItem
                                setActive={setActive}
                                active={active}
                                item='About'
                            >
                                <NavbarAbout />
                            </MenuItem>
                        </motion.button>
                    </Menu>
                </div>

                <div className='max-md:hidden'>
                  
                </div>

                {/* Mobile menu button */}
                <button
                    className='md:hidden z-50'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label='Toggle menu'
                >
                    {isMenuOpen ? (
                        <IoCloseOutline size={32} />
                    ) : (
                        <HiMenuAlt3 size={32} />
                    )}
                </button>

                {/* Mobile menu */}
                <div
                    ref={menuRef}
                    className='fixed md:hidden top-0 right-0 bg-white dark:bg-[#191919] h-screen w-full max-w-[300px] p-8 flex flex-col justify-between shadow-xl'
                >
                    <ul
                        ref={linksRef}
                        className='dark:text-white space-y-6 mt-12'
                    >
                        <motion.li
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => scrollToSection('profile')}
                            className='relative pb-4 text-lg font-medium overflow-hidden'
                        >
                            <div
                                ref={(el: HTMLDivElement | null) => {
                                    if (el) {
                                        borderRefs.current[0] = el;
                                    }
                                }}
                                className='absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-600 dark:bg-gray-200'
                            />
                            <div className='overflow-hidden'>
                                <div
                                    ref={(el: HTMLDivElement | null) => {
                                        if (el) {
                                            textRefs.current[0] = el;
                                        }
                                    }}
                                    className='transform-gpu hover:text-gray-600 dark:hover:text-gray-300 transition-colors block'
                                >
                                    Profile
                                </div>
                            </div>
                        </motion.li>

                        <motion.li
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => scrollToSection('projects')}
                            className='relative pb-4 text-lg font-medium overflow-hidden'
                        >
                            <div
                                ref={(el: HTMLDivElement | null) => {
                                    if (el) {
                                        borderRefs.current[1] = el;
                                    }
                                }}
                                className='absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-600 dark:bg-gray-200'
                            />
                            <div className='overflow-hidden'>
                                <div
                                    ref={(el: HTMLDivElement | null) => {
                                        if (el) {
                                            textRefs.current[1] = el;
                                        }
                                    }}
                                    className='transform-gpu hover:text-gray-600 dark:hover:text-gray-300 transition-colors block'
                                >
                                    Projects
                                </div>
                            </div>
                        </motion.li>

                        <motion.li
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => scrollToSection('about')}
                            className='relative pb-4 text-lg font-medium overflow-hidden'
                        >
                            <div
                                ref={(el: HTMLDivElement | null) => {
                                    if (el) {
                                        borderRefs.current[2] = el;
                                    }
                                }}
                                className='absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-600 dark:bg-gray-200'
                            />
                            <div className='overflow-hidden'>
                                <div
                                    ref={(el: HTMLDivElement | null) => {
                                        if (el) {
                                            textRefs.current[2] = el;
                                        }
                                    }}
                                    className='transform-gpu hover:text-gray-600 dark:hover:text-gray-300 transition-colors block'
                                >
                                    About
                                </div>
                            </div>
                        </motion.li>

                        <div className='mobile-darkmode transform-gpu'>
                            
                        </div>
                    </ul>

                    <div className='absolute bottom-8 right-8 flex flex-col justify-center items-center gap-4'>
                        <Link
                            href='https://x.com/learnobusek'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mobile-social-icon hover:scale-125 transition-transform duration-300'
                        >
                            <FaXTwitter size={20} />
                        </Link>
                        <Link
                            href='https://github.com/bcuAbhishek'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mobile-social-icon hover:scale-125 transition-transform duration-300'
                        >
                            <FaGithub size={20} />
                        </Link>
                        <Link
                            href='https://www.linkedin.com/in/obusek-shrestha'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mobile-social-icon hover:scale-125 transition-transform duration-300'
                        >
                            <BsLinkedin size={20} />
                        </Link>
                        <Link
                            href='mailto:learnobusek@gmail.com'
                            className='mobile-social-icon hover:scale-125 transition-transform duration-300'
                        >
                            <IoMdMail size={20} />
                        </Link>
                        <button
                            onClick={handleResumeOpen}
                            className='mobile-social-icon hover:scale-125 transition-transform duration-300'
                        >
                            <FileUserIcon size={24} />
                        </button>
                        <div className='mobile-social-line w-[1.5px] h-24 dark:bg-white bg-black' />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
