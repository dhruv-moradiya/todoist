import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { useTodoContext } from '../context/TodoContext';
import ViewNav from '../components/common/ViewNav';

function Layout() {
  const { isSidebarOpen } = useTodoContext();
  return (
    <div className="relative flex h-screen w-screen items-start bg-dark text-dark-font">
      <div
        className={`${!isSidebarOpen ? 'absolute left-[-500px] top-0' : 'absolute left-0 top-0 z-20 w-[240px] bg-light-dark'} duration-300 md:static md:w-[250px] lg:w-[280px]`}
      >
        <SideBar />
      </div>
      <div className="flex h-full w-full flex-col md:flex-[2]">
        <div className="p-2">
          <ViewNav />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
