import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import VidoegamesContent from './videogames-content.jsx';
export default function Videogames() {
    return (
        <>
        <div className='center'>
                <Header/>
                <Navbar/>
                <VidoegamesContent/>
                <Footer/>
        </div>
        </>
    )
}