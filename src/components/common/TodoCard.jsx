import React from 'react';
import { Calendar, DragIcon, Edit } from '../../constants/svg';

function TodoCard({ item }) {
  return (
    <>
      <div className="dragIcon hidden rounded-md p-1 text-base hover:bg-light-dark sm:block">
        <DragIcon />
      </div>

      <div>
        <div className="circle font-light">
          <i className="ri-checkbox-blank-circle-line text-2xl font-extralight text-primary"></i>
          <i className="ri-check-line check text-base text-primary"></i>
        </div>
      </div>

      <div className="mx-3 mr-auto flex grow flex-col gap-0">
        <h4 className="text-base font-medium tracking-wide">
          Browse the Todoist Inspiration Hub {item}
        </h4>
        <p className="text-xs tracking-wide">
          For productivity advice and to sign up for our newsletter
        </p>
        <div className="my-1 flex items-center gap-1 font-semibold text-green-500">
          <Calendar />
          <p className="text-[11.5px]">Tomorrow</p>
        </div>
      </div>

      <div className="editIcon cursor-pointer">
        <Edit />
      </div>
    </>
  );
}

export default TodoCard;
