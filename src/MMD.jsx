import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import MMDContent from './mmd-content.jsx';
export default function MMD() {
    return (
        <>
        <div className='center' id='top'>
            <Header/>
            <Navbar/>
            <MMDContent/>
            <Footer/>
        </div>
        </>
    )
}