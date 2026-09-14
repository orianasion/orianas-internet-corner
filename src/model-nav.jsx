import { Link } from "react-scroll";

function ModelNav(){

    return(
        <nav className="model-nav">
            <ul>
                <li><Link to="top" smooth={true} duration={400} >Top</Link></li>
                <li><Link to="me" smooth={true} duration={400} >Me!!!!</Link></li>
                <li><Link to="starr" smooth={true} duration={400}>Starr</Link></li>
                <li><Link to="nova" smooth={true} duration={400}>Nova</Link></li>
                <li><Link to="mrhappy" smooth={true} duration={400}>Mr. Happy</Link></li>
            </ul>
        </nav>
    );

}

export default ModelNav