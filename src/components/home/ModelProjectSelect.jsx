import { memo } from 'react';
import { Check, HashTag, Inbox, Section } from '../../constants/svg';

function ModelProjectSelect() {
  const section = [
    {
      project_name: 'Home',
      section_name: ['Routines', 'Inspiration'],
    },
    {
      project_name: 'Education',
      section_name: ['Routines', 'Exam'],
    },
  ];
  return (
    <div className="text-[13px] flex flex-col bg-light-dark rounded p-2 w-[280px]">
      <button className='flex items-center gap-2 p-1 hover:bg-dark rounded'>
        <span>
          <Inbox />
        </span>
        <span>Inbox</span>
        <span className=''><Check /></span>
      </button>
      <h3 className='font-semibold my-2'>My Projects</h3>
      <div>
        {section.map((item, index) => {
          return (
            <div key={item + index} className='flex flex-col gap-1 pr-4'>
              <h3 className='flex items-center gap-2'>
                <span><HashTag /></span>
                <span>{item.project_name}</span>
              </h3>
              {item.section_name.map((section, index) => {
                return (
                  <button className='w-full p-1 ml-3 flex items-center gap-2 font-semibold hover:bg-dark rounded'>
                    <div className='grow flex items-center gap-3'>
                      <span><Section /></span>
                      <p key={section + index} className=''>{section}</p>
                    </div>
                    <span className=''><Check /></span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(ModelProjectSelect);
