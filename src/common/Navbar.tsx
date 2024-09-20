import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../static/images/employment/linkedin-blue.png'
import github from '../static/images/employment/github-white.svg'

const navbarMode = 'navbar navbar-expand-lg bg-dark'; // dark mode, need to switch bg- to light for light mode
const footerMode = 'navbar navbar-expand-lg bg-dark fixed-bottom'; // dark mode, need to switch bg- to light for light mode

export function Navbar() {
    return (
      <nav className={ navbarMode }>
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/employment" className='nav-link'>Work Exprience</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className='nav-link'>Projects</Link>
              </li>
            </ul>
          </div>
        </div>
        <a className="AppHeader-logo ml-2" href="https://github.com/jayasimha3/PersonalWebsiteV2" aria-label="Github Repository " data-turbo="false">
          <img src={github} alt="" width="32" height="32" title="Repository"></img>
        </a>
        <button type="button" className="btn btn-primary btn-sm ms-3 me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<em>Email</em>: jayasimha.3@osu.edu">
          Contact
        </button>
      </nav>
    );
  }

export function Footer() {
  return (
    <nav className={footerMode}>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <a className="navbar-brand" href="https://github.com/jayasimha3">
            <img src={github} alt="" width="32" height="32" title="Github"></img>
          </a>
          <a className="navbar-brand" href="https://www.linkedin.com/in/jayasimha3/">
            <img src={linkedin} alt="" width="32" height="32" title="LinkedIn"></img>
          </a>
        </ul>
      </div>
      <span className="navbar-text text-end">
            Rishee Jayasimha | <a className="font-monospace text-muted" href="https://github.com/jayasimha3/PersonalWebsiteV2/blob/main/CHANGELOG.md">Version react2.0.7</a>
        </span>
      </div>
    </nav>
  );
}

//export { Navbar, Footer };
