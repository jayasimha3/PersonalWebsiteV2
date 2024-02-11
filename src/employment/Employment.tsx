import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import { Navbar, Footer } from '../common/Navbar';
import { styles } from '../common/Constants';

function EmploymentBody() {
    return (
      <>
      <Navbar></Navbar>
      <div className="container-xl flex">
        <div className="jumbotron mb-3">
          <div className="media">
              <img src="../static/gm/gm.jpg" className="mr-3" alt="General Motors"></img>
                  <div className="media-body">
                      <h1 className="lead text-break">
                          Entry Level Software Developer <span className="badge badge-primary float-right">Current</span>
                      </h1>
                      <h6 className="font-italic">General Motors Global Technical Center, Michigan IT Innovation Center, Warren MI</h6>
                      <h6 className="font-weight-light">Since <span className="font-weight-normal">January 2021</span></h6>
                  </div>
          </div>
          <hr className="my-4"></hr>
          <h6 className="lead text-break">
              I am a new college hire and currently work on the Global Storage Operations team.
          </h6>
          <div className="row">
              <div className="col"></div>
              <div className="col-11 justify-content-md-center">
              <blockquote className="blockquote">
                  <p className="mb-0">
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
              <div className="col"></div>
          </div>
      </div>
      <div className="card mb-3">
          <div className="card-body text-dark text-center">
              <h6 className="font-weight-bold">I am not actively looking for an opportunities at this time.</h6>
              <h6 className="font-weight-lighter">
                  However, I am still open to considering new opportunities, so please contact me if you are interested in hiring me. You may use the contact button above, or see my 
                  <a href="https://www.linkedin.com/in/jayasimha3/">LinkedIn Profile</a>, my <a href="https://osu.joinhandshake.com/users/11578467">Handshake Profile</a>, or my <a href="https://my.indeed.com/p/risheej-w1nbb5b">Indeed Profile</a>.
              </h6>
              <h6 className="font-weight-muted">
                  Below are some emplyment opportunities I had worked while in college (or in high school).
              </h6>
          </div>
      </div>
      <div className="card border-light mb-3" style={ styles }>
          <div className="card-body text-dark">
              <div className="media">
                  <img src="../static/ohiostate/blockO.png" className="mr-3" alt="The Ohio State University"></img>
                      <div className="media-body">
                          <h6 className="text-break">
                              Software 2 Grader
                              <button type="button" className="btn btn-sm btn-primary float-right">
                                  Duration <span className="badge badge-light"> May 2018-July 2019 </span>
                              </button>
                          </h6>
                          <h6 className="font-italic">Department of Computer Science, The Ohio State University</h6>
                          <h6 className="font-weight-lighter text-break">
                              <ul className="list-group">
                                  <li className="row px-3">Graded homework and projects in software development with Java. 
                                      Projects included implementing classNamees, and coding efficiently.</li>
                                  <li className="row px-3">Guided student on software development techniques through grading and office hours.</li>
                              </ul>
                          </h6>
                      </div>
              </div>
          </div>
      </div>
      <div className="card border-light mb-3" style={ styles }>
              <div className="card-body text-dark">
                  <div className="media">
                      <img src="../static/ohiostate/blockO.png" className="mr-3" alt="The Ohio State University"></img>
                          <div className="media-body">
                              <h6 className="text-break">
                                  Office Assistant
                                  <button type="button" className="btn btn-sm btn-primary float-right">
                                      Duration <span className="badge badge-light"> August 2016-October 2017 </span>
                                  </button>
                              </h6>
                              <h6 className="font-italic">Office of Student Life, The Ohio State University</h6>
                              <h6 className="font-weight-lighter text-break">
                                  <ul className="list-group">
                                      <li className="row px-3">Performed customer service activities including logging mail, issuing loaner keys, and issuing equipment.</li>
                                  </ul>
                              </h6>
                          </div>
                  </div>
              </div>
      </div>
      <div className="card border-light mb-3" style={ styles }>
              <div className="card-body text-dark">
                  <div className="media">
                      <img src="../static/slu/stlouisuniv.png" className="mr-3" alt="Saint Louis University"></img>
                          <div className="media-body">
                              <h6 className="text-break">
                                  Intern
                                  <button type="button" className="btn btn-sm btn-primary float-right">
                                      Duration <span className="badge badge-light"> June-July 2014 </span>
                                  </button>
                              </h6>
                              <h6 className="font-italic">Space Systems Research Lab, Saint Louis University</h6>
                              <h6 className="font-weight-lighter text-break">
                                  <ul className="list-group">
                                      <li className="row px-3 text-break">
                                          Tasked with solving the vague problem of turning a satellite on and off without entering the clean room, I built a remote on/off switch using a solenoid and pen.
                                      </li>
                                  </ul>
                              </h6>
                          </div>
                  </div>
              </div>
          </div>
        </div>
      <Footer></Footer>
      </>
    )
  }

export { EmploymentBody };
