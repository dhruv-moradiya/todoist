import React from 'react';
import { DragIcon, Edit } from '../../constants/svg';

function TodoCard({ item }) {
  return (
    <>
      <div className="dragIcon rounded-md p-1 text-base hover:bg-light-dark">
        <DragIcon />
      </div>

      <div>
        <div className="circle font-light">
          <i className="ri-checkbox-blank-circle-line text-2xl font-extralight"></i>
          <i className="ri-check-line check text-base"></i>
        </div>
      </div>

      <div className="mx-3 mr-auto flex grow flex-col gap-1">
        <h4 className="text-base font-medium tracking-wide">
          Browse the Todoist Inspiration Hub {item}
        </h4>
        <p className="text-xs tracking-wide">
          For productivity advice and to sign up for our newsletter
        </p>
        <div className="flex items-center gap-1 font-semibold text-green-500">
          <Edit />
          <p className="text-[11.5px]">Tomorrow</p>
        </div>
      </div>

      <div className="ml-auto">
        <svg width="24" height="24">
          <g fill="none" fillRule="evenodd">
            <path
              fill="currentColor"
              d="M9.5 19h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z"
            ></path>
            <path
              stroke="currentColor"
              d="M4.42 16.03a1.5 1.5 0 0 0-.43.9l-.22 2.02a.5.5 0 0 0 .55.55l2.02-.21a1.5 1.5 0 0 0 .9-.44L18.7 7.4a1.5 1.5 0 0 0 0-2.12l-.7-.7a1.5 1.5 0 0 0-2.13 0L4.42 16.02z"
            ></path>
          </g>
        </svg>
      </div>
    </>
  );
}

export default TodoCard;
