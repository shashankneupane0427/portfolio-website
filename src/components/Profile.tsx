'use client';

import { fullStackInfo } from '@/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FileUserIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub} from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

const Profile = ({ darkMode }: { darkMode: boolean }) => {
    useGSAP(() => {
        const spans = document.querySelectorAll('.hover-text span');

        spans.forEach((span, index) => {
            span.addEventListener('mouseenter', () => {
                gsap.to(span, {
                    scale: 1.4,
                    y: -10,

                    duration: 0.2,
                    ease: 'power2.out',
                });

                if (spans[index - 1]) {
                    gsap.to(spans[index - 1], {
                        scale: 1.2,
                        x: '-12px',
                        y: -5,
                        duration: 0.2,
                        ease: 'power2.out',
                    });
                }
                if (spans[index + 1]) {
                    gsap.to(spans[index + 1], {
                        scale: 1.2,
                        x: '12px',
                        y: -5,
                        duration: 0.2,
                        ease: 'power2.out',
                    });
                }
            });

            span.addEventListener('mouseleave', () => {
                gsap.to(span, {
                    scale: 1,
                    y: 0,

                    duration: 0.2,
                    ease: 'power2.inOut',
                });

                if (spans[index - 1]) {
                    gsap.to(spans[index - 1], {
                        scale: 1,
                        x: 0,
                        y: 0,
                        duration: 0.2,
                        ease: 'power2.inOut',
                    });
                }
                if (spans[index + 1]) {
                    gsap.to(spans[index + 1], {
                        scale: 1,
                        x: 0,
                        y: 0,
                        duration: 0.2,
                        ease: 'power2.inOut',
                    });
                }
            });
        });
    }, []);

    useGSAP(() => {
        // Timeline configuration
        const tl = gsap.timeline({
            defaults: {
                ease: 'power3.out',
                duration: 0.216,
            },
        });

        // Initial states setup
        const initialStates = () => {
            // Image and boxes structure (without content)
            gsap.set('#image', {
                opacity: 0,
                y: 100, // Start from below
            });
            gsap.set('#boxes', {
                opacity: 0,
                y: 100, // Start from below
            });
            gsap.set('.box', {
                opacity: 0,
                scale: 0.95,
            });

            // Box content
            gsap.set(['.box-title', '.box-text'], {
                clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                opacity: 0,
                y: -20,
            });

            // Name and quote
            gsap.set('.hover-text span', {
                opacity: 0,
                y: 50,
            });
            gsap.set('#quote', {
                opacity: 0,
                y: 50,
            });

            // Social icons
            gsap.set(['#social', '.social-icon'], {
                opacity: 0,
                y: 50,
            });
        };

        // Animation sequence
        const animateElements = () => {
            // First: Animate image and boxes structure
            tl.to('#image', {
                opacity: 1,
                y: 0,
                duration: 0.4,
            })
                .to(
                    '#boxes',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                    },
                    '-=0.2'
                )
                .to(
                    '.box',
                    {
                        opacity: 1,
                        scale: 1,
                        stagger: 0.0264,
                    },
                    '-=0.2'
                )

                // Second: Animate name, quote, and box contents
                .to('.hover-text span', {
                    opacity: 1,
                    y: 0,
                    stagger: 0.0104,
                    duration: 0.3,
                })
                .to(
                    '#quote',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                    },
                    '-=0.2'
                )
                .to(
                    ['.box-title', '.box-text'],
                    {
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                        opacity: 1,
                        y: 0,
                        duration: 0.32,
                        stagger: {
                            each: 0.0536,
                            from: 'start',
                        },
                    },
                    '-=0.2'
                )

                // Last: Animate social icons
                .to(
                    '#social',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                    },
                    '-=0.1'
                )
                .to(
                    '.social-icon',
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.0264,
                        duration: 0.16,
                    },
                    '-=0.2'
                );
        };

        // Execute animations
        initialStates();
        animateElements();
    }, []);

    const handleResumeOpen = () => {
        window.open('/document/Abhishek_Shrestha_resume.pdf', '_blank');
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <main className='h-screen relative mx-auto'>
            {isMobile ? (
                <div className='flex flex-col items-center min-h-screen px-6'>
                    {/* Name and Role */}
                    <div className='text-center mb-6 mt-24'>
                        <h1 className='text-3xl font-bold mb-2'>
                            SHASHANK NEUPANE
                        </h1>
                        <h2 className='text-xl'>FULL STACK DEVELOPER</h2>
                    </div>

                    {/* Social Links */}
                    <div className='flex gap-6 mb-6'>
                        <Link
                            href='https://github.com/shashankneupane0427'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:scale-110 transition-transform'
                        >
                            <FaGithub size={24} />
                        </Link>
                        <Link
                            href='https://www.linkedin.com/in/shashankneupane0427/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:scale-110 transition-transform'
                        >
                            <BsLinkedin size={24} />
                        </Link>
                        <Link
                            href='https://x.com/learnobusek'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:scale-110 transition-transform'
                        >
                           
                        </Link>
                        <Link
                            href='mailto:suryaneupane0427@gmail.com'
                            className='hover:scale-110 transition-transform'
                        >
                            <IoMdMail size={24} />
                        </Link>
                    </div>

                    {/* Resume Button */}
                    <button
                        onClick={handleResumeOpen}
                        className='mb-8 px-6 py-2 border rounded-full hover:scale-105 transition-transform flex items-center gap-2 bg-purple-800 text-white'
                    >
                        <FileUserIcon size={20} />
                        View Resume
                    </button>

                    <div className='fixed bottom-0 left-1/2 -translate-x-1/2 size-96'>
                        <Image
                            src=''
                            alt='profileee'
                            fill
                            className='object-contain'
                            priority={true}
                            quality={75}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <div className='absolute left-1/2 transform -translate-x-1/2 text-[32px] sm:text-[44px] md:text-[54px] lg:text-[72px] xl:text-[84px] font-semibold bottom-0 w-full'>
                        <div
                            id='name'
                            className='flex flex-nowrap justify-between gap-4 max-md:max-w-[96%] max-w-[90%]  mx-auto uppercase'
                        >
                            <div className='hover-text flex justify-center'>
                                {`shashank`.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        className='relative inline-block'
                                        style={{
                                            display: 'inline-block',
                                            opacity: 0,
                                            transform: 'translateY(50px)',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>
                            <div className='hover-text flex justify-center'>
                                {`neupane`.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        className='relative inline-block'
                                        style={{
                                            display: 'inline-block',
                                            opacity: 0,
                                            transform: 'translateY(50px)',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div
                            id='quote'
                            className='flex flex-nowrap justify-between text-base sm:text-2xl md:text-[28px] lg:text-4xl xl:text-[42px] font-medium w-[90%] sm:w-[90%] md:w-[85%] lg:w-[78%] mx-auto mt-2 sm:-mt-4'
                        >
                            
                        </div>
                        <div
                            id='boxes'
                            className='flex justify-between h-[260px] sm:h-[300px] md:h-[350px] lg:h-[370px] w-[80%] max-md:w-full mx-auto mt-4 relative px-4'
                        >
                            
                            <div className='flex flex-col gap-4 w-1/2'>
                                <div className='relative box left-box bg-gradient-to-b from-[#BAE1EE] to-[#8CBED6] dark:gradient h-1/2 rounded-lg'>
                                    <div className='flex flex-col mt-4 ml-2 xl:ml-[18%] mxl:ml-[24%] lg:ml-[16%] md:ml-[12%] sm:ml-[12%]'>
                                        <div className='flex flex-col font-medium text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl'>
                                            <span className='relative lg:left-[20%] left-8 box-title'>
                                                AI /ML
                                            </span>
                                            <span className='box-title'>
                                                Enthusiast
                                            </span>
                                        </div>
                                        <ul className='mt-6 -ml-4'>
                                          
                                            <li className='text-lg font-light flex items-center gap-4 max-lg:ml-[12%] box-text'>
                                                <span className='before:content-["•"] before:text-gray-400 before:mr-2 max-lg:hidden'>
                                                    Python
                                                </span>
                                                <Image
                                                    src={`/logos/python-logo.jpg`}
                                                    alt='figma'
                                                    loading='lazy'
                                                    width={30}
                                                    height={30}
                                                    className='rounded-xl'
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='box left-box bg-gradient-to-b from-[#F7E2E2] to-[#E5B7B7] dark:gradient flex-grow min-h-[50px] sm:min-h-[100px] rounded-lg'>
                                    <div className='flex flex-col justify-center text-sm sm:text-base md:text-lg font-medium h-full'>
                                        <div className='ml-2 sm:ml-4 md:ml-8 xl:ml-[18%] mxl:ml-24 max-lg:hidden flex flex-col'>
                                            <span className='font-medium text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl box-title text-zinc-900 dark:text-zinc-100'>
                                                Student
                                            </span>
                                            <span className='text-xs text-zinc-600 dark:text-zinc-300 lg:w-[50%] box-text'>
                                                At Sagarmatha College , IOST , Lalitpur
                                            </span>
                                        </div>
                                        <div className='ml-4 sm:ml-8 xl:ml-24 mt-2 flex gap-2 text-xs sm:text-sm text-green-600 dark:text-green-400 flex-col lg:flex-row lg:items-center box-text'>
                                            <span className='w-4 h-4 rounded-full bg-green-200 flex justify-center items-center'>
                                                <span className='w-3 h-3 rounded-full bg-green-400'></span>
                                            </span>
                                            <span className='text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm'>
                                                Open{' '}
                                                <br className='lg:hidden' /> For{' '}
                                                <br className='xl:hidden' />{' '}
                                                Work/
                                                <br className='mxl:hidden' />
                                                Internship
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box right-box bg-gradient-to-b from-[#E5F8D7] to-[#B7E590] dark:gradient flex justify-end flex-grow rounded-lg w-1/2 sm:ml-4'>
                                <div className='mr-2 sm:mr-8 md:mr-4 lg:mr-[6%] xl:mr-[12%] mxl:mr-[18%] flex flex-col lg:items-center xl:items-start'>
                                    <div className='flex flex-col mt-4 font-medium text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl'>
                                        <span className='relative right-0 sm:right-4 md:right-4 lg:right-10 box-title text-zinc-900 dark:text-zinc-100'>
                                            Full Stack
                                        </span>
                                        <span className='box-title text-zinc-900 dark:text-zinc-100'>
                                            Developer
                                        </span>
                                    </div>
                                    <ul className='mt-2 md:mt-4 ml-4 space-y-2'>
                                        {fullStackInfo.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`flex items-center max-lg:justify-center gap-1 md:gap-2 lg:gap-4 text-base font-light box-text text-zinc-900 dark:text-zinc-100
                                            ${
                                                [1, 4].includes(index)
                                                    ? 'xl:ml-4 lg:ml-1 ml-0'
                                                    : ''
                                            } 
                                            ${
                                                [2, 3].includes(index)
                                                    ? 'xl:ml-5 lg:ml-2 ml-0'
                                                    : ''
                                            }`}
                                            >
                                                <span className='before:content-["•"] before:text-gray-400 before:mr-4 max-lg:hidden'>
                                                    {item.tool}
                                                </span>
                                                <Image
                                                    src={item.image}
                                                    alt={item.tool}
                                                    loading='lazy'
                                                    width={30}
                                                    height={30}
                                                    className='rounded-xl'
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id='image'
                        className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[280px] sm:w-[330px] md:w-[380px] lg:w-[400px]'
                    >
                        {/* <Image
                            src=""
                            alt='photo'
                            width={800}
                            height={600}
                            priority={true}
                            quality={75}
                            sizes='(max-width: 640px) px, (max-width: 768px) 300px, (max-width: 1024px) 380px, 400px'
                            // className='w-full h-auto'
                        /> */}
                    </div>
                    <div
                        id='social'
                        className='absolute bottom-0 flex flex-col justify-center items-center gap-4 max-md:hidden font-Montserrat text-xs font-semibold'
                    >
                        <Link
                            href='https://x.com/learnobusek'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:scale-125 transition-transform duration-300 cursor-pointer group relative'
                        >
                            
                           
                            
                        </Link>
                        <Link
                            href='https://github.com/bcuAbhishek'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:scale-125 transition-transform duration-300 cursor-pointer group relative'
                        >
                            <FaGithub className='social-icon' size={20} />
                            <span className='absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                                Github
                            </span>
                        </Link>
                        <Link
                            href='https://www.linkedin.com/in/obusek-shrestha'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:scale-125 transition-transform duration-300 cursor-pointer group relative'
                        >
                            <BsLinkedin className='social-icon' size={20} />
                            <span className='absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                                LinkedIn
                            </span>
                        </Link>

                        <div className='w-[1px] h-32 dark:bg-white bg-black' />
                    </div>
                    <div
                        id='social'
                        className='absolute bottom-0 right-0 flex flex-col justify-center items-center gap-4 max-md:hidden font-Montserrat text-xs font-semibold'
                    >
                        <Link
                            href='mailto:learnobusek@gmail.com'
                            className='hover:scale-125 transition-transform duration-300 cursor-pointer group relative'
                        >
                            <IoMdMail className='social-icon' size={20} />
                            <span className='absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                                Email
                            </span>
                        </Link>
                        <button
                            onClick={handleResumeOpen}
                            className='hover:scale-125 transition-transform duration-300 cursor-pointer group relative'
                        >
                            <FileUserIcon className='social-icon' size={24} />
                            <span className='absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                                Resume
                            </span>
                        </button>

                        <div className='w-[1px] h-32 dark:bg-white bg-black' />
                    </div>
                </>
            )}
        </main>
    );
};

export default Profile;
