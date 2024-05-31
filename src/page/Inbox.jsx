import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import TodoCard from '../components/common/TodoCard';
import ModelAddTask from '../components/home/ModelAddTask';
import { View } from '../constants/svg';

function Inbox() {
  const [data, setData] = useState([1, 2, 3, 4]);

  function handleDragging(result) {
    const { source, destination, type } = result;

    console.log(result);

    if (!destination) return null;

    if (source.index === destination.index) return null;

    const reorderedData = [...data];

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
                  className="flex w-[700px] flex-col items-start "
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {data.map((item, index) => (
                    <Draggable
                      key={item.toString()}
                      index={index}
                      draggableId={item.toString()}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            margin: '0 0 8px 0',
                            background: '#1E1E1E',
                            ...provided.draggableProps.style,
                          }}
                          className="todoBox flex w-full cursor-pointer items-start gap-1 border-b-[1px] border-gray-800 pb-2"
                        >
                          <TodoCard item={item} />
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <ModelAddTask />
        <button className="item-center flex w-[700px] gap-1 text-base text-gray-500 hover:text-primary">
          <i className="ri-add-line"></i>
          <span className="">Add task</span>
        </button>

        <div className="my-6 flex w-[700px] cursor-pointer items-center gap-2 opacity-0 hover:opacity-100">
          <div className="grow bg-primary p-[0.5px]"></div>
          <h3 className="flex items-center gap-2 text-[13.5px] font-semibold text-primary">
            <span>Add Section</span>
          </h3>
          <div className="grow bg-primary p-[0.5px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;

// https://codesandbox.io/embed/github/Utkarshbhimte/beatiful-dnd-custom-placeholder/tree/master/?fontsize=14
