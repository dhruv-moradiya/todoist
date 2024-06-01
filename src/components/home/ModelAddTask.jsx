import { memo, useState } from 'react';
import { DueDate, Priority } from '../../constants/svg';
import CustomButton from '../common/CustomButton';
import ModelDueDate from './ModelDueDate';

function ModelAddTask({ setIsTaskModelOpen, addTaskModelRef }) {

  const [isDueDateModelOpen, setIsDueDateModelOpen] = useState(false)

  function closeModel() {
    setIsTaskModelOpen(false);
  }
  function openDueDateModel(e) {
    e.stopPropagation()
    setIsDueDateModelOpen(true)
  }
  function closeDueDateModel() {
    setIsDueDateModelOpen(false)
  }

  return (
    <div ref={addTaskModelRef} className="flex w-full flex-col gap-2 rounded-md border-[1px] border-gray-800 px-4 py-3" onClick={closeDueDateModel}>
      <input
        type="text"
        placeholder="Task name"
        className="border-none bg-dark outline-0 placeholder:text-base placeholder:font-semibold"
      />
      <textarea
        placeholder="Description"
        className="border-none bg-dark outline-0 placeholder:text-xs placeholder:font-semibold"
        rows={1}
      />
      <div className="flex items-center gap-2 relative">
        <Button svg={<DueDate />} name="Due Date" onClick={openDueDateModel} />
        <Button svg={<Priority />} name="Priority" />
        {isDueDateModelOpen && <ModelDueDate />}
      </div>

      <div className="flex w-full items-center justify-end gap-2 self-end border-t-[1px] border-gray-800 pt-3">
        <CustomButton
          styles="bg-slate-800 hover:bg-slate-900"
          onClick={closeModel}
          buttonName="Cancel"
        />
        <CustomButton
          styles="bg-primary hover:bg-red-600"
          buttonName="Add task"
        />
      </div>
    </div>
  );
}

export default memo(ModelAddTask);

function Button({ svg, name, onClick }) {
  return (
    <button className="flex w-fit items-center gap-1 rounded-[5px] border-[1px] border-gray-500 px-[5px] py-[1.5px] text-xs hover:bg-gray-500" onClick={onClick}>
      {svg}
      <span>{name}</span>
    </button>
  );
}
