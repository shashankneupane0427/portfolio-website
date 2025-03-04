import { logos, projects } from '@/utils';
import { IconCloud } from './ui/icon-cloud';
import Image from 'next/image';
import { LuArrowUpRight } from 'react-icons/lu';
import { motion } from 'framer-motion';

export const NavbarProfile = () => {
    return (
        <div className='size-56 flex flex-col justify-center items-center'>
            <IconCloud images={logos.map((logo) => logo.src)} />
            <p className='absolute text-2xl font-bold'>My Stacks</p>{' '}
        </div>
    );
};

export const NavbarProjects = () => {
    return (
        <div className='grid grid-cols-2 gap-4 max-w-2xl backdrop-blur-lg rounded-xl'>
            {projects.map((project, index) => (
                <motion.a
                    key={index}
                    href={project.link || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-black/10 dark:border-white/10'
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className='relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg'>
                        
                        <div className='absolute inset-0' />
                    </div>

                    <div className='flex flex-col flex-grow min-w-0'>
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='text-sm font-medium truncate dark:text-white/90'>
                                {project.title}
                            </h2>
                            <LuArrowUpRight className='w-4 h-4 dark:text-white/50 transition-transform duration-300 dark:group-hover:text-white/90 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                        </div>
                        <p
                            className='font-Montserrat mt-1 text-xs text-left text-black/70 dark:text-white/70 line-clamp-2'
                            dangerouslySetInnerHTML={{
                                __html: project.description,
                            }}
                        />
                    </div>

                    <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-300' />
                </motion.a>
            ))}
        </div>
    );
};

export const NavbarAbout = () => {
    return (
        <div className='flex flex-col items-center gap-4 p-2'>
            <div className='text-center'>
                <h3 className='text-xl font-medium mb-2 ml-2 flex items-center justify-center '>
                    Let&apos;s Connect
                    <span className='animate-wave inline-block'>👋</span>
                </h3>
                <p className='text-sm font-Montserrat max-w-64 text-zinc-600 dark:text-zinc-400'>
                    Feel free to reach out for collaborations or just a friendly
                    hello.
                </p>
            </div>
        </div>
    );
};
