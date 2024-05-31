import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ModelAddTask from '../components/home/ModelAddTask';
import { View } from '../constants/svg';
import DraggableCard from '../components/home/DraggableCard';
import AddTaskButton from '../components/home/AddTaskButton';
import ModelDueDate from '../components/home/ModelDueDate';
import ModelAddSection from '../components/home/ModelAddSection';

function Inbox() {
  const [data, setData] = useState([1, 2, 3, 4]);
  const [isAddTaskModelOpen, setIsAddTaskModelOpen] = useState(false);

  function handleDragging(result) {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    const reorderedData = Array.from(data);
    const [movedItem] = reorderedData.splice(source.index, 1);
    reorderedData.splice(destination.index, 0, movedItem);
    setData(reorderedData);
  }

  return (
    <div className="scrollbar flex max-h-screen w-full flex-col gap-2 overflow-y-scroll px-3 py-3">
      <div className="flex w-full justify-end">
        <button className="flex w-fit items-center gap-2 rounded-[4px] px-3 py-[4px] duration-200 hover:bg-[#80808024]">
          <View />
          <p className="text-xs">View</p>
        </button>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <DragDropContext onDragEnd={handleDragging}>
          <div className="flex flex-col gap-8">
            <h2 className="self-start text-3xl font-extrabold">Inbox</h2>
            <Droppable droppableId="TODO">
              {(provided) => (
                <ul
                  className="flex w-[700px] flex-col items-start"
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
        <ModelAddTask />
        <AddTaskButton
          isAddTaskModelOpen={isAddTaskModelOpen}
          setIsAddTaskModelOpen={setIsAddTaskModelOpen}
        />
        <ModelDueDate />
        <ModelAddSection />
        <AddSectionButton />
      </div>
    </div>
  );
}

export default Inbox;



function AddSectionButton() {
  return (
    <div className="my-6 flex w-[700px] cursor-pointer items-center gap-2 opacity-0 hover:opacity-100">
      <div className="grow bg-primary p-[0.5px]"></div>
      <h3 className="flex items-center gap-2 text-[13.5px] font-semibold text-primary">
        <span>Add Section</span>
      </h3>
      <div className="grow bg-primary p-[0.5px]"></div>
    </div>
  );
}

// https://codesandbox.io/embed/github/Utkarshbhimte/beatiful-dnd-custom-placeholder/tree/master/?fontsize=14
