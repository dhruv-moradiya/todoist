import { memo, useState } from 'react';
import { DueDate, Priority } from '../../constants/svg';
import CustomButton from '../common/CustomButton';
import ModelDueDate from './ModelDueDate';
import ModelPriority from './ModelPriority';

function ModelAddTask({ setIsTaskModelOpen, addTaskModelRef }) {
  const [isDueDateModelOpen, setIsDueDateModelOpen] = useState(false);
  const [isPriorityModelOpen, setPriorityModelOpen] = useState(false);

  function closeModel() {
    setIsTaskModelOpen(false);
  }
  function closeBothModels() {
    closeDueDateModel();
    closePriorityModel();
  }
  function openDueDateModel(e) {
    e.stopPropagation();
    setIsDueDateModelOpen(true);
    closePriorityModel();
  }
  function closeDueDateModel() {
    setIsDueDateModelOpen(false);
  }
  function openPriorityModel(e) {
    e.stopPropagation();
    closeDueDateModel();
    setPriorityModelOpen(true);
  }
  function closePriorityModel() {
    setPriorityModelOpen(false);
  }

  return (
    <div
      ref={addTaskModelRef}
      className="flex w-full flex-col gap-2 rounded-md border-[1px] border-gray-800 px-4 py-3"
      onClick={closeBothModels}
    >
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
      <div className="relative flex items-center gap-2">
        <Button svg={<DueDate />} name="Due Date" onClick={openDueDateModel} />
        <Button
          svg={<Priority width={24} height={24} fill="white" />}
          name="Priority"
          onClick={openPriorityModel}
        />
        {isDueDateModelOpen && <ModelDueDate />}
        {isPriorityModelOpen && <ModelPriority />}
      </div>

      <div className="flex w-full items-center justify-end gap-2 self-end border-t-[1px] border-gray-800 pt-3">
        <CustomButton
          styles="section-button bg-slate-800 hover:bg-slate-900"
          onClick={closeModel}
          buttonName="Cancel"
        />
        <CustomButton
          styles="section-button bg-primary hover:bg-red-600"
          buttonName="Add task"
        />
      </div>
    </div>
  );
}

export default memo(ModelAddTask);

function Button({ svg, name, onClick }) {
  return (
    <button
      className="flex w-fit items-center gap-1 rounded-[5px] border-[1px] border-gray-500 px-[5px] py-[1.5px] text-xs hover:bg-gray-500"
      onClick={onClick}
    >
      {svg}
      <span>{name}</span>
    </button>
  );
}
