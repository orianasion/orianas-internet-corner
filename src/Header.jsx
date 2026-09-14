import cloudBanner from './assets/website cloud banner.png';
import mesonaPeace from './assets/mesona peace pixelated2.png';

function Header(){

    return(
        <header>
            <img className="cloud" src={cloudBanner} alt="Cloud banner" />
            <div className="header-title">Oriana's Internet Corner!!!</div>
            <img className="header-image" src={mesonaPeace} alt="Mesona Peace" />
        </header>
    );
}

export default Header