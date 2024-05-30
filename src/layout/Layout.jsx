import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

function Layout() {
  return (
    <div className="flex h-screen w-screen items-start bg-dark text-dark-font">
      <div className="flex-1 bg-white">
        <SideBar />
      </div>
      <div className="flex-[4.5]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
