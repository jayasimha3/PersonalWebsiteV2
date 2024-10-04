import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { Link } from 'react-router-dom'
import linkedin from '../static/images/employment/linkedin-blue.png'
import github from '../static/images/employment/github-white.svg'
import { links } from './Constants'

const navbarMode = 'navbar navbar-expand-lg bg-dark'; // dark mode, need to switch bg- to light for light mode
const footerMode = 'navbar navbar-expand bg-dark sticky-bottom'; // dark mode, need to switch bg- to light for light mode

export function Navbar() {
    return (
      <nav className={ navbarMode } data-bs-theme="dark">
        <div className="container-fluid">
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
        <a className="AppHeader-logo ml-2" href={links.websiteRepository} aria-label="Github Repository " data-turbo="false">
          <img src={github} alt="" width="32" height="32" title="Repository"></img>
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
            <img src={github} alt="" width="32" height="32" title="Github"></img>
          </a>
          <a className="navbar-brand" href={links.linkedin}>
            <img src={linkedin} alt="" width="32" height="32" title="LinkedIn"></img>
          </a>
        </ul>
      </div>
      <span className="navbar-text text-end">
            Rishee Jayasimha | <a className="font-monospace text-muted" href={links.websiteRepository + "/blob/main/CHANGELOG.md"}>Version 2.1-rc2</a>
        </span>
      </div>
    </nav>
  );
}