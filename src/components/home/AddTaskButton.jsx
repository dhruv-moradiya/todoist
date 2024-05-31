import { useEffect } from "react";

function AddTaskButton({ isAddTaskModelOpen, setIsAddTaskModelOpen }) {
  function openAddTaskModel() {
    console.log('Model Open.');
    setIsAddTaskModelOpen(true);
  }

  // window.addEventListener("click", (e) => {
  //   console.log(e.target)
  //   if (isAddTaskModelOpen && e.target.id !== "addModelButton") {
  //     setIsAddTaskModelOpen(false)
  //   }
  // }) 

  useEffect(() => {
    function handleClickOutside(e) {
      console.log("event", e)
      if (isAddTaskModelOpen && e.target.id !== 'addModelButton') {
        setIsAddTaskModelOpen(false);
        console.log("Model close")
      }
    }
    console.log("Model close")
    window.addEventListener('click', () => handleClickOutside);

    return window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <button
      id="addModelButton"
      className="item-center flex w-[700px] gap-1 text-base text-gray-500 hover:text-primary"
      onClick={openAddTaskModel}
    >
      <i className="ri-add-line"></i>
      Add task
    </button>
  );
}

export default AddTaskButton;