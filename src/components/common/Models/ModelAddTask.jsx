import { memo, useState } from 'react';
import { ArrowDown, DueDate, Inbox, Priority } from '../../../constants/svg';
import CustomButton from '../CustomButton';
import ModelPriority from './ModelPriority';
import ModelProjectSelect from './ModelProjectSelect';
import ModelDueDate from './ModelDueDate';
import {
  closeModels,
  closeTaskModelOpen,
  openDueDateModel,
  openPriorityModel,
  openProjectSelectModelOpen,
} from './helperModels';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/thunk';

function ModelAddTask({ setIsTaskModelOpen, addTaskModelRef }) {
  const [isDueDateModelOpen, setIsDueDateModelOpen] = useState(false);
  const [isPriorityModelOpen, setPriorityModelOpen] = useState(false);
  const [isProjectModelOpen, setIsProjectModelOpen] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState(null);
  const [projectPath, setProjectPath] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()

  function handleAddTodo() {
    dispatch(addTodo())
  }

  return (
    <div
      ref={addTaskModelRef}
      className="flex w-full flex-col gap-2 rounded-md border-[1px] border-gray-800 px-4 py-3"
      onClick={() =>
        closeModels(
          setIsDueDateModelOpen,
          setPriorityModelOpen,
          setIsProjectModelOpen
        )
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        {dueDate && (
          <p className="rounded-md bg-light-primary px-2 py-1 text-xs">
            {dueDate}
          </p>
        )}
        {priority && (
          <p className="flex items-center gap-1 rounded-md border-[1px] border-gray-700 px-2 py-1 text-xs">
            <Priority width={16} height={16} fill={priority.color} />
            {priority.title}
          </p>
        )}
        {projectPath && (
          <p className="flex items-center gap-1 rounded-md border-[1px] border-gray-700 px-2 py-1 text-xs">
            <span className="text-xl">#</span>
            <span> {projectPath}</span>
          </p>
        )}
      </div>
      <input
        type="text"
        placeholder="Task name"
        className="border-none bg-dark outline-0 placeholder:text-base placeholder:font-semibold"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="border-none bg-dark text-[13.5px] outline-0 placeholder:text-xs placeholder:font-semibold"
        rows={1}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="relative flex items-center gap-2">
        <Button
          svg={<DueDate />}
          name="Due Date"
          onClick={(e) =>
            openDueDateModel(
              e,
              setIsDueDateModelOpen,
              setPriorityModelOpen,
              setIsProjectModelOpen
            )
          }
        />
        <Button
          svg={<Priority width={24} height={24} fill="white" />}
          name="Priority"
          onClick={(e) =>
            openPriorityModel(e, setPriorityModelOpen, setIsDueDateModelOpen)
          }
        />
        {isDueDateModelOpen && (
          <ModelDueDate
            setIsDueDateModelOpen={setIsDueDateModelOpen}
            dueDate={dueDate}
            setDueDate={setDueDate}
          />
        )}
        {isPriorityModelOpen && (
          <ModelPriority
            setPriorityModelOpen={setPriorityModelOpen}
            priority={priority}
            setPriority={setPriority}
          />
        )}
      </div>

      <div className="relative flex w-full items-center justify-between gap-2 self-end border-t-[1px] border-gray-800 pt-3">
        <CustomButton
          styles="section-button flex items-center gap-1 duration-150 hover:bg-light-dark"
          onClick={(e) =>
            openProjectSelectModelOpen(
              e,
              setIsProjectModelOpen,
              setPriorityModelOpen,
              setIsDueDateModelOpen
            )
          }
          buttonName={
            <>
              <Inbox />
              <span>Inbox</span>
              <ArrowDown />
            </>
          }
        />
        {isProjectModelOpen && (
          <ModelProjectSelect
            setIsProjectModelOpen={setIsProjectModelOpen}
            projectPath={projectPath}
            setProjectPath={setProjectPath}
          />
        )}
        <div className="flex items-center gap-3">
          <CustomButton
            styles="section-button bg-slate-800 hover:bg-slate-900"
            onClick={() => closeTaskModelOpen(setIsTaskModelOpen)}
            buttonName="Cancel"
          />
          <CustomButton
            styles="section-button bg-primary hover:bg-red-600"
            buttonName="Add task"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(ModelAddTask);

function Button({ svg, name, onClick }) {
  return (
    <button
      className="flex w-fit items-center gap-1 rounded-[5px] border-[1px] border-gray-500 px-[5px] py-[1.5px] text-xs hover:bg-gray-700"
      onClick={onClick}
    >
      {svg}
      <span>{name}</span>
    </button>
  );
}
