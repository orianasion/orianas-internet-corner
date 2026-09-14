import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';
import BgImages from './BgImages.jsx';

export default function Home() {
    return (
        <>
            <div class="center">
                <div className='oogabooga'>
                    <BgImages/>
                    <Header/>
                    <Navbar/>   
                    <Sidebar/>
                    <Content/>  
                    <Footer/>
                </div>
            </div>
        </>
    )
}