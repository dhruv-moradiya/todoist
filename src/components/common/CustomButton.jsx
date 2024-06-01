import { memo } from "react"


function CustomButton({ styles, onClick, buttonName }) {
  return (
    <div className={`rounded duration-150 text-xs font-semibold py-1 px-3 cursor-pointer ${styles} `} onClick={onClick}>
      {buttonName}
    </div >
  )
}

export default memo(CustomButton);