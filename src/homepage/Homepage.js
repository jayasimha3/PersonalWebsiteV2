import 'bootstrap/dist/css/bootstrap.css';

import me from '../static/img/homepage/jayasimharishee.jpg';
import { rishee } from '../common/Constants.js';

function HomepageImage() {
    return (
        <img src={ me } class="img-fluid" alt={ rishee.name }></img>
    );
}

function HomepageBody() {
    return (
      <div class="container-xl" flex>
          <main role="main" class="inner cover">
            <div class="card mb-3 main-card border-0" >
              <div class="d-flex flex-wrap no-gutters">
                <div class="col-md-8">
                  <div class="card-body">
                    <h1 class="cover-heading">{ rishee.name }</h1>
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
                  <HomepageImage></HomepageImage>
                </div>
              </div>
            </div>
          </main>
      </div>
    )
  }

export { HomepageImage, HomepageBody };
