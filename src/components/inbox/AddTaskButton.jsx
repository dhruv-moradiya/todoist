function AddTaskButton({
  index,
  // activeSectionModal,
  // setActiveSectionModal,
  isTaskModelOpen,
  setIsTaskModelOpen,
  btnRef,
}) {
  function openAddTaskModel() {
    setIsTaskModelOpen(true);
    // console.log("index", index)
    // setActiveSectionModal(index);
  }

  return (
    <button
      id="addModelButton"
      ref={btnRef}
      className="item-center flex w-full gap-[2px] text-base text-gray-500 hover:text-primary"
      style={{
        // opacity: isTaskModelOpen && activeSectionModal === index ? 0 : 1,
        opacity: isTaskModelOpen ? 0 : 1,
      }}
      onClick={openAddTaskModel}
    >
      <i className="ri-add-line"></i>
      Add task
    </button>
  );
}

export default AddTaskButton;
