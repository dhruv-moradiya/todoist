import { memo } from "react";
import { useTodoContext } from "../../context/TodoContext";
import { SideBarButton, View } from "../../constants/svg";


function ViewNav() {
  const { isSidebarOpen, setIsSidebarOpen } = useTodoContext();
  function openSideBar() {
    setIsSidebarOpen(true);
  }
  return (
    <div className="flex w-full justify-between md:justify-end">
      {!isSidebarOpen && (
        <button
          className="rounded-md px-2 py-[5px] hover:bg-amber-hover-effect md:hidden"
          onClick={openSideBar}
        >
          <SideBarButton />
        </button>
      )}
      <button className="flex w-fit items-center gap-2 rounded-[4px] px-3 py-[4px] duration-200 hover:bg-[#80808024]">
        <View />
        <p className="text-xs">View</p>
      </button>
    </div>
  )
}

export default memo(ViewNav);