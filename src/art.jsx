import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import ArtContent from './art-content.jsx';
export default function Art() {
    return (
        <>
        <div className='center' id='top'>
                <Header/>
                <Navbar/>
                <ArtContent/>
                <Footer/>
        </div>
        </>
    )
}