import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import VideoGamesNav from './videogames-nav.jsx';
import VidoegamesContent from './videogames-content.jsx';
export default function Videogames() {
    return (
        <>
        <div className='center' id='top'>
                <Header/>
                <Navbar/>
                <VideoGamesNav/>
                <VidoegamesContent/>
                <Footer/>
        </div>
        </>
    )
}