import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import ModelNav from './model-nav.jsx';
import ModelContent from './model-content.jsx';
export default function Models() {
    return (
        <>
        <div id='top' className='center'>
                <Header/>
                <Navbar/>
                <ModelNav/>
                <ModelContent/>
                <Footer/>
        </div>
        </>
    )
}