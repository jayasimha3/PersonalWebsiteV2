import { Navbar, Footer } from '../common/Navbar.tsx';
import { HomepageBody } from '../homepage/Homepage.tsx'

export default function Root() {
    return (
      <>
        <Navbar></Navbar>
        <HomepageBody></HomepageBody>
        <Footer></Footer>
      </>
    );
  }