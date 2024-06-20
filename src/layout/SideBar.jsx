import React, { memo, useState } from 'react';
import { sidebarNavigation } from '../constants/sidebar';
import { SideBarButton } from '../constants/svg';
import { useTodoContext } from '../context/TodoContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ModelAddProject from '../components/common/Models/ModelAddProject';
import Loader from '../components/common/Loader';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import ProjectName from '../components/sidebar/ProjectName';

function SideBar() {
  const [addProjectModelOpen, setAddProjectModelOpen] = useState(false);

  const { setIsSidebarOpen } = useTodoContext();
  const userData = useSelector((store) => store.user.userData);

  const project = useSelector((store) => store.project);
  console.log('project', project);

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  async function logOutUser() {
    console.log('Log out');
    await signOut(auth);
    localStorage.removeItem('todoist_user');
    console.log('User Log out.');
  }

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
        <button onClick={logOutUser}>Logout</button>
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
            <Link
              to={`${item.name === 'Inbox' ? '/' : '/' + item.name.toLowerCase()}`}
              key={index}
            >
              <li className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-amber-hover-effect">
                <i className={`${item.icon} text-xl`}></i>
                <p>{item.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* My Projects */}
      <div className="scrollbar h-[calc(100vh - 370px)] flex flex-col gap-2 overflow-auto">
        <div className="flex items-center justify-between pl-2">
          <h3 className="text-base font-semibold">My Projects</h3>
          <i
            className="ri-add-fill cursor-pointer rounded-md px-1 py-[1px] text-xl hover:bg-amber-hover-effect"
            onClick={() => setAddProjectModelOpen(true)}
          ></i>
          {addProjectModelOpen && (
            <ModelAddProject setAddProjectModelOpen={setAddProjectModelOpen} />
          )}
        </div>

        {project.isLoading ? (
          <div className="h-full w-full">
            <Loader />
          </div>
        ) : (
          <ProjectName project={project.project} />
        )}
      </div>
    </div>
  );
}

export default memo(SideBar);
