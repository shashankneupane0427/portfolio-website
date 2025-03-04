'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { LuExternalLink } from 'react-icons/lu';
import { SiReaddotcv } from 'react-icons/si';
import { toast } from 'react-toastify';

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        descriptionLink: string | null;
        image?: string;
      
        link: string | null;
        video?: string;
        stack?: string[];
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const shouldReduceMotion = useReducedMotion();
    const { ref, inView } = useInView({
        threshold: 0.03,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={cn(
                'grid grid-cols-1 md:grid-cols-2 pt-4 pb-8',
                className
            )}
        >
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                delay: shouldReduceMotion ? 0 : idx * 0.2,
                                ease: [0.215, 0.61, 0.355, 1],
                            },
                        },
                    }}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <div
                        className='relative group block p-2 h-full w-full'
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence mode='wait'>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className='absolute inset-0 h-full w-full bg-slate-300 dark:bg-slate-800/[0.8] block rounded-3xl'
                                    layoutId='hoverBackground'
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 0.15,
                                        },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <div className='relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-slate-300 dark:border-slate-700'>
                                {item.video ? (
                                    <video
                                        src={item.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className='h-full  mx-auto transition-transform duration-500 ease-out group-hover:scale-105'
                                    />
                                ) : (
                                    <Image
                                        src={item.image || ''}
                                        alt={item.title}
                                       
                                        fill
                                        className='object-cover transition-transform duration-500 ease-out  group-hover:scale-105'
                                        sizes='(max-width: 768px) 100vw, 50vw'
                                    />
                                )}
                            </div>
                            <div className='flex flex-col gap-4 mt-4'>
                                <CardTitle className='border-b flex px-1 border-slate-200 dark:border-slate-700 pb-4'>
                                    {item.title}   
                                </CardTitle>
                                <CardStack>{item.stack}</CardStack>
                                <CardDescription className='border-b border-slate-200 dark:border-slate-700 pb-4'>
                                    {item.description}
                                </CardDescription>
                            </div>

                            <div className='mt-4 flex justify-between'>
                                <ProjectLink
                                    icon={<SiReaddotcv className='w-4 h-4' />}
                                    text='Read more'
                                    onClick={() => {
                                        if (item.descriptionLink !== null) {
                                            window.open(
                                                item.descriptionLink,
                                                '_blank'
                                            );
                                        } else {
                                            toast.error(
                                                'Project Description not available yet!'
                                            );
                                        }
                                    }}
                                    isHovered={hoveredIndex === idx}
                                />
                                <ProjectLink
                                    href={item.link || undefined}
                                    icon={
                                        <LuExternalLink className='w-4 h-4' />
                                    }
                                    text='View Project'
                                    isHovered={hoveredIndex === idx}
                                    onClick={() => {
                                        if (item.link === null) {
                                            toast.error(
                                                'Project Link not available yet!'
                                            );
                                        } else {
                                            window.open(item.link, '_blank');
                                        }
                                    }}
                                />
                            </div>
                        </Card>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                'rounded-2xl h-full w-full p-4 bg-white dark:bg-black overflow-hidden border border-transparent border-slate-200 dark:border-white/[0.2] dark:group-hover:border-slate-700 group-hover:border-slate-500 relative z-20',
                className
            )}
        >
            <div className='relative z-50'>
                <div className='p-4'>{children}</div>
            </div>
        </div>
    );
};

const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                'dark:text-zinc-100 text-zinc-800 font-medium tracking-wide text-xl font-Audiowide',
                className
            )}
        >
            {children}
        </h4>
    );
};

const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                'dark:text-zinc-200 text-zinc-700 tracking-wide leading-relaxed text-sm',
                className
            )}
            dangerouslySetInnerHTML={{ __html: children as string }}
        />
    );
};

const CardStack = ({
    className,
    children,
}: {
    className?: string;
    children?: string[];
}) => {
    if (!children) return null;

    return (
        <div className={cn(' flex flex-wrap gap-2', className)}>
            {children.map((tech, index) => (
                <span
                    key={index}
                    className='px-2 py-1 text-xs font-medium rounded-full 
                    bg-slate-100 dark:bg-slate-800 
                    text-slate-800 dark:text-slate-200
                    border border-slate-300 dark:border-slate-700
                    transition-colors duration-200
                    hover:bg-slate-200 dark:hover:bg-slate-700'
                >
                    {tech}
                </span>
            ))}
        </div>
    );
};

const ProjectLink = ({
    href,
    onClick,
    icon,
    text,
    isHovered,
}: {
    href?: string;
    onClick?: () => void;
    icon: React.ReactNode;
    text: string;
    isHovered: boolean;
}) => {
    const content = (
        <motion.div
            className='flex items-center gap-2 text-sm cursor-pointer dark:text-zinc-400 text-zinc-900 transition-colors duration-200 hover:text-zinc-100'
            whileHover={{ x: 5 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
            }}
        >
            <motion.div
                className='h-px bg-current'
                initial={{ width: '1rem' }}
                animate={{
                    width: isHovered ? '2rem' : '1rem',
                }}
                transition={{ duration: 0.2 }}
            />
            <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -10,
                }}
                transition={{ duration: 0.2 }}
                className='flex items-center gap-2'
            >
                <span className='whitespace-nowrap max-sm:text-xs'>{text}</span>

                {icon}
            </motion.span>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} target='_blank' rel='noopener noreferrer'>
                {content}
            </Link>
        );
    }

    return <div onClick={onClick}>{content}</div>;
};
