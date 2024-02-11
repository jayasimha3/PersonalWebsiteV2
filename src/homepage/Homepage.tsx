import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import { rishee } from '../common/Constants';

function HomepageImage() {
    return (
        <img src='../static/img/homepage/jayasimharishee.jpg' className="img-fluid" alt={ rishee.name }></img>
    );
}

function HomepageBody() {
    return (
      <div className="container-xl bg-{ mode } flex">
          <main role="main" className="inner cover">
            <div className="card mb-3 main-card border-0" >
              <div className="d-flex flex-wrap no-gutters">
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="cover-heading">{ rishee.name }</h1>
                    <p className="lead">
                      I am Rishee Jayasimha, a B.S. Computer Science and Engineering alumnus of The Ohio State University in Columbus, OH, and currently working as a software developer at General Motors.
                      I have completed many projects including using machine learning to rank college football teams, creating an AI-assisted kitchen assistant,
                      and creating a database for a library. I am a motivated person who enjoys being challenged; I have programmed in SQL, Java, C, and Python, among other langauges.                
                    </p>
                    <p className="home text-muted">
                      Some extracurricular activities I enjoy are playing video games, playing board games, and playing my trumpet. I have auditioned for The Ohio State University Marching Band 
                      (TBDBITL) and participated in Athletic Band and concert bands at Ohio State.
                    </p>
                    <p className="home text-muted">
                      I am not actively seeking employment opportunities, but will consider any opportunities I might recieve.               
                    </p>
                    <p className="lead">
                      <a href="/about" className="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 flex">
                  <HomepageImage></HomepageImage>
                </div>
              </div>
            </div>
          </main>
      </div>
    )
  }

export { HomepageImage, HomepageBody };
