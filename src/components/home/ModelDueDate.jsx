import { memo } from 'react';
import { NextWeek, NextWeekend, Today, Tomorrow } from '../../constants/svg';

function ModelDueDate() {
  const dateButton = [
    {
      id: 'today',
      title: 'Today',
      svg: <Today />,
      day: 'Fri',
      color: 'text-green-600',
    },
    {
      id: 'tomorrow',
      title: 'Tomorrow',
      svg: <Tomorrow />,
      day: 'Fri',
      color: 'text-orange-600',
    },
    {
      title: 'Next Weekend',
      svg: <NextWeekend />,
      day: 'Fri',
      color: 'text-blue-600',
    },
    {
      title: 'Next Week',
      svg: <NextWeek />,
      day: 'Fri',
      color: 'text-purple-600',
    },
  ];

  function getDate() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
  }

  return (
    <div className="flex w-[250px] flex-col gap-2 rounded-md bg-light-dark px-2 py-3 absolute top-full">
      <input
        type="date"
        className="bg-light-dark pl-1 text-base"
        value={getDate()}
        min={getDate()}
        max="2999-12-31"
      />
      <div className="flex w-full flex-col gap-1 text-[13px]">
        {dateButton.map((item, index) => {
          return (
            <button
              key={index}
              className="flex gap-1 w-full items-center rounded p-1 pr-2 hover:bg-dark"
            >
              <div className={`${item.color} `}>{item.svg}</div>
              <p className="grow text-start font-bold">{item.title}</p>
              <p>{item.day}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default memo(ModelDueDate);
