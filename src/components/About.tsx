'use client';

import React from 'react';
import { CircleUserRound, Layers } from 'lucide-react';
import Image from 'next/image';
import { logos } from '@/utils';
import { IoSend } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    function getNepalTime() {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Kathmandu',
            hour: '2-digit' as const,
            minute: '2-digit' as const,
            hour12: false,
        };
        return new Intl.DateTimeFormat('en-US', options).format(now);
    }

    const time = getNepalTime();

    const containerVariants = {
        hidden: { opacity: 0.3 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                duration: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
            },
        },
    };

    const textRevealVariants = {
        hidden: { y: '100%' },
        visible: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className='relative z-10 px-4'
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
        >
            <div className='max-w-5xl my-4 mx-auto'>
                <motion.div
                    variants={itemVariants}
                    className='overflow-hidden mb-4'
                >
                    <motion.h1
                        variants={textRevealVariants}
                        className='text-2xl sm:text-3xl md:text-5xl font-bold text-center'
                    >
                        About Me
                    </motion.h1>
                </motion.div>

                <div className='grid grid-cols-3 md:grid-cols-5 gap-4 auto-rows-auto md:grid-areas-layout md:grid-rows-[auto_auto_auto_140px]'>
                    {/* Bio Card */}
                    <motion.div
                        variants={itemVariants}
                        className='col-span-full sm:col-span-3 md:col-span-3 sm:row-span-2 md:row-span-2 md:grid-in-bio dark:bg-[#191919] bg-white border-2 dark:border-gray-800 border-gray-100 rounded-3xl p-4 shadow-lg transition-all duration-300'
                    >
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-3 mb-2 overflow-hidden'>
                                <motion.h2
                                    variants={textRevealVariants}
                                    className='text-lg sm:text-xl md:text-3xl font-bold'
                                >
                                    👋 I&apos;m Abhishek Shrestha
                                </motion.h2>
                            </div>
                            <div className='overflow-hidden'>
                                <motion.div
                                    variants={textRevealVariants}
                                    className='font-Montserrat dark:text-zinc-300 leading-relaxed text-sm flex flex-col gap-2'
                                >
                                    <p>
                                        A <strong>Full Stack Developer</strong>{' '}
                                        passionate about building
                                        <strong>efficient, scalable</strong> web
                                        applications. Skilled in{' '}
                                        <strong>
                                            Next.js, TypeScript, React.js,
                                            Node.js, Express.js, MongoDB,
                                            PostgreSQL, and Prisma
                                        </strong>
                                        , I enjoy solving{' '}
                                        <strong>complex problems</strong> and
                                        crafting seamless user experiences.
                                    </p>
                                    <p>
                                        Currently pursuing my{' '}
                                        <strong>
                                            Bachelor&apos;s at 
                                        </strong>{' '}
                                        (affiliated with{' '}
                                        <strong>
                                            Birmingham City University, UK
                                        </strong>
                                        ), I&apos;m eager to apply my skills in{' '}
                                        <strong>
                                            real-world projects and internships
                                        </strong>
                                        . Always{' '}
                                        <strong>
                                            learning, exploring new
                                            technologies, and contributing to
                                            open-source
                                        </strong>
                                        , I thrive in{' '}
                                        <strong>
                                            fast-paced, collaborative
                                            environments
                                        </strong>
                                        .
                                    </p>
                                    <p>
                                        If you&apos;re looking for a{' '}
                                        <strong>
                                            driven and innovative developer
                                        </strong>
                                        , let&apos;s connect! 🚀
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        variants={itemVariants}
                        className='hidden sm:block sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-3 md:grid-in-gif bg-white dark:bg-[#191919] rounded-3xl shadow-lg transition-all duration-300 overflow-hidden'
                    >
                        <div className='relative w-full h-full min-h-[440px] overflow-hidden'>
                            <Image
                                src='/IMG20241212131242-ANIMATION.gif'
                                alt='Profile Animation'
                                fill
                                className='object-cover scale-150'
                                quality={100}
                                priority
                                unoptimized
                            />
                        </div>
                    </motion.div>

                    {/* Chat Card */}
                    <motion.div
                        variants={itemVariants}
                        className='col-span-full sm:col-span-2 md:col-span-2 sm:row-span-2 md:row-span-2 md:grid-in-chat dark:bg-[#191919] bg-white rounded-3xl p-4 border-2 dark:border-gray-800 border-gray-100 shadow-lg transition-all duration-300'
                    >
                        <div className='h-full flex flex-col gap-3 font-Montserrat'>
                            <div className='flex items-start gap-3'>
                                <CircleUserRound className='w-6 md:w-8 h-6 md:h-8 text-gray-400 mt-2' />
                                <div className='overflow-hidden'>
                                    <motion.p
                                        variants={textRevealVariants}
                                        className='text-sm rounded-xl py-3 px-4 bg-gray-100 dark:bg-zinc-800 w-[85%]'
                                    >
                                        You&apos;re just a student—why should we
                                        take a chance on you?
                                    </motion.p>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='overflow-hidden w-[85%]'>
                                    <motion.p
                                        variants={textRevealVariants}
                                        className='text-sm rounded-xl py-3 px-4 text-white bg-gradient-to-r from-blue-500 to-purple-500'
                                    >
                                        Every expert was once a beginner. I
                                        bring fresh ideas, relentless curiosity,
                                        and a drive to prove my worth. I
                                        don&apos;t just adapt—I innovate. If you
                                        want someone who thinks outside the box
                                        and grows fast, I&apos;m your candidate.
                                    </motion.p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center mt-auto'>
                                <div className='rounded-xl bg-gray-100 dark:bg-zinc-800 flex-1 py-4'></div>
                                <IoSend className='w-5 h-5 cursor-pointer text-purple-500' />
                            </div>
                        </div>
                    </motion.div>

                    {/* Time Card */}
                    <motion.div
                        variants={itemVariants}
                        className='hidden md:block md:col-span-1 md:row-span-1 md:grid-in-time font-Audiowide'
                    >
                        <div className='h-full flex flex-col overflow-hidden'>
                            <motion.h2
                                variants={textRevealVariants}
                                className='text-4xl font-bold mb-2'
                            >
                                {time}
                            </motion.h2>
                            <motion.p
                                variants={textRevealVariants}
                                className='font-Montserrat text-sm opacity-80'
                            >
                                Nepal&apos;s Local Time
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Tech Stack Card */}
                    <motion.div
                        variants={itemVariants}
                        className='relative col-span-full sm:col-span-3 md:col-span-3 md:grid-in-stack p-[2px] rounded-3xl bg-gradient-to-r from-blue-300 to-purple-300 shadow-lg transition-all duration-300'
                    >
                        <div className='h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-4'>
                            <div className='h-full flex flex-col'>
                                <div className='flex items-center gap-3 mb-4 overflow-hidden'>
                                    <Layers className='w-5 md:w-6 h-5 md:h-6 text-white' />
                                    <motion.h2
                                        variants={textRevealVariants}
                                        className='text-lg md:text-xl font-bold text-white'
                                    >
                                        My Tech Stack
                                    </motion.h2>
                                </div>
                                <div className='overflow-hidden w-full relative'>
                                    <div className='group relative flex overflow-hidden w-full'>
                                        <ul className='flex gap-8 whitespace-nowrap animate-scroll'>
                                            {[...logos, ...logos].map(
                                                (logo, index) => (
                                                    <li
                                                        key={index}
                                                        className='flex-shrink-0 bg-white dark:bg-[#191919] p-2 rounded-xl'
                                                    >
                                                        <Image
                                                            src={logo.src}
                                                            alt={logo.alt}
                                                            width={40}
                                                            height={40}
                                                            className='rounded-lg'
                                                        />
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
