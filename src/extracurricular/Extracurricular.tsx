import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import { Navbar, Footer } from '../common/Navbar';
import { styles } from '../common/Constants';

function ExtracurricularBody() {
    return (
      <>
      <Navbar></Navbar>
      <div className="container-lg">
        <div className="card border-light mb-3" style={ styles }>
            <div className="card-body text-dark">
                <div className="media">
                    <img src="../static/extracurricular/lab6_maze.png" className="mr-3" alt="Maze"></img>
                        <div className="media-body">
                            <h6 className="text-break">
                                Game Design
                            </h6>
                            <h6 className="font-weight-lighter text-break">
                                <ul className="list-group">
                                    <li className="row px-3">
                                        After building a desktop PC and taking a game animation className, 
                                        I have developed an interest in game design and algorithms.
                                    </li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div className="card border-light mb-3" style={ styles }>
            <div className="card-body text-dark">
                <div className="media">
                    <img src="../static/extracurricular/trumpet.svg" className="mr-3" width="100" height="100" alt="Trumpet"></img>
                        <div className="media-body">
                            <h6 className="text-break">
                                Music
                            </h6>
                            <h6 className="font-weight-lighter text-break">
                                <ul className="list-group">
                                    <li className="row px-3">I played the clarinet in middle and high school, and the trumpet since 2015.</li>
                                    <li className="row px-3">I have auditioned for The Ohio State University Marching Band 4 times, and have been in Athletic Band and University Band.</li>
                                    <li className="row px-3">While at Ohio State, I committed about 10 hours outside my CSE core towards band.</li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div className="card border-light mb-3" style={ styles }>
            <div className="card-body text-dark">
                <div className="media">
                    <img src="../static/extracurricular/computer.jpg" className="mr-3" alt="Computer"></img>
                        <div className="media-body">
                            <h6 className="text-break">
                                Building Computers
                            </h6>
                            <h6 className="font-italic">Department of Computer Science, The Ohio State University</h6>
                            <h6 className="font-weight-lighter text-break">
                                <ul className="list-group">
                                    <li className="row px-3">
                                        I built my first computer in 2017, and have tinkered with it ever since. 
                                        I look forward to building more and upgrading mine over time.
                                    </li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div className="card border-light mb-3" style={ styles }>
            <div className="card-body text-dark">
                <div className="media">
                    <img src="../static/extracurricular/robot.svg" className="mr-3" width="100" height="100" alt="AI"></img>
                        <div className="media-body">
                            <h6 className="text-break">
                                Artificial Intelligence
                            </h6>
                            <h6 className="font-weight-lighter text-break">
                                <ul className="list-group">
                                    <li className="row px-3">I like learning about AI algorithms and keeping up with the latest AI news.</li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div className="card border-light mb-3" style={ styles }>
            <div className="card-body text-dark">
                <div className="media">
                    <img src="../static/extracurricular/ps4_die.jpg" className="mr-3" width="100" height="100" alt="AI"></img>
                        <div className="media-body">
                            <h6 className="text-break">
                                Computer Architecture
                            </h6>
                            <h6 className="font-weight-lighter text-break">
                                <ul className="list-group">
                                    <li className="row px-3">
                                        Since building a computer and taking a className on computer architecture, 
                                        I keep track of the latest developments in CPU and GPU architectures.
                                    </li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div className="card border-light mb-3" style={ styles }>
            <div className="card-body text-dark">
                <div className="media">
                    <img src="../static/extracurricular/tennisracquet.svg" className="mr-3" width="100" height="100" alt="Tennis"></img>
                        <div className="media-body">
                            <h6 className="text-break">
                                Tennis
                            </h6>
                            <h6 className="font-weight-lighter text-break">
                                <ul className="list-group">
                                    <li className="row px-3">I have played tennis since I was 8, and enjoy playing recreationally.</li>
                                    <li className="row px-3">I also played on my high school junior varsity team and won the conference championship my senior year.</li>
                                </ul>
                            </h6>
                        </div>
                </div>
            </div>
        </div>

        <div className="card border-light mb-3" style={ styles }>
            <div className="card-body text-dark">
                <div className="media">
                    <img src="../static/extracurricular/boardgame.svg" className="mr-3" width="100" height="100" alt="Tennis"></img>
                        <div className="media-body">
                            <h6 className="text-break">
                                Board Games
                            </h6>
                            <h6 className="font-weight-lighter text-break">
                                <ul className="list-group">
                                    <li className="row px-3">I like playing board games with friends. My favorite game is Catan and I like Dungeons and Dragons too.</li>
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

export { ExtracurricularBody };
