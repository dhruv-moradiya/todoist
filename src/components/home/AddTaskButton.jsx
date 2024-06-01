
import { useEffect, useRef } from "react";

function AddTaskButton({ isAddTaskModelOpen, setIsAddTaskModelOpen, btnRef }) {
  function openAddTaskModel() {
    setIsAddTaskModelOpen(true);
  }

  return (
    <button
      id="addModelButton"
      ref={btnRef}
      className="item-center flex w-full gap-[2px] text-base text-gray-500 hover:text-primary"
      style={{ opacity: isAddTaskModelOpen ? 0 : 1 }}
      onClick={openAddTaskModel}
    >
      <i className="ri-add-line"></i>
      Add task
    </button>
  );
}

export default AddTaskButton;