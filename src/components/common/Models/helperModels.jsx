import { NextWeek, NextWeekend, Today, Tomorrow } from '../../../constants/svg';

{
  /* ModelAddTask [Start] */
}

export function closeTaskModelOpen(setIsTaskModelOpen) {
  setIsTaskModelOpen(false);
}

export function closeProjectSelectModelOpen(setIsProjectModelOpen) {
  setIsProjectModelOpen(false);
}

export function closePriorityModel(setPriorityModelOpen) {
  setPriorityModelOpen(false);
}

export function closeDueDateModel(setIsDueDateModelOpen) {
  setIsDueDateModelOpen(false);
}

export function closeModels(
  setIsDueDateModelOpen,
  setPriorityModelOpen,
  setIsProjectModelOpen
) {
  closeDueDateModel(setIsDueDateModelOpen);
  closePriorityModel(setPriorityModelOpen);
  closeProjectSelectModelOpen(setIsProjectModelOpen);
}

export function openDueDateModel(
  e,
  setIsDueDateModelOpen,
  setPriorityModelOpen,
  setIsProjectModelOpen
) {
  e.stopPropagation();
  setIsDueDateModelOpen(true);
  closePriorityModel(setPriorityModelOpen);
  closeProjectSelectModelOpen(setIsProjectModelOpen);
}

export function openPriorityModel(
  e,
  setPriorityModelOpen,
  setIsDueDateModelOpen
) {
  e.stopPropagation();
  closeDueDateModel(setIsDueDateModelOpen);
  setPriorityModelOpen(true);
}

export function openProjectSelectModelOpen(
  e,
  setIsProjectModelOpen,
  setPriorityModelOpen,
  setIsDueDateModelOpen
) {
  e.stopPropagation();
  setIsProjectModelOpen(true);
  closeDueDateModel(setIsDueDateModelOpen);
  closePriorityModel(setPriorityModelOpen);
}
{
  /* ModelAddTask [End] */
}

/* ModelDueDate [Start] */

export function getDate(timeStamp) {
  const day = [
    { day: 'Sunday', color: 'yellow' },
    { day: 'Monday', color: 'green' },
    { day: 'Tuesday', color: 'yellow' },
    { day: 'Wednesday', color: 'yellow' },
    { day: 'Thursday', color: 'yellow' },
    { day: 'Friday', color: 'yellow' },
    { day: 'Saturday', color: 'purple' },
  ];

  const today = new Date(timeStamp);
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const tomorrow = new Date(timeStamp + 86400000);
  const tomorrow_date = tomorrow.getDate();
  const tomorrow_month = tomorrow.getMonth() + 1;
  const tomorrow_year = tomorrow.getFullYear();

  const number = 7 - (today.getDay() + 1);
  const weekend = new Date(timeStamp + 1000 * 60 * 60 * 24 * number);
  const weekend_date = weekend.getDate();
  const weekend_month = weekend.getMonth() + 1;
  const weekend_year = weekend.getFullYear();

  const next_week_number = 7 - today.getDay() + 1;
  const next_week = new Date(
    timeStamp + 1000 * 60 * 60 * 24 * next_week_number
  );
  const next_date = next_week.getDate();
  const next_month = next_week.getMonth() + 1;
  const next_year = next_week.getFullYear();

  return {
    currentDate: {
      date: `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`,
      day: day[today.getDay()],
    },
    tomorrowDate: {
      date: `${tomorrow_year}-${tomorrow_month < 10 ? '0' + tomorrow_month : tomorrow_month}-${tomorrow_date < 10 ? '0' + tomorrow_date : tomorrow_date}`,
      day: day[tomorrow.getDay()],
    },
    weekend: {
      date: `${weekend_year}-${weekend_month < 10 ? '0' + weekend_month : weekend_month}-${weekend_date < 10 ? '0' + weekend_date : weekend_date}`,
      day: day[weekend.getDay()],
    },
    next_week: {
      date: `${next_year}-${next_month < 10 ? '0' + next_month : next_month}-${next_date < 10 ? '0' + next_date : next_date}`,
      day: day[next_week.getDay()],
    },
  };

  // return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
}

export const getTimeStamp = (dateStr) => {
  console.log("dateStr", dateStr);
  const dateRev = dateStr.date.split('-').reverse().join('-');

  const date = new Date(`${dateRev}T00:00:00Z`);

  const timestamp = date.getTime();

  const unixTimestamp = Math.floor(timestamp / 1000);

  return unixTimestamp;
};

export const dateButton = [
  {
    id: 'today',
    title: 'Today',
    svg: <Today />,
    day: getDate(Date.now()).currentDate.day.day,
    date: getDate(Date.now()).currentDate.date,
    color: 'rgba(8, 171, 64, 0.7)',
  },
  {
    id: 'tomorrow',
    title: 'Tomorrow',
    svg: <Tomorrow />,
    day: getDate(Date.now()).tomorrowDate.day.day,
    date: getDate(Date.now()).tomorrowDate.date,
    color: 'rgba(216, 158, 12, 0.71)'
  },
  {
    title: 'Next Weekend',
    svg: <NextWeekend />,
    day: getDate(Date.now()).weekend.day.day,
    date: getDate(Date.now()).weekend.date,
    color: 'rgba(12, 36, 216, 0.71)',
  },
  {
    title: 'Next Week',
    svg: <NextWeek />,
    day: getDate(Date.now()).next_week.day.day,
    date: getDate(Date.now()).next_week.date,
    color: 'rgba(111, 28, 224, 0.71)',
  },
];

/* ModelDueDate [End] */
