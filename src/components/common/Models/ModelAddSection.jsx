import { memo, useState } from 'react';
import CustomButton from '../CustomButton';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSection } from '../../../redux/section/sectionThunk';

function ModelAddSection({ setIsSectionModelOpen, project_id: id }) {
  const dispatch = useDispatch();
  const [section, setSection] = useState('');
  const [error, setError] = useState(null);

  function closeModel() {
    setIsSectionModelOpen(false);
  }

  function addSectionToFireBase() {
    if (!section) {
      setError('Please add section name.');
    } else {
      dispatch(
        addSection({ project_id: id ? id : 'inbox', section_name: section })
      );
      setSection('');
      setIsSectionModelOpen(false);
    }
  }

  return (
    <div className="m-2 w-full">
      <input
        type="text"
        placeholder="Name of the section"
        className="w-full rounded-md border-[1px] border-gray-800 bg-dark p-1 text-base outline-0"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      />
      {error && <p className="text-xs font-semibold text-primary">{error}</p>}
      <div className="flex w-full items-center gap-2 border-gray-800 pt-3">
        <CustomButton
          styles="section-button bg-primary hover:bg-red-600"
          buttonName="Add Section"
          onClick={addSectionToFireBase}
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
