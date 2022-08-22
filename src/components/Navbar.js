import  Button  from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Marvellous Cleaning Services
      </a>
      <button
        className="navbar-toggler"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/bookingscreens" className="nav-link" >
              <Button > Book Us</Button>
            </a>
          </li>
        </ul>
        
      </div>
      
    </nav>
    </>
    );
}