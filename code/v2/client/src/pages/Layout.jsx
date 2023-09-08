import { Outlet } from "react-router-dom";
import TopNav from '../components/TopNav/TopNav';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <TopNav />
      <div className="pageContainer">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;