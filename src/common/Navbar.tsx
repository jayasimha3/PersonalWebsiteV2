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
        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="<em>Email</em>: jayasimha.3@osu.edu">
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
          Rishee Jayasimha | <a className="text-monospace text-muted" href="https://github.com/jayasimha3/jayasimha3.github.io/tree/master/assets/CHANGELOG.md">Version react2.0.3</a>
        </span>
      </div>
    </footer>
  );
}

//export { Navbar, Footer };
