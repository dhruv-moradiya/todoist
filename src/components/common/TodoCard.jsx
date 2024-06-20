import React, { memo } from 'react';
import { Calendar, DragIcon, Edit } from '../../constants/svg';
import { getDate } from './Models/helperModels';
import { useDispatch } from 'react-redux';
import { completeTask } from '../../redux/task/taskThunk';

function TodoCard({ item }) {
  const dispatch = useDispatch();

  function completeTaskFn() {
    dispatch(
      completeTask({
        project_id: item.project_id,
        section_id: item.section_id,
        task_id: item.task_id,
      })
    );
  }
  // if (item.completed) return null;
  return (
    <>
      <div className="dragIcon hidden rounded-md p-1 text-base hover:bg-light-dark sm:block">
        <DragIcon />
      </div>

      <button className="circle font-light" onClick={completeTaskFn}>
        <i
          className="ri-checkbox-blank-circle-line font-earthlight text-2xl"
          style={{ color: item.priority.color }}
        ></i>
        <i
          className={`ri-check-line ${item.completed ? 'completeTaskCheck' : 'check'} text-base`}
          style={{ color: item.priority.color }}
        ></i>
      </button>

      <div className="mx-3 mr-auto flex grow flex-col gap-0">
        <h4 className="text-base font-medium tracking-wide">
          {item.title} {item.order}
        </h4>
        <p className="text-xs tracking-wide">{item.description}</p>
        <div className="my-1 flex items-center gap-1 font-semibold text-green-500">
          <Calendar />
          <p className="text-[11.5px]">
            {getDate(item.dueDate * 1000).currentDate.day}
          </p>
        </div>
      </div>

      <div className="editIcon cursor-pointer">
        <Edit />
      </div>
    </>
  );
}

export default memo(TodoCard);
