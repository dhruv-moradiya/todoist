import { priorityButtons } from '../../constants/constants';
import { Priority, Check } from '../../constants/svg';

function ModelPriority() {
  return (
    <ul className="flex w-[140px] flex-col items-center rounded bg-light-dark px-2 py-1 absolute top-full left-16">
      {priorityButtons.map((item, index) => {
        return (
          <li key={index} className="w-full rounded px-1 py-1 hover:bg-dark">
            <button className="w-full flex gap-2 justify-between items-center text-[13.5px] font-semibold">
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
