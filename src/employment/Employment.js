import 'bootstrap/dist/css/bootstrap.css';

import me from '../static/img/homepage/jayasimharishee.jpg';
import { rishee } from '../common/Constants.js';
import { Navbar } from '../common/Navbar.js';

function EmploymentBody() {
    return (
      <>
      <Navbar></Navbar>
        <div class="container-xl bg-dark" flex>  
          <p>This is the Employment Page</p>
        </div>
      </>
    )
  }

export { EmploymentBody };
