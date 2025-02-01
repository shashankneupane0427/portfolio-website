import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';

const Navigation = () => {
  const [showMobileNav, setMobileNav] = useState(false);

  const burgerClickHandler = () => {
    setMobileNav((prevValue) => !prevValue);
    document.querySelector('.navigation__hiddenNav')?.classList.toggle('shown');
    document
      .querySelector('.navigation__wrapper')
      ?.classList.toggle('navigation__wrapper-fixed');
    document.getElementById('burger-container')?.classList.toggle('open');
  };

  return (
    <header className="navigation__wrapper">
      <div className="limit-width-lg navigation">
        <nav className="navigation__mainNav">
          <ul className="navigation__navlinks">
            <li>
              <NavLink exact className="navigation__navlink" href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navigation__navlink" href="/projects">
                Projects
              </NavLink>
            </li>

           
            <li>
              <NavLink className="navigation__navlink" href="/#contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Nav */}
        <nav className="navigation__hiddenNav">
          <ul className="navigation__hiddenNav__navlinks">
            <li>
              <Link href="/">
                <a className="navigation__hiddenNav__navlink">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="navigation__hiddenNav__navlink">Projects</a>
              </Link>
            </li>
      

            <li>
              <a
                className="navigation__hiddenNav__navlink"
                href="/samip-poudel-resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button
        aria-label="toggle menu"
        id="burger-container"
        onClick={burgerClickHandler}
        tabIndex={0}
      >
        {showMobileNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        )}
      </button>
    </header>
  );
};

export default Navigation;
