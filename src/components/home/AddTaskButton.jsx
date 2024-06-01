
import { useEffect, useRef } from "react";

function AddTaskButton({ index, whichSection, setWhichSection, isTaskModelOpen, setIsTaskModelOpen, btnRef }) {
  function openAddTaskModel() {
    setIsTaskModelOpen(true);
    setWhichSection(index)
  }

  return (
    <button
      id="addModelButton"
      ref={btnRef}
      className="flex item-center w-full gap-[2px] text-base text-gray-500 hover:text-primary"
      style={{ opacity: isTaskModelOpen && whichSection === index ? 0 : 1 }}
      onClick={openAddTaskModel}
    >
      <i className="ri-add-line"></i>
      Add task
    </button>
  );
}

export default AddTaskButton;