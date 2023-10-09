import { Navbar, Footer } from '../common/Navbar.js';
import { HomepageBody } from '../homepage/Homepage.js'

export default function Root() {
    return (
      <>
        <Navbar></Navbar>
        <HomepageBody></HomepageBody>
        <Footer></Footer>
      </>
    );
  }