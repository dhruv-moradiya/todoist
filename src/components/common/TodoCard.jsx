import React from 'react';
import { Calendar, DragIcon, Edit } from '../../constants/svg';
import { getDate } from './Models/helperModels';

function TodoCard({ item }) {
  return (
    <>
      <div className="dragIcon hidden rounded-md p-1 text-base hover:bg-light-dark sm:block">
        <DragIcon />
      </div>

      <div>
        <div className="circle font-light">
          <i className="ri-checkbox-blank-circle-line text-2xl font-earthlight text-primary"></i>
          <i className="ri-check-line check text-base text-primary"></i>
        </div>
      </div>

      <div className="mx-3 mr-auto flex grow flex-col gap-0">
        <h4 className="text-base font-medium tracking-wide">
          {item.title} {item.order}
        </h4>
        <p className="text-xs tracking-wide">
          {item.description}
        </p>
        <div className="my-1 flex items-center gap-1 font-semibold text-green-500">
          <Calendar />
          <p className="text-[11.5px]">{getDate(item.dueDate * 1000).currentDate.day}</p>
        </div>
      </div>

      <div className="editIcon cursor-pointer">
        <Edit />
      </div>
    </>
  );
}

export default TodoCard;
