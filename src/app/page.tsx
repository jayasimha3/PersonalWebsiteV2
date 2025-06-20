import 'bootstrap/dist/css/bootstrap.css';
import './common/styles.css';
import { rishee } from './common/Constants';
import headshot from '../../public/images/me/jayasimharishee.jpg';
import Link from 'next/link'

const homepage_card_style: React.CSSProperties = {
  //maxHeight: "50%",
  maxWidth: "1440px"
};

function HomepageImage() {
    return (
        <img src={headshot.src} className="img-fluid rounded mt-5" alt={rishee.name}></img> // eslint-disable-line @next/next/no-img-element
    );
}

export default function HomepageBody() {
    return (
      <div className="d-flex justify-content-evenly">
        <div className="border border-0 card flex" style={homepage_card_style}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title display-2">{rishee.name}</h2>
                <p className="lead card-text">
                  I am Rishee Jayasimha, a software engineer at General Motors in Michigan.
                </p>
                <div className="col justify-content-start">
                  <h5>About</h5>
                  <p>
                    I am a graduate of The Ohio State University in Columbus, OH, earning a Bachelor's of Science in Computer Science and Engineering degree in 2020.
                    <br></br><br></br>
                    While at Ohio State, I took classes artificial intelligence/machine learning, game design, computer architecture, database systems, and was a teaching assistant for an introductory Java class for 4 semesters.
                    I was briefly a part of the Game Creation Club, and did various musical activities, including playing in the Athletic Band for 6 semesters, playing in the University Band for 5 semesters, and auditioning for The Ohio State University Marching Band in 4 of my 5 years.  
                    <br></br><br></br>
                    I have experience in various languages such as Python and Java, and have experience using various tools such as Kubernetes, Azure, Spring Framework, and Django.
                    Some projects I've done include a portfolio website, a self-hosted Kubernetes cluster, and a self-service tool for IT workers.
                  </p>
                </div>
                <div className="mt-3">
                    <h5>Career</h5>  
                    <p className="card-text">
                        I have worked at General Motors in Warren, MI, since 2021. I started with an operations focused Storage Automation team as a software developer, then moved to the development team for the GM internal cloud in 2022. 
                        I worked on various projects to drive more automation that reduced risk and increased efficiency, including creating APIs to automate service request processing, reconfiguring microservices to run on Kubernetes, and creating a chatbot using GPT and Azure AI for developers.
                    </p>
                    <Link className="btn btn-outline-info" href="/employment" type="button">Learn More</Link>
                </div>
                <div className="mt-3">
                    <h5>Projects</h5>   
                    <p className="card-text">
                        I have worked on various different projects at GM, Ohio State, and on my own.
                        Some GM Projects I've worked on include creating a problem tracking solution within Jira, creating a RAG chatbot using Azure AI, and migrating applications from a cloud-foundry platform to Kubernetes.
                        At Ohio State, I created a Kitchen Assistant and used machine learning to determine the best college football teams based on statistics.
                    </p>
                    <Link className="btn btn-outline-info" href="/projects" type="button">Learn More</Link>
                </div>
                <div className="mt-3">
                    <h5>Other Interests and Hobbies</h5>   
                    <p className="card-text">
                        During my free time outside of work, I like programming, and working with my homelab, on which I currently host a Kubernetes cluster to host self hosted open source applications such as Ollama, Jellyfin, and more.
                        I also like reading, building Lego sets, playing my trumpet (I'm part of the Rochester Community Concert Band as of September 2024), baking, and playing video games.
                    </p>
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