import { memo, useState } from 'react';
import { dateButton, getDate } from './helperModels';

function ModelDueDate({ setIsDueDateModelOpen, setDueDate }) {
  const [selectedDate, setSelectedDate] = useState(
    getDate(Date.now()).currentDate.date
  );

  function handleClick(e, date, color) {
    e.stopPropagation();

    if (e.target.name === 'selectedDate') {
      const dueDateArray = e.target.value.split('-');
      setSelectedDate();
      setDueDate({ date: `${dueDateArray[2]}-${dueDateArray[1]}-${dueDateArray[0]}`, color });
      setIsDueDateModelOpen(false);
    } else {
      const dueDateArray = date.split('-');
      setDueDate({ date: `${dueDateArray[2]}-${dueDateArray[1]}-${dueDateArray[0]}`, color });
      setIsDueDateModelOpen(false);
    }
  }

  return (
    <div className="absolute top-full z-20 flex w-[250px] flex-col gap-2 rounded-md bg-light-dark px-2 py-3">
      <input
        type="date"
        className="w-full bg-light-dark pl-1 text-base"
        name="selectedDate"
        value={selectedDate}
        min={getDate(Date.now()).currentDate.date}
        max="2999-12-31"
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => handleClick(e)}
      />
      <div className="flex w-full flex-col gap-1 text-[13px]">
        {dateButton.map((item, index) => {
          return (
            <button
              key={index}
              name="button"
              type="button"
              className="flex w-full items-center gap-1 rounded p-1 pr-2 hover:bg-dark"
              onClick={(e) => handleClick(e, item.date, item.color)}
            >
              <div style={{ color: item.color }}>{item.svg}</div>
              <p className="grow text-start font-bold">{item.title}</p>
              <p>
                {item.day}-{item.date.split('-')[2]}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default memo(ModelDueDate);
