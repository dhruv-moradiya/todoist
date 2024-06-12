import { memo, useState } from 'react';
import CustomButton from '../CustomButton';
import { useDispatch } from 'react-redux';
import { addSection } from '../../../redux/todoSlice';

function ModelAddSection({ setIsSectionModelOpen }) {
  const dispatch = useDispatch();
  const [section, setSection] = useState('');
  const [error, setError] = useState(null);

  function closeModel() {
    setIsSectionModelOpen(false);
  }

  function addSection() {
    if (!section) {
      setError('Please add section name.');
    } else {
      dispatch(addSection(section));
      setSection('');
      setError('');
    }
  }

  return (
    <div className="m-8 w-full">
      <input
        type="text"
        placeholder="Name this section"
        className="w-full rounded-md border-[1px] border-gray-800 bg-dark p-1 text-base outline-0 placeholder:font-semibold"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      />
      {error && <p className="text-xs font-semibold text-primary">{error}</p>}
      <div className="flex w-full items-center gap-2 border-gray-800 pt-3">
        <CustomButton
          styles="section-button bg-primary hover:bg-red-600"
          buttonName="Add Section"
          onClick={addSection}
        />
        <CustomButton
          styles="section-button border-1 bg-slate-800 hover:bg-slate-900"
          onClick={closeModel}
          buttonName="Cancel"
        />
      </div>
    </div>
  );
}

export default memo(ModelAddSection);
