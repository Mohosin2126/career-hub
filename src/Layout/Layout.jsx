
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';


const Layout = () => {
    return (
        <div>
          <div className='max-w-6xl mx-auto mt-8'>
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;