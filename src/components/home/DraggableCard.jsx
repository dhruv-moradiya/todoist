import React from 'react';
import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import TodoCard from '../common/TodoCard';

function DraggableCard({ data = [] }) {
  return (
    <>
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
    </>
  );
}

export default memo(DraggableCard);
