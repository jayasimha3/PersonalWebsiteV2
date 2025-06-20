import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import './page.css';
import Image from 'next/image';
import Link from 'next/link'
import { links } from '../common/Constants'
import gm from '../../../public/images/employment/generalmotors.svg';
import ohio_state_stacked from '../../../public/images/ohiostate/ohiostate-stackedlogo.svg';
import slu from '../../../public/images/slu/slu_logo.svg';

function PreviousPositions() {
    return (
        <div className="accordion" id="accordionPreviousPositions">
        <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGmDesignTools" aria-expanded="false" aria-controls="collapseGmDesignTools">
                <div className="container-lg">
                        <div className="row">
                            <div className="col-lg">
                                Design Tools, <b>General Motors</b>
                            </div>
                            <div className="col-2 position-absolute end-0 top-50 translate-middle-y">
                                <span className="badge text-bg-info">May 2024 - Present</span>
                            </div>
                        </div>
                    </div>
                </button>
                </h2>
                <div id="collapseGmDesignTools" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="clearfix">
                            <Image src={gm.src} width={100} height={100} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></Image>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">PRTS Redevelopment</div>
                                        GM's Problem and Resolution Tracking Service is being redeveloped into a Jira application. This system tracks vehicle defects in current and future vehicles.
                                        The current on-premises application does not integrate well with the software teams in GM; the application is being redeveloped in Jira to address this. Some specific implementations in this project include:
                                        <ul>
                                            <li>Send issues between two different Jira sites on the click of a button</li>
                                            <li>Creation of multiple issues via Jira automation</li>
                                            <li>Use of the <Link href={links.atlassianForge}>Atlassian Forge</Link> platform to obtain data from a databricks instance and allow users to pick in a cascading, table, or combined formats</li>
                                            <li>Integration with other on-premises systems so they create issues on PRTS Jira and can track the status of that issue</li>
                                        </ul>
                                        Some other more administrative functions performed include:
                                        <ul>
                                            <li>Github Repository automation and workflows for deploying Forge applications to Jira</li>
                                            <li>Leading documentation efforts</li>
                                        </ul>
                                        This project continues as of July 2025 to fully redevelop the on-premises application into a Jira Cloud application.
                                    </div>
                                </li>
                            </ul>
                        </div>                 
                    </div>
                </div>
            </div>
        <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGmAiEngineer" aria-expanded="false" aria-controls="collapseGmAiEngineer">
                <div className="container-lg">
                        <div className="row">
                            <div className="col-lg">
                                AI Engineer, <b>General Motors</b>
                            </div>
                            <div className="col-2 position-absolute end-0 top-50 translate-middle-y">
                                <span className="badge text-bg-info">Sept 2023 - May 2024</span>
                            </div>
                        </div>
                    </div>
                </button>
                </h2>
                <div id="collapseGmAiEngineer" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="clearfix">
                            <Image src={gm.src} width={100} height={100} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></Image>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">AzureAI Chatbot</div>
                                        Created a chatbot based on Microsoft's Azure OpenAI RAG <Link href={ links.azChatbotDemo }>Chatbot demo app</Link>.
                                        The GPT models are deployed to Azure, and the chatbot uses Azure AI Search for indexing and storage of relevant documents. Manual deployment was automated through the use of Github actions and Azure DevOps pipelines.
                                        Additional customizations include code generation approaches, api version based answers, automated data ingestion through Github Actions, and a custom Visual Studio Code extension using Azure Deployed Search and GPT models, along with on-premises open-source LLM's (like codellama) with Azure deployed search.
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Response Evaluation</div>
                                        Lead the research of evaluation tools that can be used to evaluate RAG model responses.
                                        Researched <Link href={ links.elutherGithub }>EleutherAI's Evaluation Harness</Link>, <Link href={ links.stanfordHelmGithub }>Stanford's HELM</Link>, and <Link href={ links.azRagEvalGithub }>Azure's RAG Evaluator</Link>.
                                        Customized EleutherAI's harness to query Azure AI search to get the context, and then feed that back to the model, like what's done in the chatbot. Was able to make this work with on-prem models as well.
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">End-to-End Automation using LLM's</div>
                                        Leading the development of "Bi-directional" approaches, which allow for a user to ask the chatbot to take action. Currently utilizing both <Link href={ links.langchainAgents }>Langchain Agents</Link> (for both GPT and Open Source Models) and <Link href={ links.openAiFunctions }>OpenAI Functions</Link> (only compatible with GPT).
                                        This kind of approach would allow the chatbot to "do something"; for example, if a user wants the chatbot to "send an email", the chatbot can take action to send that email using this bi-directional approach.
                                        Some projects I'm working on include writing or updating documentation during pull requests for new code, writing readme files based on the contents of a repository, and being able to generate requirements if existing requirements are not detailed enough.
                                    </div>
                                </li>
                            </ul>
                        </div>                 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGmCloudDeveloper" aria-expanded="false" aria-controls="collapseGmCloudDeveloper">
                <div className="container-lg">
                        <div className="row">
                            <div className="col-lg">
                                Cloud Developer, <b>General Motors</b>
                            </div>
                            <div className="col-2 position-absolute end-0 top-50 translate-middle-y">
                                <span className="badge text-bg-info">Apr 2022 - Sept 2023</span>
                            </div>
                        </div>
                    </div>
                </button>
                </h2>
                <div id="collapseGmCloudDeveloper" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="clearfix">
                            <Image src={gm.src} width={100} height={100} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></Image>
                            As a cloud developer, I worked with infrastructure and microservices as part of GM's <i>Galileo</i> internal cloud. I worked with <i>Pivotal Cloud Foundry</i>, <i>Kubernetes</i>, and various pipelines for build and deployment.
                            Some specific projects I worked on were:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">GM Kubernetes Developer Wiki</div>
                                        Led efforts to document standards for GM to deploy and maintain Kubernetes applications. 
                                        This documentation was visible to any employee at GM, and is the first stop for questions, how-to tutorials, and best practices for all GM IT deployments to Kubernetes. 
                                        This documentation also serves as a collection of examples from across the entire company for deployments to Kubernetes.
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Kubernetes Service Request Automation</div>
                                        Built a module using Spring Framework REST API service for:
                                        <ul>
                                            <li>Automating Kubernetes Cluster namespace updates</li>
                                            <li>Increasing quota limits</li>
                                            <li>Add or remove namespaces</li>
                                            <li>Manage users and their access</li>
                                        </ul>
                                        This reduced manual work from 1 hour per request to less than a minute per request.
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">PCF to Kubernetes Migration</div>
                                        Was a lead on the migration of various spring framework and angular applications from <i>Pivotal Cloud Foundry (PCF)</i> to <i>Kubernetes (K8s)</i>.
                                        This included setting standards for build and deployment, k8s configuration, and redevelopment of applications to be containerized.
                                    </div>
                                </li>
                            </ul>
                        </div>                 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGmStorageOperations" aria-expanded="false" aria-controls="collapseGmStorageOperations">
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
                <div id="collapseGmStorageOperations" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="clearfix">
                            <Image src={gm.src} width={100} height={100} className="rounded float-start col-md-1 p-3" alt="General Motors Logo"></Image>
                            As a storage engineer and software developer, I worked on automation relating to provisioning and monitoring storage devices, such as NAS, SAN, and Switch devices. 
                            We used a Django python project to show tables for inventory and monitoring, python UI pages with backend automation for provisioning, creating change records, alerting, and os patching, among other things.
                            I lead the design of documentation for the website, and developed end-to-end api's to reduce manual tasks to improve simplicity and reduce human-error.
                            Two big projects I worked on were:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Decommissioning Pre-Checks</div>
                                        Script to automate gathering information on Decommissioning host sets in GM's manufacturing environments.
                                        This utility page generated a script to run on the 3par hosts, and was a simpler version of a script generator that was widely used at the time.
                                        This reduced execution time by about 1 hour per request.
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Automated Pre-Change Checks</div>
                                        Automation that would use REST API calls to an Xtremio device. This automation checked for bad devices and status of VLUNs and hosts.
                                        Manually checking this information would take as much as a 3-4 hours, but this automation reduced that time by about 2 hours per request.
                                    </div>
                                </li>
                            </ul>
                            As part of an operations team, I worked on a variety of SAN, NAS, and BUR storage servers to engage vendors for fixes, and ensure the GM environments were up.
                            Storage devices I have worked with include:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">DELL EMC <Link href={ links.powerflex }>PowerFlex</Link></div>
                                        SAN Cluster based on all flash storage.
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">DELL EMC <Link href={ links.xtremio }>Xtremio</Link></div>
                                        SAN Cluster based on all flash storage.
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Other Storage Devices</div>
                                        Dell EMC <Link href={ links.isilon }>Isilon</Link>, HPE <Link href={ links.threePar }>3Par</Link>,
                                        Brocade and Cisco Switches, <Link href={ links.netapp }>Netapp</Link>, <Link href={ links.datadomain }>Datadomain</Link>, and more.
                                    </div>
                                </li>
                            </ul> 
                        </div>                 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOsuCse" aria-expanded="false" aria-controls="collapseOsuCse">
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
                <div id="collapseOsuCse" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="clearfix">
                            <Image src={ohio_state_stacked.src} width={100} height={100} className="rounded float-start col-md-1 p-3" alt="Ohio State Logo"></Image>
                            Graded homework and projects in software development with Java. Projects included implementing classes, and coding efficiently.
                            Guided students in learning the importance of testing through test cases and taught them how to think about efficiency when writing code with the goal of improving code maintainability.
                        </div>                  
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOsuStudentLife" aria-expanded="false" aria-controls="collapseOsuStudentLife">
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
                <div id="collapseOsuStudentLife" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="clearfix">
                            <Image src={ohio_state_stacked.src} width={100} height={100} className="rounded float-start col-md-1 p-3" alt="Ohio State Logo"></Image>
                            Performed customer service activities including logging packages/mail; issuing loaner keys, and issuing equipment.
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item position-relative">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSluArgus" aria-expanded="false" aria-controls="collapseSluArgus">
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
                <div id="collapseSluArgus" className="accordion-collapse collapse" data-bs-parent="#accordionPreviousPositions">
                    <div className="accordion-body">
                        <div className="clearfix">
                            <Image src={slu.src} width={100} height={100} className="rounded float-start col-md-1 p-3" alt="SLU Logo"></Image>
                            Solved the problem of turning the <Link href={ links.sluArgus }>ARGUS</Link> satellite on and off remotely during testing, so testers would not have to enter the clean room.
                            Built a remote on/off switch to power the satellite on and off using a solenoid and pen.
                            This was an unpaid internship during High School.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CurrentEmploymentDescription() {
    return (
        <p className="text-light text-break">
            Current Projects:
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Develop a Defect Tracking Solution for GM within Atlassian Jira</div>
                        Recreate an on-premises problem tracking system for vehicles to Jira.
                        This application tracks defects on pre-production and in-production vehicles, allowing GM employees to track and fix those defects. In order to better integrate with the broader software community at GM, this application is being integrated into Jira.
                        The scope of this project includes a full replacement of the on-premises system, including workflows to move issues through different stages, approvals, scripts for automated functionality, sending issues between different Jira sites. integration with on-premises systems, and more.
                    </div>
                </li>
            </ul>
        </p>
    )
}

function SkillsList() {
    return (
        <p className="text-light text-break">
            Skills:
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <table className="table table-hover table-dark table-sm table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Development</th>
                                <th scope="col">Infrastructure</th>
                                <th scope="col">AI</th>
                                <th scope="col">Other</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Angular</td>
                                <td>Ansible</td>
                                <td>Generative AI</td>
                                <td>Github Integrations</td>
                            </tr>
                            <tr>
                                <td>Atlassian Forge</td>
                                <td>Azure</td>
                                <td>Retrieval Augmented Generation (RAG)</td>
                                <td>PostgreSQL</td>
                            </tr>
                            <tr>
                                <td>Django Framework</td>
                                <td>Docker</td>
                                <td>Tool Calling/Functions</td>
                                <td>Redis</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>Kubernetes</td>
                                <td></td>
                                <td>Jira</td>
                            </tr>
                            <tr>
                                <td>Next.js</td>
                                <td></td>
                                <td></td>
                                <td>Confluence</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Spring Framework</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ul>
        </p>
    )
}

export default function EmploymentBody() {
    return (
        <>
            <div className="container-md justify-content-evenly">
                <h2 className="display-2 text-light">Employment</h2>
                <br></br>
                <div className="row">
                    <div className="col-2">
                        <Image src={gm.src} width={100} height={100} layout="responsive" alt="General Motors"></Image>
                    </div>
                    <div className="col-lg">
                        <h1 className="text-light">Software Engineer <span className="badge text-bg-secondary">Current</span></h1>
                        <h4 className="fw-lighter text-light">General Motors, Warren MI</h4>
                        <h6 className="fst-italic fw-lighter text-light">Since January 2021</h6>
                        <p className="text-light">Software Developer at GM designing solutions on an enterprise scale.</p>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container-md justify-content-evenly pt-3">
                <CurrentEmploymentDescription></CurrentEmploymentDescription>
            </div>
            <div className="container-md justify-content-evenly">
                <SkillsList></SkillsList>
            </div>
            <div className="container-md">
                <PreviousPositions></PreviousPositions>
            </div>
        </>
     );
};
