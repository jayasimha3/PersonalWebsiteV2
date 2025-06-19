import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
 
export default function NotFound() {
  return (
    <div className="container-md justify-content-evenly text-center">
      <h2 className="display-2 text-light">Unknown Galactic Coordinates</h2>
      <div className="container-md justify-content-evenly pt-3">
        <p className="text-light">We're experiencing a temporary anomaly in the space-time continuum.</p>
      </div>
      <Link className="btn btn-info" href="/" type="button">Chart your course back to our galaxy</Link>
    </div>
  )
}