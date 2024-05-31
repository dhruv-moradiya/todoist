import { DueDate, Priority } from '../../constants/svg';

function ModelAddTask() {
  return (
    <div className="flex w-[700px] flex-col gap-2 border-[1px] border-gray-800 rounded-md py-3 px-4">
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
      <div className='flex items-center gap-2'>
        <Button svg={<DueDate />} name="Due Date" />
        <Button svg={<Priority />} name="Priority" />
      </div>

      <div className='self-end w-full border-t-[1px] border-gray-800 flex justify-end items-center gap-2 pt-3'>
        <button className='rounded bg-slate-800 hover:bg-slate-900 duration-150 text-xs font-semibold py-1 px-3'>Cancel</button>
        <button className='rounded bg-primary hover:bg-red-600 duration-150 text-xs font-semibold py-1 px-3'>Add task</button>
      </div>
    </div>
  );
}

export default ModelAddTask;

function Button({ svg, name }) {
  return (
    <button className="flex w-fit items-center gap-1 rounded-[5px] border-[1px] border-gray-500 px-[5px] py-[1.5px] text-xs hover:bg-gray-500">
      {svg}
      <span>{name}</span>
    </button>
  );
}