import React from 'react';
import { memo } from 'react';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoCard from '../common/TodoCard';

function DraggableCard({ data }) {
  function sorting(a, b) {
    return Number(a.priority?.title?.split(" ")[1]) - Number(b.priority?.title?.split(" ")[1]);
  }
  data.sort(sorting);

  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {data.map((item, index) => (
            <Draggable
              key={item.task_id}
              index={index}
              draggableId={item.order.toString()}
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
  );
}

const DraggableCardMemo = memo(DraggableCard);

function DragDropWrapper({ data }) {
  return (
    <DragDropContext
      onDragEnd={(result) => {
        console.log(result);
      }}
    >
      <DraggableCardMemo data={data} />
    </DragDropContext>
  );
}

export default DragDropWrapper;
