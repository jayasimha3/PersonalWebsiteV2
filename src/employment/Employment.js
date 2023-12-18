import 'bootstrap/dist/css/bootstrap.css';

import me from '../static/img/homepage/jayasimharishee.jpg';
import { rishee } from '../common/Constants.js';
import { Navbar } from '../common/Navbar.js';

function EmploymentBody() {
    return (
      <>
      <Navbar></Navbar>
      <div class="container-xl" flex>
        <div class="jumbotron mb-3">
          <div class="media">
              <img src="/assets/gm/gm.jpg" class="mr-3" alt="General Motors"></img>
                  <div class="media-body">
                      <h1 class="lead text-break">
                          Entry Level Software Developer <span class="badge badge-primary float-right">Current</span>
                      </h1>
                      <h6 class="font-italic">General Motors Global Technical Center, Michigan IT Innovation Center, Warren MI</h6>
                      <h6 class="font-weight-light">Since <span class="font-weight-normal">January 2021</span></h6>
                  </div>
          </div>
          <hr class="my-4"></hr>
          <h6 class="lead text-break">
              I am a new college hire and currently work on the Global Storage Operations team.
          </h6>
          <div class="row">
              <div class="col"></div>
              <div class="col-11 justify-content-md-center">
              <blockquote class="blockquote">
                  <p class="mb-0">
                    As part of the Storage Operations team, I work with a variety of SAN, NAS, and BUR storage servers. We reactively and proactively work with vendors, like Dell and HP, to replace devices like disks and dimms.
                    Storage devices I have worked with include:
                    <ul>
                        <li>PowerFlex</li>
                        <li>XtremeIO</li>
                        <li>Isilon</li>
                        <li>ECS</li>
                        <li>3Par</li>
                        <li>Brocade/Cisco SAN Switches</li>
                    </ul>
                  </p>
              </blockquote>
              </div>
              <div class="col"></div>
          </div>
      </div>
      <div class="card mb-3">
          <div class="card-body text-dark text-center">
              <h6 class="font-weight-bold">I am not actively looking for an opportunities at this time.</h6>
              <h6 class="font-weight-lighter">
                  However, I am still open to considering new opportunities, so please contact me if you are interested in hiring me. You may use the contact button above, or see my 
                  <a href="https://www.linkedin.com/in/jayasimha3/">LinkedIn Profile</a>, my <a href="https://osu.joinhandshake.com/users/11578467">Handshake Profile</a>, or my <a href="https://my.indeed.com/p/risheej-w1nbb5b">Indeed Profile</a>.
              </h6>
              <h6 class="font-weight-muted">
                  Below are some emplyment opportunities I had worked while in college (or in high school).
              </h6>
          </div>
      </div>
      <div class="card border-light mb-3" style={{styles}}>
          <div class="card-body text-dark">
              <div class="media">
                  <img src="/assets/ohiostate/blockO.png" class="mr-3" alt="The Ohio State University"></img>
                      <div class="media-body">
                          <h6 class="text-break">
                              Software 2 Grader
                              <button type="button" class="btn btn-sm btn-primary float-right">
                                  Duration <span class="badge badge-light"> May 2018-July 2019 </span>
                              </button>
                          </h6>
                          <h6 class="font-italic">Department of Computer Science, The Ohio State University</h6>
                          <h6 class="font-weight-lighter text-break">
                              <ul class="list-group">
                                  <li class="row px-3">Graded homework and projects in software development with Java. 
                                      Projects included implementing classes, and coding efficiently.</li>
                                  <li class="row px-3">Guided student on software development techniques through grading and office hours.</li>
                              </ul>
                          </h6>
                      </div>
              </div>
          </div>
      </div>
      <div class="card border-light mb-3" style={{styles}}>
              <div class="card-body text-dark">
                  <div class="media">
                      <img src="/assets/ohiostate/blockO.png" class="mr-3" alt="The Ohio State University"></img>
                          <div class="media-body">
                              <h6 class="text-break">
                                  Office Assistant
                                  <button type="button" class="btn btn-sm btn-primary float-right">
                                      Duration <span class="badge badge-light"> August 2016-October 2017 </span>
                                  </button>
                              </h6>
                              <h6 class="font-italic">Office of Student Life, The Ohio State University</h6>
                              <h6 class="font-weight-lighter text-break">
                                  <ul class="list-group">
                                      <li class="row px-3">Performed customer service activities including logging mail, issuing loaner keys, and issuing equipment.</li>
                                  </ul>
                              </h6>
                          </div>
                  </div>
              </div>
      </div>
      <div class="card border-light mb-3" style={{styles}}>
              <div class="card-body text-dark">
                  <div class="media">
                      <img src="/assets/slu/stlouisuniv.png" class="mr-3" alt="Saint Louis University"></img>
                          <div class="media-body">
                              <h6 class="text-break">
                                  Intern
                                  <button type="button" class="btn btn-sm btn-primary float-right">
                                      Duration <span class="badge badge-light"> June-July 2014 </span>
                                  </button>
                              </h6>
                              <h6 class="font-italic">Space Systems Research Lab, Saint Louis University</h6>
                              <h6 class="font-weight-lighter text-break">
                                  <ul class="list-group">
                                      <li class="row px-3 text-break">
                                          Tasked with solving the vague problem of turning a satellite on and off without entering the clean room, I built a remote on/off switch using a solenoid and pen.
                                      </li>
                                  </ul>
                              </h6>
                          </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    )
  }

const styles = {
  "max-width": "100%"
}

export { EmploymentBody };
