import { memo } from "react"
import CustomButton from "../CustomButton";

function ModelAddSection({ setIsSectionModelOpen }) {
  function closeModel() {
    setIsSectionModelOpen(false)
  }
  return (
    <div className="w-full m-8">
      <input type="text" placeholder="Name this section" className="w-full p-1 border-[1px] border-gray-800 rounded-md bg-dark outline-0 placeholder:font-semibold text-base" />
      <div className='w-full border-gray-800 flex items-center gap-2 pt-3'>
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
  )
}

export default memo(ModelAddSection);