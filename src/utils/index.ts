export interface Project {
    title: string;
    description: string;
    descriptionLink: string | null; 
    image?: string;
    link: string | null; 
    video?: string;
    stack?: string[];
}

export const projects: Project[] = [
    {
        title: 'PathaoSync',
        video: '/videos/pathao-sync.mp4',
        image: '/projects/pathao-sync.png',
        description:
            'A <strong>full-stack ride-hailing</strong> application that connects riders with nearby drivers, similar to Uber/Ola. The application provides <strong>real-time location tracking</strong>, <strong>ride matching</strong>, and <strong>fare calculation</strong>.',
        descriptionLink: 'https://github.com/bcuAbhishek/PathaoSync',
        link: 'https://github.com/bcuAbhishek/PathaoSync',
        stack: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'Socket.io'],
    },
    {
        title: 'Portfolio Website',
        image: '/projects/portfolio.png',
        description:
            'Portfolio website built with <strong>Next.js</strong>, <strong>Aceternity UI</strong>, <strong>Shadcn UI</strong>, and <strong>GSAP</strong> animations.',
        descriptionLink: null,
        link: 'https://obuseklearns.me',
        stack: ['Next JS', 'Aceternity UI', 'Shadcn UI', 'GSAP'],
    },

    {
        title: 'Admin Dashboard',
        image: '/projects/dashboard.png',
        description:
            'A <strong>modern, responsive</strong> admin dashboard built with <strong>React</strong> and <strong>Tailwind CSS</strong>, featuring <strong>real-time analytics</strong>, <strong>data visualization</strong>, and a clean user interface.',
        descriptionLink: 'https://github.com/bcuAbhishek/React-Admin-Dashboard',
        link: 'https://bcuabhishek.github.io/React-Admin-Dashboard/',
        stack: ['React JS', 'Tailwind CSS', 'React Router'],
    },

    {
        title: 'Twitter Clone',
        image: '/projects/twitter.jpg',
        description:
            'A <strong>full-stack Twitter clone</strong> built with <strong>React</strong>, <strong>Firebase</strong>, and <strong>Tailwind CSS</strong>, featuring real-time updates and user authentication.',
        descriptionLink: null,
        link: null,
        stack: ['React JS', 'MongoDB', 'Tailwind CSS', 'Express JS', 'Node JS'],
    },
];

export const logos = [
    {
        src: '/logos/figma-logo.jpg',
        srcDark: '/logos/figma-dark.jpg',
        alt: 'Figma Logo',
    },
    {
        src: '/logos/react-logo.jpg',
        srcDark: '/logos/react-dark.jpg',
        alt: 'React Logo',
    },
    {
        src: '/logos/tailwind-logo.jpg',
        alt: 'Tailwind CSS Logo',
    },
    {
        src: '/logos/github-logo.jpg',
        alt: 'GitHub Logo',
    },
    {
        src: '/logos/js-logo.jpg',
        alt: 'JavaScript Logo',
    },
    {
        src: '/logos/ts-logo.jpg',
        alt: 'TypeScript Logo',
    },
    {
        src: '/logos/mongodb-logo.jpg',
        alt: 'MongoDB Logo',
    },
    {
        src: '/logos/nextjs-logo.jpg',
        alt: 'Next.js Logo',
    },
    {
        src: '/logos/nodejs-logo.jpg',
        alt: 'Node.js Logo',
    },
    {
        src: '/logos/npm-logo.jpg',
        alt: 'NPM Logo',
    },
    {
        src: '/logos/python-logo.jpg',
        alt: 'Python Logo',
    },
    {
        src: '/logos/vite-logo.jpg',
        alt: 'Vite Logo',
    },
    {
        src: '/logos/postgresql-logo.jpg',
        alt: 'PostgreSQL Logo',
    },
];

export const fullStackInfo = [
    {
        tool: 'Next JS',
        image: '/logos/nextjs-logo.jpg',
    },
    {
        tool: 'React JS',
        image: '/logos/react-logo.jpg',
    },
    {
        tool: 'Node JS',
        image: '/logos/nodejs-logo.jpg',
    },
    {
        tool: 'Express JS',
        image: '/logos/js-logo.jpg',
    },
    {
        tool: 'MongoDB',
        image: '/logos/mongodb-logo.jpg',
    },

    {
        tool: 'PostgreSQL',
        image: '/logos/postgresql-logo.jpg',
    },
];
