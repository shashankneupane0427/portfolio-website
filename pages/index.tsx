import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Project from '../components/Project';
import MetaHead from '../components/MetaHead';
import Skills from '../components/Skills';
import projectsData from '../data/projects.json';

const Home: NextPage = () => {
  return (
    <div>
     <MetaHead/>


      <Intro />

      <section className="projects limit-width-lg">
        <h2 className="text-left heading-lg">Projects</h2>
        <p className="paragraph mb-8">
          These are some of the projects that I have built over the years that
          reflect my passion in software and design.
        </p>
        {projectsData.map((project, index) => {
          if (index >= 3) return null;
          return (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              stacks={project.stacks}
              link={project.link}
              index={index}
              github={project.github}
            />
          );
        })}
        <div className="projects__allProjects">
          <Link href="/projects" aria-label="see more projects by Samip Poudel">
            <a>
              <span>More Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </section>

      <Skills />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
