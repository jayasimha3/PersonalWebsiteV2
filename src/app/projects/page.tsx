import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css'
import { links } from '../common/Constants';
import Link from 'next/link'

export default function ProjectsBody() {
    return (
        <>
        <div className="container-md justify-content-evenly">
            <h2 className="display-2 text-light">Projects</h2>
        </div>
        <br></br>
        <div className="container-md justify-content-evenly">
            <p className="text-light text-break">
                <h4>Highlighted Projects:</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">AzureAI Chatbot <span className="badge text-bg-primary">GM</span></div>
                            Created a chatbot based on Microsoft's Azure OpenAI RAG <a href={ links.azChatbotDemo }>Chatbot demo app</a>.
                            The GPT models are deployed to Azure, and the chatbot uses Azure AI Search for indexing and storage of relevant documents. Manual deployment was automated through the use of Github actions and Azure DevOps pipelines.
                            Additional customizations include code generation approaches, api version based answers, automated data ingestion through Github Actions, and a custom Visual Studio Code extension using Azure Deployed Search and GPT models, along with on-premesis open-source LLM's (like codellama) with Azure deployed search.
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Personal Website <span className="badge text-bg-secondary">Personal</span></div>
                            Created <a href="/">this website</a> to showcase my work, skills and experiences. This project was first done in 2020 during the COVID pandemic as a way to enhance my web development skills.
                            At the time, it was built using the Angular framework, and in 2023-2024, the website was converted to use React with Typescript, and hosted using Github pages.
                            <br></br>
                            <a className="btn btn-outline-secondary btn-sm me-2 mt-2" href={ links.websiteRepositoryV1 } role="button">Version 1 Repository</a>
                            <a className="btn btn-outline-secondary btn-sm mt-2" href={ links.websiteRepository } role="button">Current Version Repository</a>
                        </div>
                    </li>
                </ul>
            </p>
        </div>
        <div className="container-md justify-content-evenly">
            <h4 className="text-light">All Projects:</h4>
        </div>
        <br></br>
        <div className="container-md">
            <Projects></Projects>
        </div>
        </>
    )
};

function Projects() {
    const mlProjectReport = "/files/projects/FinalReport_MLProject.pdf";
    const kitchenAssistantReadme = "/files/projects/KitchenAssistantReadme.md";

    return (
        <div className="accordion" id="accordionProjects">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <div className="container-lg">
                        <div className="row">
                            <div className="col-lg">
                                GM Projects <span className="position-absolute end-0 top-50 translate-middle badge border border-light rounded-circle bg-primary p-2 me-5"><span className="visually-hidden">unread messages</span></span>
                            </div>
                        </div>
                    </div>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Jira Custom Issue Tracker <span className="badge text-bg-primary">GM</span></div>
                                    Developing a custom issue tracking solution within Jira. This includes othr Jira instacnes being able to create and modify issues, custom plugins for data structures, and workflows and workflow automations.
                                    Plugins are built using <a href="https://developer.atlassian.com/platform/forge/">Atlassian Forge</a>, with React. This is the first of it's kind of application made within GM, and sets the standard for all future applications that become Jira plugins.
                                    </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">AzureAI Chatbot <span className="badge text-bg-primary">GM</span></div>
                                    Created a chatbot based on Microsoft's Azure OpenAI RAG <a href={ links.azChatbotDemo }>Chatbot demo app</a>.
                                    The GPT models are deployed to Azure, and the chatbot uses Azure AI Search for indexing and storage of relevant documents. Manual deployment was automated through the use of Github actions and Azure DevOps pipelines.
                                    Additional customizations include code generation approaches, api version based answers, automated data ingestion through Github Actions, and a custom Visual Studio Code extension using Azure Deployed Search and GPT models, along with on-premesis open-source LLM's (like codellama) with Azure deployed search.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Chatbot Response Evaluation <span className="badge text-bg-primary">GM</span></div>
                                    Lead the research of evaluation tools that can be used to evaluate RAG model responses.
                                    Researched <a href={ links.elutherGithub }>EleutherAI's Evaluation Harness</a>, <a href={ links.stanfordHelmGithub }>Stanford's HELM</a>, and <a href={ links.azRagEvalGithub }>Azure's RAG Evaluator</a>.
                                            Customized EleutherAI's harness to query Azure AI search to get the context, and then feed that back to the model, like what's done in the chatbot. Was able to make this work with on-prem models as well.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Kubernetes Service Request Automation <span className="badge text-bg-primary">GM</span></div>
                                        Built a module using Spring Framework REST API service for automating Kubernetes Cluster namespace updates, such as increasing quota limits, add or remove namespaces, manage users and their access, reducing manual work from 1 hour per request to a minute per request.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">GM Kubernetes Developer Wiki <span className="badge text-bg-primary">GM</span></div>
                                    Led efforts to document standards for GM to deploy and maintain Kubernetes applications. This documentation was visible to any employee at GM, and is the first stop for questions, how-to tutorials, and best practices for all GM IT deployments to Kubernetes. This documentation also serves as a collection of examples from across the entire company for deployments to Kubernetes.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Pivotal Cloud Foundry (PCF) to Kubernetes (K8s) Migration <span className="badge text-bg-primary">GM</span></div>
                                    Replatformed more than 300 microservices from PCF to K8s in the span of 10 months. Was one of the lead developes for this migration; the migration lead to GM saving thousands of dollars in costs, and led to creation of documentation for any other GM developer or team to deploy or migrate to k8s.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Xtremio Hardware Replacement Automation <span className="badge text-bg-primary">GM</span></div>
                                    Developed an end-to-end module using UI and REST APIs that reduced manual and hands-on tasks by about 2 hours per request for DELL's <a href={ links.xtremio }>Xtremio</a> storage platform. 
                                    It obtained data and created a change report automatically, reducing human induced risk to the environment. As of 2022, this tool is widely used and saves a significant amount of time overall.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Manufacturing Decommissioning Pre-Checks <span className="badge text-bg-primary">GM</span></div>
                                    Script to automate gathering information on Decommissioning hostsets in GM's manufacturing environments. This utility page generated a script to run on the <a href={ links.threePar }>3par hosts</a>, and was a simpler version of a script generator that was widely used at the time. 
                                    This reduced execution time by about 1 hour per request.
                                </div>
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div className="container-lg">
                        <div className="row">
                            <div className="col-lg">
                            Personal Projects <span className="position-absolute end-0 top-50 translate-middle badge border border-light rounded-circle bg-secondary p-2 me-5"><span className="visually-hidden">unread messages</span></span>
                            </div>
                        </div>
                    </div>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                <div className="accordion-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Personal Portfolio/Website <span className="badge text-bg-secondary">Personal</span></div>
                                    Created this website to showcase my work, skills and experiences. This project was first done in 2020 during the COVID pandemic as a way to enhance my web development skills. At the time, it was built using Angular as the backend.
                                    In 2023-2024, the website was converted to use React with Typescript, and hosted using Github pages.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Homelab/Self Hosted Kubernetes Cluster <span className="badge text-bg-secondary">Personal</span></div>
                                    Deployed a Kubernetes cluster at home, using <a href="https://www.talos.dev/">Talos Linux</a> on Proxmox. This cluster was built to further my understanding of microservices, networking, and hosting.
                                    As a result, I have gained or furthered networking experience, AI experience, NAS/Storage experience, and automation experience. Documentation is hosted through an nginx container running a docusaurus website, built upon PR completion to a self-hosted <a href={ links.forgejo }>Forgejo</a> repository.
                                    Cluster updates (to Kubernetes and Talos) will be handled through Ansible playbooks, and service deployments are handled using <a href={ links.fluxcd }>FluxCD</a> linked to a Github repository.
                                    Some services or operating systems I host are listed below.
                                    <br></br>
                                    <div className="btn-group mt-2 disabled" role="group" aria-label="Self Hosted Applications">
                                        <button type="button" className="btn btn-outline-secondary btn-sm">Forgejo</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">Traefik</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">Jellyfin</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">PiHole</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">Nextcloud</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">Home Assistant</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">Ollama</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">OpnSense</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">TrueNAS Scale</button>
                                        <button type="button" className="btn btn-outline-secondary btn-sm">Proxmox</button>
                                    </div>
                                </div>
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div className="container-lg">
                        <div className="row">
                            <div className="col-lg">
                                University Projects <span className="position-absolute end-0 top-50 translate-middle badge border border-light rounded-circle bg-danger p-2 me-5"><span className="visually-hidden">unread messages</span></span>
                            </div>
                        </div>
                    </div>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="container-md justify-content-evenly">
                            <p className="text-light text-break">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Capstone Project: Kitchen Assistant <span className="badge text-bg-danger">Ohio State</span></div>
                                            For my AI Capstone Project, I was part of a team that created a kitchen assistant that works as a Google Chrome extension. 
                                            Given the requirement that we needed to use IBM Watson Discovery or Assistant, we decided to make an assistant that would allow the user 
                                            the search for food and have the assistant answer questions about that food. For example, a user could search for "Chocolate Cake", 
                                            and search results from allrecipes.com or delish.com would show. Then the user picks a recipe and can use the assistant to get 
                                            ingredients, substitutions, and the recipe itself.
                                            <br></br>
                                            For more information, feel free to see the <Link href={kitchenAssistantReadme} target="_blank">README</Link>, or contact me. The project received a 97.5% upon completion.
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">College Football Rankings Using Machine Learning <span className="badge text-bg-danger">Ohio State</span></div>
                                            Using Linear Regression, I sought to create a more accurate ranking of college football teams in the hope 
                                            of creating a better playoff. Recently, there has been much controversy with the new College Football Playoff rankings. 
                                            For a project in my machine learning className, I chose to apply linear regression to see if using only statistics, and no "eye-test" 
                                            would result in a better ranking of the top-4 teams in college football.
                                            <br></br>
                                            The project cannot be extrapolited to the real-world due to some limitations I defined when doing the project. You can learn more 
                                            by looking at the <Link href={mlProjectReport} target="_blank">report</Link>, or contacting me. The project received an A upon submission of the report.
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Hackathon Messaging Application <span className="badge text-bg-danger">Ohio State</span></div>
                                            Developed a messaging application during a 24-hour hackathon using Python, nodeJS, mongoDB. 
                                            Azure AI was used to implement text-to-speech processing for the application. The project was left unfinished at the end of 
                                            the hackathon.
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Library Circulation Database <span className="badge text-bg-danger">Ohio State</span></div>
                                            For my databases class, in a team of 4, we created a relational database to model a library circulation system. The database was 
                                            created using SQLite with a Java program handling queries to the database. The database tracked a range of things; some examples 
                                            include the number of an item, names, patrons, whether something has been checked-out or not, and the items patrons checked-out (listed under 
                                            the patron). The project received an A upon submission of a report.
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Grader Application Website for Computer Science and Engineering (CSE) Department <span className="badge text-bg-danger">Ohio State</span></div>
                                            Until Fall 2019, students wanting to be graders (or teaching assistants) for the Computer Science and Engineering department 
                                            needed to email HR, or be recommended my instructors, to be hired. As our final project in the Web Apps class, my team of 4 
                                            was tasked with creating a website that would streamline the process.
                                            <br></br>
                                            Our website used Bootstrap of the UI and Ruby (and Middleman) for the back-end. We created a portal for students, instructors, and HR to 
                                            apply, recommend students, and assign students directly. Students would apply for any job openings and the website would check to make 
                                            sure they have the requirements, and HR would be notified and can assign students to instructors.
                                            <br></br>
                                            The project received an A upon completion, and many elements of our project are used on the current CSE grader application (as of Fall 2019).
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Caulking Gun Nozzle Project for FORJAK Industrial <span className="badge text-bg-danger">Ohio State</span></div>
                                            During my technical writing class, FORJAK Industrial, based in Columbus, Ohio, tasked my team of 4 to create a nozzle that could 
                                            attach to their automated caulking gun. Their problem was that their automated caulking gun would not uniformly apply caulk 
                                            to buildings.
                                            <br></br>
                                            As the primary designer, I designed a nozzle that incorporated spatula tips on the nozzle to uniformly apply caulk, using SOLIDWORKS. 
                                            While untested, it received interest for real-world application upon presenting it to FORJAK.
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Advanced Energy Project <span className="badge text-bg-danger">Ohio State</span></div>
                                            For my semester long project in my second engineering course, my team of 4 was tasked with designing and programming an 
                                            autonomous vehicle pre-programed to run to the end of a ceiling track, collect payload, and go back to start. The design was our own, 
                                            with materials given to us by the instructor. I developed all code using Arduino.
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Train Safety with MATLAB <span className="badge text-bg-danger">Ohio State</span></div>
                                            Given a train set, my team of 4 programmed a train to move in a circle while stopping at a train station 
                                            and implement safety features for the track. All code was done in MATLAB.
                                        </div>
                                    </li>
                                </ul>
                            </p>
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
                                    Other Projects <span className="position-absolute end-0 top-50 translate-middle badge border border-light rounded-circle bg-info p-2 me-5"><span className="visually-hidden">unread messages</span></span>
                                </div>
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="container-md justify-content-evenly">
                            <p className="text-light text-break">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Saint Louis University ARGUS Satellite <span className="badge text-bg-info">Internship</span></div>
                                            During High School, as part of a district wide initiative to give students internship experience, I joined the Space Systems Research 
                                            Lab at Saint Louis University to help develop their <a href={ links.sluArgus }>ARGUS</a> cubesat. My task was to 
                                            create remote on/off switch so that the developers would not need to enter and exit the clean room during every test. Using a solenoid 
                                            and a pen, I built a device that could turn the cubesat on or off with the push of a button.
                                        </div>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
