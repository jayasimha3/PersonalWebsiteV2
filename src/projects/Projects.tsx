import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css'
import Masonry from 'masonry-layout';
import { Navbar, Footer } from '../common/Navbar';
import { styles } from '../common/Constants';
import gm from '../static/images/employment/generalmotors.svg';
import ohio_state_stacked from '../static/images/ohiostate/ohiostate-stackedlogo.svg';
import slu from '../static/images/slu/slu_logo.svg';

function ProjectsBody() {
    return (
        <>
        <Navbar></Navbar>
        <div className="container-md justify-content-evenly">
            <p className="text-light text-break">
                Current Projects:
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">AzureAI Chatbot</div>
                            Created a chatbot based on Microsoft's Azure OpenAI RAG <a href="https://github.com/Azure-Samples/azure-search-openai-demo">Chatbot demo app</a>.
                            The GPT models are deployed to Azure, and the chatbot uses Azure AI Search for indexing and storage of relevant documents. Manual deployment was automated through the use of Github actions and Azure DevOps pipelines.
                            Additional customizations include code generation approaches, api version based answers, automated data ingestion through Github Actions, and a custom Visual Studio Code extension using Azure Deployed Search and GPT models, along with on-premesis open-source LLM's (like codellama) with Azure deployed search.
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Response Evaluation</div>
                            Lead the research of evaluation tools that can be used to evaluate RAG model responses.
                            Researched <a href="https://github.com/EleutherAI/lm-evaluation-harness">EleutherAI's Evaluation Harness</a>, <a href="https://github.com/stanford-crfm/helm">Stanford's HELM</a>, and <a href="https://github.com/Azure-Samples/ai-rag-chat-evaluator">Azure's RAG Evaluator</a>.
                            Customized EleutherAI's harness to query Azure AI search to get the context, and then feed that back to the model, like what's done in the chatbot. Was able to make this work with on-prem models as well.
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">End-to-End Automations using LLM's</div>
                            Leading the development of "Bi-directional" approaches, which allow for a user to ask the chatbot to take action. Currently utilizing both <a href="https://python.langchain.com/docs/modules/agents/">Langchain Agents</a> (for both GPT and Open Source Models) and <a href="https://platform.openai.com/docs/guides/function-calling">OpenAI Functions</a> (only compatible with GPT).
                            This kind of approach would allow the chatbot to "do something"; for example, if a user wants the chatbot to "send an email", the chatbot can take action to send that email using this bi-directional approach.
                        </div>
                    </li>
                </ul>
            </p>
        </div>
        <div className="container-md">
            <AccordianTest></AccordianTest>
        </div>
        <br></br>
        <div className="container-md">
            <MasonryScript></MasonryScript>
            <MasonryTest></MasonryTest>
        </div>
        <Footer></Footer>
        </>
    )
};

function AccordianTest() {
    return (
        <div className="accordion" id="accordionPreviousPositions">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <div className="container-lg">
                            <div className="row">
                                <div className="col-lg">
                                    Storage Engineer and Software Developer, <b>General Motors</b>
                                </div>
                                <div className="col-2 position-absolute end-0 top-50 translate-middle-y">
                                    <span className="badge text-bg-info">Jan 2021 - Apr 2022</span>
                                </div>
                            </div>
                        </div>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                        <div className="accordion-body">
                            <div className="clearfix">
                                <img src={gm} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></img>
                                As a storage engineer and software developer, I worked on automation relating to provisioning and monitoring storage devices, such as NAS, SAN, and Switch devices. 
                                We used a Django python project to show tables for inventory and monitoring, pyhton UI pages with backend automations for provisioning, creating change records, alerting, and os patching, among other things.
                                I lead the design of documentation for the website, and developed end-to-end api's to reduce manual tasks to improve simplicity and reduce human-error.
                                Two big projects I worked on were:
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Decommissioning Pre-Checks</div>
                                            Script to automate gathering information on Decommissioning hostsets in GM's manufacturing environments.
                                            This utility page generated a script to run on the 3par hosts, and was a simpler version of a script generator that was widely used at the time.
                                            This reduced execution time by about 1 hour per request.
                                        </div>
                                    </li>
                                </ul>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Automated Pre-Change Checks</div>
                                            Automation that would use REST API calls to an Xtremio device. This automation checked for bad devices and status of vluns and hosts.
                                            Manually checking this information would take as much as a 3-4 hours, but this automation reduced that time by about 2 hours per request.
                                        </div>
                                    </li>
                                </ul>
                                As part of an operations team, I worked on a variety of SAN, NAS, and BUR storage servers to engage vendors for fixes, and ensure the GM environments were up.
                                Storage devices I have worked with include:
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">DELL EMC <a href="https://www.dell.com/en-us/dt/storage/powerflex.htm#scroll=off&tab0=0">PowerFlex</a></div>
                                            SAN Cluster based on all flash storage.
                                        </div>
                                    </li>
                                </ul>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">DELL EMC <a href="https://www.dell.com/en-us/shop/powerstore/sf/power-store?SA360CID=71700000099055147&=">Xtremio</a></div>
                                            SAN Cluster based on all flash storage.
                                        </div>
                                    </li>
                                </ul>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Other Storage Devices</div>
                                            Dell EMC <a href="https://www.dell.com/en-us/dt/storage/powerscale/powerscale-archive-nas-storage.htm#scroll=off">Isilon</a>, HPE <a href="https://www.hpe.com/us/en/storage/3par.html">3Par</a>,
                                            Brocade and Cisco Switches, <a href="https://www.netapp.com/">Netapp</a>, <a href="https://www.dell.com/en-us/dt/data-protection/powerprotect-backup-dd-appliances/powerprotect-dd-backup-appliances.htm#scroll=off">Datadomain</a>, and more.
                                        </div>
                                    </li>
                                </ul> 
                            </div>                 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <div className="container-lg">
                            <div className="row">
                                <div className="col-lg">
                                Department of Computer Science, <b>The Ohio State University</b>
                                </div>
                                <div className="col-2 position-absolute end-0 top-50 translate-middle-y">
                                    <span className="badge text-bg-info">May 2018 - Jul 2019</span>
                                </div>
                            </div>
                        </div>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                        <div className="accordion-body">
                            <div className="clearfix">
                                <img src={ohio_state_stacked} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></img>
                                Graded homework and projects in software development with Java. Projects included implementing classes, and coding efficiently.
                                Guided students in learning the importance of testing through test cases and taught them how to think about efficiency when writing code with the goal of improving code maintainability.
                            </div>                  
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <div className="container-lg">
                            <div className="row">
                                <div className="col-lg">
                                    Office of Student Life, <b>The Ohio State University</b>
                                </div>
                                <div className="col-2 position-absolute end-0 top-50 translate-middle-y">
                                    <span className="badge text-bg-info">Aug 2016 - Oct 2017</span>
                                </div>
                            </div>
                        </div>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                        <div className="accordion-body">
                            <div className="clearfix">
                                <img src={ohio_state_stacked} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></img>
                                Performed customer service activities including logging packages/mail; issuing loaner keys, and issuing equipment.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item position-relative">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <div className="container-lg">
                            <div className="row">
                                <div className="col-lg">
                                    Space Systems Research Lab, <b>Saint Louis University</b> <em className="fs-6 text-warning">Internship</em>
                                </div>
                                <div className="col-2 position-absolute end-0 top-50 translate-middle-y">
                                    <span className="badge text-bg-info">Jun 2014 - Jul 2014</span>
                                </div>
                            </div>
                        </div>
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                        <div className="accordion-body">
                            <div className="clearfix">
                                <img src={slu} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></img>
                                Solved the problem of turning the <a href="https://www.sluspacelab.com/argus">ARGUS</a> satellite on and off remotely during testing, so testers would not have to enter the clean room.
                                Built a remote on/off switch to power the satellite on and off using a solenoid and pen.
                                This was an unpaid internship during High School.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

function MasonryScript() {
    return (
        <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossOrigin="anonymous" async></script>
    )
}

function MasonryTest() {
    const rootStyle: React.CSSProperties = {
        position: "relative"
      };
    const gridLeft: React.CSSProperties = {
        position: "absolute",
        left: "0%"
      };
    const gridCenter: React.CSSProperties = {
        position: "absolute",
        left: "33.333%"
      };
    const gridRight: React.CSSProperties = {
        position: "absolute",
        left: "66.666%"
      };
    const gridTest: React.CSSProperties = {
        position: "absolute",
        left: "66.666%",
        top: "150px"
      };
    return (
        <div className="row" data-masonry='{"percentPosition": true }' style={rootStyle}>
        <div className="col-sm-6 col-lg-4 mb-4" style={gridLeft}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Hackathon Messaging Application</h5>
              <p className="card-text">
                Developed a messaging application during a 24-hour hackathon using Python, nodeJS, mongoDB. 
                Azure AI was used to implement text-to-speech processing for the application. The project was left unfinished at the end of 
                the hackathon.
                </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4" style={gridCenter}>
          <div className="card text-bg-primary">
            <div className="card-body">
              <h5 className="card-title">Library Circulation Database</h5>
              <p className="card-text">
                For my databases className, in a team of 4, we created a relational database to model a library circualtion system. The database was 
                created using SQLite with a Java program handling queries to the database. The database tracked a range of things; some examples 
                include the number of an item, names, patrons, whether something has been checked-out or not, and the items patrons checked-out (listed under 
                the patron). The project recieved an A upon submission of a report.
                </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4" style={gridRight}>
          <div className="card text-bg-danger">
            <div className="card-body">
              <h5 className="card-title">Grader Application Website for CSE Department</h5>
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
        </div>
        <div className="col-sm-6 col-lg-4 mb-4" style={gridLeft}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Caulking Gun Nozzle Project</h5>
              <p className="card-text">
                During my technical writing className, FORJAK Industrial, based in Columbus, Ohio, tasked my team of 4 to create a nozzle that could 
                attach to their automated caulking gun. Their problem was that their automated caulking gun would not uniformally apply caulk 
                to buildings.
                <br></br>
                As the primary designer, I designed a nozzle that incorporated spatula tips on the nozzle to unifomally apply caulk, using SOLIDWORKS. 
                While untested, it received interest for real-world application upon presenting it to FORJAK.
                </p>
            <p className="card-text">
                <small className="text-body-secondary"><span className="fw-bold">Completed </span><span className="fst-italic">January-April 2018</span></small>
            </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4" style={gridCenter}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Advanced Energy Project</h5>
              <p className="card-text">
                For my semester long project in my second engineering course, my team of 4 was tasked with designing and programing an 
                autonomous vehicle pre-programed to run to the end of a ceiling track, collect payload, and go back to start. The design was our own, 
                with matrials given to us by the instructor. I developed all code using Arduino.
                </p>
            <p className="card-text">
                <small className="text-body-secondary"><span className="fw-bold">Completed </span><span className="fst-italic">January-April 2018</span></small>
            </p>
            <button type="button" className="btn btn-outline-secondary" disabled>Contact Me to See Report</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4" style={gridTest}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Advanced Energy Project</h5>
              <p className="card-text">
                Given a trainset, my team of 4 programmed a train to move in a circle while stopping at a train station 
                and implement safety features for the track. All code was done in MATLAB.
                </p>
            <p className="card-text">
                <small className="text-body-secondary"><span className="fw-bold">Completed </span><span className="fst-italic">January-April 2018</span></small>
            </p>
            <button type="button" className="btn btn-outline-secondary" disabled>Contact Me to See Report</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-4" style={gridCenter}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Saint Louis University Internship - Creating a Remote On/Off Switch</h5>
              <p className="card-text">
                During High School, as part of a district wide initiative to give students internship experience, I joined the Space Systems Reasearch 
                Lab at Saint Louis University to help develop their <a href="https://www.sluspacelab.com/argus">ARGUS</a> cubesat. My task was to 
                create remote on/off switch so that the developers would not need to enter and exit the clean room during every test. Using a solenoid 
                and a pen, I built a device that could turn the cubesat on or off with the push of a button.
                </p>
            <p className="card-text">
                <small className="text-body-secondary"><span className="fw-bold">Completed </span><span className="fst-italic">January-April 2018</span></small>
            </p>
            <button type="button" className="btn btn-outline-secondary" disabled>Contact Me to See Report</button>
            </div>
          </div>
        </div>
        </div>
    )
  };

function ProjectsBodyOld() {
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
                <button type="button" className="btn btn-outline-secondary" disabled>Contact Me to See Report</button>
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
                <button type="button" className="btn btn-outline-secondary" disabled>Contact Me to See White Paper</button>
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
                <button type="button" className="btn btn-outline-secondary" disabled>Contact Me to See Report</button>
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
                <button type="button" className="btn btn-outline-secondary" disabled>Contact Me to See Report</button>
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
