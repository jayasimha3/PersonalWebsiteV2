import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import { rishee } from '../common/Constants';
import headshot from '../static/images/me/jayasimharishee.jpg';

const homepage_card_style: React.CSSProperties = {
  //maxHeight: "50%",
  maxWidth: "1440px"
};

function HomepageImage() {
    return (
        <img src={headshot} className="img-fluid" alt={rishee.name}></img>
    );
}

function HomepageBody() {
    return (
      <div className="d-flex justify-content-evenly">
        <div className="border border-0 card flex" style={homepage_card_style}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title display-2">{rishee.name}</h2>
                <p className="lead card-text">
                  I am Rishee Jayasimha, a cloud developer at General Motors in Detroit, MI.
                </p>
                <div className="col justify-content-start">
                  <h5>About</h5>
                  <p>
                    I am a graduate of The Ohio State University in Columbus, OH, graduating with a B.S. Computer Science and Engineering degree in 2020.
                    I have experience with HTML, Python, Java, Kubernetes, Azure, and more. I also like building Lego sets, reading, playing video games, and tinkering with my homelab in my free time.    
                  </p>
                  <a className="btn btn-outline-info" href="/about" type="button">Learn More</a>
                </div>
                <div className="col justify-content-start mt-3">
                  <h5>Career</h5>   
                  <p className="card-text">
                    I have worked at General Motors since 2021, joining the Storage Automation team as a software developer, then moving to the development team for the GM internal cloud in 2022. I worked on various projects to drive more automation that reduced risk and increased efficiency.
                    Some areas I worked on include Kubernetes, Postgres, Azure, and Generative AI applications.
                  </p>
                  <a className="btn btn-outline-info" href="/employment" type="button">Learn More</a>
                </div>
                <div className="col justify-content-start mt-3">
                  <h5>Projects</h5>   
                  <p className="card-text">
                    Some projects I've worked on include this website, large language model evaluation, chatbots, cloud platform migrations, Spring Framework applications, and more.
                  </p>
                  <a className="btn btn-outline-info" href="/projects" type="button">Learn More</a>
                </div>
                <div className="col justify-content-start mt-3">
                  <h5>Other Interests and Hobbies</h5>   
                  <p className="card-text">
                    I like working on my home server, coding, building Lego sets, and playing tabletop and video games during my free time. I love to build things and break things, whether it's something I built with Legos, or an application on my server or one I built.
                  </p>
                  <a className="btn btn-outline-info" href="/extracurricular" type="button">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col justify-content-end">
              <HomepageImage></HomepageImage>
            </div>
          </div>
        </div>
      </div>
    )
  }

export { HomepageBody };
