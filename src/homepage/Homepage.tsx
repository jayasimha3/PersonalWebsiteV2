import 'bootstrap/dist/css/bootstrap.css';
import '../common/styles.css';
import { rishee } from '../common/Constants';
import headshot from '../public/images/me/jayasimharishee.jpg';

const homepage_card_img_style: React.CSSProperties = {
  maxWidth: "40%"
};

function HomepageImage() {
    return (
        <img src={headshot} className="img-fluid" alt={rishee.name}></img>
    );
}

function HomepageBody() {
    return (
      <div className="card mb-3 flex" style={homepage_card_img_style}>
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{rishee.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="col-md-4">
      <HomepageImage></HomepageImage>
    </div>
  </div>
</div>
    )
  }

export { HomepageBody };
