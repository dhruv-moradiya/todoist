import { memo } from "react"


function CustomButton({ styles, onClick, buttonName }) {
  console.log("styles", styles)
  return (
    <div className={`${styles}`} onClick={onClick}>
      {buttonName}
    </div >
  )
}

export default memo(CustomButton);