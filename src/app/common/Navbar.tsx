"use client"
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import Link from 'next/link'
import linkedin from '../../../public/images/employment/linkedin-blue.png'
import github from '../../../public/images/employment/github-white.svg'
import { links } from './Constants'
import { useState, useEffect } from 'react';
import { Popover } from "bootstrap";

const navbarMode = 'navbar navbar-expand-lg bg-dark'; // dark mode, need to switch bg- to light for light mode
const footerMode = 'navbar navbar-expand bg-dark sticky-bottom'; // dark mode, need to switch bg- to light for light mode

export function Navbar() {
    const [popovers, setPopovers] = useState([]);

    useEffect(() => {
      const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
      const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl));
      setPopovers(popoverList);
    }, []);
    
    return (
      <nav className={ navbarMode } data-bs-theme="dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/employment" className='nav-link'>Work Exprience</Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className='nav-link'>Projects</Link>
              </li>
            </ul>
          </div>
        </div>
        <a className="AppHeader-logo ml-2" href={links.websiteRepository} aria-label="Github Repository " data-turbo="false">
          <img src={github.src} alt="" width="32" height="32" title="Repository"></img>
        </a>
        <button type="button" className="btn btn-primary btn-sm ms-3 me-3" data-bs-toggle="popover" data-bs-custom-class="custom-popover" data-bs-placement="bottom" data-bs-html="true" data-bs-content={"<a class='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href='mailto:" + links.email + "'>Email</a>"}>
          Contact
        </button>
      </nav>
    );
  }

export function Footer() {
  return (
    <nav className={ footerMode } data-bs-theme="dark">
      {/* <div className="container-fluid flex-column">  */}
      <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <a className="navbar-brand" href={links.githubProfile}>
            <img src={github.src} alt="" width="32" height="32" title="Github"></img>
          </a>
          <a className="navbar-brand" href={links.linkedin}>
            <img src={linkedin.src} alt="" width="32" height="32" title="LinkedIn"></img>
          </a>
        </ul>
      </div>
      <span className="navbar-text text-end">
            Rishee Jayasimha | <a className="font-monospace text-muted" href={links.websiteRepository + "/blob/main/CHANGELOG.md"}>{process.env.NEXT_PUBLIC_VERSION}</a>
            {/* process.env.REACT_APP_VERSION comes from the REACT_APP_VERSION environment variable. 
            For development, it is located in .env.development.
            In the CI pipeline, environment variables through the shell will be used. */}
        </span>
      </div>
    </nav>
  );
}