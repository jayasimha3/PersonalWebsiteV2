import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import { Navbar, Footer } from '../common/Navbar';
import { styles } from '../common/Constants';

function AboutBody() {
    return (
        <>
        <Navbar></Navbar>
        <div className="container-md justify-content-evenly">
            <h2 className="display-2 text-light">About Me</h2>
        </div>
        <br></br>
        <div className="container-md justify-content-evenly">
        </div>
        <Footer></Footer>
        </>
    )
};

export { AboutBody };