import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

function Layout() {
  return (
    <div className="w-screen flex h-screen items-start bg-dark text-dark-font">
      <div className="w-[280px] bg-yellow-900">
        <SideBar />
      </div>
      <div className="flex-[2]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
