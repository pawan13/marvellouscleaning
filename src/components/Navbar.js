import  Button  from "react-bootstrap/Button";

export default function Navbar(){
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/home">
        <img src="../images/logo.jpg" width={182} height={64} alt="logo"></img><br/>
        
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
            <a className="nav-link" href="/home">
              <Button>Home</Button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              <Button>Services</Button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
             <Button>About Us</Button> 
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
