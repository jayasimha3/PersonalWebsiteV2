import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import { Navbar, Footer } from '../common/Navbar';
import gm from '../static/images/employment/generalmotors.svg';
import ohio_state_stacked from '../static/images/ohiostate/ohiostate-stackedlogo.svg';
import slu from '../static/images/slu/slu_logo.svg';

function PreviousPositions() {
    return (
        <>
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
        </>
    )
}

function CurrentEmploymentDescription() {
    return (
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
                                <th scope="col">Concepts</th>
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
                                <td>Django Framework</td>
                                <td>Azure</td>
                                <td>Retrieval Augmented Generation (RAG)</td>
                                <td>PostgreSQL</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>Docker</td>
                                <td></td>
                                <td>Redis</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>Kubernetes</td>
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

function EmploymentBody() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container-md justify-content-evenly">
                <h2 className="display-2 text-light">Employment</h2>
            </div>
            <br></br>
            <div className="d-flex justify-content-evenly">
                <div className="row">
                    <div className="col-2">
                        <img src={gm} width="100%" alt="General Motors"></img>
                    </div>
                    <div className="col-lg">
                        <h1 className="text-light">Artificial Intelligence Developer <span className="badge text-bg-secondary">Current</span></h1>
                        <h4 className="fw-lighter text-light">General Motors, Warren MI</h4>
                        <h6 className="fst-italic fw-lighter text-light">Since April 2022</h6>
                        <p className="text-light">Software Developer at GM designing solutions that use Generative Artificial Intelligence.</p>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container-md justify-content-evenly">
                <CurrentEmploymentDescription></CurrentEmploymentDescription>
            </div>
            <div className="container-md justify-content-evenly">
                <SkillsList></SkillsList>
            </div>
            <div className="container-md">
                <PreviousPositions></PreviousPositions>
            </div>
            <Footer></Footer>
        </>
     );
};

export { EmploymentBody };
