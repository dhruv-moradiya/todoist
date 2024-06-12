import React from 'react';
import { sidebarNavigation } from '../constants/sidebar';
import { SideBarButton } from '../constants/svg';
import { useTodoContext } from '../context/TodoContext';
import { useSelector } from 'react-redux';

function SideBar() {
  const { setIsSidebarOpen } = useTodoContext();

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const userData = useSelector((store) => store.user.userData);

  return (
    <div className="flex h-screen w-full flex-col gap-4 bg-light-dark px-3 py-3 font-light">
      {/* Top part */}
      <div className="flex items-center justify-between pl-2">
        <div className="flex items-center gap-4">
          <div className="h-7 w-7 overflow-hidden rounded-full">
            <img
              className="h-full w-full object-cover"
              src={userData?.photoURL}
              alt={userData?.name}
            />
          </div>
          <h3 className="text-base font-semibold">{userData?.name}</h3>
        </div>
        <button
          className="cursor-pointer rounded-md px-2 py-[5px] text-xl font-light hover:bg-amber-hover-effect"
          onClick={closeSidebar}
        >
          <SideBarButton />
        </button>
      </div>

      {/* Add Task part */}
      <div className="flex items-center gap-3 pl-2 text-primary">
        <i className="ri-add-circle-fill text-2xl"></i>
        <h4 className=" text-base font-semibold">Add task</h4>
      </div>

      {/* Main Sidebar Body */}
      <div className="flex flex-col gap-3 text-base">
        <ul className="flex flex-col gap-2">
          {sidebarNavigation.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-amber-hover-effect"
            >
              <i className={`${item.icon} text-xl`}></i>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* My Projects */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between pl-2">
          <h3 className="text-base font-semibold">My Projects</h3>
          <i className="ri-add-fill rounded-md px-1 py-[1px] text-xl hover:bg-amber-hover-effect"></i>
        </div>
        <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-amber-hover-effect">
          <div className="flex items-center gap-2">
            <i className="ri-hashtag"></i>
            <p className="text-base font-semibold">Home</p>
          </div>
          <span className="material-symbols-outlined rounded-[3px] font-light hover:bg-[#80808024]">
            more_horiz
          </span>
        </div>
        <div className="flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-amber-hover-effect">
          <div className="flex items-center gap-2">
            <i className="ri-hashtag"></i>
            <p className="text-base font-semibold">Home</p>
          </div>
          <span className="material-symbols-outlined rounded-[3px] font-light hover:bg-[#80808024]">
            more_horiz
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
