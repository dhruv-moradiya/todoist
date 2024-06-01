import React, { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ModelAddTask from '../components/home/ModelAddTask';
import { Arrow, SideBarButton, View } from '../constants/svg';
import DraggableCard from '../components/home/DraggableCard';
import AddTaskButton from '../components/home/AddTaskButton';
import ModelAddSection from '../components/home/ModelAddSection';
import { useTodoContext } from '../context/TodoContext';

function Inbox() {
  const { isSidebarOpen, setIsSidebarOpen } = useTodoContext();
  const [data, setData] = useState([1, 2, 3, 4]);
  const [isTaskModelOpen, setIsTaskModelOpen] = useState(false);
  const [isSectionModelOpen, setIsSectionModelOpen] = useState(false);
  const [whichSection, setWhichSection] = useState(0);

  const btnRef = useRef(null);
  const addTaskModelRef = useRef(null);
  const dueDateModelRef = useRef(null);

  function handleDragging(result) {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    const reorderedData = Array.from(data);
    const [movedItem] = reorderedData.splice(source.index, 1);
    reorderedData.splice(destination.index, 0, movedItem);
    setData(reorderedData);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isTaskModelOpen &&
        e.target.id !== btnRef.current.id &&
        !addTaskModelRef.current.contains(e.target)
      ) {
        setIsTaskModelOpen(false);
      }
    }
    window.addEventListener('click', handleClickOutside);

    return function () {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isTaskModelOpen]);

  function openSideBar() {
    setIsSidebarOpen(true);
  }


  return (
    <div className="scrollbar md:w-[calc(100% - 64px)] lg:w-[calc(100% - 160px)] xl:w-[calc(100% - 384px)] flex max-h-screen flex-col gap-2 overflow-y-scroll px-8 py-3 sm:px-12 md:px-8 lg:px-20 xl:px-48">
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

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h2 className="self-start text-3xl font-bold">Inbox</h2>

        {new Array(5).fill(null).map((item, index) => {
          return (
            <>
              <DragDropContext key={index} onDragEnd={handleDragging}>
                <div className="w-full flex-col gap-6">
                  <button className="mb-3 w-full self-start text-[16.5px] font-semibold flex  items-center gap-1">
                    <div className="w-[30px]">
                      <Arrow />
                    </div>
                    <h2 className="w-fit">(No section)</h2>
                  </button>
                  <Droppable droppableId="TODO">
                    {(provided) => (
                      <ul
                        className="flex w-full flex-col items-start"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <DraggableCard data={data} />
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              </DragDropContext>

              <AddTaskButton
                index={index}
                whichSection={whichSection}
                setWhichSection={setWhichSection}
                isTaskModelOpen={isTaskModelOpen}
                setIsTaskModelOpen={setIsTaskModelOpen}
                btnRef={btnRef}
              />

              {isTaskModelOpen && index === whichSection && (
                <ModelAddTask
                  setIsTaskModelOpen={setIsTaskModelOpen}
                  addTaskModelRef={addTaskModelRef}
                />
              )}

              {isSectionModelOpen && index === whichSection && (
                <ModelAddSection
                  setIsSectionModelOpen={setIsSectionModelOpen}
                />
              )}

              <AddSectionButton
                setIsSectionModelOpen={setIsSectionModelOpen}
                index={index}
                setWhichSection={setWhichSection}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Inbox;

function AddSectionButton({ setIsSectionModelOpen, index, setWhichSection }) {
  function openAddSectionModel() {
    setIsSectionModelOpen(true);
    setWhichSection(index);
  }
  return (
    <button
      className="my-2 flex w-full cursor-pointer items-center gap-2 opacity-0 hover:opacity-100"
      onClick={openAddSectionModel}
    >
      <div className="grow bg-primary p-[0.5px]"></div>
      <h3 className="flex items-center gap-2 text-[13.5px] font-semibold text-primary">
        <span>Add Section</span>
      </h3>
      <div className="grow bg-primary p-[0.5px]"></div>
    </button>
  );
}

// // https://codesandbox.io/embed/github/Utkarshbhimte/beatiful-dnd-custom-placeholder/tree/master/?fontsize=14
