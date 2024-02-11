import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css'
import { Navbar, Footer } from '../common/Navbar';
import { styles } from '../common/Constants';

function ProjectsBody() {
    return (
      <>
      <Navbar></Navbar>
      <div className="container-xl flex">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active bg-primary"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" className="bg-primary"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2" className="bg-primary"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../static/projects/Website.png" className="d-block w-25 float-right" alt="Website"></img>
                    <div className="carousel-caption d-none d-md-block text-left">
                        <h5 className="text-break text-muted">WEBSITE</h5>
                        <p className="text-break text-muted">INFO HERE</p>
                        <p><a href="/projects#Website">
                            <button type="button" className="btn btn-outline-secondary btn-sm"> More Information </button>
                        </a></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../static/projects/KitchenAssitant.png" className="d-block w-25 float-right" alt="Kitchen Assitant"></img>
                    <div className="carousel-caption d-none d-md-block text-left">
                        <h5 className="text-break text-muted">Capstone Project: Kitchen Assistant</h5>
                        <p className="text-break text-muted">
                            Developed a Google Chrome extension that acts as a kitchen assistant. 
                        </p>
                        <p><a href="/projects#CapstoneProject">
                            <button type="button" className="btn btn-outline-secondary btn-sm"> More Information </button>
                        </a></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="../static/projects/MLProject.png" className="d-block w-25 float-right" alt="ML Project"></img>
                    <div className="carousel-caption d-none d-md-block text-left">
                        <h5 className="text-break text-muted">College Football Rankings Using Machine Learning</h5>
                        <p className="text-break text-muted">
                            Implemented Linear Regression to rank college football teams.
                        </p>
                        <p><a href="/projects#MLProject">
                            <button type="button" className="btn btn-outline-secondary btn-sm"> More Information </button>
                        </a></p>
                    </div>
                </div>
            </div>
        </div>

        <p></p>

        <div className="card mb-3" style={ styles } id="Website">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Website
                    <button type="button" className="btn btn-sm btn-primary float-right">
                    In-Development <span className="badge badge-light"> May 2020-Present </span>
                    </button>
                </h5>
                <p className="card-text">
                    Created a website from scratch to serve as a portfolio and add details from my resume through a website medium. From a development perspective, 
                    I wanted to try the Angular framework and learn more about Bootstrap and the front and back-end of website development.
                    <br></br>
                    This project uses the Angular framework to build the website, Bootstrap for the UI elements, and JavaScript for the back-end scripts.
                </p>
            </div>
        </div>
        
        <div className="card mb-3" style={ styles } id="CapstoneProject">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Kitchen Assistant 
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> January-April 2020 </span>
                    </button>
                    <h6 className="font-italic text-muted">Capstone Project, The Ohio State University</h6>
                </h5>
                <p className="card-text">
                    For my AI Capstone Project, I was part of a team that created a kitchen assistant that works as a Google Chrome extension. 
                    Given the requirement that we needed to use IBM Watson Discovery or Assistant, we decided to make an assistant that would allow the user 
                    the search for food and have the assistant answer questions about that food. For example, a user could search for "Chocolate Cake", 
                    and search results from allrecipes.com or delish.com would show. Then the user picks a recipe and can use the assistant to get 
                    ingredients, substitutions, and the recipe itself.
                    <br></br>
                    For more information, feel free to see the README below, or contact me. The project recieved a 97.5% upon completion in April.
                </p>
                <a href=".../static/projects/KitchenAssistantReadme.md">
                    <button type="button" className="btn btn-outline-secondary btn-sm"> See Readme </button>
                </a>
            </div>
        </div>

        <div className="card mb-3" style={ styles } id="MLProject">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    AI Generated College Football Rankings 
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> August-December 2019 </span>
                    </button>
                    <h6 className="font-italic text-muted">Machine Learning className, The Ohio State University</h6>
                </h5>
                <p className="card-text">
                    Using Linear Regression, I sought to create a more accurate ranking of college football teams in the hope 
                    of creating a better playoff. Recently, there has been much controversy with the new College Football Playoff rankings. 
                    For a project in my machine learning className, I chose to apply linear regression to see if using only statistics, and no "eye-test" 
                    would result in a better ranking of the top-4 teams in college football.
                    <br></br>
                    The project cannot be extrapolited to the real-world due to some limitations I defined when doing the project. You can learn more 
                    by looking at the report below, or contacting me. The project recieved an A upon submission of the report.
                </p>
                <a href=".../static/projects/FinalReport_MLProject.pdf">
                    <button type="button" className="btn btn-outline-secondary btn-sm"> See Report </button>
                </a>
            </div>
        </div>

        <div className="card mb-3" style={ styles }>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Hackathon Messaging Application 
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> November 2019 </span>
                    </button>
                    <h6 className="font-italic text-muted">OH/IO Hackathon, The Ohio State University</h6>
                </h5>
                <p className="card-text">
                    Developed a messaging application during a 24-hour hackathon using Python, nodeJS, mongoDB. 
                    Azure AI was used to implement text-to-speech processing for the application. The project was left unfinished at the end of 
                    the hackathon.
                </p>
            </div>
        </div>

        <div className="card mb-3" style={ styles } id="Database">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Library Circulation Database 
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> January-April 2019 </span>
                    </button>
                    <h6 className="font-italic text-muted">Databases className, The Ohio State University</h6>
                </h5>
                <p className="card-text">
                    For my databases className, in a team of 4, we created a relational database to model a library circualtion system. The database was 
                    created using SQLite with a Java program handling queries to the database. The database tracked a range of things; some examples 
                    include the number of an item, names, patrons, whether something has been checked-out or not, and the items patrons checked-out (listed under 
                    the patron). The project recieved an A upon submission of a report.
                </p>
                <a>
                    <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#Contact"> Contact Me to See Report </button>
                </a>
            </div>
        </div>

        <div className="card mb-3" style={ styles } id="GraderApp">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Grader Application Website for CSE Department 
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> March-April 2019 </span>
                    </button>
                    <h6 className="font-italic text-muted">Web Applications Project className, The Ohio State University</h6>
                </h5>
                <p className="card-text">
                    Until Fall 2019, students wanting to be graders (or teaching assistants) for the Computer Science and Engineering department 
                    needed to email HR, or be recommended my instructors, to be hired. As our final project in the Web Apps className, my team of 4 
                    was tasked with creating a website that would treamline the process.
                    <br></br>
                    Our website used Bootstrap of the UI and Ruby (and Middleman) for the back-end. We created a portal for students, intructors, and HR to 
                    apply, recommend students, and assign students directly. Students would apply for any job openings and the website would check to make 
                    sure they have the requirements, and HR would be notified and can assign students to instructors.
                    <br></br>
                    The project recieved an A upon completion, and many elements of our project are used on the current CSE grader application (as of Fall 2019).
                </p>
            </div>
        </div>

        <div className="card mb-3" style={ styles } id="Nozzle">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Caulking Gun Nozzle Project
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> January-April 2018 </span>
                    </button>
                    <h6 className="font-italic text-muted">The Ohio State University (in Collaboration with FORJAK Industrial, Columbus OH)</h6>
                </h5>
                <p className="card-text">
                    During my technical writing className, FORJAK Industrial, based in Columbus, Ohio, tasked my team of 4 to create a nozzle that could 
                    attach to their automated caulking gun. Their problem was that their automated caulking gun would not uniformally apply caulk 
                    to buildings.
                    <br></br>
                    As the primary designer, I designed a nozzle that incorporated spatula tips on the nozzle to unifomally apply caulk, using SOLIDWORKS. 
                    While untested, it received interest for real-world application upon presenting it to FORJAK.
                </p>
                <a>
                    <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#Contact"> Contact Me to See White Paper </button>
                </a>
            </div>
        </div>

        <div className="card mb-3" style={ styles } id="AEV">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Advanced Energy Project
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> January-April 2016 </span>
                    </button>
                    <h6 className="font-italic text-muted">Fundamentals of Engineering II, The Ohio State University</h6>
                </h5>
                <p className="card-text">
                    For my semester long project in my second engineering course, my team of 4 was tasked with designing and programing an 
                    autonomous vehicle pre-programed to run to the end of a ceiling track, collect payload, and go back to start. The design was our own, 
                    with matrials given to us by the instructor. I developed all code using Arduino.
                </p>
                <a>
                    <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#Contact"> Contact Me to See Report </button>
                </a>
            </div>
        </div>

        <div className="card mb-3" style={ styles } id="TrainProject">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Advanced Energy Project
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> November 2015 </span>
                    </button>
                    <h6 className="font-italic text-muted">Fundamentals of Engineering I, The Ohio State University</h6>
                </h5>
                <p className="card-text">
                    Given a trainset, my team of 4 programmed a train to move in a circle while stopping at a train station 
                    and implement safety features for the track. All code was done in MATLAB.
                </p>
                <a>
                    <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#Contact"> Contact Me to See Report </button>
                </a>
            </div>
        </div>

        <div className="card mb-3" style={ styles } id="SLUInternship">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">
                    Saint Louis University Internship - Creating a Remote On/Off Switch
                    <button type="button" className="btn btn-sm btn-primary float-right">
                        Completed <span className="badge badge-light"> June-July 2014 </span>
                    </button>
                    <h6 className="font-italic text-muted">Space Systems Reasearch Lab, Saint Louis University</h6>
                </h5>
                <p className="card-text">
                    During High School, as part of a district wide initiative to give students internship experience, I joined the Space Systems Reasearch 
                    Lab at Saint Louis University to help develop their <a href="https://www.sluspacelab.com/argus">ARGUS</a> cubesat. My task was to 
                    create remote on/off switch so that the developers would not need to enter and exit the clean room during every test. Using a solenoid 
                    and a pen, I built a device that could turn the cubesat on or off with the push of a button.
                </p>
            </div>
        </div>

        <p></p>

        <h6 className="text-muted font-italic">
            NOTE: Some projects have a <span className="badge badge-info">Contact Me to See Report</span> button. This is to
            help prevent academic misconduct for current Ohio State students since instructors use the same projects across different semesters.
            My report will be my work, but you must contact me to see it so I can help prevent other students from cheating.
        </h6>

        </div>
      <Footer></Footer>
      </>
    )
  }

export { ProjectsBody };
