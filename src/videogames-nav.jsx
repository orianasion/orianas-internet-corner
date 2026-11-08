import { Link } from "react-scroll";

function VideoGamesNav(){

    return(
        <nav className="model-nav">
            <ul>
                {/* <li><Link to="top" smooth={true} duration={400} >Top</Link></li> */}
                <li><Link to="shadeOfMagic" smooth={true} duration={400}>Shade Of Magic</Link></li>
                <li><Link to="collectTheCosmos" smooth={true} duration={400}>Collect The Cosmos</Link></li>
                <li><Link to="dinerTime" smooth={true} duration={400} >Diner Time!</Link></li>
                <li><Link to="snipeUrType" smooth={true} duration={400}>Snipe Ur Type</Link></li>
                <li><Link to="fishGame" smooth={true} duration={400}>A Fish Game</Link></li>
                
            </ul>
        </nav>
    );

}

export default VideoGamesNav