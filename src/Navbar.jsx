import { Link } from "react-router-dom";

function Navbar(){

    return(
        <nav className="home-nav">
              <Link to="/home">Home</Link>
              <Link to="/3d-models">3D Models</Link>
              <Link to="/videogames">Videogames</Link>
              <Link to="/art">Art</Link>
              <Link to="/mmd">MMD</Link>
        </nav>
    );

}

export default Navbar