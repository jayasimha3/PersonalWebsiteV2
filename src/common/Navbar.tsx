import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Link } from 'react-router-dom'

const navbarMode = 'navbar navbar-expand-lg bg-dark'; // dark mode, need to switch bg- to light for light mode

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
              <li className="nav-item">
                <Link to="/extracurricular" className='nav-link'>Extracurricular</Link>
              </li>
            </ul>
          </div>
        </div>
        <a className="AppHeader-logo ml-2" href="https://github.com/jayasimha3/PersonalWebsiteV2" aria-label="Github Repository " data-turbo="false">
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </a>
        <button type="button" className="btn btn-primary btn-sm ms-3 me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<em>Email</em>: jayasimha.3@osu.edu">
          Contact
        </button>
      </nav>
    );
  }

export function Footer() {
  return (
    <footer className="navbar bg-dark navbar-expand-lg sticky-bottom position-absolute bottom-0">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <a className="navbar-brand" href="https://github.com/jayasimha3">
            <img src="../logo.svg" alt="" width="32" height="32" title="Github"></img>
          </a>
          <a className="navbar-brand" href="https://www.linkedin.com/in/jayasimha3/">
            <img src="../logo.svg" alt="" width="32" height="32" title="LinkedIn"></img>
          </a>
          <a className="navbar-brand" href="https://osu.joinhandshake.com/users/11578467">
            <img src="../logo.svg" alt="" width="32" height="32" title="Handshake"></img>
          </a>
          <a className="navbar-brand" href="https://my.indeed.com/p/risheej-w1nbb5b">
            <img src="../logo.svg" alt="" width="64" height="32" title="Indeed"></img>
          </a>
        </ul>
        <span className="navbar-text">
          Rishee Jayasimha | <a className="text-monospace text-muted" href="https://github.com/jayasimha3/PersonalWebsiteV2/blob/main/CHANGELOG.md">Version react2.0.5</a>
        </span>
      </div>
    </footer>
  );
}

//export { Navbar, Footer };
