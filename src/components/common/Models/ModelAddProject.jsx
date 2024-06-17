import CustomButton from '../CustomButton';
import { useDispatch } from 'react-redux';
// import { addProject } from '../../../redux/thunk';
import { useState } from 'react';
import { addProject } from '../../../redux/project/projectThunk';

function ModelAddProject({ setAddProjectModelOpen }) {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  async function handleClick() {
    // dispatch(addProject(inputValue));
    dispatch(addProject(inputValue));
    setAddProjectModelOpen(false);
  }

  return (
    <div className="absolute left-5 top-1/2 z-20 w-[200px] rounded-md bg-light-dark px-3 py-4 shadow-white  sm:top-1/2">
      <input
        type="text"
        placeholder="Project name...."
        className="w-full rounded-md border-[1px] border-gray-800 bg-dark p-1 text-base outline-0 placeholder:font-semibold"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex w-full items-center justify-center gap-2 border-gray-800 pt-3">
        <CustomButton
          styles="section-button bg-primary hover:bg-red-600"
          buttonName="Add"
          onClick={() => handleClick()}
        />
        <CustomButton
          styles="section-button border-1 bg-slate-800 hover:bg-slate-900"
          buttonName="Cancel"
          onClick={() => setAddProjectModelOpen(false)}
        />
      </div>
    </div>
  );
}

export default ModelAddProject;
