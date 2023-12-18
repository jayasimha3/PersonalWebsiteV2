import 'bootstrap/dist/css/bootstrap.css';

import me from '../static/img/homepage/jayasimharishee.jpg';
import { rishee } from '../common/Constants.js';
import { Navbar, Footer } from '../common/Navbar.js';

function ExtracurricularBody() {
    return (
      <>
      <Navbar></Navbar>
      <div class="container-lg">
        <div class="card border-light mb-3" style={{styles}}>
            <div class="card-body text-dark">
                <div class="media">
                    <img src="../static/extracurricular/lab6_maze.png" class="mr-3" alt="Maze"></img>
                        <div class="media-body">
                            <h6 class="text-break">
                                Game Design
                            </h6>
                            <h6 class="font-weight-lighter text-break">
                                <ul class="list-group">
                                    <li class="row px-3">
                                        After building a desktop PC and taking a game animation class, 
                                        I have developed an interest in game design and algorithms.
                                    </li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div class="card border-light mb-3" style={{styles}}>
            <div class="card-body text-dark">
                <div class="media">
                    <img src="../static/extracurricular/trumpet.svg" class="mr-3" width="100" height="100" alt="Trumpet"></img>
                        <div class="media-body">
                            <h6 class="text-break">
                                Music
                            </h6>
                            <h6 class="font-weight-lighter text-break">
                                <ul class="list-group">
                                    <li class="row px-3">I played the clarinet in middle and high school, and the trumpet since 2015.</li>
                                    <li class="row px-3">I have auditioned for The Ohio State University Marching Band 4 times, and have been in Athletic Band and University Band.</li>
                                    <li class="row px-3">While at Ohio State, I committed about 10 hours outside my CSE core towards band.</li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div class="card border-light mb-3" style={{styles}}>
            <div class="card-body text-dark">
                <div class="media">
                    <img src="../static/extracurricular/computer.jpg" class="mr-3" alt="Computer"></img>
                        <div class="media-body">
                            <h6 class="text-break">
                                Building Computers
                            </h6>
                            <h6 class="font-italic">Department of Computer Science, The Ohio State University</h6>
                            <h6 class="font-weight-lighter text-break">
                                <ul class="list-group">
                                    <li class="row px-3">
                                        I built my first computer in 2017, and have tinkered with it ever since. 
                                        I look forward to building more and upgrading mine over time.
                                    </li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div class="card border-light mb-3" style={{styles}}>
            <div class="card-body text-dark">
                <div class="media">
                    <img src="../static/extracurricular/robot.svg" class="mr-3" width="100" height="100" alt="AI"></img>
                        <div class="media-body">
                            <h6 class="text-break">
                                Artificial Intelligence
                            </h6>
                            <h6 class="font-weight-lighter text-break">
                                <ul class="list-group">
                                    <li class="row px-3">I like learning about AI algorithms and keeping up with the latest AI news.</li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div class="card border-light mb-3" style={{styles}}>
            <div class="card-body text-dark">
                <div class="media">
                    <img src="../static/extracurricular/ps4_die.jpg" class="mr-3" width="100" height="100" alt="AI"></img>
                        <div class="media-body">
                            <h6 class="text-break">
                                Computer Architecture
                            </h6>
                            <h6 class="font-weight-lighter text-break">
                                <ul class="list-group">
                                    <li class="row px-3">
                                        Since building a computer and taking a class on computer architecture, 
                                        I keep track of the latest developments in CPU and GPU architectures.
                                    </li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div class="card border-light mb-3" style={{styles}}>
            <div class="card-body text-dark">
                <div class="media">
                    <img src="../static/extracurricular/tennisracquet.svg" class="mr-3" width="100" height="100" alt="Tennis"></img>
                        <div class="media-body">
                            <h6 class="text-break">
                                Tennis
                            </h6>
                            <h6 class="font-weight-lighter text-break">
                                <ul class="list-group">
                                    <li class="row px-3">I have played tennis since I was 8, and enjoy playing recreationally.</li>
                                    <li class="row px-3">I also played on my high school junior varsity team and won the conference championship my senior year.</li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div class="card border-light mb-3" style={{styles}}>
            <div class="card-body text-dark">
                <div class="media">
                    <img src="../static/extracurricular/boardgame.svg" class="mr-3" width="100" height="100" alt="Tennis"></img>
                        <div class="media-body">
                            <h6 class="text-break">
                                Board Games
                            </h6>
                            <h6 class="font-weight-lighter text-break">
                                <ul class="list-group">
                                    <li class="row px-3">I like playing board games with friends. My favorite game is Catan and I like Dungeons and Dragons too.</li>
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

const styles = {
  "max-width": "100%"
}

export { ExtracurricularBody };
