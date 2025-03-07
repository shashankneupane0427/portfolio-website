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
        title: 'ING Tours and Travels',
        image: '/projects/ingtravels.png',
   
        description:
            'ING Travels is your go-to platform for planning unforgettable journeys! Discover a <strong>seamless</strong> and <strong>user-friendly</strong> travel experience with <strong>curated itineraries</strong>, <strong>booking services</strong>, and <strong>destination guides</strong>.',
        descriptionLink: '#',
        link: 'https://www.ingtoursandtravels.com/',
        stack: ['React JS', 'Tailwind CSS', 'React Router'],
    },
    {
        title: 'Nepscape',
        image: '/projects/nepscape.png',
    
        description:
            'Nepscape a cutting-edge <strong> software company </strong> dedicated to building innovative and scalable digital solutions. Our <strong> official website </strong>, built with Next.js, showcases our expertise, services, and vision for the tech-driven future.',
        descriptionLink: "#",
        link: 'https://nepscape.vercel.app/',
        stack: ['Next JS', 'React JS','TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'Climate Care Network',
        image: '/projects/ccn.png',

        description:
            '<strong>Climate Care Network (CCN)</strong> is the official website of the organization <strong>Climate Care Network</strong>, dedicated to actively raising awareness about <strong>climate change</strong> in the <strong>modern era</strong>.',
        descriptionLink: 'https://github.com/shashankneupane0427/Project-Climate',
        link: 'https://climatecarenetwork.vercel.app/',
        stack: ['React JS', 'Next JS', 'Tailwind CSS'],
    },


    {
        title: 'Eco Home',
        image: '/projects/eco.png',

        description:
            '<strong>Full-stack real estate platform</strong> built with the <strong>MERN stack</strong>. Features <strong>property listings</strong>, <strong>booking property</strong>, <strong>user authentication</strong>, and <strong>seamless search functionality</strong>.',
        descriptionLink: "https://github.com/shashankneupane0427/Eco-Home",
        link: "https://eco-home-real-estate.vercel.app/",
        stack: ['React JS', 'MongoDB', 'Tailwind CSS', 'Express JS', 'Node JS'],
    },
];

export const logos = [
    {
        src: '/logos/figma-logo.jpg',
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
