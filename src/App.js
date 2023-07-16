import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const rishee = {
  name: "Rishee",
  currentWork: "Software Developer",
}

const currentEmployer = {
  employerName: "General Motors",
  employerLocation: "Warren, MI",
  employerImage: ""
}

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainBody></MainBody>
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

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function MainBody() {
  return (
    <div class="container-xl" flex>
        <main role="main" class="inner cover">
          <div class="card mb-3 main-card border-0" >
            <div class="d-flex flex-wrap no-gutters">
              <div class="col-md-8">
                <div class="card-body">
                  <h1 class="cover-heading">Rishee Jayasimha</h1>
                  <p class="lead">
                    I am Rishee Jayasimha, a B.S. Computer Science and Engineering alumnus of The Ohio State University in Columbus, OH, and currently working as a software developer at General Motors.
                    I have completed many projects including using machine learning to rank college football teams, creating an AI-assisted kitchen assistant,
                    and creating a database for a library. I am a motivated person who enjoys being challenged; I have programmed in SQL, Java, C, and Python, among other langauges.                
                  </p>
                  <p class="home text-muted">
                    Some extracurricular activities I enjoy are playing video games, playing board games, and playing my trumpet. I have auditioned for The Ohio State University Marching Band 
                    (TBDBITL) and participated in Athletic Band and concert bands at Ohio State.
                  </p>
                  <p class="home text-muted">
                    I am not actively seeking employment opportunities, but will consider any opportunities I might recieve.               
                  </p>
                  <p class="lead">
                    <a routerLink="/about" class="btn btn-lg btn-secondary">Learn more</a>
                  </p>
                </div>
              </div>
              <div class="col-md-4" flex>
                <img src="./assets/me/jayasimharishee.jpg" class="card-img" alt="Rishee Jayasimha"></img>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default App;
