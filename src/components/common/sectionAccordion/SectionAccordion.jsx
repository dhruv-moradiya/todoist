import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import AddTaskButton from '../../inbox/AddTaskButton';
import DraggableCard from '../../inbox/DraggableCard';
import { Arrow } from '../../../constants/svg';
import ModelAddTask from '../Models/ModelAddTask';
import SectionAccordionContainer from './SectionAccordionContainer';
import { useSelector } from 'react-redux';

function SectionAccordion({
  activeSections,
  handleClick,
  index,
  tasks, // [1,2,3,4]
  section,
}) {
  // console.log("SectionAccordion => tasks", section)

  const [isTaskModelOpen, setIsTaskModelOpen] = useState(false);
  const [taskData, setTaskData] = useState([])
  const [data, setData] = useState(tasks);

  const btnRef = useRef(null);
  const addTaskModelRef = useRef(null);
  const { task } = useSelector((store) => store.task);
  console.log("SectionAccordion => taskData", task)


  if (!task) {
    return null;
  }


  // const updateTaskData = useCallback(() => {
  //   console.log("useCallback")
  //   setTaskData(task
  //     .filter((item) => item.section_id === section.section_id)
  //     .filter((item) => item.completed !== true))
  // }, [task])

  useEffect(() => {
    setTaskData(task
      .filter((item) => item.section_id === section.section_id)
      .filter((item) => item.completed !== true))
  }, [task]);


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

  function handleDrag(result) {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    const reorderedData = Array.from(data);
    const [movedItem] = reorderedData.splice(source.index, 1);
    reorderedData.splice(destination.index, 0, movedItem);
    setData(reorderedData);
  }



  return (
    <div key={index} className="w-full">
      <div>
        <button
          className="mb-3 flex w-full items-center gap-1 self-start  text-[16.5px] font-semibold"
          onClick={() => handleClick(index)}
        >
          <div
            className={`w-[30px] ${activeSections.includes(index) ? 'rotate-90' : 'rotate-0'}`}
          >
            <Arrow />
          </div>
          <h2 className="w-fit">{section?.section_name}</h2>
        </button>
      </div>
      <div
        className={`w-full duration-300 ${activeSections.includes(index) ? 'h-auto' : 'h-0 overflow-hidden'}`}
      >
        <DragDropContext key={index} onDragEnd={handleDrag}>
          <div className="w-full flex-col gap-6">
            <Droppable droppableId="TODO">
              {(provided) => (
                <ul
                  className="flex w-full flex-col items-start"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <DraggableCard data={taskData} />
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <AddTaskButton
            index={index}
            // activeSectionModal={activeSectionModal}
            // setActiveSectionModal={setActiveSectionModal}
            isTaskModelOpen={isTaskModelOpen}
            setIsTaskModelOpen={setIsTaskModelOpen}
            btnRef={btnRef}
          />

          {/* {isTaskModelOpen && index === activeSectionModal && ( */}
          {isTaskModelOpen && (
            <ModelAddTask
              setIsTaskModelOpen={setIsTaskModelOpen}
              addTaskModelRef={addTaskModelRef}
              section_id={section.section_id}
            />
          )}
        </DragDropContext>
      </div>
    </div>
  );
}

export default memo(SectionAccordion);
