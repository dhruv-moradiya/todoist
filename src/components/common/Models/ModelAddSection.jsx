import { memo } from 'react';
import CustomButton from '../CustomButton';

function ModelAddSection({ setIsSectionModelOpen }) {
  function closeModel() {
    setIsSectionModelOpen(false);
  }
  return (
    <div className="m-8 w-full">
      <input
        type="text"
        placeholder="Name this section"
        className="w-full rounded-md border-[1px] border-gray-800 bg-dark p-1 text-base outline-0 placeholder:font-semibold"
      />
      <div className="flex w-full items-center gap-2 border-gray-800 pt-3">
        <CustomButton
          styles="section-button bg-primary hover:bg-red-600"
          buttonName="Add Section"
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
