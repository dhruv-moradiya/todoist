import { priorityButtons } from '../../../constants/constants';
import { Priority, Check } from '../../../constants/svg';

function ModelPriority({ priority, setPriority, setPriorityModelOpen }) {
  function handleClick(e, item) {
    e.stopPropagation()
    setPriorityModelOpen(false)

    setPriority(item)
  }
  return (
    <ul className="absolute left-16 top-full z-20 flex w-[140px] flex-col items-center rounded bg-light-dark px-2 py-1">
      {priorityButtons.map((item, index) => {
        return (
          <li key={index} className="w-full rounded px-1 py-1 hover:bg-dark">
            <button
              className="flex w-full items-center justify-between gap-2 text-[13.5px] font-semibold"
              onClick={(e) => handleClick(e, item)}
            >
              <div>
                <Priority width={24} height={24} fill={item.color} />
              </div>
              <div>{item.title}</div>
              <div className="text-primary">
                <Check />
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ModelPriority;
