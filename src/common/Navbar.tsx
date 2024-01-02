import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Link } from 'react-router-dom'

const navbarMode = 'navbar navbar-expand-lg bg-dark'; // dark mode, need to switch bg- to light for light mode

function Navbar() {
    return (
      <nav class={ navbarMode }>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class='nav-link' href='/'>Home</a>
              </li>
              <li class="nav-item">
                <a class='nav-link' href='/employment'>Work Experience</a>
              </li>
              <li class="nav-item">
                <a class='nav-link' href='/projects'>Projects</a>
              </li>
              <li class="nav-item">
                <a class='nav-link' href='/extracurricular'>Extracurricular</a>
              </li>
            </ul>
          </div>
        </div>
        <a tabindex="0" class="btn btn-primary" role="button" data-toggle="popover" data-trigger="hover focus" data-placement="bottom" data-html="true" data-content="<em>Email</em>: jayasimha.3@osu.edu">
            Contact
        </a>
      </nav>
    )
  }

function Footer() {
  return (
    <footer class="navbar bg-dark navbar-expand-lg sticky-bottom">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <a class="navbar-brand" href="https://github.com/jayasimha3">
            <img src="../logo.svg" alt="" width="32" height="32" title="Github"></img>
          </a>
          <a class="navbar-brand" href="https://www.linkedin.com/in/jayasimha3/">
            <img src="../logo.svg" alt="" width="32" height="32" title="LinkedIn"></img>
          </a>
          <a class="navbar-brand" href="https://osu.joinhandshake.com/users/11578467">
            <img src="../logo.svg" alt="" width="32" height="32" title="Handshake"></img>
          </a>
          <a class="navbar-brand" href="https://my.indeed.com/p/risheej-w1nbb5b">
            <img src="../logo.svg" alt="" width="64" height="32" title="Indeed"></img>
          </a>
        </ul>
        <span class="navbar-text">
          Rishee Jayasimha | 
          <a class="text-monospace text-muted" href="https://github.com/jayasimha3/jayasimha3.github.io/tree/master/assets/CHANGELOG.md">Version react2.0.1</a>
        </span>
      </div>
    </footer>
  )
}

export { Navbar, Footer };
