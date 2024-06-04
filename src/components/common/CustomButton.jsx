import { memo } from 'react';

function CustomButton({ styles, onClick, buttonName }) {
  return (
    <button className={`${styles}`} onClick={onClick}>
      {buttonName}
    </button>
  );
}

export default memo(CustomButton);
