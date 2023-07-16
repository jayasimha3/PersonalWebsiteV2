import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { HomepageImage, HomepageBody } from './homepage/Homepage.js';
import { Navbar } from './common/Navbar.js';

const currentEmployer = {
  employerName: "General Motors",
  employerLocation: "Warren, MI",
  employerImage: ""
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomepageBody></HomepageBody>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
