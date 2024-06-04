import React, { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Arrow } from '../constants/svg';
import DraggableCard from '../components/inbox/DraggableCard';
import AddTaskButton from '../components/inbox/AddTaskButton';

import ViewNav from '../components/common/ViewNav';
import ModelAddTask from '../components/common/Models/ModelAddTask';
import ModelAddSection from '../components/common/Models/ModelAddSection';

function Inbox() {
  const [data, setData] = useState([1, 2, 3, 4]);
  const [isTaskModelOpen, setIsTaskModelOpen] = useState(false);
  const [isSectionModelOpen, setIsSectionModelOpen] = useState(false);
  const [whichSectionModel, setWhichSectionMode] = useState(0);
  const [whichSection, setWhichSection] = useState([0]);

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

  function handleClick(index) {
    if (whichSection.includes(index)) {
      setWhichSection(whichSection.filter((item) => item !== index));
    } else {
      setWhichSection((prev) => [...prev, index]);
    }
  }

  return (
    <div className="scrollbar md:w-[calc(100% - 64px)] lg:w-[calc(100% - 160px)] xl:w-[calc(100% - 384px)] flex max-h-screen flex-col gap-2 overflow-y-scroll px-8 py-3 sm:px-12 md:px-8 lg:px-20 xl:px-48">
      <ViewNav />

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h2 className="self-start text-3xl font-bold">Inbox</h2>

        {new Array(5).fill(null).map((_, index) => {
          return (
            <div key={index} className="w-full">
              <button
                className="mb-3 flex w-full items-center gap-1 self-start  text-[16.5px] font-semibold"
                onClick={() => handleClick(index)}
              >
                <div
                  className={`w-[30px] ${whichSection.includes(index) ? 'rotate-90' : 'rotate-0'}`}
                >
                  <Arrow />
                </div>
                <h2 className="w-fit">(No section)</h2>
              </button>

              <div
                className={`w-full duration-300 ${whichSection.includes(index) ? 'h-auto' : 'h-0 overflow-hidden'}`}
              >
                <DragDropContext key={index} onDragEnd={handleDragging}>
                  <div className="w-full flex-col gap-6">
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

                  <AddTaskButton
                    index={index}
                    whichSectionModel={whichSectionModel}
                    setWhichSectionMode={setWhichSectionMode}
                    isTaskModelOpen={isTaskModelOpen}
                    setIsTaskModelOpen={setIsTaskModelOpen}
                    btnRef={btnRef}
                  />

                  {isTaskModelOpen && index === whichSectionModel && (
                    <ModelAddTask
                      setIsTaskModelOpen={setIsTaskModelOpen}
                      addTaskModelRef={addTaskModelRef}
                    />
                  )}

                  {isSectionModelOpen && index === whichSectionModel && (
                    <ModelAddSection
                      setIsSectionModelOpen={setIsSectionModelOpen}
                    />
                  )}

                  <AddSectionButton
                    setIsSectionModelOpen={setIsSectionModelOpen}
                    index={index}
                    setWhichSectionMode={setWhichSectionMode}
                  />
                </DragDropContext>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Inbox;

function AddSectionButton({
  setIsSectionModelOpen,
  index,
  setWhichSectionMode,
}) {
  function openAddSectionModel() {
    setIsSectionModelOpen(true);
    setWhichSectionMode(index);
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
